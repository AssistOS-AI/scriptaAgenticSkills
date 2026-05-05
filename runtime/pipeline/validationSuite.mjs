import { allocateArtifactPath, ensureWorkspace, listLatestStageArtifacts, readJson, readText, registerStageRun, writeJson, writeText } from '../core/workspace.mjs';
import { collectPlaceholdersFromText } from '../core/cnl.mjs';
import { countWords, splitParagraphs, uniqueTokenRatio } from '../core/text.mjs';
import { normalizePipelineOptions } from './options.mjs';
import { computeCar, computeCs, computeNqs, clampScore } from './metricsFramework.mjs';

const CLICHES = [
  'heart skipped a beat',
  'cold as ice',
  'dark and stormy night',
  'fate had other plans',
  'everything changed forever'
];

const HARMFUL_MARKERS = ['slur', 'hate campaign'];
const COPYRIGHT_REFERENCE_PASSAGES = [
  'call me ishmael',
  'it was the best of times it was the worst of times',
  'all happy families are alike'
];

export async function runValidationSuite(input = {}) {
  const options = normalizePipelineOptions(input);
  await ensureWorkspace(options.workspaceRoot);

  const draftArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'drafts', 'draft');
  const continuityArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'drafts', 'continuity');
  const chapterPlanArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'chapters', 'symbolic-plan');
  const refinedArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'cnl', 'chapter-refined-plan');
  const refinedMacroArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'cnl', 'macro-refined-plan');
  const refinedMicroArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'cnl', 'micro-refined-plan');
  const placeholderResolutionArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'cnl', 'cnl-resolution');
  const exportArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'exports', 'reader');
  const exportBundleArtifacts = await listLatestStageArtifacts(options.workspaceRoot, 'exports', 'bundle');

  if (draftArtifacts.length === 0) {
    throw new Error(`No draft artifacts were found in ${options.workspaceRoot}. Run "scripta chapgen" first.`);
  }

  const drafts = await Promise.all(draftArtifacts.map(async (artifact) => ({
    artifact,
    content: await readText(artifact.filePath),
    paragraphs: splitParagraphs(await readText(artifact.filePath))
  })));
  const continuityPackets = await Promise.all(continuityArtifacts.map(async (artifact) => ({
    artifact,
    content: await readJson(artifact.filePath, {})
  })));
  const chapterPlans = await Promise.all(chapterPlanArtifacts.map(async (artifact) => ({
    artifact,
    content: await readText(artifact.filePath)
  })));
  const refinedPlans = await Promise.all(refinedArtifacts.map(async (artifact) => ({
    artifact,
    content: await readText(artifact.filePath)
  })));
  const refinedMacro = await Promise.all(refinedMacroArtifacts.map(async (artifact) => ({
    artifact,
    content: await readText(artifact.filePath)
  })));
  const refinedMicro = await Promise.all(refinedMicroArtifacts.map(async (artifact) => ({
    artifact,
    content: await readText(artifact.filePath)
  })));
  const exportEntries = await Promise.all(exportArtifacts.map(async (artifact) => ({
    artifact,
    content: await readText(artifact.filePath)
  })));
  const exportBundle = exportBundleArtifacts.length > 0 ? await readJson(exportBundleArtifacts[0].filePath, null) : null;
  const refinedMacroText = refinedMacro.map((entry) => entry.content).join('\n');

  const issues = [];

  const placeholderHits = drafts.flatMap((draft) => collectPlaceholdersFromText(draft.content).map((placeholder) => ({
    metric: 'PRC',
    chapter: draft.artifact.baseName,
    paragraph: locateParagraph(draft.paragraphs, placeholder.token),
    message: `Unresolved placeholder ${placeholder.token} survived into a draft.`
  })));
  issues.push(...placeholderHits);

  const overlapMatches = drafts.flatMap((draft) => detectOverlap(draft.content));
  issues.push(...overlapMatches.map((match) => ({
    metric: 'TOP',
    chapter: match.chapter,
    paragraph: match.paragraph,
    message: `Reference overlap detected with "${match.phrase}".`
  })));

  const clicheMatches = drafts.flatMap((draft) => detectCliches(draft.content));
  issues.push(...clicheMatches.map((match) => ({
    metric: 'NCS',
    chapter: match.chapter,
    paragraph: match.paragraph,
    message: `Cliche expression detected: "${match.phrase}".`
  })));

  const exportAudit = buildExportAudit({
    options,
    exportEntries,
    exportBundle
  });
  issues.push(...exportAudit.issues);

  const OI = clampScore(65 + uniqueTokenRatio(drafts.map((draft) => draft.content).join(' ')) * 35 - clicheMatches.length * 4);
  const NCS = clampScore(100 - clicheMatches.length * 15);
  const BCI = clampScore(96 - drafts.flatMap((draft) => detectMarkers(draft.content, ['submissive stereotype', 'foreign caricature'])).length * 20);
  const rawDeviation = drafts.flatMap((draft) => detectMarkers(draft.content, HARMFUL_MARKERS)).length * 25;
  const VAD_score = clampScore(100 - rawDeviation);
  const TOP_score = clampScore(100 - overlapMatches.length * 20);
  const placeholderScore = clampScore(100 - placeholderHits.length * 25);
  const SFSG = clampScore(70 + comparePlanCoverage(chapterPlans, drafts, refinedPlans) - placeholderHits.length * 10);
  const CCI = clampScore(74 + compareContinuity(continuityPackets, draftArtifacts.length));
  const CAD_score = clampScore(76 + compareCharacterStability(drafts, refinedMacroText));
  const EAP = clampScore(72 + compareEmotionalArc(drafts));
  const thematicDepth = clampScore(68 + detectThemeDensity(drafts, options.profile.themeTopic));
  const characterComplexity = clampScore(70 + compareCharacterStability(drafts, refinedMacroText));
  const stylisticQuality = clampScore(72 + uniqueTokenRatio(drafts.map((draft) => draft.content).join(' ')) * 25 - placeholderHits.length * 10);
  const emotionalImpact = clampScore(70 + compareEmotionalArc(drafts));
  const interpretiveOpenness = clampScore(options.baselineProfile === 'romance-relational' ? 74 : 82);
  const culturalValue = clampScore(['power-corruption', 'identity-self', 'freedom-security', 'redemption', 'love-connection'].includes(options.profile.themeTopic) ? 78 : 62);
  const CAR = computeCar({ VAD_score, TOP_score, BCI, hardViolation: rawDeviation > 0 });
  const CS = computeCs({ CCI, SFSG, CAD_score, EAP });
  const NQS = computeNqs({ CS, thematicDepth, characterComplexity, stylisticQuality, emotionalImpact, OI, NCS });

  const metrics = {
    OI,
    NCS,
    BCI,
    VAD_score,
    TOP_score,
    PRC: placeholderScore,
    SFSG,
    CCI,
    CAD_score,
    EAP,
    CAR,
    CS,
    NQS
  };
  const literaryIndicators = {
    narrativeCoherence: CS,
    thematicDepth,
    characterComplexity,
    originality: clampScore((OI + NCS) / 2),
    stylisticQuality,
    emotionalImpact,
    interpretiveOpenness,
    culturalValue
  };

  const stageAudit = buildStageAudit({
    options,
    chapterPlans,
    refinedPlans,
    refinedMacro,
    refinedMicro,
    placeholderResolutionArtifacts,
    drafts,
    continuityPackets,
    exportAudit
  });
  const revisionTasks = buildRevisionTasks({
    options,
    metrics,
    issues,
    stageAudit
  });

  const summary = {
    bookId: options.bookId,
    baselineProfile: options.baselineProfile,
    metrics,
    literaryIndicators,
    issues,
    exportAudit: exportAudit.summary,
    stageAudit,
    revisionTasks
  };

  const summaryArtifact = await writeValidationJson(options, 'summary', 'validation', summary);
  const issuesArtifact = await writeValidationJson(options, 'issues', 'validation', issues);
  const stagesArtifact = await writeValidationJson(options, 'stages', 'validation', stageAudit);
  const tasksArtifact = await writeValidationJson(options, 'tasks', 'validation', revisionTasks);
  const reportArtifact = await writeReportText(options, 'summary', 'report', renderReport(summary));
  const stageReportArtifact = await writeReportText(options, 'stages', 'report', renderStageReport(stageAudit));
  const taskReportArtifact = await writeReportText(options, 'tasks', 'report', renderTaskReport(revisionTasks));

  await registerStageRun({
    workspaceRoot: options.workspaceRoot,
    stage: 'validation',
    consumed: [
      ...draftArtifacts.map((artifact) => artifact.relativePath),
      ...continuityArtifacts.map((artifact) => artifact.relativePath),
      ...chapterPlanArtifacts.map((artifact) => artifact.relativePath),
      ...refinedArtifacts.map((artifact) => artifact.relativePath),
      ...refinedMacroArtifacts.map((artifact) => artifact.relativePath),
      ...refinedMicroArtifacts.map((artifact) => artifact.relativePath),
      ...placeholderResolutionArtifacts.map((artifact) => artifact.relativePath),
      ...exportArtifacts.map((artifact) => artifact.relativePath),
      ...exportBundleArtifacts.map((artifact) => artifact.relativePath)
    ],
    produced: [summaryArtifact, issuesArtifact, stagesArtifact, tasksArtifact, reportArtifact, stageReportArtifact, taskReportArtifact],
    context: {
      book: {
        bookId: options.bookId,
        baselineProfile: options.baselineProfile
      }
    }
  });

  return {
    options,
    summary,
    artifacts: [summaryArtifact, issuesArtifact, stagesArtifact, tasksArtifact, reportArtifact, stageReportArtifact, taskReportArtifact]
  };
}

