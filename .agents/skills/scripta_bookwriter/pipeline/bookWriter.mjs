import { blockToObject, replaceReferences, buildReferenceReplacements, normalizeReferenceValue } from '../core/cnl.mjs';
import { ensureWorkspace, listLatestStageArtifacts, readStructuredMarkdown, readText, registerStageRun } from '../core/workspace.mjs';
import { readLatestBlocksByBase } from './loaders.mjs';
import { normalizePipelineOptions } from './options.mjs';
import { renderBookHtml, renderPlainManuscript } from './editionRenderer.mjs';
import { writeStageArtifact, writeStageDataArtifact } from './exportArtifacts.mjs';
import {
  buildChapterDisplayTitle,
  buildCoverPalette,
  getLanguagePack,
  getProfileFlavor,
  isBuiltInBookLanguage,
  localizeBookText,
  localizeProfileLabel,
  localizeScenarioTitle,
  localizeWorkForm
} from './bookWriterLanguage.mjs';

export async function runBookWriter(input = {}) {
  const options = normalizePipelineOptions(input);
  await ensureWorkspace(options.workspaceRoot);

  const draftArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'drafts', 'draft');
  const chapterArtifacts = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'chapter-refined-plan');
  const microArtifacts = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'micro-refined-plan');
  const macroArtifacts = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'macro-refined-plan');
  const validationArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'validation', 'summary');

  if (draftArtifacts.length === 0) {
    throw new Error(`No chapter drafts were found in ${options.workspaceRoot}. Run "scripta chapgen" first.`);
  }

  if (chapterArtifacts.length === 0 || microArtifacts.length === 0 || macroArtifacts.length === 0) {
    throw new Error(`BookWriter requires refined macro, chapter, and micro plans in ${options.workspaceRoot}.`);
  }

  const draftTexts = await Promise.all(draftArtifacts.map((artifact) => readText(artifact.filePath)));
  const validationSummary = validationArtifacts.length > 0 ? await readStructuredMarkdown(validationArtifacts[0].filePath, null) : null;

  const manuscriptModel = buildManuscriptModel({
    options,
    draftArtifacts,
    draftTexts,
    chapterArtifacts,
    microArtifacts,
    macroArtifacts,
    validationSummary
  });

  const produced = [];
  const consumed = [
    ...draftArtifacts.map((artifact) => artifact.relativePath),
    ...chapterArtifacts.map((entry) => entry.artifact.relativePath),
    ...microArtifacts.map((entry) => entry.artifact.relativePath),
    ...macroArtifacts.map((entry) => entry.artifact.relativePath)
  ];

  const sourceEdition = buildLocalizedEditionFromModel(manuscriptModel, {
    requestedLanguage: options.sourceLanguage
  });
  const manuscriptArtifact = await writeStageArtifact({
    workspaceRoot: options.workspaceRoot,
    stage: 'exports',
    baseName: 'manuscript',
    label: 'book',
    content: renderPlainManuscript(sourceEdition)
  });
  produced.push(manuscriptArtifact);

  const sourceArtifact = await writeStageArtifact({
    workspaceRoot: options.workspaceRoot,
    stage: 'exports',
    baseName: `edition-${sourceEdition.contentLanguage}`,
    label: 'reader',
    content: renderBookHtml(sourceEdition),
    extension: '.html'
  });
  produced.push(sourceArtifact);

  const translationSourceArtifact = await writeStageDataArtifact({
    workspaceRoot: options.workspaceRoot,
    stage: 'exports',
    baseName: 'translation-source',
    label: 'bundle',
    value: {
      bookId: options.bookId,
      baselineProfile: options.baselineProfile,
      sourceLanguage: sourceEdition.contentLanguage,
      requestedTargetLanguages: options.targetLanguages,
      translationInstructions: options.translationInstructions,
      sourceArtifactPath: sourceArtifact.relativePath,
      sourceEdition,
      translationModel: manuscriptModel
    },
    title: 'Translation source bundle',
    lead: 'Canonical source-edition payload used by the translation stage.'
  });
  produced.push(translationSourceArtifact);

  const summaryArtifact = await writeStageDataArtifact({
    workspaceRoot: options.workspaceRoot,
    stage: 'exports',
    baseName: 'editions',
    label: 'bundle',
    value: {
      bookId: options.bookId,
      baselineProfile: options.baselineProfile,
      sourceLanguage: sourceEdition.contentLanguage,
      targetLanguages: options.targetLanguages,
      editorialProfile: options.editorialProfile,
      chapterCount: manuscriptModel.chapters.length,
      editions: [
        {
          targetLanguage: sourceEdition.requestedLanguage,
          contentLanguage: sourceEdition.contentLanguage,
          mode: sourceEdition.mode,
          translationInstruction: sourceEdition.translationInstruction,
          exportPath: sourceArtifact.relativePath
        }
      ],
      pendingTranslations: options.targetLanguages.filter((languageCode) => languageCode !== sourceEdition.contentLanguage),
      validationSnapshot: validationSummary?.metrics ?? null,
      sourceArtifacts: consumed
    },
    title: 'Source editions bundle',
    lead: 'Source-side export summary recorded before the translation stage.'
  });
  produced.push(summaryArtifact);

  await registerStageRun({
    workspaceRoot: options.workspaceRoot,
    stage: 'exports',
    consumed,
    produced,
    context: {
      book: {
        bookId: options.bookId,
        baselineProfile: options.baselineProfile
      }
    }
  });

  return {
    options,
    artifacts: produced
  };
}

