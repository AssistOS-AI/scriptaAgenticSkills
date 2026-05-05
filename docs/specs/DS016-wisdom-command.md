---
id: DS016
title: Wisdom Command
status: planned
owner: repository
summary: Defines the CNL command for encoding the reflective and interpretive depth that the book should produce.
---

# DS016 Wisdom Command

## Introduction

The wisdom command captures the reflective ambition of the book. It tells the system what kind of human understanding the narrative should generate beyond entertainment.

## Core Content

The canonical identifier is `@wisdom`. The allowed verbs are `define`, `refine`, and `check`.

The `define` block must contain:

| Field | Meaning |
| --- | --- |
| `cognitive:` | What the story should help the reader understand |
| `emotional:` | What emotional intelligence or sensitivity it should activate |
| `moral:` | What consequences or ethical tensions it should reveal |
| `reflexive:` | What self-interpretive movement it should invite |
| `experiential:` | What lived experience quality it should convey |
| `perspective-mode:` | Single perspective, multi-perspective, or polyphonic design |
| `openness:` | How much interpretive openness the ending should preserve |
| `anti-didactic-rule:` | How the text avoids direct moral preaching |

Optional fixed lines may include `retrospection:`, `show-dont-tell:`, and `identity-pressure:`. Free natural-language lines may describe the intended wisdom effect more fully.

The command must treat wisdom as a multilayer process involving cognition, emotion, morality, and reflection. A wisdom block that merely says “teach a lesson” is invalid.

For symbolic seed generation, the block must also include:

| Field | Allowed values |
| --- | --- |
| `wisdom-dominant-dimension:` | `cognitive`, `emotional`, `moral`, `reflexive`, `experiential`, `balanced` |
| `perspective-mode:` | `single-perspective`, `multi-perspective`, `polyphonic` |
| `openness:` | `closed`, `partially-open`, `open` |

Constraint rules:

1. `wisdom-dominant-dimension:` may prioritize one dimension, but the five core dimensions must still remain present.
2. `perspective-mode: polyphonic` should not be paired with an `anti-didactic-rule:` that collapses all meaning into one approved answer.
3. `openness: closed` still requires dramatized consequence rather than explicit sermonizing.

Example:

```text
@wisdom define
wisdom-dominant-dimension: balanced
cognitive: reveal how legal systems distort memory and selfhood
emotional: create empathy for ethical fatigue rather than heroic purity
moral: force the reader to weigh justice against personal continuity
reflexive: invite reflection on what remains of the self after repeated moral compromise
experiential: keep the reader inside lived uncertainty rather than detached judgement
perspective-mode: polyphonic
openness: partially open
anti-didactic-rule: no explicit sermonizing; insight must emerge through consequences and conflicting voices
```

## Decisions & Questions

### Question #1: Why does the command require an explicit `anti-didactic-rule`?

Response: The STG source emphasizes interpretive openness, show-don’t-tell, and wisdom that emerges through narrative experience. This rule prevents later stages from reducing wisdom to exposition.

## Conclusion

The wisdom command must specify the reflective depth profile of the book in a form that later stages can preserve and validate.
