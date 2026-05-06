export function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

export function titleCase(value) {
  return String(value)
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function countWords(text) {
  return tokenize(text).length;
}

export function tokenize(text) {
  return String(text)
    .toLowerCase()
    .match(/[a-z0-9']+/g) ?? [];
}

export function uniqueTokenRatio(text) {
  const tokens = tokenize(text);

  if (tokens.length === 0) {
    return 0;
  }

  return new Set(tokens).size / tokens.length;
}

export function splitParagraphs(text) {
  return String(text)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
