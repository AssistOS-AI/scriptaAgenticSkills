---
id: DS005
title: MacroPlan Skill
status: implemented
owner: repository
summary: Defines the MacroPlan subsystem and the required macro narrative package it must produce.
---

# DS005 MacroPlan Skill

## Introduction

MacroPlan is the subsystem that transforms the initial book brief into a coherent macro narrative package. It defines the skeleton of the book before chapter planning begins.

## Core Content

MacroPlan must be skill-orchestrated, seed-first, and schema-bound. Its job is not to produce final prose, but to construct a defensible macro architecture that later stages can consume deterministically through CNL plan files.

MacroPlan must start from symbolic seed generation as defined in `DS029-symbolic-plan-generation.md`. The skill must call the symbolic generator for the macro stage, producing first-iteration CNL files that use controlled value domains and explicit placeholders where names, locations, institutions, or surface-level specifics are not yet resolved.

The macro package must include the following components:

| Component | Required content | Why it matters |
| --- | --- | --- |
| Central idea | Hook, protagonist, desire, opposition, stakes, dilemma, story question, audience fit | Defines the narrative promise |
| Theme | Topic, thematic question, thematic statement, conflict polarity, moral tension | Defines the meaning pressure of the book |
| Wisdom | Cognitive, emotional, moral, reflexive, and experiential aims | Defines reflective depth |
| Narrative structure | Concrete arrangement of beginning, middle, end, turning points, climax, and resolution | Defines this book’s actual progression |
| Narrative model | Reusable abstract model such as three-act, circular, heroic transformation, or equilibrium-disruption-restoration | Defines the conceptual pattern |
| Blueprint | Premise, inciting incident, plot points, midpoint, climax, resolution, emotional layer | Aligns structural and emotional movement |
| Plot elements and devices | Key objects, information, relationships, events, concepts, plus device usage such as Chekhov’s gun or red herrings where relevant | Defines causal material and delivery strategy |
| Characters | Roles, desire, need, fear, contradiction, lie, truth, arc, relations, ambiguity | Defines human engines of the plot |
| Worldbuilding | World subsystems, rules, constraints, exceptions, costs, conflict generators | Defines what is possible in the story world |

MacroPlan outputs must be written as CNL command blocks. At minimum, the subsystem must emit command families defined in `DS014` through `DS022`, starting with `define` blocks and optionally followed by later `refine` blocks.

MacroPlan must not skip directly from a brief to freeform LLM-authored macro prose. Any LLM participation must happen indirectly through skill logic that reads the symbolic seed files, preserves their identifiers, and writes successor artifacts rather than mutating the seed in place.

The central idea must remain concise but information-dense. It must be expressible as a narrative proposition rather than as a vague topic. The output should answer not only what the story is about, but why the concept immediately creates tension.

The theme must remain conflict-driven and dramatizable. MacroPlan must not settle for abstract nouns alone. It must turn topic into thematic question and thematic question into thematic statement so later stages can test theme through action.

The wisdom component must express what kind of reflective experience the book is designed to produce. It must make explicit whether the narrative aims primarily at self-knowledge, moral ambiguity, plural perspectives, experiential authenticity, or existential reflection.

Structure and model must remain separate. Structure describes how this book actually unfolds. Model identifies the deeper schema that organizes that unfolding.

The blueprint must align the structural stages with the emotional layer. Each major stage must record both what happens and what the reader is meant to feel.

Character outputs must go beyond naming roles. MacroPlan must record desire, conflict, transformation pressure, and relationship function. A main character without clear desire and tension is not valid macro output.

Worldbuilding output must remain systemic. Decorative setting notes are insufficient unless they explain rules, costs, or institutions that actually generate conflict and shape action.

## Decisions & Questions

### Question #1: Why does MacroPlan need a separate wisdom component instead of folding everything into theme?

Response: The STG theory treats wisdom as a distinct reflective layer that combines cognition, emotion, morality, and interpretation. Keeping it separate prevents the macro package from flattening all reflective intent into a single thematic slogan.

### Question #2: Why must the blueprint include an emotional layer?

Response: The STG theory explicitly pairs structure with reader impact. A purely event-based blueprint would miss the project requirement to plan not only what happens, but how the narrative should be experienced.

### Question #3: Why is MacroPlan described as seed-first instead of purely LLM-driven?

Response: The user clarified that the first plan iteration should be generated by code and only then improved through later skill-driven refinement. MacroPlan therefore has to expose a symbolic first pass even if later skill logic uses LLM assistance indirectly.

## Conclusion

MacroPlan must produce the authoritative macro package for a book. Later stages may refine or operationalize it, but they must not bypass it.
