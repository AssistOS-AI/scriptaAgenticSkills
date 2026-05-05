import { DOMAIN_VALUES } from '../config/domains.mjs';
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
  const protagonistPlaceholder = placeholder('character', 'protagonist-001');
  const counterpartPlaceholder = placeholder('character', 'counterpart-001');
  const pressurePlaceholder = placeholder('character', 'pressure-001');
  const locationPlaceholder = placeholder('location', 'primary-001');
  const organizationPlaceholder = placeholder('organization', 'institution-001');
  const objectPlaceholder = placeholder('object', 'plot-001');
  const scenario = options.profile.scenario;
  const emotionalTrack = ['curiosity', 'tension', 'surprise', 'shock', 'bittersweet-release'];

  const bookBlocks = [
    createBlock('central-idea', 'define', [
      { name: 'hook-pattern', value: options.profile.hookPattern },
      { name: 'tension-source', value: options.profile.tensionSource },
      { name: 'naming-state', value: 'placeholder' },
      { name: 'hook', value: `${titleCase(scenario.protagonistRole)}s who pursue ${scenario.desire.toLowerCase()} risk ${scenario.stakes.toLowerCase()}` },
      { name: 'protagonist', value: protagonistPlaceholder },
      { name: 'desire', value: scenario.desire },
      { name: 'opposition', value: scenario.opposition },
      { name: 'stakes', value: scenario.stakes },
      { name: 'dilemma', value: scenario.dilemma },
      { name: 'story-question', value: scenario.storyQuestion },
      { name: 'audience-fit', value: `${options.profile.label.toLowerCase()} readers` },
      { name: 'pitch-test', value: `${protagonistPlaceholder} must decide whether to ${scenario.dilemma.toLowerCase()}` }
    ], [
      `${options.brief}`,
      `The symbolic seed leaves surface naming unresolved on purpose so later refinement can introduce more natural language detail.`
    ]),
    createBlock('theme', 'define', [
      { name: 'topic', value: options.profile.themeTopic },
      { name: 'moral-shape', value: options.profile.themeShape },
      { name: 'thematic-question', value: scenario.thematicQuestion },
      { name: 'thematic-statement', value: scenario.thematicStatement },
      { name: 'pole-a', value: scenario.thematicQuestion.split(' ')[0].replace(/[^a-z-]/gi, '').toLowerCase() || 'truth' },
      { name: 'pole-b', value: 'protective-concealment' },
      { name: 'moral-pressure', value: scenario.dilemma },
      { name: 'transformation-vector', value: `move ${protagonistPlaceholder} from defensive certainty toward costly honesty` },
      { name: 'dramatization', value: 'major choices and consequences must carry the theme instead of direct exposition' }
    ]),
    createBlock('wisdom', 'define', [
      { name: 'wisdom-dominant-dimension', value: 'balanced' },
      { name: 'cognitive', value: scenario.wisdom.cognitive },
      { name: 'emotional', value: scenario.wisdom.emotional },
      { name: 'moral', value: scenario.wisdom.moral },
      { name: 'reflexive', value: scenario.wisdom.reflexive },
      { name: 'experiential', value: scenario.wisdom.experiential },
      { name: 'perspective-mode', value: options.baselineProfile === 'fantasy' ? 'multi-perspective' : 'single-perspective' },
      { name: 'openness', value: options.baselineProfile === 'romance-relational' ? 'partially-open' : 'open' },
      { name: 'anti-didactic-rule', value: 'insight must emerge from consequences, reversals, and conflicting voices' }
    ]),
    createBlock('narrative-structure', 'define', [
      { name: 'information-order', value: random.pick(DOMAIN_VALUES.structure.informationOrders.filter((value) => value !== 'chronological' || options.macroForm === 'linear')) },
      { name: 'causal-density', value: 'tight' },
      { name: 'macro-form', value: options.macroForm },
      { name: 'beginning', value: `establish ${protagonistPlaceholder} inside ${locationPlaceholder} and the pressure around ${organizationPlaceholder}` },
      { name: 'inciting-incident', value: scenario.blueprintPremise },
      { name: 'middle', value: `investigation, pressure, and relational strain expose the cost of ${scenario.desire.toLowerCase()}` },
      { name: 'plot-point-1', value: `${protagonistPlaceholder} commits to action instead of withdrawal` },
      { name: 'midpoint', value: `${objectPlaceholder} reveals a hidden layer of the conflict` },
      { name: 'plot-point-2', value: `${pressurePlaceholder} turns institutional or personal pressure into direct threat` },
      { name: 'climax', value: scenario.dilemma },
      { name: 'resolution', value: `a new equilibrium forms after ${protagonistPlaceholder} accepts irreversible cost` },
      { name: 'causal-rule', value: 'every major choice must create a visible consequence in the next structural unit' }
    ]),
    createBlock('narrative-model', 'select', [
      { name: 'adaptation-strength', value: 'adapted' },
      { name: 'model-name', value: options.narrativeModel },
      { name: 'core-pattern', value: 'disruption escalates into irreversible choice and altered equilibrium' },
      { name: 'fit-reason', value: `the ${options.profile.label.toLowerCase()} profile needs direct escalation with meaningful internal cost` },
      { name: 'transformation-logic', value: `${protagonistPlaceholder} changes while the surrounding system reveals its hidden logic` },
      { name: 'genre-compatibility', value: options.profile.label },
      { name: 'adaptation-note', value: 'the chosen model is bent toward short-form clarity and evidence-rich validation' }
    ]),
    createBlock('blueprint', 'map', [
      { name: 'premise', value: scenario.blueprintPremise },
      { name: 'exposition', value: `introduce ${protagonistPlaceholder}, ${locationPlaceholder}, and the first unstable sign around ${objectPlaceholder}` },
      { name: 'rising-action', value: `pressure from ${pressurePlaceholder} and ${organizationPlaceholder} complicates every attempt to act` },
      { name: 'midpoint-shift', value: `${objectPlaceholder} changes what the protagonist understands about the conflict` },
      { name: 'climax', value: scenario.dilemma },
      { name: 'resolution', value: `the core conflict resolves with lasting cost and a redefined relation to ${organizationPlaceholder}` },
      { name: 'emotional-layer', value: emotionalTrack.join(' -> ') },
      { name: 'stakes-ladder', value: `private tension -> relational risk -> public consequence -> identity cost` }
    ])
  ];

  const characterBlocks = [
    createBlock('character-protagonist-001', 'define', [
      { name: 'complexity', value: 'round' },
      { name: 'development-type', value: 'dynamic' },
      { name: 'archetype', value: 'hero' },
      { name: 'role', value: 'protagonist' },
      { name: 'desire', value: scenario.desire },
      { name: 'need', value: 'accept vulnerability and act without the protection of denial' },
      { name: 'fear', value: 'becoming responsible for irreversible harm' },
      { name: 'lie', value: 'control can prevent loss if maintained long enough' },
      { name: 'truth', value: 'truthful action demands visible cost' },
      { name: 'conflict-mode', value: 'mixed' },
      { name: 'arc', value: options.baselineProfile === 'romance-relational' ? 'positive-change' : 'tragic' },
      { name: 'contradictions', value: 'capable yet self-protective, caring yet controlling' },
      { name: 'relationships', value: `${counterpartPlaceholder} [ambiguous], ${pressurePlaceholder} [hierarchical]` }
    ]),
    createBlock('character-counterpart-001', 'define', [
      { name: 'complexity', value: 'round' },
      { name: 'development-type', value: 'dynamic' },
      { name: 'archetype', value: 'ally' },
      { name: 'role', value: options.baselineProfile === 'romance-relational' ? 'ally' : 'witness' },
      { name: 'desire', value: 'help without becoming easy to use' },
      { name: 'need', value: 'choose direct commitment over guarded distance' },
      { name: 'fear', value: 'being reduced to a function in someone else\'s crisis' },
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
      { name: 'desire', value: 'protect the existing order that benefits them' },
      { name: 'need', value: 'maintain control at any moral cost' },
      { name: 'fear', value: 'public exposure and loss of authority' },
      { name: 'lie', value: 'stability justifies concealment' },
      { name: 'truth', value: 'concealment breeds larger collapse' },
      { name: 'conflict-mode', value: 'external' },
      { name: 'arc', value: 'flat' },
      { name: 'contradictions', value: 'calm yet coercive, rational yet self-serving' },
      { name: 'relationships', value: `${protagonistPlaceholder} [conflictual], ${counterpartPlaceholder} [hierarchical]` }
    ])
  ];

  const worldBlocks = [
    createBlock('plot-element-core-object', 'define', [
      { name: 'category', value: 'information' },
      { name: 'subtype', value: 'document' },
      { name: 'function', value: 'revelation' },
      { name: 'stakes', value: 'changes who understands the real structure of the conflict' },
      { name: 'holders', value: `${organizationPlaceholder}, ${pressurePlaceholder}` },
      { name: 'activation', value: `the protagonist decodes ${objectPlaceholder} near the midpoint` },
      { name: 'payoff-zone', value: 'midpoint and final confrontation' }
    ]),
    createBlock('plot-device-pressure-shift', 'define', [
      { name: 'device-type', value: 'foreshadowing' },
      { name: 'purpose', value: 'prepare the later reveal that the visible conflict is not the only system in play' },
      { name: 'setup-zone', value: 'opening and first chapter' },
      { name: 'payoff-zone', value: 'midpoint' },
      { name: 'fairness-rule', value: 'every later reveal must have at least one early concrete hint' }
    ]),
    createBlock('world-subsystem-primary', 'define', [
      { name: 'domain', value: options.profile.worldDomain },
      ...(options.profile.magicDeterminacy ? [{ name: 'magic-determinacy', value: options.profile.magicDeterminacy }] : []),
      { name: 'function', value: 'defines the system that constrains action and shapes conflict' },
      { name: 'conflict-output', value: 'moral pressure, institutional or magical imbalance, and escalating consequences' },
      { name: 'visibility', value: 'explicit' }
    ]),
    createBlock('world-rule-primary', 'define', [
      { name: 'subsystem', value: 'primary' },
      { name: 'rule-type', value: options.profile.worldDomain === 'magic' ? 'metaphysical-cost' : options.profile.worldDomain === 'technology' ? 'technological-restriction' : 'social-norm' },
      { name: 'rule', value: scenario.worldRule },
      { name: 'cost', value: 'every attempt to solve the central problem increases another kind of loss' },
      { name: 'exception', value: 'exceptions require a visible trade-off and cannot erase consequences' },
      { name: 'traceability', value: 'the manuscript must show repeated evidence that the rule shapes decisions' },
      { name: 'violation-effect', value: 'validation must flag coherence failure if the rule stops mattering' }
    ])
  ];

  const bookArtifact = await writeStageFile(options, 'macro', 'book', 'symbolic-plan', serializeBlocks(bookBlocks));
  const characterArtifact = await writeStageFile(options, 'macro', 'characters', 'symbolic-plan', serializeBlocks(characterBlocks));
  const worldArtifact = await writeStageFile(options, 'macro', 'world', 'symbolic-plan', serializeBlocks(worldBlocks));

  return [bookArtifact, characterArtifact, worldArtifact];
}

