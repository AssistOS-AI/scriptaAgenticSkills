---
id: DS011
title: Validation Suite
status: implemented
owner: repository
summary: Defines the automated checks, stage audits, export verification, and evidence-backed reporting contract.
---

# DS011 Validation Suite

## Introduction

The SCRIPTA validation suite evaluates manuscripts, chapters, and planning artifacts. Its role is to measure quality, detect problems, and explain those problems through localized evidence.

## Core Content

The suite must cover the following automated checks:

| Check | Purpose | Primary evidence surface |
| --- | --- | --- |
| Originality Index (OI) | Measure semantic novelty and freshness | motifs, semantic clusters, comparative novelty signals |
| Novelty and Cliche Score (NCS) | Detect clichés, formulas, and stereotyped constructions | phrase patterns, trope inventories, repetitive block formulas |
| Bias Check Indicator (BCI) | Track bias as a controlled creative parameter | character treatment, social framing, asymmetry patterns |
| Value Alignment Deviation (VAD) | Measure deviation from ethical alignment targets | harmful content flags, unsafe framing, normative drift |
| Compliance Adherence Rate support checks | Track legal and policy robustness | policy hits, privacy risks, rule violations |
| Textual Overlap Percentage (TOP) | Detect contamination and copyright overlap | matched spans and overlap sources |
| Placeholder residue check (PRC) | Detect unresolved symbolic placeholders after the permitted stages | placeholder token scans and provenance checks |
| STG-Constrained Short Story Generation (STG-CSG) | Verify that constrained generation still follows STG principles | brief-to-output structural correspondence |
| Specification Following Story Generation (SFSG) | Measure adherence to explicit planning constraints | chapter-plan compliance and unmet obligations |
| Continuity Control Indicator (CCI) | Measure continuity preservation across chapters | state vectors, unresolved thread tracking, contradiction detection |
| Character Attribute Drift (CAD) | Measure unexplained changes in character traits | trait vectors, relation changes, arc consistency |
| Emotional Arc Profile (EAP) | Measure coherence of emotional progression | chapter-level emotional movement and intended arc shape |
| Export structure audit | Verify final HTML reader completeness and portability | cover presence, TOC, chapter anchors, print CSS, metadata payload, dependency scan |

Validation must maximize symbolic processing. Deterministic overlap checks, chapter-state comparisons, block-order checks, plan-versus-draft comparisons, and score normalization must be done by code wherever possible. LLM judgement is permitted only when the evidence window is explicit and retained in the report.

Validation must parse the CNL planning language directly. Missing command families, malformed `@identifier verb` headers, absent mandatory labeled fields, broken cross-references, and plan-versus-draft mismatches must be eligible inputs for SFSG, CCI, and related checks.

Validation must enforce stage discipline. At minimum, it must be able to detect overwritten upstream artifacts, missing successor provenance, and unresolved placeholders that survive into stages where they are forbidden.

Validation must also audit the publication surface. When final reader editions exist, the suite must verify requested language coverage, embedded-cover presence, table of contents structure, chapter anchoring, print styling, dependency-free packaging, and visible localization leaks in final HTML editions.

Each validation run must write both raw artifacts and revision-facing reports. At minimum, the suite must produce:

| Artifact | Requirement |
| --- | --- |
| Machine-readable summary | Normalized scores and raw metrics |
| Human-readable report | Arguments, strengths, weaknesses, and interpretation |
| Issue list | Ranked problems with identifiers |
| Localization map | Book, chapter, paragraph or block references |
| Evidence bundle | Extracts, overlaps, state diffs, or prompt-bounded reasoning |
| Stage audit | Per-stage pass/warn/fail status with explicit checks |
| Revision task list | Actionable follow-up tasks derived from the failed checks and lowest-scoring indicators |

The validation suite must run against one of the five baseline profiles defined in the book workspace. It may also use genre-specific extensions, but the baseline profile used in a run must always be recorded.

## Decisions & Questions

### Question #1: Why must the suite store both raw evidence and human-readable interpretation?

Response: The user explicitly prioritized argument-backed reports in addition to percentage indicators. Raw evidence supports reproducibility, while the readable report supports revision.

### Question #2: Why is symbolic processing mandatory wherever possible?

Response: The user asked for verification skills that process as much as possible symbolically and use LLMs only as part of the workflow. The suite therefore needs deterministic checks as its default posture.

### Question #3: Why is unresolved-placeholder detection modeled as a first-class validation concern?

Response: The user explicitly wants early symbolic placeholders to disappear in later stages and wants failing checks to force better implementation. Placeholder residue is therefore not cosmetic noise; it is a direct contract violation.

### Question #4: Why must validation audit final exports instead of stopping at draft quality?

Response: The user explicitly asked for final English and Romanian reader editions, printable HTML, and downstream task generation based on the generated result. That makes the export surface part of the public contract rather than an optional packaging detail.

### Question #5: Why does the suite emit revision tasks instead of only scores and problems?

Response: The user asked for generated tasks that can drive the next remediation pass. The suite therefore has to translate observations into concrete stage-scoped follow-up work, not just describe failure.

## Conclusion

The validation suite must be evidence-backed, profile-aware, stage-aware, and revision-oriented. Percentages without localized arguments, export checks, and follow-up tasks do not satisfy the SCRIPTA contract.
