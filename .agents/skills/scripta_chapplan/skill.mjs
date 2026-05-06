import { runChapPlan } from './pipeline/chapPlan.mjs';

export async function runSkill(options = {}) {
  return runChapPlan(options);
}

export default runSkill;
