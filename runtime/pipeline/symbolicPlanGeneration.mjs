import { COMMAND_CONFIGS } from '../config/domains.mjs';
import { createBlock, serializeBlocks } from '../core/cnl.mjs';
import { createSeededRandom } from '../core/random.mjs';
import { titleCase } from '../core/text.mjs';
import { allocateArtifactPath, ensureWorkspace, registerStageRun, writeText } from '../core/workspace.mjs';
import { normalizePipelineOptions } from './options.mjs';

export async function generateSymbolicSeed(input = {}) {
  const options = normalizePipelineOptions(input);
  await ensureWorkspace(options.workspaceRoot);
  const stage = input.stage ?? 'all';
  const generatedArtifacts = [];

  if (stage === 'all' || stage === 'macro') {
    generatedArtifacts.push(...(await generateMacroSeed(options)));
  }

  if (stage === 'all' || stage === 'chapters') {
    generatedArtifacts.push(...(await generateChapterSeeds(options)));
  }

  if (stage === 'all' || stage === 'micro') {
    generatedArtifacts.push(...(await generateMicroSeeds(options)));
  }

  await registerStageRun({
    workspaceRoot: options.workspaceRoot,
    stage: 'symbolic-seed',
    produced: generatedArtifacts,
    context: {
      book: {
        bookId: options.bookId,
        baselineProfile: options.baselineProfile,
        workForm: options.workForm
      }
    }
  });

  return {
    options,
    artifacts: generatedArtifacts
  };
}

