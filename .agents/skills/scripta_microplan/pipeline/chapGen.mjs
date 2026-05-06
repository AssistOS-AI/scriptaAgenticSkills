import { blockToObject, getFieldValue, replaceReferences, buildReferenceReplacements, normalizeReferenceValue } from '../core/cnl.mjs';
import { ensureWorkspace, allocateArtifactPath, listLatestStageArtifacts, registerStageRun, writeText } from '../core/workspace.mjs';
import { normalizePipelineOptions } from './options.mjs';
import { readLatestBlocksByBase } from './loaders.mjs';

export async function runChapGen(input = {}) {
  const options = normalizePipelineOptions(input);
  await ensureWorkspace(options.workspaceRoot);
  const refinedChapters = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'chapter-refined-plan');
  const refinedMicro = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'micro-refined-plan');
  const refinedMacro = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'macro-refined-plan');
  const resolutionEntry = (await listLatestStageArtifacts(options.workspaceRoot, 'cnl', 'cnl-resolution')).length;

  if (refinedChapters.length === 0 || refinedMicro.length === 0 || refinedMacro.length === 0) {
    throw new Error(`CNLEnh successor artifacts are required before drafting. Run "scripta cnlenh" first.`);
  }

  if (resolutionEntry === 0) {
    throw new Error('Placeholder resolution artifact is missing. Draft generation refuses to continue without placeholder gating.');
  }

  const macroText = buildMacroEcho(refinedMacro);
  const produced = [];
  const consumed = [
    ...refinedChapters.map((entry) => entry.artifact.relativePath),
    ...refinedMicro.map((entry) => entry.artifact.relativePath),
    ...refinedMacro.map((entry) => entry.artifact.relativePath)
  ];

  for (const chapterEntry of refinedChapters) {
    const chapterId = chapterEntry.artifact.baseName;
    const chapterBlock = chapterEntry.blocks.find((block) => block.identifier === chapterId);
    const microEntry = refinedMicro.find((entry) => entry.artifact.baseName === chapterId);

    if (!chapterBlock || !microEntry) {
      throw new Error(`Missing refined chapter or micro plan for ${chapterId}.`);
    }

    const chapterObject = blockToObject(chapterBlock);
    const referenceReplacements = buildReferenceReplacements([
      ...refinedMacro.flatMap((entry) => entry.blocks),
      ...chapterEntry.blocks,
      ...microEntry.blocks
    ]);
    const draftText = buildDraftText({
      chapterId,
      chapterObject,
      microBlocks: microEntry.blocks,
      macroText,
      macroBlocks: refinedMacro.flatMap((entry) => entry.blocks),
      profileLabel: options.profile.label,
      profileId: options.baselineProfile,
      referenceReplacements
    });
    const draftArtifact = await writeDraftArtifact(options, chapterId, 'draft', draftText);
    produced.push(draftArtifact);
  }

  await registerStageRun({
    workspaceRoot: options.workspaceRoot,
    stage: 'drafts',
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
    artifacts: produced
  };
}

