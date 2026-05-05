---
id: DS002
title: LLM Model Strategy
status: implemented
owner: repository
summary: Defines how SCRIPTA divides work between skill-mediated LLM stages and script-driven symbolic processing.
---

# DS002 LLM Model Strategy

## Introduction

The repository needs an explicit model strategy because SCRIPTA mixes language generation, symbolic planning, deterministic scoring, and report synthesis. This file defines that division of responsibility.

## Core Content

SCRIPTA must distinguish four execution layers:

| Layer | Main purpose | Allowed implementation posture |
| --- | --- | --- |
| Symbolic seed generation | Produce the first iteration of plan files from controlled value domains | Script-first CLI tooling only |
| LLM refinement | Add natural-language nuance, concrete names, and local drafting guidance | Indirect LLM usage through skills only |
| Draft generation | Turn validated plans into chapter prose | Indirect LLM usage through skills only |
| Validation and metrics | Detect defects, normalize scores, and explain them with evidence | Script-first, with bounded LLM judgement only where unavoidable |

LLMs must never be treated as a direct, freeform execution surface of the repository. They are used indirectly through skills that consume prior-stage artifacts, emit new artifacts, and remain bound by the DS contracts. A skill may call an LLM internally, but it must still behave like a stage-bound tool with explicit inputs, outputs, and validation obligations.

The first planning iteration must be generated symbolically through CLI-oriented tooling as defined in `DS029-symbolic-plan-generation.md`. That tooling must populate the CNL plan files with:

1. Enumerated classifier values derived from `DS014` through `DS028`.
2. Hard and soft constraints selected from the requested literary profile.
3. Explicit placeholders for unresolved names, places, organizations, and other concrete surface details.

MacroPlan, ChapPlan, and MicroPlan may orchestrate symbolic generation, rule-based completion, and bounded analysis, but they must begin from symbolic seed files rather than from opaque prose prompting. CNLEnh, ChapGen, and BookWriter are the stages where skill-mediated LLM work is expected, but even there the LLM must consume prior-stage files rather than re-invent the plan stack from scratch.

The stage model must be append-only. A downstream stage must write new files in its own stage folder or iteration namespace and must not silently overwrite upstream files. This rule exists so validators can compare stages, detect unresolved planning problems, and force better implementation through failing checks instead of through hidden mutation.

Placeholder use is allowed only in early planning artifacts. Symbolic seed generation may emit tokens such as `{{character:protagonist-001}}` or `{{location:city-001}}`, but later stages must progressively resolve them. `cnl/`, `drafts/`, and `exports/` artifacts must not be treated as valid outputs if unresolved placeholders remain, unless the artifact is explicitly marked as a failure or diagnostic by the workflow.

Every stage must have a validation gate. At minimum, the gate must verify that:

1. required upstream artifacts exist;
2. identifiers and cross-references remain stable;
3. append-only provenance is preserved;
4. stage-forbidden placeholders have not survived into the new output.

Whenever an LLM contributes to a score, report, or plan refinement, the downstream output must preserve the evidence window or source identifiers that justified the contribution. Validation must never produce an unexplained percentage or unnamed textual improvement that cannot be traced to source passages or symbolic checks.

The current reference runtime does not depend on a remote model provider. Instead, the skill-mediated refinement and drafting stages are implemented through deterministic local adapters that preserve the same stage boundaries, artifact contracts, and validation gates. Future real-model backends must slot into those stage interfaces without weakening append-only provenance or placeholder gating.

## Decisions & Questions

### Question #1: Why is MicroPlan script-first even though it handles narrative structure?

Response: The user explicitly requested symbolic generative plans and generic reusable code for predictable processing. MicroPlan therefore has to privilege reproducible block sequencing over freeform prose generation.

### Question #2: Why do validation skills still permit LLM participation?

Response: Several literary indicators such as thematic depth, interpretive openness, and stylistic quality are only partially reducible to deterministic rules. The contract therefore permits bounded LLM judgement, but only alongside symbolic evidence and explicit localization.

### Question #3: Why does the file insist on indirect LLM usage through skills instead of allowing direct prompting?

Response: The user explicitly wants the LLM to improve files generated by code in a later stage, not to bypass the stage contracts. Treating skills as the only legitimate LLM surface preserves stage traceability, validation hooks, and repeatable failure conditions.

### Question #4: Why are append-only stage outputs part of the model strategy rather than only a workspace detail?

Response: In SCRIPTA, append-only execution changes how LLM and non-LLM work must be orchestrated. If stages overwrite one another, validators lose the ability to prove that placeholder resolution, symbolic adherence, or refinement quality actually happened.

## Conclusion

SCRIPTA must preserve a stable split between symbolic seed generation, skill-mediated LLM refinement, prose generation, and validation. Future routing, stage ownership, or model-tier changes must update this file before the implementation claims them.
