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
  const visionContext = buildVisionContext(options);
  const placeholders = new Map();

  for (const entry of sourceEntries) {
    for (const placeholder of collectPlaceholdersFromBlocks(entry.blocks)) {
      placeholders.set(placeholder.token, placeholder);
    }
  }

  const replacements = {};

  for (const placeholder of placeholders.values()) {
    replacements[placeholder.token] = resolvePlaceholderValue(placeholder, options, random, visionContext);
  }

  return replacements;
}

function buildVisionContext(options) {
  const vision = options.vision ?? {};
  return {
    storySummary: firstMeaningful(options.storySummary, vision.storySummary, options.brief),
    storyQuestion: firstMeaningful(vision.storyQuestion),
    dilemma: firstMeaningful(vision.dilemma),
    themeQuestion: firstMeaningful(vision.themeQuestion),
    themeStatement: firstMeaningful(vision.themeStatement),
    poleA: firstMeaningful(vision.poleA),
    poleB: firstMeaningful(vision.poleB),
    characters: vision.characters ?? {},
    locations: vision.locations ?? {},
    scenes: vision.scenes ?? {},
    constraints: vision.constraints ?? {}
  };
}

function resolvePlaceholderValue(placeholder, options, random, visionContext) {
  if (placeholder.entityType === 'character') {
    const character = getCharacterSeed(visionContext, placeholder.stableId);
    if (character?.name) {
      return character.name;
    }
    return generatePlaceholderName(placeholder.stableId, options.seed);
  }

  if (placeholder.entityType === 'location') {
    const location = getLocationSeed(visionContext, placeholder.stableId);
    return generatePlaceholderLocation(placeholder.stableId, options.seed, firstMeaningful(location?.name, null));
  }

  if (placeholder.entityType === 'organization') {
    if (visionContext.constraints.institutionName) {
      return visionContext.constraints.institutionName;
    }
    return generatePlaceholderOrganization(placeholder.stableId, options.seed);
  }

  if (placeholder.entityType === 'object') {
    if (visionContext.constraints.plotObject) {
      return visionContext.constraints.plotObject;
    }
    return generatePlaceholderLocation(placeholder.stableId, options.seed, null).replace(/^the\s+/i, '');
  }

  if (placeholder.entityType === 'artifact') {
    if (visionContext.constraints.plotObject) {
      return visionContext.constraints.plotObject;
    }
    return generatePlaceholderLocation(placeholder.stableId, options.seed, null).replace(/^the\s+/i, '');
  }

  if (placeholder.entityType === 'concept') {
    return options.themeTopic.replace(/-/g, ' ');
  }

  return generateContentPlaceholder(placeholder, options, random, visionContext);
}

