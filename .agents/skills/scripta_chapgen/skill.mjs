import { runChapGen } from './pipeline/chapGen.mjs';

export async function runSkill(options = {}) {
  return runChapGen(options);
}

export default runSkill;
