import { blockToObject } from '../core/cnl.mjs';
import { escapeHtml } from '../core/text.mjs';
import { allocateArtifactPath, ensureWorkspace, listLatestStageArtifacts, readStructuredMarkdown, readText, registerStageRun, writeStructuredMarkdown, writeText } from '../core/workspace.mjs';
import { readLatestBlocksByBase } from './loaders.mjs';
import { normalizePipelineOptions } from './options.mjs';
import {
  buildChapterDisplayTitle,
  buildCoverPalette,
  getLanguagePack,
  getProfileFlavor,
  isBuiltInBookLanguage,
  localizeBookText,
  localizeEditionMode,
  localizeEditorialProfile,
  localizeProfileLabel,
  localizeScenarioTitle,
  localizeWorkForm
} from './bookWriterLanguage.mjs';

export async function runBookWriter(input = {}) {
  const options = normalizePipelineOptions(input);
  await ensureWorkspace(options.workspaceRoot);

  const draftArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'drafts', 'draft');
  const continuityArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'drafts', 'continuity');
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
  const continuityPackets = await Promise.all(continuityArtifacts.map((artifact) => readStructuredMarkdown(artifact.filePath, {})));
  const validationSummary = validationArtifacts.length > 0 ? await readStructuredMarkdown(validationArtifacts[0].filePath, null) : null;

  const manuscriptModel = buildManuscriptModel({
    options,
    draftArtifacts,
    draftTexts,
    continuityArtifacts,
    continuityPackets,
    chapterArtifacts,
    microArtifacts,
    macroArtifacts,
    validationSummary
  });

  const produced = [];
  const consumed = [
    ...draftArtifacts.map((artifact) => artifact.relativePath),
    ...continuityArtifacts.map((artifact) => artifact.relativePath),
    ...chapterArtifacts.map((entry) => entry.artifact.relativePath),
    ...microArtifacts.map((entry) => entry.artifact.relativePath),
    ...macroArtifacts.map((entry) => entry.artifact.relativePath)
  ];

  const englishEdition = buildEdition(manuscriptModel, options, 'en');
  const manuscriptArtifact = await writeExportArtifact(options, 'manuscript', 'book', renderPlainManuscript(englishEdition));
  produced.push(manuscriptArtifact);

  const editions = [];
  for (const languageCode of options.targetLanguages) {
    const edition = buildEdition(manuscriptModel, options, languageCode);
    const artifact = await writeExportArtifact(options, `edition-${languageCode}`, 'reader', renderBookHtml(edition), '.html');
    produced.push(artifact);
    editions.push({
      targetLanguage: languageCode,
      contentLanguage: edition.contentLanguage,
      mode: edition.mode,
      translationInstruction: edition.translationInstruction,
      exportPath: artifact.relativePath
    });
  }

  const summaryArtifact = await writeExportDataArtifact(options, 'editions', 'bundle', {
    bookId: options.bookId,
    baselineProfile: options.baselineProfile,
    sourceLanguage: options.sourceLanguage,
    targetLanguages: options.targetLanguages,
    editorialProfile: options.editorialProfile,
    chapterCount: manuscriptModel.chapters.length,
    editions,
    validationSnapshot: validationSummary?.metrics ?? null,
    sourceArtifacts: consumed
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
  continuityArtifacts,
  continuityPackets,
  chapterArtifacts,
  microArtifacts,
  macroArtifacts,
  validationSummary
}) {
  const draftMap = new Map(draftArtifacts.map((artifact, index) => [artifact.baseName, draftTexts[index]]));
  const continuityMap = new Map(continuityArtifacts.map((artifact, index) => [artifact.baseName, continuityPackets[index]]));
  const macroBlocks = macroArtifacts.flatMap((entry) => entry.blocks);
  const centralIdea = blockToObject(findRequiredBlock(macroBlocks, 'central-idea', 'define'));
  const theme = blockToObject(findRequiredBlock(macroBlocks, 'theme', 'define'));
  const wisdom = blockToObject(findRequiredBlock(macroBlocks, 'wisdom', 'define'));
  const blueprint = blockToObject(findRequiredBlock(macroBlocks, 'blueprint', 'map'));
  const bookArc = blockToObject(findRequiredBlock(macroBlocks, 'arc-book-main', 'map'));
  const protagonistArc = blockToObject(findRequiredBlock(macroBlocks, 'arc-protagonist-main', 'map'));
  const relationshipArc = blockToObject(findRequiredBlock(macroBlocks, 'arc-relationship-main', 'map'));
  const motif = blockToObject(findRequiredBlock(macroBlocks, 'motif-primary', 'define'));
  const worldRule = blockToObject(findRequiredBlock(macroBlocks, 'world-rule-primary', 'define'));
  const secondaryWorldRule = blockToObject(findRequiredBlock(macroBlocks, 'world-rule-secondary', 'define'));
  const worldReveal = blockToObject(findRequiredBlock(macroBlocks, 'world-reveal-strategy', 'define'));
  const primaryLocation = blockToObject(findRequiredBlock(macroBlocks, 'location-primary', 'define'));
  const secondaryLocation = blockToObject(findRequiredBlock(macroBlocks, 'location-secondary', 'define'));
  const plotElement = blockToObject(findRequiredBlock(macroBlocks, 'plot-element-core-object', 'define'));
  const characters = {
    protagonist: blockToObject(findRequiredBlock(macroBlocks, 'character-protagonist-001', 'define')),
    counterpart: blockToObject(findRequiredBlock(macroBlocks, 'character-counterpart-001', 'define')),
    pressure: blockToObject(findRequiredBlock(macroBlocks, 'character-pressure-001', 'define'))
  };

  const chapters = chapterArtifacts.map((chapterEntry) => {
    const microEntry = microArtifacts.find((candidate) => candidate.artifact.baseName === chapterEntry.artifact.baseName);
    if (!microEntry) {
      throw new Error(`BookWriter could not find a refined micro plan for ${chapterEntry.artifact.baseName}.`);
    }

    const chapterBlock = findRequiredBlock(chapterEntry.blocks, chapterEntry.artifact.baseName, 'define');
    const chapter = blockToObject(chapterBlock);
    const sequenceBlock = microEntry.blocks.find((block) => block.identifier.startsWith('sequence-') && block.verb === 'define');
    const dialogueBlock = microEntry.blocks.find((block) => block.identifier.startsWith('dialogue-') && block.verb === 'apply');
    const dialogueTurns = microEntry.blocks
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
        const scene = blockToObject(sceneBlock);
        const actionBlock = microEntry.blocks.find((block) => block.identifier.startsWith('action-') && field(block, 'scene') === sceneBlock.identifier);
        const eventBlock = microEntry.blocks.find((block) => block.identifier.startsWith('event-') && field(block, 'scope') === sceneBlock.identifier);
        const conflictBlock = microEntry.blocks.find((block) => block.identifier.startsWith('conflict-') && field(block, 'scope') === sceneBlock.identifier);
        const sceneDialogueTurns = dialogueTurns.filter((turn) => turn.scene === sceneBlock.identifier);
        return {
          ...scene,
          participants: splitCsv(scene.participants),
          action: blockToObject(actionBlock ?? emptyBlock()),
          event: blockToObject(eventBlock ?? emptyBlock()),
          conflictPacket: blockToObject(conflictBlock ?? emptyBlock()),
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
      sequence: blockToObject(sequenceBlock ?? emptyBlock()),
      dialogue: blockToObject(dialogueBlock ?? emptyBlock()),
      monologue: blockToObject(monologueBlock ?? emptyBlock()),
      suspense: blockToObject(suspenseBlock ?? emptyBlock()),
      location: blockToObject(locationBlock ?? emptyBlock()),
      rulePressure: blockToObject(rulePressureBlock ?? emptyBlock()),
      protagonistArc: blockToObject(protagonistArcBlock ?? emptyBlock()),
      relationshipArc: blockToObject(relationshipArcBlock ?? emptyBlock()),
      pause: blockToObject(pauseBlock ?? emptyBlock()),
      acceleration: blockToObject(accelerationBlock ?? emptyBlock()),
      alternation: blockToObject(alternationBlock ?? emptyBlock()),
      scenes,
      draftText: draftMap.get(chapterEntry.artifact.baseName) ?? '',
      continuity: continuityMap.get(chapterEntry.artifact.baseName) ?? {}
    };
  }).sort((left, right) => left.id.localeCompare(right.id));

  return {
    bookId: options.bookId,
    profileId: options.profile.id,
    profileLabel: options.profile.label,
    workForm: options.workForm,
    editorialProfile: options.editorialProfile,
    title: options.profile.scenario.title,
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

function buildEdition(model, options, requestedLanguage) {
  const builtIn = isBuiltInBookLanguage(requestedLanguage);
  const contentLanguage = builtIn ? requestedLanguage : options.sourceLanguage;
  const languagePack = getLanguagePack(contentLanguage);
  const profileFlavor = getProfileFlavor(model.profileId, contentLanguage);

  return {
    requestedLanguage,
    contentLanguage,
    mode: builtIn ? 'built-in-renderer' : 'instruction-backed-fallback',
    translationInstruction: resolveTranslationInstruction(options.translationInstructions, requestedLanguage),
    languagePack,
    profileFlavor,
    title: localizeScenarioTitle(model.title, model.profileId, contentLanguage),
    subtitle: localizeBookText(model.centralIdea['story-question'], contentLanguage),
    premise: localizeBookText(model.blueprint.premise, contentLanguage),
    thematicStatement: localizeBookText(model.theme['thematic-statement'], contentLanguage),
    worldRule: localizeBookText(model.worldRule.rule, contentLanguage),
    bookId: model.bookId,
    profileLabel: localizeProfileLabel(model.profileId, model.profileLabel, contentLanguage),
    workForm: localizeWorkForm(model.workForm, contentLanguage),
    editorialProfile: model.editorialProfile,
    validationSummary: model.validationSummary?.metrics ?? null,
    chapters: model.chapters.map((chapter) => buildEditionChapter(model, chapter, contentLanguage)),
    coverPalette: buildCoverPalette(model.profileId),
    unsupportedNote: builtIn
      ? null
      : `Requested target language "${requestedLanguage}" was recorded, but the runtime only ships fluent renderer packs for English and Romanian. This edition therefore keeps the source-language narrative while preserving the translation instruction in metadata.`,
    stageSources: {
      macro: ['macro-refined-plan'],
      chapters: ['chapter-refined-plan'],
      micro: ['micro-refined-plan'],
      drafts: ['draft', 'continuity']
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
      paragraphs.push(
        `${firstScene.participants[0]} ajunge ${locationPhrase(location, languageCode)}, unde ${profileFlavor.atmosphere}. ${placeSignal ? `${placeSignal}.` : ''} ${firstScene.participants[1]} citeste prea atent incaperea, iar ${firstScene.participants[2]} tine in viata versiunea de evenimente pe care ceilalti ar prefera sa o creada.`.replace(/\s+/g, ' ').trim()
      );
    } else {
      paragraphs.push(
        `${firstScene.participants[0]} reaches ${location}, where ${profileFlavor.atmosphere}. ${placeSignal ? `${placeSignal}.` : ''} ${firstScene.participants[1]} reads the room too carefully, while ${firstScene.participants[2]} keeps alive the version of events other people would rather believe.`.replace(/\s+/g, ' ').trim()
      );
    }
  }

  chapter.scenes.forEach((scene, index) => {
    const location = localizeBookText(scene['time-space'], languageCode);
    const introduction = normalizeNarrativePhrase(scene.introduction, languageCode);
    const conflict = normalizeNarrativePhrase(scene.conflict, languageCode);
    const trigger = sentenceCase(localizeBookText(scene.event.trigger ?? model.plotElement.activation ?? '', languageCode));
    const actionGoal = localizeBookText(scene.action.goal ?? model.characters.protagonist.desire, languageCode);
    const actionObstacle = localizeBookText(scene.action.obstacle ?? model.characters.pressure.desire, languageCode);
    const dialogueParagraph = renderEditionDialogue(scene.dialogueTurns ?? [], languageCode);

    if (languageCode === 'ro') {
      paragraphs.push([
        index === 0 ? `${sentenceCase(locationPhrase(location, languageCode))}, ${introduction.toLowerCase()}.` : `Mai tarziu, ${locationPhrase(location, languageCode)}, ${introduction.toLowerCase()}.`,
        `${scene.participants[0]} incearca sa ${actionGoal}, dar ${actionObstacle}.`,
        `${conflict}.`,
        trigger ? `${trigger}.` : ''
      ].filter(Boolean).join(' '));
      if (dialogueParagraph) {
        paragraphs.push(dialogueParagraph);
      }
      return;
    }

    paragraphs.push([
      index === 0 ? `In ${location}, ${introduction.toLowerCase()}.` : `Later, in ${location}, ${introduction.toLowerCase()}.`,
      `${scene.participants[0]} tries to ${actionGoal}, but ${actionObstacle}.`,
      `${conflict}.`,
      trigger ? `${trigger}.` : ''
    ].filter(Boolean).join(' '));

    if (dialogueParagraph) {
      paragraphs.push(dialogueParagraph);
    }
  });

  paragraphs.push(buildChapterClosingParagraph({
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
    displayTitle: buildChapterDisplayTitle({
      chapterNumber: String(chapter.number).padStart(2, '0'),
      role: chapter.role,
      languageCode
    }),
    paragraphs
  };
}

function renderPlainManuscript(edition) {
  return [
    `# ${edition.title}`,
    '',
    edition.premise,
    '',
    ...edition.chapters.flatMap((chapter) => [
      `## ${chapter.displayTitle}`,
      '',
      ...chapter.paragraphs,
      ''
    ])
  ].join('\n').trimEnd() + '\n';
}

function renderBookHtml(edition) {
  const pack = edition.languagePack;
  const coverSvg = renderCoverSvg(edition);
  const toc = edition.chapters.map((chapter) => `<li><a href="#${escapeHtml(chapter.id)}">${escapeHtml(chapter.displayTitle)}</a></li>`).join('');
  const chapters = edition.chapters.map((chapter) => `
      <article id="${escapeHtml(chapter.id)}" class="chapter page-break">
        <h2>${escapeHtml(chapter.displayTitle)}</h2>
        ${chapter.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n        ')}
      </article>`).join('\n');
  const metadata = {
    targetLanguage: edition.requestedLanguage,
    contentLanguage: edition.contentLanguage,
    mode: edition.mode,
    translationInstruction: edition.translationInstruction
  };

  return `<!DOCTYPE html>
<html lang="${escapeHtml(edition.contentLanguage)}" dir="${escapeHtml(pack.direction)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(edition.title)}</title>
  <meta name="description" content="${escapeHtml(edition.premise)}">
  <style>
    :root {
      color-scheme: light;
      --bg: ${edition.coverPalette.background};
      --paper: #faf7f2;
      --ink: #181818;
      --muted: #6b625a;
      --accent: ${edition.coverPalette.accent};
      --accent-soft: ${edition.coverPalette.accentSoft};
      --cover-ink: ${edition.coverPalette.ink};
      --line: rgba(0, 0, 0, 0.12);
    }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: linear-gradient(180deg, #ebe6dd 0%, #f7f3ee 100%); color: var(--ink); }
    .reader { width: min(100%, 980px); margin: 0 auto; padding: 32px 18px 64px; }
    .sheet { background: var(--paper); box-shadow: 0 18px 54px rgba(17, 18, 22, 0.12); border-radius: 24px; overflow: hidden; }
    .cover { background: var(--bg); color: var(--cover-ink); min-height: 100svh; display: grid; grid-template-columns: 1.1fr 0.9fr; }
    .cover__copy { display: flex; flex-direction: column; justify-content: center; gap: 18px; padding: 48px; }
    .eyebrow { font-family: "Helvetica Neue", Arial, sans-serif; letter-spacing: 0.18em; text-transform: uppercase; font-size: 0.72rem; opacity: 0.86; }
    .cover h1, .title-page h1 { font-size: clamp(2.6rem, 6vw, 4.6rem); line-height: 0.95; margin: 0; }
    .cover p, .title-page p, .imprint p, nav, .notice { font-family: "Helvetica Neue", Arial, sans-serif; }
    .cover__tagline { font-size: 1.05rem; line-height: 1.55; max-width: 28ch; }
    .body { padding: 40px 44px 56px; }
    .title-page, .imprint, nav, .appendix-block { border-bottom: 1px solid var(--line); padding: 18px 0 24px; }
    .imprint-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px 24px; }
    .imprint-grid dt { font-weight: 700; margin-bottom: 4px; color: var(--muted); }
    .imprint-grid dd { margin: 0; }
    nav ol { margin: 10px 0 0; padding-left: 1.25rem; }
    nav li + li { margin-top: 8px; }
    nav a { color: inherit; text-decoration: none; border-bottom: 1px solid transparent; }
    nav a:hover { border-color: var(--accent); }
    .chapter { max-width: 760px; margin: 0 auto; padding: 34px 0 14px; }
    .chapter h2 { font-size: 1.9rem; margin-bottom: 1.3rem; }
    .chapter p { font-size: 1.08rem; line-height: 1.9; margin: 0 0 1.05rem; text-wrap: pretty; }
    .notice { background: #fff4dd; border: 1px solid #e9c27a; border-radius: 14px; padding: 12px 14px; line-height: 1.55; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin: 0; }
    .metrics-grid div { background: rgba(0, 0, 0, 0.035); border-radius: 14px; padding: 10px 12px; }
    .metrics-grid dt { font-family: "Helvetica Neue", Arial, sans-serif; font-size: 0.74rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
    .metrics-grid dd { margin: 6px 0 0; font-size: 1.18rem; font-weight: 700; }
    @media (max-width: 820px) {
      .cover { grid-template-columns: 1fr; }
      .cover__copy, .body { padding: 28px 22px 36px; }
    }
    @media print {
      body { background: #fff; }
      .reader { width: 100%; margin: 0; padding: 0; }
      .sheet { box-shadow: none; border-radius: 0; }
      .page-break { break-before: page; }
      .cover { min-height: auto; break-after: page; }
      a { color: inherit; text-decoration: none; }
    }
  </style>
</head>
<body>
  <main class="reader">
    <div class="sheet">
      <section class="cover">
        <div>${coverSvg}</div>
        <div class="cover__copy">
          <div class="eyebrow">${escapeHtml(edition.profileLabel)}</div>
          <h1>${escapeHtml(edition.title)}</h1>
          <p class="cover__tagline">${escapeHtml(edition.profileFlavor.coverTagline)}</p>
          <p>${escapeHtml(pack.ui.coverLine)}</p>
        </div>
      </section>
      <div class="body">
        <section class="title-page">
          <p class="eyebrow">${escapeHtml(pack.ui.titlePage)}</p>
          <h1>${escapeHtml(edition.title)}</h1>
          <p>${escapeHtml(edition.subtitle)}</p>
          <p>${escapeHtml(edition.premise)}</p>
        </section>
        <section class="imprint page-break">
          <p class="eyebrow">${escapeHtml(pack.ui.imprint)}</p>
          ${edition.unsupportedNote ? `<p class="notice">${escapeHtml(edition.unsupportedNote)}</p>` : ''}
          <dl class="imprint-grid">
            <div><dt>${escapeHtml(pack.ui.profile)}</dt><dd>${escapeHtml(edition.profileLabel)}</dd></div>
            <div><dt>${escapeHtml(pack.ui.workForm)}</dt><dd>${escapeHtml(edition.workForm)}</dd></div>
            <div><dt>${escapeHtml(pack.ui.bookId)}</dt><dd>${escapeHtml(edition.bookId)}</dd></div>
            <div><dt>${escapeHtml(pack.ui.edition)}</dt><dd>${escapeHtml(localizeEditionMode(edition.mode, edition.contentLanguage))}</dd></div>
            <div><dt>${escapeHtml(pack.ui.targetLanguage)}</dt><dd>${escapeHtml(edition.requestedLanguage)}</dd></div>
            <div><dt>${escapeHtml(pack.ui.editorialProfile)}</dt><dd>${escapeHtml(localizeEditorialProfile(edition.editorialProfile, edition.contentLanguage))}</dd></div>
            <div><dt>${escapeHtml(pack.ui.translationInstruction)}</dt><dd>${escapeHtml(edition.translationInstruction || (edition.contentLanguage === 'ro' ? 'implicit' : 'default'))}</dd></div>
            <div><dt>${escapeHtml(pack.ui.generatedWith)}</dt><dd>SCRIPTA BookWriter</dd></div>
          </dl>
        </section>
        <nav class="page-break">
          <p class="eyebrow">${escapeHtml(pack.ui.contents)}</p>
          <ol>${toc}</ol>
        </nav>
${chapters}
      </div>
    </div>
  </main>
  <script type="application/json" id="scripta-edition-metadata">${escapeHtml(JSON.stringify(metadata))}</script>
</body>
</html>`;
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

function renderCoverSvg(edition) {
  const palette = edition.coverPalette;
  return `<svg viewBox="0 0 800 1080" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(edition.title)}">
  <defs>
    <linearGradient id="cover-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.background}" />
      <stop offset="100%" stop-color="${palette.accent}" />
    </linearGradient>
  </defs>
  <rect width="800" height="1080" fill="url(#cover-gradient)" />
  <circle cx="640" cy="180" r="126" fill="${palette.accentSoft}" opacity="0.18" />
  <circle cx="160" cy="920" r="150" fill="${palette.accentSoft}" opacity="0.12" />
  ${coverMotif(edition.bookId, palette)}
</svg>`;
}

function coverMotif(bookId, palette) {
  if (bookId.includes('detective')) {
    return `<path d="M120 860 Q260 720 340 620 T520 430 T700 220" stroke="${palette.accentSoft}" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.72" /><rect x="280" y="270" width="260" height="420" rx="24" fill="none" stroke="${palette.accentSoft}" stroke-width="16" opacity="0.55" />`;
  }
  if (bookId.includes('scifi')) {
    return `<circle cx="400" cy="520" r="180" fill="none" stroke="${palette.accentSoft}" stroke-width="16" opacity="0.75" /><ellipse cx="400" cy="520" rx="250" ry="92" fill="none" stroke="${palette.accentSoft}" stroke-width="14" opacity="0.52" /><circle cx="610" cy="470" r="18" fill="${palette.accentSoft}" opacity="0.9" />`;
  }
  if (bookId.includes('fantasy')) {
    return `<path d="M395 220 L550 520 L395 840 L240 520 Z" fill="none" stroke="${palette.accentSoft}" stroke-width="18" opacity="0.72" /><path d="M395 300 L490 520 L395 740 L300 520 Z" fill="${palette.accentSoft}" opacity="0.12" />`;
  }
  if (bookId.includes('romance')) {
    return `<path d="M300 340 C240 250 120 250 120 390 C120 550 300 670 400 770 C500 670 680 550 680 390 C680 250 560 250 500 340 C470 386 430 420 400 460 C370 420 330 386 300 340 Z" fill="none" stroke="${palette.accentSoft}" stroke-width="16" opacity="0.72" />`;
  }
  return `<path d="M140 760 C260 640 340 610 420 520 S610 340 700 260" stroke="${palette.accentSoft}" stroke-width="20" fill="none" stroke-linecap="round" opacity="0.72" />`;
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

function splitCsv(value) {
  return String(value ?? '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
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

function resolveTranslationInstruction(instructions, languageCode) {
  return instructions[languageCode] ?? instructions['*'] ?? '';
}

async function writeExportArtifact(options, baseName, label, content, extension = '.md') {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'exports',
    baseName,
    label,
    extension
  });

  await writeText(artifactPath.filePath, content);
  return {
    baseName,
    label,
    iteration: artifactPath.iteration,
    filePath: artifactPath.filePath,
    relativePath: artifactPath.relativePath
  };
}

async function writeExportDataArtifact(options, baseName, label, value) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'exports',
    baseName,
    label
  });

  await writeStructuredMarkdown(artifactPath.filePath, {
    title: `${baseName} ${label}`,
    lead: 'Structured export metadata stored in Markdown form.',
    sections: [
      {
        heading: 'Languages',
        lines: (value.targetLanguages ?? []).map((entry) => `- ${entry}`)
      }
    ],
    data: value
  });
  return {
    baseName,
    label,
    iteration: artifactPath.iteration,
    filePath: artifactPath.filePath,
    relativePath: artifactPath.relativePath
  };
}
