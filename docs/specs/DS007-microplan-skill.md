---
id: DS007
title: MicroPlan Skill
status: implemented
owner: repository
summary: Defines the script-first subsystem that converts chapter plans into symbolic block structures.
---

# DS007 MicroPlan Skill

## Introduction

MicroPlan is the symbolic planning core of SCRIPTA. It converts chapter intent into abstract, ordered, reusable narrative blocks without writing final prose.

## Core Content

MicroPlan must be script-first and must maximize reusable symbolic logic. It may use bounded LLM help for classification or ambiguity resolution, but its primary output must be generated through explicit rules and transformations.

MicroPlan is the canonical consumer of `DS029-symbolic-plan-generation.md`. It must expose or reuse CLI-oriented symbolic generation tooling so that the first micro iteration is reproducible from parameters such as chapter count, scene density, target block balance, and random seed.

MicroPlan outputs must be written as CNL blocks rather than as hidden internal data only. Scene, sequence, content-block, expression-block, and rhythm-block commands must use the formats defined in `DS024` through `DS028`.

The symbolic ontology must include the following block families:

| Block family | Members | Contract |
| --- | --- | --- |
| Structural blocks | Scene, sequence, chapter | Organize narrative scale and local containment |
| Content blocks | Action, conflict, event | Move causality and stakes |
| Expressive blocks | Description, dialogue, narration, interior monologue | Shape delivery mode |
| Rhythm blocks | Suspense, cliffhanger, narrative pause, acceleration | Shape local pacing and tension |

MicroPlan must encode at least the following symbolic attributes for each block:

| Attribute | Meaning |
| --- | --- |
| Block identifier | Stable reference for later localization |
| Block type | Symbolic block family and member |
| Parent unit | Scene, sequence, or chapter containment |
| Narrative function | Why the block exists |
| Upstream reference | Link to MacroPlan and ChapPlan elements |
| Order index | Position inside the local chain |
| Tension effect | Raise, hold, redirect, or release pressure |
| Transition rule | How the next block may legally follow |

Scene construction must follow the STG scene model. A complete scene should normally encode introduction, development, conflict, resolution, and exit or transition, even if one of those stages is intentionally compressed. Sequence construction must group multiple scenes into a larger developmental thread. Chapter construction must group scenes and sequences into a unit with clear purpose and closure behavior.

MicroPlan must explicitly model the alternation of blocks. Description, dialogue, action, reflection, suspense, and pauses must not be arranged arbitrarily. Their order must serve conflict progression, reader orientation, and rhythm control.

The subsystem must also encode common failure patterns so later stages can detect them early. At minimum, it must recognize inert description, conflict-free scenes, rhythm collapse, unexplained emotional jumps, and symbolic sequences that fail to produce state change.

MicroPlan seed outputs may contain typed placeholders for names and surface references, but they must already contain valid enumerated classifier values, block order, and transition constraints. Placeholder usage must never replace structural specificity.

## Decisions & Questions

### Question #1: Why is MicroPlan abstract instead of partially prose-generating?

Response: The user explicitly requested symbolic generative plans and generic reusable code for predictable processing. The abstraction boundary is what keeps the subsystem auditable and reusable.

### Question #2: Why does the subsystem encode failure patterns directly?

Response: Many narrative failures arise at the block-composition level rather than only in final prose. Capturing them here lets SCRIPTA detect structural weaknesses before expensive generation and validation cycles.

## Conclusion

MicroPlan must remain the symbolic backbone of SCRIPTA. Later prose stages may enrich it, but they must not erase its structure or traceability.
