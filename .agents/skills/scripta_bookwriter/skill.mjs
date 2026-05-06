import { runBookWriter } from './pipeline/bookWriter.mjs';

export async function runSkill(options = {}) {
  return runBookWriter(options);
}

export default runSkill;
