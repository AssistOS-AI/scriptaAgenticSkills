import { generateSymbolicSeed } from '../../../runtime/pipeline/symbolicPlanGeneration.mjs';

export async function runSkill(options = {}) {
  return generateSymbolicSeed(options);
}

export default runSkill;
