import test from 'node:test';
import assert from 'node:assert/strict';
import { createBlock, serializeBlocks, parseCnl, collectPlaceholdersFromBlocks, collectReferencesFromText, replacePlaceholdersInBlock, replaceReferencesInBlock } from '../.agents/skills/scripta_symbolic_plan_generation/core/cnl.mjs';

test('CNL serialization and parsing preserve block structure', () => {
  const blocks = [
    createBlock('central-idea', 'define', [
      { name: 'hook-pattern', value: 'costed-power' },
      { name: 'protagonist', value: '{{character:PERSON_001}}' }
    ], ['Free text hint.'])
  ];

  const text = serializeBlocks(blocks);
  const parsed = parseCnl(text);

  assert.equal(parsed[0].identifier, 'central-idea');
  assert.equal(parsed[0].verb, 'define');
  assert.equal(parsed[0].fields[0].value, 'costed-power');
  assert.equal(parsed[0].freeLines[0], 'Free text hint.');
});

test('placeholder replacement rewrites semantic values and keeps structure', () => {
  const block = createBlock('scene-001-01', 'define', [
    { name: 'participants', value: '{{character:PERSON_001}}, {{character:PERSON_002}}' }
  ]);
  const replaced = replacePlaceholdersInBlock(block, {
    '{{character:PERSON_001}}': 'Mira',
    '{{character:PERSON_002}}': 'Theo'
  });

  assert.equal(collectPlaceholdersFromBlocks([replaced]).length, 0);
  assert.equal(replaced.fields[0].value, 'Mira, Theo');
});

test('CNL references preserve block links and can be resolved separately', () => {
  const block = createBlock('dialogue-turn-001-01-01', 'line', [
    { name: 'scene', value: '$scene-001-01' },
    { name: 'speaker', value: '$character-protagonist-001' }
  ]);
  const text = serializeBlocks([block]);
  const parsed = parseCnl(text);
  const replaced = replaceReferencesInBlock(parsed[0], {
    '$scene-001-01': 'the flood memorial crypt',
    '$character-protagonist-001': 'Mira Solari'
  });

  assert.equal(collectReferencesFromText(text).length, 2);
  assert.equal(parsed[0].fields[0].value, '$scene-001-01');
  assert.equal(replaced.fields[1].value, 'Mira Solari');
});
