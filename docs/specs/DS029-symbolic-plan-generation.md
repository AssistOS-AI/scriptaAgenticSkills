---
id: DS029
title: Symbolic Plan Generation
status: implemented
owner: repository
summary: Defines the deterministic and constrained-random CLI layer that generates the first iteration of SCRIPTA plan files before LLM refinement.
---

# DS029 Symbolic Plan Generation

## Introduction

SCRIPTA needs an explicit contract for symbolic plan generation because the user wants the first iteration of planning artifacts to be produced by code, not invented directly by an LLM. This file defines that symbolic generation layer, the CLI-style parameters it must accept, and the constraints under which it may use controlled randomness.

## Core Content

Symbolic plan generation is the reusable CLI-oriented layer that produces the first iteration of `macro/`, `chapters/`, and `micro/` plan files. It must operate before LLM refinement and must emit CNL files that later skills can enrich rather than replace.

The symbolic generator must support at least the following stage targets:

| Target | Required output |
| --- | --- |
| `macro` | `DS014` through `DS022` seed commands |
| `chapters` | `DS023` seed commands aligned with the macro package |
| `micro` | `DS024` through `DS028` seed commands aligned with chapter plans |
| `all` | An orchestrated seed pass that runs the previous targets in order |

The CLI contract must support explicit planning parameters rather than hidden defaults. At minimum, the generator must accept:

| Parameter family | Required examples | Role |
| --- | --- | --- |
| Work size | `work-form`, `target-words`, `chapter-count`, `scene-density` | Controls the literary scale of the output |
| Literary type | `baseline-profile`, `genre-mode`, `narrative-model`, `macro-form` | Constrains the planning ontology |
| Voice and rendering | `narrator-mode`, `focalization-mode`, `dialogue-density`, `description-density` | Guides symbolic distribution of block types |
| Randomness | `seed`, `variation-level`, `random-policy` | Enables reproducible but non-identical plan seeds |
| Placeholder behavior | `placeholder-style`, `resolution-policy` | Controls how unresolved concrete names are represented |
| Output control | `book-id`, `output-root`, `iteration-id` | Determines where append-only artifacts are written |

The generator must expose controlled work-size bands that skills can translate into exact numbers when needed:

| `work-form` | Expected use |
| --- | --- |
| `short-story` | Minimal chapter count or chapterless form, tight symbolic scope |
| `novelette` | Short but multi-stage narrative |
| `novella` | Medium narrative with clear chapter or sequence layering |
| `novel` | Full-length multi-chapter architecture |
| `series-volume` | Expanded structure with long arc obligations |

The generator must treat user and profile inputs as constraints. Hard constraints must never be violated. Soft constraints may be traded off only when the tool records that tradeoff in the generated manifest or issue output.

The generator may use randomness only as constrained randomness. It must:

1. load the allowed enumerated domains from `DS014` through `DS028`;
2. filter those domains through the requested work form, profile, and narrative constraints;
3. choose among the remaining legal values using the provided seed;
4. emit the chosen classifier values and the resulting semantic scaffolds into CNL;
5. record the seed and the applied constraints so the run is reproducible.

The first iteration must be symbolic, not empty. It must already contain:

1. stable identifiers;
2. enumerated classifier values;
3. stage-appropriate causal and structural links;
4. `$<identifier>` references for previously defined entities, scenes, chapters, or rule blocks;
5. typed placeholders for unresolved names or labels, using generic symbolic ids such as `PERSON_001`, `LOCATION_001`, `ORG_001`, and `OBJECT_001`;
6. enough textual scaffolding that CNLEnh can refine it without inventing a new plan ontology.

When the symbolic generator introduces a character, location, or comparable entity block, later blocks should refer back to that block through `$<identifier>` rather than duplicating its role in free prose. `{{...}}` placeholders remain appropriate only where a surface detail such as a proper name, institution label, or object label is intentionally unresolved. The same run must also emit a structured symbolic-entity map so later stages know which generic id corresponds to protagonist, counterpart, pressure figure, primary location, secondary location, institution, or plot object.

The generator must create new artifacts rather than mutate previous ones. A repeated seed run must produce a new iteration artifact under the same stage family so that validators can compare runs and detect whether refinement or correction actually occurred.

Skills are expected to call this tooling rather than bypass it. MacroPlan, ChapPlan, and MicroPlan must therefore be able to invoke symbolic generation with stage-specific parameters before any LLM refinement step is attempted.

## Decisions & Questions

### Question #1: Why does symbolic generation need its own DS instead of being implied by MicroPlan?

Response: The user explicitly asked for a dedicated clarification of what symbolic generation does and described it as CLI-like tooling with parameters. A separate DS makes that contract visible at the system level instead of hiding it inside one planning stage.

### Question #2: Why is randomness allowed at all if the generator is supposed to be controlled?

Response: The user wants random generation that remains constrained by the plan rules and input instructions. Seeded constrained randomness allows variation without giving up reproducibility or structural compliance.

### Question #3: Why are placeholders part of the symbolic generator instead of being forbidden immediately?

Response: The user wants concrete names and nuances to be added in a later LLM-mediated phase without inventing fake local defaults too early. Generic typed placeholders plus a separate entity map let the symbolic pass remain precise about structure while postponing surface realization to the appropriate stage.

## Conclusion

Symbolic plan generation is the deterministic front end of the SCRIPTA planning stack. It must expose explicit parameters, constrained randomness, placeholder-aware output, and append-only artifact creation so later skills can refine plans without obscuring their origin.
