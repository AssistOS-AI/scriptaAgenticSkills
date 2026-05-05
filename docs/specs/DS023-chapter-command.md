---
id: DS023
title: Chapter Command
status: planned
owner: repository
summary: Defines the CNL command for chapter planning as a purposeful micro-narrative with continuity obligations.
---

# DS023 Chapter Command

## Introduction

The chapter command turns whole-book progression into units that are readable, purposeful, and stateful.

## Core Content

The canonical identifier prefix is `@chapter-<nnn>`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `chapter-role:` | Structural function in the book |
| `purpose:` | Why the chapter exists in the book |
| `input-state:` | Conditions at entry |
| `output-state:` | Conditions at exit |
| `conflict:` | Main chapter pressure |
| `stakes:` | What is at risk locally |
| `opening-mode:` | How the chapter begins |
| `development-mode:` | How tension grows |
| `closing-mode:` | Partial resolution, revelation, or escalation |
| `continuity-obligations:` | Facts later chapters must preserve |
| `thematic-focus:` | Which thematic pressure dominates here |
| `rhythm-note:` | Pace expectation for the chapter |

Optional fields may include `cliffhanger:`, `chapter-link:`, and `sequence-anchors:`. Free natural-language lines may explain why this chapter is indispensable.

A valid chapter command must define significant change. If the `output-state` is materially indistinguishable from the `input-state` and no justified rhythm function exists, the chapter is defective.

The symbolic generation domains are:

| Field | Allowed values |
| --- | --- |
| `chapter-role:` | `setup`, `escalation`, `investigation`, `revelation`, `reversal`, `culmination`, `aftermath`, `bridge` |
| `opening-mode:` | `contextual-setup`, `in-medias-res`, `aftermath-entry`, `dialogue-entry`, `action-entry`, `mystery-entry` |
| `development-mode:` | `escalation`, `investigation`, `confrontation`, `pursuit`, `revelation-ladder`, `psychological-pressure` |
| `closing-mode:` | `partial-resolution`, `revelation`, `reversal`, `cliffhanger`, `aftermath`, `open-question` |
| `rhythm-note:` | `restrained`, `balanced`, `escalating`, `breathless`, `wave-like` |

Constraint rules:

1. `closing-mode: cliffhanger` requires either `cliffhanger:` or a linked `@cliffhanger-<id>` block.
2. `chapter-role: aftermath` should not default to `rhythm-note: breathless` unless the aftermath itself is unstable or violent.
3. If `input-state:` and `output-state:` are nearly identical, `chapter-role:` must justify the chapter as a pause, bridge, or interpretive reframe.

Example:

```text
@chapter-004 define
chapter-role: revelation
purpose: move the judge from controlled experimentation to irreversible public exposure
input-state: he still believes the reversals can stay private
output-state: his intervention is now visible and politically dangerous
conflict: save an innocent defendant before the media notices the anomaly
stakes: legal credibility, memory stability, family trust
opening-mode: contextual-setup
development-mode: escalation
closing-mode: reversal
continuity-obligations: the daughter must notice the first explicit memory gap
thematic-focus: truth versus protective concealment
rhythm-note: escalating
```

## Decisions & Questions

### Question #1: Why is `rhythm-note` a chapter-level field when rhythm also exists at block level?

Response: STG treats chapters as large narrative units with their own pacing function. The chapter note sets the high-level rhythm that later scene and rhythm-block commands must respect.

## Conclusion

The chapter command must define each chapter as a state-changing unit with explicit purpose, continuity, and rhythm.
