import test from 'node:test';
import assert from 'node:assert/strict';
import { createBlock, serializeBlocks, parseCnl, collectPlaceholdersFromBlocks, replacePlaceholdersInBlock } from '../core/cnl.mjs';

test('CNL serialization and parsing preserve block structure', () => {
  const blocks = [
    createBlock('central-idea', 'define', [
      { name: 'hook-pattern', value: 'costed-power' },
      { name: 'protagonist', value: '{{character:protagonist-001}}' }
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
    { name: 'participants', value: '{{character:protagonist-001}}, {{character:counterpart-001}}' }
  ]);
  const replaced = replacePlaceholdersInBlock(block, {
    '{{character:protagonist-001}}': 'Ana',
    '{{character:counterpart-001}}': 'Matei'
  });

  assert.equal(collectPlaceholdersFromBlocks([replaced]).length, 0);
  assert.equal(replaced.fields[0].value, 'Ana, Matei');
});
