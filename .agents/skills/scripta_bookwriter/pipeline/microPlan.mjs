import { generateSymbolicSeed } from './symbolicPlanGeneration.mjs';

export async function runMicroPlan(options = {}) {
  return generateSymbolicSeed({ ...options, stage: 'micro' });
}
