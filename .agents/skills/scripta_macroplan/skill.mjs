import { runMacroPlan } from './pipeline/macroPlan.mjs';

export async function runSkill(options = {}) {
  return runMacroPlan(options);
}

export default runSkill;
