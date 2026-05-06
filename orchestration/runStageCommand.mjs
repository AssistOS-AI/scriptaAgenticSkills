import { COMMAND_SKILLS, runSkillByName } from './skillLoader.mjs';
import { runBookPipeline } from './runBookPipeline.mjs';
import { runQaGeneration } from './qaBooks.mjs';

export async function runStageCommand(command, options = {}) {
  const skillName = COMMAND_SKILLS[command];

  if (skillName) {
    const result = await runSkillByName(skillName, options);
    return {
      message: buildStageMessage(command, result),
      outputPath: result?.options?.workspaceRoot ?? options.workspaceRoot ?? null
    };
  }

  switch (command) {
    case 'generate-book': {
      const result = await runBookPipeline(options);
      return {
        message: `Generated and validated ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'qa': {
      const summaries = await runQaGeneration();
      return {
        message: `Generated ${summaries.length} QA books under the QA workspace.`,
        outputPath: `${process.cwd()}/QA`
      };
    }
    default:
      throw new Error(`Unsupported command "${command}" in the current implementation phase.`);
  }
}

function buildStageMessage(command, result) {
  switch (command) {
    case 'seed':
      return `Generated symbolic seed artifacts for ${result.options.bookId}.`;
    case 'macroplan':
      return `Generated MacroPlan seed artifacts for ${result.options.bookId}.`;
    case 'chapplan':
      return `Generated ChapPlan seed artifacts for ${result.options.bookId}.`;
    case 'microplan':
      return `Generated MicroPlan seed artifacts for ${result.options.bookId}.`;
    case 'cnlenh':
      return `Generated CNLEnh successor artifacts for ${result.options.bookId}.`;
    case 'chapgen':
      return `Generated chapter drafts for ${result.options.bookId}.`;
    case 'bookwriter':
      return `Generated source export artifacts for ${result.options.bookId}.`;
    case 'translate':
      return `Generated translated reader editions for ${result.options.bookId}.`;
    case 'validate':
      return `Validated ${result.options.bookId} and wrote reports.`;
    default:
      return 'Command completed.';
  }
}