function buildDraftText({ chapterId, chapterObject, microBlocks, macroText, macroBlocks, profileLabel, profileId, referenceReplacements }) {
  const resolveText = (value) => replaceReferences(String(value ?? ''), referenceReplacements);
  const resolvedChapterObject = resolveObjectTexts(chapterObject, resolveText);
  const sceneBlocks = microBlocks.filter((block) => block.identifier.startsWith('scene-') && block.verb === 'define');
  const dialogueTurnBlocks = microBlocks.filter((block) => block.identifier.startsWith('dialogue-turn-') && block.verb === 'line');
  const suspenseBlock = microBlocks.find((block) => block.identifier.startsWith('suspense-') && block.verb === 'build');
  const locationBlock = microBlocks.find((block) => block.identifier.startsWith('location-') && block.verb === 'define');
  const rulePressureBlock = microBlocks.find((block) => block.identifier.startsWith('rule-pressure-') && block.verb === 'apply');
  const protagonistArcBlock = microBlocks.find((block) => block.identifier.startsWith('arc-') && block.identifier.endsWith('-protagonist') && block.verb === 'map');
  const relationshipArcBlock = microBlocks.find((block) => block.identifier.startsWith('arc-') && block.identifier.endsWith('-relationship') && block.verb === 'map');
  const protagonist = collectSceneParticipants(sceneBlocks, resolveText)[0] ?? 'the protagonist';
  const counterpart = collectSceneParticipants(sceneBlocks, resolveText)[1] ?? 'the counterpart';
  const chapterNumber = chapterId.split('-').at(-1);
  const characterLedger = buildCharacterLedger(macroBlocks, resolveText);
  const chapterPackage = {
    chapterId,
    chapterNumber,
    profileId,
    profileLabel,
    chapterRole: resolvedChapterObject['chapter-role'] ?? 'bridge',
    protagonist,
    counterpart,
    inputState: readableValue(resolvedChapterObject['input-state']),
    outputState: readableValue(resolvedChapterObject['output-state']),
    thematicFocus: readableValue(resolvedChapterObject['thematic-focus']),
    chapterQuestion: readableValue(resolvedChapterObject['chapter-question']),
    answerShift: readableValue(resolvedChapterObject['answer-shift']),
    macroEcho: sentenceCase(firstSentence(macroText)),
    suspense: readableValue(resolveText(getFieldValue(suspenseBlock, 'uncertainty') ?? '')),
    sensoryAnchor: readableValue(resolveText(getFieldValue(locationBlock, 'sensory-anchor') ?? '')),
    socialSignal: readableValue(resolveText(getFieldValue(locationBlock, 'social-signal') ?? '')),
    symbolicCharge: readableValue(resolveText(getFieldValue(locationBlock, 'symbolic-charge') ?? '')),
    conflictUse: readableValue(resolveText(getFieldValue(locationBlock, 'conflict-use') ?? '')),
    visibleSymptom: readableValue(resolveText(getFieldValue(rulePressureBlock, 'visible-symptom') ?? '')),
    actionLimitation: readableValue(resolveText(getFieldValue(rulePressureBlock, 'action-limitation') ?? '')),
    protagonistBelief: readableValue(resolveText(getFieldValue(protagonistArcBlock, 'entry-belief') ?? '')),
    protagonistExitBelief: readableValue(resolveText(getFieldValue(protagonistArcBlock, 'exit-belief') ?? '')),
    relationshipEntry: readableValue(resolveText(getFieldValue(relationshipArcBlock, 'entry-dynamic') ?? '')),
    relationshipExit: readableValue(resolveText(getFieldValue(relationshipArcBlock, 'exit-dynamic') ?? '')),
    scenes: []
  };

  chapterPackage.scenes = sceneBlocks.map((sceneBlock, index) => {
    const scene = resolveObjectTexts(blockToObject(sceneBlock), resolveText);
    const participants = splitCsv(scene.participants);
    const previousScene = index > 0 ? chapterPackage.scenes[index - 1] : null;
    const actionBlock = microBlocks.find((block) => block.identifier.startsWith('action-') && normalizeReferenceValue(getFieldValue(block, 'scene')) === sceneBlock.identifier);
    const conflictBlock = microBlocks.find((block) => block.identifier.startsWith('conflict-') && normalizeReferenceValue(getFieldValue(block, 'scope')) === sceneBlock.identifier);
    const eventBlock = microBlocks.find((block) => block.identifier.startsWith('event-') && normalizeReferenceValue(getFieldValue(block, 'scope')) === sceneBlock.identifier);
    const action = resolveObjectTexts(blockToObject(actionBlock ?? emptyBlock()), resolveText);
    const conflict = resolveObjectTexts(blockToObject(conflictBlock ?? emptyBlock()), resolveText);
    const event = resolveObjectTexts(blockToObject(eventBlock ?? emptyBlock()), resolveText);
    const supportFocus = scene['support-focus'];
    const focusCharacter = participants[0] ?? protagonist;
    const pressureFigure = participants.find((name) => characterLedger[name]?.roleGroup === 'pressure') ?? participants[2] ?? '';
    const supportCharacter = participants.find((name) => name === supportFocus) ?? participants[1] ?? participants.find((name) => name !== focusCharacter && name !== pressureFigure) ?? '';
    const dialogueTurns = dialogueTurnBlocks
      .filter((block) => normalizeReferenceValue(getFieldValue(block, 'scene')) === sceneBlock.identifier)
      .map((block, turnIndex) => buildDialogueTurn({
        turn: resolveObjectTexts(blockToObject(block), resolveText),
        turnIndex,
        focusCharacter,
        supportCharacter,
        pressureFigure,
        scene,
        action,
        conflict,
        event,
        characterLedger
      }));

    return {
      sceneId: sceneBlock.identifier,
      index,
      location: readableValue(scene['time-space']),
      anchorObject: readableValue(scene['anchor-object']),
      supportFocus: readableValue(supportFocus),
      participants,
      focusCharacter,
      supportCharacter,
      pressureFigure,
      carriedPressure: readableValue(previousScene?.stateChange ?? resolvedChapterObject['input-state']),
      introduction: readableValue(scene.introduction),
      development: readableValue(scene.development),
      conflict: readableValue(scene.conflict),
      resolution: readableValue(scene.resolution),
      exit: readableValue(scene.exit),
      stateChange: readableValue(scene['state-change']),
      goal: readableValue(action.goal),
      obstacle: readableValue(action.obstacle),
      result: readableValue(action.result),
      stakes: readableValue(conflict.stakes),
      escalation: readableValue(conflict.escalation),
      trigger: readableValue(event.trigger),
      impact: readableValue(event.impact),
      followThrough: readableValue(event['follow-through']),
      dialogueTurns
    };
  });

  const paragraphs = [
    buildDraftOpeningParagraph(chapterPackage),
    ...chapterPackage.scenes.flatMap((scene, index) => renderDraftSceneParagraphs({
      chapterPackage,
      scene,
      index,
      sceneCount: chapterPackage.scenes.length
    })),
    buildDraftClosingParagraph(chapterPackage)
  ].filter(Boolean).map((paragraph) => cleanDraftParagraph(paragraph));

  const payload = {
    version: 1,
    chapterId,
    chapterNumber,
    profileId,
    protagonist,
    counterpart,
    chapterRole: chapterPackage.chapterRole,
    scenes: chapterPackage.scenes,
    opening: {
      inputState: chapterPackage.inputState,
      chapterQuestion: chapterPackage.chapterQuestion,
      sensoryAnchor: chapterPackage.sensoryAnchor,
      socialSignal: chapterPackage.socialSignal
    },
    closing: {
      outputState: chapterPackage.outputState,
      answerShift: chapterPackage.answerShift,
      macroEcho: chapterPackage.macroEcho
    }
  };

  return [
    `# Chapter ${chapterNumber}`,
    '',
    ...paragraphs.flatMap((paragraph) => [paragraph, '']),
    '<!-- scripta-draft-data',
    JSON.stringify(payload, null, 2),
    '-->'
  ].join('\n').trimEnd() + '\n';
}

