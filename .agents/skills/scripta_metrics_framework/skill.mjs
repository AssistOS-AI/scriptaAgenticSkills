import { runValidationSuite } from '../../../runtime/pipeline/validationSuite.mjs';

export async function runSkill(options = {}) {
  const result = await runValidationSuite(options);
  return result.summary.metrics;
}

export default runSkill;