function buildManuscriptModel({
  options,
  draftArtifacts,
  draftTexts,
  chapterArtifacts,
  microArtifacts,
  macroArtifacts,
  validationSummary
}) {
  const draftMap = new Map(draftArtifacts.map((artifact, index) => [artifact.baseName, draftTexts[index]]));
  const macroBlocks = macroArtifacts.flatMap((entry) => entry.blocks);
  const allBlocks = [
    ...macroBlocks,
    ...chapterArtifacts.flatMap((entry) => entry.blocks),
    ...microArtifacts.flatMap((entry) => entry.blocks)
  ];
  const referenceReplacements = buildReferenceReplacements(allBlocks);
  const resolveText = (value) => replaceReferences(String(value ?? ''), referenceReplacements);
  const centralIdea = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'central-idea', 'define')), resolveText);
  const theme = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'theme', 'define')), resolveText);
  const wisdom = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'wisdom', 'define')), resolveText);
  const blueprint = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'blueprint', 'map')), resolveText);
  const bookArc = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'arc-book-main', 'map')), resolveText);
  const protagonistArc = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'arc-protagonist-main', 'map')), resolveText);
  const relationshipArc = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'arc-relationship-main', 'map')), resolveText);
  const motif = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'motif-primary', 'define')), resolveText);
  const worldRule = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'world-rule-primary', 'define')), resolveText);
  const secondaryWorldRule = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'world-rule-secondary', 'define')), resolveText);
  const worldReveal = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'world-reveal-strategy', 'define')), resolveText);
  const primaryLocation = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'location-primary', 'define')), resolveText);
  const secondaryLocation = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'location-secondary', 'define')), resolveText);
  const plotElement = resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'plot-element-core-object', 'define')), resolveText);
  const characterBlocks = macroBlocks.filter((block) => block.identifier.startsWith('character-') && block.verb === 'define');
  const locationBlocks = macroBlocks.filter((block) => block.identifier.startsWith('location-') && block.verb === 'define');
  const objectBlocks = macroBlocks.filter((block) => block.identifier.startsWith('plot-element-') && block.verb === 'define');
  const characters = {
    protagonist: resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'character-protagonist-001', 'define')), resolveText),
    counterpart: resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'character-counterpart-001', 'define')), resolveText),
    pressure: resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'character-pressure-001', 'define')), resolveText),
    supporting: characterBlocks
      .filter((block) => !['character-protagonist-001', 'character-counterpart-001', 'character-pressure-001'].includes(block.identifier))
      .map((block) => ({ id: block.identifier, ...resolveObjectTexts(blockToObject(block), resolveText) }))
  };
  const supportingLocations = locationBlocks
    .filter((block) => !['location-primary', 'location-secondary'].includes(block.identifier))
    .map((block) => ({ id: block.identifier, ...resolveObjectTexts(blockToObject(block), resolveText) }));
  const specialObjects = objectBlocks
    .filter((block) => block.identifier !== 'plot-element-core-object')
    .map((block) => ({ id: block.identifier, ...resolveObjectTexts(blockToObject(block), resolveText) }));

  const chapters = chapterArtifacts.map((chapterEntry) => {
    const microEntry = microArtifacts.find((candidate) => candidate.artifact.baseName === chapterEntry.artifact.baseName);
    if (!microEntry) {
      throw new Error(`BookWriter could not find a refined micro plan for ${chapterEntry.artifact.baseName}.`);
    }

    const chapterBlock = findRequiredBlock(chapterEntry.blocks, chapterEntry.artifact.baseName, 'define');
    const chapter = resolveObjectTexts(blockToObject(chapterBlock), resolveText);
    const sequenceBlock = microEntry.blocks.find((block) => block.identifier.startsWith('sequence-') && block.verb === 'define');
    const dialogueBlock = microEntry.blocks.find((block) => block.identifier.startsWith('dialogue-') && block.verb === 'apply');
    const rawDialogueTurns = microEntry.blocks
      .filter((block) => block.identifier.startsWith('dialogue-turn-') && block.verb === 'line')
      .map((block) => blockToObject(block));
    const monologueBlock = microEntry.blocks.find((block) => block.identifier.startsWith('interior-monologue-') && block.verb === 'apply');
    const suspenseBlock = microEntry.blocks.find((block) => block.identifier.startsWith('suspense-') && block.verb === 'build');
    const locationBlock = microEntry.blocks.find((block) => block.identifier.startsWith('location-') && block.verb === 'define');
    const rulePressureBlock = microEntry.blocks.find((block) => block.identifier.startsWith('rule-pressure-') && block.verb === 'apply');
    const protagonistArcBlock = microEntry.blocks.find((block) => block.identifier.startsWith('arc-') && block.identifier.endsWith('-protagonist') && block.verb === 'map');
    const relationshipArcBlock = microEntry.blocks.find((block) => block.identifier.startsWith('arc-') && block.identifier.endsWith('-relationship') && block.verb === 'map');
    const pauseBlock = microEntry.blocks.find((block) => block.identifier.startsWith('pause-') && block.verb === 'hold');
    const accelerationBlock = microEntry.blocks.find((block) => block.identifier.startsWith('acceleration-') && block.verb === 'burst');
    const alternationBlock = microEntry.blocks.find((block) => block.identifier.startsWith('alternation-') && block.verb === 'arrange');
    const scenes = microEntry.blocks
      .filter((block) => block.identifier.startsWith('scene-') && block.verb === 'define')
      .map((sceneBlock) => {
        const scene = resolveObjectTexts(blockToObject(sceneBlock), resolveText);
        const actionBlock = microEntry.blocks.find((block) => block.identifier.startsWith('action-') && normalizeReferenceValue(field(block, 'scene')) === sceneBlock.identifier);
        const eventBlock = microEntry.blocks.find((block) => block.identifier.startsWith('event-') && normalizeReferenceValue(field(block, 'scope')) === sceneBlock.identifier);
        const conflictBlock = microEntry.blocks.find((block) => block.identifier.startsWith('conflict-') && normalizeReferenceValue(field(block, 'scope')) === sceneBlock.identifier);
        const sceneDialogueTurns = rawDialogueTurns
          .filter((turn) => normalizeReferenceValue(turn.scene) === sceneBlock.identifier)
          .map((turn) => resolveObjectTexts(turn, resolveText));
        return {
          ...scene,
          participants: splitCsv(scene.participants),
          action: resolveObjectTexts(blockToObject(actionBlock ?? emptyBlock()), resolveText),
          event: resolveObjectTexts(blockToObject(eventBlock ?? emptyBlock()), resolveText),
          conflictPacket: resolveObjectTexts(blockToObject(conflictBlock ?? emptyBlock()), resolveText),
          dialogueTurns: sceneDialogueTurns
        };
      });

    return {
      id: chapterEntry.artifact.baseName,
      number: Number(chapterEntry.artifact.baseName.split('-').at(-1)),
      role: chapter['chapter-role'],
      outputState: chapter['output-state'],
      closingMode: chapter['closing-mode'],
      thematicFocus: chapter['thematic-focus'],
      chapterQuestion: chapter['chapter-question'],
      answerShift: chapter['answer-shift'],
      worldPressure: chapter['world-pressure'],
      blockAlternation: chapter['block-alternation'],
      sequence: resolveObjectTexts(blockToObject(sequenceBlock ?? emptyBlock()), resolveText),
      dialogue: resolveObjectTexts(blockToObject(dialogueBlock ?? emptyBlock()), resolveText),
      monologue: resolveObjectTexts(blockToObject(monologueBlock ?? emptyBlock()), resolveText),
      suspense: resolveObjectTexts(blockToObject(suspenseBlock ?? emptyBlock()), resolveText),
      location: resolveObjectTexts(blockToObject(locationBlock ?? emptyBlock()), resolveText),
      rulePressure: resolveObjectTexts(blockToObject(rulePressureBlock ?? emptyBlock()), resolveText),
      protagonistArc: resolveObjectTexts(blockToObject(protagonistArcBlock ?? emptyBlock()), resolveText),
      relationshipArc: resolveObjectTexts(blockToObject(relationshipArcBlock ?? emptyBlock()), resolveText),
      pause: resolveObjectTexts(blockToObject(pauseBlock ?? emptyBlock()), resolveText),
      acceleration: resolveObjectTexts(blockToObject(accelerationBlock ?? emptyBlock()), resolveText),
      alternation: resolveObjectTexts(blockToObject(alternationBlock ?? emptyBlock()), resolveText),
      scenes,
      draftText: draftMap.get(chapterEntry.artifact.baseName) ?? '',
    };
  }).sort((left, right) => left.id.localeCompare(right.id));

  return {
    bookId: options.bookId,
    profileId: options.profile.id,
    profileLabel: options.profile.label,
    workForm: options.workForm,
    dialogueDensity: options.dialogueDensity,
    descriptionDensity: options.descriptionDensity,
    editorialProfile: options.editorialProfile,
    title: options.title,
    centralIdea,
    theme,
    wisdom,
    blueprint,
    bookArc,
    protagonistArc,
    relationshipArc,
    motif,
    plotElement,
    specialObjects,
    worldRule,
    secondaryWorldRule,
    worldReveal,
    primaryLocation,
    secondaryLocation,
    supportingLocations,
    chapters,
    characters,
    validationSummary
  };
}

