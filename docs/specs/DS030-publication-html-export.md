---
id: DS030
title: Publication HTML Export
status: implemented
owner: repository
summary: Defines the dependency-free single-file HTML edition contract emitted by BookWriter.
---

# DS030 Publication HTML Export

## Introduction

This file defines the contract for SCRIPTA's final reader editions. These are the portable book artifacts intended for human reading, printing, archival review, and downstream validation.

## Core Content

Each final edition must be emitted as a single HTML file. The file must contain all presentation and cover material inline and must not depend on external stylesheets, JavaScript modules, fonts, image files, or runtime services.

Each edition must include at least the following structural sections in a normal book order:

| Section | Required content |
| --- | --- |
| Cover | Title, profile-facing cover line, and embedded cover artwork |
| Title page | Title, subtitle or story question, and premise |
| Edition notes | Target language, content language, editorial profile, translation instruction, provenance fields |
| Table of contents | Chapter links anchored inside the same file |
| Story body | Chapter sections with stable anchor identifiers |
| Production appendix | Provenance notes and machine-readable metadata access |

The cover artwork must be embedded directly in the HTML, typically as inline SVG. The export must remain printable without downloading additional files.

The edition must expose machine-readable metadata in a non-executable payload embedded in the same file. This metadata must record at least the requested target language, the actual content language, the rendering mode, and any translation instruction captured by the pipeline.

The export must include print styling. A consumer must be able to print the file directly while preserving cover separation, chapter breaks, and readable typography without loading any external asset.

English and Romanian are the built-in fluent rendering targets in the current reference runtime. For other target languages, the contract requires BookWriter to preserve the requested language and translation instruction in the export metadata even when the visible narrative remains in a supported source language.

## Decisions & Questions

### Question #1: Why is inline SVG preferred for the cover instead of a linked image?

Response: Inline SVG keeps the export dependency-free while still allowing distinctive, profile-specific cover art. It also makes validation straightforward because the presence of the cover can be checked directly inside the HTML artifact.

### Question #2: Why is machine-readable metadata embedded inside the final HTML instead of stored only in a sibling JSON file?

Response: The user asked for a self-contained final book reader. Embedding the metadata preserves the single-file contract while still allowing scripts and validators to inspect rendering mode, language intent, and provenance.

### Question #3: Why does the HTML export include both target language and content language?

Response: Once instruction-backed fallbacks are allowed for unsupported languages, the pipeline must distinguish what the user asked for from what language is visibly rendered. Without both fields, the export would blur capability limits and provenance.

## Conclusion

SCRIPTA final editions must be portable, printable, self-contained HTML books whose metadata and presentation remain inspectable without any external dependency.
