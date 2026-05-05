import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { slugify } from '../core/text.mjs';

export async function loadQaBookInputs({ sourceRoot, outputRoot }) {
  const entries = await readdir(sourceRoot, { withFileTypes: true });
  const books = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const visionPath = join(sourceRoot, entry.name, 'book-vision.md');
    try {
      const raw = await readFile(visionPath, 'utf8');
      const parsed = parseBookVisionMarkdown(raw, { sourcePath: visionPath });
      books.push({
        ...parsed,
        visionPath,
        visionContent: raw,
        workspaceRoot: resolve(outputRoot, parsed.bookId)
      });
    } catch (error) {
      if (error?.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  return books.sort((left, right) => left.bookId.localeCompare(right.bookId));
}

export function parseBookVisionMarkdown(content, { sourcePath = '' } = {}) {
  const { metadata, body } = splitFrontmatter(content);
  const sections = splitSections(body);
  const title = firstMeaningful(
    metadata.title,
    extractHeading(body),
    metadata['book-id'] ? metadata['book-id'].replace(/-/g, ' ') : ''
  );
  const bookId = String(metadata['book-id'] ?? slugify(title));
  const characters = parseNamedSubsections(sections['Main characters']);
  const locations = parseNamedSubsections(sections['Main locations']);
  const scenes = parseSceneSections(sections['Key scenes']);
  const constraints = normalizeDictionary(parseKeyValueBlock(sections.Constraints));
  const themeAnchors = normalizeDictionary(parseKeyValueBlock(sections['Theme anchors']));

  return {
    bookId,
    title,
    baselineProfile: String(metadata.profile ?? 'drama'),
    profile: String(metadata.profile ?? 'drama'),
    workForm: String(metadata['work-form'] ?? 'novelette'),
    chapterCount: Number(metadata['chapter-count'] ?? (countSceneGroups(scenes) || 4)),
    sceneDensity: String(metadata['scene-density'] ?? 'medium'),
    targetLanguages: normalizeArray(metadata['target-languages'], ['en', 'ro']),
    brief: firstMeaningful(cleanBody(sections['Core idea']), cleanBody(sections['Short story']), `Vision packet for ${title}`),
    storySummary: cleanBody(sections['Short story']),
    sourceLanguage: String(metadata['source-language'] ?? 'en'),
    translationInstructions: {},
    vision: {
      coreIdea: firstMeaningful(cleanBody(sections['Core idea']), cleanBody(sections['Short story'])),
      storySummary: cleanBody(sections['Short story']),
      storyQuestion: cleanBody(sections['Story question']),
      dilemma: cleanBody(sections.Dilemma),
      themeQuestion: themeAnchors['theme-question'] ?? '',
      themeStatement: themeAnchors['theme-statement'] ?? '',
      poleA: themeAnchors['pole-a'] ?? '',
      poleB: themeAnchors['pole-b'] ?? '',
      characters: {
        protagonist: normalizeDictionary(characters.Protagonist),
        counterpart: normalizeDictionary(characters.Counterpart),
        pressure: normalizeDictionary(characters.Pressure)
      },
      locations: {
        primary: normalizeDictionary(locations.Primary),
        secondary: normalizeDictionary(locations.Secondary)
      },
      scenes,
      constraints
    },
    sourceVisionPath: resolve(sourcePath || join(dirname(sourcePath), 'book-vision.md'))
  };
}

function splitFrontmatter(content) {
  const normalized = String(content ?? '').replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return { metadata: {}, body: normalized };
  }

  const endIndex = normalized.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return { metadata: {}, body: normalized };
  }

  const rawMeta = normalized.slice(4, endIndex);
  return {
    metadata: parseKeyValueBlock(rawMeta),
    body: normalized.slice(endIndex + 5)
  };
}

function splitSections(body) {
  const sections = {};
  const matches = [...String(body ?? '').matchAll(/^##\s+(.+)\n([\s\S]*?)(?=^##\s+|\Z)/gm)];
  for (const [, heading, sectionBody] of matches) {
    sections[heading.trim()] = sectionBody.trim();
  }
  return sections;
}

function parseNamedSubsections(sectionBody) {
  const groups = {};
  const matches = [...String(sectionBody ?? '').matchAll(/^###\s+(.+)\n([\s\S]*?)(?=^###\s+|\Z)/gm)];
  for (const [, heading, body] of matches) {
    groups[heading.trim()] = parseKeyValueBlock(body);
  }
  return groups;
}

function parseSceneSections(sectionBody) {
  const groups = {};
  const subsections = parseNamedSubsections(sectionBody);
  for (const [heading, values] of Object.entries(subsections)) {
    const role = heading.replace(/-\d+$/, '');
    if (!groups[role]) {
      groups[role] = [];
    }
    groups[role].push(normalizeDictionary(values));
  }
  return groups;
}

function parseKeyValueBlock(block) {
  const values = {};

  for (const line of String(block ?? '').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || !trimmed.includes(':')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf(':');
    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    values[key] = parseScalar(rawValue);
  }

  return values;
}

function parseScalar(rawValue) {
  const value = String(rawValue ?? '').trim();
  if (!value) {
    return '';
  }
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
    return value.slice(1, -1);
  }
  if (value === 'null') {
    return null;
  }
  if (value === 'true' || value === 'false') {
    return value === 'true';
  }
  if (/^\d+$/.test(value)) {
    return Number(value);
  }
  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => entry.replace(/^['"]|['"]$/g, ''));
  }
  return value;
}

function normalizeDictionary(values = {}) {
  return Object.fromEntries(
    Object.entries(values ?? {}).map(([key, value]) => [key, value === 'undefined' ? '' : value ?? ''])
  );
}

function normalizeArray(value, fallback) {
  if (Array.isArray(value) && value.length > 0) {
    return value.map((entry) => String(entry).trim()).filter(Boolean);
  }
  return [...fallback];
}

function extractHeading(body) {
  return String(body ?? '').match(/^#\s+(.+)$/m)?.[1]?.trim() ?? '';
}

function cleanBody(value) {
  return String(value ?? '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ')
    .trim();
}

function firstMeaningful(...values) {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  return '';
}

function countSceneGroups(scenes) {
  return Object.keys(scenes ?? {}).length;
}