function generateContentPlaceholder(placeholder, options, random, visionContext) {
  const spec = placeholder.stableId;
  const profileLabel = options.profile?.label ?? options.baselineProfile ?? 'fiction';
  const lowerLabel = profileLabel.toLowerCase();
  const id = placeholder.entityType;
  const protagonist = getCharacterSeed(visionContext, 'protagonist');
  const counterpart = getCharacterSeed(visionContext, 'counterpart');
  const pressure = getCharacterSeed(visionContext, 'pressure');
  const location = getLocationSeed(visionContext, spec);
  const chapterRole = parseChapterRole(spec);
  const scene = getSceneSeed(visionContext, spec);
  const constraints = visionContext.constraints;
  const fallback = fallbackContentPlaceholder(id, spec, lowerLabel);

  switch (id) {
    case 'hook':
    case 'premise':
      return firstMeaningful(visionContext.storySummary, fallback);
    case 'desire':
      return firstMeaningful(getCharacterSeed(visionContext, spec)?.publicGoal, fallback);
    case 'need':
      return firstMeaningful(getCharacterSeed(visionContext, spec)?.hiddenNeed, fallback);
    case 'fear':
      return firstMeaningful(getCharacterSeed(visionContext, spec)?.fear, fallback);
    case 'opposition':
      return firstMeaningful(
        pressure?.name ? `${pressure.name}, ${pressure.role}, backed by ${firstMeaningful(constraints.institutionName, 'the governing institution')}` : '',
        constraints.actionLimitation,
        fallback
      );
    case 'stakes':
    case 'conflict-stakes':
      return firstMeaningful(constraints.stakes, fallback);
    case 'dilemma':
      return firstMeaningful(visionContext.dilemma, fallback);
    case 'story-question':
    case 'chapter-question':
      return firstMeaningful(visionContext.storyQuestion, fallback);
    case 'thematic-question':
      return firstMeaningful(visionContext.themeQuestion, fallback);
    case 'thematic-statement':
      return firstMeaningful(visionContext.themeStatement, fallback);
    case 'pole-a':
      return firstMeaningful(visionContext.poleA, fallback);
    case 'pole-b':
      return firstMeaningful(visionContext.poleB, fallback);
    case 'pitch':
      return firstMeaningful(
        protagonist?.name && protagonist?.publicGoal
          ? `${protagonist.name} must ${protagonist.publicGoal} while ${firstMeaningful(visionContext.dilemma, constraints.actionLimitation, 'the cost of truth keeps rising')}`
          : '',
        visionContext.storySummary,
        fallback
      );
    case 'inciting-incident':
      return firstMeaningful(getSceneSeed(visionContext, 'setup-0')?.eventTrigger, getSceneSeed(visionContext, 'setup-0')?.title, visionContext.storySummary, fallback);
    case 'purpose':
      return firstMeaningful(scene?.title ? `${capitalizeWords(chapterRole)} movement anchored by ${scene.title.toLowerCase()}` : '', fallback);
    case 'input-state':
      return firstMeaningful(scene?.introduction, protagonist?.entryBelief, fallback);
    case 'output-state':
      return firstMeaningful(scene?.stateChange, protagonist?.exitBelief, fallback);
    case 'conflict':
      return firstMeaningful(scene?.conflict, visionContext.dilemma, constraints.conflictOutput, fallback);
    case 'answer-shift':
      return firstMeaningful(scene?.payoff, protagonist?.turningInsight, fallback);
    case 'world-pressure':
    case 'conflict-output':
    case 'conflict-output-rule':
      return firstMeaningful(constraints.conflictOutput, constraints.actionLimitation, fallback);
    case 'wisdom':
      return firstMeaningful(
        spec === 'moral' ? visionContext.themeStatement : '',
        spec === 'emotional' ? protagonist?.hiddenNeed : '',
        spec === 'cognitive' ? visionContext.storyQuestion : '',
        fallback
      );
    case 'sensory-anchor':
      return firstMeaningful(location?.sensory, fallback);
    case 'social-signal':
      return firstMeaningful(location?.socialSignal, fallback);
    case 'symbolic-charge':
      return firstMeaningful(location?.symbolicCharge, fallback);
    case 'conflict-use':
      return firstMeaningful(location?.conflictUse, fallback);
    case 'sequence-objective':
      return firstMeaningful(scene?.actionGoal, protagonist?.publicGoal, fallback);
    case 'sequence-conflict':
      return firstMeaningful(scene?.conflict, visionContext.dilemma, fallback);
    case 'sequence-payoff':
      return firstMeaningful(scene?.payoff, scene?.stateChange, fallback);
    case 'scene-introduction':
      return firstMeaningful(scene?.introduction, scene?.title, fallback);
    case 'scene-development':
      return firstMeaningful(scene?.development, scene?.payoff, fallback);
    case 'scene-conflict':
      return firstMeaningful(scene?.conflict, visionContext.dilemma, fallback);
    case 'scene-resolution':
      return firstMeaningful(scene?.resolution, scene?.payoff, fallback);
    case 'scene-state-change':
      return firstMeaningful(scene?.stateChange, scene?.payoff, fallback);
    case 'action-goal':
      return firstMeaningful(scene?.actionGoal, protagonist?.publicGoal, fallback);
    case 'action-obstacle':
      return firstMeaningful(scene?.actionObstacle, constraints.actionLimitation, fallback);
    case 'action-result':
      return firstMeaningful(scene?.stateChange, scene?.payoff, scene?.resolution, fallback);
    case 'conflict-escalation':
      return firstMeaningful(scene?.development, constraints.conflictOutput, fallback);
    case 'event-trigger':
      return firstMeaningful(scene?.eventTrigger, scene?.title, fallback);
    case 'event-impact':
      return firstMeaningful(scene?.eventImpact, scene?.stateChange, fallback);
    case 'event-follow-through':
      return firstMeaningful(scene?.payoff, scene?.resolution, fallback);
    case 'dialogue-subtext':
    case 'dialogue-core-subtext':
      return firstMeaningful(scene?.conflict, `${protagonist?.name ?? 'the protagonist'} and ${counterpart?.name ?? 'the counterpart'} keep circling the truth they cannot safely name yet`, fallback);
    case 'dialogue-line-hint':
      return firstMeaningful(scene?.title, scene?.eventTrigger, fallback);
    case 'dialogue-reaction':
      return firstMeaningful(scene?.eventImpact, scene?.stateChange, fallback);
    case 'description-focus':
      return firstMeaningful(location?.symbolicCharge, location?.conflictUse, fallback);
    case 'monologue-trigger':
      return firstMeaningful(scene?.eventImpact, protagonist?.hiddenNeed, protagonist?.fear, fallback);
    case 'suspense-uncertainty':
      return firstMeaningful(visionContext.storyQuestion, constraints.visibleSymptom, fallback);
    case 'cliffhanger-moment':
      return firstMeaningful(scene?.eventTrigger, scene?.conflict, fallback);
    case 'cliffhanger-continuation':
      return firstMeaningful(scene?.payoff, visionContext.storyQuestion, fallback);
    case 'pause-focus':
      return firstMeaningful(scene?.stateChange, protagonist?.hiddenNeed, fallback);
    case 'acceleration-trigger':
      return firstMeaningful(scene?.eventTrigger, constraints.visibleSymptom, fallback);
    case 'reader-effect':
      return firstMeaningful(visionContext.themeQuestion, scene?.payoff, fallback);
    case 'rule':
      return firstMeaningful(spec.includes('secondary') ? constraints.secondaryRule : constraints.worldRule, fallback);
    case 'rule-to-conflict':
      return firstMeaningful(
        constraints.worldRule && constraints.conflictOutput ? `${constraints.worldRule} so ${constraints.conflictOutput}` : '',
        fallback
      );
    case 'conflict-transform':
      return firstMeaningful(constraints.secondaryRule, fallback);
    case 'visible-symptom':
      return firstMeaningful(constraints.visibleSymptom, fallback);
    case 'action-limitation':
      return firstMeaningful(constraints.actionLimitation, fallback);
    case 'entry-belief':
      return firstMeaningful(protagonist?.entryBelief, fallback);
    case 'exit-belief':
      return firstMeaningful(protagonist?.exitBelief, fallback);
    case 'turning-insight':
      return firstMeaningful(protagonist?.turningInsight, fallback);
    case 'challenge':
      return firstMeaningful(scene?.conflict, visionContext.dilemma, fallback);
    case 'insight-pressure':
      return firstMeaningful(scene?.eventImpact, constraints.conflictOutput, fallback);
    case 'motif-object':
      return firstMeaningful(constraints.motif, fallback);
    case 'relationship-stress':
      return firstMeaningful(scene?.conflict, `${counterpart?.name ?? 'the counterpart'} keeps forcing ${protagonist?.name ?? 'the protagonist'} to choose between control and honesty`, fallback);
    default:
      return fallback;
  }
}

