---
id: DS032
title: Translation Skill
status: implemented
owner: repository
summary: Defines the independent translation subsystem that consumes BookWriter source bundles, translates ordered text chunks, and re-renders final reader editions through the shared publication template.
---

# DS032 Translation Skill

## Introduction

The Translation Skill is the downstream publication subsystem that turns a BookWriter source edition into translated reader editions. It exists as a separate stage so translation quality, provenance, and fallback behavior remain inspectable instead of being hidden inside BookWriter.

## Core Content

The Translation Skill must consume a structured source-edition bundle produced by BookWriter. That bundle must provide the canonical source edition, the requested target languages, the translation instructions, and the stable chapter metadata needed to rebuild the final HTML book without duplicating template logic.

The subsystem must support at least these capabilities:

| Capability | Purpose |
| --- | --- |
| Source bundle loading | Read the canonical edition produced by BookWriter |
| Ordered chunk translation | Split translatable text into sequential chunks and translate them in order |
| Translation trace output | Record chunk-by-chunk source/target pairs for auditability |
| Shared-template rendering | Reuse the same final HTML renderer used by the source edition |
| Language-aware fallback | Preserve requested language intent even when no fluent built-in adapter exists |
| Append-only publication | Emit translated editions and bundle manifests as successor artifacts |

Chunk translation must remain structured. The skill may segment by sentence, paragraph, or other deterministic boundaries, but it must preserve chunk order, reassemble the translated text in the same structural position, and record the chunk trace as a stage artifact.

The current reference runtime implements a built-in Romanian translation path. Other target languages remain valid requests, but when no fluent adapter exists the skill must still emit a compliant reader edition that preserves the requested target language and the translation instruction in metadata while making the fallback visible.

The Translation Skill must not own the HTML template independently. Source and translated editions must pass through a shared publication renderer so cover layout, metadata embedding, print CSS, table of contents structure, and chapter anchors remain identical across languages except where the content itself differs.

When a workspace belongs to the canonical QA campaign, the Translation Skill must cooperate with validation and publication so the latest translated editions are mirrored into `QA/books/<lang>/` together with the matching metrics page.

## Decisions & Questions

### Question #1: Why is translation a separate skill instead of a BookWriter mode?

Response: The user explicitly asked for disciplined translation as an independent stage that reads English source text in chunks, translates those chunks, and reassembles the book. Separating the stage keeps the lineage explicit and prevents translation logic from being hidden inside source-generation code.

### Question #2: Why must the skill emit chunk traces instead of only final HTML?

Response: Translation quality problems are difficult to debug when only the final reader file survives. Chunk traces preserve sequence, make leakage visible, and give validation a concrete audit surface.

### Question #3: Why does the translation stage reuse the same renderer instead of shipping its own HTML template?

Response: The user explicitly rejected duplicated HTML templates between generation and translation. A shared renderer ensures that layout drift does not become a second translation problem.

### Question #4: Why are unsupported languages still part of the contract?

Response: The public pipeline must preserve target-language intent even before every language has a fluent built-in adapter. Otherwise the workflow would silently forget user requirements and lose provenance.

## Conclusion

The Translation Skill must remain a traceable, append-only, shared-template publication stage that converts a canonical source edition into translated reader editions without blurring generation and translation responsibilities.
