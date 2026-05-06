export const DEFAULT_ENTITY_MAP = {
  characters: {
    protagonist: 'PERSON_001',
    counterpart: 'PERSON_002',
    pressure: 'PERSON_003'
  },
  locations: {
    primary: 'LOCATION_001',
    secondary: 'LOCATION_002'
  },
  organizations: {
    institution: 'ORG_001'
  },
  objects: {
    plot: 'OBJECT_001'
  }
};

export function genericPlaceholderValue(entityType, stableId) {
  const normalizedType = String(entityType ?? '').toLowerCase();
  const normalizedId = String(stableId ?? '').trim().toUpperCase();

  if (normalizedId) {
    return normalizedId;
  }

  const fallbackPrefixes = {
    character: 'PERSON',
    location: 'LOCATION',
    organization: 'ORG',
    object: 'OBJECT',
    artifact: 'OBJECT'
  };

  return `${fallbackPrefixes[normalizedType] ?? 'TOKEN'}_001`;
}

export function resolveCharacterRole(entityMap, stableId) {
  return matchRole(entityMap?.characters, stableId, 'protagonist');
}

export function resolveLocationRole(entityMap, stableId) {
  return matchRole(entityMap?.locations, stableId, 'primary');
}

export function resolveOrganizationRole(entityMap, stableId) {
  return matchRole(entityMap?.organizations, stableId, 'institution');
}

export function resolveObjectRole(entityMap, stableId) {
  return matchRole(entityMap?.objects, stableId, 'plot');
}

function matchRole(group, stableId, fallbackRole) {
  const normalizedId = String(stableId ?? '').toUpperCase();

  for (const [role, mappedId] of Object.entries(group ?? {})) {
    if (String(mappedId).toUpperCase() === normalizedId) {
      return role;
    }
  }

  return fallbackRole;
}
