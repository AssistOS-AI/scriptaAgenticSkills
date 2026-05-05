import { copyFile, mkdir } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';
import { listLatestStageArtifacts, readJson, readText, writeJson, writeText } from '../core/workspace.mjs';

export async function publishWorkspaceLibrary({
  workspaceRoot,
  bookId,
  profile,
  fallbackTitle,
  validationSummary,
  summaryRoot = null
}) {
  const qaRoot = summaryRoot ?? detectQaRoot(workspaceRoot);

  if (!qaRoot) {
    return {
      summaryRoot: null,
      publishedEditions: [],
      metricsPage: null
    };
  }

  const editionArtifacts = await listLatestStageArtifacts(workspaceRoot, 'exports', 'reader');
  const publishedEditions = [];
  const metricsPage = `books/metrics/${bookId}.html`;
  const metricsSnapshot = pickMetricsSnapshot(validationSummary);

  for (const artifact of editionArtifacts) {
    const languageCode = artifact.baseName.replace(/^edition-/, '');
    const targetDirectory = `${qaRoot}/books/${languageCode}`;
    const targetPath = `${targetDirectory}/${bookId}.html`;
    const html = await readText(artifact.filePath);
    const editionTitle = html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? fallbackTitle;

    await mkdir(targetDirectory, { recursive: true });
    await copyFile(artifact.filePath, targetPath);

    publishedEditions.push({
      bookId,
      title: editionTitle,
      profile,
      languageCode,
      workspaceSource: artifact.relativePath,
      publishedPath: `books/${languageCode}/${bookId}.html`,
      metricsPage,
      metricsSnapshot
    });
  }

  await writeMetricsPage({
    qaRoot,
    bookId,
    fallbackTitle,
    profile,
    publishedEditions,
    validationSummary
  });

  const manifestPath = `${qaRoot}/books/books-manifest.json`;
  const manifest = await readJson(manifestPath, { books: [] });
  const mergedBooks = mergePublishedBooks(manifest.books ?? [], publishedEditions);

  await writeJson(manifestPath, { books: mergedBooks });
  await writeLibraryIndexes(qaRoot, mergedBooks);

  return {
    summaryRoot: qaRoot,
    publishedEditions,
    metricsPage
  };
}

function detectQaRoot(workspaceRoot) {
  const normalized = resolve(workspaceRoot);
  const parent = dirname(normalized);
  return basename(parent) === 'QA' ? parent : null;
}

function pickMetricsSnapshot(validationSummary) {
  if (!validationSummary) {
    return null;
  }

  return {
    NQS: validationSummary.metrics?.NQS ?? null,
    CS: validationSummary.metrics?.CS ?? null,
    CAR: validationSummary.metrics?.CAR ?? null,
    OI: validationSummary.metrics?.OI ?? null,
    EAP: validationSummary.metrics?.EAP ?? null
  };
}

