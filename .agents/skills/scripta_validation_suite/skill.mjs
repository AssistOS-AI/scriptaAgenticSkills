import { runValidationSuite } from '../../../runtime/pipeline/validationSuite.mjs';

export async function runSkill(options = {}) {
  return runValidationSuite(options);
}

export default runSkill;