export async function generateMacroSeed(options) {
  const random = createSeededRandom(`${options.seed}:macro`);
  const c = options.constraints;
  const protagonistPlaceholder = placeholder('character', 'protagonist-001');
  const counterpartPlaceholder = placeholder('character', 'counterpart-001');
  const pressurePlaceholder = placeholder('character', 'pressure-001');
  const locationPlaceholder = placeholder('location', 'primary-001');
  const organizationPlaceholder = placeholder('organization', 'institution-001');
  const objectPlaceholder = placeholder('object', 'plot-001');

  const charConfig = COMMAND_CONFIGS.character;
  const arcConfig = COMMAND_CONFIGS.arc;
  const blueprintConfig = COMMAND_CONFIGS.blueprint;
  const structureConfig = COMMAND_CONFIGS.structure;
  const narrativeModelConfig = COMMAND_CONFIGS.narrativeModel;
  const worldConfig = COMMAND_CONFIGS.worldbuilding;
  const rhythmConfig = COMMAND_CONFIGS.rhythm;

  const protagonistArc = c.character.protagonistArc;
  const counterpartRole = c.character.counterpartRole;
  const protagonistLie = pickProfileConfiguredValue(random, charConfig, 'liePatterns', options.baselineProfile, 'allowedLiePatterns');
  const protagonistTruth = pickProfileConfiguredValue(random, charConfig, 'truthPatterns', options.baselineProfile, 'allowedTruthPatterns');
  const protagonistWound = pickProfileConfiguredValue(random, charConfig, 'woundPatterns', options.baselineProfile, 'allowedWoundPatterns');
  const protagonistPressure = pickProfileConfiguredValue(random, charConfig, 'pressurePatterns', options.baselineProfile, 'allowedPressurePatterns');
  const emotionalTrack = random.pick(blueprintConfig.profileConstraints[options.baselineProfile]?.allowedEmotionalTracks ?? [['curiosity', 'tension', 'surprise', 'shock', 'bittersweet-release']]);

  const bookBlocks = [
    createBlock('central-idea', 'define', [
      { name: 'hook-pattern', value: options.hookPattern },
      { name: 'tension-source', value: options.tensionSource },
      { name: 'naming-state', value: 'placeholder' },
      { name: 'hook', value: `{{hook:${options.hookPattern}}}` },
      { name: 'protagonist', value: protagonistPlaceholder },
      { name: 'desire', value: '{{desire:protagonist}}' },
      { name: 'opposition', value: '{{opposition:primary}}' },
      { name: 'stakes', value: `{{stakes:${c.content.stakePattern}}}` },
      { name: 'dilemma', value: '{{dilemma:central}}' },
      { name: 'story-question', value: '{{story-question:central}}' },
      { name: 'audience-fit', value: `${options.profile.label.toLowerCase()} readers` },
      { name: 'pitch-test', value: `{{pitch:${options.hookPattern}}}` }
    ], [
      `${options.brief}`,
      `The symbolic seed leaves surface naming unresolved on purpose so later refinement can introduce more natural language detail.`
    ]),
    createBlock('theme', 'define', [
      { name: 'topic', value: options.themeTopic },
      { name: 'moral-shape', value: options.themeShape },
      { name: 'thematic-question', value: '{{thematic-question:primary}}' },
      { name: 'thematic-statement', value: '{{thematic-statement:primary}}' },
      { name: 'pole-a', value: '{{pole-a:primary}}' },
      { name: 'pole-b', value: '{{pole-b:primary}}' },
      { name: 'moral-pressure', value: '{{dilemma:central}}' },
      { name: 'transformation-vector', value: `move ${protagonistPlaceholder} from {{entry-belief:protagonist}} toward {{exit-belief:protagonist}}` },
      { name: 'dramatization', value: 'major choices and consequences must carry the theme instead of direct exposition' }
    ]),
    createBlock('wisdom', 'define', [
      { name: 'wisdom-dominant-dimension', value: 'balanced' },
      { name: 'cognitive', value: '{{wisdom:cognitive}}' },
      { name: 'emotional', value: '{{wisdom:emotional}}' },
      { name: 'moral', value: '{{wisdom:moral}}' },
      { name: 'reflexive', value: '{{wisdom:reflexive}}' },
      { name: 'experiential', value: '{{wisdom:experiential}}' },
      { name: 'perspective-mode', value: random.pick(c.wisdom.perspectiveModes) },
      { name: 'openness', value: random.pick(c.wisdom.opennessModes) },
      { name: 'anti-didactic-rule', value: 'insight must emerge from consequences, reversals, and conflicting voices' }
    ]),
    createBlock('narrative-structure', 'define', [
      { name: 'information-order', value: random.pick(c.structure.informationOrders.filter((value) => value !== 'chronological' || options.macroForm === 'linear')) },
      { name: 'causal-density', value: random.pick(c.structure.causalDensities) },
      { name: 'macro-form', value: options.macroForm },
      { name: 'beginning', value: `establish ${protagonistPlaceholder} inside ${locationPlaceholder} and the pressure around ${organizationPlaceholder}` },
      { name: 'inciting-incident', value: '{{inciting-incident:primary}}' },
      { name: 'middle', value: `escalation, pressure, and relational strain expose the cost of {{desire:protagonist}}` },
      { name: 'plot-point-1', value: `${protagonistPlaceholder} commits to action instead of withdrawal` },
      { name: 'midpoint', value: `${objectPlaceholder} reveals a hidden layer of the conflict` },
      { name: 'plot-point-2', value: `${pressurePlaceholder} turns pressure into direct threat` },
      { name: 'climax', value: '{{dilemma:central}}' },
      { name: 'resolution', value: `a new equilibrium forms after ${protagonistPlaceholder} accepts irreversible cost` },
      { name: 'causal-rule', value: random.pick(structureConfig.causalRules) }
    ]),
    createBlock('narrative-model', 'select', [
      { name: 'adaptation-strength', value: random.pick(c.narrativeModel.adaptationStrengths) },
      { name: 'model-name', value: options.narrativeModel },
      { name: 'core-pattern', value: random.pick(c.narrativeModel.corePatterns) },
      { name: 'fit-reason', value: `the ${options.profile.label.toLowerCase()} profile needs direct escalation with meaningful internal cost` },
      { name: 'transformation-logic', value: `${protagonistPlaceholder} changes while the surrounding system reveals its hidden logic` },
      { name: 'genre-compatibility', value: options.profile.label },
      { name: 'adaptation-note', value: 'the chosen model is bent toward short-form clarity and evidence-rich validation' }
    ]),
    createBlock('blueprint', 'map', [
      { name: 'premise', value: '{{premise:primary}}' },
      { name: 'exposition', value: `introduce ${protagonistPlaceholder}, ${locationPlaceholder}, and the first unstable sign around ${objectPlaceholder}` },
      { name: 'rising-action', value: `pressure from ${pressurePlaceholder} and ${organizationPlaceholder} complicates every attempt to act` },
      { name: 'midpoint-shift', value: `${objectPlaceholder} changes what the protagonist understands about the conflict` },
      { name: 'climax', value: '{{dilemma:central}}' },
      { name: 'resolution', value: `the core conflict resolves with lasting cost and a redefined relation to ${organizationPlaceholder}` },
      { name: 'emotional-layer', value: emotionalTrack.join(' -> ') },
      { name: 'stakes-ladder', value: pickProfileConfiguredValue(random, blueprintConfig, 'stakesLadderPatterns', options.baselineProfile, 'allowedStakesLadders') }
    ]),
    createBlock('arc-book-main', 'map', [
      { name: 'arc-axis', value: `${options.themeTopic} under ${options.themeShape} pressure` },
      { name: 'opening-state', value: random.pick(arcConfig.openingStatePatterns) },
      { name: 'escalation-pattern', value: random.pick(arcConfig.escalationPatterns) },
      { name: 'midpoint-recognition', value: random.pick(arcConfig.midpointPatterns) },
      { name: 'climactic-choice', value: '{{dilemma:central}}' },
      { name: 'ending-state', value: random.pick(arcConfig.endingPatterns) }
    ]),
    createBlock('arc-protagonist-main', 'map', [
      { name: 'entry-belief', value: `{{entry-belief:protagonist}} ${protagonistLie}` },
      { name: 'core-wound', value: protagonistWound },
      { name: 'pressure-line', value: protagonistPressure },
      { name: 'turning-insight', value: `{{turning-insight:protagonist}} ${protagonistTruth}` },
      { name: 'exit-belief', value: `{{exit-belief:protagonist}} ${protagonistTruth}` }
    ]),
    createBlock('arc-relationship-main', 'map', [
      { name: 'pair', value: `${protagonistPlaceholder}, ${counterpartPlaceholder}` },
      { name: 'entry-dynamic', value: pickProfileConfiguredValue(random, arcConfig, 'relationshipOpeningPatterns', options.baselineProfile, 'preferredRelationshipPattern') },
      { name: 'stress-pattern', value: random.pick(arcConfig.relationshipStressPatterns) },
      { name: 'repair-condition', value: random.pick(arcConfig.relationshipRepairPatterns) },
      { name: 'exit-dynamic', value: random.pick(arcConfig.relationshipExitPatterns) }
    ]),
    createBlock('motif-primary', 'define', [
      { name: 'motif', value: `{{motif-object:${options.baselineProfile}}}` },
      { name: 'symbolic-function', value: pickProfileConfiguredValue(random, arcConfig, 'motifFunctions', options.baselineProfile, 'allowedMotifFunctions') },
      { name: 'recurrence-rule', value: 'the motif should recur across opening, midpoint, and late consequence scenes with altered meaning' }
    ])
  ];

  const characterBlocks = [
    createBlock('character-protagonist-001', 'define', [
      { name: 'complexity', value: 'round' },
      { name: 'development-type', value: 'dynamic' },
      { name: 'archetype', value: 'hero' },
      { name: 'role', value: 'protagonist' },
      { name: 'desire', value: '{{desire:protagonist}}' },
      { name: 'need', value: '{{need:protagonist}}' },
      { name: 'fear', value: '{{fear:protagonist}}' },
      { name: 'lie', value: protagonistLie },
      { name: 'truth', value: protagonistTruth },
      { name: 'conflict-mode', value: random.pick(c.character.conflictModes) },
      { name: 'arc', value: protagonistArc },
      { name: 'contradictions', value: '{{contradictions:protagonist}}' },
      { name: 'relationships', value: `${counterpartPlaceholder} [${random.pick(c.character.relationshipTypes)}], ${pressurePlaceholder} [hierarchical]` }
    ]),
    createBlock('character-counterpart-001', 'define', [
      { name: 'complexity', value: 'round' },
      { name: 'development-type', value: 'dynamic' },
      { name: 'archetype', value: counterpartRole === 'ally' ? 'ally' : 'witness' },
      { name: 'role', value: counterpartRole },
      { name: 'desire', value: '{{desire:counterpart}}' },
      { name: 'need', value: '{{need:counterpart}}' },
      { name: 'fear', value: '{{fear:counterpart}}' },
      { name: 'lie', value: 'distance keeps the self intact' },
      { name: 'truth', value: 'shared risk can create stronger agency than isolation' },
      { name: 'conflict-mode', value: 'mixed' },
      { name: 'arc', value: 'positive-change' },
      { name: 'contradictions', value: 'loyal yet evasive, observant yet withholding' },
      { name: 'relationships', value: `${protagonistPlaceholder} [cooperative], ${pressurePlaceholder} [conflictual]` }
    ]),
    createBlock('character-pressure-001', 'define', [
      { name: 'complexity', value: 'round' },
      { name: 'development-type', value: 'static' },
      { name: 'archetype', value: 'shadow' },
      { name: 'role', value: 'antagonist' },
      { name: 'desire', value: '{{desire:pressure}}' },
      { name: 'need', value: '{{need:pressure}}' },
      { name: 'fear', value: '{{fear:pressure}}' },
      { name: 'lie', value: 'stability justifies concealment' },
      { name: 'truth', value: 'concealment breeds larger collapse' },
      { name: 'conflict-mode', value: 'external' },
      { name: 'arc', value: 'flat' },
      { name: 'contradictions', value: 'calm yet coercive, rational yet self-serving' },
      { name: 'relationships', value: `${protagonistPlaceholder} [conflictual], ${counterpartPlaceholder} [hierarchical]` }
    ])
  ];

  const primaryRuleType = random.pick(c.worldbuilding.primaryRuleTypes);
  const secondaryRuleType = random.pick(c.worldbuilding.secondaryRuleTypes);

  const worldBlocks = [
    createBlock('plot-element-core-object', 'define', [
      { name: 'category', value: pickProfileConfiguredValue(random, COMMAND_CONFIGS.plot, 'categories', options.baselineProfile, 'allowedCategories') },
      { name: 'subtype', value: pickProfileConfiguredValue(random, COMMAND_CONFIGS.plot, 'subtypes', options.baselineProfile, 'allowedSubtypes') },
      { name: 'function', value: 'revelation' },
      { name: 'stakes', value: '{{stakes:plot-element}}' },
      { name: 'holders', value: `${organizationPlaceholder}, ${pressurePlaceholder}` },
      { name: 'activation', value: `the protagonist decodes ${objectPlaceholder} near the midpoint` },
      { name: 'payoff-zone', value: 'midpoint and final confrontation' }
    ]),
    createBlock('plot-device-pressure-shift', 'define', [
      { name: 'device-type', value: pickProfileConfiguredValue(random, COMMAND_CONFIGS.plot, 'deviceTypes', options.baselineProfile, 'allowedDeviceTypes') },
      { name: 'purpose', value: '{{purpose:plot-device}}' },
      { name: 'setup-zone', value: 'opening and first chapter' },
      { name: 'payoff-zone', value: 'midpoint' },
      { name: 'fairness-rule', value: 'every later reveal must have at least one early concrete hint' }
    ]),
    createBlock('world-subsystem-primary', 'define', [
      { name: 'domain', value: options.worldDomain },
      ...(options.magicDeterminacy ? [{ name: 'magic-determinacy', value: options.magicDeterminacy }] : []),
      { name: 'function', value: 'defines the system that constrains action and shapes conflict' },
      { name: 'conflict-output', value: '{{conflict-output:world-system}}' },
      { name: 'visibility', value: 'explicit' }
    ]),
    createBlock('world-rule-primary', 'define', [
      { name: 'subsystem', value: 'primary' },
      { name: 'rule-type', value: primaryRuleType },
      { name: 'rule', value: '{{rule:world-primary}}' },
      { name: 'cost', value: 'every attempt to solve the central problem increases another kind of loss' },
      { name: 'exception', value: 'exceptions require a visible trade-off and cannot erase consequences' },
      { name: 'traceability', value: 'the manuscript must show repeated evidence that the rule shapes decisions' },
      { name: 'violation-effect', value: 'validation must flag coherence failure if the rule stops mattering' }
    ]),
    createBlock('world-rule-secondary', 'define', [
      { name: 'subsystem', value: 'secondary' },
      { name: 'rule-type', value: secondaryRuleType },
      { name: 'rule', value: '{{rule:world-secondary}}' },
      { name: 'conflict-transform', value: '{{conflict-transform:world-secondary}}' },
      { name: 'reveal-mode', value: random.pick(worldConfig.visibilityModes) },
      { name: 'narrative-duty', value: 'the rule should surface through scene friction, not abstract exposition' }
    ]),
    createBlock('world-reveal-strategy', 'define', [
      { name: 'explicit-zone', value: 'opening pressure and late midpoint' },
      { name: 'implicit-zone', value: 'dialogue beats, location detail, and consequence scenes' },
      { name: 'reader-inference-goal', value: 'the reader should infer the larger system from local constraints before the book names the whole mechanism' },
      { name: 'reveal-strategy', value: random.pick(worldConfig.revealStrategies) },
      { name: 'rule-to-conflict', value: '{{rule-to-conflict:world}}' }
    ]),
    createBlock('location-primary', 'define', [
      { name: 'name', value: '{{location:primary-001}}' },
      { name: 'role', value: 'primary pressure stage' },
      { name: 'sensory-anchor', value: '{{sensory-anchor:location-primary}}' },
      { name: 'social-signal', value: '{{social-signal:location-primary}}' },
      { name: 'symbolic-charge', value: '{{symbolic-charge:location-primary}}' },
      { name: 'conflict-use', value: '{{conflict-use:location-primary}}' }
    ]),
    createBlock('location-secondary', 'define', [
      { name: 'name', value: '{{location:secondary-001}}' },
      { name: 'role', value: 'revelation or narrowing stage' },
      { name: 'sensory-anchor', value: '{{sensory-anchor:location-secondary}}' },
      { name: 'social-signal', value: '{{social-signal:location-secondary}}' },
      { name: 'symbolic-charge', value: '{{symbolic-charge:location-secondary}}' },
      { name: 'conflict-use', value: '{{conflict-use:location-secondary}}' }
    ])
  ];

  const bookArtifact = await writeStageFile(options, 'macro', 'book', 'symbolic-plan', serializeBlocks(bookBlocks));
  const characterArtifact = await writeStageFile(options, 'macro', 'characters', 'symbolic-plan', serializeBlocks(characterBlocks));
  const worldArtifact = await writeStageFile(options, 'macro', 'world', 'symbolic-plan', serializeBlocks(worldBlocks));

  return [bookArtifact, characterArtifact, worldArtifact];
}