function buildDraftOpeningParagraph(chapterPackage) {
  const firstScene = chapterPackage.scenes[0];
  if (!firstScene) {
    return '';
  }

  return joinDraftSentences([
    `${chapterPackage.protagonist} steps into ${lowerFirst(firstScene.location || 'the place where the pressure has been waiting')} carrying ${lowerFirst(chapterPackage.inputState || 'unfinished pressure')}`,
    chapterPackage.sensoryAnchor ? `${chapterPackage.sensoryAnchor} hangs over the room before anyone speaks` : '',
    chapterPackage.socialSignal ? `${chapterPackage.socialSignal} keeps trying to pass for order` : '',
    firstScene.supportCharacter ? `${firstScene.supportCharacter} reads the first disturbance faster than the rest of the room` : '',
    chapterPackage.chapterQuestion ? `${chapterPackage.chapterQuestion} is no longer theoretical once the first exchange begins to tilt` : ''
  ]);
}

function renderDraftSceneParagraphs({ chapterPackage, scene, index, sceneCount }) {
  return [
    buildDraftSceneActionParagraph({ chapterPackage, scene, index }),
    buildDraftScenePressureParagraph({ chapterPackage, scene, index }),
    buildDraftDialogueParagraph(scene),
    buildDraftSceneAftermathParagraph({ chapterPackage, scene, index, sceneCount })
  ].filter(Boolean);
}

