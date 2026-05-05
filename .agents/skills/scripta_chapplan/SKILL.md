---
name: scripta_chapplan
description: Generate the chapter-level seed contracts for a SCRIPTA book workspace.
---

# SCRIPTA ChapPlan

Use this skill to generate chapter seed files after the macro package exists. Each chapter artifact must preserve purpose, role, state transition, and continuity obligations.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Use `$identifier` whenever a chapter block points back to a defined entity, scene, or chapter-level dependency.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked proper names.
