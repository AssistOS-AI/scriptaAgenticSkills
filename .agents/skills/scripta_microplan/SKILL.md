---
name: scripta_microplan
description: Generate the symbolic micro blocks for every chapter in a SCRIPTA workspace.
---

# SCRIPTA MicroPlan

This skill builds the block-level symbolic plan: scenes, sequences, actions, conflicts, events, expression blocks, and rhythm blocks.

The output remains abstract and deterministic so later refinement and validation stages can reason about it directly.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Use `$identifier` for references to previously defined entities, scenes, chapters, and rule blocks; reserve `{{typed:stable-id}}` for unresolved surface details.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked proper names.
