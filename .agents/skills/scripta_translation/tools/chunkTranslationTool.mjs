import { appendFile } from 'node:fs/promises';
import { allocateArtifactPath, writeText } from '../core/workspace.mjs';
import { localizeBookText, normalizeLanguageCode } from '../pipeline/bookWriterLanguage.mjs';

const MAX_TRANSLATION_CHUNK_LENGTH = 220;
const ROMANIAN_RESIDUE_PATTERNS = [
  /Later, in /i,
  /tries to /i,
  /reads the room too carefully/i,
  /Nothing that has opened here will close easily/i,
  /understands now that/i,
  /keeps alive the version of events/i
];

export async function createChunkTranslationTool({ workspaceRoot, bookId, sourceLanguage, targetLanguage }) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot,
    stage: 'translations',
    baseName: `edition-${targetLanguage}`,
    label: 'translation-trace'
  });
  const chunks = [];

  await writeText(
    artifactPath.filePath,
    [
      `# ${targetLanguage} translation trace`,
      '',
      'Sequential chunk translation trace for the translated reader edition.',
      '',
      `- book-id: ${bookId}`,
      `- source-language: ${sourceLanguage}`,
      `- target-language: ${targetLanguage}`
    ].join('\n') + '\n'
  );

  return {
    async translateText(text, path) {
      const value = String(text ?? '').trim();
      if (!value) {
        return '';
      }

      const translatedChunks = [];

      for (const [index, chunk] of chunkText(value).entries()) {
        const translated = translateChunk(chunk, targetLanguage);
        const entry = {
          path,
          chunkIndex: index + 1,
          source: chunk,
          translated
        };

        chunks.push(entry);
        await appendChunk(artifactPath.filePath, entry);
        translatedChunks.push(translated);
      }

      return translatedChunks.join(' ').replace(/\s+/g, ' ').trim();
    },
    async finalize() {
      await appendFile(
        artifactPath.filePath,
        [
          '',
          '<!-- scripta-data',
          JSON.stringify(
            {
              bookId,
              sourceLanguage,
              targetLanguage,
              chunkCount: chunks.length,
              chunks
            },
            null,
            2
          ),
          '-->',
          ''
        ].join('\n'),
        'utf8'
      );

      return {
        baseName: `edition-${targetLanguage}`,
        label: 'translation-trace',
        iteration: artifactPath.iteration,
        filePath: artifactPath.filePath,
        relativePath: artifactPath.relativePath,
        data: {
          bookId,
          sourceLanguage,
          targetLanguage,
          chunkCount: chunks.length,
          chunks
        }
      };
    }
  };
}

async function appendChunk(filePath, entry) {
  await appendFile(
    filePath,
    [
      '',
      `## ${entry.path} — chunk ${entry.chunkIndex}`,
      `- Source: ${entry.source}`,
      `- Translated: ${entry.translated}`
    ].join('\n') + '\n',
    'utf8'
  );
}

function chunkText(text) {
  const normalized = String(text ?? '').replace(/\s+/g, ' ').trim();
  if (!normalized) {
    return [];
  }

  const sentences = normalized.match(/"[^"]+" [^.?!]+ says\.|[^.!?]+(?:[.!?]+|$)/g)?.map((entry) => entry.trim()).filter(Boolean) ?? [normalized];
  return sentences.flatMap((sentence) => splitLongSentence(sentence));
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

function translateChunk(chunk, targetLanguage) {
  if (normalizeLanguageCode(targetLanguage) !== 'ro') {
    return chunk;
  }

  const localized = translateRomanianSegment(chunk);
  return assertNoRomanianResidue(localized);
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

function assertNoRomanianResidue(text) {
  let resolved = String(text ?? '').replace(/\s+/g, ' ').trim();

  for (const pattern of ROMANIAN_RESIDUE_PATTERNS) {
    if (pattern.test(resolved)) {
      resolved = applyRomanianTemplateTransforms(localizeBookText(resolved, 'ro')).replace(/\s+/g, ' ').trim();
    }
  }

  for (const pattern of ROMANIAN_RESIDUE_PATTERNS) {
    if (pattern.test(resolved)) {
      throw new Error(`Romanian translation residue remained visible in chunk "${resolved}".`);
    }
  }

  return resolved;
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

function locationPhrase(location, languageCode) {
  if (languageCode !== 'ro') {
    return `in ${location}`;
  }

  if (location.startsWith('un ') || location.startsWith('o ')) {
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
