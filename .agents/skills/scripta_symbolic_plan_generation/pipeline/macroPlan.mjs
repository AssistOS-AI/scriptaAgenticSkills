import { generateSymbolicSeed } from './symbolicPlanGeneration.mjs';

export async function runMacroPlan(options = {}) {
  return generateSymbolicSeed({ ...options, stage: 'macro' });
}
