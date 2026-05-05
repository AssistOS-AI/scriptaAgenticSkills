const PLACEHOLDER_PATTERN = /\{\{([a-z-]+):([a-z0-9-]+)\}\}/g;

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

      const [, identifier, verb] = rawLine.match(/^@([a-z0-9-]+)\s+([a-z-]+)/) ?? [];

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

export function replacePlaceholders(text, replacements) {
  return String(text).replace(PLACEHOLDER_PATTERN, (token) => replacements[token] ?? token);
}

export function replacePlaceholdersInBlock(block, replacements) {
  return createBlock(
    block.identifier,
    block.verb,
    block.fields.map((field) => ({ name: field.name, value: replacePlaceholders(field.value, replacements) })),
    block.freeLines.map((line) => replacePlaceholders(line, replacements))
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
