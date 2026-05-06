const PLACEHOLDER_PATTERN = /\{\{([a-z-]+):([A-Za-z0-9_-]+)\}\}/g;
const REFERENCE_PATTERN = /\$([A-Za-z][A-Za-z0-9_-]*)/g;

export function createBlock(identifier, verb, fields = [], freeLines = []) {
  return {
    identifier,
    verb,
    fields: normalizeFieldEntries(fields),
    freeLines: [...freeLines]
  };
}

export function normalizeFieldEntries(fields) {
  if (Array.isArray(fields)) {
    return fields.map((entry) => ({ name: entry.name, value: String(entry.value) }));
  }

  return Object.entries(fields).map(([name, value]) => ({ name, value: String(value) }));
}

export function serializeBlocks(blocks) {
  return blocks.map((block) => serializeBlock(block)).join('\n\n').trimEnd() + '\n';
}

export function serializeBlock(block) {
  const header = `@${block.identifier} ${block.verb}`;
  const fieldLines = normalizeFieldEntries(block.fields).map((field) => `${field.name}: ${field.value}`);
  return [header, ...fieldLines, ...(block.freeLines ?? [])].join('\n');
}

export function parseCnl(text) {
  const blocks = [];
  let current = null;

  for (const rawLine of String(text).split(/\r?\n/)) {
    if (rawLine.startsWith('@')) {
      if (current) {
        blocks.push(current);
      }

      const [, identifier, verb] = rawLine.match(/^@([A-Za-z][A-Za-z0-9_-]*)\s+([a-z-]+)/) ?? [];

      if (!identifier || !verb) {
        throw new Error(`Invalid CNL header "${rawLine}".`);
      }

      current = createBlock(identifier, verb, [], []);
      continue;
    }

    if (!current) {
      continue;
    }

    if (!rawLine.trim()) {
      continue;
    }

    const fieldMatch = rawLine.match(/^([a-z0-9-]+):\s*(.*)$/);

    if (fieldMatch) {
      current.fields.push({ name: fieldMatch[1], value: fieldMatch[2] });
    } else {
      current.freeLines.push(rawLine);
    }
  }

  if (current) {
    blocks.push(current);
  }

  return blocks;
}

export function getFieldValue(block, fieldName) {
  if (!block) {
    return undefined;
  }

  return block.fields.find((field) => field.name === fieldName)?.value;
}

export function blockToObject(block) {
  return Object.fromEntries(block.fields.map((field) => [field.name, field.value]));
}

export function collectPlaceholdersFromText(text) {
  return [...String(text).matchAll(PLACEHOLDER_PATTERN)].map((match) => ({
    token: match[0],
    entityType: match[1],
    stableId: match[2]
  }));
}

export function collectReferencesFromText(text) {
  return [...String(text).matchAll(REFERENCE_PATTERN)].map((match) => ({
    token: match[0],
    identifier: match[1]
  }));
}

export function replacePlaceholders(text, replacements) {
  return String(text).replace(PLACEHOLDER_PATTERN, (token) => replacements[token] ?? token);
}

export function replaceReferences(text, replacements) {
  return String(text).replace(REFERENCE_PATTERN, (token) => replacements[token] ?? token);
}

export function replacePlaceholdersInBlock(block, replacements) {
  return createBlock(
    block.identifier,
    block.verb,
    block.fields.map((field) => ({ name: field.name, value: replacePlaceholders(field.value, replacements) })),
    block.freeLines.map((line) => replacePlaceholders(line, replacements))
  );
}

export function replaceReferencesInBlock(block, replacements) {
  return createBlock(
    block.identifier,
    block.verb,
    block.fields.map((field) => ({ name: field.name, value: replaceReferences(field.value, replacements) })),
    block.freeLines.map((line) => replaceReferences(line, replacements))
  );
}

export function collectPlaceholdersFromBlocks(blocks) {
  const placeholders = [];

  for (const block of blocks) {
    for (const field of block.fields) {
      placeholders.push(...collectPlaceholdersFromText(field.value));
    }

    for (const line of block.freeLines) {
      placeholders.push(...collectPlaceholdersFromText(line));
    }
  }

  return placeholders;
}

export function normalizeReferenceValue(value) {
  return String(value ?? '').trim().replace(/^\$/, '');
}

export function buildReferenceReplacements(blocks) {
  const registry = new Map();
  const replacements = {};
  const memo = new Map();
  const visiting = new Set();

  for (const block of blocks ?? []) {
    if (!block?.identifier) {
      continue;
    }

    if (block.verb === 'refine' && registry.has(block.identifier)) {
      continue;
    }

    registry.set(block.identifier, block);
  }

  for (const identifier of registry.keys()) {
    replacements[`$${identifier}`] = resolveReferenceLabel(identifier, registry, memo, visiting);
  }

  return replacements;
}

function resolveReferenceLabel(identifier, registry, memo, visiting) {
  if (memo.has(identifier)) {
    return memo.get(identifier);
  }

  if (visiting.has(identifier)) {
    return humanizeIdentifier(identifier);
  }

  const block = registry.get(identifier);

  if (!block) {
    return humanizeIdentifier(identifier);
  }

  visiting.add(identifier);
  const object = blockToObject(block);
  const candidates = [
    object.name,
    object.title,
    identifier.startsWith('scene-') ? object['time-space'] : '',
    object.motif,
    object.rule,
    object.objective,
    object.role
  ];
  const chosen = candidates.find((value) => String(value ?? '').trim()) ?? humanizeIdentifier(identifier);
  const resolved = replaceReferences(String(chosen), new Proxy({}, {
    get(_target, token) {
      return resolveReferenceLabel(String(token).replace(/^\$/, ''), registry, memo, visiting);
    }
  }));

  visiting.delete(identifier);
  memo.set(identifier, resolved);
  return resolved;
}

function humanizeIdentifier(identifier) {
  return String(identifier ?? '').replace(/-/g, ' ');
}
