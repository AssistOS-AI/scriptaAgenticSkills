---
name: scripta_chapgen
description: Draft chapters and continuity packets from the refined SCRIPTA planning stack.
---

# SCRIPTA ChapGen

This skill consumes refined macro, chapter, and micro plans and emits chapter drafts plus continuity packets. It refuses to continue when placeholders survive the refinement gate.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Drafting must understand `$identifier` references and resolve them contextually instead of leaking raw references into prose.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked proper names.
