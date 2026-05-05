import { createRequire } from 'node:module';
import { createSeededRandom } from '../core/random.mjs';
import { titleCase } from '../core/text.mjs';
import { DOMAIN_VALUES, COMMAND_CONFIGS } from './domains.mjs';

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
  const rawConstraints = profile.constraints;
  const constraints = buildSoftProfileConstraints(rawConstraints);

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

function buildSoftProfileConstraints(rawConstraints) {
  return {
    ...structuredClone(rawConstraints),
    centralIdea: {
      ...rawConstraints.centralIdea,
      hookPatterns: buildSoftPreferencePool(rawConstraints.centralIdea.hookPatterns, COMMAND_CONFIGS['central-idea'].hookPatterns),
      tensionSources: buildSoftPreferencePool(rawConstraints.centralIdea.tensionSources, COMMAND_CONFIGS['central-idea'].tensionSources)
    },
    theme: {
      ...rawConstraints.theme,
      topics: buildSoftPreferencePool(rawConstraints.theme.topics, COMMAND_CONFIGS.theme.topics),
      moralShapes: buildSoftPreferencePool(rawConstraints.theme.moralShapes, COMMAND_CONFIGS.theme.moralShapes)
    },
    wisdom: {
      ...rawConstraints.wisdom,
      perspectiveModes: buildSoftPreferencePool(rawConstraints.wisdom.perspectiveModes, COMMAND_CONFIGS.wisdom.perspectiveModes),
      opennessModes: buildSoftPreferencePool(rawConstraints.wisdom.opennessModes, COMMAND_CONFIGS.wisdom.opennessModes)
    },
    structure: {
      ...rawConstraints.structure,
      macroForms: buildSoftPreferencePool(rawConstraints.structure.macroForms, COMMAND_CONFIGS.structure.macroForms),
      informationOrders: buildSoftPreferencePool(rawConstraints.structure.informationOrders, COMMAND_CONFIGS.structure.informationOrders),
      causalDensities: buildSoftPreferencePool(rawConstraints.structure.causalDensities, COMMAND_CONFIGS.structure.causalDensities)
    },
    narrativeModel: {
      ...rawConstraints.narrativeModel,
      modelNames: buildSoftPreferencePool(rawConstraints.narrativeModel.modelNames, COMMAND_CONFIGS['narrative-model'].modelNames),
      adaptationStrengths: buildSoftPreferencePool(rawConstraints.narrativeModel.adaptationStrengths, COMMAND_CONFIGS['narrative-model'].adaptationStrengths),
      corePatterns: buildSoftPreferencePool(rawConstraints.narrativeModel.corePatterns, COMMAND_CONFIGS['narrative-model'].corePatterns)
    },
    character: {
      ...rawConstraints.character,
      conflictModes: buildSoftPreferencePool(rawConstraints.character.conflictModes, COMMAND_CONFIGS.character.conflictModes),
      relationshipTypes: buildSoftPreferencePool(rawConstraints.character.relationshipTypes, COMMAND_CONFIGS.character.relationshipTypes)
    },
    worldbuilding: {
      ...rawConstraints.worldbuilding,
      domains: buildSoftPreferencePool(rawConstraints.worldbuilding.domains, COMMAND_CONFIGS.worldbuilding.domains),
      primaryRuleTypes: buildSoftPreferencePool(rawConstraints.worldbuilding.primaryRuleTypes, COMMAND_CONFIGS.worldbuilding.ruleTypes),
      secondaryRuleTypes: buildSoftPreferencePool(rawConstraints.worldbuilding.secondaryRuleTypes, COMMAND_CONFIGS.worldbuilding.secondaryRuleTypes)
    },
    sequence: {
      ...rawConstraints.sequence,
      types: buildSoftPreferencePool(rawConstraints.sequence.types, COMMAND_CONFIGS.sequence.types),
      linkLogics: buildSoftPreferencePool(rawConstraints.sequence.linkLogics, COMMAND_CONFIGS.sequence.linkLogics)
    },
    content: {
      ...rawConstraints.content,
      actionModes: buildSoftPreferencePool(rawConstraints.content.actionModes, COMMAND_CONFIGS.content.actionModes),
      conflictTypes: buildSoftPreferencePool(rawConstraints.content.conflictTypes, COMMAND_CONFIGS.content.conflictTypes)
    }
  };
}

function buildSoftPreferencePool(preferred, domainValues) {
  if (!Array.isArray(domainValues) || domainValues.length === 0) {
    return Array.isArray(preferred) ? [...preferred] : [];
  }

  if (!Array.isArray(preferred) || preferred.length === 0) {
    return [...domainValues];
  }

  const extras = domainValues.filter((value) => !preferred.includes(value));
  return [...preferred, ...preferred, ...extras];
}