export function buildLocalizedEditionFromModel(model, {
  requestedLanguage = 'en',
  mode = 'source-renderer',
  translationInstruction = '',
  generatedWith = 'SCRIPTA BookWriter'
} = {}) {
  const contentLanguage = isBuiltInBookLanguage(requestedLanguage) ? requestedLanguage : 'en';
  const languagePack = getLanguagePack(contentLanguage);
  const profileFlavor = getProfileFlavor(model.profileId, contentLanguage);
  const chapters = ensureDistinctChapterTitles(
    model.chapters.map((chapter) => buildEditionChapter(model, chapter, contentLanguage)),
    model,
    contentLanguage
  );

  return {
    requestedLanguage,
    contentLanguage,
    mode,
    translationInstruction,
    languagePack,
    profileFlavor,
    generatedWith,
    title: localizeScenarioTitle(model.title, model.profileId, contentLanguage),
    subtitle: localizeBookText(model.centralIdea['story-question'], contentLanguage),
    premise: localizeBookText(model.blueprint.premise, contentLanguage),
    thematicStatement: localizeBookText(model.theme['thematic-statement'], contentLanguage),
    worldRule: localizeBookText(model.worldRule.rule, contentLanguage),
    bookId: model.bookId,
    profileId: model.profileId,
    workFormId: model.workForm,
    profileLabel: localizeProfileLabel(model.profileId, model.profileLabel, contentLanguage),
    workForm: localizeWorkForm(model.workForm, contentLanguage),
    editorialProfile: model.editorialProfile,
    validationSummary: model.validationSummary?.metrics ?? null,
    chapters,
    coverPalette: buildCoverPalette(model.profileId),
    unsupportedNote: contentLanguage === requestedLanguage
      ? null
      : `Requested source language "${requestedLanguage}" is not available as a built-in source renderer, so BookWriter exported the canonical English source edition instead.`,
    stageSources: {
      macro: ['macro-refined-plan'],
      chapters: ['chapter-refined-plan'],
      micro: ['micro-refined-plan'],
      drafts: ['draft']
    }
  };
}

function buildEditionChapter(model, chapter, languageCode) {
  const profileFlavor = getProfileFlavor(model.profileId, languageCode);
  const firstScene = chapter.scenes[0];
  const lastScene = chapter.scenes.at(-1);
  const paragraphs = [];
  const chapterLocationSignal = localizeBookText(chapter.location['social-signal'] ?? model.primaryLocation['social-signal'] ?? '', languageCode);
  const chapterLocationSymbol = localizeBookText(chapter.location['symbolic-charge'] ?? model.primaryLocation['symbolic-charge'] ?? '', languageCode);
  const finalBelief = localizeBookText(model.protagonistArc['exit-belief'] ?? '', languageCode);
  const finalRelationship = localizeBookText(model.relationshipArc['exit-dynamic'] ?? '', languageCode);
  const uncertainty = sentenceCase(localizeBookText(chapter.suspense.uncertainty ?? '', languageCode));
  const dialogueLimit = dialogueTurnLimit(model.dialogueDensity);

  if (firstScene) {
    pushUniqueParagraph(paragraphs, buildChapterOpeningParagraph({
      chapter,
      firstScene,
      chapterLocationSignal,
      chapterLocationSymbol,
      profileFlavor,
      languageCode
    }));
  }

  chapter.scenes.forEach((scene, index) => {
    pushUniqueParagraph(paragraphs, buildSceneNarrativeParagraph({
      model,
      scene,
      index,
      languageCode
    }));
    pushUniqueParagraph(paragraphs, buildSceneTextureParagraph({
      model,
      chapter,
      scene,
      index,
      languageCode
    }));

    const renderedDialogue = renderEditionDialogue({
      model,
      chapter,
      scene,
      turns: scene.dialogueTurns.slice(0, dialogueLimit),
      languageCode
    });
    if (renderedDialogue) {
      pushUniqueParagraph(paragraphs, renderedDialogue);
    }

    pushUniqueParagraph(paragraphs, buildSceneConsequenceParagraph({
      scene,
      index,
      sceneCount: chapter.scenes.length,
      languageCode
    }));
  });

  pushUniqueParagraph(paragraphs, buildChapterClosingParagraph({
    chapter,
    lastScene,
    outputState: renderOutputState(chapter, languageCode),
    answerShift: localizeBookText(chapter.answerShift ?? '', languageCode),
    chapterQuestion: localizeBookText(chapter.chapterQuestion ?? '', languageCode),
    finalBelief,
    finalRelationship,
    uncertainty,
    isFinalChapter: chapter.number === model.chapters.length,
    languageCode
  }));

  return {
    id: chapter.id,
    number: chapter.number,
    role: chapter.role,
    displayTitle: buildChapterDisplayTitle({
      chapterNumber: String(chapter.number).padStart(2, '0'),
      role: chapter.role,
      languageCode
    }),
    paragraphs
  };
}

function ensureDistinctChapterTitles(chapters, model, languageCode) {
  if (model.chapters.length <= 5) {
    return chapters;
  }

  return chapters.map((chapter, index) => {
    const focus = buildChapterFocusLabel(model.chapters[index], languageCode);
    if (!focus) {
      return chapter;
    }

    return {
      ...chapter,
      displayTitle: `${chapter.displayTitle} / ${focus}`
    };
  });
}

function buildChapterFocusLabel(chapter, languageCode) {
  const candidates = [
    chapter.scenes[0]?.['anchor-object'],
    chapter.scenes[0]?.['time-space'],
    chapter.scenes.at(-1)?.['anchor-object'],
    chapter.scenes.at(-1)?.['time-space']
  ];

  return candidates
    .map((value) => compactFocusLabel(localizeBookText(value ?? '', languageCode), languageCode))
    .find(Boolean) ?? '';
}