function buildDraftSceneActionParagraph({ chapterPackage, scene, index }) {
  const openers = [
    `After ${lowerFirst(scene.carriedPressure || chapterPackage.inputState || 'the last compromise')}, ${scene.focusCharacter} moves first`,
    `At ${lowerFirst(scene.location || 'the edge of the scene')}, ${scene.focusCharacter} has no room left for delay`,
    `${scene.focusCharacter} reaches for ${lowerFirst(scene.anchorObject || 'the one thing still carrying proof')} before the room can decide who is allowed to touch it`,
    `What begins in ${lowerFirst(scene.location || 'that room')} stops looking procedural the moment ${lowerFirst(scene.introduction || 'the first instability arrives')}`
  ];

  return joinDraftSentences([
    openers[index % openers.length],
    scene.introduction,
    scene.development,
    scene.goal ? `${scene.focusCharacter} wants to ${lowerFirst(scene.goal)}` : '',
    scene.obstacle ? `but ${lowerFirst(scene.obstacle)} keeps folding the scene back toward danger` : ''
  ]);
}

function buildDraftScenePressureParagraph({ chapterPackage, scene, index }) {
  const bridge = index === 0
    ? chapterPackage.actionLimitation
    : scene.trigger || scene.escalation;

  return joinDraftSentences([
    scene.conflict,
    bridge ? `${sentenceCase(bridge)} turns hesitation into a deadline` : '',
    scene.stakes ? `${scene.stakes} stop sounding abstract once ${lowerFirst(scene.focusCharacter)} realizes who will be blamed first` : '',
    chapterPackage.visibleSymptom ? `${chapterPackage.visibleSymptom} stays visible in every small reaction around them` : ''
  ]);
}

function buildDraftDialogueParagraph(scene) {
  if (scene.dialogueTurns.length === 0) {
    return '';
  }

  return scene.dialogueTurns.map((turn, index) => renderDialogueSentence(turn, index)).join(' ');
}

function buildDraftSceneAftermathParagraph({ chapterPackage, scene, index, sceneCount }) {
  const exitLead = index === sceneCount - 1
    ? `${scene.focusCharacter} leaves ${lowerFirst(scene.location || 'the scene')} without the shelter they had at the start`
    : `${scene.stateChange || scene.result || 'The scene shifts the balance'} and the next movement starts before anyone can make it harmless again`;

  return joinDraftSentences([
    scene.trigger ? `${scene.trigger} lands with more force than the room can absorb politely` : '',
    scene.impact,
    scene.resolution,
    exitLead,
    scene.exit
  ]);
}

function buildDraftClosingParagraph(chapterPackage) {
  const lastScene = chapterPackage.scenes.at(-1);
  return joinDraftSentences([
    lastScene ? `${chapterPackage.protagonist} carries ${lowerFirst(chapterPackage.outputState || lastScene.stateChange || 'the changed balance')} out of ${lowerFirst(lastScene.location || 'the final room')}` : '',
    chapterPackage.answerShift ? chapterPackage.answerShift : '',
    chapterPackage.relationshipExit && chapterPackage.counterpart ? `Between ${chapterPackage.protagonist} and ${chapterPackage.counterpart}, the bond now looks closer to ${lowerFirst(chapterPackage.relationshipExit)}` : '',
    chapterPackage.protagonistExitBelief ? `${chapterPackage.protagonistExitBelief} is no longer something ${chapterPackage.protagonist} can postpone` : '',
    chapterPackage.macroEcho ? chapterPackage.macroEcho : ''
  ]);
}

