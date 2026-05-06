---
id: DS032
title: Translation Skill
status: implemented
owner: repository
summary: Defines the independent translation subsystem that consumes BookWriter source bundles, translates ordered text chunks, and re-renders final reader editions to the DS030 publication contract.
---

# DS032 Translation Skill

## Introduction

The Translation Skill is the downstream publication subsystem that turns a BookWriter source edition into translated reader editions. It exists as a separate stage so translation quality, provenance, and fallback behavior remain inspectable instead of being hidden inside BookWriter.

## Core Content

The Translation Skill must consume a structured source-edition bundle produced by BookWriter. That bundle must provide the canonical source edition, the requested target languages, the translation instructions, and the stable chapter metadata needed to rebuild the final HTML book without scraping structure back out of rendered HTML.

The subsystem must support at least these capabilities:

| Capability | Purpose |
| --- | --- |
| Source bundle loading | Read the canonical edition produced by BookWriter |
| Ordered chunk translation | Split translatable text into sequential chunks and translate them in order |
| Translation trace output | Record chunk-by-chunk source/target pairs for auditability |
| Publication-contract rendering | Rebuild the final HTML edition through skill-local renderer code that still satisfies `DS030` |
| Language-aware fallback | Preserve requested language intent even when no fluent built-in adapter exists |
| Append-only publication | Emit translated editions and bundle manifests as successor artifacts |

Chunk translation must remain structured. The skill may segment by paragraph, chapter section, or another deterministic literary boundary, but it must preserve chunk order, reassemble the translated text in the same structural position, and record the chunk trace as a stage artifact. For novel-length prose, chunking must preserve enough local context that the translator is not forced into sentence-by-sentence atomization unless a validator or hard limit requires smaller fallback chunks. The reference implementation must expose a translation-local chunk tool that appends the trace artifact chunk by chunk while the translated edition is being assembled.

The current reference implementation embeds a built-in Romanian translation path inside the self-contained `scripta_translation` skill folder. Other target languages remain valid requests, but when no fluent adapter exists the skill must still emit a compliant reader edition that preserves the requested target language and the translation instruction in metadata while making the fallback visible.

The Translation Skill must not invent a divergent publication surface. It may keep its own local renderer code inside the skill folder, but the translated edition must satisfy the same `DS030` HTML contract as the source edition so cover layout, metadata embedding, print CSS, table of contents structure, and chapter anchors remain aligned across languages except where the content itself differs.

Chunk traces, validator hints, and raw translation instructions are internal audit surfaces. They may be written to trace artifacts and machine-readable metadata, but they must not appear as visible reader-facing labels or notices in the final book unless the workflow is explicitly publishing a non-fluent fallback warning.

When a workspace belongs to the canonical QA campaign, the Translation Skill must cooperate with validation and publication so the latest translated editions are mirrored into `QA/books/<lang>/` together with the matching metrics page.

## Decisions & Questions

### Question #1: Why is translation a separate skill instead of a BookWriter mode?

Response: The user explicitly asked for disciplined translation as an independent stage that reads English source text in chunks, translates those chunks, and reassembles the book. Separating the stage keeps the lineage explicit and prevents translation logic from being hidden inside source-generation code.

### Question #2: Why must the skill emit chunk traces instead of only final HTML?

Response: Translation quality problems are difficult to debug when only the final reader file survives. Chunk traces preserve sequence, make leakage visible, and give validation a concrete audit surface.

### Question #3: Why does the translation stage target the same publication contract instead of inventing a translation-only template?

Response: The user explicitly rejected layout drift between source and translated editions. Even when BookWriter and Translation Skill keep separate local renderer code for portability, both must still target the same `DS030` contract so translation does not create a second formatting problem.

### Question #4: Why are unsupported languages still part of the contract?

Response: The public pipeline must preserve target-language intent even before every language has a fluent built-in adapter. Otherwise the workflow would silently forget user requirements and lose provenance.

### Question #5: Why does the DS now prefer paragraph- or chapter-scale chunks for literary prose?

Response: The user explicitly rejected sentence-level atomization for novel translation because it destroys tonal continuity and encourages mixed-language residue. Larger deterministic chunks preserve context while still leaving behind an auditable trace.

### Question #6: Why are traces and translation instructions hidden from the visible book?

Response: They are valuable for audit and QA, but they are not part of the literary artifact a reader should encounter. Hiding them from the visible surface keeps the translation stage inspectable without turning the book into a diagnostic report.

## Conclusion

The Translation Skill must remain a traceable, append-only publication stage that converts a canonical source edition into translated reader editions without blurring generation and translation responsibilities or diverging from the DS030 HTML contract.
