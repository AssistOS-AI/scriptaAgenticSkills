import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { listLatestStageArtifacts, readStructuredMarkdown } from '../core/workspace.mjs';
import { runBookPipeline } from '../pipeline/runBookPipeline.mjs';

test('BookWriter emits single-file English and Romanian reader editions', async () => {
  const workspace = await createTempWorkspace('scripta-bookwriter-');

  try {
    await runBookPipeline({
      bookId: 'bookwriter-book',
      baselineProfile: 'drama',
      workspaceRoot: workspace.directoryPath,
      chapterCount: 3,
      targetLanguages: 'en,ro',
      seed: 'bookwriter-seed'
    });

    const exportArtifacts = await listLatestStageArtifacts(workspace.directoryPath, 'exports');
    const englishHtml = await readFile(exportArtifacts.find((artifact) => artifact.baseName === 'edition-en' && artifact.label === 'reader').filePath, 'utf8');
    const romanianHtml = await readFile(exportArtifacts.find((artifact) => artifact.baseName === 'edition-ro' && artifact.label === 'reader').filePath, 'utf8');
    const bundle = await readStructuredMarkdown(exportArtifacts.find((artifact) => artifact.baseName === 'editions' && artifact.label === 'bundle').filePath, {});

    assert.match(englishHtml, /<svg/);
    assert.match(englishHtml, /Contents/);
    assert.match(englishHtml, /@media print/);
    assert.match(englishHtml, /says\./);
    assert.doesNotMatch(englishHtml, /By the end of the chapter/);
    assert.doesNotMatch(englishHtml, /The chapter question is/);
    assert.doesNotMatch(englishHtml, /Production appendix/);
    assert.doesNotMatch(englishHtml, /while the chapter still carries/);
    assert.doesNotMatch(englishHtml, /The scene closes|The scene ends/);
    assert.doesNotMatch(englishHtml, /\[object Object\]/);
    assert.doesNotMatch(englishHtml, /Stage sources/);
    assert.doesNotMatch(englishHtml, /\$[A-Za-z][A-Za-z0-9_-]*/);
    assert.match(romanianHtml, /Cuprins/);
    assert.match(romanianHtml, /Pagina de titlu/);
    assert.match(romanianHtml, /spune/);
    assert.doesNotMatch(romanianHtml, /Anexa de productie/);
    assert.doesNotMatch(romanianHtml, /Raspunsul partial al capitolului/);
    assert.doesNotMatch(romanianHtml, /Surse pe etape/);
    assert.doesNotMatch(romanianHtml, /in timp ce capitolul poarta inca presiunea/);
    assert.doesNotMatch(romanianHtml, /Scena se inchide|Scena se incheie/);
    assert.doesNotMatch(romanianHtml, /\[object Object\]/);
    assert.doesNotMatch(romanianHtml, /\{\{/);
    assert.doesNotMatch(romanianHtml, /\$[A-Za-z][A-Za-z0-9_-]*/);
    assert.deepEqual(bundle.targetLanguages, ['en', 'ro']);
  } finally {
    await workspace.cleanup();
  }
});
