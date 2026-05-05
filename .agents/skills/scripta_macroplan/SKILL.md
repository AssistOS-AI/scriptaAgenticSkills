---
name: scripta_macroplan
description: Generate the macro narrative package for a SCRIPTA book workspace from the symbolic seed layer.
---

# SCRIPTA MacroPlan

This skill creates the central idea, theme, wisdom, structure, narrative model, blueprint, character, plot, and world seed artifacts for a book workspace.

It must:

1. use the symbolic seed generator rather than prose improvisation;
2. preserve typed placeholders for later refinement;
3. keep the macro package append-only and traceable.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Use `$identifier` for references to previously defined entities or situations instead of reintroducing them as ad-hoc prose.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked proper names.
