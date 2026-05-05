---
id: DS015
title: Theme Command
status: planned
owner: repository
summary: Defines the CNL command for encoding theme as a conflict-driven moral and emotional proposition.
---

# DS015 Theme Command

## Introduction

The theme command encodes the deeper meaning pressure of the book. It must translate an abstract area of concern into a conflict-driven thematic system.

## Core Content

The canonical identifier is `@theme`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `topic:` | The abstract area of concern |
| `thematic-question:` | The core moral or existential question |
| `thematic-statement:` | The working answer the story explores |
| `pole-a:` | First side of the thematic tension |
| `pole-b:` | Opposing side of the thematic tension |
| `moral-pressure:` | Why the choice is ethically charged |
| `transformation-vector:` | How the theme should reshape the protagonist |
| `dramatization:` | How the theme becomes visible in action |

Optional fixed lines may include `universality:`, `market-resonance:`, and `counter-theme:`. Free natural-language lines may elaborate subthemes, symbolic motifs, or philosophical nuance.

The command must present theme as a tested tension rather than as a flat statement. Theme must remain dramatizable and must support character transformation.

For symbolic seed generation, the block must also include:

| Field | Allowed values |
| --- | --- |
| `topic:` | `love-connection`, `power-corruption`, `identity-self`, `good-evil`, `mortality-death`, `freedom-security`, `coming-of-age`, `nature-civilization`, `redemption`, `hybrid` |
| `moral-shape:` | `dilemma`, `sacrifice`, `corruption`, `resistance`, `transformation`, `reconciliation` |

Constraint rules:

1. `pole-a:` and `pole-b:` must be genuinely opposed rather than paraphrases.
2. `thematic-statement:` must answer the `thematic-question:` instead of restating it.
3. If `topic: redemption`, `transformation-vector:` must involve moral repair, atonement, or recovery rather than stasis.

Example:

```text
@theme define
topic: identity-self
moral-shape: dilemma
thematic-question: is it better to tell the truth even when it wounds the person you love?
thematic-statement: protective lies preserve comfort temporarily but corrode trust and identity
pole-a: truth
pole-b: emotional protection through concealment
moral-pressure: both options cause harm, but in different ways
transformation-vector: the protagonist moves from concealment to difficult honesty
dramatization: key revelations must be forced through conflict, not essay-like exposition
```

## Decisions & Questions

### Question #1: Why are `pole-a` and `pole-b` explicit fields?

Response: The STG source treats theme as conflict-driven. Explicit poles make that tension machine-visible and easier to preserve across chapters and validations.

## Conclusion

The theme command must produce a living thematic engine that later chapters and scenes can test repeatedly.
