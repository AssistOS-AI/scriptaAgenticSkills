import { ensureWorkspace, listLatestStageArtifacts, readStructuredMarkdown, registerStageRun } from '../core/workspace.mjs';
import { normalizePipelineOptions } from './options.mjs';
import { renderBookHtml } from './editionRenderer.mjs';
import { writeStageArtifact, writeStageDataArtifact } from './exportArtifacts.mjs';
import {
  buildChapterDisplayTitle,
  getLanguagePack,
  getProfileFlavor,
  isBuiltInBookLanguage,
  localizeBookText,
  localizeProfileLabel,
  localizeScenarioTitle,
  localizeWorkForm,
  normalizeLanguageCode
} from './bookWriterLanguage.mjs';

const MAX_TRANSLATION_CHUNK_LENGTH = 220;

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
    const trace = [];
    const edition = buildTranslatedEdition({
      sourceEdition,
      targetLanguage,
      translationInstructions,
      trace
    });
    const readerArtifact = await writeStageArtifact({
      workspaceRoot: options.workspaceRoot,
      stage: 'translations',
      baseName: `edition-${targetLanguage}`,
      label: 'reader',
      content: renderBookHtml(edition),
      extension: '.html'
    });
    const traceArtifact = await writeStageDataArtifact({
      workspaceRoot: options.workspaceRoot,
      stage: 'translations',
      baseName: `edition-${targetLanguage}`,
      label: 'translation-trace',
      value: {
        bookId: options.bookId,
        sourceLanguage,
        targetLanguage,
        chunkCount: trace.length,
        chunks: trace
      },
      title: `${targetLanguage} translation trace`,
      lead: 'Sequential chunk translation trace for the translated reader edition.'
    });

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