async function writeMetricsPage({ qaRoot, bookId, fallbackTitle, profile, publishedEditions, validationSummary }) {
  await mkdir(`${qaRoot}/books/metrics`, { recursive: true });
  const title = publishedEditions.find((entry) => entry.languageCode === 'en')?.title ?? publishedEditions[0]?.title ?? fallbackTitle;
  const summary = validationSummary ?? {
    metrics: {},
    literaryIndicators: {},
    issues: [],
    revisionTasks: [],
    exportAudit: { score: 0, passedChecks: [], failedChecks: [] },
    stageAudit: {}
  };
  const metricsGrid = renderDefinitionGrid(summary.metrics);
  const literaryGrid = renderDefinitionGrid(summary.literaryIndicators);
  const issues = summary.issues?.length
    ? `<ol>${summary.issues.slice(0, 12).map((issue) => `<li><strong>${escapeHtml(issue.metric)}</strong> — ${escapeHtml(issue.chapter)}${issue.paragraph ? `, paragraph ${escapeHtml(issue.paragraph)}` : ''}: ${escapeHtml(issue.message)}</li>`).join('')}</ol>`
    : '<p>No issues were recorded in the latest validation summary.</p>';
  const tasks = summary.revisionTasks?.length
    ? `<ol>${summary.revisionTasks.slice(0, 8).map((task) => `<li><strong>${escapeHtml(task.title)}</strong> — ${escapeHtml(task.action)} <span>(${escapeHtml(task.stage)} · ${escapeHtml(task.priority)})</span></li>`).join('')}</ol>`
    : '<p>No revision tasks were emitted.</p>';
  const editions = publishedEditions.length
    ? `<ul>${publishedEditions.map((edition) => `<li><a href="../${escapeHtml(edition.languageCode)}/${escapeHtml(edition.bookId)}.html">${escapeHtml(edition.languageCode.toUpperCase())}</a> — ${escapeHtml(edition.title)}</li>`).join('')}</ul>`
    : '<p>No published editions were available.</p>';
  const stageAuditEntries = Array.isArray(summary.stageAudit)
    ? summary.stageAudit
    : Object.entries(summary.stageAudit ?? {}).map(([name, entry]) => ({ name, ...entry }));
  const stageAudit = stageAuditEntries.length
    ? `<ul>${stageAuditEntries.map((entry) => `<li><strong>${escapeHtml(entry.name)}</strong> — ${escapeHtml(entry.status)} (${escapeHtml(String(entry.score))}%)</li>`).join('')}</ul>`
    : '<p>No stage audit data was available.</p>';

  await writeText(`${qaRoot}/books/metrics/${bookId}.html`, wrapIndexHtml({
    title: `${title} — Metrics`,
    lead: `Latest SCRIPTA validation dashboard for ${bookId} (${profile}).`,
    body: `
      <p><a href="../index.html">Back to QA library</a></p>
      <div class="stat-grid">
        <div><strong>NQS</strong><span>${escapeHtml(String(summary.metrics?.NQS ?? 0))}%</span></div>
        <div><strong>CS</strong><span>${escapeHtml(String(summary.metrics?.CS ?? 0))}%</span></div>
        <div><strong>CAR</strong><span>${escapeHtml(String(summary.metrics?.CAR ?? 0))}%</span></div>
        <div><strong>Export audit</strong><span>${escapeHtml(String(summary.exportAudit?.score ?? 0))}%</span></div>
      </div>
      <h2>Published editions</h2>
      ${editions}
      <h2>Computational metrics</h2>
      ${metricsGrid}
      <h2>Literary indicators</h2>
      ${literaryGrid}
      <h2>Stage audit</h2>
      ${stageAudit}
      <h2>Localized issues</h2>
      ${issues}
      <h2>Revision tasks</h2>
      ${tasks}
    `
  }));
}

async function writeLibraryIndexes(summaryRoot, publishedBooks) {
  const languageCodes = [...new Set(publishedBooks.map((entry) => entry.languageCode))].sort();

  await writeText(`${summaryRoot}/books/index.html`, renderBooksIndex(publishedBooks));
  await mkdir(`${summaryRoot}/books/metrics`, { recursive: true });
  await writeText(`${summaryRoot}/books/metrics/index.html`, renderMetricsIndex(publishedBooks));

  for (const languageCode of languageCodes) {
    const books = publishedBooks
      .filter((entry) => entry.languageCode === languageCode)
      .sort((left, right) => left.bookId.localeCompare(right.bookId));

    await writeText(`${summaryRoot}/books/${languageCode}/index.html`, renderLanguageIndex(languageCode, books));
  }
}

function mergePublishedBooks(existingBooks, publishedEditions) {
  const untouched = existingBooks.filter((entry) => !publishedEditions.some((edition) => edition.bookId === entry.bookId && edition.languageCode === entry.languageCode));
  return [...untouched, ...publishedEditions].sort((left, right) => {
    const bookOrder = left.bookId.localeCompare(right.bookId);
    return bookOrder !== 0 ? bookOrder : left.languageCode.localeCompare(right.languageCode);
  });
}

function renderBooksIndex(publishedBooks) {
  const languageCodes = [...new Set(publishedBooks.map((entry) => entry.languageCode))].sort();
  const languageLinks = languageCodes
    .map((languageCode) => `<li><a href="./${languageCode}/index.html">${escapeHtml(languageCode.toUpperCase())}</a> — ${countLanguageBooks(publishedBooks, languageCode)} books</li>`)
    .join('\n');

  return wrapIndexHtml({
    title: 'SCRIPTA QA Book Library',
    lead: 'Open the final HTML reader editions by language or inspect the latest metrics dashboard for every QA book.',
    body: `<ul>${languageLinks}</ul><p><a href="./metrics/index.html">Open the metrics library</a></p>`
  });
}