function compactFocusLabel(value, languageCode) {
  let text = stripTerminalPunctuation(String(value ?? '').trim())
    .replace(/^(the|a|an)\s+/i, '')
    .replace(/^(o|un)\s+/i, '');

  if (!text) {
    return '';
  }

  const maxWords = languageCode === 'ro' ? 7 : 6;
  const words = text.split(/\s+/);
  if (words.length > maxWords) {
    text = `${words.slice(0, maxWords).join(' ')}...`;
  }

  return sentenceCase(text);
}

function buildChapterOpeningParagraph({ chapter, firstScene, chapterLocationSignal, chapterLocationSymbol, profileFlavor, languageCode }) {
  const location = localizeBookText(firstScene['time-space'], languageCode);
  const placeSignal = stripTerminalPunctuation(sentenceCase(chapterLocationSignal || chapterLocationSymbol));
  const secondary = firstScene.participants[1];
  const pressure = firstScene.participants[2];
  const widenedCast = firstScene.participants.slice(3);
  const variant = chapter.number % 3;

  if (languageCode === 'ro') {
    const openings = [
      `${firstScene.participants[0]} ajunge ${locationPhrase(location, languageCode)}, unde ${profileFlavor.atmosphere}.`,
      `Cand ${firstScene.participants[0]} revine ${locationPhrase(location, languageCode)}, devine limpede ca ${profileFlavor.atmosphere}.`,
      `${locationPhrase(location, languageCode)} ${firstScene.participants[0]} gaseste din nou acel loc in care ${profileFlavor.atmosphere}.`
    ];
    return [
      openings[variant],
      placeSignal ? `${placeSignal}.` : '',
      secondary ? `${secondary} citeste incaperea altfel decat restul, iar ${pressure ?? 'presiunea locului'} lasa in viata exact versiunea de evenimente de care ceilalti ar avea nevoie.` : '',
      widenedCast.length > 0 ? `${formatNameList(widenedCast, languageCode)} ridica imediat costul scenei, astfel incat nimic din ce se petrece aici nu mai poate fi pastrat drept un simplu incident local.` : ''
    ].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
  }

  const openings = [
    `${firstScene.participants[0]} reaches ${location}, where ${profileFlavor.atmosphere}.`,
    `When ${firstScene.participants[0]} returns to ${location}, it becomes obvious that ${profileFlavor.atmosphere}.`,
    `Back in ${location}, ${firstScene.participants[0]} finds the kind of room where ${profileFlavor.atmosphere}.`
  ];
  return [
    openings[variant],
    placeSignal ? `${placeSignal}.` : '',
    secondary ? `${secondary} reads the room differently from everyone else, while ${pressure ?? 'the pressure in the room'} preserves the version of events other people need kept alive.` : '',
    widenedCast.length > 0 ? `${formatNameList(widenedCast, languageCode)} widen the cost at once, so nothing happening here can stay contained inside a single private wound.` : ''
  ].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}

function buildSceneNarrativeParagraph({ model, scene, index, languageCode }) {
  const introduction = normalizeNarrativePhrase(scene.introduction, languageCode);
  const development = normalizeNarrativePhrase(scene.development, languageCode);
  const conflict = normalizeNarrativePhrase(scene.conflict, languageCode);
  const trigger = stripTerminalPunctuation(sentenceCase(localizeBookText(scene.event.trigger ?? model.plotElement.activation ?? '', languageCode)));
  const impact = sentenceCase(localizeBookText(scene.event.impact ?? scene.stateChange ?? '', languageCode));
  const resolution = normalizeNarrativePhrase(scene.resolution, languageCode);
  const lead = sceneTransition(index, languageCode, introduction);

  return languageCode === 'ro'
    ? buildNarrativeParagraph([
      lead,
      development ? `${development}.` : '',
      conflict ? `${conflict}.` : '',
      trigger && impact ? `Cand ${lowerFirst(trigger)}, ${lowerFirst(stripTerminalPunctuation(impact))}.` : '',
      resolution ? `${resolution}.` : ''
    ])
    : buildNarrativeParagraph([
      lead,
      development ? `${development}.` : '',
      conflict ? `${conflict}.` : '',
      trigger && impact ? `When ${lowerFirst(trigger)}, ${lowerFirst(stripTerminalPunctuation(impact))}.` : '',
      resolution ? `${resolution}.` : ''
    ]);
}

function buildSceneTextureParagraph({ model, chapter, scene, index, languageCode }) {
  const location = localizeBookText(scene['time-space'] ?? chapter.location['primary-setting'] ?? model.primaryLocation.name ?? '', languageCode);
  const anchorObject = localizeBookText(scene['anchor-object'] ?? chapter.location['chapter-object'] ?? model.specialObjects[index % Math.max(model.specialObjects.length, 1)]?.name ?? model.plotElement.name ?? '', languageCode);
  const supportFocus = localizeBookText(scene['support-focus'] ?? '', languageCode);
  const sideParticipants = uniqueNames(scene.participants.slice(1));
  const locationProfile = resolveLocationProfile(model, scene['time-space']);
  const sensory = localizeBookText(locationProfile?.sensoryAnchor ?? '', languageCode);
  const socialSignal = localizeBookText(locationProfile?.socialSignal ?? '', languageCode);
  const conflictUse = localizeBookText(locationProfile?.conflictUse ?? '', languageCode);
  const variant = index % 4;

  if (languageCode === 'ro') {
    const variants = [
      [
        location ? `In ${location}, ${sideParticipants.length > 0 ? `${formatNameList(sideParticipants, languageCode)} impiedica scena sa se stranga intr-un duel simplu.` : 'incaperea refuza sa lase conflictul sa para abstract.'}` : '',
        sensory ? `${sentenceCase(sensory)} sta in aer ca o dovada care nu mai poate fi spalata.` : '',
        anchorObject ? `${anchorObject} reapare dintr-o mana in alta si obliga pe toata lumea sa vorbeasca despre ceva material.` : ''
      ],
      [
        socialSignal ? `${sentenceCase(socialSignal)}.` : '',
        location ? `Tocmai de aceea, in ${location}, ${sideParticipants.length > 0 ? `${formatNameList(sideParticipants, languageCode)} se aud ca si cum ar masura fiecare cuvant la gram.` : 'fiecare gest pare deja trecut intr-un registru invizibil.'}` : '',
        supportFocus ? `${supportFocus} schimba discret centrul de greutate al schimbului, fara sa para ca a cerut asta cu voce tare.` : ''
      ],
      [
        anchorObject ? `${anchorObject} nu sta niciodata unde ar trebui sa stea; cand il atinge cineva, presiunea devine imediat vizibila.` : '',
        conflictUse ? `${sentenceCase(conflictUse)}.` : '',
        location ? `La ${location.replace(/^the\s+/i, '')}, nimeni nu mai poate pretinde ca discuta doar o abstractie.` : ''
      ],
      [
        location ? `In ${location}, locul insusi pare sa tina minte cine a mutat primul proba si cine a intarziat deliberat raportul.` : '',
        sensory ? `${sentenceCase(sensory)} face incaperea prea concreta pentru confortul birocratic al celor prezenti.` : '',
        supportFocus ? `${supportFocus} ramane suficient de aproape de miezul scenei incat cine priveste conteaza aproape la fel de mult ca cine vorbeste.` : ''
      ]
    ];
    return buildNarrativeParagraph(variants[variant]);
  }

  const variants = [
    [
      location ? `In ${location}, ${sideParticipants.length > 0 ? `${formatNameList(sideParticipants, languageCode)} keep the scene from flattening into a simple duel.` : 'the room refuses to let the conflict stay abstract.'}` : '',
      sensory ? `${sentenceCase(sensory)} hangs in the air like evidence no one can cleanly reinterpret.` : '',
      anchorObject ? `${anchorObject} keeps changing hands and forces everyone back toward something physical.` : ''
    ],
    [
      socialSignal ? `${sentenceCase(socialSignal)}.` : '',
      location ? `That is why, in ${location}, ${sideParticipants.length > 0 ? `${formatNameList(sideParticipants, languageCode)} sound as if each word might be entered into a report.` : 'every movement already feels pre-recorded.'}` : '',
      supportFocus ? `${supportFocus} subtly moves the center of gravity without ever asking for it outright.` : ''
    ],
    [
      anchorObject ? `${anchorObject} never stays where it should; the moment someone touches it, the pressure becomes visible.` : '',
      conflictUse ? `${sentenceCase(conflictUse)}.` : '',
      location ? `At ${location}, no one can keep pretending the argument is only theoretical.` : ''
    ],
    [
      location ? `In ${location}, the place itself seems to remember who moved the evidence first and who delayed the report on purpose.` : '',
      sensory ? `${sentenceCase(sensory)} makes the room too concrete for bureaucratic comfort.` : '',
      supportFocus ? `${supportFocus} stays close enough to the center that the watcher matters almost as much as the speaker.` : ''
    ]
  ];
  return buildNarrativeParagraph(variants[variant]);
}

