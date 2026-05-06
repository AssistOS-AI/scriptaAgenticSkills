export const WORK_FORMS = {
  'short-story': { targetWords: 3600, chapterCount: 3, scenesPerChapter: 2 },
  novelette: { targetWords: 7600, chapterCount: 4, scenesPerChapter: 3 },
  novella: { targetWords: 14000, chapterCount: 5, scenesPerChapter: 3 },
  novel: { targetWords: 42000, chapterCount: 8, scenesPerChapter: 3 },
  'series-volume': { targetWords: 70000, chapterCount: 10, scenesPerChapter: 4 }
};

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