function renderLanguageIndex(languageCode, books) {
  const items = books
    .map((book) => `<li><a href="./${escapeHtml(book.bookId)}.html">${escapeHtml(book.title)}</a> <span>(${escapeHtml(book.bookId)} · ${escapeHtml(book.profile)} · <a href="../metrics/${escapeHtml(book.bookId)}.html">metrics</a>)</span></li>`)
    .join('\n');

  return wrapIndexHtml({
    title: `SCRIPTA QA Books — ${languageCode.toUpperCase()}`,
    lead: `Final reader editions published for ${languageCode.toUpperCase()}.`,
    body: `<p><a href="../index.html">Back to language list</a></p><ul>${items}</ul>`
  });
}

function renderMetricsIndex(publishedBooks) {
  const books = uniqueBooks(publishedBooks);
  const items = books
    .map((book) => `<li><a href="./${escapeHtml(book.bookId)}.html">${escapeHtml(book.title)}</a> <span>(${escapeHtml(book.profile)} · NQS ${escapeHtml(String(book.metricsSnapshot?.NQS ?? 0))}% · CS ${escapeHtml(String(book.metricsSnapshot?.CS ?? 0))}% · CAR ${escapeHtml(String(book.metricsSnapshot?.CAR ?? 0))}%)</span></li>`)
    .join('\n');

  return wrapIndexHtml({
    title: 'SCRIPTA QA Metrics Library',
    lead: 'Per-book HTML dashboards with the latest normalized indicators, localized issues, and remediation tasks.',
    body: `<p><a href="../index.html">Back to QA library</a></p><ul>${items}</ul>`
  });
}

function uniqueBooks(publishedBooks) {
  const grouped = new Map();

  for (const entry of publishedBooks) {
    if (!grouped.has(entry.bookId) || entry.languageCode === 'en') {
      grouped.set(entry.bookId, entry);
    }
  }

  return [...grouped.values()].sort((left, right) => left.bookId.localeCompare(right.bookId));
}

function renderDefinitionGrid(entries) {
  const pairs = Object.entries(entries ?? {});

  if (pairs.length === 0) {
    return '<p>No values were available.</p>';
  }

  return `<dl class="metric-grid">${pairs.map(([name, value]) => `<div><dt>${escapeHtml(name)}</dt><dd>${escapeHtml(`${value}%`)}</dd></div>`).join('')}</dl>`;
}

function wrapIndexHtml({ title, lead, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>
    body { margin: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f4efe8; color: #181818; }
    main { max-width: 900px; margin: 0 auto; padding: 48px 20px 72px; }
    .panel { background: #fffaf3; border-radius: 18px; box-shadow: 0 18px 54px rgba(17, 18, 22, 0.08); padding: 28px 30px; }
    h1 { margin-top: 0; font-size: 2.2rem; }
    h2 { margin-top: 2rem; }
    p, li { line-height: 1.65; }
    ul, ol { padding-left: 1.25rem; }
    a { color: #7b2f5f; text-decoration: none; }
    a:hover { text-decoration: underline; }
    span { color: #6a615a; }
    .stat-grid, .metric-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
    .stat-grid div, .metric-grid div { background: rgba(123, 47, 95, 0.06); border-radius: 14px; padding: 12px 14px; }
    .stat-grid strong, .metric-grid dt { display: block; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em; color: #6a615a; }
    .stat-grid span, .metric-grid dd { display: block; margin-top: 8px; font-size: 1.3rem; font-weight: 700; color: #181818; }
    .metric-grid dd { margin-left: 0; }
  </style>
</head>
<body>
  <main>
    <div class="panel">
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(lead)}</p>
      ${body}
    </div>
  </main>
</body>
</html>
`;
}

function countLanguageBooks(publishedBooks, languageCode) {
  return publishedBooks.filter((entry) => entry.languageCode === languageCode).length;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
