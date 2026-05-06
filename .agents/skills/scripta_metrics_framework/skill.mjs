import { listLatestStageArtifacts, readStructuredMarkdown } from './core/workspace.mjs';
import { normalizePipelineOptions } from './pipeline/options.mjs';

export async function runSkill(options = {}) {
  const normalized = normalizePipelineOptions(options);
  const validationArtifacts = await listLatestStageArtifacts(normalized.workspaceRoot, 'validation', 'validation');
  const summaryArtifact = validationArtifacts.find((artifact) => artifact.baseName === 'summary');

  if (!summaryArtifact) {
    throw new Error(`No validation summary was found in ${normalized.workspaceRoot}. Run "scripta validate" first.`);
  }

  const summary = await readStructuredMarkdown(summaryArtifact.filePath, null);
  if (!summary?.metrics) {
    throw new Error(`The validation summary in ${normalized.workspaceRoot} does not expose a metrics payload.`);
  }

  return {
    options: normalized,
    metrics: summary.metrics,
    summary
  };
}

export default runSkill;