export async function generateChapterSeeds(options) {
  const random = createSeededRandom(`${options.seed}:chapters`);
  const c = options.constraints;
  const chapterConfig = COMMAND_CONFIGS.chapter;
  const chapterRoles = buildChapterRoleSequence(options.chapterCount, options.baselineProfile, chapterConfig);
  const artifacts = [];

  for (let chapterIndex = 0; chapterIndex < options.chapterCount; chapterIndex += 1) {
    const chapterNumber = String(chapterIndex + 1).padStart(3, '0');
    const chapterId = `chapter-${chapterNumber}`;
    const role = chapterRoles[chapterIndex];
    const closingMode = chapterIndex === options.chapterCount - 1 ? 'reversal' : chapterIndex === options.chapterCount - 2 ? 'open-question' : 'cliffhanger';
    const blocks = [
      createBlock(chapterId, 'define', [
        { name: 'chapter-role', value: role },
        { name: 'purpose', value: `{{purpose:${role}}}` },
        { name: 'input-state', value: `{{input-state:${role}-${chapterIndex}}}` },
        { name: 'output-state', value: `{{output-state:${role}-${chapterIndex}}}` },
        { name: 'conflict', value: `{{conflict:${role}}}` },
        { name: 'stakes', value: `{{stakes:${c.content.stakePattern}}}` },
        { name: 'opening-mode', value: chapterIndex === 0 ? 'contextual-setup' : random.pick(chapterConfig.openingModes) },
        { name: 'development-mode', value: resolveChapterDevelopmentMode(role, options.baselineProfile, random) },
        { name: 'closing-mode', value: closingMode },
        { name: 'continuity-obligations', value: `later chapters must preserve the consequence introduced in ${chapterId}` },
        { name: 'thematic-focus', value: `${options.themeTopic} under ${options.themeShape} pressure` },
        { name: 'rhythm-note', value: chapterRhythmNote(role, chapterIndex, options.chapterCount) },
        { name: 'chapter-question', value: `{{chapter-question:${role}}}` },
        { name: 'answer-shift', value: `{{answer-shift:${options.baselineProfile}}}` },
        { name: 'arc-stage', value: chapterArcStage(role) },
        { name: 'world-pressure', value: `{{world-pressure:${role}}}` },
        { name: 'location-focus', value: '{{location:primary-001}}' },
        { name: 'block-alternation', value: c.chapter.blockAlternation }
      ], [
        `This chapter must remain traceable to the symbolic seed so validation can compare chapter purpose to later prose.`
      ])
    ];

    artifacts.push(await writeStageFile(options, 'chapters', chapterId, 'symbolic-plan', serializeBlocks(blocks)));
  }

  return artifacts;
}

