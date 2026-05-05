---
name: scripta_bookwriter
description: Assemble validated draft chapters into export-ready SCRIPTA manuscript artifacts.
---

# SCRIPTA BookWriter

This skill creates the final book editions for a workspace. It preserves append-only export history and keeps the export stage downstream from planning and drafting while emitting single-file HTML reader editions, embedded cover art, and bilingual EN/RO outputs. During the QA campaign, the latest readable editions are also published to `QA/books/<lang>/`, and the matching validation dashboard is published to `QA/books/metrics/<book-id>.html`.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Export assembly must not leak raw `$identifier` references or unresolved `{{typed:stable-id}}` placeholders into reader-facing artifacts.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked proper names.
