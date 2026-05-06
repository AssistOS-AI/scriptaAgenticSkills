import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export const COMMAND_SKILLS = {
  seed: 'scripta_symbolic_plan_generation',
  macroplan: 'scripta_macroplan',
  chapplan: 'scripta_chapplan',
  microplan: 'scripta_microplan',
  cnlenh: 'scripta_cnlenh',
  chapgen: 'scripta_chapgen',
  bookwriter: 'scripta_bookwriter',
  translate: 'scripta_translation',
  validate: 'scripta_validation_suite'
};

export function resolveSkillModulePath(skillName) {
  return resolve(process.cwd(), '.agents/skills', skillName, 'skill.mjs');
}

export async function loadSkillModule(skillName) {
  const modulePath = resolveSkillModulePath(skillName);
  return import(pathToFileURL(modulePath).href);
}

export async function runSkillByName(skillName, options = {}) {
  const skillModule = await loadSkillModule(skillName);
  const runner = skillModule.runSkill ?? skillModule.default;

  if (typeof runner !== 'function') {
    throw new Error(`Skill "${skillName}" does not export a runnable skill entry.`);
  }

  return runner(options);
}
