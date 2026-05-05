import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { listLatestStageArtifacts } from '../core/workspace.mjs';
import { runBookPipeline } from '../pipeline/runBookPipeline.mjs';

test('full pipeline generates drafts, exports, and validation without placeholder residue', async () => {
  const workspace = await createTempWorkspace('scripta-pipeline-');

  try {
    const result = await runBookPipeline({
      bookId: 'pipeline-book',
      baselineProfile: 'science-fiction',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      seed: 'pipeline-seed'
    });

    const summaryPath = (await listLatestStageArtifacts(result.options.workspaceRoot, 'validation', 'validation')).find((artifact) => artifact.baseName === 'summary')?.filePath;
    const reportPath = (await listLatestStageArtifacts(result.options.workspaceRoot, 'reports', 'report')).find((artifact) => artifact.baseName === 'summary')?.filePath;
    const manuscriptPath = (await listLatestStageArtifacts(result.options.workspaceRoot, 'exports')).find((artifact) => artifact.baseName === 'manuscript' && artifact.label === 'book')?.filePath;
    const tasksReportPath = (await listLatestStageArtifacts(result.options.workspaceRoot, 'reports', 'report')).find((artifact) => artifact.baseName === 'tasks')?.filePath;
    const summary = JSON.parse(await readFile(summaryPath, 'utf8'));
    const report = await readFile(reportPath, 'utf8');
    const manuscript = await readFile(manuscriptPath, 'utf8');
    const tasksReport = await readFile(tasksReportPath, 'utf8');

    assert.equal(summary.bookId, 'pipeline-book');
    assert.equal(summary.metrics.PRC, 100);
    assert.equal(summary.exportAudit.score, 100);
    assert.match(report, /Validation report/);
    assert.match(tasksReport, /Revision tasks/);
    assert.doesNotMatch(manuscript, /\{\{/);
    assert.match(manuscript, /"/);
    assert.match(manuscript, /world rule/i);
  } finally {
    await workspace.cleanup();
  }
});
