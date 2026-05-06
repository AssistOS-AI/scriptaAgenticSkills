import { mkdir, readdir, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PRESERVED_ROOT_ENTRIES = new Set(['clean.js', 'specs']);

export async function cleanQaWorkspace(qaRoot = resolve(process.cwd(), 'QA')) {
  const resolvedRoot = resolve(qaRoot);
  await mkdir(resolvedRoot, { recursive: true });

  const entries = await readdir(resolvedRoot, { withFileTypes: true });
  for (const entry of entries) {
    if (PRESERVED_ROOT_ENTRIES.has(entry.name)) {
      continue;
    }

    await rm(join(resolvedRoot, entry.name), { recursive: true, force: true });
  }

  await mkdir(join(resolvedRoot, 'specs'), { recursive: true });
  return resolvedRoot;
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : null;
const scriptPath = fileURLToPath(import.meta.url);

if (invokedPath && invokedPath === scriptPath) {
  const qaRoot = await cleanQaWorkspace();
  process.stdout.write(`Cleaned QA workspace: ${qaRoot}\n`);
}
