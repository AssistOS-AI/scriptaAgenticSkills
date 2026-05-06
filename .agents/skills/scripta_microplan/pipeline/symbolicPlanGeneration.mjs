import { COMMAND_CONFIGS } from '../config/domains.mjs';
import { DEFAULT_ENTITY_MAP } from '../config/symbolicPlaceholders.mjs';
import { createBlock, serializeBlocks } from '../core/cnl.mjs';
import { createSeededRandom } from '../core/random.mjs';
import { titleCase } from '../core/text.mjs';
import { allocateArtifactPath, ensureWorkspace, registerStageRun, writeStructuredMarkdown, writeText } from '../core/workspace.mjs';
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
  const scale = deriveNarrativeScale(options);
  const entityMap = buildExtendedEntityMap(scale);
  const primaryEntities = resolvePrimaryEntities(options);
  const protagonistPlaceholder = primaryEntities.protagonist;
  const counterpartPlaceholder = primaryEntities.counterpart;
  const pressurePlaceholder = primaryEntities.pressure;
  const primaryLocationPlaceholder = primaryEntities.primaryLocation;
  const secondaryLocationPlaceholder = primaryEntities.secondaryLocation;
  const organizationPlaceholder = primaryEntities.organization;
  const objectPlaceholder = primaryEntities.coreObject;
  const protagonistRef = reference('character-protagonist-001');
  const counterpartRef = reference('character-counterpart-001');
  const pressureRef = reference('character-pressure-001');
  const primaryLocationRef = reference('location-primary');
  const secondaryLocationRef = reference('location-secondary');
  const supportCharacters = buildSupportingCharacters(options, random, scale);
  const tertiaryLocations = buildSupportingLocations(options, random, scale);
  const secondaryObjects = buildSupportingObjects(options, random, scale);
  const supportCharacterRefs = supportCharacters.map((entry) => reference(entry.id));

  const charConfig = COMMAND_CONFIGS.character;
  const arcConfig = COMMAND_CONFIGS.arc;
  const blueprintConfig = COMMAND_CONFIGS.blueprint;
  const structureConfig = COMMAND_CONFIGS.structure;
  const narrativeModelConfig = COMMAND_CONFIGS.narrativeModel;
  const worldConfig = COMMAND_CONFIGS.worldbuilding;
  const rhythmConfig = COMMAND_CONFIGS.rhythm;

  const protagonistArc = c.character.protagonistArc;
  const counterpartRole = c.character.counterpartRole;
  const protagonistLie = pickProfileConfiguredValue(random, charConfig, 'liePatterns', options.profile, 'character', 'allowedLiePatterns');
  const protagonistTruth = pickProfileConfiguredValue(random, charConfig, 'truthPatterns', options.profile, 'character', 'allowedTruthPatterns');
  const protagonistWound = pickProfileConfiguredValue(random, charConfig, 'woundPatterns', options.profile, 'character', 'allowedWoundPatterns');
  const protagonistPressure = pickProfileConfiguredValue(random, charConfig, 'pressurePatterns', options.profile, 'character', 'allowedPressurePatterns');
  const emotionalTrack = random.pick(profilePreference(options.profile, 'blueprint', 'allowedEmotionalTracks', [['curiosity', 'tension', 'surprise', 'shock', 'bittersweet-release']]));

  const bookBlocks = [
    createBlock('central-idea', 'define', [
      { name: 'hook-pattern', value: options.hookPattern },
      { name: 'tension-source', value: options.tensionSource },
      { name: 'naming-state', value: 'placeholder' },
      { name: 'hook', value: `{{hook:${options.hookPattern}}}` },
      { name: 'protagonist', value: protagonistRef },
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
      { name: 'transformation-vector', value: `move ${protagonistRef} from {{entry-belief:protagonist}} toward {{exit-belief:protagonist}}` },
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
      { name: 'beginning', value: `establish ${protagonistRef} inside ${primaryLocationRef} and the pressure around ${organizationPlaceholder}` },
      { name: 'inciting-incident', value: '{{inciting-incident:primary}}' },
      { name: 'middle', value: `escalation, pressure, and relational strain expose the cost of {{desire:protagonist}}` },
      { name: 'plot-point-1', value: `${protagonistRef} commits to action instead of withdrawal` },
      { name: 'midpoint', value: `${objectPlaceholder} reveals a hidden layer of the conflict` },
      { name: 'plot-point-2', value: `${pressureRef} turns pressure into direct threat` },
      { name: 'climax', value: '{{dilemma:central}}' },
      { name: 'resolution', value: `a new equilibrium forms after ${protagonistRef} accepts irreversible cost` },
      { name: 'causal-rule', value: random.pick(structureConfig.causalRules) }
    ]),
    createBlock('narrative-model', 'select', [
      { name: 'adaptation-strength', value: random.pick(c.narrativeModel.adaptationStrengths) },
      { name: 'model-name', value: options.narrativeModel },
      { name: 'core-pattern', value: random.pick(c.narrativeModel.corePatterns) },
      { name: 'fit-reason', value: `the ${options.profile.label.toLowerCase()} profile needs direct escalation with meaningful internal cost` },
      { name: 'transformation-logic', value: `${protagonistRef} changes while the surrounding system reveals its hidden logic` },
      { name: 'genre-compatibility', value: options.profile.label },
      { name: 'adaptation-note', value: 'the chosen model is bent toward short-form clarity and evidence-rich validation' }
    ]),
    createBlock('blueprint', 'map', [
      { name: 'premise', value: '{{premise:primary}}' },
      { name: 'exposition', value: `introduce ${protagonistRef}, ${primaryLocationRef}, and the first unstable sign around ${objectPlaceholder}` },
      { name: 'rising-action', value: `pressure from ${pressureRef} and ${organizationPlaceholder} complicates every attempt to act` },
      { name: 'midpoint-shift', value: `${objectPlaceholder} changes what the protagonist understands about the conflict` },
      { name: 'climax', value: '{{dilemma:central}}' },
      { name: 'resolution', value: `the core conflict resolves with lasting cost and a redefined relation to ${organizationPlaceholder}` },
      { name: 'emotional-layer', value: emotionalTrack.join(' -> ') },
      { name: 'ensemble-pressure', value: `${supportCharacterRefs.slice(0, 3).join(', ')} widen the cost beyond the central trio` },
      { name: 'stakes-ladder', value: pickProfileConfiguredValue(random, blueprintConfig, 'stakesLadderPatterns', options.profile, 'blueprint', 'allowedStakesLadders') }
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
      { name: 'pair', value: `${protagonistRef}, ${counterpartRef}` },
       { name: 'entry-dynamic', value: pickProfileConfiguredValue(random, arcConfig, 'relationshipOpeningPatterns', options.profile, 'arc', 'preferredRelationshipPattern') },
      { name: 'stress-pattern', value: random.pick(arcConfig.relationshipStressPatterns) },
      { name: 'repair-condition', value: random.pick(arcConfig.relationshipRepairPatterns) },
      { name: 'exit-dynamic', value: random.pick(arcConfig.relationshipExitPatterns) }
    ]),
    createBlock('motif-primary', 'define', [
       { name: 'motif', value: `{{motif-object:${options.baselineProfile}}}` },
       { name: 'symbolic-function', value: pickProfileConfiguredValue(random, arcConfig, 'motifFunctions', options.profile, 'arc', 'allowedMotifFunctions') },
      { name: 'recurrence-rule', value: 'the motif should recur across opening, midpoint, and late consequence scenes with altered meaning' }
    ])
  ];

  const characterBlocks = [
    createBlock('character-protagonist-001', 'define', [
      { name: 'name', value: protagonistPlaceholder },
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
      { name: 'relationships', value: `${counterpartRef} [${random.pick(c.character.relationshipTypes)}], ${pressureRef} [hierarchical]` }
    ]),
    createBlock('character-counterpart-001', 'define', [
      { name: 'name', value: counterpartPlaceholder },
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
      { name: 'relationships', value: `${protagonistRef} [cooperative], ${pressureRef} [conflictual]` }
    ]),
    createBlock('character-pressure-001', 'define', [
      { name: 'name', value: pressurePlaceholder },
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
      { name: 'relationships', value: `${protagonistRef} [conflictual], ${counterpartRef} [hierarchical]` }
    ]),
    ...supportCharacters.map((entry, index) => createBlock(entry.id, 'define', [
      { name: 'name', value: entry.name },
      { name: 'complexity', value: entry.complexity },
      { name: 'development-type', value: entry.developmentType },
      { name: 'archetype', value: entry.archetype },
      { name: 'role', value: entry.role },
      { name: 'desire', value: entry.desire },
      { name: 'need', value: entry.need },
      { name: 'fear', value: entry.fear },
      { name: 'lie', value: entry.lie },
      { name: 'truth', value: entry.truth },
      { name: 'conflict-mode', value: index % 2 === 0 ? 'mixed' : 'external' },
      { name: 'arc', value: index < 2 ? 'dynamic' : 'supporting-static' },
      { name: 'contradictions', value: entry.contradictions },
      { name: 'relationships', value: `${protagonistRef} [${entry.protagonistBond}], ${counterpartRef} [${entry.counterpartBond}], ${pressureRef} [${entry.pressureBond}]` }
    ]))
  ];

  const primaryRuleType = random.pick(c.worldbuilding.primaryRuleTypes);
  const secondaryRuleType = random.pick(c.worldbuilding.secondaryRuleTypes);

  const worldBlocks = [
    createBlock('plot-element-core-object', 'define', [
      { name: 'name', value: objectPlaceholder },
      { name: 'category', value: pickProfileConfiguredValue(random, COMMAND_CONFIGS.plot, 'categories', options.profile, 'plot', 'allowedCategories') },
      { name: 'subtype', value: pickProfileConfiguredValue(random, COMMAND_CONFIGS.plot, 'subtypes', options.profile, 'plot', 'allowedSubtypes') },
      { name: 'function', value: 'revelation' },
      { name: 'stakes', value: '{{stakes:plot-element}}' },
      { name: 'holders', value: `${organizationPlaceholder}, ${pressureRef}` },
      { name: 'activation', value: `the protagonist decodes ${objectPlaceholder} near the midpoint` },
      { name: 'payoff-zone', value: 'midpoint and final confrontation' }
    ]),
    createBlock('plot-device-pressure-shift', 'define', [
      { name: 'device-type', value: pickProfileConfiguredValue(random, COMMAND_CONFIGS.plot, 'deviceTypes', options.profile, 'plot', 'allowedDeviceTypes') },
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
      { name: 'name', value: primaryLocationPlaceholder },
      { name: 'role', value: 'primary pressure stage' },
      { name: 'sensory-anchor', value: '{{sensory-anchor:location-primary}}' },
      { name: 'social-signal', value: '{{social-signal:location-primary}}' },
      { name: 'symbolic-charge', value: '{{symbolic-charge:location-primary}}' },
      { name: 'conflict-use', value: '{{conflict-use:location-primary}}' }
    ]),
    createBlock('location-secondary', 'define', [
      { name: 'name', value: secondaryLocationPlaceholder },
      { name: 'role', value: 'revelation or narrowing stage' },
      { name: 'sensory-anchor', value: '{{sensory-anchor:location-secondary}}' },
      { name: 'social-signal', value: '{{social-signal:location-secondary}}' },
      { name: 'symbolic-charge', value: '{{symbolic-charge:location-secondary}}' },
      { name: 'conflict-use', value: '{{conflict-use:location-secondary}}' }
    ]),
    ...tertiaryLocations.map((entry) => createBlock(entry.id, 'define', [
      { name: 'name', value: entry.name },
      { name: 'role', value: entry.role },
      { name: 'sensory-anchor', value: entry.sensoryAnchor },
      { name: 'social-signal', value: entry.socialSignal },
      { name: 'symbolic-charge', value: entry.symbolicCharge },
      { name: 'conflict-use', value: entry.conflictUse }
    ])),
    ...secondaryObjects.map((entry) => createBlock(entry.id, 'define', [
      { name: 'name', value: entry.name },
      { name: 'category', value: entry.category },
      { name: 'subtype', value: entry.subtype },
      { name: 'function', value: entry.function },
      { name: 'stakes', value: entry.stakes },
      { name: 'holders', value: `${organizationPlaceholder}, ${pressureRef}` },
      { name: 'activation', value: entry.activation },
      { name: 'payoff-zone', value: entry.payoffZone }
    ]))
  ];

  const bookArtifact = await writeStageFile(options, 'macro', 'book', 'symbolic-plan', serializeBlocks(bookBlocks));
  const characterArtifact = await writeStageFile(options, 'macro', 'characters', 'symbolic-plan', serializeBlocks(characterBlocks));
  const worldArtifact = await writeStageFile(options, 'macro', 'world', 'symbolic-plan', serializeBlocks(worldBlocks));
  const entityMapArtifact = await writeStageDataFile(options, 'macro', 'entities', 'symbolic-map', {
    bookId: options.bookId,
    entityMap
  });

  return [bookArtifact, characterArtifact, worldArtifact, entityMapArtifact];
}

