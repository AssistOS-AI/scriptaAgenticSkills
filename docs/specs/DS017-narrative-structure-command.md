---
id: DS017
title: Narrative Structure Command
status: planned
owner: repository
summary: Defines the CNL command for the concrete macro arrangement of stages and turning points in a specific book.
---

# DS017 Narrative Structure Command

## Introduction

The narrative structure command encodes how this specific book is arranged in time, causality, and escalation.

## Core Content

The canonical identifier is `@narrative-structure`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `macro-form:` | Linear, non-linear, circular, or another declared pattern |
| `beginning:` | Setup function and initial equilibrium |
| `inciting-incident:` | The disruption that starts the story |
| `middle:` | Main conflict development |
| `plot-point-1:` | Irreversible entry into the main trajectory |
| `midpoint:` | Reconfiguration or revelation |
| `plot-point-2:` | Narrowing toward conclusion |
| `climax:` | Peak confrontation |
| `resolution:` | New equilibrium and final consequences |
| `causal-rule:` | How events must follow one another |

Optional fields may include `time-logic:`, `frequency-rule:`, and `information-order:`. Free natural-language lines may clarify pacing or discourse choices.

The command describes the concrete structure of this book, not a reusable archetypal model. It must therefore refer to the actual arrangement of stages and tensions that the later chapter plan will realize.

For symbolic seed generation, the block must also include:

| Field | Allowed values |
| --- | --- |
| `macro-form:` | `linear`, `nonlinear`, `circular`, `episodic`, `fragmented`, `in-medias-res-led`, `kishotenketsu-driven`, `frame-based` |
| `information-order:` | `chronological`, `delayed-reveal`, `flashback-rich`, `parallel-threaded`, `recontextualizing` |
| `causal-density:` | `tight`, `moderate`, `loose` |

Constraint rules:

1. `macro-form: nonlinear`, `fragmented`, or `in-medias-res-led` must not use `information-order: chronological` as the only organizing logic.
2. `macro-form: kishotenketsu-driven` requires the midpoint or climax equivalent to behave as a reinterpretive twist, not only as confrontation.
3. `causal-density:` may vary, but `causal-rule:` must still keep the book inferably coherent.

Example:

```text
@narrative-structure define
information-order: delayed-reveal
causal-density: tight
macro-form: linear
beginning: establish the judge's routine and moral fatigue
inciting-incident: he discovers the first memory-erasing verdict reversal
middle: each intervention deepens legal and personal instability
plot-point-1: he chooses to interfere publicly rather than privately
midpoint: he realizes key erased memories involve his own family history
plot-point-2: the system identifies him as the source of verdict anomalies
climax: he must decide between one final correction and the loss of his remaining self-coherence
resolution: justice is partially restored but his identity is reconfigured permanently
causal-rule: every intervention must generate a visible legal and personal consequence
```

## Decisions & Questions

### Question #1: Why is `causal-rule` mandatory?

Response: The STG theory treats coherence as the meaningful organization of events rather than mere chronology. The causal rule makes that requirement explicit and machine-checkable.

## Conclusion

The narrative structure command must state how this book actually moves from beginning to ending. It is the structural blueprint for later planning stages.
