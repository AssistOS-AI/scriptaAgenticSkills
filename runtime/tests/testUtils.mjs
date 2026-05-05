import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export async function createTempWorkspace(prefix) {
  const directoryPath = await mkdtemp(join(tmpdir(), prefix));
  return {
    directoryPath,
    async cleanup() {
      await rm(directoryPath, { recursive: true, force: true });
    }
  };
}
