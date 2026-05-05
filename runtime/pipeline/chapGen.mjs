import { blockToObject, getFieldValue } from '../core/cnl.mjs';
import { ensureWorkspace, allocateArtifactPath, registerStageRun, writeJson, writeText } from '../core/workspace.mjs';
import { normalizePipelineOptions } from './options.mjs';
import { readLatestBlocksByBase } from './loaders.mjs';

export async function runChapGen(input = {}) {
  const options = normalizePipelineOptions(input);
  await ensureWorkspace(options.workspaceRoot);
  const refinedChapters = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'chapter-refined-plan');
  const refinedMicro = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'micro-refined-plan');
  const refinedMacro = await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'macro-refined-plan');
  const resolutionEntry = (await readLatestBlocksByBase(options.workspaceRoot, 'cnl', 'cnl-resolution')).length;

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
    const draftText = buildDraftText({
      chapterId,
      chapterObject,
      microBlocks: microEntry.blocks,
      macroText,
      profileLabel: options.profile.label,
      profileId: options.baselineProfile
    });
    const draftArtifact = await writeDraftArtifact(options, chapterId, 'draft', draftText);
    const continuityPacket = buildContinuityPacket(chapterId, chapterObject, microEntry.blocks);
    const continuityArtifact = await writeDraftJsonArtifact(options, chapterId, 'continuity', continuityPacket);
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

