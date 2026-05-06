import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { generateSymbolicSeed } from '../.agents/skills/scripta_symbolic_plan_generation/pipeline/symbolicPlanGeneration.mjs';
import { runCnlEnh } from '../.agents/skills/scripta_cnlenh/pipeline/cnlEnh.mjs';

test('CNLEnh resolves placeholders and emits refinement artifacts', async () => {
  const workspace = await createTempWorkspace('scripta-cnlenh-');

  try {
    await generateSymbolicSeed({
      bookId: 'enh-book',
      baselineProfile: 'fantasy',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      seed: 'enh-seed'
    });
    const result = await runCnlEnh({
      bookId: 'enh-book',
      baselineProfile: 'fantasy',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      seed: 'enh-seed'
    });

    const chapterArtifact = result.artifacts.find((artifact) => artifact.label === 'chapter-refined-plan');
    const chapterText = await readFile(chapterArtifact.filePath, 'utf8');

    assert.doesNotMatch(chapterText, /\{\{character:/);
    assert.match(chapterText, /@chapter-001 refine/);
    assert.match(chapterText, /should:/);
  } finally {
    await workspace.cleanup();
  }
});
