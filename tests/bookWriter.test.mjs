import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { listLatestStageArtifacts, readStructuredMarkdown } from '../orchestration/workspace.mjs';
import { runBookWriter } from '../.agents/skills/scripta_bookwriter/pipeline/bookWriter.mjs';

test('BookWriter emits the source edition and the translation source bundle', async () => {
  const workspace = await createTempWorkspace('scripta-bookwriter-');

  try {
    await import('../orchestration/runBookPipeline.mjs').then(({ runBookPipeline }) => runBookPipeline({
      bookId: 'bookwriter-book',
      baselineProfile: 'drama',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      targetLanguages: 'en',
      seed: 'bookwriter-pipeline-seed'
    }));

    await runBookWriter({
      bookId: 'bookwriter-book',
      baselineProfile: 'drama',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      targetLanguages: 'en,ro',
      seed: 'bookwriter-seed'
    });

    const exportArtifacts = await listLatestStageArtifacts(workspace.directoryPath, 'exports');
    const englishHtml = await readFile(exportArtifacts.find((artifact) => artifact.baseName === 'edition-en' && artifact.label === 'reader').filePath, 'utf8');
    const bundle = await readStructuredMarkdown(exportArtifacts.find((artifact) => artifact.baseName === 'editions' && artifact.label === 'bundle').filePath, {});
    const sourceBundle = await readStructuredMarkdown(exportArtifacts.find((artifact) => artifact.baseName === 'translation-source' && artifact.label === 'bundle').filePath, {});

    assert.match(englishHtml, /<svg/);
    assert.match(englishHtml, /Contents/);
    assert.match(englishHtml, /@media print/);
    assert.match(englishHtml, /"[^"]+," (?:says|asks|warns|counters|presses|insists)/);
    assert.doesNotMatch(englishHtml, /By the end of the chapter/);
    assert.doesNotMatch(englishHtml, /The chapter question is/);
    assert.doesNotMatch(englishHtml, /Production appendix/);
    assert.doesNotMatch(englishHtml, /Generated with|Translation instruction|Book ID/);
    assert.doesNotMatch(englishHtml, /while the chapter still carries/);
    assert.doesNotMatch(englishHtml, /The scene closes|The scene ends/);
    assert.doesNotMatch(englishHtml, /\[object Object\]/);
    assert.doesNotMatch(englishHtml, /Stage sources/);
    assert.doesNotMatch(englishHtml, /\$[A-Za-z][A-Za-z0-9_-]*/);
    assert.deepEqual(bundle.targetLanguages, ['en', 'ro']);
    assert.deepEqual(bundle.pendingTranslations, ['ro']);
    assert.equal(sourceBundle.sourceEdition.contentLanguage, 'en');
    assert.equal(sourceBundle.sourceEdition.generatedWith, 'SCRIPTA BookWriter');
  } finally {
    await workspace.cleanup();
  }
});
