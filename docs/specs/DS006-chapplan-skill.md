---
id: DS006
title: ChapPlan Skill
status: implemented
owner: repository
summary: Defines the chapter-planning subsystem and the chapter contracts derived from the macro package.
---

# DS006 ChapPlan Skill

## Introduction

ChapPlan turns the macro package into an ordered set of chapters. It is responsible for translating whole-book architecture into a readable progression of chapter duties.

## Core Content

ChapPlan must be skill-orchestrated and must consume the full macro package as input. It must generate an ordered chapter plan set in which every chapter has a clear structural role and a traceable reason to exist.

ChapPlan must begin from symbolic chapter-seed generation as defined in `DS029-symbolic-plan-generation.md`. The first chapter plan set must be produced by deterministic or controlled-random CLI tooling that selects from the enumerated chapter domains and writes CNL chapter files before any LLM-based refinement is attempted.

The subsystem must write its outputs as CNL chapter command blocks defined by `DS023-chapter-command.md`. Initial chapter plans must appear as `define` blocks, while later chapter enrichments may appear as `refine` blocks without breaking identifier continuity.

Each chapter plan must include:

| Field | Required meaning |
| --- | --- |
| Chapter identifier | Stable numeric or slug-based identifier |
| Structural role | Setup, escalation, revelation, reversal, culmination, aftermath, or another explicit role |
| Chapter purpose | Why the chapter exists in the whole-book design |
| Input state | Character, conflict, and knowledge state at chapter entry |
| Output state | Character, conflict, and knowledge state at chapter exit |
| Main conflict | Central pressure of the chapter |
| Thematic duty | How the chapter tests the theme |
| Emotional target | Intended reader experience |
| Continuity obligations | Facts that later chapters must preserve |
| Dependencies | Which prior chapter states or unresolved threads it inherits |

Chapters must not exist as empty containers. A chapter without significant change in conflict, knowledge, relationship, world understanding, or emotional pressure must be treated as a planning defect unless the plan explicitly justifies it as a necessary pause or transition.

ChapPlan must preserve local coherence and global progression at the same time. Local coherence means each chapter behaves like a micro-narrative. Global progression means the full chapter set increases, reorients, or resolves the book-level pressure rather than oscillating randomly.

The subsystem must model continuity explicitly. It is not enough to know what the chapter does in isolation. The chapter plan must record what it receives from earlier chapters and what later chapters are obliged to remember.

ChapPlan must not replace seed files in place. If a chapter plan is enriched or corrected, the updated plan must be written as a successor artifact in the appropriate later stage rather than by mutating the original chapter seed.

## Decisions & Questions

### Question #1: Why does every chapter require both input and output state?

Response: The chapter system needs explicit state transitions so continuity, character drift, and specification-following can be verified later. Without state boundaries, later stages can only guess whether a chapter preserved or broke the plan.

### Question #2: Why are chapter pauses or transitions still required to justify themselves?

Response: STG theory recognizes rhythm and pacing as legitimate narrative work, but the system still needs to know why a slower chapter exists. Explicit justification prevents drift into filler.

### Question #3: Why does chapter planning have to start from symbolic generation?

Response: The user wants CLI-like tools with explicit parameters to create the first iteration of documents so the planning stack remains testable and repeatable. Chapter planning therefore cannot begin as hidden prose improvisation.

## Conclusion

ChapPlan must be the authoritative progression map of the book. Future SCRIPTA implementations must preserve its chapter-state model and its requirement that every chapter have a defensible narrative function.