function buildCharacterLedger(macroBlocks, resolveText) {
  return Object.fromEntries(
    macroBlocks
      .filter((block) => block.identifier.startsWith('character-') && block.verb === 'define')
      .map((block) => {
        const character = resolveObjectTexts(blockToObject(block), resolveText);
        return [
          character.name,
          {
            name: character.name,
            archetype: character.archetype,
            role: character.role,
            desire: sentenceCase(character.desire),
            fear: sentenceCase(character.fear),
            lie: sentenceCase(character.lie),
            truth: sentenceCase(character.truth),
            contradictions: sentenceCase(character.contradictions),
            roleGroup: roleGroupForCharacter(character)
          }
        ];
      })
  );
}

function roleGroupForCharacter(character) {
  if (character.role === 'protagonist') {
    return 'protagonist';
  }

  if (['witness', 'counterpart'].includes(character.role)) {
    return 'counterpart';
  }

  if (['antagonist', 'pressure'].includes(character.role)) {
    return 'pressure';
  }

  return 'support';
}

function buildDialogueTurn({ turn, turnIndex, focusCharacter, supportCharacter, pressureFigure, scene, action, conflict, event, characterLedger }) {
  const speaker = turn.speaker || (turnIndex % 2 === 0 ? focusCharacter : supportCharacter || pressureFigure || focusCharacter);
  const speakerProfile = characterLedger[speaker] ?? {
    name: speaker,
    roleGroup: speaker === pressureFigure ? 'pressure' : speaker === focusCharacter ? 'protagonist' : 'support',
    fear: '',
    truth: '',
    lie: ''
  };
  const line = sentenceCase(resolveDialogueClaim({
    intent: turn.intent,
    rawHint: turn['line-hint'],
    speakerProfile,
    focusCharacter,
    supportCharacter,
    pressureFigure,
    scene,
    action,
    conflict,
    event
  }));
  const reaction = normalizeReaction(turn['reaction-beat']);

  return {
    speaker,
    verb: dialogueVerb(turn.intent, speakerProfile.roleGroup, turnIndex),
    line,
    reaction
  };
}

function resolveDialogueClaim({ intent, rawHint, speakerProfile, focusCharacter, supportCharacter, pressureFigure, scene, action, conflict, event }) {
  const cleanHint = normalizeDialogueHint(rawHint);
  const primaryClaim = cleanHint
    || firstNonEmpty(event.trigger, action.goal, conflict.stakes, scene.stateChange, scene.conflict, event.impact)
    || 'the cost is no longer containable';

  switch (intent) {
    case 'probe':
      return speakerProfile.roleGroup === 'pressure'
        ? `Tell me why ${lowerFirst(primaryClaim)} should matter more than orbital order`
        : `If ${lowerFirst(primaryClaim)}, who decided the station was allowed to forget it`;
    case 'commit':
      return speakerProfile.roleGroup === 'protagonist'
        ? `Then we keep ${lowerFirst(firstNonEmpty(action.goal, scene.stateChange, primaryClaim))} alive long enough to make it count`
        : `Then I stay with ${lowerFirst(firstNonEmpty(scene.stateChange, primaryClaim))} until someone else has to answer for it`;
    case 'warn':
      return `If ${lowerFirst(firstNonEmpty(action.obstacle, event.trigger, primaryClaim))}, the room will close around us before anyone else sees the truth`;
    case 'challenge':
      return speakerProfile.roleGroup === 'pressure'
        ? `${sentenceCase(firstNonEmpty(speakerProfile.lie, 'stability survives because someone keeps the system legible'))}, and you are turning procedure into theater`
        : `Order is not innocence when ${lowerFirst(firstNonEmpty(event.impact, scene.stateChange, primaryClaim))}`;
    case 'name-risk':
      return `Once this reaches open air, ${lowerFirst(firstNonEmpty(conflict.stakes, primaryClaim))}`;
    case 'confess':
      return `I did not expect ${lowerFirst(firstNonEmpty(event.impact, speakerProfile.fear, primaryClaim))} to reach us this quickly`;
    default:
      return speakerProfile.roleGroup === 'counterpart'
        ? `${sentenceCase(primaryClaim)}, and the room knows it even if nobody wants to say so`
        : `${sentenceCase(primaryClaim)}`;
  }
}