export async function generateMicroSeeds(options) {
  const random = createSeededRandom(`${options.seed}:micro`);
  const c = options.constraints;
  const sceneCount = options.sceneDensity === 'high' ? 3 : 2;
  const artifacts = [];
  const chapterConfig = COMMAND_CONFIGS.chapter;
  const chapterRoles = buildChapterRoleSequence(options.chapterCount, options.baselineProfile, chapterConfig);
  const expressionConfig = COMMAND_CONFIGS.expression;
  const contentConfig = COMMAND_CONFIGS.content;
  const rhythmConfig = COMMAND_CONFIGS.rhythm;
  const sceneConfig = COMMAND_CONFIGS.scene;
  const worldConfig = COMMAND_CONFIGS.worldbuilding;

  const expressionPrefs = c.expression;
  const rhythmPrefs = c.rhythm;

  for (let chapterIndex = 0; chapterIndex < options.chapterCount; chapterIndex += 1) {
    const chapterNumber = String(chapterIndex + 1).padStart(3, '0');
    const chapterId = `chapter-${chapterNumber}`;
    const chapterRole = chapterRoles[chapterIndex] ?? 'bridge';
    const blocks = [];

    blocks.push(createBlock(`sequence-${chapterNumber}-core`, 'define', [
      { name: 'sequence-type', value: options.sequenceType },
      { name: 'link-logic', value: random.pick(c.sequence.linkLogics) },
      { name: 'chapter', value: chapterId },
      { name: 'objective', value: `{{sequence-objective:${chapterRole}}}` },
      { name: 'scene-chain', value: Array.from({ length: sceneCount }, (_, index) => `scene-${chapterNumber}-${String(index + 1).padStart(2, '0')}`).join(', ') },
      { name: 'continuity-thread', value: 'each scene must inherit and intensify the previous scene\'s unresolved pressure' },
      { name: 'conflict-line', value: `{{sequence-conflict:${chapterRole}}}` },
      { name: 'payoff', value: chapterIndex === options.chapterCount - 1 ? 'the sequence delivers its final irreversible choice' : `{{sequence-payoff:${chapterRole}}}` }
    ]));

    blocks.push(createBlock(`location-${chapterNumber}-anchor`, 'define', [
      { name: 'chapter', value: chapterId },
      { name: 'primary-setting', value: '{{location:primary-001}}' },
      { name: 'secondary-setting', value: '{{location:secondary-001}}' },
      { name: 'sensory-anchor', value: '{{sensory-anchor:location-primary}}' },
      { name: 'social-signal', value: '{{social-signal:location-primary}}' },
      { name: 'symbolic-charge', value: '{{symbolic-charge:location-primary}}' },
      { name: 'conflict-use', value: '{{conflict-use:location-primary}}' }
    ]));

    blocks.push(createBlock(`rule-pressure-${chapterNumber}-core`, 'apply', [
      { name: 'chapter', value: chapterId },
      { name: 'rule-reference', value: 'world-rule-primary' },
      { name: 'visible-symptom', value: `{{visible-symptom:${chapterRole}}}` },
      { name: 'action-limitation', value: `{{action-limitation:${chapterRole}}}` },
      { name: 'conflict-output', value: `{{conflict-output-rule:${chapterRole}}}` },
      { name: 'reveal-pattern', value: random.pick(worldConfig.revealStrategies) }
    ]));

    blocks.push(createBlock(`arc-${chapterNumber}-protagonist`, 'map', [
      { name: 'chapter', value: chapterId },
      { name: 'entry-belief', value: `{{entry-belief:protagonist}} at the start of the ${chapterRole} chapter` },
      { name: 'challenge', value: `{{challenge:protagonist-${chapterRole}}}` },
      { name: 'insight-pressure', value: `{{insight-pressure:protagonist-${chapterRole}}}` },
      { name: 'exit-belief', value: `{{exit-belief:protagonist}} after the ${chapterRole} chapter` }
    ]));

    blocks.push(createBlock(`arc-${chapterNumber}-relationship`, 'map', [
      { name: 'chapter', value: chapterId },
      { name: 'pair', value: '{{character:protagonist-001}}, {{character:counterpart-001}}' },
      { name: 'entry-dynamic', value: pickProfileConfiguredValue(random, COMMAND_CONFIGS.arc, 'relationshipOpeningPatterns', options.baselineProfile, 'preferredRelationshipPattern') },
      { name: 'stress-line', value: `{{relationship-stress:${chapterRole}}}` },
      { name: 'exit-dynamic', value: random.pick(COMMAND_CONFIGS.arc.relationshipExitPatterns) }
    ]));

    blocks.push(createBlock(`alternation-${chapterNumber}-core`, 'arrange', [
      { name: 'chapter', value: chapterId },
      { name: 'block-order', value: c.chapter.blockAlternation },
      { name: 'reader-effect', value: `{{reader-effect:${chapterRole}}}` },
      { name: 'anti-flatness-rule', value: 'do not chain action summaries without dialogue, atmosphere, or reflection support' }
    ]));

    for (let sceneIndex = 0; sceneIndex < sceneCount; sceneIndex += 1) {
      const sceneId = `scene-${chapterNumber}-${String(sceneIndex + 1).padStart(2, '0')}`;
      const isFinalScene = sceneIndex === sceneCount - 1;
      blocks.push(createBlock(sceneId, 'define', [
        { name: 'chapter', value: chapterId },
        { name: 'showing-mode', value: sceneIndex === 0 ? pickProfileConfiguredValue(random, sceneConfig, 'showingModes', options.baselineProfile, 'preferredShowingMode') : random.pick(sceneConfig.showingModes) },
        { name: 'focalization', value: options.focalizationMode },
        { name: 'time-space', value: '{{location:primary-001}}' },
        { name: 'introduction', value: `{{scene-introduction:${chapterRole}-${sceneIndex}}}` },
        { name: 'development', value: `{{scene-development:${chapterRole}-${sceneIndex}}}` },
        { name: 'conflict', value: `{{scene-conflict:${chapterRole}}}` },
        { name: 'resolution', value: `{{scene-resolution:${chapterRole}-${isFinalScene ? 'final' : 'mid'}}}` },
        { name: 'exit', value: isFinalScene ? `the chapter hands off to a sharper ${chapterRole} consequence` : 'the next scene begins before the pressure can settle' },
        { name: 'participants', value: '{{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}' },
        { name: 'state-change', value: `{{scene-state-change:${chapterRole}-${isFinalScene ? 'final' : 'mid'}}}` }
      ]));

      blocks.push(createBlock(`action-${chapterNumber}-${sceneIndex + 1}`, 'place', [
        { name: 'action-mode', value: pickProfileConfiguredValue(random, contentConfig, 'actionModes', options.baselineProfile, 'allowedActionModes') },
        { name: 'scene', value: sceneId },
        { name: 'actor', value: '{{character:protagonist-001}}' },
        { name: 'goal', value: `{{action-goal:${chapterRole}-${sceneIndex}}}` },
        { name: 'obstacle', value: `{{action-obstacle:${chapterRole}}}` },
        { name: 'result', value: isFinalScene ? `{{action-result:${chapterRole}-final}}` : 'the attempt reveals only part of the hidden structure and deepens the next demand' }
      ]));

      blocks.push(createBlock(`conflict-${chapterNumber}-${sceneIndex + 1}`, 'place', [
        { name: 'scope', value: sceneId },
        { name: 'type', value: pickProfileConfiguredValue(random, contentConfig, 'conflictTypes', options.baselineProfile, 'allowedConflictTypes') },
        { name: 'forces', value: '{{character:protagonist-001}} versus {{character:pressure-001}}' },
        { name: 'stakes', value: `{{conflict-stakes:${c.content.stakePattern}}}` },
        { name: 'escalation', value: `{{conflict-escalation:${chapterRole}}}` }
      ]));

      blocks.push(createBlock(`event-${chapterNumber}-${sceneIndex + 1}`, 'trigger', [
        { name: 'scope', value: sceneId },
        { name: 'event-type', value: isFinalScene
          ? pickWeightedValue(random, ['revelation'], configuredPreferencePool(contentConfig, 'eventTypes', options.baselineProfile, 'allowedEventTypes'))
          : pickProfileConfiguredValue(random, contentConfig, 'eventTypes', options.baselineProfile, 'allowedEventTypes') },
        { name: 'trigger', value: `{{event-trigger:${chapterRole}-${isFinalScene ? 'final' : 'mid'}}}` },
        { name: 'impact', value: `{{event-impact:${chapterRole}}}` },
        { name: 'follow-through', value: `{{event-follow-through:${chapterRole}-${isFinalScene ? 'final' : 'mid'}}}` }
      ]));

      const dialogueTurns = dialogueTurnBlueprints(options.baselineProfile, chapterRole, sceneIndex, random);
      dialogueTurns.forEach((turn, turnIndex) => {
        blocks.push(createBlock(`dialogue-turn-${chapterNumber}-${String(sceneIndex + 1).padStart(2, '0')}-${String(turnIndex + 1).padStart(2, '0')}`, 'line', [
          { name: 'scene', value: sceneId },
          { name: 'speaker', value: turn.speaker === 'protagonist' ? '{{character:protagonist-001}}' : '{{character:counterpart-001}}' },
          { name: 'intent', value: turn.intent },
          { name: 'subtext', value: `{{dialogue-subtext:${turn.intent}}}` },
          { name: 'line-hint', value: `{{dialogue-line-hint:${chapterRole}-${sceneIndex}-${turnIndex}}}` },
          { name: 'reaction-beat', value: `{{dialogue-reaction:${turn.intent}}}` }
        ]));
      });
    }

    blocks.push(createBlock(`description-${chapterNumber}-atmosphere`, 'apply', [
      { name: 'scope', value: chapterId },
      { name: 'description-type', value: expressionPrefs.descriptionType },
      { name: 'focus', value: `{{description-focus:${options.baselineProfile}}}` },
      { name: 'function', value: expressionPrefs.descriptionFunction },
      { name: 'rhythm-effect', value: random.pick(expressionConfig.rhythmEffects) }
    ]));

    blocks.push(createBlock(`dialogue-${chapterNumber}-core`, 'apply', [
      { name: 'scene', value: `scene-${chapterNumber}-01` },
      { name: 'speakers', value: '{{character:protagonist-001}}, {{character:counterpart-001}}' },
      { name: 'exchange-type', value: expressionPrefs.exchangeType },
      { name: 'purpose', value: expressionPrefs.dialoguePurpose },
      { name: 'subtext', value: `{{dialogue-core-subtext:${options.baselineProfile}}}` }
    ]));

    blocks.push(createBlock(`narration-${chapterNumber}-bridge`, 'apply', [
      { name: 'scope', value: chapterId },
      { name: 'narrator-mode', value: options.narratorMode },
      { name: 'function', value: 'organizational' },
      { name: 'time-handling', value: 'mixed' }
    ]));

    blocks.push(createBlock(`interior-monologue-${chapterNumber}-core`, 'apply', [
      { name: 'scene', value: `scene-${chapterNumber}-${String(sceneCount).padStart(2, '0')}` },
      { name: 'character', value: '{{character:protagonist-001}}' },
      { name: 'function', value: expressionPrefs.monologueFunction },
      { name: 'trigger', value: `{{monologue-trigger:${chapterRole}}}` },
      { name: 'texture', value: chapterIndex === options.chapterCount - 1
        ? pickWeightedValue(random, ['fragmented'], expressionConfig.monologueTextures)
        : expressionPrefs.monologueTexture }
    ]));

    blocks.push(createBlock(`suspense-${chapterNumber}-core`, 'build', [
      { name: 'scope', value: chapterId },
      { name: 'suspense-type', value: rhythmPrefs.suspenseType },
      { name: 'uncertainty', value: `{{suspense-uncertainty:${chapterRole}}}` },
      { name: 'delay-technique', value: rhythmPrefs.delayTechnique },
      { name: 'payoff-zone', value: `event-${chapterNumber}-${sceneCount}` }
    ], ['Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.']));

    blocks.push(createBlock(`pause-${chapterNumber}-core`, 'hold', [
      { name: 'scope', value: chapterId },
      { name: 'pause-function', value: resolvePauseFunction(options.baselineProfile, chapterRole) },
      { name: 'focus', value: `{{pause-focus:${chapterRole}}}` },
      { name: 'placement', value: chapterIndex === 0 ? 'after-first-scene' : 'before-final-scene' },
      { name: 'reader-effect', value: 'decelerate just enough to let consequence become legible' }
    ]));

    blocks.push(createBlock(`acceleration-${chapterNumber}-core`, 'burst', [
      { name: 'scope', value: chapterId },
      { name: 'acceleration-mode', value: resolveAccelerationMode(options.baselineProfile, chapterRole) },
      { name: 'trigger', value: `{{acceleration-trigger:${chapterRole}}}` },
      { name: 'reader-effect', value: 'compress time and force the next consequence to land without emotional escape' },
      { name: 'target-zone', value: `scene-${chapterNumber}-${String(sceneCount).padStart(2, '0')}` }
    ]));

    if (chapterIndex < options.chapterCount - 1) {
      blocks.push(createBlock(`cliffhanger-${chapterNumber}-exit`, 'cut', [
        { name: 'scope', value: chapterId },
        { name: 'cliffhanger-type', value: pickWeightedValue(
          random,
          [chapterIndex === options.chapterCount - 2 ? 'critical-decision' : 'interrupted-revelation'],
          rhythmConfig.cliffhangerTypes
        ) },
        { name: 'cut-moment', value: `{{cliffhanger-moment:${chapterRole}}}` },
        { name: 'continuation-pressure', value: `{{cliffhanger-continuation:${chapterRole}}}` }
      ]));
    }

    const artifact = await writeStageFile(options, 'micro', chapterId, 'symbolic-plan', serializeBlocks(blocks));
    artifacts.push(artifact);
  }

  return artifacts;
}

