import test from 'node:test';
import assert from 'node:assert/strict';
import { createSeededRandom } from '../.agents/skills/scripta_symbolic_plan_generation/core/random.mjs';

test('seeded random produces stable sequences for the same seed', () => {
  const first = createSeededRandom('stable-seed');
  const second = createSeededRandom('stable-seed');

  const firstSequence = [first.next(), first.next(), first.int(1, 10), first.pick(['a', 'b', 'c'])];
  const secondSequence = [second.next(), second.next(), second.int(1, 10), second.pick(['a', 'b', 'c'])];

  assert.deepEqual(firstSequence, secondSequence);
});
