import { ensureBookVision } from '../core/workspace.mjs';

export async function ensureBookVisionDocument(options) {
  const content = [
    `# Book vision`,
    '',
    `## Core idea`,
    '',
    `- Title: ${options.title}`,
    `- Book ID: ${options.bookId}`,
    `- Baseline profile: ${options.baselineProfile}`,
    `- Work form: ${options.workForm}`,
    `- Brief: ${options.brief}`,
    '',
    `## Author-specified characters`,
    '',
    ...(options.initialCharacters.length > 0 ? options.initialCharacters.map((entry) => `- ${entry}`) : ['- None supplied in the initial request.']),
    '',
    `## Author-specified scenes`,
    '',
    ...(options.initialScenes.length > 0 ? options.initialScenes.map((entry) => `- ${entry}`) : ['- None supplied in the initial request.']),
    '',
    `## Author-specified locations`,
    '',
    ...(options.initialLocations.length > 0 ? options.initialLocations.map((entry) => `- ${entry}`) : ['- None supplied in the initial request.']),
    '',
    `## Author constraints`,
    '',
    ...(options.initialConstraints.length > 0 ? options.initialConstraints.map((entry) => `- ${entry}`) : ['- None supplied in the initial request.']),
    '',
    `## Process note`,
    '',
    `This file captures the starting vision only. All generated planning and drafting artifacts must live in the phaseX-* folders so reviewers can inspect the pipeline step by step.`
  ].join('\n');

  return ensureBookVision(options.workspaceRoot, content);
}
