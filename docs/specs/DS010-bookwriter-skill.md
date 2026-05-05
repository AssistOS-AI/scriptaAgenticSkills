---
id: DS010
title: BookWriter Skill
status: implemented
owner: repository
summary: Defines the editorial finishing subsystem that emits single-file book editions, built-in EN/RO renderings, and instruction-backed translation requests.
---

# DS010 BookWriter Skill

## Introduction

BookWriter is the finishing subsystem of SCRIPTA. It assembles chapter drafts into coherent manuscript outputs, improves fluency where needed, emits final reader editions, and reserves a controlled extension point for future translation backends.

## Core Content

BookWriter must treat the generated manuscript as a structured source, not as an invitation to rewrite the book from zero. It may improve fluency, transitions, cadence, and stylistic consistency, but it must preserve chapter order, major narrative meaning, and traceability to earlier stages.

The subsystem must support at least these finishing capabilities:

| Capability | Purpose |
| --- | --- |
| Manuscript assembly | Combine chapter drafts into exportable book artifacts |
| Editorial smoothing | Improve fluency and readability while preserving structure |
| Style alignment | Adjust voice to a declared stylistic profile |
| Single-file reader export | Emit self-contained HTML editions with embedded cover art, table of contents, print CSS, and provenance metadata |
| Built-in bilingual rendering | Produce fluent English and Romanian editions from the same structured source |
| Instruction-backed translation request | Accept target-language instructions for additional languages without weakening provenance or stage boundaries |

The current reference runtime implements manuscript assembly, editorial smoothing, and self-contained HTML reader editions for English and Romanian. For other target languages, the runtime must preserve the requested language code and translation instruction as part of the export contract even when a built-in fluent renderer is not available.

The final published edition must reflect the latest validation snapshot rather than a pre-validation draft export. A compliant orchestration may therefore emit an initial export for structural auditing, run validation, and then emit a later export iteration whose appendix contains the newest metric snapshot and readable provenance lines.

Every export must record its provenance. At minimum, the output must identify the source manuscript version, target language, content language, editorial profile, translation instruction if any, and creation order relative to the validated draft.

Final reader editions must remain single-file artifacts. They must not depend on external CSS, JavaScript, image files, or runtime services. Cover imagery, screen styling, print styling, and machine-readable metadata must all live inside the exported HTML file. Human-visible provenance inside the appendix must be rendered as readable stage lists or notes, not leaked raw JSON blobs.

When the workspace belongs to the canonical QA campaign, BookWriter must cooperate with the publication surface so the latest English and Romanian editions are mirrored into `QA/books/<lang>/` and tied to the matching `QA/books/metrics/<book-id>.html` dashboard.

If BookWriter materially changes a passage that has already been validated, the system must preserve a revision map so later reports can still connect the export to the earlier evidence or flag the need for re-validation.

## Decisions & Questions

### Question #1: Why is BookWriter prohibited from acting like a second unrestricted generator?

Response: The user described BookWriter as a finishing and translation layer. If it rewrites the book arbitrarily, the distinction between drafting, validation, and finishing collapses.

### Question #2: Why does translation still need traceability?

Response: The project requirement is not only to emit polished text, but also to keep the relationship between scores, reports, and text revisions intelligible. Translation cannot be exempt from that discipline.

### Question #3: Why are single-file HTML editions mandatory instead of a normal asset bundle?

Response: The user explicitly asked for printable, dependency-free book readers with embedded cover imagery. A single-file export also simplifies archiving, diffing, and automated validation because the entire edition is inspectable as one artifact.

### Question #4: Why does the current contract distinguish built-in EN/RO rendering from instruction-backed translation for other languages?

Response: The repository now ships deterministic bilingual rendering for English and Romanian. Extending that same quality level to arbitrary languages requires a dedicated translation backend, but the contract still needs a stable way to preserve target-language intent and provenance until that backend exists.

### Question #5: Why may BookWriter run twice inside the full orchestration?

Response: Export auditing needs an HTML edition to exist before validation can inspect it, but the final edition should still display the latest validation snapshot. A two-pass append-only export sequence satisfies both requirements without rewriting earlier artifacts.

## Conclusion

BookWriter must act as a controlled finishing layer that preserves structure, provenance, revision accountability, and final-edition portability.
