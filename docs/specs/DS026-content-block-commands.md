---
id: DS026
title: Content Block Commands
status: planned
owner: repository
summary: Defines the CNL commands for action, conflict, and event blocks as the dynamic core of chapter execution.
---

# DS026 Content Block Commands

## Introduction

Content blocks carry the actual dynamic substance of a narrative. This file defines the commands for action, conflict, and event.

## Core Content

### Action command

Identifier prefix: `@action-<id>`. Allowed verbs: `place`, `refine`, `check`.

Required fields for `place`:

| Field | Meaning |
| --- | --- |
| `scene:` | Owning scene |
| `actor:` | Who performs the action |
| `goal:` | What the action seeks to achieve |
| `obstacle:` | What resists the action |
| `result:` | Immediate consequence |

For symbolic seed generation, action blocks must also include:

| Field | Allowed values |
| --- | --- |
| `action-mode:` | `attempt`, `pursuit`, `evasion`, `negotiation`, `revelation-act`, `sacrifice` |

### Conflict command

Identifier prefix: `@conflict-<id>`. Allowed verbs: `place`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | Scene, sequence, chapter, or book |
| `type:` | Internal, external, relational, institutional, moral, or mixed |
| `forces:` | Opposing sides |
| `stakes:` | What may be lost or gained |
| `escalation:` | How the conflict intensifies |

### Event command

Identifier prefix: `@event-<id>`. Allowed verbs: `trigger`, `refine`, `check`.

Required fields:

| Field | Meaning |
| --- | --- |
| `scope:` | Where the event belongs |
| `event-type:` | Discovery, accident, crime, reversal, deadline, revelation, or another declared type |
| `trigger:` | What causes it |
| `impact:` | What it changes |
| `follow-through:` | What must happen next |

Free natural-language lines are allowed in all three command families to add nuance, but the fixed fields remain mandatory.

The controlled domains are:

| Field | Allowed values |
| --- | --- |
| `type:` | `internal`, `external-character`, `external-society`, `external-nature`, `external-supernatural`, `external-technology`, `mixed` |
| `event-type:` | `discovery`, `accident`, `crime`, `deadline`, `revelation`, `betrayal`, `reversal`, `loss`, `arrival`, `decision` |

Constraint rules:

1. Every `@action-<id>` must produce a meaningful `result:`; a null result requires explicit justification as failed attempt or blocked action.
2. `type: internal` conflicts must not be described only as two external parties without psychological tension.
3. `follow-through:` must name or imply a next obligation, not merely repeat `impact:`.

Example:

```text
@action-public-reversal place
action-mode: attempt
scene: scene-courtroom-reversal
actor: judge-ionescu
goal: reverse the verdict before the execution order is filed
obstacle: institutional procedure and hostile scrutiny
result: the reversal succeeds but draws public attention

@conflict-private-justice place
scope: chapter-004
type: mixed
forces: personal conscience versus judicial system preservation
stakes: justice, legitimacy, selfhood
escalation: each lawful intervention increases unlawful suspicion

@event-ledger-discovery trigger
scope: sequence-ledger-investigation
event-type: revelation
trigger: hidden archive entry is decoded
impact: shows the protagonist is not the first verdict manipulator
follow-through: investigation focus shifts from anomaly to conspiracy
```

## Decisions & Questions

### Question #1: Why are action, conflict, and event separate commands if they are tightly related?

Response: The STG source treats them as distinct micro block types. Keeping them separate lets scripts and validators measure whether a scene contains motion, pressure, and turning events in the right balance.

## Conclusion

The content block commands must encode how narrative movement actually happens. They are the dynamic core of the micro plan.
