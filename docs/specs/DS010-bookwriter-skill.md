---
id: DS010
title: BookWriter Skill
status: implemented
owner: repository
summary: Defines the editorial finishing subsystem that assembles the canonical source manuscript, source reader edition, and translation-source bundle for downstream publication.
---

# DS010 BookWriter Skill

## Introduction

BookWriter is the finishing subsystem of SCRIPTA. It assembles chapter drafts into a canonical source manuscript, improves fluency where needed, emits a source reader edition, and prepares the structured bundle consumed by the independent Translation Skill.

## Core Content

BookWriter must treat the generated manuscript as a structured source, not as an invitation to rewrite the book from zero. It may improve fluency, transitions, cadence, and stylistic consistency, but it must preserve chapter order, major narrative meaning, and traceability to earlier stages.

The subsystem must support at least these finishing capabilities:

| Capability | Purpose |
| --- | --- |
| Manuscript assembly | Combine chapter drafts into exportable book artifacts |
| Editorial smoothing | Improve fluency and readability while preserving structure |
| Style alignment | Adjust voice to a declared stylistic profile |
| Single-file source export | Emit a self-contained HTML source edition with embedded cover art, table of contents, print CSS, and provenance metadata |
| Translation-source bundle | Emit the structured source payload required by the Translation Skill |
| Publication provenance | Preserve target-language requests and translation instructions without duplicating translation logic |

The current reference runtime implements manuscript assembly, editorial smoothing, a canonical source reader edition, and a translation-source bundle. Downstream target-language editions are produced by the Translation Skill, which may ship fluent adapters for some languages and visible fallbacks for others.

BookWriter must remain upstream of translation. It may prepare the source edition and the structured publication payload before validation runs, but it must not silently emit translated editions that bypass the dedicated translation stage.

Every export must record its provenance. At minimum, the output must identify the source manuscript version, target language, content language, editorial profile, translation instruction if any, and creation order relative to the validated draft.

Final reader editions must remain single-file artifacts. They must not depend on external CSS, JavaScript, image files, or runtime services. Cover imagery, screen styling, print styling, and machine-readable metadata must all live inside the exported HTML file. Human-visible provenance inside the appendix must be rendered as readable stage lists or notes, not leaked raw JSON blobs.

When the workspace belongs to the canonical QA campaign, BookWriter must cooperate with the publication surface so the latest source edition can be paired with translated editions downstream and mirrored into `QA/books/<lang>/` together with the matching `QA/books/metrics/<book-id>.html` dashboard.

If BookWriter materially changes a passage that has already been validated, the system must preserve a revision map so later reports can still connect the export to the earlier evidence or flag the need for re-validation.

## Decisions & Questions

### Question #1: Why is BookWriter prohibited from acting like a second unrestricted generator?

Response: The user described BookWriter as a finishing and translation layer. If it rewrites the book arbitrarily, the distinction between drafting, validation, and finishing collapses.

### Question #2: Why does BookWriter still need to preserve translation intent even after translation moved out?

Response: Translation still depends on BookWriter's source edition and requested-language metadata. If BookWriter dropped that information, the downstream translator would lose both intent and provenance.

### Question #3: Why are single-file HTML editions mandatory instead of a normal asset bundle?

Response: The user explicitly asked for printable, dependency-free book readers with embedded cover imagery. A single-file export also simplifies archiving, diffing, and automated validation because the entire edition is inspectable as one artifact.

### Question #4: Why was translation separated from BookWriter instead of kept as a built-in mode?

Response: The user explicitly asked for translation to be disciplined, chunked, and independent from generation. Moving translation into its own stage keeps the canonical source edition stable and makes translation leaks easier to audit.

### Question #5: Why must BookWriter emit a structured source bundle instead of only the source HTML?

Response: The Translation Skill needs more than rendered HTML. It needs stable chapter metadata, source paragraphs, and publication fields so translated editions can reuse the same template without scraping HTML back into structure.

## Conclusion

BookWriter must act as a controlled source-finishing layer that preserves structure, provenance, revision accountability, and publication portability for the downstream translation stage.
