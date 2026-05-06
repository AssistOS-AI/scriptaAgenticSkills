---
id: DS009
title: ChapGen Skill
status: implemented
owner: repository
summary: Defines the chapter-generation subsystem and its state-preserving draft contract.
---

# DS009 ChapGen Skill

## Introduction

ChapGen turns planned artifacts into readable chapter drafts. It is the first subsystem that produces substantial manuscript prose.

## Core Content

ChapGen must be skill-mediated, LLM-ready, and chapter-scoped. It must consume MacroPlan, ChapPlan, MicroPlan, and CNLEnh outputs together rather than privileging one layer and ignoring the others.

The subsystem must read the CNL command stream as authoritative planning input. Missing required command blocks, missing required labeled fields, or unresolved contradictions between `define`, `refine`, and `check` blocks must be surfaced as generation issues.

ChapGen must reject plan sets that still contain unresolved placeholders in generation-critical surfaces. If names, locations, institutions, or other required concrete references remain in placeholder form after the refinement gate, chapter drafting must fail loudly rather than normalizing the defect into prose. ChapGen must also resolve raw `$<identifier>` references contextually before prose leaves the drafting stage; those references are valid planning links, not reader-facing wording.

ChapGen is the primary drafting stage. It must turn refined plans into chapter drafts that already read as scenes unfolding in time, not as explanatory restatements of the plan packet. A valid draft therefore has to show local action, consequence, and relational movement instead of repeatedly paraphrasing chapter purpose, output state, or scene-state labels.

Each generated chapter must preserve:

| Obligation | Meaning |
| --- | --- |
| Plan fidelity | The draft must honor the structural role and block order of the approved plan set |
| Thematic fidelity | The draft must test the intended thematic tension rather than drifting into unrelated concerns |
| Continuity fidelity | Character state, world rules, unresolved threads, and knowledge states must remain consistent |
| Progressive consequence | Each scene must alter what the next scene can plausibly repeat, deny, or conceal |
| Voice differentiation | Major speakers must remain distinguishable through diction, cadence, and conflict posture |
| Traceability | Generated units must stay linkable to chapter and block identifiers |

ChapGen must keep continuity information inside the authoritative refined chapter plans and the draft itself. It must not create a parallel continuity sidecar file whose data can drift away from the actual chapter contract.

The subsystem must not silently repair serious upstream contradictions by inventing hidden changes in the story world, character arc, or chapter order. If the plan stack is incoherent, ChapGen must surface the problem as a draft warning or a generation failure condition.

ChapGen must also preserve stage immutability. It may produce revised drafts in later draft iterations, but it must not rewrite earlier plan-stage artifacts as a side effect of drafting.

ChapGen may emit internal structured draft payloads that downstream stages consume for finishing, localization, or validation. Those payloads may contain scene ledgers, dialogue-voice plans, carry-forward state deltas, or fallback provenance, but they must remain hidden from the visible prose and they must stay anchored to chapter and scene identifiers.

ChapGen must reject or rewrite draft surfaces that still look like scaffolding. Reader-facing draft prose must not ship stock phrases such as "the central question here is", "the immediate result is", "by the end of the chapter", raw `line-hint` placeholders, or equivalent meta-expository bridges that merely narrate the plan schema back to the reader.

The current reference runtime implements this stage through deterministic chapter templating so the pipeline remains executable and testable without a remote model backend. Future true model-driven drafting must still preserve chapter-state fidelity, placeholder rejection, progressive scene consequence, voice differentiation, and draft traceability.

The draft must remain revision-friendly. Localized paragraphs or sections should remain traceable enough that validation and editorial stages can refer to them directly in reports and change logs.

## Decisions & Questions

### Question #1: Why must continuity stay inside the main chapter contract instead of a sidecar?

Response: The user explicitly rejected extra continuity sidecars and asked for a simpler file model with one current CNL file per chapter. Continuity still matters, but it has to stay visible in the authoritative chapter plan and draft lineage instead of living in a parallel packet that can drift.

### Question #2: Why is silent repair prohibited?

Response: Silent repair hides planning defects and makes validation misleading. The system must preserve honest traceability between planning quality and drafting quality.

### Question #3: Why does ChapGen now own progression and voice differentiation explicitly?

Response: The previous pipeline could produce structurally valid chapters whose scenes still felt interchangeable because no stage was contractually responsible for growth, consequence, and voice. Those requirements have to live at the drafting stage because they are properties of the chapter as lived prose, not just of the plan schema.

### Question #4: Why are hidden draft payloads allowed at all?

Response: Finishing, translation, and validation still need structured insight into how a scene was drafted, but readers should never see those ledgers. Allowing hidden draft payloads keeps the pipeline inspectable without confusing internal scaffolding for literature.

## Conclusion

ChapGen must generate chapters as traceable, continuity-aware manifestations of the planning stack. Draft quality must never come at the cost of hidden structural drift or redundant sidecar artifacts.
