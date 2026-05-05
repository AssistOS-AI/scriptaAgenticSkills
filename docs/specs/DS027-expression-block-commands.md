---
id: DS027
title: Expression Block Commands
status: planned
owner: repository
summary: Defines the CNL commands for description, dialogue, narration, and interior monologue.
---

# DS027 Expression Block Commands

## Introduction

Expression blocks control how the story is told. They shape atmosphere, voice, psychological access, and delivery mode.

## Core Content

### Description command

Identifier prefix: `@description-<id>`. Allowed verbs: `apply`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | Scene, sequence, or chapter |
| `description-type:` | Setting, portrait, atmosphere, symbolic, or mixed |
| `focus:` | What is being described |
| `function:` | Mimetic, symbolic, narrative, or atmospheric role |
| `rhythm-effect:` | How the description slows or frames action |

### Dialogue command

Identifier prefix: `@dialogue-<id>`. Allowed verbs: `apply`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scene:` | Owning scene |
| `speakers:` | Participating characters |
| `exchange-type:` | Simple, question-answer, conflictual, or informative |
| `purpose:` | Action development, characterization, tension, revelation, or dynamism |
| `subtext:` | What is meant but not stated directly |

### Narration command

Identifier prefix: `@narration-<id>`. Allowed verbs: `apply`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | Scene, sequence, or chapter span |
| `narrator-mode:` | Subjective, objective, first-person, third-person, or another declared mode |
| `function:` | Informative, organizational, characterizing, expressive, or dynamizing |
| `time-handling:` | Real-time, summary, reordered, or mixed |

### Interior monologue command

Identifier prefix: `@interior-monologue-<id>`. Allowed verbs: `apply`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scene:` | Owning scene |
| `character:` | Whose mind is exposed |
| `function:` | Characterization, psychological insight, narrative depth, subjective filtering, or emotional intensity |
| `trigger:` | What causes the inner turn |
| `texture:` | Fragmented, reflective, immediate, recursive, or another declared mode |

Free natural-language lines may give actual example tones, fragments, or sensory directions, but the commands remain plan instructions rather than final prose.

The controlled domains are:

| Field | Allowed values |
| --- | --- |
| `description-type:` | `setting`, `portrait`, `atmosphere`, `symbolic`, `mixed` |
| `function:` on description | `mimetic`, `symbolic`, `narrative`, `atmospheric` |
| `rhythm-effect:` | `slow`, `frame`, `hold`, `contrast` |
| `exchange-type:` | `simple`, `question-answer`, `conflictual`, `informative` |
| `purpose:` on dialogue | `action-development`, `characterization`, `tension`, `information`, `dynamism` |
| `narrator-mode:` | `first-person`, `third-person`, `subjective`, `objective`, `close-third-person`, `omniscient-third-person` |
| `time-handling:` | `real-time`, `summary`, `reordered`, `mixed` |
| `function:` on interior monologue | `characterization`, `psychological-insight`, `narrative-depth`, `subjective-filtering`, `emotional-intensity` |
| `texture:` | `fragmented`, `reflective`, `immediate`, `associative`, `recursive` |

Constraint rules:

1. `description-type: atmosphere` should affect mood or tension rather than merely list décor.
2. `exchange-type: conflictual` must imply opposed intentions or values between speakers.
3. `narrator-mode: objective` should not directly expose private interior knowledge unless another block supplies that access.
4. `texture: fragmented` or `immediate` interior monologue should be paired with strong internal pressure rather than routine exposition.

Example:

```text
@description-archive-hall apply
scope: scene-archive-entry
description-type: atmosphere
focus: cold storage corridors and dust-heavy silence
function: atmospheric
rhythm-effect: slow
The description should imply institutional secrecy before the revelation lands.

@dialogue-prosecutor-standoff apply
scene: scene-courtroom-reversal
speakers: judge-ionescu, chief-prosecutor
exchange-type: conflictual
purpose: tension
subtext: both know the system is compromised, but only one will say it aloud

@narration-verdict-summary apply
scope: chapter-004
narrator-mode: close-third-person
function: organizational
time-handling: summary

@interior-monologue-memory-fracture apply
scene: scene-courtroom-reversal
character: judge-ionescu
function: psychological-insight
trigger: he cannot remember the witness's name after the reversal
texture: fragmented
```

## Decisions & Questions

### Question #1: Why are expression blocks still commands instead of leaving style entirely to later drafting?

Response: The STG source treats description, dialogue, narration, and interior monologue as functional parts of micro construction. Planning them explicitly lets the generation stage preserve intended delivery modes and lets validation check whether those modes were used appropriately.

## Conclusion

Expression block commands must tell the system how story material is rendered, not just what happens.
