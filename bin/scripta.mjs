#!/usr/bin/env node

import { parseArgs } from 'node:util';
import { runStageCommand } from '../orchestration/runStageCommand.mjs';

const subcommand = process.argv[2];
const cliArgs = process.argv.slice(3);

if (!subcommand || subcommand === '--help' || subcommand === '-h') {
  printHelp();
  process.exit(0);
}

const optionSchema = {
  'book-id': { type: 'string' },
  brief: { type: 'string' },
  'workspace-root': { type: 'string' },
  stage: { type: 'string' },
  profile: { type: 'string' },
  'baseline-profile': { type: 'string' },
  'genre-mode': { type: 'string' },
  'work-form': { type: 'string' },
  'target-words': { type: 'string' },
  'chapter-count': { type: 'string' },
  'scene-density': { type: 'string' },
  'dialogue-density': { type: 'string' },
  'description-density': { type: 'string' },
  'narrator-mode': { type: 'string' },
  'focalization-mode': { type: 'string' },
  'narrative-model': { type: 'string' },
  'macro-form': { type: 'string' },
  'variation-level': { type: 'string' },
  'random-policy': { type: 'string' },
  seed: { type: 'string' },
  'placeholder-style': { type: 'string' },
  'resolution-policy': { type: 'string' },
  'source-language': { type: 'string' },
  'target-language': { type: 'string' },
  'target-languages': { type: 'string' },
  'translation-instructions': { type: 'string' },
  'editorial-profile': { type: 'string' },
  'output-root': { type: 'string' },
  qa: { type: 'boolean' }
};

const { values } = parseArgs({
  args: cliArgs,
  options: optionSchema,
  allowPositionals: true
});

try {
  const result = await runStageCommand(subcommand, {
    bookId: values['book-id'],
    brief: values.brief,
    workspaceRoot: values['workspace-root'] ?? values['output-root'],
    stage: values.stage,
    profile: values.profile ?? values['baseline-profile'],
    baselineProfile: values['baseline-profile'] ?? values.profile,
    genreMode: values['genre-mode'],
    workForm: values['work-form'],
    targetWords: values['target-words'],
    chapterCount: values['chapter-count'],
    sceneDensity: values['scene-density'],
    dialogueDensity: values['dialogue-density'],
    descriptionDensity: values['description-density'],
    narratorMode: values['narrator-mode'],
    focalizationMode: values['focalization-mode'],
    narrativeModel: values['narrative-model'],
    macroForm: values['macro-form'],
    variationLevel: values['variation-level'],
    randomPolicy: values['random-policy'],
    seed: values.seed,
    placeholderStyle: values['placeholder-style'],
    resolutionPolicy: values['resolution-policy'],
    sourceLanguage: values['source-language'],
    targetLanguage: values['target-language'],
    targetLanguages: values['target-languages'],
    translationInstructions: values['translation-instructions'],
    editorialProfile: values['editorial-profile']
  });

  if (result.outputPath) {
    process.stdout.write(`${result.message}\n${result.outputPath}\n`);
  } else {
    process.stdout.write(`${result.message}\n`);
  }
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}

function printHelp() {
  const helpText = `
SCRIPTA CLI

Commands:
  seed            Generate symbolic seed artifacts for one stage or all stages.
  macroplan       Run the MacroPlan stage.
  chapplan        Run the ChapPlan stage.
  microplan       Run the MicroPlan stage.
  cnlenh          Run the CNLEnh stage.
  chapgen         Run the ChapGen stage.
  bookwriter      Run the BookWriter stage for the source edition.
  translate       Run the translation stage on the source edition.
  validate        Run the Validation Suite and Metrics.
  generate-book   Run the full pipeline for one workspace.
  qa              Generate the five QA books under ./QA.

Common options:
  --book-id <id>
  --workspace-root <path>
  --brief <text>
  --baseline-profile <profile>
  --work-form <short-story|novelette|novella|novel|series-volume>
  --chapter-count <number>
  --scene-density <low|medium|high>
  --seed <value>
  --placeholder-style <typed>
  --target-languages <en,ro,...>
  --translation-instructions <lang=text||lang=text>
  --editorial-profile <literary-smooth|...>
`;

  process.stdout.write(helpText.trimStart());
}
