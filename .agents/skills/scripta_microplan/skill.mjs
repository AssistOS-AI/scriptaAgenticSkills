import { runMicroPlan } from '../../../runtime/pipeline/microPlan.mjs';

export async function runSkill(options = {}) {
  return runMicroPlan(options);
}

export default runSkill;
