---
id: DS019
title: Blueprint Command
status: planned
owner: repository
summary: Defines the CNL command for aligning premise, stages, turning points, and emotional layer.
---

# DS019 Blueprint Command

## Introduction

The blueprint command encodes the operational macro map of the book. It joins premise, structural stages, and emotional trajectory in a single planning surface.

## Core Content

The canonical identifier is `@blueprint`. The allowed verbs are `map`, `refine`, and `check`.

The `map` block must contain:

| Field | Meaning |
| --- | --- |
| `premise:` | Specific story situation derived from the idea |
| `exposition:` | What is established before escalation |
| `rising-action:` | How conflict and obstacles intensify |
| `midpoint-shift:` | What changes the story’s direction |
| `climax:` | Final confrontation or decisive moment |
| `resolution:` | Outcome and transformed state |
| `emotional-layer:` | Intended reader emotion per major stage |
| `stakes-ladder:` | How stakes escalate through the blueprint |

Optional fields may include `subplots:`, `reversal:`, and `blueprint-risk:`. Free natural-language lines may describe stage transitions or chapter grouping hints.

The command must align event structure and reader experience. A blueprint is invalid if it lists only stages without emotional pressure or only emotions without causal structure.

The symbolic emotional vocabulary for `emotional-layer:` must draw from:

`curiosity`, `intrigue`, `slight-tension`, `tension`, `anticipation`, `mistrust`, `surprise`, `shock`, `fear`, `dread`, `sadness`, `relief`, `satisfaction`, `bittersweet-release`, `reflection`

Constraint rules:

1. `rising-action:` must intensify pressure relative to `exposition:`.
2. The peak emotional token in `emotional-layer:` must occur at or immediately before `climax:`.
3. `stakes-ladder:` must move upward or deepen in cost; it must not flatten after the midpoint without explicit justification.

Example:

```text
@blueprint map
premise: a judge can reverse verdicts but each intervention erases a personal memory
exposition: routine legal life, private fatigue, first impossible reversal
rising-action: more reversals, growing public risk, memory fragmentation, relational strain
midpoint-shift: erased memories are revealed to involve a buried family crime
climax: one final verdict could expose the system but dissolve the self who delivers it
resolution: justice is partially corrected at the cost of irreversible personal reconfiguration
emotional-layer: curiosity -> tension -> dread -> shock -> bittersweet-release
stakes-ladder: professional risk -> personal memory loss -> family truth -> collapse of identity
```

## Decisions & Questions

### Question #1: Why is `emotional-layer` mandatory instead of optional annotation?

Response: The STG source explicitly defines a blueprint with an emotional impact layer. Treating it as optional would lose one of the core planning requirements.

## Conclusion

The blueprint command must act as the operational bridge between concept and chapter planning. It is the macro map from which chapter progression will be derived.