function buildExportAudit({ options, exportEntries, exportBundle }) {
  const issues = [];
  const foundLanguages = exportEntries.map((entry) => entry.artifact.baseName.replace(/^edition-/, ''));
  const missingLanguages = options.targetLanguages.filter((languageCode) => !foundLanguages.includes(languageCode));
  const editions = exportEntries.map((entry) => inspectEdition(entry));

  for (const missingLanguage of missingLanguages) {
    issues.push({
      metric: 'EXPORT',
      chapter: 'exports',
      paragraph: null,
      message: `Missing final HTML export for requested language "${missingLanguage}".`
    });
  }

  for (const edition of editions) {
    for (const failedCheck of edition.failedChecks) {
      issues.push({
        metric: 'EXPORT',
        chapter: `export:${edition.languageCode}`,
        paragraph: null,
        message: failedCheck
      });
    }
  }

  const score = Math.round((editions.reduce((total, edition) => total + edition.score, 0) + (missingLanguages.length === 0 ? 100 : 0)) / Math.max(editions.length + 1, 1));

  return {
    summary: {
      score,
      expectedLanguages: options.targetLanguages,
      foundLanguages,
      missingLanguages,
      editions: editions.map((edition) => ({
        languageCode: edition.languageCode,
        score: edition.score,
        failedChecks: edition.failedChecks
      })),
      bundlePresent: Boolean(exportBundle)
    },
    issues
  };
}

