# AGENTS.md

## Scope

This repository documents and specifies the SCRIPTA project: an agentic system for literary planning, book generation, validation, metrics, and editorial finalization. The public documentation and the DS set must stay focused on SCRIPTA itself, not on the helper skills used to author this repository.

The DS specifications under `docs/specs/` are the source of truth. When SCRIPTA workflows, interfaces, validation rules, metrics, or workspace structure change, update the relevant DS files and the HTML documentation in the same change set. All documentation, specifications, and code comments must be written in English.

## Mandatory Reading Order

1. Read this `AGENTS.md`.
2. Read `docs/index.html`.
3. Read `docs/specsLoader.html?spec=matrix.md`.
4. Read `docs/specsLoader.html?spec=DS001-coding-style.md` before making code, documentation, or layout changes.
5. Read the relevant SCRIPTA DS files before changing planning, generation, validation, or metric behavior.
6. When modifying the planning language itself, read `DS013` through `DS031` before changing any CNL-oriented contract.
7. If repository authoring tooling under `.agents/skills/` must be changed, treat it as internal helper infrastructure rather than as part of the public SCRIPTA documentation surface.

## Current Skill Catalog

The repository contains two skill groups under `.agents/skills/`:

1. Helper authoring skills such as `gamp_specs`, `review_specs`, `article_build`, `cskill_build`, `dgskill_build`, `oskill_build`, `achilles_specs`, and `antropic_skill_build`.
2. Implemented SCRIPTA runtime skills such as `scripta_symbolic_plan_generation`, `scripta_macroplan`, `scripta_chapplan`, `scripta_microplan`, `scripta_cnlenh`, `scripta_chapgen`, `scripta_bookwriter`, `scripta_validation_suite`, and `scripta_metrics_framework`.

The public SCRIPTA specification set starts at `DS003` and must remain centered on the SCRIPTA suite itself: framework, book workspace, MacroPlan, ChapPlan, MicroPlan, CNLEnh, ChapGen, BookWriter, validation, and metrics. Do not create DS files for the helper authoring skills unless the user explicitly asks for them.

## Repository Rules

The DS specifications are authoritative. If wording diverges, align the HTML documentation to the DS files rather than the other way around.

Keep DS numbering gap-free. Every ordinary DS file must use `Introduction`, `Core Content`, `Decisions & Questions`, and `Conclusion`, and the `Decisions & Questions` section must use numbered subchapters such as `### Question #1: ...`.

`DS001-coding-style.md` is the coding-style authority for file layout, source organization, validation outputs, and local test placement. Read it before making structural edits.

When a project change affects SCRIPTA behavior, interfaces, workflows, or constraints, update both the HTML documentation and the relevant DS files. Public documentation must describe what the SCRIPTA project does, how its workflows are structured, what its reports contain, and what its metrics mean. It must not drift into fake pages about helper tooling that is not part of the SCRIPTA suite.

The helper skills in `.agents/skills/` may be used while writing specifications, documentation, and code, but they are not part of the public DS set for SCRIPTA. Rationale and unresolved alternatives belong in the affected DS files rather than in a separate decision log.

## Runtime Defaults

The repository now exposes a root SCRIPTA runtime through `bin/scripta.mjs`, `runtime/`, and the implemented SCRIPTA skill wrappers under `.agents/skills/`. The reference runtime is deterministic and testable end to end. It preserves the indirect-skill stage contract and leaves room for future remote LLM adapters without changing the append-only workspace model.

Current documentation verification still relies on the standalone Node-based helpers shipped with `gamp_specs`. The SCRIPTA runtime itself is exercised with `npm test` and through the generated `QA/` workspaces. Future SCRIPTA scripts and validators must remain traceable, modular, and aligned with the per-book workspace structure defined in the DS set.

The active helper-skill path is `.agents/skills/`. Do not recreate or update a `.claude/` mirror unless the repository requirements explicitly reintroduce one.

SCRIPTA planning is append-only by stage. When future code is added, stage tools and skills must create successor artifacts instead of overwriting earlier plan files, because validation depends on comparing symbolic seeds, refined plans, and drafts across stages.

## Key Paths

- `docs/index.html`
- `docs/stg-program.html`
- `docs/planning-workflow.html`
- `docs/validation-metrics.html`
- `docs/specsLoader.html?spec=matrix.md`
- `docs/specs/`
- `bin/scripta.mjs`
- `runtime/`
- `QA/`
- `.agents/skills/`
- `fileSizesCheck.sh`
