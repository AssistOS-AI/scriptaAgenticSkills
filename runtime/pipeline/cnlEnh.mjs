import { createBlock, collectPlaceholdersFromBlocks, replacePlaceholdersInBlock, serializeBlocks } from '../core/cnl.mjs';
import { createSeededRandom } from '../core/random.mjs';
import { STAGE_FOLDERS, allocateArtifactPath, ensureWorkspace, registerStageRun, writeStructuredMarkdown, writeText } from '../core/workspace.mjs';
import { generatePlaceholderLocation, generatePlaceholderName, generatePlaceholderOrganization } from '../config/presets.mjs';
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
  if (placeholder.entityType === 'character') {
    return generatePlaceholderName(placeholder.stableId, options.seed);
  }

  if (placeholder.entityType === 'location') {
    return generatePlaceholderLocation(placeholder.stableId, options.seed, null);
  }

  if (placeholder.entityType === 'organization') {
    return generatePlaceholderOrganization(placeholder.stableId, options.seed);
  }

  if (placeholder.entityType === 'object') {
    return generatePlaceholderLocation(placeholder.stableId, options.seed, null).replace(/^the\s+/i, '');
  }

  if (placeholder.entityType === 'artifact') {
    return generatePlaceholderLocation(placeholder.stableId, options.seed, null).replace(/^the\s+/i, '');
  }

  if (placeholder.entityType === 'concept') {
    return options.themeTopic.replace(/-/g, ' ');
  }

  return generateContentPlaceholder(placeholder, options, random);
}

function generateContentPlaceholder(placeholder, options, random) {
  const spec = placeholder.stableId;
  const profileLabel = options.profile?.label ?? options.baselineProfile ?? 'fiction';
  const lowerLabel = profileLabel.toLowerCase();
  const id = placeholder.entityType;

  const contentMap = {
    'hook': `the central hook of this ${lowerLabel} story`,
    'desire': `what the protagonist of this ${lowerLabel} story wants most`,
    'need': `what the protagonist truly needs but cannot yet accept`,
    'fear': `what the protagonist fears losing above all`,
    'opposition': `the primary opposing force in this ${lowerLabel} story`,
    'stakes': `what is at risk if the protagonist fails`,
    'dilemma': `the central dilemma the protagonist must face`,
    'story-question': `the central question this ${lowerLabel} story asks`,
    'thematic-question': `the thematic question at the heart of this story`,
    'thematic-statement': `the thematic statement this story ultimately makes`,
    'pole-a': `one pole of the central thematic tension`,
    'pole-b': `the opposing pole of the central thematic tension`,
    'pitch': `the pitch for this ${lowerLabel} story`,
    'inciting-incident': `the event that disrupts the opening equilibrium`,
    'premise': `the premise of this ${lowerLabel} story`,
    'purpose': `the narrative purpose of this ${spec} chapter`,
    'input-state': `the state entering this ${spec} chapter`,
    'output-state': `the state leaving this ${spec} chapter`,
    'conflict': `the central conflict of this ${spec} unit`,
    'chapter-question': `the question this chapter asks`,
    'answer-shift': `how the answer shifts across this chapter`,
    'world-pressure': `how world rules create pressure in this unit`,
    'wisdom': `the ${spec} dimension of insight this story offers`,
    'sensory-anchor': `a key sensory detail of this location`,
    'social-signal': `how this location signals social dynamics`,
    'symbolic-charge': `the symbolic weight this location carries`,
    'conflict-use': `how this location intensifies conflict`,
    'sequence-objective': `the narrative objective of this sequence`,
    'sequence-conflict': `the conflict running through this sequence`,
    'sequence-payoff': `what this sequence delivers`,
    'scene-introduction': `how this scene opens`,
    'scene-development': `how this scene develops`,
    'scene-conflict': `the conflict in this scene`,
    'scene-resolution': `how this scene resolves`,
    'scene-state-change': `how this scene changes the story state`,
    'action-goal': `what the protagonist tries to accomplish`,
    'action-obstacle': `what prevents easy success`,
    'action-result': `the result of the attempted action`,
    'conflict-stakes': `what is at stake in this conflict`,
    'conflict-escalation': `how this conflict intensifies`,
    'event-trigger': `what triggers this event`,
    'event-impact': `the impact of this event`,
    'event-follow-through': `what follows from this event`,
    'dialogue-subtext': `the subtext beneath this dialogue exchange`,
    'dialogue-line-hint': `a hint for the dialogue line`,
    'dialogue-reaction': `how the other character reacts`,
    'dialogue-core-subtext': `the subtext beneath the core dialogue`,
    'description-focus': `what the description focuses on`,
    'monologue-trigger': `what triggers this interior monologue`,
    'suspense-uncertainty': `what remains uncertain at this point`,
    'cliffhanger-moment': `the moment that creates the cliffhanger`,
    'cliffhanger-continuation': `what drives the reader to continue`,
    'pause-focus': `what this pause allows the reader to absorb`,
    'acceleration-trigger': `what triggers the acceleration`,
    'reader-effect': `the intended effect on the reader`,
    'rule': `the world rule that governs this domain`,
    'conflict-output': `how the world system generates conflict`,
    'rule-to-conflict': `how the world rule translates into narrative conflict`,
    'conflict-transform': `how the secondary rule transforms conflict`,
    'visible-symptom': `how the world rule becomes visible to characters`,
    'action-limitation': `how the world rule limits what characters can do`,
    'conflict-output-rule': `what kind of conflict the world rule produces`,
    'entry-belief': `the belief the protagonist holds at entry`,
    'exit-belief': `the belief the protagonist holds after change`,
    'turning-insight': `the insight that drives the protagonist's change`,
    'challenge': `what challenges the protagonist's belief`,
    'insight-pressure': `the pressure that forces insight`,
    'motif-object': `a recurring motif in this story`,
    'stakes': `what is at stake`,
    'relationship-stress': `what strains the central relationship`,
  };

  return contentMap[id] ?? `${id} for this ${lowerLabel} story`;
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