function getCharacterSeed(visionContext, stableId) {
  const role = resolveCharacterRole(stableId);
  return visionContext.characters?.[role] ?? null;
}

function resolveCharacterRole(stableId) {
  if (String(stableId).includes('protagonist')) return 'protagonist';
  if (String(stableId).includes('counterpart')) return 'counterpart';
  if (String(stableId).includes('pressure')) return 'pressure';
  return 'protagonist';
}

function getLocationSeed(visionContext, stableId) {
  if (String(stableId).includes('secondary')) {
    return visionContext.locations?.secondary ?? null;
  }
  return visionContext.locations?.primary ?? null;
}

function getSceneSeed(visionContext, spec) {
  const role = parseChapterRole(spec);
  const index = parseSceneIndex(spec);
  const scenes = visionContext.scenes?.[role] ?? visionContext.scenes?.[fallbackChapterRole(role)] ?? [];
  if (!Array.isArray(scenes) || scenes.length === 0) {
    return null;
  }

  if (String(spec).endsWith('-final')) {
    return scenes[scenes.length - 1];
  }

  return scenes[Math.min(index, scenes.length - 1)] ?? scenes[0];
}

function parseChapterRole(spec) {
  const text = String(spec ?? '');
  const rolePart = text
    .replace(/^protagonist-/, '')
    .replace(/^counterpart-/, '')
    .replace(/^pressure-/, '')
    .replace(/-(final|mid|\d+)$/, '');
  return fallbackChapterRole(rolePart || 'setup');
}

function parseSceneIndex(spec) {
  const match = String(spec ?? '').match(/-(\d+)$/);
  return match ? Number(match[1]) : 0;
}

function fallbackChapterRole(role) {
  const aliases = {
    investigation: 'escalation',
    reversal: 'revelation',
    aftermath: 'culmination',
    bridge: 'escalation'
  };
  return aliases[role] ?? role;
}

function fallbackContentPlaceholder(id, spec, lowerLabel) {
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
    'relationship-stress': `what strains the central relationship`
  };

  return contentMap[id] ?? `${id} for this ${lowerLabel} story`;
}

function firstMeaningful(...values) {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  return '';
}

function capitalizeWords(value) {
  return String(value ?? '')
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
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
