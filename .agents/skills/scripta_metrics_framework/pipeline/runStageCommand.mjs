import { generateSymbolicSeed } from './symbolicPlanGeneration.mjs';
import { runMacroPlan } from './macroPlan.mjs';
import { runChapPlan } from './chapPlan.mjs';
import { runMicroPlan } from './microPlan.mjs';
import { runCnlEnh } from './cnlEnh.mjs';
import { runChapGen } from './chapGen.mjs';
import { runBookWriter } from './bookWriter.mjs';
import { runTranslationSkill } from './translationSkill.mjs';
import { runValidationSuite } from './validationSuite.mjs';
import { runBookPipeline } from './runBookPipeline.mjs';
import { runQaGeneration } from './qaBooks.mjs';

export async function runStageCommand(command, options = {}) {
  switch (command) {
    case 'seed': {
      const result = await generateSymbolicSeed(options);
      return {
        message: `Generated symbolic seed artifacts for ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'macroplan': {
      const result = await runMacroPlan(options);
      return {
        message: `Generated MacroPlan seed artifacts for ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'chapplan': {
      const result = await runChapPlan(options);
      return {
        message: `Generated ChapPlan seed artifacts for ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'microplan': {
      const result = await runMicroPlan(options);
      return {
        message: `Generated MicroPlan seed artifacts for ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'cnlenh': {
      const result = await runCnlEnh(options);
      return {
        message: `Generated CNLEnh successor artifacts for ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'chapgen': {
      const result = await runChapGen(options);
      return {
        message: `Generated chapter drafts for ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'bookwriter': {
      const result = await runBookWriter(options);
      return {
        message: `Generated source export artifacts for ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'translate': {
      const result = await runTranslationSkill(options);
      return {
        message: `Generated translated reader editions for ${result.options.bookId}.`,
        outputPath: result.options.workspaceRoot
      };
    }
    case 'validate': {
      const result = await runValidationSuite(options);
      return {
        message: `Validated ${result.options.bookId} and wrote reports.`,
        outputPath: result.options.workspaceRoot
      };
    }
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
