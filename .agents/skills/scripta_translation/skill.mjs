import { runTranslationSkill } from './pipeline/translationSkill.mjs';

export async function runSkill(options = {}) {
  return runTranslationSkill(options);
}

export default runSkill;
