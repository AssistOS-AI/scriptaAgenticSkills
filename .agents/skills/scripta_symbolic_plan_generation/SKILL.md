---
name: scripta_symbolic_plan_generation
description: Generate the append-only symbolic seed artifacts for a SCRIPTA book workspace before any refinement or drafting stage runs.
---

# SCRIPTA Symbolic Plan Generation

Use this skill to create the first macro, chapter, and micro CNL artifacts for a book workspace. The implementation is deterministic, parameterized, and seed-aware.

The skill must call the symbolic generation runtime rather than inventing freeform plans. It is responsible for:

1. honoring work-size and profile parameters;
2. selecting enum-backed classifier values;
3. emitting typed placeholders where surface names are intentionally unresolved;
4. writing append-only artifacts that later stages can refine without overwriting.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Use `$identifier` when a block references a previously defined entity, scene, chapter, or situation; keep `{{typed:stable-id}}` for unresolved surface placeholders only.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked or role-bearing proper names.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Use `$identifier` when a block references a previously defined entity, scene, chapter, or situation; keep `{{typed:stable-id}}` for unresolved surface placeholders only.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked or role-bearing proper names.
