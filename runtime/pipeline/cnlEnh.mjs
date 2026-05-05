import { createBlock, collectPlaceholdersFromBlocks, replacePlaceholdersInBlock, serializeBlocks } from '../core/cnl.mjs';
import { createSeededRandom } from '../core/random.mjs';
import { STAGE_FOLDERS, allocateArtifactPath, ensureWorkspace, registerStageRun, writeStructuredMarkdown, writeText } from '../core/workspace.mjs';
import { normalizePipelineOptions } from './options.mjs';
import { readLatestBlocksByBase } from './loaders.mjs';

export async function runCnlEnh(input = {}) {
  const options = normalizePipelineOptions(input);
  await ensureWorkspace(options.workspaceRoot);
  const sourceEntries = [
    ...(await readLatestBlocksByBase(options.workspaceRoot, 'macro', 'symbolic-plan')),
    ...(await readLatestBlocksByBase(options.workspaceRoot, 'chapters', 'symbolic-plan')),
    ...(await readLatestBlocksByBase(options.workspaceRoot, 'micro', 'symbolic-plan'))
  ];

  if (sourceEntries.length === 0) {
    throw new Error(`No symbolic seed artifacts were found in ${options.workspaceRoot}. Run "scripta seed" first.`);
  }

  const replacements = buildPlaceholderMap(options, sourceEntries);
  const produced = [];
  const consumed = [];

  for (const entry of sourceEntries) {
    consumed.push(entry.artifact.relativePath);
    const resolvedBlocks = [];
    const refineBlocks = [];

    for (const block of entry.blocks) {
      const resolvedBlock = replacePlaceholdersInBlock(block, replacements);
      resolvedBlocks.push(resolvedBlock);

      if (shouldRefineBlock(block.identifier)) {
        refineBlocks.push(buildRefineBlock({
          sourceBlock: block,
          resolvedBlock,
          options,
          replacements
        }));
      }
    }

    const label = mapRefinedLabel(entry.artifact.relativePath);
    const artifact = await writeCnlArtifact(options, entry.artifact.baseName, label, serializeBlocks([...resolvedBlocks, ...refineBlocks]));
    produced.push(artifact);
  }

  const resolutionArtifact = await writeResolutionArtifact(options, 'placeholder-resolution', 'cnl-resolution', {
    bookId: options.bookId,
    baselineProfile: options.baselineProfile,
    replacements
  });
  produced.push(resolutionArtifact);

  await registerStageRun({
    workspaceRoot: options.workspaceRoot,
    stage: 'cnl',
    consumed,
    produced,
    context: {
      book: {
        bookId: options.bookId,
        baselineProfile: options.baselineProfile
      }
    }
  });

  return {
    options,
    replacements,
    artifacts: produced
  };
}

function buildPlaceholderMap(options, sourceEntries) {
  const random = createSeededRandom(`${options.seed}:cnl-resolution`);
  const placeholders = new Map();

  for (const entry of sourceEntries) {
    for (const placeholder of collectPlaceholdersFromBlocks(entry.blocks)) {
      placeholders.set(placeholder.token, placeholder);
    }
  }

  const replacements = {};

  for (const placeholder of placeholders.values()) {
    replacements[placeholder.token] = resolvePlaceholderValue(placeholder, options, random);
  }

  return replacements;
}

function resolvePlaceholderValue(placeholder, options, random) {
  const lexicon = options.profile.lexicon;

  if (placeholder.entityType === 'character') {
    if (placeholder.stableId.startsWith('protagonist')) {
      return pickStableValue(lexicon.protagonists, placeholder.token, options.seed);
    }

    if (placeholder.stableId.startsWith('counterpart')) {
      return pickStableValue(lexicon.counterparts, placeholder.token, options.seed);
    }

    if (placeholder.stableId.startsWith('pressure')) {
      return pickStableValue(lexicon.pressureFigures, placeholder.token, options.seed);
    }

    return random.pick([...lexicon.protagonists, ...lexicon.counterparts, ...lexicon.pressureFigures]);
  }

  if (placeholder.entityType === 'location') {
    return lexicon.locations[random.int(0, lexicon.locations.length - 1)];
  }

  if (placeholder.entityType === 'organization') {
    return lexicon.organizations[random.int(0, lexicon.organizations.length - 1)];
  }

  if (placeholder.entityType === 'object') {
    return lexicon.objects[random.int(0, lexicon.objects.length - 1)];
  }

  if (placeholder.entityType === 'artifact') {
    return lexicon.objects[0];
  }

  if (placeholder.entityType === 'concept') {
    return options.profile.themeTopic.replace(/-/g, ' ');
  }

  return placeholder.token;
}

function pickStableValue(values, token, seed) {
  const picker = createSeededRandom(`${seed}:${token}`);
  return values[picker.int(0, values.length - 1)];
}

function buildRefineBlock({ sourceBlock, resolvedBlock, options, replacements }) {
  const refinementLines = [];
  const sourceText = serializeBlocks([sourceBlock]);

  for (const [token, replacement] of Object.entries(replacements)) {
    if (sourceText.includes(token)) {
      refinementLines.push({ name: 'ref', value: `${token.replace(/^\{\{|\}\}$/g, '')} -> ${replacement}` });
    }
  }

  refinementLines.push({
    name: 'naming-rule',
    value: 'resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor'
  });
  refinementLines.push({
    name: 'validation-gate',
    value: 'no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly'
  });
  refinementLines.push({ name: 'should', value: genreRefinementHint(options.baselineProfile, sourceBlock.identifier) });

  return createBlock(resolvedBlock.identifier, 'refine', refinementLines, [
    `The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.`
  ]);
}

