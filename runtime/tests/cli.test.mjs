import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createTempWorkspace } from './testUtils.mjs';

const execFileAsync = promisify(execFile);

test('CLI seed command creates a workspace successfully', async () => {
  const workspace = await createTempWorkspace('scripta-cli-');

  try {
    const { stdout } = await execFileAsync(process.execPath, [
      './bin/scripta.mjs',
      'seed',
      '--book-id',
      'cli-book',
      '--workspace-root',
      workspace.directoryPath,
      '--baseline-profile',
      'romance-relational',
      '--chapter-count',
      '3',
      '--seed',
      'cli-seed'
    ], {
      cwd: process.cwd()
    });

    assert.match(stdout, /Generated symbolic seed artifacts for cli-book/);
  } finally {
    await workspace.cleanup();
  }
});
