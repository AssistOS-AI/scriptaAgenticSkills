import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { generateSymbolicSeed } from '../pipeline/symbolicPlanGeneration.mjs';

test('symbolic generation creates append-only macro, chapter, and micro artifacts', async () => {
  const workspace = await createTempWorkspace('scripta-seed-');

  try {
    const firstRun = await generateSymbolicSeed({
      bookId: 'seed-book',
      baselineProfile: 'detective-police',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      seed: 'test-seed'
    });
    const secondRun = await generateSymbolicSeed({
      bookId: 'seed-book',
      baselineProfile: 'detective-police',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      seed: 'test-seed'
    });

    assert.equal(firstRun.artifacts.length, 9);
    assert.equal(secondRun.artifacts.length, 9);
    assert.notEqual(firstRun.artifacts[0].relativePath, secondRun.artifacts[0].relativePath);

    const firstBookContent = await readFile(firstRun.artifacts[0].filePath, 'utf8');
    const secondBookContent = await readFile(secondRun.artifacts[0].filePath, 'utf8');

    assert.equal(firstBookContent, secondBookContent);
    assert.match(firstBookContent, /\{\{character:protagonist-001\}\}/);
    assert.match(firstBookContent, /hook-pattern:/);
  } finally {
    await workspace.cleanup();
  }
});
