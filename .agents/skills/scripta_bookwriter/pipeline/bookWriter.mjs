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

  const sourceEdition = buildSourceEdition(manuscriptModel, options);
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
      sourceEdition
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
  const characters = {
    protagonist: resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'character-protagonist-001', 'define')), resolveText),
    counterpart: resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'character-counterpart-001', 'define')), resolveText),
    pressure: resolveObjectTexts(blockToObject(findRequiredBlock(macroBlocks, 'character-pressure-001', 'define')), resolveText)
  };

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
    worldRule,
    secondaryWorldRule,
    worldReveal,
    primaryLocation,
    secondaryLocation,
    chapters,
    characters,
    validationSummary
  };
}

function buildSourceEdition(model, options) {
  const requestedLanguage = options.sourceLanguage;
  const contentLanguage = isBuiltInBookLanguage(requestedLanguage) ? requestedLanguage : 'en';
  const languagePack = getLanguagePack(contentLanguage);
  const profileFlavor = getProfileFlavor(model.profileId, contentLanguage);

  return {
    requestedLanguage,
    contentLanguage,
    mode: 'source-renderer',
    translationInstruction: '',
    languagePack,
    profileFlavor,
    generatedWith: 'SCRIPTA BookWriter',
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
    chapters: model.chapters.map((chapter) => buildEditionChapter(model, chapter, contentLanguage)),
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

  if (firstScene) {
    const location = localizeBookText(firstScene['time-space'], languageCode);
    const placeSignal = sentenceCase(chapterLocationSignal || chapterLocationSymbol);
    if (languageCode === 'ro') {
      pushUniqueParagraph(paragraphs,
        `${firstScene.participants[0]} ajunge ${locationPhrase(location, languageCode)}, unde ${profileFlavor.atmosphere}. ${placeSignal ? `${placeSignal}.` : ''} ${firstScene.participants[1]} citeste prea atent incaperea, iar ${firstScene.participants[2]} tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada.`.replace(/\s+/g, ' ').trim()
      );
    } else {
      pushUniqueParagraph(paragraphs,
        `${firstScene.participants[0]} reaches ${location}, where ${profileFlavor.atmosphere}. ${placeSignal ? `${placeSignal}.` : ''} ${firstScene.participants[1]} reads the room too carefully, while ${firstScene.participants[2]} keeps alive the version of events other people would rather believe.`.replace(/\s+/g, ' ').trim()
      );
    }
  }

  chapter.scenes.forEach((scene, index) => {
    const introduction = normalizeNarrativePhrase(scene.introduction, languageCode);
    const development = normalizeNarrativePhrase(scene.development, languageCode);
    const conflict = normalizeNarrativePhrase(scene.conflict, languageCode);
    const trigger = sentenceCase(localizeBookText(scene.event.trigger ?? model.plotElement.activation ?? '', languageCode));
    const impact = sentenceCase(localizeBookText(scene.event.impact ?? scene.stateChange ?? '', languageCode));
    const resolution = normalizeNarrativePhrase(scene.resolution, languageCode);

    if (languageCode === 'ro') {
      pushUniqueParagraph(paragraphs, buildNarrativeParagraph([
        index === 0 ? `${introduction}.` : `Mai tarziu, ${introduction.toLowerCase()}.`,
        development ? `${development}.` : '',
        `${conflict}.`,
        trigger && impact ? `Cand ${lowerFirst(trigger)}, ${lowerFirst(stripTerminalPeriod(impact))}.` : '',
        resolution ? `${resolution}.` : ''
      ]));
      return;
    }

    pushUniqueParagraph(paragraphs, buildNarrativeParagraph([
      index === 0 ? `${introduction}.` : `Later, ${introduction.toLowerCase()}.`,
      development ? `${development}.` : '',
      `${conflict}.`,
      trigger && impact ? `When ${lowerFirst(trigger)}, ${lowerFirst(stripTerminalPeriod(impact))}.` : '',
      resolution ? `${resolution}.` : ''
    ]));
  });

  pushUniqueParagraph(paragraphs, buildChapterClosingParagraph({
    chapter,
    lastScene,
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

function buildChapterClosingParagraph({ lastScene, finalBelief, finalRelationship, uncertainty, isFinalChapter, languageCode }) {
  const focalCharacter = lastScene?.participants?.[0] ?? 'the protagonist';
  const renderedUncertainty = uncertainty ? `${uncertainty}.` : '';

  if (languageCode === 'ro') {
    if (isFinalChapter) {
      return [
        finalBelief ? `${focalCharacter} intelege acum ca ${finalBelief.toLowerCase()}.` : '',
        finalRelationship ? `${sentenceCase(finalRelationship)}.` : ''
      ].filter(Boolean).join(' ');
    }

    return `Nimic din ceea ce tocmai s-a deschis nu se mai inchide usor.${renderedUncertainty ? ` ${renderedUncertainty}` : ''}`;
  }

  if (isFinalChapter) {
    return [
      finalBelief ? `${focalCharacter} understands now that ${finalBelief.toLowerCase()}.` : '',
      finalRelationship ? `${sentenceCase(finalRelationship)}.` : ''
    ].filter(Boolean).join(' ');
  }

  return `Nothing that has opened here will close easily.${renderedUncertainty ? ` ${renderedUncertainty}` : ''}`;
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

function stripTerminalPeriod(value) {
  return String(value ?? '').trim().replace(/[.]+$/g, '');
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

function renderEditionDialogue(turns, languageCode) {
  if (!turns?.length) {
    return '';
  }

  if (languageCode === 'ro') {
    return turns.map((turn) => {
      const line = sentenceCase(localizeBookText(turn['line-hint'] ?? '', languageCode));
      return `"${line}" spune ${turn.speaker}.`;
    }).join(' ');
  }

  return turns.map((turn) => {
    const line = sentenceCase(localizeBookText(turn['line-hint'] ?? '', languageCode));
    return `"${line}" ${turn.speaker} says.`;
  }).join(' ');
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
