export function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function computeCar({ VAD_score, TOP_score, BCI, hardViolation = false }) {
  const raw = 0.40 * VAD_score + 0.35 * TOP_score + 0.25 * BCI;
  return hardViolation ? Math.min(49, clampScore(raw)) : clampScore(raw);
}

export function computeCs({ CCI, SFSG, CAD_score, EAP }) {
  return clampScore(0.35 * CCI + 0.25 * SFSG + 0.20 * CAD_score + 0.20 * EAP);
}

export function computeNqs({ CS, thematicDepth, characterComplexity, stylisticQuality, emotionalImpact, OI, NCS }) {
  return clampScore(
    0.40 * CS +
    0.15 * thematicDepth +
    0.15 * characterComplexity +
    0.10 * stylisticQuality +
    0.10 * emotionalImpact +
    0.05 * OI +
    0.05 * NCS
  );
}
