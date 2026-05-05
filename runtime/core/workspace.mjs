import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

export const STAGE_FOLDERS = {
  macro: 'macro',
  chapters: 'chapters',
  micro: 'micro',
  cnl: 'cnl',
  drafts: 'drafts',
  validation: 'validation',
  reports: 'reports',
  exports: 'exports'
};

const MANIFEST_NAME = 'pipeline-manifest.json';

export function resolveWorkspaceRoot(workspaceRoot, bookId) {
  return resolve(workspaceRoot ?? join(process.cwd(), 'QA', bookId ?? 'book-workspace'));
}

export async function ensureWorkspace(workspaceRoot) {
  await mkdir(workspaceRoot, { recursive: true });

  for (const folderName of Object.values(STAGE_FOLDERS)) {
    await mkdir(resolve(workspaceRoot, folderName), { recursive: true });
  }
}

export async function readJson(filePath, fallback = null) {
  try {
    const content = await readFile(filePath, 'utf8');
    return JSON.parse(content);
  } catch {
    return fallback;
  }
}

export async function writeJson(filePath, value) {
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

export async function writeText(filePath, content) {
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, content, 'utf8');
}

export async function readText(filePath) {
  return readFile(filePath, 'utf8');
}

export async function fileExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function listFiles(directoryPath) {
  if (!(await fileExists(directoryPath))) {
    return [];
  }

  return readdir(directoryPath);
}

function parseArtifactFileName(fileName) {
  const match = fileName.match(/^(.*?)\.(.*?)\.iter-(\d{3})(\.[a-z0-9]+)$/);

  if (!match) {
    return null;
  }

  return {
    baseName: match[1],
    label: match[2],
    iteration: Number(match[3]),
    extension: match[4],
    fileName
  };
}

export async function allocateArtifactPath({ workspaceRoot, stage, baseName, label, extension = '.md' }) {
  const stageFolder = STAGE_FOLDERS[stage];

  if (!stageFolder) {
    throw new Error(`Unknown workspace stage "${stage}".`);
  }

  const directoryPath = resolve(workspaceRoot, stageFolder);
  await mkdir(directoryPath, { recursive: true });

  const escapedBaseName = baseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^${escapedBaseName}\\.${escapedLabel}\\.iter-(\\d{3})${extension.replace('.', '\\.')}$`);
  const files = await listFiles(directoryPath);
  const iterations = files
    .map((fileName) => Number(fileName.match(pattern)?.[1] ?? 0))
    .filter((iteration) => iteration > 0);
  const iteration = String((iterations.length ? Math.max(...iterations) : 0) + 1).padStart(3, '0');
  const fileName = `${baseName}.${label}.iter-${iteration}${extension}`;

  return {
    iteration: Number(iteration),
    filePath: resolve(directoryPath, fileName),
    relativePath: `${stageFolder}/${fileName}`
  };
}

export async function loadManifest(workspaceRoot) {
  return readJson(resolve(workspaceRoot, MANIFEST_NAME), {
    runs: [],
    latest: {},
    book: {}
  });
}

export async function saveManifest(workspaceRoot, manifest) {
  await writeJson(resolve(workspaceRoot, MANIFEST_NAME), manifest);
}

export async function registerStageRun({ workspaceRoot, stage, consumed = [], produced = [], context = {} }) {
  const manifest = await loadManifest(workspaceRoot);
  const runIndex = manifest.runs.length + 1;
  const normalizedProduced = produced.map((artifact) => ({
    stage,
    ...artifact
  }));

  manifest.runs.push({
    runIndex,
    stage,
    consumed,
    produced: normalizedProduced,
    context
  });
  manifest.latest[stage] = normalizedProduced;

  if (context.book) {
    manifest.book = { ...manifest.book, ...context.book };
  }

  await saveManifest(workspaceRoot, manifest);
  return manifest;
}

export async function latestArtifacts(workspaceRoot, stage) {
  const manifest = await loadManifest(workspaceRoot);
  return manifest.latest[stage] ?? [];
}

export async function listLatestStageArtifacts(workspaceRoot, stage, labelPrefix = null) {
  const stageFolder = STAGE_FOLDERS[stage];

  if (!stageFolder) {
    throw new Error(`Unknown workspace stage "${stage}".`);
  }

  const directoryPath = resolve(workspaceRoot, stageFolder);
  const files = await listFiles(directoryPath);
  const grouped = new Map();

  for (const fileName of files) {
    const parsed = parseArtifactFileName(fileName);

    if (!parsed) {
      continue;
    }

    if (labelPrefix && !parsed.label.startsWith(labelPrefix)) {
      continue;
    }

    const groupKey = `${parsed.baseName}:${parsed.label}`;
    const current = grouped.get(groupKey);

    if (!current || parsed.iteration > current.iteration) {
      grouped.set(groupKey, {
        ...parsed,
        filePath: resolve(directoryPath, fileName),
        relativePath: `${stageFolder}/${fileName}`
      });
    }
  }

  return [...grouped.values()].sort((left, right) => left.fileName.localeCompare(right.fileName));
}
