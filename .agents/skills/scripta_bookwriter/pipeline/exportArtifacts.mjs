import { allocateArtifactPath, writeStructuredMarkdown, writeText } from '../core/workspace.mjs';

export async function writeStageArtifact({
  workspaceRoot,
  stage,
  baseName,
  label,
  content,
  extension = '.md'
}) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot,
    stage,
    baseName,
    label,
    extension
  });

  await writeText(artifactPath.filePath, content);
  return {
    baseName,
    label,
    iteration: artifactPath.iteration,
    filePath: artifactPath.filePath,
    relativePath: artifactPath.relativePath
  };
}

export async function writeStageDataArtifact({
  workspaceRoot,
  stage,
  baseName,
  label,
  value,
  title = `${baseName} ${label}`,
  lead = 'Structured stage metadata stored in Markdown form.',
  sections = null
}) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot,
    stage,
    baseName,
    label
  });
  const resolvedSections = sections ?? buildDefaultSections(value);

  await writeStructuredMarkdown(artifactPath.filePath, {
    title,
    lead,
    sections: resolvedSections,
    data: value
  });
  return {
    baseName,
    label,
    iteration: artifactPath.iteration,
    filePath: artifactPath.filePath,
    relativePath: artifactPath.relativePath
  };
}

function buildDefaultSections(value) {
  const targetLanguages = value?.targetLanguages ?? value?.requestedTargetLanguages ?? [];

  if (!Array.isArray(targetLanguages) || targetLanguages.length === 0) {
    return [];
  }

  return [
    {
      heading: 'Languages',
      lines: targetLanguages.map((entry) => `- ${entry}`)
    }
  ];
}
