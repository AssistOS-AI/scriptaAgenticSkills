import { createRequire } from 'node:module';
import { readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const require = createRequire(import.meta.url);

const DOMAIN_VALUES = require('./domains.json');

const COMMAND_CONFIGS = {};

const commandsDir = join(import.meta.dirname, 'commands');
for (const file of readdirSync(commandsDir)) {
  if (file.endsWith('.json')) {
    const key = basename(file, '.json');
    COMMAND_CONFIGS[key] = require(join(commandsDir, file));
  }
}

export { DOMAIN_VALUES, COMMAND_CONFIGS };

export function isAllowedValue(domainGroup, key, value) {
  return DOMAIN_VALUES[domainGroup]?.[key]?.includes(value) ?? false;
}

export function getCommandConfig(commandName) {
  return COMMAND_CONFIGS[commandName] ?? null;
}

export function getCommandConstraint(commandName, profileId, constraintKey) {
  const config = COMMAND_CONFIGS[commandName];
  if (!config) return null;
  const constraints = config.profileConstraints?.[profileId];
  if (!constraints) return null;
  return constraints[constraintKey] ?? null;
}

export function isAllowedByProfile(commandName, profileId, constraintKey, value) {
  const allowed = getCommandConstraint(commandName, profileId, constraintKey);
  if (allowed === null || allowed === undefined) return true;
  if (Array.isArray(allowed)) return allowed.includes(value);
  return allowed === value;
}