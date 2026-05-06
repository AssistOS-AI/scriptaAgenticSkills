import { ensureWorkspace, listLatestStageArtifacts, readStructuredMarkdown, registerStageRun } from '../core/workspace.mjs';
import { normalizePipelineOptions } from './options.mjs';
import { renderBookHtml } from './editionRenderer.mjs';
import { writeStageArtifact, writeStageDataArtifact } from './exportArtifacts.mjs';
import { createChunkTranslationTool } from '../tools/chunkTranslationTool.mjs';
import { buildLocalizedEditionFromModel } from './bookWriter.mjs';
import {
  buildChapterDisplayTitle,
  getLanguagePack,
  getProfileFlavor,
  isBuiltInBookLanguage,
  localizeProfileLabel,
  localizeScenarioTitle,
  localizeWorkForm,
  normalizeLanguageCode
} from './bookWriterLanguage.mjs';

export async function runTranslationSkill(input = {}) {
  const options = normalizePipelineOptions(input);
  await ensureWorkspace(options.workspaceRoot);

  const sourceBundleArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'exports', 'bundle');
  const sourceBundleArtifact = sourceBundleArtifacts.find((artifact) => artifact.baseName === 'translation-source');

  if (!sourceBundleArtifact) {
    throw new Error(`No translation source bundle was found in ${options.workspaceRoot}. Run "scripta bookwriter" first.`);
  }

  const sourceBundle = await readStructuredMarkdown(sourceBundleArtifact.filePath, null);
  const sourceEdition = sourceBundle?.sourceEdition;
  const translationModel = sourceBundle?.translationModel;

  if (!sourceEdition) {
    throw new Error(`The translation source bundle in ${options.workspaceRoot} is missing the source edition payload.`);
  }

  const requestedTargetLanguages = sourceBundle.requestedTargetLanguages ?? options.targetLanguages;
  const translationInstructions = sourceBundle.translationInstructions ?? options.translationInstructions;
  const sourceLanguage = normalizeLanguageCode(sourceEdition.contentLanguage ?? sourceBundle.sourceLanguage ?? options.sourceLanguage);
  const targetLanguages = requestedTargetLanguages.filter((languageCode) => normalizeLanguageCode(languageCode) !== sourceLanguage);
  const produced = [];
  const consumed = [sourceBundleArtifact.relativePath];
  const editions = [
    {
      targetLanguage: sourceEdition.requestedLanguage,
      contentLanguage: sourceEdition.contentLanguage,
      mode: sourceEdition.mode,
      translationInstruction: sourceEdition.translationInstruction,
      exportPath: sourceBundle.sourceArtifactPath
    }
  ];

  for (const targetLanguage of targetLanguages) {
    const translationTool = await createChunkTranslationTool({
      workspaceRoot: options.workspaceRoot,
      bookId: options.bookId,
      sourceLanguage,
      targetLanguage
    });
    const edition = await buildTranslatedEdition({
      sourceEdition,
      translationModel,
      targetLanguage,
      translationInstructions,
      translationTool
    });
    const readerArtifact = await writeStageArtifact({
      workspaceRoot: options.workspaceRoot,
      stage: 'translations',
      baseName: `edition-${targetLanguage}`,
      label: 'reader',
      content: renderBookHtml(edition),
      extension: '.html'
    });
    const traceArtifact = await translationTool.finalize();

    produced.push(readerArtifact, traceArtifact);
    editions.push({
      targetLanguage,
      contentLanguage: edition.contentLanguage,
      mode: edition.mode,
      translationInstruction: edition.translationInstruction,
      exportPath: readerArtifact.relativePath
    });
  }

  const bundleArtifact = await writeStageDataArtifact({
    workspaceRoot: options.workspaceRoot,
    stage: 'translations',
    baseName: 'editions',
    label: 'bundle',
    value: {
      bookId: options.bookId,
      sourceLanguage,
      targetLanguages: requestedTargetLanguages,
      editorialProfile: sourceEdition.editorialProfile,
      chapterCount: sourceEdition.chapters.length,
      editions,
      sourceEditionPath: sourceBundle.sourceArtifactPath,
      sourceBundlePath: sourceBundleArtifact.relativePath
    },
    title: 'Translated editions bundle',
    lead: 'Final reader editions assembled from the source BookWriter output and the translation stage.'
  });
  produced.push(bundleArtifact);

  await registerStageRun({
    workspaceRoot: options.workspaceRoot,
    stage: 'translations',
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

async function buildTranslatedEdition({ sourceEdition, translationModel, targetLanguage, translationInstructions, translationTool }) {
  const builtIn = isBuiltInBookLanguage(targetLanguage);
  const translationInstruction = resolveTranslationInstruction(translationInstructions, targetLanguage);
  const contentLanguage = builtIn ? targetLanguage : sourceEdition.contentLanguage;
  if (builtIn && translationModel) {
    const renderedEdition = buildLocalizedEditionFromModel(translationModel, {
      requestedLanguage: targetLanguage,
      mode: 'chunk-translation',
      translationInstruction,
      generatedWith: 'SCRIPTA Translation Skill'
    });
    await recordEditionTrace({
      translationTool,
      sourceEdition,
      renderedEdition
    });
    return renderedEdition;
  }

  const translated = builtIn
    ? {
        title: localizeScenarioTitle(sourceEdition.title, sourceEdition.profileId, targetLanguage),
        subtitle: await translationTool.translateText(sourceEdition.subtitle, 'front.subtitle'),
        premise: await translationTool.translateText(sourceEdition.premise, 'front.premise'),
        thematicStatement: await translationTool.translateText(sourceEdition.thematicStatement, 'front.thematic-statement'),
        worldRule: await translationTool.translateText(sourceEdition.worldRule, 'front.world-rule'),
        chapters: await Promise.all(sourceEdition.chapters.map(async (chapter) => ({
          ...chapter,
          displayTitle: buildChapterDisplayTitle({
            chapterNumber: String(chapter.number).padStart(2, '0'),
            role: chapter.role,
            languageCode: targetLanguage
          }),
          paragraphs: await Promise.all(
            chapter.paragraphs.map((paragraph, index) => translationTool.translateText(paragraph, `chapter.${chapter.id}.paragraph.${index + 1}`))
          )
        })))
      }
    : {
        title: sourceEdition.title,
        subtitle: sourceEdition.subtitle,
        premise: sourceEdition.premise,
        thematicStatement: sourceEdition.thematicStatement,
        worldRule: sourceEdition.worldRule,
        chapters: sourceEdition.chapters.map((chapter) => ({
          ...chapter,
          displayTitle: chapter.displayTitle,
          paragraphs: [...chapter.paragraphs]
        }))
      };

  return {
    requestedLanguage: targetLanguage,
    contentLanguage,
    mode: builtIn ? 'chunk-translation' : 'instruction-backed-fallback',
    translationInstruction,
    languagePack: getLanguagePack(contentLanguage),
    profileFlavor: getProfileFlavor(sourceEdition.profileId, contentLanguage),
    title: translated.title,
    subtitle: translated.subtitle,
    premise: translated.premise,
    thematicStatement: translated.thematicStatement,
    worldRule: translated.worldRule,
    bookId: sourceEdition.bookId,
    profileId: sourceEdition.profileId,
    workFormId: sourceEdition.workFormId,
    profileLabel: localizeProfileLabel(sourceEdition.profileId, sourceEdition.profileLabel, contentLanguage),
    workForm: localizeWorkForm(sourceEdition.workFormId, contentLanguage),
    editorialProfile: sourceEdition.editorialProfile,
    validationSummary: sourceEdition.validationSummary,
    chapters: translated.chapters,
    coverPalette: sourceEdition.coverPalette,
    unsupportedNote: builtIn
      ? null
      : `Requested target language "${targetLanguage}" was recorded, but the translation stage only ships fluent packs for English and Romanian. This edition preserves the source-language narrative while keeping the translation instruction in metadata.`,
    generatedWith: 'SCRIPTA Translation Skill'
  };
}

async function recordEditionTrace({ translationTool, sourceEdition, renderedEdition }) {
  await translationTool.recordSection({
    path: 'front.title',
    source: sourceEdition.title,
    translated: renderedEdition.title,
    metadata: { granularity: 'section' }
  });
  await translationTool.recordSection({
    path: 'front.subtitle',
    source: sourceEdition.subtitle,
    translated: renderedEdition.subtitle,
    metadata: { granularity: 'section' }
  });
  await translationTool.recordSection({
    path: 'front.premise',
    source: sourceEdition.premise,
    translated: renderedEdition.premise,
    metadata: { granularity: 'section' }
  });
  await translationTool.recordSection({
    path: 'front.thematic-statement',
    source: sourceEdition.thematicStatement,
    translated: renderedEdition.thematicStatement,
    metadata: { granularity: 'section' }
  });
  await translationTool.recordSection({
    path: 'front.world-rule',
    source: sourceEdition.worldRule,
    translated: renderedEdition.worldRule,
    metadata: { granularity: 'section' }
  });

  for (const [index, chapter] of renderedEdition.chapters.entries()) {
    const sourceChapter = sourceEdition.chapters[index];
    await translationTool.recordSection({
      path: `chapter.${chapter.id}`,
      source: sourceChapter.paragraphs.join('\n\n'),
      translated: chapter.paragraphs.join('\n\n'),
      metadata: {
        granularity: 'chapter',
        chapterNumber: chapter.number,
        paragraphCount: chapter.paragraphs.length,
        displayTitle: chapter.displayTitle
      }
    });
  }
}

function resolveTranslationInstruction(instructions, languageCode) {
  return instructions?.[languageCode] ?? instructions?.['*'] ?? '';
}
