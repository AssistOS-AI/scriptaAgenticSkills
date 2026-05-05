---
id: DS014
title: Central Idea Command
status: planned
owner: repository
summary: Defines the CNL command for encoding the central idea as a high-tension narrative proposition.
---

# DS014 Central Idea Command

## Introduction

The central idea command encodes the book’s narrative promise. It must turn an abstract concept into a concise proposition driven by desire, opposition, stakes, and curiosity.

## Core Content

The canonical identifier is `@central-idea`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain the following fixed labeled lines:

| Field | Meaning |
| --- | --- |
| `hook:` | What makes the concept immediately interesting |
| `protagonist:` | Who anchors the story promise |
| `desire:` | What the protagonist wants |
| `opposition:` | What stands in the way |
| `stakes:` | What is lost or gained |
| `dilemma:` | The impossible or costly choice |
| `story-question:` | The unresolved narrative question |
| `audience-fit:` | Intended readership or genre fit |
| `pitch-test:` | One- or two-sentence pitch |

Optional fixed lines may include `market-position:`, `comparable:`, and `risk:`. Free natural-language lines may add extra hook logic, contradiction framing, or commercial nuance.

The command must express the central idea as a dynamic proposition rather than as a topic label. A block that says only “justice” or “identity” is invalid. The line set must make conflict visible from the start.

For symbolic seed generation, the block must also include:

| Field | Allowed values |
| --- | --- |
| `hook-pattern:` | `contradiction`, `what-if`, `forbidden-combination`, `hidden-truth`, `costed-power`, `role-inversion` |
| `tension-source:` | `internal`, `external`, `mixed` |
| `naming-state:` | `placeholder`, `resolved` |

Constraint rules:

1. `hook-pattern:` and `tension-source:` must never be placeholders.
2. `naming-state: placeholder` permits typed placeholders in `protagonist:` and `pitch-test:` but not in classifier lines.
3. `pitch-test:` must preserve the same protagonist, desire, opposition, and stakes already declared above it.

Example:

```text
@central-idea define
hook-pattern: costed-power
tension-source: mixed
naming-state: resolved
hook: a judge can rewrite verdicts but loses a personal memory every time
protagonist: aging appellate judge
desire: save innocent defendants without losing himself
opposition: the cost of each intervention and the political system around him
stakes: identity, justice, and public trust
dilemma: preserve memory or keep correcting corrupted verdicts
story-question: how much truth is worth if every act of justice erases the self?
audience-fit: legal thriller, psychological drama
pitch-test: A judge who can rewrite verdicts at the cost of his memories must decide how much selfhood justice is worth.
This idea should feel morally charged rather than supernatural for its own sake.
```

## Decisions & Questions

### Question #1: Why is `pitch-test` mandatory?

Response: The STG source emphasizes communicable clarity and hook strength. The pitch test forces the command to prove that the idea is both concise and dramatically intelligible.

## Conclusion

The central idea command must encode a complete narrative promise, not a decorative slogan. Later stages depend on it as the first high-level story contract.
