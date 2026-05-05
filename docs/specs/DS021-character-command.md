---
id: DS021
title: Character Command
status: planned
owner: repository
summary: Defines the CNL command for building characters as engines of desire, conflict, and transformation.
---

# DS021 Character Command

## Introduction

The character command defines the human engine of the narrative. It must encode the pressures that make a character dramatically meaningful and validation-ready.

## Core Content

The canonical identifier prefix is `@character-<id>`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `role:` | Protagonist, antagonist, ally, foil, witness, mentor, or another declared role |
| `desire:` | What the character wants outwardly |
| `need:` | What the character must learn or become inwardly |
| `fear:` | What the character avoids or dreads |
| `lie:` | Limiting belief carried into the story |
| `truth:` | Corrective insight required for transformation |
| `conflict-mode:` | External, internal, or mixed |
| `arc:` | Static, positive change, negative change, tragic, circular, or another declared arc |
| `contradictions:` | Tensions that make the character non-flat |
| `relationships:` | Key relational anchors or oppositions |

Optional fields may include `archetype:`, `ghost:`, `moral-ambiguity:`, and `voice-note:`. Free natural-language lines may elaborate psychology or scene-level use.

The command must support both psychological depth and structural function. A character definition is incomplete if it names personality traits but omits desire, conflict, and arc pressure.

For symbolic seed generation, the block must also include:

| Field | Allowed values |
| --- | --- |
| `complexity:` | `flat`, `round` |
| `development-type:` | `dynamic`, `static` |
| `role:` | `protagonist`, `antagonist`, `secondary`, `ally`, `mentor`, `witness`, `herald`, `shapeshifter`, `threshold-guardian`, `trickster`, `anti-hero` |
| `arc:` | `positive-change`, `negative-change`, `flat`, `corruption`, `redemption`, `tragic`, `circular` |
| `archetype:` | `hero`, `mentor`, `shadow`, `herald`, `shapeshifter`, `trickster`, `threshold-guardian`, `ally`, `mother-figure`, `father-figure`, `innocent`, `outcast` |

The relationship vocabulary inside `relationships:` must draw from the STG set: `conflictual`, `cooperative`, `mentor-student`, `hierarchical`, `romantic`, `rivalry`, `ambiguous`, `betrayal-based`, `familial`.

Constraint rules:

1. `development-type: static` is incompatible with `arc: positive-change`, `negative-change`, `corruption`, or `redemption`.
2. `complexity: flat` should not claim deep contradictions without an explicit exception note.
3. `role: protagonist` normally requires `development-type: dynamic` or `arc: flat`; purely inert protagonists are not valid default seeds.

Example:

```text
@character-judge-ionescu define
complexity: round
development-type: dynamic
archetype: hero
role: protagonist
desire: correct unjust verdicts without losing authority
need: accept that justice without self-knowledge becomes destructive
fear: becoming morally irrelevant and personally empty
lie: control and procedural mastery are enough to keep justice pure
truth: justice requires vulnerability and irreversible ethical cost
conflict-mode: mixed
arc: tragic
contradictions: disciplined yet obsessive, compassionate yet controlling
relationships: clashes with the chief prosecutor, protects his daughter, depends on a compromised archivist
```

## Decisions & Questions

### Question #1: Why are `lie` and `truth` mandatory?

Response: The STG character material and the broader craft theory cited there emphasize inner contradiction and transformation. `Lie` and `truth` make that change path explicit for planning and later drift detection.

## Conclusion

The character command must define people as systems of desire, contradiction, and change. That structure is essential for both generation and CAD-style validation.
