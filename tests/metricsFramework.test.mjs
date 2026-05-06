import test from 'node:test';
import assert from 'node:assert/strict';
import { computeCar, computeCs, computeNqs } from '../.agents/skills/scripta_validation_suite/pipeline/metricsFramework.mjs';

test('metrics formulas follow the documented weighting model', () => {
  assert.equal(computeCar({ VAD_score: 100, TOP_score: 90, BCI: 80 }), 92);
  assert.equal(computeCs({ CCI: 90, SFSG: 80, CAD_score: 70, EAP: 60 }), 78);
  assert.equal(computeNqs({ CS: 80, thematicDepth: 75, characterComplexity: 70, stylisticQuality: 65, emotionalImpact: 60, OI: 90, NCS: 85 }), 75);
});
