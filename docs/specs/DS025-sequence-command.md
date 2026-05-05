---
id: DS025
title: Sequence Command
status: planned
owner: repository
summary: Defines the CNL command for sequences as multi-scene developmental threads.
---

# DS025 Sequence Command

## Introduction

The sequence command groups scenes into a larger developmental unit that advances one coherent narrative objective.

## Core Content

The canonical identifier prefix is `@sequence-<id>`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `chapter:` | Owning chapter or chapter span |
| `objective:` | Narrative purpose of the sequence |
| `scene-chain:` | Ordered scene identifiers |
| `continuity-thread:` | What causal or temporal thread unifies the sequence |
| `conflict-line:` | The pressure carried across scenes |
| `payoff:` | What the sequence accomplishes |

Optional fields may include `time-span:`, `investigation-line:`, `travel-line:`, or `reversal-point:`. Free natural-language lines may justify why the scenes belong together.

The command must mediate between scenes and chapters. A sequence is invalid if its scenes do not share a coherent developmental objective or if it duplicates chapter purpose without adding intermediate structure.

For symbolic seed generation, the block must also include:

| Field | Allowed values |
| --- | --- |
| `sequence-type:` | `investigation`, `travel`, `training`, `courtship`, `confrontation-chain`, `escape`, `downfall`, `recovery` |
| `link-logic:` | `causal`, `temporal`, `thematic`, `mixed` |
| `time-span:` | `continuous`, `discontinuous`, `montage`, `episodic` |

Constraint rules:

1. `scene-chain:` must normally contain at least two scenes.
2. `time-span: montage` or `episodic` should be supported by narration or acceleration planning rather than by scene-only continuity.
3. `link-logic:` must match `continuity-thread:`; a purely thematic thread cannot be mislabeled as tight causal continuity.

Example:

```text
@sequence-ledger-investigation define
sequence-type: investigation
link-logic: causal
chapter: chapter-005
objective: uncover who recorded earlier verdict anomalies
scene-chain: scene-archive-entry, scene-ledger-discovery, scene-false-mentor-confrontation
continuity-thread: the search for documentary proof of prior reversals
conflict-line: the protagonist wants truth while the institution wants plausible deniability
payoff: the investigation reveals a history of hidden manipulation but misidentifies its present source
```

## Decisions & Questions

### Question #1: Why is `scene-chain` a fixed field instead of an optional note?

Response: Sequences are defined by the scenes they organize. Without an explicit chain, scripts cannot test whether the sequence is structurally coherent.

## Conclusion

The sequence command must define the intermediate developmental layer that connects scene-level immediacy with chapter-level progression.
