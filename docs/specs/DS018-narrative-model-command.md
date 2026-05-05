---
id: DS018
title: Narrative Model Command
status: planned
owner: repository
summary: Defines the CNL command for selecting and adapting the abstract narrative model behind a book.
---

# DS018 Narrative Model Command

## Introduction

The narrative model command captures the abstract storytelling schema that informs a book beyond its concrete structure.

## Core Content

The canonical identifier is `@narrative-model`. The allowed verbs are `select`, `refine`, and `check`.

The `select` block must contain:

| Field | Meaning |
| --- | --- |
| `model-name:` | Name of the abstract model |
| `core-pattern:` | Short statement of the pattern logic |
| `fit-reason:` | Why this model fits the book |
| `transformation-logic:` | How change or return is modeled |
| `genre-compatibility:` | Why the model fits the intended genre |
| `adaptation-note:` | How the model is being bent or localized |

Optional fields may include `anti-formula-rule:` and `comparison:`. Free natural-language lines may discuss why the chosen model should not become a rigid template.

Typical model names may include `three-act`, `equilibrium-disruption-restoration`, `heroic-transformation`, `circular-return`, or other defensible abstract schemas.

The symbolic generation domain for `model-name:` is:

`three-act`, `freytag`, `save-the-cat`, `heroic-journey`, `episodic`, `nonlinear`, `kishotenketsu`, `fragmented`, `in-medias-res`, `circular`, `frame`, `equilibrium-disruption-restoration`

For symbolic seed generation, the block must also include:

| Field | Allowed values |
| --- | --- |
| `adaptation-strength:` | `faithful`, `adapted`, `hybridized` |

Constraint rules:

1. `model-name: save-the-cat` must imply catalyst, midpoint, dark point, and finale equivalents in the actual structure.
2. `model-name: heroic-journey` should not use a static protagonist arc unless the adaptation note justifies the deviation.
3. `model-name: episodic` must still define an overarching arc rather than only disconnected installments.

Example:

```text
@narrative-model select
adaptation-strength: adapted
model-name: equilibrium-disruption-restoration
core-pattern: stable order is broken, tested, and reconfigured into a new order
fit-reason: the book is driven less by quest travel than by escalating institutional destabilization
transformation-logic: both the legal system and the protagonist's identity end in altered equilibrium
genre-compatibility: suits psychological legal drama with strong ethical escalation
adaptation-note: the restored equilibrium remains morally damaged rather than cleanly repaired
```

## Decisions & Questions

### Question #1: Why is the command verb `select` instead of `define`?

Response: The STG distinction treats the model as an abstract schema chosen or inferred for the book, whereas the structure is the concrete arrangement that the system creates.

## Conclusion

The narrative model command must identify the abstract schema behind a book without confusing that schema with the book’s concrete structure.
