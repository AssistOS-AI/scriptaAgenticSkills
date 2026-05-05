---
id: DS020
title: Plot Commands
status: planned
owner: repository
summary: Defines the CNL commands for plot elements and plot devices as distinct but related planning surfaces.
---

# DS020 Plot Commands

## Introduction

Plot planning in SCRIPTA must distinguish between the active material of the story and the devices used to present or modulate that material. This file defines both command families.

## Core Content

### Plot element command

The canonical identifier prefix is `@plot-element-<id>`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `category:` | `physical-object`, `information`, `relationship`, `event`, or `abstract-concept` |
| `function:` | Conflict generation, motivation, obstacle, revelation, or redirection |
| `stakes:` | What changes if the element appears, hides, or is lost |
| `holders:` | Who controls or seeks it |
| `activation:` | When or how it affects the plot |
| `payoff-zone:` | Where it must matter later |

Optional fields may include `secrecy:`, `symbolic-weight:`, and `misread-risk:`.

For symbolic seed generation, plot-element blocks must also include:

| Field | Allowed values |
| --- | --- |
| `category:` | `physical-object`, `information`, `relationship`, `event`, `abstract-concept` |
| `subtype:` | `artifact`, `key`, `document`, `weapon`, `secret`, `prophecy`, `evidence`, `memory`, `promise`, `debt`, `betrayal`, `inheritance`, `accident`, `crime`, `deadline`, `discovery`, `curse`, `blessing`, `revenge`, `destiny`, `fate` |
| `function:` | `conflict-generation`, `motivation`, `obstacle`, `revelation`, `redirection` |

### Plot device command

The canonical identifier prefix is `@plot-device-<id>`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `device-type:` | `macguffin`, `chekhov-gun`, `red-herring`, `foreshadowing`, or another declared device |
| `purpose:` | Why the device is used |
| `setup-zone:` | Where it is introduced |
| `payoff-zone:` | Where it must resolve or mislead |
| `fairness-rule:` | How the device remains narratively fair |

Optional fields may include `misdirection-target:` and `reader-knowledge:`.

The symbolic device domain for `device-type:` is:

`macguffin`, `chekhov-gun`, `red-herring`, `foreshadowing`, `flashback`, `flash-forward`, `delayed-reveal`

Constraint rules:

1. `category:` and `subtype:` must be compatible; for example, `category: physical-object` cannot use `subtype: revenge`.
2. `device-type: chekhov-gun` requires an early `setup-zone:` and a later concrete `payoff-zone:`.
3. `device-type: red-herring` requires `fairness-rule:` to show why the misdirection is not arbitrary cheating.

Example:

```text
@plot-element-verdict-ledger define
category: information
subtype: evidence
function: revelation
stakes: exposes that past verdict reversals were already happening before the protagonist discovered them
holders: chief archivist, hidden reform network
activation: discovered midway through the investigation sequence
payoff-zone: midpoint revelation and final legal confrontation

@plot-device-false-mentor define
device-type: red-herring
purpose: redirect suspicion toward the archivist before the real institutional source is known
setup-zone: early investigation chapters
payoff-zone: late-middle correction scene
fairness-rule: clues must support the suspicion without making the correction feel arbitrary
```

## Decisions & Questions

### Question #1: Why are plot elements and plot devices separate commands instead of one mixed block?

Response: The STG source explicitly distinguishes what happens in the story from how that happening is narratively managed. Keeping separate commands preserves that difference for both scripts and LLMs.

## Conclusion

SCRIPTA must model both plot material and plot devices explicitly. Their distinction is necessary for coherent planning and later validation.
