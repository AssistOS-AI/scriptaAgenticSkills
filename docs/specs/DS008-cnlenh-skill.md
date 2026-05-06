---
id: DS008
title: CNLEnh Skill
status: implemented
owner: repository
summary: Defines the controlled-language enhancement subsystem that enriches symbolic plans with textual hints.
---

# DS008 CNLEnh Skill

## Introduction

CNLEnh bridges symbolic planning and prose generation. It enriches MicroPlan outputs with constrained textual hints while preserving the symbolic plan as the authoritative structure.

## Core Content

CNLEnh must be skill-mediated and LLM-ready, but it must operate under a narrow contract. It must not draft full chapters and it must not invent structural changes that contradict MacroPlan, ChapPlan, or MicroPlan.

Its outputs must remain attached to symbolic units. Every enhancement must preserve at least the chapter identifier, block identifier, block role, and upstream references that justify the hint.

CNLEnh must enrich plans in CNL form. The preferred mechanism is to append `refine` blocks that reuse the existing command identifiers or to emit parallel CNL refinement files that preserve the same identifiers. CNLEnh must not replace plan files with prose-only notes that scripts can no longer parse.

CNLEnh is the first stage that must normally resolve symbolic placeholders into concrete narrative surface details. It must turn generic symbolic ids from the macro entity map into actual names, place labels, institutional names, and other readable specifics whenever the plan state is mature enough to support that concretization. Cross-block `$<identifier>` references must remain available as lineage markers even after placeholder resolution. If a placeholder cannot be resolved safely, CNLEnh must emit a failure or warning artifact rather than silently carrying the placeholder forward as if refinement succeeded.

CNLEnh must write new refinement artifacts and must not mutate the seed files it consumed. A valid run therefore leaves both the symbolic seed and the enriched successor available for validation and comparison.

The current reference implementation fulfills this stage through a deterministic refinement adapter embedded inside the self-contained `scripta_cnlenh` skill folder. It resolves placeholders from authored vision packets plus the symbolic entity map and appends refinement hints. When names become concrete, they must remain internationally portable proper names rather than locale-locked defaults or role-bearing pseudo-names. Future remote LLM adapters must preserve the same successor-artifact contract.

The enhancement vocabulary must cover:

| Hint class | Purpose |
| --- | --- |
| Tone hints | Local emotional coloring and voice direction |
| Sensory hints | Which sensory channels deserve emphasis |
| Character-focus hints | Whose perception or emotional interpretation dominates the block |
| Dialogue hints | Tension mode, subtext pressure, and speech asymmetry |
| Description hints | Atmosphere, salience, and information economy |
| Rhythm hints | Whether the block should compress, stretch, suspend, or cut sharply |

CNLEnh must preserve the STG principle that meaning should emerge through dramatized action rather than didactic explanation. Hints may clarify intent, but they must not replace narrative demonstration with moral exposition.

If a block cannot be enriched without revealing a contradiction in the plan set, CNLEnh must emit a planning issue rather than improvising a new structure silently.

## Decisions & Questions

### Question #1: Why does CNLEnh stay attached to block identifiers?

Response: The user requested later reports that explain scores at chapter and paragraph or block level. CNLEnh therefore has to preserve the same symbolic lineage rather than replacing it with anonymous drafting notes.

### Question #2: Why does CNLEnh avoid final prose even though it uses an LLM?

Response: SCRIPTA needs a separable enrichment stage so planning and drafting do not collapse into a single opaque generation step. That separation also makes revision and evaluation more precise.

### Question #3: Why is placeholder resolution explicitly part of CNLEnh?

Response: The user wants names, places, and other concrete NL details to be introduced after the symbolic pass, not mixed into the seed-generation phase. CNLEnh is therefore the natural gate where typed placeholders must normally disappear from plan artifacts.

## Conclusion

CNLEnh must be a disciplined enrichment layer. Its purpose is to make the symbolic plan more draftable, not to bypass the plan stack.
