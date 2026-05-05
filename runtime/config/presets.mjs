import { createRequire } from 'node:module';
import { createSeededRandom } from '../core/random.mjs';
import { titleCase } from '../core/text.mjs';
import { DOMAIN_VALUES } from './domains.mjs';

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
  const scenarioPools = profile.scenarioPools;

  return {
    id: profileId,
    label: profile.label,
    genreMode: profile.genreMode,
    themeTopic: random.pick(profile.themeTopics),
    themeShape: random.pick(profile.themeShapes),
    narrativeModel: random.pick(profile.narrativeModels),
    macroForm: random.pick(profile.macroForms),
    hookPattern: random.pick(profile.hookPatterns),
    tensionSource: random.pick(profile.tensionSources),
    worldDomain: random.pick(profile.worldDomains),
    magicDeterminacy: pickNullable(random, profile.magicDeterminacies),
    sequenceType: random.pick(profile.sequenceTypes),
    lexicon: {
      locations: pickMany(random, profile.lexicon.locations, 3),
      organizations: pickMany(random, profile.lexicon.organizations, 3),
      objects: pickMany(random, profile.lexicon.objects, 3)
    },
    scenario: {
      title: title ?? titleCase(profileId),
      protagonistRole: random.pick(scenarioPools.protagonistRoles),
      desire: random.pick(scenarioPools.desires),
      opposition: random.pick(scenarioPools.oppositions),
      stakes: random.pick(scenarioPools.stakes),
      dilemma: random.pick(scenarioPools.dilemmas),
      storyQuestion: random.pick(scenarioPools.storyQuestions),
      thematicQuestion: random.pick(scenarioPools.thematicQuestions),
      thematicStatement: random.pick(scenarioPools.thematicStatements),
      blueprintPremise: brief || buildBlueprintPremise(random, profile.label, scenarioPools),
      worldRule: random.pick(scenarioPools.worldRules),
      wisdom: {
        cognitive: random.pick(scenarioPools.wisdom.cognitive),
        emotional: random.pick(scenarioPools.wisdom.emotional),
        moral: random.pick(scenarioPools.wisdom.moral),
        reflexive: random.pick(scenarioPools.wisdom.reflexive),
        experiential: random.pick(scenarioPools.wisdom.experiential)
      }
    }
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

function pickMany(random, values, count) {
  const unique = [...new Set(values)];
  const selections = [];

  while (selections.length < Math.min(count, unique.length)) {
    const candidate = random.pick(unique);

    if (!selections.includes(candidate)) {
      selections.push(candidate);
    }
  }

  return selections.length > 0 ? selections : unique.slice(0, count);
}

function pickNullable(random, values) {
  const choice = random.pick(values);
  return choice === undefined ? null : choice;
}

function buildBlueprintPremise(random, label, scenarioPools) {
  return `${titleCase(random.pick(scenarioPools.protagonistRoles))} must ${random.pick(scenarioPools.desires)} while facing ${random.pick(scenarioPools.oppositions)}.`;
}
