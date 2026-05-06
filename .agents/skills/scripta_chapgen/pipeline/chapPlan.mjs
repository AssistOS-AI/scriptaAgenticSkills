import { generateSymbolicSeed } from './symbolicPlanGeneration.mjs';

export async function runChapPlan(options = {}) {
  return generateSymbolicSeed({ ...options, stage: 'chapters' });
}