function buildChapterRoleSequence(chapterCount, profileId, chapterConfig) {
  const profileConstraint = chapterConfig.profileConstraints[profileId];
  const roleSequence3 = profileConstraint?.allowedRoles3 ?? ['setup', 'revelation', 'culmination'];

  if (chapterCount <= 3) {
    return roleSequence3;
  }

  if (chapterCount === 4) {
    return ['setup', 'escalation', roleSequence3[1] ?? 'revelation', roleSequence3[2] ?? 'culmination'];
  }

  const defaultPattern = ['setup', 'escalation', 'investigation', 'revelation', 'culmination'];
  return Array.from({ length: chapterCount }, (_, index) => defaultPattern[Math.min(index, defaultPattern.length - 1)]);
}

function resolveChapterDevelopmentMode(role, profileId, random) {
  const config = COMMAND_CONFIGS.chapter;
  const allowed = config.profileConstraints[profileId]?.allowedDevelopmentModes;
  if (role === 'investigation') return 'investigation';
  if (role === 'revelation') return 'revelation-ladder';
  if (allowed && allowed.length > 0) {
    return random.pick(allowed);
  }
  return random.pick(config.developmentModes);
}

function chapterRhythmNote(role, chapterIndex, chapterCount) {
  if (chapterIndex === chapterCount - 1) return 'breathless';
  if (chapterIndex === 0) return 'balanced';
  return role === 'revelation' ? 'wave-like' : 'escalating';
}

