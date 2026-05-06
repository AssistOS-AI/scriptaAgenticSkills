import { createRequire } from 'node:module';
import { readdirSync } from 'node:fs';
import { basename, join } from 'node:path';
import { createSeededRandom } from '../../core/random.mjs';
import { DOMAIN_VALUES } from '../domains.mjs';

const require = createRequire(import.meta.url);
const PROFILE_DEFINITIONS = {};

for (const file of readdirSync(import.meta.dirname)) {
  if (file === 'index.mjs' || !file.endsWith('.json')) {
    continue;
  }

  PROFILE_DEFINITIONS[basename(file, '.json')] = require(join(import.meta.dirname, file));
}

export function getProfileDefinition(profileId) {
  const profile = PROFILE_DEFINITIONS[profileId];

  if (!profile) {
    throw new Error(`Unknown baseline profile "${profileId}".`);
  }

  return structuredClone(profile);
}

export function materializeProfile(profileId, { seed, brief }) {
  const profile = getProfileDefinition(profileId);
  const random = createSeededRandom(`${seed}:profile`);
  const rawConstraints = profile.constraints;

  return {
    id: profileId,
    label: profile.label,
    genreMode: profile.genreMode,
    hookPattern: random.pick(rawConstraints.centralIdea.hookPatterns),
    tensionSource: random.pick(rawConstraints.centralIdea.tensionSources),
    themeTopic: random.pick(rawConstraints.theme.topics),
    themeShape: random.pick(rawConstraints.theme.moralShapes),
    narrativeModel: random.pick(rawConstraints.narrativeModel.modelNames),
    macroForm: random.pick(rawConstraints.structure.macroForms),
    worldDomain: random.pick(rawConstraints.worldbuilding.domains),
    magicDeterminacy: pickNullable(random, rawConstraints.worldbuilding.magicDeterminacy),
    sequenceType: random.pick(rawConstraints.sequence.types),
    focalizationMode: getProfilePreference(profile, 'scene', 'preferredFocalization') ?? 'internal-single',
    narratorMode: getProfilePreference(profile, 'expression', 'preferredNarratorMode') ?? 'close-third-person',
    constraints: structuredClone(rawConstraints),
    commandPreferences: structuredClone(profile.commandPreferences ?? {}),
    profile,
    brief
  };
}

export function getProfilePreference(profile, commandName, key) {
  return profile?.commandPreferences?.[commandName]?.[key] ?? null;
}

export function selectNarrativeModel(profile, requestedModel) {
  const modelName = requestedModel ?? profile.narrativeModel;

  if (!DOMAIN_VALUES.narrativeModel.modelNames.includes(modelName)) {
    throw new Error(`Unsupported narrative model "${modelName}".`);
  }

  return modelName;
}

function pickNullable(random, value) {
  if (value === null || value === undefined) {
    return null;
  }
  if (Array.isArray(value)) {
    const choice = random.pick(value);
    return choice === undefined ? null : choice;
  }
  return value;
}
