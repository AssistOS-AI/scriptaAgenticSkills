---
id: DS022
title: Worldbuilding Command
status: planned
owner: repository
summary: Defines the CNL commands for world subsystems and rules that constrain narrative possibility.
---

# DS022 Worldbuilding Command

## Introduction

Worldbuilding in SCRIPTA is systemic rather than decorative. The command family must describe the rules and subsystems that make a fictional world coherent and conflict-generating.

## Core Content

The main command families are `@world-subsystem-<id>` and `@world-rule-<id>`. Allowed verbs are `define`, `refine`, and `check`.

### Subsystem command

The `@world-subsystem-<id> define` block must contain:

| Field | Meaning |
| --- | --- |
| `domain:` | `physics`, `society`, `economy`, `technology`, `magic`, `time`, `geography`, `biology`, or another justified subsystem |
| `function:` | What this subsystem contributes to the world |
| `conflict-output:` | What kinds of conflicts it naturally creates |
| `visibility:` | Explicit, implicit, or mostly structural |

### Rule command

The `@world-rule-<id> define` block must contain:

| Field | Meaning |
| --- | --- |
| `subsystem:` | Which subsystem owns the rule |
| `rule:` | The actual rule or law |
| `cost:` | Trade-off or limiting factor |
| `exception:` | Any justified deviation |
| `traceability:` | How the rule remains inferable in the text |
| `violation-effect:` | What happens if the rule is broken |

Optional fields may include `early-establishment:` and `genre-note:`. Free natural-language lines may explain symbolic meaning or reader expectations.

The symbolic generation domains are:

| Field | Allowed values |
| --- | --- |
| `domain:` | `physics`, `society`, `economy`, `technology`, `magic`, `metaphysics`, `time`, `geography`, `biology` |
| `visibility:` | `explicit`, `implicit`, `structural` |
| `rule-type:` | `physical-limitation`, `social-norm`, `resource-scarcity`, `technological-restriction`, `metaphysical-cost`, `temporal-law` |
| `magic-determinacy:` | `hard`, `semi-hard`, `soft` |

Constraint rules:

1. `magic-determinacy:` is valid only when `domain:` is `magic`, `metaphysics`, or a speculative `technology` analogue.
2. Every `@world-rule-<id>` must imply either a cost, a limitation, or a conflict-producing consequence.
3. `visibility: implicit` still requires `traceability:` strong enough that the rule can be inferred from the manuscript.

Example:

```text
@world-subsystem-memory-law define
domain: metaphysics
magic-determinacy: semi-hard
function: governs how verdict rewrites alter personal identity
conflict-output: moral conflict, epistemic instability, institutional fear
visibility: explicit

@world-rule-memory-erasure define
subsystem: memory-law
rule-type: metaphysical-cost
rule: each successful verdict rewrite erases one autobiographical memory linked to moral judgement
cost: justice gains produce self-loss
exception: no exception is available without corrupting the verdict itself
traceability: every rewrite must leave visible gaps in personal recollection and relational continuity
violation-effect: if ignored, the world becomes incoherent and validation must fail the manuscript
```

## Decisions & Questions

### Question #1: Why are subsystem and rule separated into two commands?

Response: The STG worldbuilding material distinguishes multi-layered systems from the individual rules inside those systems. Separate commands keep world architecture understandable and script-friendly.

## Conclusion

The worldbuilding commands must define a functional world, not an ornamental backdrop. Rules must remain conflict-producing and traceable.