function buildDraftText({ chapterId, chapterObject, microBlocks, macroText, profileLabel, profileId }) {
  const sceneBlocks = microBlocks.filter((block) => block.identifier.startsWith('scene-') && block.verb === 'define');
  const actionBlocks = microBlocks.filter((block) => block.identifier.startsWith('action-') && block.verb === 'place');
  const conflictBlocks = microBlocks.filter((block) => block.identifier.startsWith('conflict-') && block.verb === 'place');
  const eventBlocks = microBlocks.filter((block) => block.identifier.startsWith('event-') && block.verb === 'trigger');
  const dialogueBlocks = microBlocks.filter((block) => block.identifier.startsWith('dialogue-') && block.verb === 'apply');
  const suspenseBlock = microBlocks.find((block) => block.identifier.startsWith('suspense-') && block.verb === 'build');
  const sequenceBlock = microBlocks.find((block) => block.identifier.startsWith('sequence-') && block.verb === 'define');
  const descriptionBlock = microBlocks.find((block) => block.identifier.startsWith('description-') && block.verb === 'apply');
  const monologueBlock = microBlocks.find((block) => block.identifier.startsWith('interior-monologue-') && block.verb === 'apply');
  const protagonist = collectFirstNamedCharacter(microBlocks) ?? 'the protagonist';
  const counterpart = collectSecondNamedCharacter(microBlocks) ?? 'the counterpart';
  const pressureFigure = collectPressureCharacter(microBlocks) ?? 'the opposing force';
  const chapterRole = chapterObject['chapter-role'] ?? 'bridge';
  const emotionalPair = emotionalCue(profileId, chapterRole);
  const chapterTitle = `# ${chapterId.replace(/-/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase())}`;
  const leadScene = sceneBlocks[0];
  const openingParagraph = [
    `${protagonist} enters ${leadScene ? getFieldValue(leadScene, 'time-space') : 'the scene'} carrying the unresolved pressure of ${chapterObject['input-state']}.`,
    `This ${profileLabel.toLowerCase()} movement is built to ${chapterObject.purpose.toLowerCase()}, so even small choices around ${chapterObject['thematic-focus'].toLowerCase()} acquire ${emotionalPair[0]} and ${emotionalPair[1]}.`,
    `${counterpart} keeps searching for a path toward relief, while ${pressureFigure} works to keep the conflict inside a safer official story.`,
    sequenceBlock ? `The sequence thread is explicit: ${getFieldValue(sequenceBlock, 'conflict-line')}.` : ''
  ].filter(Boolean).join(' ');
  const sceneParagraphs = sceneBlocks.map((sceneBlock, index) => {
    const scene = blockToObject(sceneBlock);
    const action = actionBlocks[index] ? blockToObject(actionBlocks[index]) : {};
    const conflict = conflictBlocks[index] ? blockToObject(conflictBlocks[index]) : {};
    const event = eventBlocks[index] ? blockToObject(eventBlocks[index]) : {};
    const dialogue = dialogueBlocks[index] ? blockToObject(dialogueBlocks[index]) : {};
    const lead = sceneLead(profileId, chapterRole, index);
    const dialogueHint = dialogue.speakers
      ? `${dialogueFrame(profileId, chapterRole)} ${dialogue.speakers} keep circling ${dialogue.subtext?.toLowerCase() ?? 'the unsaid truth under the conflict'}.`
      : '';
    const eventHint = event.trigger
      ? `When ${event.trigger.toLowerCase()}, the local pressure tips from ${emotionalPair[0]} toward ${emotionalPair[1]}.`
      : '';
    const suspenseHint = suspenseBlock?.fields?.length
      ? `The unresolved line remains active through ${getFieldValue(suspenseBlock, 'uncertainty')?.toLowerCase() ?? 'uncertainty'}, which keeps fear and anticipation braided together.`
      : '';
    const descriptionHint = descriptionBlock
      ? `${locationFlavor(profileId)} mirrors ${getFieldValue(descriptionBlock, 'focus')?.toLowerCase() ?? 'the local pressure'}.`
      : '';

    return [
      `${lead} ${sentenceCase(scene.introduction)}.`,
      `${protagonist} tries to ${action.goal ?? 'change the local balance'}, but ${action.obstacle ?? 'the pressure adapts faster than expected'}.`,
      `${sentenceCase(scene.development)}.`,
      `${sentenceCase(scene.conflict)}.`,
      conflict.stakes ? `${pressureFigure} senses that ${conflict.stakes.toLowerCase()} now hang inside the same exchange.` : '',
      dialogueHint,
      descriptionHint,
      eventHint,
      scene.resolution ? `${sentenceCase(scene.resolution)}.` : '',
      monologueBlock && index === sceneBlocks.length - 1 ? `${protagonist} feels ${getFieldValue(monologueBlock, 'trigger')?.toLowerCase() ?? 'the latest cost rearranging every earlier certainty'}, a mix of ${emotionalPair[0]} and ${emotionalPair[1]} that will not settle into easy relief.` : '',
      suspenseHint,
      `The immediate result is that ${scene['state-change'].toLowerCase()}.`
    ].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
  });
  const closingParagraph = [
    `By the end of ${chapterId}, ${chapterObject['output-state']}.`,
    `The chapter keeps faith with ${chapterObject['thematic-focus']} while moving toward ${chapterObject['closing-mode']}, and it refuses relief without visible cost.`,
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
  const text = String(value ?? '').trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
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

function buildContinuityPacket(chapterId, chapterObject, microBlocks) {
  return {
    chapterId,
    entryState: chapterObject['input-state'],
    exitState: chapterObject['output-state'],
    unresolvedObligations: [chapterObject['continuity-obligations']],
    introducedEntities: extractParticipants(microBlocks),
    changedRelationships: [chapterObject['thematic-focus']],
    continuityWarnings: []
  };
}

function extractParticipants(blocks) {
  const scene = blocks.find((block) => block.identifier.startsWith('scene-') && block.verb === 'define');
  if (!scene) {
    return [];
  }

  return (getFieldValue(scene, 'participants') ?? '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

function collectFirstNamedCharacter(blocks) {
  const participants = extractParticipants(blocks);
  return participants[0];
}

function collectSecondNamedCharacter(blocks) {
  const participants = extractParticipants(blocks);
  return participants[1];
}

function collectPressureCharacter(blocks) {
  const participants = extractParticipants(blocks);
  return participants[2];
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

async function writeDraftJsonArtifact(options, baseName, label, value) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'drafts',
    baseName,
    label,
    extension: '.json'
  });

  await writeJson(artifactPath.filePath, value);
  return {
    baseName,
    label,
    iteration: artifactPath.iteration,
    filePath: artifactPath.filePath,
    relativePath: artifactPath.relativePath
  };
}
