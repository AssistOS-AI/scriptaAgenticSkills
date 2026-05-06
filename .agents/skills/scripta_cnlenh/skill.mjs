import { runCnlEnh } from './pipeline/cnlEnh.mjs';

export async function runSkill(options = {}) {
  return runCnlEnh(options);
}

export default runSkill;
