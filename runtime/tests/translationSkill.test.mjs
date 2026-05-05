import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { listLatestStageArtifacts, readStructuredMarkdown } from '../core/workspace.mjs';
import { runBookPipeline } from '../pipeline/runBookPipeline.mjs';

test('translation stage emits Romanian editions from the source bundle', async () => {
  const workspace = await createTempWorkspace('scripta-translation-');

  try {
    await runBookPipeline({
      bookId: 'translation-book',
      baselineProfile: 'science-fiction',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      targetLanguages: 'en,ro',
      seed: 'translation-seed'
    });

    const translationArtifacts = await listLatestStageArtifacts(workspace.directoryPath, 'translations');
    const romanianHtml = await readFile(translationArtifacts.find((artifact) => artifact.baseName === 'edition-ro' && artifact.label === 'reader').filePath, 'utf8');
    const trace = await readStructuredMarkdown(translationArtifacts.find((artifact) => artifact.baseName === 'edition-ro' && artifact.label === 'translation-trace').filePath, {});
    const bundle = await readStructuredMarkdown(translationArtifacts.find((artifact) => artifact.baseName === 'editions' && artifact.label === 'bundle').filePath, {});

    assert.match(romanianHtml, /Cuprins/);
    assert.match(romanianHtml, /Pagina de titlu/);
    assert.match(romanianHtml, /Nimic din ceea ce s-a deschis aici nu se va inchide usor\./);
    assert.match(romanianHtml, /Generat cu/);
    assert.doesNotMatch(romanianHtml, /in the /i);
    assert.doesNotMatch(romanianHtml, /Later, in /);
    assert.doesNotMatch(romanianHtml, /tries to /);
    assert.doesNotMatch(romanianHtml, /\{\{/);
    assert.doesNotMatch(romanianHtml, /\$[A-Za-z][A-Za-z0-9_-]*/);
    assert.ok(trace.chunkCount > 0);
    assert.deepEqual(bundle.targetLanguages, ['en', 'ro']);
    assert.equal(bundle.editions.length, 2);
  } finally {
    await workspace.cleanup();
  }
});
