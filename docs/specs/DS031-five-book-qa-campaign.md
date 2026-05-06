---
id: DS031
title: Five-Book QA Campaign
status: implemented
owner: repository
summary: Defines the canonical five-book QA campaign, the per-stage generation path, and the consolidated review outputs.
---

# DS031 Five-Book QA Campaign

## Introduction

This file defines the canonical QA campaign used to exercise the reference implementation. The campaign exists to prove that SCRIPTA can move five distinct literary profiles from symbolic seed generation to final HTML reader editions and evidence-backed revision tasks.

## Core Content

The QA campaign must always contain five authored QA workspaces, one for each canonical baseline profile:

| Book ID | Profile | Work form |
| --- | --- | --- |
| `qa-drama-silence` | `drama` | `novelette` |
| `qa-detective-river` | `detective-police` | `novelette` |
| `qa-scifi-orbit` | `science-fiction` | `novelette` |
| `qa-fantasy-ash` | `fantasy` | `novelette` |
| `qa-romance-margins` | `romance-relational` | `novelette` |

The QA campaign must keep its authored source packets under `QA/specs/<book-id>.md`, one file per canonical book. The `qa` command may discover those specs automatically, but it must not depend on a separate hardcoded runtime list of QA books. During generation, each spec must be copied into the generated workspace as `book-vision.md`. Before regeneration, `QA/clean.js` must remove generated workspaces, published books, and summary artifacts while preserving `QA/specs/`, so a fresh `qa` run proves that the campaign was rebuilt from the authored sources.

Each book in the campaign must be able to run through the full stage chain:

1. Symbolic seed generation for macro, chapter, and micro plans.
2. `MacroPlan`, `ChapPlan`, and `MicroPlan`.
3. `CNLEnh` placeholder resolution and successor refinement.
4. `ChapGen` draft generation from the refined chapter contract.
5. `BookWriter` source manuscript, source edition, and translation-source bundle generation.
6. `Translation Skill` Romanian reader edition generation from the source bundle.
7. `Validation Suite` metrics, export audit, stage audit, and revision task generation.

The stage-by-stage CLI path must remain available even when the convenience `qa` command exists. At minimum, the campaign documentation must support the following generation shape per book:

```text
scripta seed
scripta macroplan
scripta chapplan
scripta microplan
scripta cnlenh
scripta chapgen
scripta bookwriter --target-languages en,ro
scripta translate --target-languages en,ro
scripta validate
```

The `qa` command must generate all five books end to end and then emit consolidated campaign artifacts at the QA root. At minimum, those root artifacts must include:

| Artifact | Purpose |
| --- | --- |
| `books/<lang>/<book-id>.html` | Public, directly browsable final reader editions grouped by language |
| `books/metrics/<book-id>.html` | Public per-book HTML dashboard for the latest validation run |
| `books/index.html` | Landing page for the published QA library |
| `books/metrics/index.html` | Landing page for the published QA metrics library |
| `qa-summary.md` | Per-book metrics, stage audit, export audit, and revision tasks |
| `qa-review.md` | Consolidated review snapshot across the campaign |
| `qa-tasks.md` | Human-readable task list for the next remediation pass |

Every per-book workspace produced by the campaign must include the source English HTML reader edition in `phase8-exports/`, the translated Romanian HTML reader edition in `phase9-translations/`, and validation summaries and task reports under `phase6-validation/` and `phase7-reports/`. After each QA regeneration, the public `QA/books/` library and `QA/books/metrics/` library must be refreshed from the latest workspace iterations.

## Decisions & Questions

### Question #1: Why are exactly five canonical QA books required?

Response: The user asked for five short demonstrator books covering different literary profiles such as drama, police/detective, science fiction, fantasy, and romance. Keeping that fixed set stable makes it possible to compare changes to the runtime over time.

### Question #2: Why must the QA campaign preserve both stage-by-stage commands and a single `qa` command?

Response: The user explicitly asked for instructions to generate the books step by step until the final HTML editions. The campaign therefore needs both a convenience entry point and a stagewise path that supports focused debugging.

### Question #3: Why do revision tasks belong to the QA campaign output?

Response: The QA run is not complete when it merely reports scores. The user asked for generated tasks that can guide the next fix pass, so task generation is part of the QA contract itself.

### Question #4: Why does the QA campaign publish a separate metrics library instead of leaving metrics buried inside JSON summaries?

Response: The user explicitly asked for browsable HTML metric pages under `QA/books/metrics/`, updated after every run. The campaign therefore has two public surfaces: readable books and readable dashboards.

## Conclusion

The canonical five-book QA campaign is the regression harness for the SCRIPTA implementation: it proves the stage pipeline, the source-plus-translation publication surface, and the revision loop in one repeatable package.