function buildSceneConsequenceParagraph({ scene, index, sceneCount, languageCode }) {
  const goal = normalizeNarrativePhrase(scene.action.goal ?? '', languageCode);
  const obstacle = normalizeNarrativePhrase(scene.action.obstacle ?? '', languageCode);
  const stakes = normalizeNarrativePhrase(scene.conflictPacket.stakes ?? '', languageCode);
  const followThrough = normalizeNarrativePhrase(scene.event['follow-through'] ?? '', languageCode);
  const stateChange = normalizeNarrativePhrase(scene['state-change'] ?? '', languageCode);
  const focal = scene.participants[0] ?? (languageCode === 'ro' ? 'protagonistul' : 'the protagonist');
  const isFinalScene = index === sceneCount - 1;
  const variant = isFinalScene ? 'final' : index % 3;

  if (languageCode === 'ro') {
    const variants = {
      0: [
        goal ? `${focal} merge mai departe hotarat sa ${lowerFirst(stripTerminalPunctuation(goal))}, dar ${lowerFirst(stripTerminalPunctuation(obstacle || 'presiunea se adapteaza mai repede decat ar vrea cineva sa recunoasca'))}.` : '',
        stateChange ? `Din punctul acesta, ${lowerFirst(stripTerminalPunctuation(stateChange))}.` : ''
      ],
      1: [
        followThrough ? `${followThrough}.` : '',
        stakes ? `Brusc, conflictul apasa peste ${lowerFirst(stripTerminalPunctuation(stakes))}.` : ''
      ],
      2: [
        goal ? `${focal} nu mai incearca doar sa actioneze; incearca sa obtina timp pentru a ${lowerFirst(stripTerminalPunctuation(goal))}.` : '',
        stakes ? `Asta impinge in fata exact ${lowerFirst(stripTerminalPunctuation(stakes))}.` : ''
      ],
      final: [
        goal ? `${focal} intelege ca urmatorul pas cere sa ${lowerFirst(stripTerminalPunctuation(goal))}.` : '',
        followThrough ? `${followThrough}.` : '',
        stateChange ? `La capatul schimbului, ${lowerFirst(stripTerminalPunctuation(stateChange))}.` : ''
      ]
    };
    return buildNarrativeParagraph(variants[variant]);
  }

  const variants = {
    0: [
      goal ? `${focal} keeps moving with the intention to ${lowerFirst(stripTerminalPunctuation(goal))}, but ${lowerFirst(stripTerminalPunctuation(obstacle || 'the pressure adapts faster than anyone wants to admit'))}.` : '',
      stateChange ? `From this point onward, ${lowerFirst(stripTerminalPunctuation(stateChange))}.` : ''
    ],
    1: [
      followThrough ? `${followThrough}.` : '',
      stakes ? `The conflict now presses directly against ${lowerFirst(stripTerminalPunctuation(stakes))}.` : ''
    ],
    2: [
      goal ? `${focal} is no longer trying merely to act; ${lowerFirst(stripTerminalPunctuation(goal))} becomes the only way to buy time.` : '',
      stakes ? `That pushes ${lowerFirst(stripTerminalPunctuation(stakes))} into the open.` : ''
    ],
    final: [
      goal ? `${focal} understands that the next move now requires ${lowerFirst(stripTerminalPunctuation(goal))}.` : '',
      followThrough ? `${followThrough}.` : '',
      stateChange ? `By the end of the exchange, ${lowerFirst(stripTerminalPunctuation(stateChange))}.` : ''
    ]
  };
  return buildNarrativeParagraph(variants[variant]);
}