export async function generateChapterSeeds(options) {
  const random = createSeededRandom(`${options.seed}:chapters`);
  const chapterRoles = buildChapterRoleSequence(options.chapterCount, options.baselineProfile);
  const artifacts = [];

  for (let chapterIndex = 0; chapterIndex < options.chapterCount; chapterIndex += 1) {
    const chapterNumber = String(chapterIndex + 1).padStart(3, '0');
    const chapterId = `chapter-${chapterNumber}`;
    const role = chapterRoles[chapterIndex];
    const closingMode = chapterIndex === options.chapterCount - 1 ? 'reversal' : chapterIndex === options.chapterCount - 2 ? 'open-question' : 'cliffhanger';
    const blocks = [
      createBlock(chapterId, 'define', [
        { name: 'chapter-role', value: role },
        { name: 'purpose', value: chapterPurpose(role, options.profile.label, options.baselineProfile) },
        { name: 'input-state', value: chapterInputState(chapterIndex, role, options.baselineProfile) },
        { name: 'output-state', value: chapterOutputState(chapterIndex, options.chapterCount, role, options.baselineProfile) },
        { name: 'conflict', value: chapterConflict(role, options.profile.label, options.baselineProfile) },
        { name: 'stakes', value: chapterStakeLine(options.baselineProfile) },
        { name: 'opening-mode', value: chapterIndex === 0 ? 'contextual-setup' : random.pick(DOMAIN_VALUES.chapter.openingModes) },
        { name: 'development-mode', value: chapterDevelopmentMode(role, options.baselineProfile, random) },
        { name: 'closing-mode', value: closingMode },
        { name: 'continuity-obligations', value: `later chapters must preserve the consequence introduced in ${chapterId}` },
        { name: 'thematic-focus', value: `${options.profile.themeTopic} under ${options.profile.themeShape} pressure` },
        { name: 'rhythm-note', value: chapterRhythmNote(role, chapterIndex, options.chapterCount) }
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
  const sceneCount = options.sceneDensity === 'high' ? 3 : 2;
  const artifacts = [];
  const chapterRoles = buildChapterRoleSequence(options.chapterCount, options.baselineProfile);

  for (let chapterIndex = 0; chapterIndex < options.chapterCount; chapterIndex += 1) {
    const chapterNumber = String(chapterIndex + 1).padStart(3, '0');
    const chapterId = `chapter-${chapterNumber}`;
    const chapterRole = chapterRoles[chapterIndex] ?? 'bridge';
    const blocks = [];

    blocks.push(createBlock(`sequence-${chapterNumber}-core`, 'define', [
      { name: 'sequence-type', value: options.profile.sequenceType },
      { name: 'link-logic', value: 'causal' },
      { name: 'chapter', value: chapterId },
      { name: 'objective', value: sequenceObjective(options.baselineProfile, chapterRole) },
      { name: 'scene-chain', value: Array.from({ length: sceneCount }, (_, index) => `scene-${chapterNumber}-${String(index + 1).padStart(2, '0')}`).join(', ') },
      { name: 'continuity-thread', value: 'each scene must inherit and intensify the previous scene\'s unresolved pressure' },
      { name: 'conflict-line', value: sequenceConflictLine(options.baselineProfile, chapterRole) },
      { name: 'payoff', value: chapterIndex === options.chapterCount - 1 ? finalSequencePayoff(options.baselineProfile, chapterRole) : sequencePayoff(options.baselineProfile, chapterRole) }
    ]));

    for (let sceneIndex = 0; sceneIndex < sceneCount; sceneIndex += 1) {
      const sceneId = `scene-${chapterNumber}-${String(sceneIndex + 1).padStart(2, '0')}`;
      const isFinalScene = sceneIndex === sceneCount - 1;
      blocks.push(createBlock(sceneId, 'define', [
        { name: 'chapter', value: chapterId },
        { name: 'showing-mode', value: sceneIndex === 0 ? 'direct-showing' : 'mixed' },
        { name: 'focalization', value: options.focalizationMode },
        { name: 'time-space', value: sceneLocation(options.profile, sceneIndex) },
        { name: 'introduction', value: sceneIntroduction(options.baselineProfile, chapterRole, sceneIndex) },
        { name: 'development', value: sceneDevelopment(options.baselineProfile, chapterRole, sceneIndex) },
        { name: 'conflict', value: sceneConflict(options.baselineProfile, chapterRole, sceneIndex) },
        { name: 'resolution', value: sceneResolution(options.baselineProfile, chapterRole, isFinalScene) },
        { name: 'exit', value: sceneExit(options.baselineProfile, chapterRole, isFinalScene) },
        { name: 'participants', value: '{{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}' },
        { name: 'state-change', value: sceneStateChange(options.baselineProfile, chapterRole, isFinalScene) }
      ]));

      blocks.push(createBlock(`action-${chapterNumber}-${sceneIndex + 1}`, 'place', [
        { name: 'action-mode', value: random.pick(DOMAIN_VALUES.content.actionModes) },
        { name: 'scene', value: sceneId },
        { name: 'actor', value: '{{character:protagonist-001}}' },
        { name: 'goal', value: actionGoal(options.baselineProfile, chapterRole, sceneIndex) },
        { name: 'obstacle', value: actionObstacle(options.baselineProfile, chapterRole) },
        { name: 'result', value: actionResult(options.baselineProfile, chapterRole, isFinalScene) }
      ]));

      blocks.push(createBlock(`conflict-${chapterNumber}-${sceneIndex + 1}`, 'place', [
        { name: 'scope', value: sceneId },
        { name: 'type', value: chapterIndex === 0 ? 'mixed' : random.pick(DOMAIN_VALUES.content.conflictTypes.filter((value) => value !== 'external-nature')) },
        { name: 'forces', value: '{{character:protagonist-001}} versus {{character:pressure-001}}' },
        { name: 'stakes', value: conflictStakeLine(options.baselineProfile) },
        { name: 'escalation', value: conflictEscalation(options.baselineProfile, chapterRole) }
      ]));

      blocks.push(createBlock(`event-${chapterNumber}-${sceneIndex + 1}`, 'trigger', [
        { name: 'scope', value: sceneId },
        { name: 'event-type', value: isFinalScene ? 'revelation' : random.pick(DOMAIN_VALUES.content.eventTypes) },
        { name: 'trigger', value: eventTrigger(options.baselineProfile, chapterRole, isFinalScene) },
        { name: 'impact', value: eventImpact(options.baselineProfile, chapterRole, isFinalScene) },
        { name: 'follow-through', value: eventFollowThrough(options.baselineProfile, chapterRole, isFinalScene) }
      ]));
    }

    blocks.push(createBlock(`description-${chapterNumber}-atmosphere`, 'apply', [
      { name: 'scope', value: chapterId },
      { name: 'description-type', value: options.baselineProfile === 'fantasy' ? 'symbolic' : 'atmosphere' },
      { name: 'focus', value: descriptionFocus(options.baselineProfile) },
      { name: 'function', value: options.baselineProfile === 'fantasy' ? 'symbolic' : 'atmospheric' },
      { name: 'rhythm-effect', value: 'frame' }
    ]));

    blocks.push(createBlock(`dialogue-${chapterNumber}-core`, 'apply', [
      { name: 'scene', value: `scene-${chapterNumber}-01` },
      { name: 'speakers', value: '{{character:protagonist-001}}, {{character:counterpart-001}}' },
      { name: 'exchange-type', value: options.baselineProfile === 'romance-relational' ? 'question-answer' : 'conflictual' },
      { name: 'purpose', value: options.baselineProfile === 'detective-police' ? 'information' : 'tension' },
      { name: 'subtext', value: dialogueSubtext(options.baselineProfile, chapterRole) }
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
      { name: 'function', value: 'psychological-insight' },
      { name: 'trigger', value: monologueTrigger(options.baselineProfile, chapterRole) },
      { name: 'texture', value: chapterIndex === options.chapterCount - 1 ? 'fragmented' : 'reflective' }
    ]));

    blocks.push(createBlock(`suspense-${chapterNumber}-core`, 'build', [
      { name: 'scope', value: chapterId },
      { name: 'suspense-type', value: options.baselineProfile === 'detective-police' ? 'cognitive' : 'emotional' },
      { name: 'uncertainty', value: suspenseUncertainty(options.baselineProfile, chapterRole) },
      { name: 'delay-technique', value: 'mixed' },
      { name: 'payoff-zone', value: `event-${chapterNumber}-${sceneCount}` }
    ], ['Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.']));

    if (chapterIndex < options.chapterCount - 1) {
      blocks.push(createBlock(`cliffhanger-${chapterNumber}-exit`, 'cut', [
        { name: 'scope', value: chapterId },
        { name: 'cliffhanger-type', value: chapterIndex === options.chapterCount - 2 ? 'critical-decision' : 'interrupted-revelation' },
        { name: 'cut-moment', value: cliffhangerMoment(options.baselineProfile, chapterRole) },
        { name: 'continuation-pressure', value: cliffhangerContinuation(options.baselineProfile, chapterRole) }
      ]));
    }

    const artifact = await writeStageFile(options, 'micro', chapterId, 'symbolic-plan', serializeBlocks(blocks));
    artifacts.push(artifact);
  }

  return artifacts;
}

function buildChapterRoleSequence(chapterCount, profileId) {
  const threeChapterPatterns = {
    drama: ['setup', 'revelation', 'culmination'],
    'detective-police': ['setup', 'investigation', 'culmination'],
    'science-fiction': ['setup', 'revelation', 'culmination'],
    fantasy: ['setup', 'revelation', 'culmination'],
    'romance-relational': ['setup', 'reversal', 'culmination']
  };

  if (chapterCount <= 3) {
    return threeChapterPatterns[profileId] ?? ['setup', 'revelation', 'culmination'];
  }

  const defaultPattern = ['setup', 'escalation', 'investigation', 'revelation', 'culmination'];
  return Array.from({ length: chapterCount }, (_, index) => defaultPattern[Math.min(index, defaultPattern.length - 1)]);
}

function chapterPurpose(role, profileLabel, profileId) {
  const profilePurposes = {
    drama: {
      setup: 'expose the family wound before anyone can stabilize it as a harmless memory',
      revelation: 'turn withheld grief into a truth that changes the moral reading of the family',
      culmination: 'force repair or rupture into the open without procedural shelter'
    },
    'detective-police': {
      setup: 'establish the investigation as a contest between evidence and institutional denial',
      investigation: 'tighten the clue chain until official procedure itself becomes suspect',
      culmination: 'force the case into a public accusation that cannot be filed away'
    },
    'science-fiction': {
      setup: 'show how engineered order depends on emotional and mnemonic control',
      revelation: 'recast the system malfunction as a political choice rather than a technical anomaly',
      culmination: 'make safety and freedom impossible to preserve at the same time'
    },
    fantasy: {
      setup: 'introduce the inherited curse as a lived social burden rather than distant legend',
      revelation: 'bind the hidden oath to the protagonist\'s present responsibility',
      culmination: 'demand truthful sacrifice before the valley can change'
    },
    'romance-relational': {
      setup: 'let ordinary collaboration reveal the first fracture in emotional self-protection',
      reversal: 'flip the balance between professional control and vulnerable attachment',
      culmination: 'test whether intimacy can survive honest interdependence'
    }
  };
  const purposes = {
    setup: `establish the ${profileLabel.toLowerCase()} premise and its first instability`,
    escalation: 'increase cost and narrow the protagonist’s safe options',
    investigation: 'uncover the hidden structure behind the visible conflict',
    revelation: 'turn a partial truth into a reshaped conflict',
    reversal: 'force the relationship or system to flip its apparent balance',
    culmination: 'drive the book into its final irreversible choice',
    aftermath: 'show how the changed state still resists easy closure',
    bridge: 'carry pressure across a necessary transition without losing momentum'
  };

  return profilePurposes[profileId]?.[role] ?? purposes[role] ?? 'advance the story in a traceable way';
}

function chapterConflict(role, profileLabel, profileId) {
  const profileConflicts = {
    drama: {
      setup: 'private grief and public reputation pull the same event toward incompatible meanings',
      revelation: 'speaking the truth now threatens both dignity and belonging'
    },
    'detective-police': {
      setup: `the ${profileLabel.toLowerCase()} system resists any reading that links procedure to corruption`,
      investigation: 'the safer interpretation of the evidence keeps serving the wrong people',
      culmination: 'truth can surface only by damaging the institution meant to contain it'
    },
    'science-fiction': {
      setup: 'security logic treats emotional memory as a civic threat',
      revelation: 'the station can preserve order only by intensifying moral illegibility'
    },
    fantasy: {
      setup: 'ancestral legitimacy depends on keeping the founding lie intact',
      culmination: 'every truthful act saves the valley while stripping inherited protection away'
    },
    'romance-relational': {
      setup: 'practical cooperation keeps colliding with old defensiveness and renewed desire',
      reversal: 'what keeps the partnership functional also keeps intimacy at risk'
    }
  };
  const map = {
    setup: `the ${profileLabel.toLowerCase()} world resists the first truthful reading of the problem`,
    escalation: 'every attempt to act reveals a larger cost',
    investigation: 'knowledge and safety become impossible to keep together',
    revelation: 'a new truth destabilizes the protagonist’s working strategy',
    reversal: 'the power balance shifts and exposes earlier misreadings',
    culmination: 'the protagonist must accept cost rather than defer it',
    aftermath: 'the new equilibrium remains emotionally unstable',
    bridge: 'the story must move without losing causality or tension'
  };

  return profileConflicts[profileId]?.[role] ?? map[role] ?? 'the chapter must intensify the larger book pressure';
}

function chapterInputState(chapterIndex, role, profileId) {
  if (chapterIndex === 0) {
    const openings = {
      drama: 'the central wound is active, but the family still believes it can remain private',
      'detective-police': 'the first clue exists, but the official story still feels safer than the true one',
      'science-fiction': 'the system still appears stable even though memory control has begun to leak',
      fantasy: 'the inherited curse is visible, but its true origin remains protected by ritual silence',
      'romance-relational': 'the partnership is functional on the surface, but trust remains strategically limited'
    };
    return openings[profileId] ?? 'the initial promise is unstable but not yet public';
  }

  return `the previous chapter has already shifted the ${role} pressure into a less survivable form`;
}

function chapterOutputState(chapterIndex, chapterCount, role, profileId) {
  if (chapterIndex === chapterCount - 1) {
    const endings = {
      drama: 'the central pressure resolves, but only after public truth and intimate cost arrive together',
      'detective-police': 'the case resolves with visible justice pressure and institutional damage',
      'science-fiction': 'the central pressure resolves, but the surviving order is morally altered',
      fantasy: 'the central pressure resolves through sacrifice that permanently changes belonging',
      'romance-relational': 'the central pressure resolves with honest attachment and visible vulnerability'
    };
    return endings[profileId] ?? 'the central pressure resolves with visible cost';
  }

  return `chapter ${chapterIndex + 1} exits with sharper ${role} pressure, narrower choices, and a cost that cannot be folded back into routine`;
}

function chapterStakeLine(profileId) {
  const stakes = {
    drama: 'identity, dignity, family trust, and public consequence',
    'detective-police': 'justice, legitimacy, public trust, and personal safety',
    'science-fiction': 'freedom, safety, civic memory, and collective consent',
    fantasy: 'lineage, survival, oath-bound legitimacy, and magical cost',
    'romance-relational': 'autonomy, tenderness, creative future, and mutual trust'
  };
  return stakes[profileId] ?? 'identity, trust, and the profile-specific public consequence';
}

function chapterDevelopmentMode(role, profileId, random) {
  if (role === 'investigation') {
    return 'investigation';
  }
  if (role === 'revelation') {
    return 'revelation-ladder';
  }
  if (profileId === 'romance-relational' && role === 'reversal') {
    return 'psychological-pressure';
  }
  return random.pick(['escalation', 'confrontation', 'psychological-pressure']);
}

function chapterRhythmNote(role, chapterIndex, chapterCount) {
  if (chapterIndex === chapterCount - 1) {
    return 'breathless';
  }
  if (chapterIndex === 0) {
    return 'balanced';
  }
  return role === 'revelation' ? 'wave-like' : 'escalating';
}

function sequenceObjective(profileId, role) {
  const objectives = {
    drama: 'force private grief into an irreversible public reading',
    'detective-police': 'lock the investigation to evidence that the system cannot safely absorb',
    'science-fiction': 'push memory control into a choice between safety and freedom',
    fantasy: 'bring the inherited curse into a truth-bound confrontation',
    'romance-relational': 'turn collaboration into a test of honest intimacy'
  };
  return objectives[profileId] ?? `push the ${role} conflict into a clearer irreversible shape`;
}

function sequenceConflictLine(profileId, role) {
  const lines = {
    drama: 'the protagonist tries to hold tenderness and truth together while grief and institutions keep separating them',
    'detective-police': 'the protagonist follows evidence while every official response attempts to redirect, delay, or domesticate it',
    'science-fiction': 'the protagonist tries to restore human agency while the system reframes freedom as a security defect',
    fantasy: 'the protagonist seeks truthful release while inherited power keeps demanding silence as the price of belonging',
    'romance-relational': 'the protagonist wants genuine partnership while habit keeps translating vulnerability into negotiation'
  };
  return lines[profileId] ?? `the protagonist tries to gain control while ${role} pressure resists simplification`;
}

function sequencePayoff(profileId, role) {
  const payoffs = {
    drama: 'the chapter exits with a more exposed wound and less shelter from consequence',
    'detective-police': 'the chapter exits with cleaner evidence and dirtier institutional pressure',
    'science-fiction': 'the chapter exits with sharper ethical visibility and reduced procedural safety',
    fantasy: 'the chapter exits with greater magical clarity and heavier cost',
    'romance-relational': 'the chapter exits with greater intimacy pressure and less emotional cover'
  };
  return payoffs[profileId] ?? `the ${role} chapter exits with new pressure and unresolved cost`;
}

function finalSequencePayoff(profileId, role) {
  const payoffs = {
    drama: 'the chapter delivers a truth that repairs some bonds only by breaking older arrangements',
    'detective-police': 'the chapter delivers accusation, proof, and public fallout in the same movement',
    'science-fiction': 'the chapter delivers a civic choice that redefines what survival means',
    fantasy: 'the chapter delivers sacrifice and release without restoring the old order',
    'romance-relational': 'the chapter delivers commitment that remains honest about risk'
  };
  return payoffs[profileId] ?? `the ${role} chapter delivers its final irreversible choice`;
}

function sceneIntroduction(profileId, role, sceneIndex) {
  const map = {
    drama: ['old grief leaks into ordinary routine', 'the room carries yesterday\'s unspoken accusation', 'private tenderness starts looking like evidence'],
    'detective-police': ['a procedural detail refuses to stay procedural', 'fresh evidence makes the official timeline wobble', 'the safe reading of the case begins to collapse'],
    'science-fiction': ['a system alert exposes human fragility inside the station', 'one corrupted memory trace disturbs the engineered calm', 'the controlled environment reveals its own fear of freedom'],
    fantasy: ['the place answers with omen before speech', 'ancestral magic stirs around an avoided name', 'the valley treats silence as a new wound'],
    'romance-relational': ['shared work becomes harder to treat as neutral routine', 'a practical exchange opens an emotional fault line', 'care and defensiveness start moving in the same gesture']
  };
  return `${pickIndexed(map[profileId], sceneIndex)} while the chapter still carries ${role} pressure`;
}

function sceneDevelopment(profileId, role, sceneIndex) {
  const map = {
    drama: ['small gestures and withheld answers narrow the emotional field', 'institutional language keeps bruising the private conversation', 'every response makes repair more costly'],
    'detective-police': ['cross-checks, procedural friction, and tactical speech narrow the available readings', 'evidence moves faster than permission', 'the official chain of custody starts to look like a weapon'],
    'science-fiction': ['diagnostics, restricted access, and human hesitation converge on the same breach', 'technical procedure and intimate memory become inseparable', 'control protocols react before trust can stabilize'],
    fantasy: ['ritual detail and bodily risk make the hidden law newly concrete', 'old testimony and present danger begin to sound like the same warning', 'magic cost becomes social cost in plain view'],
    'romance-relational': ['practical cooperation and emotional caution keep rewriting the meaning of each exchange', 'routine labor turns into an index of mutual risk', 'every useful gesture threatens to become confession']
  };
  return `${pickIndexed(map[profileId], sceneIndex)} as ${role} pressure intensifies`;
}

function sceneConflict(profileId, role, sceneIndex) {
  const map = {
    drama: ['love and honesty demand incompatible timings', 'dignity and disclosure start opposing each other', 'everyone wants repair, but not the same version of truth'],
    'detective-police': ['evidence and authority now point in opposite directions', 'procedure protects the wrong people more efficiently than it protects truth', 'the clue chain becomes dangerous precisely because it is coherent'],
    'science-fiction': ['freedom and safety now require conflicting system states', 'memory repair threatens the peace built on forgetting', 'human consent collides with predictive control'],
    fantasy: ['inheritance and redemption pull the same bloodline apart', 'truthful speech burns through the protections it needs', 'wonder now arrives with an enforceable cost'],
    'romance-relational': ['intimacy and self-protection keep taking turns as the wiser choice', 'professional clarity cannot contain emotional consequence', 'desire exposes what routine tried to keep manageable']
  };
  return `${pickIndexed(map[profileId], sceneIndex)} under ${role} pressure`;
}

function sceneResolution(profileId, role, isFinalScene) {
  if (isFinalScene) {
    const finals = {
      drama: 'the scene ends after someone chooses painful honesty over emotional convenience',
      'detective-police': 'the scene ends after evidence and accusation finally occupy the same frame',
      'science-fiction': 'the scene ends after a technical choice becomes an openly moral one',
      fantasy: 'the scene ends after truth demands sacrifice instead of symbolism',
      'romance-relational': 'the scene ends after vulnerability becomes harder to withdraw'
    };
    return finals[profileId] ?? `the ${role} scene ends after a costly decision or reveal`;
  }

  return 'the scene closes with partial knowledge, altered leverage, and rising risk';
}

function sceneExit(profileId, role, isFinalScene) {
  if (isFinalScene) {
    return `the chapter hands off to a sharper ${role} consequence that cannot be re-contained`;
  }
  return profileId === 'detective-police'
    ? 'the next scene begins before the evidence can be neutralized'
    : 'the next scene begins before the pressure can settle';
}

function sceneStateChange(profileId, role, isFinalScene) {
  if (isFinalScene) {
    const finals = {
      drama: 'the chapter-level wound becomes public and emotionally irreversible',
      'detective-police': 'the chapter-level accusation becomes harder to dismiss as speculation',
      'science-fiction': 'the chapter-level choice becomes legible as a conflict over freedom and safety',
      fantasy: 'the chapter-level curse can no longer hide behind inherited ritual',
      'romance-relational': 'the chapter-level bond becomes harder to frame as merely practical'
    };
    return finals[profileId] ?? `the ${role} chapter-level conflict becomes harder to hide`;
  }
  return 'the local conflict changes direction, but the central pressure remains active';
}

function actionGoal(profileId, role, sceneIndex) {
  const goals = {
    drama: ['ask for the withheld truth without shattering fragile trust', 'test whether care can survive direct naming', 'interrupt the family script that keeps grief orderly'],
    'detective-police': ['lock the evidence to a timeline that cannot be denied', 'pressure the witness chain into coherence', 'force the official story to absorb one unmanageable fact'],
    'science-fiction': ['restore the corrupted memory trace before governance seals it', 'keep human consent visible inside the system response', 'translate anomaly into public knowledge before prediction closes over it'],
    fantasy: ['name the binding oath before the valley exacts a harsher price', 'recover the true line of inheritance without submitting to it', 'turn ritual knowledge into actionable release'],
    'romance-relational': ['test whether honesty can coexist with collaboration', 'protect the shared work without retreating from feeling', 'say enough truth to keep tenderness from collapsing back into routine']
  };
  return pickIndexed(goals[profileId], sceneIndex) ?? `advance the ${role} pressure with visible intention`;
}

function actionObstacle(profileId, role) {
  const obstacles = {
    drama: 'every answer threatens to reopen grief in front of the wrong audience',
    'detective-police': 'the official record still protects the version that serves power',
    'science-fiction': 'the station treats uncertainty as a security breach instead of a civic fact',
    fantasy: 'truth burns through status, shelter, and magical protection at the same time',
    'romance-relational': 'habit keeps translating vulnerability back into strategy'
  };
  return obstacles[profileId] ?? `the ${role} pressure adapts faster than certainty`;
}

function actionResult(profileId, role, isFinalScene) {
  if (isFinalScene) {
    const finals = {
      drama: 'the attempt succeeds emotionally, but at the price of a fractured arrangement',
      'detective-police': 'the attempt secures proof, but only by intensifying danger',
      'science-fiction': 'the attempt restores agency, but destabilizes the managed order',
      fantasy: 'the attempt uncovers truth, but strips away inherited safety',
      'romance-relational': 'the attempt creates intimacy, but removes the last easy retreat'
    };
    return finals[profileId] ?? `the ${role} attempt succeeds at a personal cost`;
  }
  return 'the attempt reveals only part of the hidden structure and deepens the next demand';
}

function conflictStakeLine(profileId) {
  const stakes = {
    drama: 'identity, dignity, belonging, and the right to narrate the loss honestly',
    'detective-police': 'justice, legitimacy, witness safety, and public trust',
    'science-fiction': 'consent, civic memory, security, and political agency',
    fantasy: 'inheritance, survival, magical legitimacy, and communal memory',
    'romance-relational': 'autonomy, tenderness, creative future, and mutual trust'
  };
  return stakes[profileId] ?? 'identity, legitimacy, and unresolved relational cost';
}

function conflictEscalation(profileId, role) {
  const lines = {
    drama: 'each exchange removes one more polite way to avoid the wound',
    'detective-police': 'each clean answer exposes a dirtier structure beneath the case',
    'science-fiction': 'each fix proves that the governing system fears uncurated memory',
    fantasy: 'each revelation increases both magical clarity and social cost',
    'romance-relational': 'each useful act makes emotional neutrality less believable'
  };
  return lines[profileId] ?? `each ${role} exchange removes a safer interpretation of the conflict`;
}

function eventTrigger(profileId, role, isFinalScene) {
  const finals = {
    drama: '{{object:plot-001}} reframes the family loss as a protected lie',
    'detective-police': '{{object:plot-001}} links the victim directly to the protected redevelopment file',
    'science-fiction': '{{object:plot-001}} restores a memory sequence the station was designed to suppress',
    fantasy: '{{object:plot-001}} reveals the oath that bound the valley to its wound',
    'romance-relational': '{{object:plot-001}} exposes an earlier act of care that both characters misread'
  };
  const middles = {
    drama: '{{object:plot-001}} introduces a version of the past no one can absorb cleanly',
    'detective-police': '{{object:plot-001}} destabilizes the official timeline',
    'science-fiction': '{{object:plot-001}} proves the anomaly was administered, not accidental',
    fantasy: '{{object:plot-001}} ties present danger to an inherited promise',
    'romance-relational': '{{object:plot-001}} changes the emotional meaning of the collaboration'
  };
  return isFinalScene ? finals[profileId] ?? `{{object:plot-001}} reshapes the ${role} conflict` : middles[profileId] ?? `{{object:plot-001}} yields a new implication inside the ${role} conflict`;
}

function eventImpact(profileId, role, isFinalScene) {
  if (isFinalScene) {
    return `the ${role} chapter can no longer return to its opening balance`;
  }
  const impacts = {
    drama: 'the emotional map of the chapter becomes less survivable',
    'detective-police': 'the procedural map of the chapter becomes less defensible',
    'science-fiction': 'the ethical map of the chapter becomes less containable',
    fantasy: 'the inherited map of the chapter becomes less legitimate',
    'romance-relational': 'the emotional map of the chapter becomes harder to rationalize'
  };
  return impacts[profileId] ?? `the ${role} chapter can no longer return to its opening state`;
}

function eventFollowThrough(profileId, role, isFinalScene) {
  if (isFinalScene) {
    return `the next chapter must absorb the fallout in full ${role} terms`;
  }
  const lines = {
    drama: 'the next scene must carry the wound into a more public register',
    'detective-police': 'the next scene must test whether evidence can survive institutionally',
    'science-fiction': 'the next scene must decide whether restored memory can remain public',
    fantasy: 'the next scene must convert revelation into costly action',
    'romance-relational': 'the next scene must expose whether tenderness can survive clarity'
  };
  return lines[profileId] ?? `the next scene must reinterpret the same ${role} pressure at a higher level`;
}

function descriptionFocus(profileId) {
  const focuses = {
    drama: 'the room should register grief, routine, and social embarrassment without freezing the action',
    'detective-police': 'the environment should feel procedural, damp, and morally overdetermined',
    'science-fiction': 'the environment should carry engineered elegance and latent human unease',
    fantasy: 'the environment should register omen, material texture, and visible cost',
    'romance-relational': 'the environment should support intimacy through routine detail instead of decorative sentiment'
  };
  return focuses[profileId] ?? 'the environment should mirror the local pressure without freezing the action';
}

function dialogueSubtext(profileId, role) {
  const lines = {
    drama: 'the explicit conversation should protect affection while exposing incompatible memories',
    'detective-police': 'the explicit conversation should sound procedural while distributing fear and leverage',
    'science-fiction': 'the explicit conversation should balance technical clarity with moral disorientation',
    fantasy: 'the explicit conversation should carry ritual meaning underneath practical speech',
    'romance-relational': 'the explicit conversation should hide attraction, hesitation, and practical bargaining in the same lines'
  };
  return lines[profileId] ?? `the explicit conversation should hide a harder ${role} truth`;
}

function monologueTrigger(profileId, role) {
  const lines = {
    drama: 'the latest disclosure forces the protagonist to reinterpret love, blame, and inherited silence',
    'detective-police': 'the latest clue forces the protagonist to measure justice against institutional belonging',
    'science-fiction': 'the latest system response forces the protagonist to reinterpret safety, consent, and memory',
    fantasy: 'the latest oath pressure forces the protagonist to reinterpret inheritance, duty, and release',
    'romance-relational': 'the latest vulnerable exchange forces the protagonist to reinterpret autonomy, need, and trust'
  };
  return lines[profileId] ?? `the latest ${role} cost forces the protagonist to reinterpret earlier certainty`;
}

function suspenseUncertainty(profileId, role) {
  const lines = {
    drama: 'no one can yet tell whether truth will repair the bond or formalize the rupture',
    'detective-police': 'no one can yet tell whether proof will survive the institution built to absorb it',
    'science-fiction': 'no one can yet tell whether restored memory will liberate the station or fracture it',
    fantasy: 'no one can yet tell whether the truthful act will save the valley or finish stripping its protections',
    'romance-relational': 'no one can yet tell whether honesty will deepen the bond or expose its limits'
  };
  return lines[profileId] ?? `the real ${role} outcome remains unreadable until the next scene or chapter`;
}

function cliffhangerMoment(profileId, role) {
  const lines = {
    drama: 'the protagonist sees the next truthful move and understands exactly whom it will wound',
    'detective-police': 'the protagonist recognizes that the next procedural step is also a public accusation',
    'science-fiction': 'the protagonist sees the system threshold where safety and freedom diverge completely',
    fantasy: 'the protagonist recognizes which truthful vow must now be paid in full',
    'romance-relational': 'the protagonist understands that the next honest gesture cannot be disguised as routine'
  };
  return lines[profileId] ?? `the protagonist recognizes the cost of the next ${role} move but cannot avoid it`;
}

function cliffhangerContinuation(profileId, role) {
  const lines = {
    drama: 'the reader must see whether confession creates repair or a cleaner break',
    'detective-police': 'the reader must see whether evidence can still become justice',
    'science-fiction': 'the reader must see whether memory can remain public without collapsing order',
    fantasy: 'the reader must see what the valley demands in exchange for truthful release',
    'romance-relational': 'the reader must see whether vulnerability creates partnership or exposes its limit'
  };
  return lines[profileId] ?? `the reader must see whether the next ${role} chapter confirms ruin or transformation`;
}

function pickIndexed(values, index) {
  if (!values || values.length === 0) {
    return '';
  }
  return values[index % values.length];
}

function sceneLocation(profile, sceneIndex) {
  return profile.lexicon.locations[sceneIndex % profile.lexicon.locations.length];
}

function placeholder(entityType, stableId) {
  return `{{${entityType}:${stableId}}}`;
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
