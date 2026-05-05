import { parseCnl } from '../core/cnl.mjs';
import { listLatestStageArtifacts, readJson, readText } from '../core/workspace.mjs';

export async function readLatestBlocksByBase(workspaceRoot, stage, labelPrefix = null) {
  const artifacts = await listLatestStageArtifacts(workspaceRoot, stage, labelPrefix);
  const entries = [];

  for (const artifact of artifacts) {
    entries.push({
      artifact,
      blocks: parseCnl(await readText(artifact.filePath))
    });
  }

  return entries;
}

export async function readManifest(workspaceRoot) {
  return readJson(`${workspaceRoot}/pipeline-manifest.json`, { runs: [], latest: {}, book: {} });
}
