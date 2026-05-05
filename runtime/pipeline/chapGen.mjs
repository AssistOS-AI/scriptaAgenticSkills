import { blockToObject, getFieldValue, replaceReferences, buildReferenceReplacements, normalizeReferenceValue } from '../core/cnl.mjs';
import { ensureWorkspace, allocateArtifactPath, listLatestStageArtifacts, registerStageRun, writeStructuredMarkdown, writeText } from '../core/workspace.mjs';
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
      profileLabel: options.profile.label,
      profileId: options.baselineProfile,
      referenceReplacements
    });
    const draftArtifact = await writeDraftArtifact(options, chapterId, 'draft', draftText);
    const continuityPacket = buildContinuityPacket(chapterId, chapterObject, microEntry.blocks, referenceReplacements);
    const continuityArtifact = await writeContinuityArtifact(options, chapterId, 'continuity', continuityPacket);
    produced.push(draftArtifact, continuityArtifact);
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

function buildDraftText({ chapterId, chapterObject, microBlocks, macroText, profileLabel, profileId, referenceReplacements }) {
  const resolveText = (value) => replaceReferences(String(value ?? ''), referenceReplacements);
  const resolvedChapterObject = resolveObjectTexts(chapterObject, resolveText);
  const sceneBlocks = microBlocks.filter((block) => block.identifier.startsWith('scene-') && block.verb === 'define');
  const actionBlocks = microBlocks.filter((block) => block.identifier.startsWith('action-') && block.verb === 'place');
  const conflictBlocks = microBlocks.filter((block) => block.identifier.startsWith('conflict-') && block.verb === 'place');
  const eventBlocks = microBlocks.filter((block) => block.identifier.startsWith('event-') && block.verb === 'trigger');
  const dialogueBlocks = microBlocks.filter((block) => block.identifier.startsWith('dialogue-') && block.verb === 'apply');
  const dialogueTurnBlocks = microBlocks.filter((block) => block.identifier.startsWith('dialogue-turn-') && block.verb === 'line');
  const suspenseBlock = microBlocks.find((block) => block.identifier.startsWith('suspense-') && block.verb === 'build');
  const sequenceBlock = microBlocks.find((block) => block.identifier.startsWith('sequence-') && block.verb === 'define');
  const descriptionBlock = microBlocks.find((block) => block.identifier.startsWith('description-') && block.verb === 'apply');
  const monologueBlock = microBlocks.find((block) => block.identifier.startsWith('interior-monologue-') && block.verb === 'apply');
  const locationBlock = microBlocks.find((block) => block.identifier.startsWith('location-') && block.verb === 'define');
  const rulePressureBlock = microBlocks.find((block) => block.identifier.startsWith('rule-pressure-') && block.verb === 'apply');
  const protagonistArcBlock = microBlocks.find((block) => block.identifier.startsWith('arc-') && block.identifier.endsWith('-protagonist') && block.verb === 'map');
  const relationshipArcBlock = microBlocks.find((block) => block.identifier.startsWith('arc-') && block.identifier.endsWith('-relationship') && block.verb === 'map');
  const pauseBlock = microBlocks.find((block) => block.identifier.startsWith('pause-') && block.verb === 'hold');
  const accelerationBlock = microBlocks.find((block) => block.identifier.startsWith('acceleration-') && block.verb === 'burst');
  const alternationBlock = microBlocks.find((block) => block.identifier.startsWith('alternation-') && block.verb === 'arrange');
  const protagonist = collectFirstNamedCharacter(microBlocks, resolveText) ?? 'the protagonist';
  const counterpart = collectSecondNamedCharacter(microBlocks, resolveText) ?? 'the counterpart';
  const pressureFigure = collectPressureCharacter(microBlocks, resolveText) ?? 'the opposing force';
  const chapterRole = resolvedChapterObject['chapter-role'] ?? 'bridge';
  const emotionalPair = emotionalCue(profileId, chapterRole);
  const chapterTitle = `# ${chapterId.replace(/-/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase())}`;
  const leadScene = sceneBlocks[0];
  const openingParagraph = [
    `${protagonist} enters ${leadScene ? resolveText(getFieldValue(leadScene, 'time-space')) : 'the scene'} while ${clause(resolvedChapterObject['input-state'])}.`,
    `In this ${profileLabel.toLowerCase()} chapter, ${clause(resolvedChapterObject.purpose)}, so choices around ${clause(resolvedChapterObject['thematic-focus'])} carry ${emotionalPair[0]} and ${emotionalPair[1]}.`,
    `${counterpart} keeps searching for a path toward relief, while ${pressureFigure} works to keep the conflict inside a safer official story.`,
    resolvedChapterObject['chapter-question'] ? `The central question here is ${clause(resolvedChapterObject['chapter-question'])}.` : '',
    sequenceBlock ? `The conflict thread is ${clause(resolveText(getFieldValue(sequenceBlock, 'conflict-line')))}.` : '',
    locationBlock ? `${locationFlavor(profileId)} is anchored by ${clause(resolveText(getFieldValue(locationBlock, 'sensory-anchor')))} and keeps ${clause(resolveText(getFieldValue(locationBlock, 'symbolic-charge') ?? 'the symbolic pressure'))} in view.` : '',
    rulePressureBlock ? `The governing constraint is still active: ${clause(resolveText(getFieldValue(rulePressureBlock, 'action-limitation')))}.` : '',
    protagonistArcBlock ? `At the start, ${protagonist} believes ${clause(resolveText(getFieldValue(protagonistArcBlock, 'entry-belief') ?? 'control is still possible'))}.` : '',
    alternationBlock ? `Its rhythm leans on ${clause(resolveText(getFieldValue(alternationBlock, 'block-order')))}.` : ''
  ].filter(Boolean).join(' ');
  const sceneParagraphs = sceneBlocks.flatMap((sceneBlock, index) => {
    const scene = resolveObjectTexts(blockToObject(sceneBlock), resolveText);
    const action = actionBlocks[index] ? resolveObjectTexts(blockToObject(actionBlocks[index]), resolveText) : {};
    const conflict = conflictBlocks[index] ? resolveObjectTexts(blockToObject(conflictBlocks[index]), resolveText) : {};
    const event = eventBlocks[index] ? resolveObjectTexts(blockToObject(eventBlocks[index]), resolveText) : {};
    const dialogue = dialogueBlocks[index] ? resolveObjectTexts(blockToObject(dialogueBlocks[index]), resolveText) : {};
    const turnBlocks = dialogueTurnBlocks
      .filter((block) => normalizeReferenceValue(getFieldValue(block, 'scene')) === sceneBlock.identifier)
      .map((block) => resolveObjectTexts(blockToObject(block), resolveText));
    const lead = sceneLead(profileId, chapterRole, index);
    const dialogueHint = dialogue.speakers
      ? `${dialogueFrame(profileId, chapterRole)} ${dialogue.speakers} keep circling ${clause(dialogue.subtext ?? 'the unsaid truth under the conflict')}.`
      : '';
    const eventHint = event.trigger
      ? `When ${clause(event.trigger)}, the local pressure tips from ${emotionalPair[0]} toward ${emotionalPair[1]}.`
      : '';
    const suspenseHint = suspenseBlock?.fields?.length
      ? `The unresolved line remains active through ${clause(resolveText(getFieldValue(suspenseBlock, 'uncertainty') ?? 'uncertainty'))}, which keeps fear and anticipation braided together.`
      : '';
    const descriptionHint = descriptionBlock
      ? `${locationFlavor(profileId)} mirrors ${clause(resolveText(getFieldValue(descriptionBlock, 'focus') ?? 'the local pressure'))}.`
      : '';
    const dialogueParagraph = turnBlocks.length > 0
      ? `${dialogueHint} ${renderDraftDialogue(turnBlocks, protagonist, counterpart)}`
      : '';
    const worldPressureParagraph = [
      locationBlock ? `At the level of place, ${clause(resolveText(getFieldValue(locationBlock, 'social-signal') ?? 'the setting shapes behavior'))}; ${clause(resolveText(getFieldValue(locationBlock, 'conflict-use') ?? 'the location supports conflict'))}.` : '',
      rulePressureBlock ? `The chapter rule keeps shaping possibility: ${clause(resolveText(getFieldValue(rulePressureBlock, 'visible-symptom') ?? 'the system leaves a visible symptom'))}, and ${clause(resolveText(getFieldValue(rulePressureBlock, 'conflict-output') ?? 'conflict intensifies through the rule'))}.` : ''
    ].filter(Boolean).join(' ');
    const pacingParagraph = [
      index === 0 && pauseBlock ? `The first deceleration is deliberate: ${clause(resolveText(getFieldValue(pauseBlock, 'focus') ?? 'the chapter pauses to read consequence clearly'))}.` : '',
      index === sceneBlocks.length - 1 && accelerationBlock ? `Then the pace compresses: ${clause(resolveText(getFieldValue(accelerationBlock, 'trigger') ?? 'the chapter crosses an irreversible threshold'))}.` : ''
    ].filter(Boolean).join(' ');

    const movementParagraph = [
      `${lead} ${sentenceCase(scene.introduction)}.`,
      `${protagonist} tries to ${clause(action.goal ?? 'change the local balance')}, but ${clause(action.obstacle ?? 'the pressure adapts faster than expected')}.`,
      `${sentenceCase(scene.development)}.`,
      `${sentenceCase(scene.conflict)}.`,
      conflict.stakes ? `${pressureFigure} senses that ${clause(conflict.stakes)} now hang inside the same exchange.` : '',
      descriptionHint,
      eventHint,
      scene.resolution ? `${sentenceCase(scene.resolution)}.` : '',
      suspenseHint,
      `The immediate result is ${clause(scene['state-change'])}.`
    ].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();

    const monologueParagraph = monologueBlock && index === sceneBlocks.length - 1
      ? `${protagonist} feels ${clause(resolveText(getFieldValue(monologueBlock, 'trigger') ?? 'the latest cost rearranging every earlier certainty'))}, a mix of ${emotionalPair[0]} and ${emotionalPair[1]} that will not settle into easy relief. ${protagonistArcBlock ? `The chapter therefore pushes the inner line from ${clause(resolveText(getFieldValue(protagonistArcBlock, 'entry-belief') ?? 'old certainty'))} toward ${clause(resolveText(getFieldValue(protagonistArcBlock, 'exit-belief') ?? 'a harsher insight'))}.` : ''}` : '';

    return [movementParagraph, dialogueParagraph, worldPressureParagraph, pacingParagraph, monologueParagraph].filter(Boolean);
  });
  const closingParagraph = [
    `By the end of ${chapterId}, ${clause(resolvedChapterObject['output-state'])}.`,
    `The chapter keeps faith with ${clause(resolvedChapterObject['thematic-focus'])} while moving toward ${clause(resolvedChapterObject['closing-mode'])}, and it refuses relief without visible cost.`,
    resolvedChapterObject['answer-shift'] ? `Its answer shift is clear: ${clause(resolvedChapterObject['answer-shift'])}.` : '',
    relationshipArcBlock ? `Between ${protagonist} and ${counterpart}, the relational line moves from ${clause(resolveText(getFieldValue(relationshipArcBlock, 'entry-dynamic') ?? 'fragile alignment'))} toward ${clause(resolveText(getFieldValue(relationshipArcBlock, 'exit-dynamic') ?? 'a more exposed bond'))}.` : '',
    `The closing pressure is therefore both ${emotionalPair[0]} and ${emotionalPair[1]}, which keeps the next chapter morally and emotionally legible.`,
    `Echoes from the macro promise remain visible: ${macroText.split('.').find(Boolean)?.trim() ?? macroText.trim()}.`
  ].join(' ');

  return [chapterTitle, openingParagraph, ...sceneParagraphs, closingParagraph].join('\n\n');
}

