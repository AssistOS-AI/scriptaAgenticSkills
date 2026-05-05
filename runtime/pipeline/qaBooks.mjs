import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { writeStructuredMarkdown, writeText } from '../core/workspace.mjs';
import { loadQaBookInputs } from './bookVisionParser.mjs';
import { runBookPipeline } from './runBookPipeline.mjs';

export async function runQaGeneration(baseRoot = null) {
  const summaries = [];
  const consolidatedTasks = [];
  const publishedBooks = [];
  const summaryRoot = resolve(baseRoot ?? `${process.cwd()}/QA`);
  const sourceRoot = resolve(`${process.cwd()}/QA`);
  const qaBooks = await loadQaBookInputs({
    sourceRoot,
    outputRoot: summaryRoot
  });

  await resetQaOutput(summaryRoot);

  for (const qaBook of qaBooks) {
      await prepareBookWorkspace(qaBook, summaryRoot);
      const result = await runBookPipeline({
        ...qaBook,
        baselineProfile: qaBook.profile,
        workspaceRoot: qaBook.workspaceRoot,
        targetLanguages: qaBook.targetLanguages,
        seed: `${qaBook.bookId}:qa`
      });
    const publishedEditions = result.publishedArtifacts?.publishedEditions ?? [];

    summaries.push({
      bookId: result.options.bookId,
      profile: result.options.baselineProfile,
      workspaceRoot: result.options.workspaceRoot,
      metrics: result.validationSummary.metrics,
      exportAudit: result.validationSummary.exportAudit,
      stageAudit: result.validationSummary.stageAudit,
      revisionTasks: result.validationSummary.revisionTasks,
      publishedEditions,
      metricsPage: result.publishedArtifacts?.metricsPage ?? null
    });
    publishedBooks.push(...publishedEditions);

    consolidatedTasks.push(...result.validationSummary.revisionTasks.map((task) => ({
      bookId: result.options.bookId,
      profile: result.options.baselineProfile,
      ...task
    })));
  }

  await mkdir(summaryRoot, { recursive: true });
  await writeStructuredMarkdown(`${summaryRoot}/qa-summary.md`, {
    title: 'QA summary',
    lead: 'One-line summary for each canonical QA book run.',
    sections: [
      {
        heading: 'Books',
        lines: summaries.map((entry) => `- ${entry.bookId} (${entry.profile}) — NQS ${entry.metrics.NQS}% · CS ${entry.metrics.CS}% · CAR ${entry.metrics.CAR}%`)
      }
    ],
    data: { books: summaries }
  });
  await writeStructuredMarkdown(`${summaryRoot}/qa-review.md`, {
    title: 'QA review',
    lead: 'Consolidated QA review across all canonical books.',
    sections: [
      {
        heading: 'Books',
        lines: summaries.map((entry) => `- ${entry.bookId}: export ${entry.exportAudit.score}% · stages ${entry.stageAudit.map((stage) => `${stage.name} ${stage.score}%`).join(', ')}`)
      },
      {
        heading: 'Top tasks',
        lines: consolidatedTasks.map((task) => `- ${task.bookId}: ${task.title} (${task.priority})`)
      }
    ],
    data: {
      books: summaries.map((entry) => ({
        bookId: entry.bookId,
        profile: entry.profile,
        exportAudit: entry.exportAudit,
        stageAudit: entry.stageAudit,
        topTasks: entry.revisionTasks.slice(0, 3),
        publishedEditions: entry.publishedEditions,
        metricsPage: entry.metricsPage
      })),
      tasks: consolidatedTasks
    }
  });
  await writeText(`${summaryRoot}/qa-tasks.md`, renderQaTaskReport(consolidatedTasks));

  return summaries;
}

async function resetQaOutput(summaryRoot) {
  await mkdir(summaryRoot, { recursive: true });

  const entries = await readdir(summaryRoot, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && entry.name === 'books') {
      await rm(join(summaryRoot, entry.name), { recursive: true, force: true });
      continue;
    }

    if (entry.isFile() && /^qa-(summary|review|tasks)\.md$/.test(entry.name)) {
      await rm(join(summaryRoot, entry.name), { force: true });
    }
  }
}

async function prepareBookWorkspace(qaBook, summaryRoot) {
  await rm(qaBook.workspaceRoot, { recursive: true, force: true });
  await mkdir(qaBook.workspaceRoot, { recursive: true });
  await writeFile(join(qaBook.workspaceRoot, 'book-vision.md'), qaBook.visionContent, 'utf8');

  if (resolve(summaryRoot) === resolve(`${process.cwd()}/QA`)) {
    return;
  }

  const sourceBookRoot = resolve(join(`${process.cwd()}/QA`, basename(qaBook.workspaceRoot)));
  if (sourceBookRoot !== qaBook.workspaceRoot) {
    await writeFile(join(qaBook.workspaceRoot, 'book-vision.md'), qaBook.visionContent, 'utf8');
  }
}

function renderQaTaskReport(tasks) {
  return [
    '# QA revision tasks',
    '',
    ...(tasks.length === 0
      ? ['- No revision tasks were generated.']
      : tasks.map((task) => [
          `## ${task.bookId} — ${task.title}`,
          `- Profile: ${task.profile}`,
          `- Priority: ${task.priority}`,
          `- Stage: ${task.stage}`,
          `- Action: ${task.action}`,
          `- Evidence: ${task.evidence}`,
          ''
        ].join('\n')))
  ].join('\n');
}
