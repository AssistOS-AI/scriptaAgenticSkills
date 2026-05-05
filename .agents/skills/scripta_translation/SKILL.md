---
name: scripta_translation
description: Translate a BookWriter source edition through ordered chunk processing and re-render the result with the shared SCRIPTA publication template.
---

# SCRIPTA Translation

This skill consumes the source edition emitted by `scripta_bookwriter`, translates the source text in deterministic chunk order, and writes translated reader editions as append-only successor artifacts. It must never generate `book-vision.md`, must not invent locale-locked names, and must preserve the publication structure already defined by BookWriter.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Final reader editions must not leak raw `$identifier` references, unresolved `{{typed:stable-id}}` placeholders, or mixed-language template residue.
3. Proper names must remain internationally portable unless the authored source vision explicitly demands something else.
4. Translation must be chunked and traceable: split the source text into ordered chunks, translate each chunk, then concatenate them back in the same structural slot.
5. Do not fork the HTML template. Translated editions must reuse the shared publication renderer used by the source edition.

Workflow:

1. Read the latest BookWriter `translation-source.bundle` artifact from the workspace.
2. Determine the source language, requested target languages, and any explicit translation instructions.
3. For each target language other than the source language, translate the source edition field by field and paragraph by paragraph in deterministic chunk order.
4. Record a translation trace artifact that preserves chunk order and source/target text pairs.
5. Render the translated edition through the shared template and store it as a reader artifact in the translation stage.
6. Emit an append-only editions bundle manifest for the translation stage.

Required outputs:

- `phase9-translations/edition-<lang>.reader.iter-XXX.html`
- `phase9-translations/edition-<lang>.translation-trace.iter-XXX.md`
- `phase9-translations/editions.bundle.iter-XXX.md`

Error conditions:

- Fail if the BookWriter source bundle is missing.
- Fail if the source bundle lacks a canonical source edition payload.
- Fail if translation would overwrite prior artifacts instead of creating a successor iteration.
