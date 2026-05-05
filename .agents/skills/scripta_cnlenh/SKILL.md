---
name: scripta_cnlenh
description: Resolve placeholders and enrich symbolic plans with controlled natural-language refinement hints.
---

# SCRIPTA CNLEnh

This skill turns symbolic seed artifacts into refined successor artifacts.

It must:

1. preserve identifiers;
2. resolve typed placeholders into concrete names and locations;
3. emit refine blocks and successor files instead of mutating the seeds.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Preserve `$identifier` references as cross-block links; resolve `{{typed:stable-id}}` placeholders without flattening the authored plan structure.
3. When names become concrete, they must stay internationally portable and must not embed role words inside the proper-name field.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Preserve `$identifier` references as cross-block links; resolve `{{typed:stable-id}}` placeholders without flattening the authored plan structure.
3. When names become concrete, they must stay internationally portable and must not embed role words inside the proper-name field.
