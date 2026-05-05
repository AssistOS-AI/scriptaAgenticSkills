---
id: DS021
title: Character Command
status: implemented
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
| `name:` | Placeholder-form or resolved proper name for the character |
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

When `naming-state` has moved from placeholder to resolved, character names must satisfy all of the following:

1. They are internationally portable proper names rather than locale-locked forms unless a downstream project explicitly overrides that policy.
2. They do not embed role words such as `inspector`, `journalist`, `doctor`, `mayor`, or comparable occupational labels inside the proper name field.
3. Titles, professions, and social functions belong in separate descriptive fields or natural-language hints, not inside the canonical resolved name.

Constraint rules:

1. `development-type: static` is incompatible with `arc: positive-change`, `negative-change`, `corruption`, or `redemption`.
2. `complexity: flat` should not claim deep contradictions without an explicit exception note.
3. `role: protagonist` normally requires `development-type: dynamic` or `arc: flat`; purely inert protagonists are not valid default seeds.
4. A resolved character block that still contains placeholder tokens, raw `$<identifier>` references in the `name:` field, or role-bearing pseudo-names must fail downstream validation.

Example:

```text
@character-mira-solari define
name: Mira Solari
complexity: round
development-type: dynamic
archetype: hero
role: protagonist
desire: expose the protected structure behind a falsified drowning case
need: accept that justice requires public risk rather than procedural distance
fear: becoming another official who preserves order by burying the truth
lie: technical mastery and patience are enough to keep justice clean
truth: justice requires visible cost and moral exposure
conflict-mode: mixed
arc: tragic
contradictions: disciplined yet obsessive, compassionate yet controlling
relationships: Theo Mercer [cooperative], Selene Arden [conflictual], witness network [hierarchical]
```

## Decisions & Questions

### Question #1: Why are `lie` and `truth` mandatory?

Response: The STG character material and the broader craft theory cited there emphasize inner contradiction and transformation. `Lie` and `truth` make that change path explicit for planning and later drift detection.

### Question #2: Why does the command now constrain resolved names instead of leaving naming entirely to free text?

Response: The user explicitly observed that locale-specific or role-bearing names leaked into English exports and weakened the result. The resolved-name policy gives symbolic generation, refinement, and validation the same naming target.

## Conclusion

The character command must define people as systems of desire, contradiction, and change. That structure is essential for both generation and CAD-style validation.
