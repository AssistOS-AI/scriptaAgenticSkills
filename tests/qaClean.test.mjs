import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { cleanQaWorkspace } from '../QA/clean.js';

test('QA clean preserves specs and removes generated outputs', async () => {
  const workspace = await createTempWorkspace('scripta-qa-clean-');

  try {
    const qaRoot = `${workspace.directoryPath}/QA`;
    await mkdir(`${qaRoot}/specs`, { recursive: true });
    await mkdir(`${qaRoot}/qa-drama-silence/phase8-exports`, { recursive: true });
    await writeFile(`${qaRoot}/specs/qa-drama-silence.md`, '# Spec\n', 'utf8');
    await writeFile(`${qaRoot}/qa-drama-silence/book-vision.md`, '# Generated copy\n', 'utf8');
    await writeFile(`${qaRoot}/qa-summary.md`, '# Old summary\n', 'utf8');

    await cleanQaWorkspace(qaRoot);

    assert.equal(await readFile(`${qaRoot}/specs/qa-drama-silence.md`, 'utf8'), '# Spec\n');
    await assert.rejects(readFile(`${qaRoot}/qa-drama-silence/book-vision.md`, 'utf8'));
    await assert.rejects(readFile(`${qaRoot}/qa-summary.md`, 'utf8'));
  } finally {
    await workspace.cleanup();
  }
});
