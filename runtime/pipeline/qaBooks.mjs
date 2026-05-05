import { mkdir } from 'node:fs/promises';
import { QA_BOOKS } from '../config/qaBooks.mjs';
import { writeStructuredMarkdown, writeText } from '../core/workspace.mjs';
import { runBookPipeline } from './runBookPipeline.mjs';

export async function runQaGeneration(baseRoot = null) {
  const summaries = [];
  const consolidatedTasks = [];
  const publishedBooks = [];
  const summaryRoot = baseRoot ?? `${process.cwd()}/QA`;

  for (const qaBook of QA_BOOKS) {
      const result = await runBookPipeline({
        ...qaBook,
        baselineProfile: qaBook.profile,
        workspaceRoot: baseRoot ? `${baseRoot}/${qaBook.bookId}` : undefined,
        targetLanguages: 'en,ro',
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