export async function generateChapterSeeds(options) {
  const random = createSeededRandom(`${options.seed}:chapters`);
  const c = options.constraints;
  const chapterConfig = COMMAND_CONFIGS.chapter;
  const chapterRoles = buildChapterRoleSequence(options.chapterCount, options.profile, chapterConfig);
  const artifacts = [];
  const primaryLocationRef = reference('location-primary');

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
        { name: 'development-mode', value: resolveChapterDevelopmentMode(role, options.profile, random) },
        { name: 'closing-mode', value: closingMode },
        { name: 'handoff-pressure', value: `the next chapter must open from the sharper consequence exposed in ${chapterId}` },
        { name: 'thematic-focus', value: `${options.themeTopic} under ${options.themeShape} pressure` },
        { name: 'rhythm-note', value: chapterRhythmNote(role, chapterIndex, options.chapterCount) },
      { name: 'chapter-question', value: `{{chapter-question:${role}}}` },
      { name: 'answer-shift', value: `{{answer-shift:${options.baselineProfile}}}` },
      { name: 'arc-stage', value: chapterArcStage(role) },
      { name: 'world-pressure', value: `{{world-pressure:${role}}}` },
      { name: 'location-focus', value: primaryLocationRef },
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
  const scale = deriveNarrativeScale(options);
  const sceneCount = scale.sceneCountPerChapter;
  const artifacts = [];
  const chapterConfig = COMMAND_CONFIGS.chapter;
  const chapterRoles = buildChapterRoleSequence(options.chapterCount, options.profile, chapterConfig);
  const expressionConfig = COMMAND_CONFIGS.expression;
  const contentConfig = COMMAND_CONFIGS.content;
  const rhythmConfig = COMMAND_CONFIGS.rhythm;
  const sceneConfig = COMMAND_CONFIGS.scene;
  const worldConfig = COMMAND_CONFIGS.worldbuilding;
  const protagonistRef = reference('character-protagonist-001');
  const counterpartRef = reference('character-counterpart-001');
  const pressureRef = reference('character-pressure-001');
  const locationRefs = [
    reference('location-primary'),
    reference('location-secondary'),
    ...Array.from({ length: scale.extraLocationCount }, (_, index) => reference(`location-tertiary-${String(index + 1).padStart(3, '0')}`))
  ];
  const objectRefs = [
    reference('plot-element-core-object'),
    ...Array.from({ length: scale.extraObjectCount }, (_, index) => reference(`plot-element-secondary-${String(index + 1).padStart(3, '0')}`))
  ];
  const supportCharacterRefs = Array.from({ length: scale.supportCharacterCount }, (_, index) => reference(`character-support-${String(index + 1).padStart(3, '0')}`));

  const expressionPrefs = c.expression;
  const rhythmPrefs = c.rhythm;

  for (let chapterIndex = 0; chapterIndex < options.chapterCount; chapterIndex += 1) {
    const chapterNumber = String(chapterIndex + 1).padStart(3, '0');
    const chapterId = `chapter-${chapterNumber}`;
    const chapterRef = reference(chapterId);
    const chapterRole = chapterRoles[chapterIndex] ?? 'bridge';
    const blocks = [];
    const chapterSupportRefs = rotateReferences(supportCharacterRefs, chapterIndex, Math.min(3, supportCharacterRefs.length));
    const chapterLocationRefs = rotateReferences(locationRefs, chapterIndex, Math.min(3, locationRefs.length));
    const chapterObjectRefs = rotateReferences(objectRefs, chapterIndex, Math.min(2, objectRefs.length));

    blocks.push(createBlock(`sequence-${chapterNumber}-core`, 'define', [
      { name: 'sequence-type', value: options.sequenceType },
      { name: 'link-logic', value: random.pick(c.sequence.linkLogics) },
      { name: 'chapter', value: chapterRef },
      { name: 'objective', value: `{{sequence-objective:${chapterRole}}}` },
      { name: 'scene-chain', value: Array.from({ length: sceneCount }, (_, index) => `scene-${chapterNumber}-${String(index + 1).padStart(2, '0')}`).join(', ') },
      { name: 'carry-forward-pressure', value: 'each scene must inherit and intensify the previous unresolved pressure' },
      { name: 'conflict-line', value: `{{sequence-conflict:${chapterRole}}}` },
      { name: 'supporting-cast', value: chapterSupportRefs.join(', ') || `${counterpartRef}` },
      { name: 'chapter-object', value: chapterObjectRefs[0] ?? reference('plot-element-core-object') },
      { name: 'payoff', value: chapterIndex === options.chapterCount - 1 ? 'the sequence delivers its final irreversible choice' : `{{sequence-payoff:${chapterRole}}}` }
    ]));

    blocks.push(createBlock(`location-${chapterNumber}-anchor`, 'define', [
      { name: 'chapter', value: chapterRef },
      { name: 'primary-setting', value: chapterLocationRefs[0] ?? reference('location-primary') },
      { name: 'secondary-setting', value: chapterLocationRefs[1] ?? reference('location-secondary') },
      { name: 'transit-setting', value: chapterLocationRefs[2] ?? chapterLocationRefs[0] ?? reference('location-primary') },
      { name: 'chapter-object', value: chapterObjectRefs[0] ?? reference('plot-element-core-object') },
      { name: 'sensory-anchor', value: '{{sensory-anchor:location-primary}}' },
      { name: 'social-signal', value: '{{social-signal:location-primary}}' },
      { name: 'symbolic-charge', value: '{{symbolic-charge:location-primary}}' },
      { name: 'conflict-use', value: '{{conflict-use:location-primary}}' }
    ]));

    blocks.push(createBlock(`rule-pressure-${chapterNumber}-core`, 'apply', [
      { name: 'chapter', value: chapterRef },
      { name: 'rule-reference', value: reference('world-rule-primary') },
      { name: 'visible-symptom', value: `{{visible-symptom:${chapterRole}}}` },
      { name: 'action-limitation', value: `{{action-limitation:${chapterRole}}}` },
      { name: 'conflict-output', value: `{{conflict-output-rule:${chapterRole}}}` },
      { name: 'reveal-pattern', value: random.pick(worldConfig.revealStrategies) }
    ]));

    blocks.push(createBlock(`arc-${chapterNumber}-protagonist`, 'map', [
      { name: 'chapter', value: chapterRef },
      { name: 'entry-belief', value: `{{entry-belief:protagonist}} at the start of the ${chapterRole} chapter` },
      { name: 'challenge', value: `{{challenge:protagonist-${chapterRole}}}` },
      { name: 'insight-pressure', value: `{{insight-pressure:protagonist-${chapterRole}}}` },
      { name: 'exit-belief', value: `{{exit-belief:protagonist}} after the ${chapterRole} chapter` }
    ]));

    blocks.push(createBlock(`arc-${chapterNumber}-relationship`, 'map', [
      { name: 'chapter', value: chapterRef },
      { name: 'pair', value: `${protagonistRef}, ${chapterSupportRefs[0] ?? counterpartRef}` },
      { name: 'entry-dynamic', value: pickProfileConfiguredValue(random, COMMAND_CONFIGS.arc, 'relationshipOpeningPatterns', options.profile, 'arc', 'preferredRelationshipPattern') },
      { name: 'stress-line', value: `{{relationship-stress:${chapterRole}}}` },
      { name: 'exit-dynamic', value: random.pick(COMMAND_CONFIGS.arc.relationshipExitPatterns) }
    ]));

    blocks.push(createBlock(`alternation-${chapterNumber}-core`, 'arrange', [
      { name: 'chapter', value: chapterRef },
      { name: 'block-order', value: c.chapter.blockAlternation },
      { name: 'reader-effect', value: `{{reader-effect:${chapterRole}}}` },
      { name: 'anti-flatness-rule', value: 'do not chain action summaries without dialogue, atmosphere, or reflection support' }
    ]));

    for (let sceneIndex = 0; sceneIndex < sceneCount; sceneIndex += 1) {
      const sceneId = `scene-${chapterNumber}-${String(sceneIndex + 1).padStart(2, '0')}`;
      const sceneRef = reference(sceneId);
      const isFinalScene = sceneIndex === sceneCount - 1;
      const sceneParticipants = buildSceneParticipants({
        protagonistRef,
        counterpartRef,
        pressureRef,
        chapterSupportRefs,
        sceneIndex,
        sceneCount
      });
      const sceneLocationRef = chapterLocationRefs[sceneIndex % chapterLocationRefs.length] ?? chapterLocationRefs[0] ?? reference('location-primary');
      const sceneObjectRef = chapterObjectRefs[sceneIndex % chapterObjectRefs.length] ?? reference('plot-element-core-object');
      blocks.push(createBlock(sceneId, 'define', [
        { name: 'chapter', value: chapterRef },
        { name: 'showing-mode', value: sceneIndex === 0 ? pickProfileConfiguredValue(random, sceneConfig, 'showingModes', options.profile, 'scene', 'preferredShowingMode') : random.pick(sceneConfig.showingModes) },
        { name: 'focalization', value: options.focalizationMode },
        { name: 'time-space', value: sceneLocationRef },
        { name: 'introduction', value: `{{scene-introduction:${chapterRole}-${sceneIndex}}}` },
        { name: 'development', value: `{{scene-development:${chapterRole}-${sceneIndex}}}` },
        { name: 'conflict', value: `{{scene-conflict:${chapterRole}}}` },
        { name: 'resolution', value: `{{scene-resolution:${chapterRole}-${isFinalScene ? 'final' : 'mid'}}}` },
        { name: 'exit', value: isFinalScene ? `the chapter hands off to a sharper ${chapterRole} consequence` : 'the next scene begins before the pressure can settle' },
        { name: 'participants', value: sceneParticipants.join(', ') },
        { name: 'anchor-object', value: sceneObjectRef },
        { name: 'support-focus', value: chapterSupportRefs[sceneIndex % Math.max(chapterSupportRefs.length, 1)] ?? counterpartRef },
        { name: 'state-change', value: `{{scene-state-change:${chapterRole}-${isFinalScene ? 'final' : 'mid'}}}` }
      ]));

      blocks.push(createBlock(`action-${chapterNumber}-${sceneIndex + 1}`, 'place', [
        { name: 'action-mode', value: pickProfileConfiguredValue(random, contentConfig, 'actionModes', options.profile, 'content', 'allowedActionModes') },
        { name: 'scene', value: sceneRef },
        { name: 'actor', value: protagonistRef },
        { name: 'goal', value: `{{action-goal:${chapterRole}-${sceneIndex}}}` },
        { name: 'obstacle', value: `{{action-obstacle:${chapterRole}}}` },
        { name: 'result', value: isFinalScene ? `{{action-result:${chapterRole}-final}}` : 'the attempt reveals only part of the hidden structure and deepens the next demand' }
      ]));

      blocks.push(createBlock(`conflict-${chapterNumber}-${sceneIndex + 1}`, 'place', [
        { name: 'scope', value: sceneRef },
        { name: 'type', value: pickProfileConfiguredValue(random, contentConfig, 'conflictTypes', options.profile, 'content', 'allowedConflictTypes') },
        { name: 'forces', value: `${sceneParticipants[0]} versus ${sceneParticipants.at(-1) ?? pressureRef}` },
        { name: 'stakes', value: `{{conflict-stakes:${c.content.stakePattern}}}` },
        { name: 'escalation', value: `{{conflict-escalation:${chapterRole}}}` }
      ]));

      blocks.push(createBlock(`event-${chapterNumber}-${sceneIndex + 1}`, 'trigger', [
        { name: 'scope', value: sceneRef },
        { name: 'event-type', value: isFinalScene
          ? pickWeightedValue(random, ['revelation'], configuredPreferencePool(contentConfig, 'eventTypes', options.profile, 'content', 'allowedEventTypes'))
          : pickProfileConfiguredValue(random, contentConfig, 'eventTypes', options.profile, 'content', 'allowedEventTypes') },
        { name: 'trigger', value: `{{event-trigger:${chapterRole}-${isFinalScene ? 'final' : 'mid'}}}` },
        { name: 'impact', value: `{{event-impact:${chapterRole}}}` },
        { name: 'follow-through', value: `{{event-follow-through:${chapterRole}-${isFinalScene ? 'final' : 'mid'}}}` }
      ]));

      const dialogueTurns = dialogueTurnBlueprints({
        profileId: options.baselineProfile,
        role: chapterRole,
        sceneIndex,
        random,
        turnCount: scale.dialogueTurnsPerScene,
        protagonistRef,
        counterpartRef,
        pressureRef,
        chapterSupportRefs
      });
      dialogueTurns.forEach((turn, turnIndex) => {
        blocks.push(createBlock(`dialogue-turn-${chapterNumber}-${String(sceneIndex + 1).padStart(2, '0')}-${String(turnIndex + 1).padStart(2, '0')}`, 'line', [
          { name: 'scene', value: sceneRef },
          { name: 'speaker', value: turn.speaker },
          { name: 'intent', value: turn.intent },
          { name: 'subtext', value: `{{dialogue-subtext:${turn.intent}}}` },
          { name: 'line-hint', value: turn.lineHint ?? `{{dialogue-line-hint:${chapterRole}-${sceneIndex}-${turnIndex}}}` },
          { name: 'reaction-beat', value: `{{dialogue-reaction:${turn.intent}}}` }
        ]));
      });
    }

    blocks.push(createBlock(`description-${chapterNumber}-atmosphere`, 'apply', [
      { name: 'scope', value: chapterRef },
      { name: 'description-type', value: expressionPrefs.descriptionType },
      { name: 'focus', value: `{{description-focus:${options.baselineProfile}}}` },
      { name: 'function', value: expressionPrefs.descriptionFunction },
      { name: 'rhythm-effect', value: random.pick(expressionConfig.rhythmEffects) }
    ]));

    blocks.push(createBlock(`dialogue-${chapterNumber}-core`, 'apply', [
      { name: 'scene', value: reference(`scene-${chapterNumber}-01`) },
      { name: 'speakers', value: [protagonistRef, counterpartRef, ...chapterSupportRefs.slice(0, 2)].join(', ') },
      { name: 'exchange-type', value: expressionPrefs.exchangeType },
      { name: 'purpose', value: expressionPrefs.dialoguePurpose },
      { name: 'subtext', value: `{{dialogue-core-subtext:${options.baselineProfile}}}` }
    ]));

    blocks.push(createBlock(`narration-${chapterNumber}-bridge`, 'apply', [
      { name: 'scope', value: chapterRef },
      { name: 'narrator-mode', value: options.narratorMode },
      { name: 'function', value: 'organizational' },
      { name: 'time-handling', value: 'mixed' }
    ]));

    blocks.push(createBlock(`interior-monologue-${chapterNumber}-core`, 'apply', [
      { name: 'scene', value: reference(`scene-${chapterNumber}-${String(sceneCount).padStart(2, '0')}`) },
      { name: 'character', value: protagonistRef },
      { name: 'function', value: expressionPrefs.monologueFunction },
      { name: 'trigger', value: `{{monologue-trigger:${chapterRole}}}` },
      { name: 'texture', value: chapterIndex === options.chapterCount - 1
        ? pickWeightedValue(random, ['fragmented'], expressionConfig.monologueTextures)
        : expressionPrefs.monologueTexture }
    ]));

    blocks.push(createBlock(`suspense-${chapterNumber}-core`, 'build', [
      { name: 'scope', value: chapterRef },
      { name: 'suspense-type', value: rhythmPrefs.suspenseType },
      { name: 'uncertainty', value: `{{suspense-uncertainty:${chapterRole}}}` },
      { name: 'delay-technique', value: rhythmPrefs.delayTechnique },
      { name: 'payoff-zone', value: `event-${chapterNumber}-${sceneCount}` }
    ], ['Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.']));

    blocks.push(createBlock(`pause-${chapterNumber}-core`, 'hold', [
      { name: 'scope', value: chapterRef },
      { name: 'pause-function', value: resolvePauseFunction(options.profile, chapterRole) },
      { name: 'focus', value: `{{pause-focus:${chapterRole}}}` },
      { name: 'placement', value: chapterIndex === 0 ? 'after-first-scene' : 'before-final-scene' },
      { name: 'reader-effect', value: 'decelerate just enough to let consequence become legible' }
    ]));

    blocks.push(createBlock(`acceleration-${chapterNumber}-core`, 'burst', [
      { name: 'scope', value: chapterRef },
      { name: 'acceleration-mode', value: resolveAccelerationMode(options.profile, chapterRole) },
      { name: 'trigger', value: `{{acceleration-trigger:${chapterRole}}}` },
      { name: 'reader-effect', value: 'compress time and force the next consequence to land without emotional escape' },
      { name: 'target-zone', value: reference(`scene-${chapterNumber}-${String(sceneCount).padStart(2, '0')}`) }
    ]));

    if (chapterIndex < options.chapterCount - 1) {
      blocks.push(createBlock(`cliffhanger-${chapterNumber}-exit`, 'cut', [
        { name: 'scope', value: chapterRef },
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

function buildChapterRoleSequence(chapterCount, profile, chapterConfig) {
  const roleSequence3 = profilePreference(profile, 'chapter', 'allowedRoles3', ['setup', 'revelation', 'culmination']);

  if (chapterCount <= 3) {
    return roleSequence3;
  }

  if (chapterCount === 4) {
    return ['setup', 'escalation', roleSequence3[1] ?? 'revelation', roleSequence3[2] ?? 'culmination'];
  }

  if (chapterCount === 5) {
    return ['setup', 'escalation', 'investigation', 'revelation', 'culmination'];
  }

  const longFormPattern = [
    'setup',
    'escalation',
    'investigation',
    'bridge',
    'revelation',
    'reversal',
    'investigation',
    'escalation',
    'bridge',
    'revelation',
    'culmination',
    'aftermath'
  ];

  return Array.from({ length: chapterCount }, (_, index) => longFormPattern[Math.min(index, longFormPattern.length - 1)]);
}

function resolveChapterDevelopmentMode(role, profile, random) {
  const config = COMMAND_CONFIGS.chapter;
  const allowed = profilePreference(profile, 'chapter', 'allowedDevelopmentModes', []);
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

function resolvePauseFunction(profile, role) {
  return profilePreference(profile, 'rhythm', 'preferredPauseFunction', role === 'investigation' ? 'explanatory' : 'psychological');
}

function resolveAccelerationMode(profile, role) {
  if (role === 'culmination') return 'pursuit-compression';
  return profilePreference(profile, 'rhythm', 'preferredAccelerationMode', 'summary-burst');
}

function dialogueTurnBlueprints({
  profileId,
  role,
  sceneIndex,
  random,
  turnCount,
  protagonistRef,
  counterpartRef,
  pressureRef,
  chapterSupportRefs
}) {
  const intentTypes = COMMAND_CONFIGS.expression.dialogueIntentTypes;
  const speakerOrder = buildDialogueSpeakerOrder({
    protagonistRef,
    counterpartRef,
    pressureRef,
    chapterSupportRefs,
    sceneIndex,
    turnCount
  });

  return speakerOrder.map((speaker, turnIndex) => {
    const intent = resolveDialogueIntent({
      speaker,
      protagonistRef,
      counterpartRef,
      pressureRef,
      turnIndex,
      role,
      sceneIndex,
      random,
      intentTypes
    });
    return {
      speaker,
      intent,
      subtext: turnIndex === 0
        ? 'tests the visible argument for its hidden weakness'
        : turnIndex === speakerOrder.length - 1
          ? 'forces the scene to expose its hidden cost before retreat is possible'
        : 'changes the balance of power by naming what the room wanted left implied',
      lineHint: `{{dialogue-line-hint:${role}-${speakerRoleToken(speaker, protagonistRef, counterpartRef, pressureRef)}-${sceneIndex}-${turnIndex}}}`,
      reactionBeat: turnIndex === speakerOrder.length - 1
        ? 'the last line leaves no one able to return to the safer version of events'
        : 'the exchange strips another layer of safety from the scene'
    };
  });
}

function resolveDialogueIntent({
  speaker,
  protagonistRef,
  counterpartRef,
  pressureRef,
  turnIndex,
  role,
  sceneIndex,
  random,
  intentTypes
}) {
  const speakerRole = speakerRoleToken(speaker, protagonistRef, counterpartRef, pressureRef);
  const rolePools = {
    protagonist: role === 'culmination' || role === 'reversal'
      ? ['challenge', 'commit', 'answer-honestly']
      : role === 'investigation'
        ? ['probe', 'challenge', 'answer-honestly']
        : ['probe', 'commit', 'challenge'],
    counterpart: sceneIndex % 2 === 0
      ? ['probe', 'reframe', 'warn']
      : ['probe', 'tease-probe', 'name-risk'],
    pressure: role === 'culmination'
      ? ['warn', 'challenge', 'deflect']
      : ['deflect', 'warn', 'challenge'],
    support: sceneIndex % 2 === 0
      ? ['probe', 'reframe', 'name-risk']
      : ['probe', 'tease-probe', 'warn']
  };
  const pool = rolePools[speakerRole] ?? intentTypes;
  return pool[Math.min(turnIndex, pool.length - 1)] ?? random.pick(pool);
}

function speakerRoleToken(speaker, protagonistRef, counterpartRef, pressureRef) {
  if (speaker === protagonistRef) return 'protagonist';
  if (speaker === counterpartRef) return 'counterpart';
  if (speaker === pressureRef) return 'pressure';
  return 'support';
}

function deriveNarrativeScale(options) {
  const averageChapterWords = Math.max(1200, Math.round(options.targetWords / Math.max(options.chapterCount, 1)));
  const baseSceneCount = averageChapterWords >= 7000 ? 5 : averageChapterWords >= 5000 ? 4 : averageChapterWords >= 3200 ? 3 : 2;
  const densityAdjustment = options.sceneDensity === 'high' ? 1 : options.sceneDensity === 'low' ? -1 : 0;
  const sceneCountPerChapter = clamp(baseSceneCount + densityAdjustment, 2, 6);
  const supportCharacterCount = clamp(Math.round(options.targetWords / 18000), 2, 6);
  const extraLocationCount = clamp(Math.round(options.chapterCount / 3), 1, 5);
  const extraObjectCount = clamp(Math.round(options.targetWords / 24000), 2, 5);
  const dialogueTurnsPerScene = options.dialogueDensity === 'high' ? 4 : options.dialogueDensity === 'low' ? 2 : 3;

  return {
    sceneCountPerChapter,
    supportCharacterCount,
    extraLocationCount,
    extraObjectCount,
    dialogueTurnsPerScene
  };
}

function buildExtendedEntityMap(scale) {
  const entityMap = structuredClone(DEFAULT_ENTITY_MAP);

  for (let index = 0; index < scale.supportCharacterCount; index += 1) {
    entityMap.characters[`support-${String(index + 1).padStart(3, '0')}`] = `PERSON_${String(index + 4).padStart(3, '0')}`;
  }

  for (let index = 0; index < scale.extraLocationCount; index += 1) {
    entityMap.locations[`tertiary-${String(index + 1).padStart(3, '0')}`] = `LOCATION_${String(index + 3).padStart(3, '0')}`;
  }

  for (let index = 0; index < scale.extraObjectCount; index += 1) {
    entityMap.objects[`secondary-${String(index + 1).padStart(3, '0')}`] = `OBJECT_${String(index + 2).padStart(3, '0')}`;
  }

  return entityMap;
}

function resolvePrimaryEntities(options) {
  const fallbacks = PRIMARY_ENTITY_FALLBACKS[options.baselineProfile] ?? PRIMARY_ENTITY_FALLBACKS.drama;
  const visionCharacters = options.vision?.characters ?? {};
  const visionLocations = options.vision?.locations ?? {};

  return {
    protagonist: firstMeaningfulText(visionCharacters.protagonist?.name, fallbacks.protagonist),
    counterpart: firstMeaningfulText(visionCharacters.counterpart?.name, fallbacks.counterpart),
    pressure: firstMeaningfulText(visionCharacters.pressure?.name, fallbacks.pressure),
    primaryLocation: firstMeaningfulText(visionLocations.primary?.name, fallbacks.primaryLocation),
    secondaryLocation: firstMeaningfulText(visionLocations.secondary?.name, fallbacks.secondaryLocation),
    organization: fallbacks.organization,
    coreObject: fallbacks.coreObject
  };
}

function buildSupportingCharacters(options, random, scale) {
  const catalog = ENTITY_CATALOG[options.baselineProfile] ?? ENTITY_CATALOG.drama;
  const names = pickCatalogEntries(catalog.supportingNames, scale.supportCharacterCount, random);
  const roles = pickCatalogEntries(catalog.supportingRoles, scale.supportCharacterCount, random);
  const contradictions = pickCatalogEntries(catalog.supportingContradictions, scale.supportCharacterCount, random);
  const bonds = pickCatalogEntries(catalog.supportingBonds, scale.supportCharacterCount, random);

  return names.map((name, index) => ({
    id: `character-support-${String(index + 1).padStart(3, '0')}`,
    name,
    complexity: index < 2 ? 'round' : 'layered',
    developmentType: index < 2 ? 'dynamic' : 'static',
    archetype: SUPPORT_ARCHETYPES[index % SUPPORT_ARCHETYPES.length],
    role: roles[index],
    desire: `${name} wants to keep one fragile local balance from collapsing publicly`,
    need: `${name} needs a version of the truth that can survive the institution around it`,
    fear: `${name} fears becoming the next person absorbed by the system's safer lie`,
    lie: 'small omissions can still count as mercy',
    truth: 'shared truth costs less than silence maintained alone',
    contradictions: contradictions[index],
    protagonistBond: bonds[index].protagonist,
    counterpartBond: bonds[index].counterpart,
    pressureBond: bonds[index].pressure
  }));
}

function buildSupportingLocations(options, random, scale) {
  const catalog = ENTITY_CATALOG[options.baselineProfile] ?? ENTITY_CATALOG.drama;
  const names = pickCatalogEntries(catalog.locationNames, scale.extraLocationCount, random);
  const sensoryAnchors = pickCatalogEntries(catalog.locationSensoryAnchors, scale.extraLocationCount, random);
  const socialSignals = pickCatalogEntries(catalog.locationSocialSignals, scale.extraLocationCount, random);
  const symbolicCharges = pickCatalogEntries(catalog.locationSymbolicCharges, scale.extraLocationCount, random);
  const conflictUses = pickCatalogEntries(catalog.locationConflictUses, scale.extraLocationCount, random);

  return names.map((name, index) => ({
    id: `location-tertiary-${String(index + 1).padStart(3, '0')}`,
    name,
    role: index % 2 === 0 ? 'hidden pressure chamber' : 'public consequence stage',
    sensoryAnchor: sensoryAnchors[index],
    socialSignal: socialSignals[index],
    symbolicCharge: symbolicCharges[index],
    conflictUse: conflictUses[index]
  }));
}

function buildSupportingObjects(options, random, scale) {
  const objectCatalog = OBJECT_CATALOG[options.baselineProfile] ?? OBJECT_CATALOG.drama;
  const names = pickCatalogEntries(objectCatalog.names, scale.extraObjectCount, random);
  const activations = pickCatalogEntries(objectCatalog.activations, scale.extraObjectCount, random);
  const stakes = pickCatalogEntries(objectCatalog.stakes, scale.extraObjectCount, random);

  return names.map((name, index) => ({
    id: `plot-element-secondary-${String(index + 1).padStart(3, '0')}`,
    name,
    category: SECONDARY_OBJECT_CATEGORIES[index % SECONDARY_OBJECT_CATEGORIES.length],
    subtype: SECONDARY_OBJECT_SUBTYPES[index % SECONDARY_OBJECT_SUBTYPES.length],
    function: index % 2 === 0 ? 'pressure-amplifier' : 'proof-carrier',
    stakes: stakes[index],
    activation: activations[index],
    payoffZone: index % 2 === 0 ? 'midbook escalation and final exposure' : 'late revelation and aftermath'
  }));
}

function buildSceneParticipants({ protagonistRef, counterpartRef, pressureRef, chapterSupportRefs, sceneIndex, sceneCount }) {
  const participants = [protagonistRef];

  if (sceneIndex === 0 || sceneIndex % 2 === 0) {
    participants.push(counterpartRef);
  }

  if (chapterSupportRefs.length > 0) {
    participants.push(chapterSupportRefs[sceneIndex % chapterSupportRefs.length]);
  }

  if (chapterSupportRefs.length > 1 && sceneIndex % 2 === 1) {
    participants.push(chapterSupportRefs[(sceneIndex + 1) % chapterSupportRefs.length]);
  }

  if (sceneIndex === sceneCount - 1 || sceneIndex % 3 === 1) {
    participants.push(pressureRef);
  }

  return [...new Set(participants)];
}

function buildDialogueSpeakerOrder({ protagonistRef, counterpartRef, pressureRef, chapterSupportRefs, sceneIndex, turnCount }) {
  const supportA = chapterSupportRefs[sceneIndex % Math.max(chapterSupportRefs.length, 1)];
  const supportB = chapterSupportRefs[(sceneIndex + 1) % Math.max(chapterSupportRefs.length, 1)];
  const fallbackSupport = supportA ?? counterpartRef;
  const base = [fallbackSupport, protagonistRef, supportB ?? counterpartRef, pressureRef, counterpartRef, protagonistRef];
  return base.slice(0, Math.max(2, turnCount));
}

function rotateReferences(references, startIndex, count) {
  if (references.length === 0 || count <= 0) {
    return [];
  }

  return Array.from({ length: count }, (_, index) => references[(startIndex + index) % references.length]);
}

function pickCatalogEntries(values, count, random) {
  const pool = [...values];
  const picks = [];

  while (pool.length > 0 && picks.length < count) {
    const choice = random.pick(pool);
    picks.push(choice);
    pool.splice(pool.indexOf(choice), 1);
  }

  while (picks.length < count) {
    picks.push(values[picks.length % values.length]);
  }

  return picks;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function firstMeaningfulText(...values) {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  return '';
}

const SUPPORT_ARCHETYPES = ['ally', 'witness', 'broker', 'caretaker', 'fixer', 'rival'];
const SECONDARY_OBJECT_CATEGORIES = ['document', 'artifact', 'token', 'device', 'relic'];
const SECONDARY_OBJECT_SUBTYPES = ['ledger', 'seal', 'key', 'recording', 'packet'];

const PRIMARY_ENTITY_FALLBACKS = {
  drama: {
    protagonist: 'Mira Solari',
    counterpart: 'Vera Quinn',
    pressure: 'Corin Voss',
    primaryLocation: 'the shuttered mediation office above the old customs hall',
    secondaryLocation: 'the church crypt below Greywater',
    organization: 'Greywater mediation office',
    coreObject: 'the flood compensation ledger'
  },
  'detective-police': {
    protagonist: 'Nadia Voss',
    counterpart: 'Theo Mercer',
    pressure: 'Soren Arden',
    primaryLocation: 'the evidence hangar by Lock Six',
    secondaryLocation: 'the abandoned control room beneath the spillway',
    organization: 'the redevelopment corridor precinct',
    coreObject: 'the stolen drive case'
  },
  'science-fiction': {
    protagonist: 'Elian Quill',
    counterpart: 'Yara Sen',
    pressure: 'Mirax Pell',
    primaryLocation: 'the mnemonic orchard on Nacre Station',
    secondaryLocation: 'the sealed archive airlock',
    organization: 'the Nacre station council',
    coreObject: 'the erased vote lattice'
  },
  fantasy: {
    protagonist: 'Neris Vale',
    counterpart: 'Brother Caelan Vey',
    pressure: 'Maeron Dask',
    primaryLocation: 'the ash terrace above Drovna',
    secondaryLocation: 'the catacombs beneath the ward gate',
    organization: 'the oath furnace court',
    coreObject: 'the hidden chronicle leaf'
  },
  'romance-relational': {
    protagonist: 'Leora Kestrel',
    counterpart: 'Talia Voss',
    pressure: 'Cassia Mercer',
    primaryLocation: 'the riverside print studio on Brindle Lane',
    secondaryLocation: 'the museum mock-up hall above the loading dock',
    organization: 'the estate trust behind the studio',
    coreObject: 'the doubled-margin proof set'
  }
};

const OBJECT_CATALOG = {
  drama: {
    names: ['Greywater Ledger', 'Memorial Audio Reel', 'Salt-Stamped Evacuation File', 'Floodplain Key Packet', 'Black Ribbon Register'],
    activations: [
      'it surfaces during a memorial exchange that should have remained ceremonial',
      'someone produces it while trying to make grief look procedural',
      'it is discovered inside a locked civic drawer after hours',
      'it reappears when the public story begins to contradict the dates',
      'it turns a private suspicion into a town-wide accusation'
    ],
    stakes: [
      'it can prove the institution profited from selective silence',
      'it links family survival to the same compromise now under suspicion',
      'it carries evidence that mourning was administratively curated',
      'it makes compassion itself look like a laundering mechanism',
      'it forces the town to choose between peace and truth'
    ]
  },
  'detective-police': {
    names: ['Lock Six Override Sheet', 'Harbor Camera Spindle', 'Deputy Mayor Tide Brief', 'Cold Room Bolt Packet', 'Dock Chain Custody Tag'],
    activations: [
      'it is logged at the exact minute the official timeline begins to fail',
      'someone tries to reclassify it as salvage before the report is filed',
      'it appears where evidence should have been impossible to keep',
      'it ties the river scene to a meeting no one admitted took place',
      'it turns administrative delay into direct obstruction'
    ],
    stakes: [
      'it can shift the case from accident to institutionally managed murder',
      'it proves procedure was used to bury physical evidence',
      'it drags redevelopment money directly into the death',
      'it exposes command authority as part of the concealment',
      'it makes the precinct itself a viable suspect'
    ]
  },
  'science-fiction': {
    names: ['Nacre Vote Lattice', 'Halo Recall Cylinder', 'Dock Nine Archive Key', 'Pacification Patch Core', 'Witness Bloom Cache'],
    activations: [
      'it unlocks only when erased testimony and live systems overlap',
      'it emerges from maintenance metadata no civilian was meant to inspect',
      'it begins broadcasting its own audit trail under load',
      'it ties the memory smoothing protocol to an old authorization signature',
      'it turns a technical anomaly into a constitutional breach'
    ],
    stakes: [
      'it can restore one erased vote and unravel years of counterfeit consent',
      'it proves the station automated obedience through memory loss',
      'it makes civic harmony read like managed coercion',
      'it forces residents to confront a peace built on amputation',
      'it can return public memory faster than the council can erase it again'
    ]
  },
  fantasy: {
    names: ['Ashbound Chronicle Leaf', 'Cinder Seal of Drovna', 'Wardstone Bone Key', 'Furnace Memory Flask', 'Oathfire Chain Link'],
    activations: [
      'it glows only when the ward is fed a truth the rite was built to hide',
      'it surfaces during a chant that should have preserved obedience',
      'it reveals a name the valley had already sacrificed to legend',
      'it turns ceremony into testimony before the entire terrace',
      'it breaks the boundary between ancestral reverence and public accusation'
    ],
    stakes: [
      'it can prove the valley fed memory into protection as payment',
      'it links family legitimacy to an erased child',
      'it makes ritual beauty inseparable from coercive debt',
      'it turns succession into a visible moral wound',
      'it offers protection only if someone accepts the whole truth of its cost'
    ]
  },
  'romance-relational': {
    names: ['Double-Margin Proof', 'Riverside Signature Plate', 'Museum Dummy Spine', 'Ink Ledger of Corrections', 'Letterpress Dedication Slip'],
    activations: [
      'it reappears when craft decisions begin reading like emotional evidence',
      'it shows up in a workroom no one can keep professionally neutral',
      'it makes an old departure physically legible inside the new commission',
      'it turns repair marks into public design language',
      'it forces usefulness and vulnerability into the same object'
    ],
    stakes: [
      'it can expose how much of the relationship survived inside the work',
      'it makes the finished book carry visible traces of prior damage',
      'it pushes professional collaboration into confession',
      'it shows that aesthetic polish was built on mutual hurt',
      'it lets the commission become proof instead of camouflage'
    ]
  }
};

const ENTITY_CATALOG = {
  drama: {
    supportingNames: ['Jonah Vale', 'Sabine Arlo', 'Petra Linn', 'Corin Hale', 'Alma Crest', 'Rufus Dene'],
    supportingRoles: ['town clerk', 'union mediator', 'choir director', 'ferry accountant', 'widowed aunt', 'school archivist'],
    supportingContradictions: [
      'tender in crisis yet ruthless about appearances',
      'meticulous with records yet frightened of public consequence',
      'loyal to the family story yet unable to stop collecting contrary evidence',
      'socially polished but privately resentful',
      'protective of children yet complicit with old compromises',
      'quick to comfort and quicker to conceal'
    ],
    supportingBonds: [
      { protagonist: 'cooperative', counterpart: 'ambiguous', pressure: 'subordinate' },
      { protagonist: 'familial', counterpart: 'cooperative', pressure: 'fearful' },
      { protagonist: 'protective', counterpart: 'professional', pressure: 'dependent' },
      { protagonist: 'uneasy', counterpart: 'conflictual', pressure: 'hierarchical' },
      { protagonist: 'loyal', counterpart: 'cautious', pressure: 'resentful' },
      { protagonist: 'witnessing', counterpart: 'allied', pressure: 'subordinate' }
    ],
    locationNames: ['Greymarket Steps', 'The Flood Chapel Yard', 'Ravelin Ferry Office', 'The Drowned Registry Annex', 'Saltglass Walk'],
    locationSensoryAnchors: ['wet stone and candle soot', 'tide-mud under polished shoes', 'brackish rope and carbon paper', 'mildew trapped in ledger cloth', 'river wind rattling metal shutters'],
    locationSocialSignals: ['everyone lowers their voice before naming the dead', 'public pity and civic gossip mix without warning', 'small courtesies are used to slow every accusation', 'records speak more honestly than the people guarding them', 'the town keeps pretending the damage is temporary'],
    locationSymbolicCharges: ['grief staged as procedure', 'mourning that has been made municipal', 'public service stretched over private rot', 'an archive swollen with selective memory', 'a promenade that remembers each evacuation'],
    locationConflictUses: ['private pleading keeps colliding with civic performance', 'official compassion becomes a shield for delay', 'every corridor funnels people back toward the same compromise', 'the place turns evidence into accusation through mere proximity', 'shared space removes the luxury of private denial']
  },
  'detective-police': {
    supportingNames: ['Mara Quill', 'Denton Fiske', 'Iris Vale', 'Galen Pryce', 'Orla Keen', 'Bram Sutter'],
    supportingRoles: ['harbor clerk', 'forensic diver', 'mayoral aide', 'tow-yard keeper', 'records sergeant', 'dock union steward'],
    supportingContradictions: [
      'procedural in tone yet visibly afraid of clean evidence',
      'helpful with access and evasive about motive',
      'sharp with detail but loyal to the wrong office',
      'cynical in speech yet stubbornly decent in action',
      'disciplined under scrutiny and reckless in private',
      'alert to danger yet addicted to bureaucratic cover'
    ],
    supportingBonds: [
      { protagonist: 'professional', counterpart: 'cooperative', pressure: 'subordinate' },
      { protagonist: 'wary', counterpart: 'allied', pressure: 'conflictual' },
      { protagonist: 'uneasy', counterpart: 'professional', pressure: 'dependent' },
      { protagonist: 'cooperative', counterpart: 'ambiguous', pressure: 'hierarchical' },
      { protagonist: 'respectful', counterpart: 'competitive', pressure: 'fearful' },
      { protagonist: 'allied', counterpart: 'cooperative', pressure: 'resentful' }
    ],
    locationNames: ['Lock Six Camera Deck', 'Harbor Salvage Shed', 'North Jetty Briefing Room', 'Brine Tunnel Records Cage', 'Coffer Slip Warehouse'],
    locationSensoryAnchors: ['cold fluorescents over wet steel', 'rope fibers and diesel sheen', 'coffee gone metallic in paper cups', 'rust and printer heat', 'tidewater trapped under concrete'],
    locationSocialSignals: ['everyone speaks in clipped inventory terms', 'the room respects only what can be tagged', 'rank still thinks volume can replace fact', 'records move only when someone higher panics', 'evidence and scrap share the same floor'],
    locationSymbolicCharges: ['surveillance failing exactly where power wants darkness', 'salvage dressed up as routine disposal', 'command trying to close the case before language catches up', 'documentation treated like a second crime scene', 'a warehouse built for disappearance under fluorescent light'],
    locationConflictUses: ['the setting turns delay into tactical interference', 'every doorway doubles as a custody threshold', 'public authority tries to shrink the scale of the crime', 'access itself becomes a measurable risk', 'physical evidence keeps forcing argument back into the material world']
  },
  'science-fiction': {
    supportingNames: ['Lio Marr', 'Sera Dune', 'Tarin Vox', 'Nael Quist', 'Mirax Pell', 'Oren Sile'],
    supportingRoles: ['lattice engineer', 'dock pilot', 'civic historian', 'coolant diver', 'vote archivist', 'maintenance ethicist'],
    supportingContradictions: [
      'precise with systems and erratic with trust',
      'habitually ironic yet unable to tolerate engineered cruelty',
      'obsessed with continuity but drawn to sabotage',
      'obedient to protocol until someone touches memory itself',
      'publicly careful and privately radical',
      'fascinated by order yet haunted by its human debris'
    ],
    supportingBonds: [
      { protagonist: 'technical-alliance', counterpart: 'cooperative', pressure: 'subordinate' },
      { protagonist: 'ambiguous', counterpart: 'allied', pressure: 'fearful' },
      { protagonist: 'professional', counterpart: 'witnessing', pressure: 'dependent' },
      { protagonist: 'cooperative', counterpart: 'uneasy', pressure: 'conflictual' },
      { protagonist: 'respectful', counterpart: 'professional', pressure: 'hierarchical' },
      { protagonist: 'allied', counterpart: 'cooperative', pressure: 'resentful' }
    ],
    locationNames: ['Mnemonic Orchard Spine', 'Dockside Cooling Loop', 'Archive Halo Concourse', 'The Quiet Vote Chamber', 'Spoke Nine Transit Vein'],
    locationSensoryAnchors: ['ozone under sterilized blossom air', 'frost against warm conduit glass', 'soft lattice hum below civic announcements', 'dustless seats and archived breath', 'magnetic vibration in the floor plates'],
    locationSocialSignals: ['comfort has been engineered past the point of honesty', 'maintenance workers know the system better than legislators do', 'citizens speak like witnesses to an edited memory', 'the room was built to make dissent look accidental', 'movement is logged before motive can be stated'],
    locationSymbolicCharges: ['an ecosystem designed to soothe political amputation', 'infrastructure carrying the station\'s hidden panic', 'public transit shaped like a circulatory lie', 'democracy stripped to a museum fragment', 'the station trying to route unrest as if it were waste heat'],
    locationConflictUses: ['technical access becomes moral trespass', 'shared memory fails in the exact place everyone trusts most', 'the setting makes secrecy feel efficient until bodies re-enter the frame', 'the architecture converts delay into pacification', 'distance only sharpens the ethical cost']
  },
  fantasy: {
    supportingNames: ['Sered Wyn', 'Ilya Thorn', 'Pella Vey', 'Orrin Slate', 'Mirael Dask', 'Torven Hale'],
    supportingRoles: ['ward singer', 'grave keeper', 'hearth scribe', 'mountain scout', 'ash herbalist', 'oath witness'],
    supportingContradictions: [
      'devout in ritual and skeptical in private',
      'gentle with the dead yet brutal about necessity',
      'ceremonial in speech yet reckless with secrets',
      'fearful of exile and hungry for rupture',
      'humble before power and furious at what it has cost',
      'patient with grief yet impatient with submission'
    ],
    supportingBonds: [
      { protagonist: 'loyal', counterpart: 'cooperative', pressure: 'fearful' },
      { protagonist: 'protective', counterpart: 'witnessing', pressure: 'subordinate' },
      { protagonist: 'uneasy', counterpart: 'cooperative', pressure: 'dependent' },
      { protagonist: 'allied', counterpart: 'ritual-bound', pressure: 'conflictual' },
      { protagonist: 'familial', counterpart: 'allied', pressure: 'resentful' },
      { protagonist: 'reverent', counterpart: 'cautious', pressure: 'hierarchical' }
    ],
    locationNames: ['Cinder Terrace Gate', 'The Ember Well', 'Slatewind Ossuary', 'Warding Orchard Hollow', 'Oathstone Causeway'],
    locationSensoryAnchors: ['snow smoke and hot mineral ash', 'embers clicking under black water', 'cedar resin inside old bones', 'frost caught on rune-wire branches', 'wind dragging sparks across carved stone'],
    locationSocialSignals: ['reverence is used to slow every forbidden question', 'the valley treats obedience as weather', 'ritual labor covers a lineage wound no one heals', 'children repeat the chants before they understand them', 'everyone listens for the mountain before speaking plainly'],
    locationSymbolicCharges: ['inheritance held together by managed forgetting', 'purification made indistinguishable from sacrifice', 'ancestral beauty lined with coercion', 'protection fed by an unpaid debt', 'a threshold that measures who may remember aloud'],
    locationConflictUses: ['ritual space makes disobedience instantly visible', 'the landscape keeps returning moral cost as weather', 'sacred architecture traps the argument in public view', 'every path forces proximity to the vow itself', 'the setting turns memory into an elemental pressure']
  },
  'romance-relational': {
    supportingNames: ['Mara Bell', 'Juniper Hale', 'Owen Crest', 'Selene Ward', 'Noah Quill', 'Imogen Pike'],
    supportingRoles: ['bindery foreman', 'museum registrar', 'paper conservator', 'gallery producer', 'estate solicitor', 'press mechanic'],
    supportingContradictions: [
      'warm in person yet managerial under pressure',
      'romantically observant and professionally severe',
      'precise with craft and clumsy with tenderness',
      'helpful with logistics yet hungry for control',
      'devoted to beauty and suspicious of vulnerability',
      'careful in speech but sharp in private judgement'
    ],
    supportingBonds: [
      { protagonist: 'cooperative', counterpart: 'professional', pressure: 'dependent' },
      { protagonist: 'allied', counterpart: 'witnessing', pressure: 'subordinate' },
      { protagonist: 'familial', counterpart: 'cooperative', pressure: 'fearful' },
      { protagonist: 'ambiguous', counterpart: 'allied', pressure: 'conflictual' },
      { protagonist: 'respectful', counterpart: 'professional', pressure: 'hierarchical' },
      { protagonist: 'cooperative', counterpart: 'competitive', pressure: 'resentful' }
    ],
    locationNames: ['Ink Room Mezzanine', 'Riverside Binding Loft', 'Museum Crate Hall', 'The Proofing Balcony', 'Wick Market Arcade'],
    locationSensoryAnchors: ['linseed ink and warm brass', 'paper dust in winter light', 'pine crates and linen gloves', 'lamp heat over trimmed signatures', 'damp brick and sugared coffee'],
    locationSocialSignals: ['everyone keeps using practical language to avoid naming feeling', 'craft offers cover but not real distance', 'the room is arranged for collaboration no one can keep impersonal', 'small design decisions carry emotional memory', 'public praise threatens private caution'],
    locationSymbolicCharges: ['shared labor dressed as neutral routine', 'repair mistaken for mere maintenance', 'display culture forcing intimacy into view', 'a workspace that remembers every unfinished touch', 'commerce offering a stage for confession'],
    locationConflictUses: ['the setting keeps collapsing logistics into tenderness', 'the space removes any believable excuse for emotional distance', 'objects of craft turn into witnesses', 'public elegance sharpens private vulnerability', 'material beauty refuses to stay emotionally neutral']
  }
};

function placeholder(entityType, stableId) {
  return `{{${entityType}:${stableId}}}`;
}

function reference(identifier) {
  return `$${identifier}`;
}

function pickProfileConfiguredValue(random, config, baseKey, profile, commandName, preferenceKey) {
  return random.pick(configuredPreferencePool(config, baseKey, profile, commandName, preferenceKey));
}

function configuredPreferencePool(config, baseKey, profile, commandName, preferenceKey) {
  const baseValues = Array.isArray(config?.[baseKey]) ? config[baseKey] : [];
  if (baseValues.length === 0) {
    throw new Error(`Missing config values for ${baseKey}.`);
  }

  const preferred = profilePreference(profile, commandName, preferenceKey, null);
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

async function writeStageDataFile(options, stage, baseName, label, value) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage,
    baseName,
    label
  });

  await writeStructuredMarkdown(artifactPath.filePath, {
    title: `${titleCase(baseName)} ${label}`,
    lead: 'Structured symbolic metadata emitted alongside the seed artifacts.',
    sections: [
      {
        heading: 'Entity mapping',
        lines: Object.entries(value?.entityMap ?? {}).flatMap(([group, entries]) =>
          Object.entries(entries ?? {}).map(([role, identifier]) => `- ${group}.${role}: ${identifier}`)
        )
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

function profilePreference(profile, commandName, key, fallback) {
  return profile?.commandPreferences?.[commandName]?.[key] ?? fallback;
}