function inspectEdition(entry) {
  const html = entry.content;
  const visibleHtml = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const languageCode = entry.artifact.baseName.replace(/^edition-/, '');
  const checks = [
    check('cover svg', /<svg[\s\S]*aria-label=/.test(html)),
    check('table of contents', /<nav[\s\S]*<ol>/.test(html)),
    check('chapter articles', (html.match(/<article id="/g) ?? []).length > 0),
    check('print stylesheet', /@media print/.test(html)),
    check('embedded metadata', /id="scripta-edition-metadata"/.test(html)),
    check('placeholder residue', !html.includes('{{')),
    check('external css', !/<link\b/i.test(html)),
    check('external images', !/<img\b/i.test(html)),
    check('runtime scripts', !/<script(?![^>]*application\/json)/i.test(html))
  ];

  if (languageCode === 'ro') {
    checks.push(check('romanian front matter', visibleHtml.includes('Cuprins') && visibleHtml.includes('Pagina de titlu')));
    checks.push(check('romanian metadata labels', !visibleHtml.includes('short-story') && !visibleHtml.includes('built-in-renderer') && !visibleHtml.includes('literary-smooth') && !visibleHtml.includes('>default<')));
  }

  if (languageCode === 'en') {
    checks.push(check('english front matter', visibleHtml.includes('Contents') && visibleHtml.includes('Title page')));
  }

  const passedChecks = checks.filter((item) => item.pass).length;
  const score = Math.round((passedChecks / checks.length) * 100);

  return {
    languageCode,
    score,
    failedChecks: checks.filter((item) => !item.pass).map((item) => item.name)
  };
}

function buildStageAudit({
  options,
  chapterPlans,
  refinedPlans,
  refinedMacro,
  refinedMicro,
  placeholderResolutionArtifacts,
  drafts,
  continuityPackets,
  exportAudit
}) {
  const macroBlocks = refinedMacro.map((entry) => entry.content).join('\n');
  const refinedPlaceholders = [
    ...refinedPlans.flatMap((entry) => collectPlaceholdersFromText(entry.content)),
    ...refinedMacro.flatMap((entry) => collectPlaceholdersFromText(entry.content))
  ];

  return [
    stageResult('macro', [
      check('macro successor files exist', refinedMacro.length >= 3),
      check('macro blocks expose central idea, theme, and world rules', macroBlocks.includes('@central-idea') && macroBlocks.includes('@theme') && macroBlocks.includes('@world-rule-primary'))
    ]),
    stageResult('chapters', [
      check('chapter symbolic plans match requested chapter count', chapterPlans.length === options.chapterCount),
      check('chapter refined plans match requested chapter count', refinedPlans.length === options.chapterCount)
    ]),
    stageResult('micro', [
      check('micro refined plans match requested chapter count', refinedMicro.length === options.chapterCount),
      check('micro plans contain scene definitions', refinedMicro.every((entry) => (entry.content.match(/^@scene-/gm) ?? []).length >= 2))
    ]),
    stageResult('cnl', [
      check('placeholder resolution artifact exists', placeholderResolutionArtifacts.length > 0),
      check('refined plans do not retain placeholders', refinedPlaceholders.length === 0)
    ]),
    stageResult('drafts', [
      check('draft count matches requested chapter count', drafts.length === options.chapterCount),
      check('continuity packets match chapter count', continuityPackets.length === options.chapterCount),
      check('drafts are not trivially short', drafts.every((draft) => countWords(draft.content) >= 120))
    ]),
    stageResult('exports', [
      check('all requested language editions exist', exportAudit.summary.missingLanguages.length === 0),
      check('all editions passed structural checks', exportAudit.summary.editions.every((edition) => edition.failedChecks.length === 0))
    ])
  ];
}

function buildRevisionTasks({ options, metrics, issues, stageAudit }) {
  const tasks = [];
  const pushTask = (task) => {
    if (!tasks.find((entry) => entry.title === task.title)) {
      tasks.push({
        id: `task-${String(tasks.length + 1).padStart(3, '0')}`,
        ...task
      });
    }
  };

  for (const stage of stageAudit) {
    for (const checkResult of stage.checks.filter((entry) => !entry.pass)) {
      pushTask({
        priority: stage.name === 'exports' ? 'high' : 'medium',
        stage: stage.name,
        title: `Fix ${stage.name} stage: ${checkResult.name}`,
        action: `Repair the ${stage.name} stage so the failed check "${checkResult.name}" passes for ${options.bookId}.`,
        evidence: checkResult.name
      });
    }
  }

  if (metrics.OI < 80) {
    pushTask({
      priority: 'medium',
      stage: 'micro',
      title: 'Increase lexical novelty',
      action: 'Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.',
      evidence: `OI=${metrics.OI}`
    });
  }

  if (metrics.EAP < 85) {
    pushTask({
      priority: 'medium',
      stage: 'drafts',
      title: 'Sharpen emotional progression',
      action: 'Strengthen chapter-to-chapter emotional contrast so the emotional arc is easier to perceive in the final manuscript.',
      evidence: `EAP=${metrics.EAP}`
    });
  }

  if (metrics.CAD_score < 92) {
    pushTask({
      priority: 'medium',
      stage: 'cnl',
      title: 'Reinforce character continuity',
      action: 'Carry character beliefs, fears, and relationship changes more explicitly from refined plans into drafts and exports.',
      evidence: `CAD_score=${metrics.CAD_score}`
    });
  }

  if (metrics.NQS < 90) {
    pushTask({
      priority: 'high',
      stage: 'bookwriter',
      title: 'Improve final prose polish',
      action: 'Tighten repeated formulations and deepen scene-specific language in the final edition so the narrative quality score moves above the current band.',
      evidence: `NQS=${metrics.NQS}`
    });
  }

  for (const issue of issues.filter((entry) => entry.metric === 'EXPORT')) {
    pushTask({
      priority: 'high',
      stage: 'exports',
      title: `Resolve export issue for ${issue.chapter}`,
      action: issue.message,
      evidence: issue.message
    });
  }

  return tasks;
}

function comparePlanCoverage(chapterPlans, drafts, refinedPlans) {
  const planCount = chapterPlans.length + refinedPlans.length;
  const draftCount = drafts.length;
  return draftCount === 0 ? 0 : Math.min(25, Math.round((Math.min(planCount, draftCount * 2) / planCount) * 25));
}

function compareContinuity(continuityPackets, chapterCount) {
  if (continuityPackets.length !== chapterCount) {
    return -25;
  }

  let score = 20;
  for (let index = 0; index < continuityPackets.length; index += 1) {
    const packet = continuityPackets[index].content;
    if (!packet.entryState || !packet.exitState) {
      score -= 10;
    }
  }

  return score;
}

function compareCharacterStability(drafts, macroText) {
  const joined = drafts.map((draft) => draft.content).join(' ').toLowerCase();
  let score = 12;

  for (const keyPhrase of macroText.toLowerCase().match(/[a-z][a-z'\- ]{6,}/g)?.slice(0, 5) ?? []) {
    if (joined.includes(keyPhrase.trim().split(' ').slice(0, 2).join(' '))) {
      score += 2;
    }
  }

  return Math.min(20, score);
}

function compareEmotionalArc(drafts) {
  const emotionalTokens = ['fear', 'tension', 'shock', 'relief', 'tender', 'grief', 'wonder'];
  const score = drafts.reduce((total, draft) => total + detectMarkers(draft.content, emotionalTokens).length, 0);
  return Math.min(20, score * 2 + 4);
}

function detectThemeDensity(drafts, themeTopic) {
  const themeWords = themeTopic.split('-');
  const hits = drafts.reduce((total, draft) => total + detectMarkers(draft.content, themeWords).length, 0);
  return Math.min(20, hits * 3 + 4);
}

function detectMarkers(content, phrases) {
  const lower = content.toLowerCase();
  return phrases.filter((phrase) => lower.includes(phrase.toLowerCase()));
}

function detectCliches(content) {
  const paragraphs = splitParagraphs(content);
  const matches = [];

  for (const phrase of CLICHES) {
    for (let index = 0; index < paragraphs.length; index += 1) {
      if (paragraphs[index].toLowerCase().includes(phrase)) {
        matches.push({
          chapter: extractChapterId(content),
          paragraph: index + 1,
          phrase
        });
      }
    }
  }

  return matches;
}

function detectOverlap(content) {
  const paragraphs = splitParagraphs(content);
  const matches = [];

  for (const phrase of COPYRIGHT_REFERENCE_PASSAGES) {
    for (let index = 0; index < paragraphs.length; index += 1) {
      if (paragraphs[index].toLowerCase().includes(phrase)) {
        matches.push({
          chapter: extractChapterId(content),
          paragraph: index + 1,
          phrase
        });
      }
    }
  }

  return matches;
}

function locateParagraph(paragraphs, token) {
  return paragraphs.findIndex((paragraph) => paragraph.includes(token)) + 1;
}

function extractChapterId(content) {
  const heading = content.match(/^#\s+(.*)$/m)?.[1] ?? 'chapter';
  return heading.toLowerCase().replace(/\s+/g, '-');
}

function check(name, pass) {
  return { name, pass };
}

function stageResult(name, checks) {
  const passed = checks.filter((entry) => entry.pass).length;
  const score = Math.round((passed / checks.length) * 100);
  return {
    name,
    score,
    status: score >= 85 ? 'pass' : score >= 60 ? 'warn' : 'fail',
    checks
  };
}

function renderReport(summary) {
  const metricLines = Object.entries(summary.metrics)
    .map(([name, value]) => `- **${name}**: ${value}%`)
    .join('\n');
  const issueLines = summary.issues.length === 0
    ? '- No major deterministic issues were detected.'
    : summary.issues.map((issue) => `- **${issue.metric}** @ ${issue.chapter}, paragraph ${issue.paragraph ?? 'n/a'}: ${issue.message}`).join('\n');
  const stageLines = summary.stageAudit
    .map((stage) => `- **${stage.name}**: ${stage.score}% (${stage.status})`)
    .join('\n');
  const taskLines = summary.revisionTasks.length === 0
    ? '- No revision tasks were generated.'
    : summary.revisionTasks.map((task) => `- **${task.priority}** / ${task.stage}: ${task.title}`).join('\n');

  return [
    `# Validation report for ${summary.bookId}`,
    '',
    '## Metrics',
    metricLines,
    '',
    '## Issues',
    issueLines,
    '',
    '## Stage audit',
    stageLines,
    '',
    '## Revision tasks',
    taskLines
  ].join('\n');
}

function renderStageReport(stageAudit) {
  return [
    '# Stage audit',
    '',
    ...stageAudit.flatMap((stage) => [
      `## ${stage.name}`,
      `- Score: ${stage.score}%`,
      `- Status: ${stage.status}`,
      ...stage.checks.map((checkResult) => `- ${checkResult.pass ? '[pass]' : '[fail]'} ${checkResult.name}`),
      ''
    ])
  ].join('\n');
}

function renderTaskReport(tasks) {
  return [
    '# Revision tasks',
    '',
    ...(tasks.length === 0
      ? ['- No revision tasks were generated.']
      : tasks.flatMap((task) => [
          `## ${task.id} — ${task.title}`,
          `- Priority: ${task.priority}`,
          `- Stage: ${task.stage}`,
          `- Action: ${task.action}`,
          `- Evidence: ${task.evidence}`,
          ''
        ]))
  ].join('\n');
}

async function writeValidationJson(options, baseName, label, value) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'validation',
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

async function writeReportText(options, baseName, label, content) {
  const artifactPath = await allocateArtifactPath({
    workspaceRoot: options.workspaceRoot,
    stage: 'reports',
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
