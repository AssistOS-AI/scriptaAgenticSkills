import { publishWorkspaceLibrary } from './bookLibrary.mjs';
import { runSkillByName } from './skillLoader.mjs';

export async function runBookPipeline(input = {}) {
  await runSkillByName('scripta_macroplan', input);
  await runSkillByName('scripta_chapplan', input);
  await runSkillByName('scripta_microplan', input);
  await runSkillByName('scripta_cnlenh', input);
  await runSkillByName('scripta_chapgen', input);
  await runSkillByName('scripta_bookwriter', input);
  await runSkillByName('scripta_translation', input);
  const validationResult = await runSkillByName('scripta_validation_suite', input);
  const options = validationResult.options;
  const publishedArtifacts = await publishWorkspaceLibrary({
    workspaceRoot: options.workspaceRoot,
    bookId: options.bookId,
    profile: options.baselineProfile,
    fallbackTitle: options.title,
    validationSummary: validationResult.summary
  });

  return {
    options,
    validationSummary: validationResult.summary,
    publishedArtifacts
  };
}
