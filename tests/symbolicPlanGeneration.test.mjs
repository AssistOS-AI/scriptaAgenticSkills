import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { STAGE_FOLDERS, fileExists } from '../.agents/skills/scripta_symbolic_plan_generation/core/workspace.mjs';
import { generateSymbolicSeed } from '../.agents/skills/scripta_symbolic_plan_generation/pipeline/symbolicPlanGeneration.mjs';

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

    assert.equal(firstRun.artifacts.length, 10);
    assert.equal(secondRun.artifacts.length, 10);
    assert.notEqual(firstRun.artifacts[0].relativePath, secondRun.artifacts[0].relativePath);

    const firstBookArtifact = firstRun.artifacts.find((artifact) => artifact.baseName === 'book');
    const secondBookArtifact = secondRun.artifacts.find((artifact) => artifact.baseName === 'book');
    const firstCharacterArtifact = firstRun.artifacts.find((artifact) => artifact.baseName === 'characters');
    const firstWorldArtifact = firstRun.artifacts.find((artifact) => artifact.baseName === 'world');
    const firstMicroArtifact = firstRun.artifacts.find((artifact) => artifact.relativePath.startsWith(`${STAGE_FOLDERS.micro}/`));
    const firstBookContent = await readFile(firstBookArtifact.filePath, 'utf8');
    const secondBookContent = await readFile(secondBookArtifact.filePath, 'utf8');
    const characterContent = await readFile(firstCharacterArtifact.filePath, 'utf8');
    const worldContent = await readFile(firstWorldArtifact.filePath, 'utf8');

    assert.equal(firstBookContent, secondBookContent);
    assert.equal(await fileExists(`${workspace.directoryPath}/book-vision.md`), false);
    assert.match(firstBookContent, /\$character-protagonist-001/);
    assert.match(firstBookContent, /hook-pattern:/);
    assert.match(firstBookContent, /@arc-book-main map/);
    assert.match(characterContent, /@character-protagonist-001 define/);
    assert.match(characterContent, /name: \{\{character:PERSON_001\}\}/);
    assert.match(worldContent, /name: \{\{location:LOCATION_001\}\}/);
    assert.match(worldContent, /@location-primary define/);

    const microContent = await readFile(firstMicroArtifact.filePath, 'utf8');
    assert.match(microContent, /@dialogue-turn-/);
    assert.match(microContent, /@rule-pressure-/);
    assert.match(microContent, /@pause-/);
    assert.match(microContent, /\$scene-001-01/);
  } finally {
    await workspace.cleanup();
  }
});

test('symbolic generation expands cast, locations, objects, and dialogue turns for long-form books', async () => {
  const workspace = await createTempWorkspace('scripta-seed-long-');

  try {
    const run = await generateSymbolicSeed({
      bookId: 'seed-long-book',
      baselineProfile: 'fantasy',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 12,
      targetWords: 96000,
      sceneDensity: 'high',
      dialogueDensity: 'high',
      seed: 'test-seed-long'
    });

    const characterArtifact = run.artifacts.find((artifact) => artifact.baseName === 'characters');
    const worldArtifact = run.artifacts.find((artifact) => artifact.baseName === 'world');
    const microArtifact = run.artifacts.find((artifact) => artifact.relativePath.startsWith(`${STAGE_FOLDERS.micro}/`));
    const characterContent = await readFile(characterArtifact.filePath, 'utf8');
    const worldContent = await readFile(worldArtifact.filePath, 'utf8');
    const microContent = await readFile(microArtifact.filePath, 'utf8');

    assert.match(characterContent, /@character-support-001 define/);
    assert.match(worldContent, /@location-tertiary-001 define/);
    assert.match(worldContent, /@plot-element-secondary-001 define/);
    assert.ok((microContent.match(/^@dialogue-turn-/gm) ?? []).length >= 20);
    assert.ok((microContent.match(/^@scene-/gm) ?? []).length >= 5);
  } finally {
    await workspace.cleanup();
  }
});
