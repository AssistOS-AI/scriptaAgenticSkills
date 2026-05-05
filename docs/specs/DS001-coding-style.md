---
id: DS001
title: Coding Style
status: implemented
owner: repository
summary: Defines repository-wide coding, layout, documentation, and validation-output rules for the SCRIPTA project.
---

# DS001 Coding Style

## Introduction

This file is the coding-style authority for the repository. It defines the structural and editorial rules that SCRIPTA documentation, future runtime code, validation scripts, and book-workspace outputs must follow.

## Core Content

All persistent repository output must be written in English. This includes `AGENTS.md`, HTML documentation, DS files, code comments, report templates, validation messages, and generated book-workspace artifacts intended to be reviewed or versioned.

Public documentation under `docs/` must describe the SCRIPTA project, its procedures, and its contracts. It must not be diluted with fake pages about internal helper tooling that is not part of the public suite.

Repository-wide documentation must live at the root in `docs/`, and specifications must live in `docs/specs/` using contiguous `DS0xx-description.md` names. `matrix.md` must be generated from DS frontmatter rather than maintained by hand.

When tests or verification helpers exist, they should stay close to the code or book-workspace surface they validate. Root-level verification is reserved for repository-wide documentation checks or other cross-cutting bootstrap concerns. Future SCRIPTA modules should keep deterministic checks, fixtures, and sample workspaces close to the subsystem they exercise unless the book-owned workspace is the true source of truth.

Future book workspaces must keep stage outputs separated by folder. Validation outputs must include a machine-readable summary and a human-readable report that cites at least the book, chapter, and paragraph or block location that influenced the score.

Line-oriented helpers should remain reasonably readable and compatible with `fileSizesCheck.sh`. Prefer small modules, stable filenames, explicit data contracts, and named report schemas over monolithic prompt files or deeply nested generated artifacts.

## Decisions & Questions

### Question #1: Why does the style authority constrain public documentation scope as well as code formatting?

Response: The user explicitly rejected documentation pages about internal helper skills. Public docs therefore need a scope rule, not only a formatting rule, so future edits keep the documentation centered on the SCRIPTA project itself.

### Question #2: Why do validation reports require both machine-readable and human-readable outputs?

Response: The user asked for percentage indicators and also for argument-backed reports with problem localization. The style contract must therefore support both automation and revision-oriented reading from the start.

## Conclusion

Future repository changes must treat this file as the canonical source for style, layout, and validation-output conventions. Other documents may reference these rules, but they must not silently replace them.
