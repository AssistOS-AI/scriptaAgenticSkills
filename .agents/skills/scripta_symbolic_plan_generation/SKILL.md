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