function chapterArcStage(role) {
  const map = {
    setup: 'entry-instability',
    escalation: 'pressure-rise',
    investigation: 'evidence-gathering',
    revelation: 'meaning-shift',
    reversal: 'power-flip',
    culmination: 'irreversible-choice',
    aftermath: 'changed-state-reading',
    bridge: 'threshold-crossing'
  };
  return map[role] ?? 'pressure-rise';
}

function resolvePauseFunction(profileId, role) {
  const config = COMMAND_CONFIGS.rhythm;
  return config.profileConstraints[profileId]?.preferredPauseFunction ?? (role === 'investigation' ? 'explanatory' : 'psychological');
}

function resolveAccelerationMode(profileId, role) {
  const config = COMMAND_CONFIGS.rhythm;
  const profilePrefs = COMMAND_CONFIGS.rhythm.profileConstraints[profileId];
  if (role === 'culmination') return 'pursuit-compression';
  return profilePrefs?.preferredAccelerationMode ?? 'summary-burst';
}

function dialogueTurnBlueprints(profileId, role, sceneIndex, random) {
  const intentTypes = COMMAND_CONFIGS.expression.dialogueIntentTypes;
  const intent1 = random.pick(intentTypes);
  const intent2 = random.pick(intentTypes);

  return [
    { speaker: 'counterpart', intent: intent1, subtext: 'tests the visible argument for its hidden weakness', lineHint: 'Say what the scene refuses to admit directly.', reactionBeat: 'the line sharpens the local tension' },
    { speaker: 'protagonist', intent: intent2, subtext: 'answers the surface claim while revealing a deeper cost', lineHint: 'Answer with both information and emotional consequence.', reactionBeat: 'the reply shifts the direction of the scene' }
  ];
}