function genreRefinementHint(profileId, identifier) {
  if (identifier.startsWith('scene-')) {
    const sceneHints = {
      drama: 'let bodily tension and emotional hesitation appear before explanation',
      'detective-police': 'keep pressure procedural and evidence-led before the reveal lands',
      'science-fiction': 'balance technical detail with human disorientation',
      fantasy: 'keep the magical cost visible in action and atmosphere',
      'romance-relational': 'let attraction and defensiveness coexist inside the same exchange'
    };

    return sceneHints[profileId];
  }

  if (identifier.startsWith('dialogue-turn-')) {
    const turnHints = {
      drama: 'make each line sound emotionally specific and morally contested rather than declarative',
      'detective-police': 'keep the speech procedural on the surface while letting leverage and danger sit underneath',
      'science-fiction': 'let technical vocabulary carry ethical pressure instead of decorative jargon',
      fantasy: 'make the speech feel ritual, material, and costly at once',
      'romance-relational': 'let practical language and emotional risk coexist in the same line'
    };

    return turnHints[profileId];
  }

  if (identifier.startsWith('location-') || identifier === 'location-primary' || identifier === 'location-secondary') {
    const locationHints = {
      drama: 'make the setting socially legible and emotionally pressurized instead of merely visual',
      'detective-police': 'make the place feel procedural, political, and materially specific',
      'science-fiction': 'make the setting engineered, tactile, and ethically revealing',
      fantasy: 'make the place sensorial, mythic, and constrained by cost',
      'romance-relational': 'make the place intimate through work, routine, and shared objects'
    };

    return locationHints[profileId];
  }

  if (identifier.startsWith('rule-pressure-') || identifier.startsWith('world-rule-') || identifier.startsWith('world-reveal-')) {
    const ruleHints = {
      drama: 'show how institutions and norms shape action without over-explaining them',
      'detective-police': 'make rules generate clue pressure and institutional obstruction',
      'science-fiction': 'let system rules create action limits, not just background lore',
      fantasy: 'make laws magical, political, and costly in the same movement',
      'romance-relational': 'treat social expectations as real constraints on intimacy and choice'
    };

    return ruleHints[profileId];
  }

  if (identifier.startsWith('arc-') || identifier === 'arc-book-main') {
    const arcHints = {
      drama: 'make the arc move through grief, blame, and difficult honesty',
      'detective-police': 'make the arc track moral courage as much as clue discovery',
      'science-fiction': 'make the arc bind system insight to ethical choice',
      fantasy: 'make the arc bind inheritance to sacrifice and renunciation',
      'romance-relational': 'make the arc move through defensiveness, dependence, and honest reciprocity'
    };

    return arcHints[profileId];
  }

  if (identifier.startsWith('pause-') || identifier.startsWith('acceleration-') || identifier.startsWith('alternation-')) {
    const pacingHints = {
      drama: 'let rhythm changes expose emotional consequence instead of merely changing speed',
      'detective-police': 'use pacing to alternate clue logic, danger, and institutional tension',
      'science-fiction': 'balance orientation, system pressure, and kinetic consequence',
      fantasy: 'alternate wonder, cost, and decisive movement deliberately',
      'romance-relational': 'use pauses and bursts to make vulnerability feel earned rather than abrupt'
    };

    return pacingHints[profileId];
  }

  const genericHints = {
    drama: 'keep the language intimate, restrained, and emotionally specific',
    'detective-police': 'prefer clean procedural detail over melodramatic explanation',
    'science-fiction': 'use concrete system language without losing emotional readability',
    fantasy: 'anchor wonder in material detail, cost, and consequence',
    'romance-relational': 'make subtext carry as much weight as direct confession'
  };

  return genericHints[profileId];
}

function shouldRefineBlock(identifier) {
  return identifier === 'central-idea' ||
    identifier === 'theme' ||
    identifier === 'arc-book-main' ||
    identifier.startsWith('chapter-') ||
    identifier.startsWith('scene-') ||
    identifier.startsWith('location-') ||
    identifier.startsWith('rule-pressure-') ||
    identifier.startsWith('arc-') ||
    identifier.startsWith('dialogue-turn-') ||
    identifier.startsWith('dialogue-') ||
    identifier.startsWith('suspense-') ||
    identifier.startsWith('pause-') ||
    identifier.startsWith('acceleration-') ||
    identifier.startsWith('alternation-') ||
    identifier.startsWith('world-rule-') ||
    identifier.startsWith('world-reveal-');
}

function mapRefinedLabel(relativePath) {
  if (relativePath.startsWith(`${STAGE_FOLDERS.macro}/`)) {
    return 'macro-refined-plan';
  }

  if (relativePath.startsWith(`${STAGE_FOLDERS.chapters}/`)) {
    return 'chapter-refined-plan';
  }

  return 'micro-refined-plan';
}

async function writeCnlArtifact(options, baseName, label, content) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'cnl',
    baseName,
    label
  });

  await writeText(artifactPath.filePath, content);
  return {
    baseName,
    label,
    iteration: artifactPath.iteration,
    filePath: artifactPath.filePath,
    relativePath: artifactPath.relativePath
  };
}

async function writeResolutionArtifact(options, baseName, label, value) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'cnl',
    baseName,
    label
  });

  await writeStructuredMarkdown(artifactPath.filePath, {
    title: `${baseName} ${label}`,
    lead: 'Placeholder substitutions and resolution provenance stored as structured Markdown.',
    sections: [
      {
        heading: 'Resolved placeholders',
        lines: Object.entries(value?.replacements ?? {}).map(([key, resolved]) => `- ${key}: ${String(resolved)}`)
      }
    ],
    data: value
  });
  return {
    baseName,
    label,
    iteration: artifactPath.iteration,
    filePath: artifactPath.filePath,
    relativePath: artifactPath.relativePath
  };
}
