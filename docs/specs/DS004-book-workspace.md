---
id: DS004
title: Book Workspace
status: implemented
owner: repository
summary: Defines the per-book folder structure, baseline validation profiles, and artifact naming model.
---

# DS004 Book Workspace

## Introduction

Each book processed by SCRIPTA must live inside its own workspace. This file defines the minimum required workspace structure and the traceability model that later scripts and skills must follow.

## Core Content

The workspace must be organized by stage so that plans, generated text, validation evidence, and final exports remain separable. The minimum required layout is:

| Folder | Required purpose | Typical artifacts |
| --- | --- | --- |
| `macro/` | Store the macro package | `macro.plan.md`, `characters.plan.md`, `world.plan.md` |
| `chapters/` | Store chapter plans | `chapter-001.plan.md` through `chapter-NNN.plan.md` |
| `micro/` | Store symbolic micro plans | `chapter-001.micro.plan.md`, block maps, scene graphs |
| `cnl/` | Store enhanced controlled-language plans | `chapter-001.cnl.plan.md`, global refinement packs |
| `drafts/` | Store generated chapter text | `chapter-001-draft.*`, continuity packets |
| `validation/` | Store validation profiles, raw runs, and evidence | baseline specs, raw check outputs, overlap reports |
| `reports/` | Store human-readable and machine-readable summaries | per-check Markdown and JSON, aggregate dashboards |
| `exports/` | Store editorial and translation outputs | language bundles, publication variants |

Every artifact must carry a book identifier. Chapter-bound artifacts must also carry a chapter identifier, and paragraph-level or block-level outputs must preserve a stable local identifier when possible.

All plan files in `macro/`, `chapters/`, `micro/`, and `cnl/` must be Markdown-compatible CNL files whose command blocks begin with `@identifier verb`. Scripts must be able to discover plan intent by scanning those header lines and the fixed labeled lines that follow them, while LLMs must still be able to read the same files as natural text.

Stage outputs must be append-only. A later stage may not rewrite or delete an earlier stage file as its normal success path. If a stage is rerun, it must produce a new iteration artifact, for example by adding a run identifier, timestamp-free sequence number, or explicit iteration suffix that remains stable inside the workspace.

The workspace must preserve the distinction between symbolic seed artifacts and refined artifacts. A compliant workspace therefore needs file naming or subfolder rules that make the following states distinguishable:

| State | Example artifact pattern | Meaning |
| --- | --- | --- |
| Symbolic seed | `macro/book.symbolic.plan.md` | Code-generated first iteration with controlled values and placeholders |
| Refined plan | `cnl/book.refined.plan.md` | Later-stage plan with NL nuance and resolved concrete names |
| Draft | `drafts/chapter-004.draft.md` | Generated prose based on validated plans |
| Failure artifact | `validation/chapter-004.placeholder-fail.json` | Explicit record that a stage failed a gate |

The workspace must keep provenance visible enough that validators can compare upstream and downstream files. At minimum, every non-seed stage must be able to declare which prior artifact versions it consumed.

The `validation/` folder must contain five baseline validation profiles that can be reused across books and specialized into genre-specific variants. The initial baseline bundle must cover:

| Profile | Purpose |
| --- | --- |
| `drama` | Realistic and psychological conflict with high thematic and emotional density |
| `detective-police` | Investigation logic, clue fairness, and revelation discipline |
| `science-fiction` | World-rule consistency, extrapolation logic, and speculative coherence |
| `fantasy` | Rule-bound worldbuilding, magic-cost coherence, and mythic structure |
| `romance-relational` | Emotional progression, relationship stakes, and bond transformation |

Additional genres may extend one of these baselines, but the repository must preserve exactly five canonical reusable baseline families unless a future DS revises that number.

The workspace must never collapse reports into anonymous summaries. If a score is reported, the evidence and issue files that justify it must exist in the same workspace.

## Decisions & Questions

### Question #1: Why are the five baseline validation profiles fixed explicitly?

Response: The user asked for five baseline book specifications in the validation area and gave examples such as science fiction, drama, and police fiction. Fixing the baseline bundle gives the implementation a stable starting point for both generation and validation.

### Question #2: Why does the workspace separate `validation/` and `reports/`?

Response: Validation stores check definitions, raw evidence, and intermediate outputs. Reports store revision-facing interpretations of that evidence. Keeping them separate avoids mixing computation traces with reader-facing diagnostics.

### Question #3: Why are append-only stage files mandatory instead of a convenience choice?

Response: The user explicitly wants stages to create new files rather than update previous ones so verifiers can compare iterations and force better compliance through failing checks. Without preserved stage history, placeholder validation and plan-improvement accountability would weaken immediately.

## Conclusion

Every future SCRIPTA book must use a structured per-book workspace. That workspace is the foundation for reproducible planning, validation, and revision.
