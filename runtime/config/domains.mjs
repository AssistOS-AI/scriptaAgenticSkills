import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export const DOMAIN_VALUES = require('./domains.json');

export function isAllowedValue(domainGroup, key, value) {
  return DOMAIN_VALUES[domainGroup]?.[key]?.includes(value) ?? false;
}