function buildChapterClosingParagraph({ chapter, lastScene, outputState, answerShift, chapterQuestion, finalBelief, finalRelationship, uncertainty, isFinalChapter, languageCode }) {
  const focalCharacter = lastScene?.participants?.[0] ?? 'the protagonist';
  const renderedUncertainty = finalizeNarrativeSentence(uncertainty);

  if (languageCode === 'ro') {
    if (isFinalChapter) {
      return [
        finalBelief ? `${focalCharacter} intelege acum ca ${lowerFirst(stripTerminalPunctuation(finalBelief))}.` : '',
        finalRelationship ? finalizeNarrativeSentence(sentenceCase(finalRelationship)) : ''
      ].filter(Boolean).join(' ');
    }

    return buildNarrativeParagraph([
      outputState ? `${sentenceCase(stripTerminalPunctuation(outputState))}.` : 'Nimic din ceea ce tocmai s-a deschis nu se mai inchide usor.',
      answerShift ? `${sentenceCase(stripTerminalPunctuation(answerShift))}.` : '',
      chapterQuestion ? `Intrebarea ramasa in aer se strange acum in jurul a ceea ce inca nu poate fi spus limpede: ${lowerFirst(stripTerminalPunctuation(chapterQuestion))}.` : '',
      renderedUncertainty
    ]);
  }

  if (isFinalChapter) {
    return [
      finalBelief ? `${focalCharacter} understands now that ${lowerFirst(stripTerminalPunctuation(finalBelief))}.` : '',
      finalRelationship ? finalizeNarrativeSentence(sentenceCase(finalRelationship)) : ''
    ].filter(Boolean).join(' ');
  }

  return buildNarrativeParagraph([
    outputState ? `${sentenceCase(stripTerminalPunctuation(outputState))}.` : 'Nothing that has opened here will close easily.',
    answerShift ? `${sentenceCase(stripTerminalPunctuation(answerShift))}.` : '',
    chapterQuestion ? `The live question now tightens around what still refuses a clean answer: ${lowerFirst(stripTerminalPunctuation(chapterQuestion))}.` : '',
    renderedUncertainty
  ]);
}

function roleLead(role, languageCode) {
  const copy = {
    en: {
      setup: 'This movement opens the first visible crack in the promise of the book.',
      escalation: 'This movement tightens pressure around what can no longer remain private.',
      investigation: 'This movement makes certainty harder to reach and harder to survive.',
      revelation: 'This movement brings hidden structure into painful visibility.',
      reversal: 'This movement turns the cost of the story back on its earlier strategy.',
      culmination: 'This movement leaves no clean path around irreversible cost.',
      aftermath: 'This movement studies what remains after impact has already landed.',
      bridge: 'This movement carries the story across a threshold it cannot retreat from.'
    },
    ro: {
      setup: 'Miscarea aceasta deschide prima fisura vizibila in promisiunea cartii.',
      escalation: 'Miscarea aceasta strange presiunea in jurul a ceea ce nu mai poate ramane privat.',
      investigation: 'Miscarea aceasta face certitudinea mai greu de atins si mai greu de suportat.',
      revelation: 'Miscarea aceasta aduce structura ascunsa intr-o vizibilitate dureroasa.',
      reversal: 'Miscarea aceasta intoarce costul povestii impotriva strategiei de mai devreme.',
      culmination: 'Miscarea aceasta nu mai lasa nicio cale curata in jurul costului ireversibil.',
      aftermath: 'Miscarea aceasta observa ce ramane dupa ce impactul a lovit deja.',
      bridge: 'Miscarea aceasta poarta povestea peste un prag din care nu se mai poate retrage.'
    }
  };
  return copy[languageCode]?.[role] ?? copy.en[role] ?? role;
}