function buildTranslatedEdition({ sourceEdition, targetLanguage, translationInstructions, trace }) {
  const builtIn = isBuiltInBookLanguage(targetLanguage);
  const translationInstruction = resolveTranslationInstruction(translationInstructions, targetLanguage);
  const contentLanguage = builtIn ? targetLanguage : sourceEdition.contentLanguage;
  const translated = builtIn
    ? {
        title: localizeScenarioTitle(sourceEdition.title, sourceEdition.profileId, targetLanguage),
        subtitle: translateText(sourceEdition.subtitle, targetLanguage, 'front.subtitle', trace),
        premise: translateText(sourceEdition.premise, targetLanguage, 'front.premise', trace),
        thematicStatement: translateText(sourceEdition.thematicStatement, targetLanguage, 'front.thematic-statement', trace),
        worldRule: translateText(sourceEdition.worldRule, targetLanguage, 'front.world-rule', trace),
        chapters: sourceEdition.chapters.map((chapter) => ({
          ...chapter,
          displayTitle: buildChapterDisplayTitle({
            chapterNumber: String(chapter.number).padStart(2, '0'),
            role: chapter.role,
            languageCode: targetLanguage
          }),
          paragraphs: chapter.paragraphs.map((paragraph, index) => translateText(paragraph, targetLanguage, `chapter.${chapter.id}.paragraph.${index + 1}`, trace))
        }))
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

function translateText(text, targetLanguage, path, trace) {
  const value = String(text ?? '').trim();
  if (!value) {
    return '';
  }

  const chunks = chunkText(value);
  const translatedChunks = chunks.map((chunk, index) => {
    const translated = translateChunk(chunk, targetLanguage);
    trace.push({
      path,
      chunkIndex: index + 1,
      source: chunk,
      translated
    });
    return translated;
  });

  return translatedChunks.join(' ').replace(/\s+/g, ' ').trim();
}

function chunkText(text) {
  const normalized = String(text ?? '').replace(/\s+/g, ' ').trim();
  if (!normalized) {
    return [];
  }

  const sentences = normalized.match(/"[^"]+" [^.?!]+ says\.|[^.!?]+(?:[.!?]+|$)/g)?.map((entry) => entry.trim()).filter(Boolean) ?? [normalized];
  return sentences.flatMap((sentence) => splitLongSentence(sentence));
}

function translateChunk(chunk, targetLanguage) {
  if (normalizeLanguageCode(targetLanguage) !== 'ro') {
    return chunk;
  }

  return translateRomanianSegment(chunk);
}

function translateRomanianSegment(segment) {
  const trimmed = String(segment ?? '').replace(/\s+/g, ' ').trim();
  if (!trimmed) {
    return '';
  }

  const direct = localizeBookText(trimmed, 'ro');
  const transformed = applyRomanianTemplateTransforms(direct);
  return transformed.replace(/\s+/g, ' ').trim();
}

function applyRomanianTemplateTransforms(text) {
  const reachesMatch = text.match(/^(.+?) reaches (.+?), where (.+?)\.$/i);
  if (reachesMatch) {
    const [, subject, location, clause] = reachesMatch;
    return `${subject} ajunge ${locationPhrase(translateRomanianSegment(location), 'ro')}, unde ${lowerFirst(translateRomanianSegment(clause))}.`;
  }

  const readsRoomMatch = text.match(/^(.+?) reads the room too carefully, while (.+?) keeps alive the version of events other people would rather believe\.$/i);
  if (readsRoomMatch) {
    const [, observer, keeper] = readsRoomMatch;
    return `${observer} citeste prea atent incaperea, iar ${keeper} mentine vie versiunea faptelor pe care ceilalti ar prefera sa o creada.`;
  }

  const inLocationMatch = text.match(/^In (.+?), (.+?)\.$/i);
  if (inLocationMatch) {
    const [, location, clause] = inLocationMatch;
    return `${sentenceCase(locationPhrase(translateRomanianSegment(location), 'ro'))}, ${lowerFirst(translateRomanianSegment(clause))}.`;
  }

  const laterLocationMatch = text.match(/^Later, in (.+?), (.+?)\.$/i);
  if (laterLocationMatch) {
    const [, location, clause] = laterLocationMatch;
    return `Mai tarziu, ${locationPhrase(translateRomanianSegment(location), 'ro')}, ${lowerFirst(translateRomanianSegment(clause))}.`;
  }

  const triesMatch = text.match(/^(.+?) tries to (.+?), but (.+?)\.$/i);
  if (triesMatch) {
    const [, subject, goal, obstacle] = triesMatch;
    return `${subject} incearca sa ${lowerFirst(translateRomanianSegment(goal))}, dar ${lowerFirst(translateRomanianSegment(obstacle))}.`;
  }

  const dialogueMatch = text.match(/^"(.+)" (.+?) says\.$/i);
  if (dialogueMatch) {
    const [, line, speaker] = dialogueMatch;
    return `"${sentenceCase(stripTerminalPunctuation(translateRomanianSegment(line)))}" spune ${speaker}.`;
  }

  const closingMatch = text.match(/^Nothing that has opened here will close easily\.(?: (.+))?$/i);
  if (closingMatch) {
    const [, remainder] = closingMatch;
    if (!remainder) {
      return 'Nimic din ceea ce s-a deschis aici nu se va inchide usor.';
    }

    return `Nimic din ceea ce s-a deschis aici nu se va inchide usor. ${sentenceCase(stripTerminalPunctuation(translateRomanianSegment(remainder)))}.`;
  }

  const understandsMatch = text.match(/^(.+?) understands now that (.+?)\.$/i);
  if (understandsMatch) {
    const [, subject, clause] = understandsMatch;
    return `${subject} intelege acum ca ${lowerFirst(stripTerminalPunctuation(translateRomanianSegment(clause)))}.`;
  }

  return text;
}

function resolveTranslationInstruction(instructions, languageCode) {
  return instructions?.[languageCode] ?? instructions?.['*'] ?? '';
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

function sentenceCase(value) {
  const text = String(value ?? '').trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function lowerFirst(value) {
  const text = String(value ?? '').trim();
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}

function stripTerminalPunctuation(value) {
  return String(value ?? '').trim().replace(/[.!?]+$/g, '');
}

function splitLongSentence(sentence) {
  if (sentence.length <= MAX_TRANSLATION_CHUNK_LENGTH) {
    return [sentence];
  }

  const chunks = [];
  let current = '';

  for (const fragment of sentence.split(/,\s+/)) {
    const next = current ? `${current}, ${fragment}` : fragment;
    if (next.length > MAX_TRANSLATION_CHUNK_LENGTH && current) {
      chunks.push(current);
      current = fragment;
      continue;
    }

    current = next;
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}
