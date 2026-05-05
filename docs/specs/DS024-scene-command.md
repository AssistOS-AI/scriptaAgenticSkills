---
id: DS024
title: Scene Command
status: planned
owner: repository
summary: Defines the CNL command for scenes as real-time micro-systems of action, tension, and transition.
---

# DS024 Scene Command

## Introduction

The scene command encodes the smallest full dramatic unit in the planning system. It must capture immediacy, conflict, and transition.

## Core Content

The canonical identifier prefix is `@scene-<id>`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `chapter:` | Owning chapter identifier |
| `time-space:` | The unified temporal and spatial frame |
| `introduction:` | How the scene establishes itself |
| `development:` | How momentum builds |
| `conflict:` | What tension crystallizes here |
| `resolution:` | What changes before exit |
| `exit:` | How the scene transitions onward |
| `participants:` | Characters present or focalized |
| `state-change:` | What is different at the end |

Optional fields may include `showing-mode:`, `focalization:`, and `micro-stakes:`. Free natural-language lines may add gesture, subtext, or atmosphere hints.

The scene command must model real-time narrative presence rather than broad summary. If a unit mainly summarizes a long interval, it belongs to narration or acceleration rather than to a scene command.

The symbolic generation domains are:

| Field | Allowed values |
| --- | --- |
| `showing-mode:` | `direct-showing`, `compressed-showing`, `dialogic`, `introspective`, `mixed` |
| `focalization:` | `external`, `internal-single`, `internal-shifting`, `zero` |
| `exit-mode:` | `cliffhanger`, `handoff`, `transition`, `pause`, `reversal-cut` |

Constraint rules:

1. `showing-mode: introspective` should normally be paired with interior-monologue or strong subjective narration support.
2. `focalization: internal-single` requires the scene to preserve whose perspective governs interpretation.
3. `exit-mode: cliffhanger` implies unresolved pressure rather than a fully closed local state.

Example:

```text
@scene-courtroom-reversal define
chapter: chapter-004
time-space: appellate chamber during the emergency session
introduction: procedural routine with subtle bodily strain
development: objections intensify while the judge pushes an impossible review
conflict: legal correctness versus institutional self-protection
resolution: the verdict changes but the judge forgets the key witness's name
exit: reporters gather as the scene cuts to public fallout
participants: judge-ionescu, chief-prosecutor, defense-counsel, observers
state-change: the reversal becomes public and memory loss is now externally visible
```

## Decisions & Questions

### Question #1: Why does the scene command require `state-change` explicitly if resolution already exists?

Response: `Resolution` describes what happens at the end of the scene. `State-change` makes the before-versus-after difference machine-readable for continuity and progression checks.

## Conclusion

The scene command must define scenes as immediate, state-changing dramatic units with clear beginnings, tensions, and exits.
