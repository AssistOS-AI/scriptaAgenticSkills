---
id: DS028
title: Rhythm Block Commands
status: planned
owner: repository
summary: Defines the CNL commands for suspense, cliffhanger, narrative pause, acceleration, and block alternation.
---

# DS028 Rhythm Block Commands

## Introduction

Rhythm blocks control the lived pace of the narrative. They shape anticipation, interruption, reflection, speed, and the alternation of block types.

## Core Content

### Suspense command

Identifier prefix: `@suspense-<id>`. Allowed verbs: `build`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | Scene, chapter, or longer span |
| `suspense-type:` | Emotional, cognitive, situational, or dramatic |
| `uncertainty:` | What outcome remains unknown |
| `delay-technique:` | Delayed information, interruption, foreshadowing, danger, or time-slowing |
| `payoff-zone:` | Where the tension should resolve or shift |

### Cliffhanger command

Identifier prefix: `@cliffhanger-<id>`. Allowed verbs: `cut`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | End of scene or chapter |
| `cliffhanger-type:` | Danger, interrupted revelation, critical decision, or unresolved confrontation |
| `cut-moment:` | Exact unresolved point |
| `continuation-pressure:` | Why the reader must continue |

### Narrative pause command

Identifier prefix: `@pause-<id>`. Allowed verbs: `hold`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | Scene, sequence, or chapter |
| `pause-function:` | Descriptive, explanatory, psychological, atmospheric, or rhythmic |
| `focus:` | What the pause highlights |
| `resume-trigger:` | What gets the action moving again |

### Acceleration command

Identifier prefix: `@acceleration-<id>`. Allowed verbs: `compress`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | Scene, sequence, or chapter transition |
| `time-compression:` | What period or action is condensed |
| `kept-events:` | What must remain visible despite compression |
| `reason:` | Why acceleration is needed |

### Alternation command

Identifier prefix: `@alternation-<id>`. Allowed verbs: `tune`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | Scene, chapter, or sequence |
| `pattern:` | Declared alternation pattern such as action -> description -> dialogue -> pause |
| `goal:` | Why this alternation is used |
| `failure-avoidance:` | What monotony or chaos it prevents |

The controlled domains are:

| Field | Allowed values |
| --- | --- |
| `suspense-type:` | `emotional`, `cognitive`, `situational`, `dramatic` |
| `delay-technique:` | `delayed-information`, `foreshadowing`, `interruption`, `time-slowing`, `danger`, `mixed` |
| `cliffhanger-type:` | `danger`, `interrupted-revelation`, `critical-decision`, `unresolved-confrontation` |
| `pause-function:` | `descriptive`, `explanatory`, `psychological`, `atmospheric`, `rhythmic` |
| `acceleration-mode:` | `transition-skip`, `montage`, `summary-burst`, `pursuit-compression` |

Constraint rules:

1. `suspense-type: dramatic` requires the reader to know something the focal character does not fully know.
2. `cliffhanger-type:` is valid only at the end of a scene or chapter scope.
3. `pause-function: explanatory` must still preserve `resume-trigger:` so the pause does not become narrative drift.
4. `acceleration-mode:` must retain the `kept-events:` that preserve continuity across the compressed interval.

Example:

```text
@suspense-ledger build
scope: sequence-ledger-investigation
suspense-type: cognitive
uncertainty: whether the hidden ledger proves conspiracy or only bureaucratic error
delay-technique: mixed
payoff-zone: event-ledger-discovery

@cliffhanger-memory-cut cut
scope: chapter-004
cliffhanger-type: interrupted-revelation
cut-moment: the judge recognizes the erased family name and the chapter ends before he speaks it
continuation-pressure: the reader needs the identity link and its consequences

@pause-corridor hold
scope: scene-archive-entry
pause-function: atmospheric
focus: institutional coldness and the character's anticipatory dread
resume-trigger: the archivist unlocks the hidden room

@acceleration-travel compress
scope: chapter-006
acceleration-mode: montage
time-compression: three weeks of procedural hearings
kept-events: rising media scrutiny, worsening memory gaps, daughter's mistrust
reason: routine repetition should not exhaust the chapter

@alternation-courtroom tune
scope: scene-courtroom-reversal
pattern: narration -> dialogue -> action -> interior-monologue -> cliffhanger
goal: sustain procedural clarity while escalating pressure
failure-avoidance: avoids static exposition and dialogue monotony
```

## Decisions & Questions

### Question #1: Why is alternation modeled as its own command?

Response: The STG source identifies alternation of blocks as a key rhythm mechanism rather than as an accidental side effect. A dedicated command lets scripts and validators reason about pacing design explicitly.

## Conclusion

Rhythm block commands must make pace and tension explicit. They are essential for keeping SCRIPTA plans structurally alive instead of merely well-labeled.
