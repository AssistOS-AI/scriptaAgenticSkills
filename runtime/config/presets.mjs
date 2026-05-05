import { createRequire } from 'node:module';
import { createSeededRandom } from '../core/random.mjs';
import { titleCase } from '../core/text.mjs';
import { DOMAIN_VALUES, COMMAND_CONFIGS, isAllowedByProfile } from './domains.mjs';

const require = createRequire(import.meta.url);

const PROFILE_OPTIONS = require('./profile-options.json');
const NAMING_OPTIONS = require('./naming.json');

export const WORK_FORMS = {
  'short-story': { targetWords: 3600, chapterCount: 3, scenesPerChapter: 2 },
  novelette: { targetWords: 7600, chapterCount: 4, scenesPerChapter: 3 },
  novella: { targetWords: 14000, chapterCount: 5, scenesPerChapter: 3 },
  novel: { targetWords: 42000, chapterCount: 8, scenesPerChapter: 3 },
  'series-volume': { targetWords: 70000, chapterCount: 10, scenesPerChapter: 4 }
};

export function getProfile(profileId) {
  const profile = PROFILE_OPTIONS[profileId];

  if (!profile) {
    throw new Error(`Unknown baseline profile "${profileId}".`);
  }

  return structuredClone(profile);
}

export function materializeProfile(profileId, { seed, brief, title }) {
  const profile = getProfile(profileId);
  const random = createSeededRandom(`${seed}:profile`);
  const constraints = profile.constraints;

  return {
    id: profileId,
    label: profile.label,
    genreMode: profile.genreMode,
    hookPattern: random.pick(constraints.centralIdea.hookPatterns),
    tensionSource: random.pick(constraints.centralIdea.tensionSources),
    themeTopic: random.pick(constraints.theme.topics),
    themeShape: random.pick(constraints.theme.moralShapes),
    narrativeModel: random.pick(constraints.narrativeModel.modelNames),
    macroForm: random.pick(constraints.structure.macroForms),
    worldDomain: random.pick(constraints.worldbuilding.domains),
    magicDeterminacy: pickNullable(random, constraints.worldbuilding.magicDeterminacy),
    sequenceType: random.pick(constraints.sequence.types),
    focalizationMode: random.pick(COMMAND_CONFIGS.scene.focalizations),
    narratorMode: random.pick(COMMAND_CONFIGS.expression.narratorModes),
    constraints,
    profile,
    brief
  };
}

export function generatePlaceholderName(stableId, seed) {
  const random = createSeededRandom(`${seed}:${stableId}:character-name`);
  return `${random.pick(NAMING_OPTIONS.characters.givenNames)} ${random.pick(NAMING_OPTIONS.characters.familyNames)}`;
}

export function generatePlaceholderOrganization(stableId, seed) {
  const random = createSeededRandom(`${seed}:${stableId}:organization-name`);
  return `${random.pick(NAMING_OPTIONS.organizations.prefixes)} ${random.pick(NAMING_OPTIONS.organizations.nouns)}`;
}

export function generatePlaceholderLocation(stableId, seed, fallback = null) {
  const random = createSeededRandom(`${seed}:${stableId}:location-name`);

  if (fallback) {
    return fallback;
  }

  return `the ${random.pick(NAMING_OPTIONS.locations.prefixes)} ${random.pick(NAMING_OPTIONS.locations.nouns)}`.replace(/\s+/g, ' ');
}

export function normalizeWorkForm(workForm) {
  const normalized = workForm ?? 'short-story';
  const size = WORK_FORMS[normalized];

  if (!size) {
    throw new Error(`Unknown work form "${normalized}".`);
  }

  return { workForm: normalized, ...size };
}

export function normalizeSceneDensity(sceneDensity) {
  const density = sceneDensity ?? 'medium';

  if (!['low', 'medium', 'high'].includes(density)) {
    throw new Error(`Unsupported scene density "${density}".`);
  }

  return density;
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