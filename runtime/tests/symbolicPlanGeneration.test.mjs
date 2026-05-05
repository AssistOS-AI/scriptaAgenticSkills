import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { BOOK_VISION_NAME, STAGE_FOLDERS } from '../core/workspace.mjs';
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

    const firstBookArtifact = firstRun.artifacts.find((artifact) => artifact.baseName === 'book');
    const secondBookArtifact = secondRun.artifacts.find((artifact) => artifact.baseName === 'book');
    const firstWorldArtifact = firstRun.artifacts.find((artifact) => artifact.baseName === 'world');
    const firstMicroArtifact = firstRun.artifacts.find((artifact) => artifact.relativePath.startsWith(`${STAGE_FOLDERS.micro}/`));
    const firstBookContent = await readFile(firstBookArtifact.filePath, 'utf8');
    const secondBookContent = await readFile(secondBookArtifact.filePath, 'utf8');
    const worldContent = await readFile(firstWorldArtifact.filePath, 'utf8');
    const visionContent = await readFile(`${workspace.directoryPath}/${BOOK_VISION_NAME}`, 'utf8');

    assert.equal(firstBookContent, secondBookContent);
    assert.match(visionContent, /# Book vision/);
    assert.match(firstBookContent, /\{\{character:protagonist-001\}\}/);
    assert.match(firstBookContent, /hook-pattern:/);
    assert.match(firstBookContent, /@arc-book-main map/);
    assert.match(worldContent, /@location-primary define/);

    const microContent = await readFile(firstMicroArtifact.filePath, 'utf8');
    assert.match(microContent, /@dialogue-turn-/);
    assert.match(microContent, /@rule-pressure-/);
    assert.match(microContent, /@pause-/);
  } finally {
    await workspace.cleanup();
  }
});
