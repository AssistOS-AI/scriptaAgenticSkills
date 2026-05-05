import { runCnlEnh } from '../../../runtime/pipeline/cnlEnh.mjs';

export async function runSkill(options = {}) {
  return runCnlEnh(options);
}

export default runSkill;
