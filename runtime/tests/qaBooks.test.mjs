import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createTempWorkspace } from './testUtils.mjs';
import { readStructuredMarkdown } from '../core/workspace.mjs';
import { runQaGeneration } from '../pipeline/qaBooks.mjs';

test('QA generation emits consolidated review and task artifacts', async () => {
    const workspace = await createTempWorkspace('scripta-qa-');

    try {
      const qaRoot = `${workspace.directoryPath}/QA`;
      const summaries = await runQaGeneration(qaRoot);
      const review = await readStructuredMarkdown(`${qaRoot}/qa-review.md`, { books: [], tasks: [] });
      const tasks = await readFile(`${qaRoot}/qa-tasks.md`, 'utf8');
      const libraryIndex = await readFile(`${qaRoot}/books/index.html`, 'utf8');
      const englishBook = await readFile(`${qaRoot}/books/en/qa-drama-silence.html`, 'utf8');
      const romanianBook = await readFile(`${qaRoot}/books/ro/qa-drama-silence.html`, 'utf8');
      const metricsIndex = await readFile(`${qaRoot}/books/metrics/index.html`, 'utf8');
    const metricsPage = await readFile(`${qaRoot}/books/metrics/qa-drama-silence.html`, 'utf8');

    assert.equal(summaries.length, 5);
    assert.equal(review.books.length, 5);
      assert.ok(review.tasks.length > 0);
      assert.ok(review.books.every((book) => book.exportAudit.score === 100));
      assert.ok(review.books.every((book) => Array.isArray(book.publishedEditions) && book.publishedEditions.length >= 2));
      assert.match(tasks, /QA revision tasks/);
      assert.match(tasks, /Improve final prose polish/);
      assert.match(await readFile(`${qaRoot}/qa-summary.md`, 'utf8'), /# QA summary/);
      assert.match(libraryIndex, /SCRIPTA QA Book Library/);
    assert.match(libraryIndex, /metrics library/i);
    assert.match(englishBook, /When the Silence Returns/);
    assert.match(romanianBook, /Cand se intoarce tacerea/);
    assert.match(metricsIndex, /SCRIPTA QA Metrics Library/);
    assert.match(metricsPage, /Localized issues/);
  } finally {
    await workspace.cleanup();
  }
});
