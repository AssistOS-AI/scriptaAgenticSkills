import { runMicroPlan } from './pipeline/microPlan.mjs';

export async function runSkill(options = {}) {
  return runMicroPlan(options);
}

export default runSkill;