function dialogueVerb(intent, roleGroup, turnIndex) {
  const byIntent = {
    probe: ['asks', 'presses'],
    commit: ['says', 'insists'],
    warn: ['warns', 'murmurs'],
    challenge: roleGroup === 'pressure' ? ['says', 'cuts in'] : ['counters', 'fires back'],
    'name-risk': ['adds', 'says'],
    confess: ['admits', 'says']
  };
  const verbs = byIntent[intent] ?? ['says', 'adds'];
  return verbs[turnIndex % verbs.length];
}

function renderDialogueSentence(turn, index) {
  const line = stripTerminalPunctuation(turn.line);
  if (index % 2 === 0) {
    return `"${line}," ${turn.verb} ${turn.speaker}.${turn.reaction ? ` ${turn.reaction}` : ''}`;
  }

  return `${turn.speaker} ${turn.verb}, "${line}."${turn.reaction ? ` ${turn.reaction}` : ''}`;
}

function normalizeDialogueHint(value) {
  const text = normalizeFragment(value);
  if (!text || /^a hint for the dialogue line$/i.test(text)) {
    return '';
  }

  return text;
}

function firstNonEmpty(...values) {
  return values.find((value) => normalizeFragment(value));
}

function sentenceCase(value) {
  const text = normalizeFragment(value);
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function readableValue(value) {
  const text = normalizeFragment(value);
  return isGenericScaffold(text) ? '' : sentenceCase(text);
}

function clause(value) {
  const text = normalizeFragment(value);
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}

function normalizeReaction(value) {
  const text = normalizeFragment(value);
  if (!text || /^how the other character reacts$/i.test(text)) {
    return '';
  }
  return `${sentenceCase(text)}.`;
}

function normalizeFragment(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.?!]+$/g, '');
}

function isGenericScaffold(value) {
  return /^(how this scene opens|how this scene develops|how this scene resolves|how this scene changes the story state|what the protagonist tries to accomplish|what prevents easy success|what is at stake in this conflict|what triggers this event|the impact of this event|how the world rule limits what characters can do|how the world rule becomes visible to characters|the question this chapter asks)$/i.test(String(value ?? '').trim());
}

function stripTerminalPunctuation(value) {
  return normalizeFragment(value);
}

function lowerFirst(value) {
  const text = normalizeFragment(value);
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}

function joinDraftSentences(parts) {
  return parts
    .filter((value) => normalizeFragment(value))
    .map((value) => `${stripTerminalPunctuation(value)}.`)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanDraftParagraph(value) {
  return String(value ?? '')
    .replace(/\b([A-Z][^.]+?)\. \1\./g, '$1.')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitCsv(value) {
  return resolveCsv(value);
}

function resolveCsv(value) {
  return String(value ?? '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function collectSceneParticipants(sceneBlocks, resolveText) {
  const firstScene = sceneBlocks[0];
  return firstScene
    ? resolveCsv(resolveText(getFieldValue(firstScene, 'participants') ?? ''))
    : [];
}

function firstSentence(value) {
  return String(value ?? '').split('.').map((entry) => entry.trim()).find(Boolean) ?? '';
}

function buildMacroEcho(refinedMacroEntries) {
  const fragments = [];

  for (const entry of refinedMacroEntries) {
    for (const block of entry.blocks.filter((item) => item.verb !== 'refine')) {
      const macro = blockToObject(block);

      if (block.identifier === 'central-idea') {
        fragments.push(macro['story-question'] ?? macro.hook);
      } else if (block.identifier === 'theme') {
        fragments.push(macro['thematic-statement']);
      } else if (block.identifier === 'blueprint') {
        fragments.push(macro.premise, macro.resolution);
      } else if (block.identifier === 'world-rule-primary') {
        fragments.push(macro.rule);
      }
    }
  }

  return fragments.filter(Boolean).join('. ');
}

function resolveObjectTexts(object, resolveText) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, resolveText(value)]));
}

function emptyBlock() {
  return { identifier: 'empty', verb: 'define', fields: [] };
}

async function writeDraftArtifact(options, baseName, label, content) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'drafts',
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
