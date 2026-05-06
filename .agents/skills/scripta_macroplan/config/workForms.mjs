export const WORK_FORMS = {
  'short-story': { targetWords: 3600, chapterCount: 3, scenesPerChapter: 2 },
  novelette: { targetWords: 9600, chapterCount: 5, scenesPerChapter: 3 },
  novella: { targetWords: 18000, chapterCount: 6, scenesPerChapter: 4 },
  novel: { targetWords: 62000, chapterCount: 10, scenesPerChapter: 5 },
  'series-volume': { targetWords: 96000, chapterCount: 12, scenesPerChapter: 6 }
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