function sceneLead(profileId, chapterRole, index) {
  const leadByProfile = {
    drama: ['The room tightens before anyone can pretend calm is enough.', 'The silence breaks in smaller, sharper motions.', 'The private wound becomes public at last.'],
    'detective-police': ['The case narrows as procedure loses its protective distance.', 'A cleaner fact enters the frame and makes every prior statement unstable.', 'What looked manageable starts reading like a system instead of an incident.'],
    'science-fiction': ['The system still appears orderly, but one unstable signal disturbs that surface.', 'Human judgment and machine procedure begin to diverge in plain view.', 'The station absorbs the disturbance, then returns it with greater force.'],
    fantasy: ['The air of the place carries both omen and debt.', 'Old vows answer before anyone speaks them aloud.', 'Wonder and threat arrive as the same movement.'],
    'romance-relational': ['Routine offers cover, but not safety.', 'Practical collaboration starts exposing what private caution cannot hide.', 'Tenderness appears in the same breath as fresh defensiveness.']
  };
  const roleTail = {
    setup: 'This is still the first readable crack in the promise of the chapter.',
    investigation: 'The movement now favors evidence over comfort.',
    revelation: 'A partial truth is about to force a harder one into view.',
    reversal: 'The emotional balance is about to flip.',
    culmination: 'No one can leave this moment unchanged.',
    escalation: 'Every measured step raises the cost.',
    aftermath: 'Consequences arrive before explanation.',
    bridge: 'The chapter crosses a threshold without releasing pressure.'
  };
  const leads = leadByProfile[profileId] ?? leadByProfile.drama;
  return `${leads[index % leads.length]} ${roleTail[chapterRole] ?? roleTail.bridge}`;
}