function placeholder(entityType, stableId) {
  return `{{${entityType}:${stableId}}}`;
}

function pickProfileConfiguredValue(random, config, baseKey, profileId, preferenceKey) {
  return random.pick(configuredPreferencePool(config, baseKey, profileId, preferenceKey));
}

function configuredPreferencePool(config, baseKey, profileId, preferenceKey) {
  const baseValues = Array.isArray(config?.[baseKey]) ? config[baseKey] : [];
  if (baseValues.length === 0) {
    throw new Error(`Missing config values for ${baseKey}.`);
  }

  const preferred = config.profileConstraints?.[profileId]?.[preferenceKey];
  return buildWeightedPool(preferred, baseValues);
}

function buildWeightedPool(preferred, baseValues) {
  if (Array.isArray(preferred) && preferred.length > 0) {
    const normalizedPreferred = preferred.filter((value) => baseValues.includes(value));
    if (normalizedPreferred.length > 0) {
      const extras = baseValues.filter((value) => !normalizedPreferred.includes(value));
      return [...normalizedPreferred, ...normalizedPreferred, ...extras];
    }
  }

  if (typeof preferred === 'string' && baseValues.includes(preferred)) {
    const extras = baseValues.filter((value) => value !== preferred);
    return [preferred, preferred, ...extras];
  }

  return [...baseValues];
}

function pickWeightedValue(random, preferred, baseValues) {
  return random.pick(buildWeightedPool(preferred, baseValues));
}

async function writeStageFile(options, stage, baseName, label, content) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage,
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
