# Specification Matrix

Generated from DS frontmatter by `skills/gamp_specs/scripts/generate_specs_matrix.mjs`. Edit the DS files and rerun the generator instead of editing this file manually.

| Specification | Title | Status | Owner | Summary |
| --- | --- | --- | --- | --- |
| [DS000](specsLoader.html?spec=DS000-vision.md) | Vision | [[status:implemented]] | repository | Defines SCRIPTA as a specification-first project for literary planning, generation, validation, and editorial outputs. |
| [DS001](specsLoader.html?spec=DS001-coding-style.md) | Coding Style | [[status:implemented]] | repository | Defines repository-wide coding, layout, documentation, and validation-output rules for the SCRIPTA project. |
| [DS002](specsLoader.html?spec=DS002-llm-model-strategy.md) | LLM Model Strategy | [[status:implemented]] | repository | Defines how SCRIPTA divides work between skill-mediated LLM stages and script-driven symbolic processing. |
| [DS003](specsLoader.html?spec=DS003-scripta-framework.md) | SCRIPTA Framework | [[status:implemented]] | repository | Defines the SCRIPTA stage model, the STG grounding, and the public subsystem boundaries. |
| [DS004](specsLoader.html?spec=DS004-book-workspace.md) | Book Workspace | [[status:implemented]] | repository | Defines the per-book folder structure, baseline validation profiles, and artifact naming model. |
| [DS005](specsLoader.html?spec=DS005-macroplan-skill.md) | MacroPlan Skill | [[status:implemented]] | repository | Defines the MacroPlan subsystem and the required macro narrative package it must produce. |
| [DS006](specsLoader.html?spec=DS006-chapplan-skill.md) | ChapPlan Skill | [[status:implemented]] | repository | Defines the chapter-planning subsystem and the chapter contracts derived from the macro package. |
| [DS007](specsLoader.html?spec=DS007-microplan-skill.md) | MicroPlan Skill | [[status:implemented]] | repository | Defines the script-first subsystem that converts chapter plans into symbolic block structures. |
| [DS008](specsLoader.html?spec=DS008-cnlenh-skill.md) | CNLEnh Skill | [[status:implemented]] | repository | Defines the controlled-language enhancement subsystem that enriches symbolic plans with textual hints. |
| [DS009](specsLoader.html?spec=DS009-chapgen-skill.md) | ChapGen Skill | [[status:implemented]] | repository | Defines the chapter-generation subsystem and its continuity-preserving draft contract. |
| [DS010](specsLoader.html?spec=DS010-bookwriter-skill.md) | BookWriter Skill | [[status:implemented]] | repository | Defines the editorial finishing subsystem that assembles the canonical source manuscript, source reader edition, and translation-source bundle for downstream publication. |
| [DS011](specsLoader.html?spec=DS011-validation-suite.md) | Validation Suite | [[status:implemented]] | repository | Defines the automated checks, stage audits, export verification, and evidence-backed reporting contract. |
| [DS012](specsLoader.html?spec=DS012-metrics-framework.md) | Metrics Framework | [[status:implemented]] | repository | Defines the normalized literary and computational indicators plus the composed SCRIPTA metrics. |
| [DS013](specsLoader.html?spec=DS013-cnl-plan-format.md) | CNL Plan Format | [[status:implemented]] | repository | Defines the common CNL syntax for all SCRIPTA plan files based on @identifier verb headers and mixed fixed-plus-natural-language bodies. |
| [DS014](specsLoader.html?spec=DS014-central-idea-command.md) | Central Idea Command | [[status:planned]] | repository | Defines the CNL command for encoding the central idea as a high-tension narrative proposition. |
| [DS015](specsLoader.html?spec=DS015-theme-command.md) | Theme Command | [[status:planned]] | repository | Defines the CNL command for encoding theme as a conflict-driven moral and emotional proposition. |
| [DS016](specsLoader.html?spec=DS016-wisdom-command.md) | Wisdom Command | [[status:planned]] | repository | Defines the CNL command for encoding the reflective and interpretive depth that the book should produce. |
| [DS017](specsLoader.html?spec=DS017-narrative-structure-command.md) | Narrative Structure Command | [[status:planned]] | repository | Defines the CNL command for the concrete macro arrangement of stages and turning points in a specific book. |
| [DS018](specsLoader.html?spec=DS018-narrative-model-command.md) | Narrative Model Command | [[status:planned]] | repository | Defines the CNL command for selecting and adapting the abstract narrative model behind a book. |
| [DS019](specsLoader.html?spec=DS019-blueprint-command.md) | Blueprint Command | [[status:planned]] | repository | Defines the CNL command for aligning premise, stages, turning points, and emotional layer. |
| [DS020](specsLoader.html?spec=DS020-plot-commands.md) | Plot Commands | [[status:planned]] | repository | Defines the CNL commands for plot elements and plot devices as distinct but related planning surfaces. |
| [DS021](specsLoader.html?spec=DS021-character-command.md) | Character Command | [[status:planned]] | repository | Defines the CNL command for building characters as engines of desire, conflict, and transformation. |
| [DS022](specsLoader.html?spec=DS022-worldbuilding-command.md) | Worldbuilding Command | [[status:planned]] | repository | Defines the CNL commands for world subsystems and rules that constrain narrative possibility. |
| [DS023](specsLoader.html?spec=DS023-chapter-command.md) | Chapter Command | [[status:planned]] | repository | Defines the CNL command for chapter planning as a purposeful micro-narrative with continuity obligations. |
| [DS024](specsLoader.html?spec=DS024-scene-command.md) | Scene Command | [[status:planned]] | repository | Defines the CNL command for scenes as real-time micro-systems of action, tension, and transition. |
| [DS025](specsLoader.html?spec=DS025-sequence-command.md) | Sequence Command | [[status:planned]] | repository | Defines the CNL command for sequences as multi-scene developmental threads. |
| [DS026](specsLoader.html?spec=DS026-content-block-commands.md) | Content Block Commands | [[status:planned]] | repository | Defines the CNL commands for action, conflict, and event blocks as the dynamic core of chapter execution. |
| [DS027](specsLoader.html?spec=DS027-expression-block-commands.md) | Expression Block Commands | [[status:planned]] | repository | Defines the CNL commands for description, dialogue, narration, and interior monologue. |
| [DS028](specsLoader.html?spec=DS028-rhythm-block-commands.md) | Rhythm Block Commands | [[status:planned]] | repository | Defines the CNL commands for suspense, cliffhanger, narrative pause, acceleration, and block alternation. |
| [DS029](specsLoader.html?spec=DS029-symbolic-plan-generation.md) | Symbolic Plan Generation | [[status:implemented]] | repository | Defines the deterministic and constrained-random CLI layer that generates the first iteration of SCRIPTA plan files before LLM refinement. |
| [DS030](specsLoader.html?spec=DS030-publication-html-export.md) | Publication HTML Export | [[status:implemented]] | repository | Defines the dependency-free single-file HTML edition contract shared by the source BookWriter stage and the downstream Translation Skill. |
| [DS031](specsLoader.html?spec=DS031-five-book-qa-campaign.md) | Five-Book QA Campaign | [[status:implemented]] | repository | Defines the canonical five-book QA campaign, the per-stage generation path, and the consolidated review outputs. |
| [DS032](specsLoader.html?spec=DS032-translation-skill.md) | Translation Skill | [[status:implemented]] | repository | Defines the independent translation subsystem that consumes BookWriter source bundles, translates ordered text chunks, and re-renders final reader editions through the shared publication template. |
