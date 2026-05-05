import { runMacroPlan } from './macroPlan.mjs';
import { runChapPlan } from './chapPlan.mjs';
import { runMicroPlan } from './microPlan.mjs';
import { runCnlEnh } from './cnlEnh.mjs';
import { runChapGen } from './chapGen.mjs';
import { runBookWriter } from './bookWriter.mjs';
import { runValidationSuite } from './validationSuite.mjs';
import { publishWorkspaceLibrary } from './bookLibrary.mjs';
import { normalizePipelineOptions } from './options.mjs';

export async function runBookPipeline(input = {}) {
  const options = normalizePipelineOptions(input);

  await runMacroPlan(options);
  await runChapPlan(options);
  await runMicroPlan(options);
  await runCnlEnh(options);
  await runChapGen(options);
  await runBookWriter(options);
  await runValidationSuite(options);
  await runBookWriter(options);
  const validationResult = await runValidationSuite(options);
  const publishedArtifacts = await publishWorkspaceLibrary({
    workspaceRoot: options.workspaceRoot,
    bookId: options.bookId,
    profile: options.baselineProfile,
    fallbackTitle: options.profile.scenario.title,
    validationSummary: validationResult.summary
  });

  return {
    options,
    validationSummary: validationResult.summary,
    publishedArtifacts
  };
}