function dialogueFrame(profileId, chapterRole) {
  const byProfile = {
    drama: 'Their speech stays careful, but grief keeps roughening the edges of each sentence.',
    'detective-police': 'Their dialogue sounds procedural, yet every answer carries tension and concealed fear.',
    'science-fiction': 'The exchange mixes technical precision with human shock.',
    fantasy: 'Their words move like ritual and argument at once.',
    'romance-relational': 'They keep the talk practical even while tender hesitation keeps undoing the surface.'
  };
  const roleTail = chapterRole === 'revelation' ? 'No line remains neutral now.' : 'Subtext matters as much as the explicit claim.';
  return `${byProfile[profileId] ?? byProfile.drama} ${roleTail}`;
}

function locationFlavor(profileId) {
  const map = {
    drama: 'The setting',
    'detective-police': 'The procedural environment',
    'science-fiction': 'The engineered environment',
    fantasy: 'The charged landscape',
    'romance-relational': 'The working space'
  };
  return map[profileId] ?? 'The setting';
}

function emotionalCue(profileId, chapterRole) {
  const base = {
    drama: ['grief', 'tension'],
    'detective-police': ['tension', 'shock'],
    'science-fiction': ['wonder', 'fear'],
    fantasy: ['wonder', 'grief'],
    'romance-relational': ['tender', 'tension']
  };
  const byRole = {
    revelation: ['shock', 'relief'],
    culmination: ['fear', 'relief'],
    aftermath: ['grief', 'relief']
  };
  return byRole[chapterRole] ?? base[profileId] ?? ['tension', 'relief'];
}

