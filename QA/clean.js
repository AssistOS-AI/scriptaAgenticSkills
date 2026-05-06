import { mkdir, readdir, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function cleanQaWorkspace(qaRoot = resolve(process.cwd(), 'QA')) {
  const resolvedRoot = resolve(qaRoot);
  await mkdir(resolvedRoot, { recursive: true });

  const entries = await readdir(resolvedRoot, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && /^qa-/.test(entry.name)) {
      await rm(join(resolvedRoot, entry.name), { recursive: true, force: true });
    }
  }
  return resolvedRoot;
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : null;
const scriptPath = fileURLToPath(import.meta.url);

if (invokedPath && invokedPath === scriptPath) {
  const qaRoot = await cleanQaWorkspace();
  process.stdout.write(`Cleaned QA workspace: ${qaRoot}\n`);
}
