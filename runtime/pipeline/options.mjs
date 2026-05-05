import { materializeProfile, normalizeSceneDensity, normalizeWorkForm, selectNarrativeModel } from '../config/presets.mjs';
import { resolveWorkspaceRoot } from '../core/workspace.mjs';
import { slugify, titleCase } from '../core/text.mjs';

export function normalizePipelineOptions(input = {}) {
  const baselineProfile = input.baselineProfile ?? input.profile ?? 'drama';
  const workFormInfo = normalizeWorkForm(input.workForm);
  const chapterCount = Number(input.chapterCount ?? workFormInfo.chapterCount);
  const targetWords = Number(input.targetWords ?? workFormInfo.targetWords);
  const rawTitle = String(input.title ?? titleCase(input.bookId ?? baselineProfile));
  const bookId = slugify(input.bookId ?? rawTitle);
  const seed = String(input.seed ?? `${baselineProfile}:${bookId}:${chapterCount}`);
  const profile = materializeProfile(baselineProfile, {
    seed,
    brief: input.brief,
    title: rawTitle
  });

  return {
    bookId,
    title: rawTitle,
    brief: input.brief ?? profile.scenario.blueprintPremise,
    baselineProfile,
    profile,
    workspaceRoot: resolveWorkspaceRoot(input.workspaceRoot, bookId),
    workForm: workFormInfo.workForm,
    chapterCount,
    targetWords,
    sceneDensity: normalizeSceneDensity(input.sceneDensity),
    dialogueDensity: input.dialogueDensity ?? 'medium',
    descriptionDensity: input.descriptionDensity ?? 'medium',
    narratorMode: input.narratorMode ?? 'close-third-person',
    focalizationMode: input.focalizationMode ?? 'internal-single',
    narrativeModel: selectNarrativeModel(profile, input.narrativeModel),
    macroForm: input.macroForm ?? profile.macroForm,
    genreMode: input.genreMode ?? profile.genreMode,
    variationLevel: input.variationLevel ?? 'balanced',
    randomPolicy: input.randomPolicy ?? 'constrained',
    placeholderStyle: input.placeholderStyle ?? 'typed',
    resolutionPolicy: input.resolutionPolicy ?? 'resolve-before-draft',
    sourceLanguage: normalizeLanguageCode(input.sourceLanguage ?? 'en'),
    targetLanguages: normalizeTargetLanguages(input.targetLanguages ?? input.targetLanguage ?? input.languages),
    editorialProfile: input.editorialProfile ?? 'literary-smooth',
    translationInstructions: normalizeTranslationInstructions(input.translationInstructions),
    initialCharacters: normalizeList(input.initialCharacters),
    initialScenes: normalizeList(input.initialScenes),
    initialLocations: normalizeList(input.initialLocations),
    initialConstraints: normalizeList(input.initialConstraints),
    seed
  };
}

function normalizeLanguageCode(value) {
  return String(value ?? 'en').trim().toLowerCase();
}

function normalizeTargetLanguages(value) {
  const rawValues = Array.isArray(value)
    ? value
    : String(value ?? 'en,ro')
        .split(/[,\s]+/)
        .map((entry) => entry.trim())
        .filter(Boolean);

  const normalized = [...new Set(rawValues.map(normalizeLanguageCode).filter(Boolean))];
  return normalized.length > 0 ? normalized : ['en', 'ro'];
}

function normalizeTranslationInstructions(value) {
  if (!value) {
    return {};
  }

  if (typeof value === 'object' && !Array.isArray(value)) {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, instruction]) => String(instruction).trim())
        .map(([languageCode, instruction]) => [normalizeLanguageCode(languageCode), String(instruction).trim()])
    );
  }

  const parts = String(value)
    .split('||')
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    return {};
  }

  if (parts.every((entry) => !entry.includes('='))) {
    return { '*': parts.join(' ') };
  }

  return Object.fromEntries(
    parts.map((entry) => {
      const separatorIndex = entry.indexOf('=');
      if (separatorIndex === -1) {
        return ['*', entry.trim()];
      }

      return [normalizeLanguageCode(entry.slice(0, separatorIndex) || '*'), entry.slice(separatorIndex + 1).trim()];
    }).filter(([, instruction]) => instruction)
  );
}

function normalizeList(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value.map((entry) => String(entry).trim()).filter(Boolean);
  }

  return String(value)
    .split(/\n|,/)
    .map((entry) => entry.trim())
    .filter(Boolean);
}