function sentenceCase(value) {
  const text = normalizeFragment(value);
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function renderDraftDialogue(turnBlocks, protagonist, counterpart) {
  const dialogueVerbs = ['says', 'replies', 'adds'];
  const lines = turnBlocks.map((turn, index) => {
    const speaker = turn.speaker || protagonist;
    const lineHint = sentenceCase(turn['line-hint'] ?? 'Say what the scene cannot safely contain.');
    const reaction = normalizeReaction(turn['reaction-beat']);
    const verb = dialogueVerbs[index % dialogueVerbs.length];
    return `"${lineHint}" ${speaker} ${verb}.${reaction ? ` ${reaction}` : ''}`;
  });

  return lines.join(' ');
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
  return sentenceCase(text) + '.';
}

function normalizeFragment(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.?!]+$/g, '');
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

function buildContinuityPacket(chapterId, chapterObject, microBlocks, referenceReplacements) {
  const resolveText = (value) => replaceReferences(String(value ?? ''), referenceReplacements);
  return {
    chapterId,
    entryState: resolveText(chapterObject['input-state']),
    exitState: resolveText(chapterObject['output-state']),
    unresolvedObligations: [resolveText(chapterObject['continuity-obligations'])],
    introducedEntities: extractParticipants(microBlocks, resolveText),
    changedRelationships: [resolveText(chapterObject['thematic-focus'])],
    continuityWarnings: []
  };
}

function extractParticipants(blocks, resolveText = (value) => value) {
  const scene = blocks.find((block) => block.identifier.startsWith('scene-') && block.verb === 'define');
  if (!scene) {
    return [];
  }

  return resolveText(getFieldValue(scene, 'participants') ?? '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

function collectFirstNamedCharacter(blocks, resolveText) {
  const participants = extractParticipants(blocks, resolveText);
  return participants[0];
}

function collectSecondNamedCharacter(blocks, resolveText) {
  const participants = extractParticipants(blocks, resolveText);
  return participants[1];
}

function collectPressureCharacter(blocks, resolveText) {
  const participants = extractParticipants(blocks, resolveText);
  return participants[2];
}

function resolveObjectTexts(object, resolveText) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, resolveText(value)]));
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

async function writeContinuityArtifact(options, baseName, label, value) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'drafts',
    baseName,
    label
  });

  await writeStructuredMarkdown(artifactPath.filePath, {
    title: `${baseName} ${label}`,
    lead: 'Continuity packet for downstream validation and export assembly.',
    sections: [
      {
        heading: 'State flow',
        lines: [
          `- entryState: ${value.entryState}`,
          `- exitState: ${value.exitState}`
        ]
      },
      {
        heading: 'Continuity obligations',
        lines: (value.unresolvedObligations ?? []).map((entry) => `- ${entry}`)
      },
      {
        heading: 'Introduced entities',
        lines: (value.introducedEntities ?? []).map((entry) => `- ${entry}`)
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