function sentenceCase(value) {
  const text = String(value ?? '').trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function lowerFirst(value) {
  const text = String(value ?? '').trim();
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}

function continueSentence(value) {
  const text = String(value ?? '').trim();
  if (!text) {
    return '';
  }

  return /^(In|At|On|During|Inside|As|With|After|Before)\b/.test(text)
    ? lowerFirst(text)
    : text;
}

function stripTerminalPeriod(value) {
  return String(value ?? '').trim().replace(/[.]+$/g, '');
}

function stripTerminalPunctuation(value) {
  return String(value ?? '').trim().replace(/[.?!]+$/g, '');
}

function finalizeNarrativeSentence(value) {
  const text = String(value ?? '').trim();
  if (!text) {
    return '';
  }

  return /[.?!]$/u.test(text) ? text : `${text}.`;
}

function splitCsv(value) {
  return String(value ?? '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function resolveObjectTexts(object, resolveText) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, resolveText(value)]));
}

function locationPhrase(location, languageCode) {
  if (languageCode !== 'ro') {
    return `in ${location}`;
  }

  if (location.startsWith('un ')) {
    return `intr-${location}`;
  }

  if (location.startsWith('o ')) {
    return `intr-${location}`;
  }

  return `in ${location}`;
}

function pushUniqueParagraph(paragraphs, paragraph) {
  const normalized = String(paragraph ?? '').replace(/\s+/g, ' ').trim();
  if (!normalized) {
    return;
  }

  if (paragraphs.at(-1) === normalized) {
    return;
  }

  paragraphs.push(normalized);
}

function buildNarrativeParagraph(sentences) {
  const unique = [];
  const seen = new Set();

  for (const sentence of sentences ?? []) {
    const normalized = normalizeSentence(sentence);
    if (!normalized) {
      continue;
    }

    const key = normalized.toLowerCase();
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    unique.push(normalized);
  }

  return unique.join(' ');
}

function normalizeSentence(sentence) {
  const text = String(sentence ?? '').replace(/\s+/g, ' ').trim();
  if (!text) {
    return '';
  }

  return `${text.replace(/[.?!]+$/g, '')}.`;
}

function renderEditionDialogue({ model, chapter, scene, turns, languageCode }) {
  if (!turns?.length) {
    return '';
  }

  const cuePool = buildDialogueCuePool(scene, languageCode);
  return turns
    .map((turn, index) => renderDialogueTurn({
      turn,
      index,
      languageCode,
      speakerVoice: resolveSpeakerVoice(model, turn.speaker),
      cue: cuePool[index % Math.max(cuePool.length, 1)] ?? cuePool.at(-1) ?? '',
      hasPriorTurn: index > 0
    }))
    .join(' ');
}

function dialogueTurnLimit(dialogueDensity) {
  if (dialogueDensity === 'high') {
    return 4;
  }
  if (dialogueDensity === 'low') {
    return 1;
  }
  return 2;
}

function renderDialogueTurn({ turn, index, languageCode, speakerVoice, cue, hasPriorTurn }) {
  const line = buildDialogueSurface({ turn, cue, speakerVoice, index, languageCode });
  const verb = dialogueVerb(turn.intent, languageCode, index, speakerVoice);
  const beatPhrase = dialogueBeatPhrase(speakerVoice, languageCode, index);
  const beatSentence = `${turn.speaker} ${beatPhrase}.`;

  if (languageCode === 'ro') {
    const templates = [
      `${turn.speaker} ${beatPhrase}: "${line}"`,
      `${hasPriorTurn ? 'Fara sa lase replica precedenta sa se aseze, ' : ''}${turn.speaker} ${verb}: "${line}"`,
      `"${line}" ${turn.speaker} ${verb}.`,
      `${beatSentence} "${line}"`
    ];
    return templates[index % templates.length];
  }

  const templates = [
    `${turn.speaker} ${beatPhrase}: "${line}"`,
    `${hasPriorTurn ? 'Without letting the previous line settle, ' : ''}${turn.speaker} ${verb}: "${line}"`,
    `"${line}" ${turn.speaker} ${verb}.`,
    `${beatSentence} "${line}"`
  ];
  return templates[index % templates.length];
}

function buildDialogueSurface({ turn, cue, speakerVoice, index, languageCode }) {
  const cleanCue = stripTerminalPunctuation(sentenceCase(cue || localizeBookText(turn['line-hint'] ?? '', languageCode)));
  const loweredCue = lowerFirst(cleanCue);
  const templates = languageCode === 'ro'
    ? {
      protagonist: {
        probe: [
          `Pornim de la faptul simplu ca ${loweredCue}`,
          `Eu raman la proba asta: ${loweredCue}`
        ],
        challenge: [
          `Nu-mi cere sa trec mai departe pana nu lamurim asta: ${loweredCue}`,
          `Daca vrei semnatura mea, explica-mi asta: ${loweredCue}`
        ],
        commit: [
          `Atunci merg cu asta pana la capat: ${loweredCue}`,
          `Bine, duc concluzia pana unde trebuie: ${loweredCue}`
        ],
        default: [
          cleanCue,
          `Pentru mine asta schimba tot: ${loweredCue}`,
          `Aici se rupe povestea oficiala: ${loweredCue}`
        ]
      },
      counterpart: {
        probe: [
          `Pe teren lucrurile arata asa: ${loweredCue}`,
          `Tot aici ne aduce si apa: ${loweredCue}`
        ],
        warn: [
          `Daca iesim cu asta afara, nu mai exista drum scurt inapoi: ${loweredCue}`,
          `Stii ce inseamna pentru oras daca ramane asa: ${loweredCue}`
        ],
        default: [
          `Nu-mi suna a coincidenta: ${loweredCue}`,
          `De aici incolo nu mai vorbim doar despre un detaliu: ${loweredCue}`,
          cleanCue
        ]
      },
      pressure: {
        deflect: [
          `Biroul nu poate merge pe formula asta: ${loweredCue}`,
          `Transformati prea repede un detaliu in verdict: ${loweredCue}`
        ],
        warn: [
          `Daca puneti asta in procesul-verbal, aprindeti tot dosarul: ${loweredCue}`,
          `Ati trecut deja pragul sigur daca sustineti asta: ${loweredCue}`
        ],
        default: [
          `Exagerati amploarea consecintei: ${loweredCue}`,
          `Nu confundati presiunea cu dovada: ${loweredCue}`,
          cleanCue
        ]
      },
      support: {
        probe: [
          `Detaliul care nu ma lasa in pace e acesta: ${loweredCue}`,
          `Dosarul se rupe exact aici: ${loweredCue}`
        ],
        reframe: [
          `Nu asta trebuie privit intai, ci restul pe care il trage dupa el: ${loweredCue}`,
          `Daca mutam accentul putin, se vede altceva: ${loweredCue}`
        ],
        default: [
          `Asta e partea pe care nimeni nu vrea s-o scrie curat: ${loweredCue}`,
          `Tocmai aici incepe sa miroasa a musamalizare: ${loweredCue}`,
          cleanCue
        ]
      }
    }
    : {
      protagonist: {
        probe: [
          `We start from one simple fact: ${loweredCue}`,
          `This is the evidence I am staying with: ${loweredCue}`
        ],
        challenge: [
          `Do not ask me to move past this before it is explained: ${loweredCue}`,
          `If you want my signature, explain this to me: ${loweredCue}`
        ],
        commit: [
          `Then I carry this all the way through: ${loweredCue}`,
          `Fine, I take the conclusion where it has to go: ${loweredCue}`
        ],
        default: [
          cleanCue,
          `For me, this changes everything: ${loweredCue}`,
          `This is where the official story breaks apart: ${loweredCue}`
        ]
      },
      counterpart: {
        probe: [
          `Out in the field, it looks like this: ${loweredCue}`,
          `The river keeps bringing us back to the same thing: ${loweredCue}`
        ],
        warn: [
          `If we take this outside, there is no short path back: ${loweredCue}`,
          `You know what this means for the city if it holds: ${loweredCue}`
        ],
        default: [
          `That does not read as coincidence to me: ${loweredCue}`,
          `From here on, we are no longer talking about a detail: ${loweredCue}`,
          cleanCue
        ]
      },
      pressure: {
        deflect: [
          `The office cannot move on that formulation: ${loweredCue}`,
          `You are turning a detail into a verdict too quickly: ${loweredCue}`
        ],
        warn: [
          `Put that in the record and you set the whole file on fire: ${loweredCue}`,
          `You are already past the safe threshold if you insist on this: ${loweredCue}`
        ],
        default: [
          `You are overstating the consequence: ${loweredCue}`,
          `Do not mistake pressure for proof: ${loweredCue}`,
          cleanCue
        ]
      },
      support: {
        probe: [
          `This is the detail I cannot make leave me alone: ${loweredCue}`,
          `The file tears open exactly here: ${loweredCue}`
        ],
        reframe: [
          `That is not the first thing to look at; look at what it drags behind it: ${loweredCue}`,
          `Shift the emphasis a little and something else appears: ${loweredCue}`
        ],
        default: [
          `This is the part no one wants written cleanly: ${loweredCue}`,
          `This is where it starts smelling like a cover-up: ${loweredCue}`,
          cleanCue
        ]
      }
    };

  const voiceTemplates = templates[speakerVoice] ?? templates.support;
  const variants = voiceTemplates[turn.intent] ?? voiceTemplates.default;
  return variants[index % variants.length];
}

function dialogueVerb(intent, languageCode, index, speakerVoice) {
  const ro = {
    probe: ['spune', 'intreaba', 'insista'],
    deflect: ['replica', 'murmura', 'adauga'],
    commit: ['spune', 'hotaraste', 'adauga'],
    warn: ['avertizeaza', 'spune', 'murmura'],
    challenge: ['taie scurt', 'spune', 'replica'],
    reframe: ['reia', 'replica', 'adauga'],
    'answer-honestly': ['raspunde', 'spune', 'marturiseste'],
    'tease-probe': ['zambeste strans si spune', 'glumeste prea putin si adauga', 'spune'],
    'name-risk': ['numeste fara ocolisuri', 'spune', 'rosteste']
  };
  const en = {
    probe: ['says', 'asks', 'insists'],
    deflect: ['replies', 'murmurs', 'adds'],
    commit: ['says', 'promises', 'adds'],
    warn: ['warns', 'says', 'murmurs'],
    challenge: ['cuts in', 'says', 'replies'],
    reframe: ['says', 'reframes', 'adds'],
    'answer-honestly': ['answers', 'says', 'admits'],
    'tease-probe': ['says with a thin smile', 'teases', 'says'],
    'name-risk': ['says flatly', 'names outright', 'says']
  };
  const voiceFallback = languageCode === 'ro'
    ? speakerVoice === 'pressure'
      ? ['spune rece', 'replica scurt', 'adauga']
      : speakerVoice === 'protagonist'
        ? ['spune', 'taie scurt', 'insista']
        : ['spune']
    : speakerVoice === 'pressure'
      ? ['says flatly', 'cuts in', 'adds']
      : speakerVoice === 'protagonist'
        ? ['says', 'cuts in', 'insists']
        : ['says'];
  const pool = (languageCode === 'ro' ? ro : en)[intent] ?? voiceFallback;
  return pool[index % pool.length];
}

function buildDialogueCuePool(scene, languageCode) {
  const candidates = [
    scene.event.trigger,
    scene.event.impact,
    scene.conflict,
    scene.development,
    scene.resolution,
    scene.event['follow-through'],
    scene['state-change']
  ];

  const cleaned = candidates
    .map((value) => condenseDialogueCue(localizeBookText(value ?? '', languageCode), languageCode))
    .filter(Boolean);

  return [...new Set(cleaned)];
}

function condenseDialogueCue(value, languageCode) {
  let text = stripTerminalPunctuation(sentenceCase(String(value ?? '').replace(/\s+/g, ' ').trim()));
  if (!text) {
    return '';
  }

  const clauseBreak = languageCode === 'ro'
    ? /\s+(?:in timp ce|fiindca|pentru ca|dar)\s+/i
    : /\s+(?:while|because|but)\s+/i;
  text = text.split(clauseBreak)[0]?.trim() ?? text;

  const words = text.split(/\s+/);
  if (words.length > 18) {
    text = words.slice(0, 18).join(' ');
  }

  return text;
}

function resolveSpeakerVoice(model, speaker) {
  if (speaker === model.characters.protagonist.name) {
    return 'protagonist';
  }
  if (speaker === model.characters.counterpart.name) {
    return 'counterpart';
  }
  if (speaker === model.characters.pressure.name) {
    return 'pressure';
  }
  return 'support';
}

function dialogueBeatPhrase(speakerVoice, languageCode, index) {
  const ro = {
    protagonist: ['nu ridica deloc vocea', 'tine dosarul inchis in palma', 'vorbeste ca si cum ar dicta un proces-verbal'],
    counterpart: ['arunca o privire spre usa', 'ramane cu umerii sprijiniti de masa', 'isi alege vorbele ca pe niste unelte ude'],
    pressure: ['face din calm o forma de ordin', 'ramane perfect drept', 'isi masoara tonul ca pentru minuta'],
    support: ['se uita intai la ceilalti', 'rasuceste eticheta dintre degete', 'vorbeste ca si cum ar risca prea mult']
  };
  const en = {
    protagonist: ['does not raise a voice at all', 'keeps the file closed in one hand', 'speaks as if dictating a report'],
    counterpart: ['glances once toward the door', 'keeps a shoulder against the table', 'chooses each word like a wet tool'],
    pressure: ['turns calm into a form of command', 'stands perfectly upright', 'measures the tone as if for a minute sheet'],
    support: ['looks at the others first', 'rolls a tag between two fingers', 'speaks as if risking too much']
  };
  const pool = (languageCode === 'ro' ? ro : en)[speakerVoice] ?? (languageCode === 'ro' ? ro.support : en.support);
  return pool[index % pool.length];
}

function sceneTransition(index, languageCode, introduction) {
  const base = continueSentence(introduction);
  if (index === 0) {
    return `${sentenceCase(introduction)}.`;
  }

  const roLeads = ['Mai tarziu,', 'Dupa aceea,', 'Spre seara,', 'Cand presiunea revine,', 'La urmatorul prag,'];
  const enLeads = ['Later,', 'After that,', 'Toward evening,', 'When the pressure returns,', 'At the next threshold,'];
  const lead = languageCode === 'ro'
    ? roLeads[(index - 1) % roLeads.length]
    : enLeads[(index - 1) % enLeads.length];
  return `${lead} ${base}.`;
}

function formatNameList(names, languageCode) {
  const unique = uniqueNames(names);
  if (unique.length <= 1) {
    return unique[0] ?? '';
  }

  if (unique.length === 2) {
    return unique.join(languageCode === 'ro' ? ' si ' : ' and ');
  }

  return `${unique.slice(0, -1).join(', ')}${languageCode === 'ro' ? ' si ' : ', and '}${unique.at(-1)}`;
}

function uniqueNames(names) {
  return [...new Set((names ?? []).filter(Boolean))];
}

function resolveLocationProfile(model, locationName) {
  const target = String(locationName ?? '').trim();
  if (!target) {
    return null;
  }

  return [
    model.primaryLocation,
    model.secondaryLocation,
    ...(model.supportingLocations ?? [])
  ].find((entry) => entry?.name === target) ?? null;
}

function normalizeNarrativePhrase(value, languageCode) {
  const replacements = languageCode === 'ro'
    ? [
        [/\s+in timp ce capitolul poarta inca presiunea de [a-zA-Zăâîșț-]+/gi, ''],
        [/\s+sub presiunea de [a-zA-Zăâîșț-]+/gi, '']
      ]
    : [
        [/\s+while the chapter still carries [a-z-]+ pressure/gi, ''],
        [/\s+under [a-z-]+ pressure/gi, '']
      ];
  let text = sentenceCase(localizeBookText(value, languageCode));

  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }

  return text.replace(/\s+/g, ' ').trim();
}

function renderOutputState(chapter, languageCode) {
  const genericStageExit = chapter.outputState.match(/^chapter (\d+) exits with sharper ([a-z-]+) pressure, narrower choices, and a cost that cannot be folded back into routine$/i);
  if (genericStageExit && languageCode === 'ro') {
    const [, chapterNumber, role] = genericStageExit;
    return `capitolul ${chapterNumber} iese cu o presiune de ${localizeRoleToken(role)} mai ascutita, alegeri mai inguste si un cost care nu mai poate fi impins inapoi in rutina`;
  }

  if (chapter.outputState.includes('increased pressure and narrower choices')) {
    return languageCode === 'ro'
      ? 'presiunea a crescut, iar alegerile sigure s-au ingustat'
      : 'pressure has increased and the safe choices have narrowed';
  }

  if (chapter.outputState.includes('resolves with visible cost')) {
    return languageCode === 'ro'
      ? 'presiunea centrala se rezolva, dar numai printr-un cost vizibil'
      : 'the central pressure resolves, but only through visible cost';
  }

  return localizeBookText(chapter.outputState, languageCode);
}

function field(block, name) {
  return block?.fields?.find((entry) => entry.name === name)?.value;
}

function findRequiredBlock(blocks, identifier, verb) {
  const block = blocks.find((entry) => entry.identifier === identifier && entry.verb === verb);
  if (!block) {
    throw new Error(`BookWriter could not find required block @${identifier} ${verb}.`);
  }
  return block;
}

function emptyBlock() {
  return { fields: [] };
}
