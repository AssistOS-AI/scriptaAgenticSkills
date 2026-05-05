---
id: DS012
title: Metrics Framework
status: implemented
owner: repository
summary: Defines the normalized literary and computational indicators plus the composed SCRIPTA metrics.
---

# DS012 Metrics Framework

## Introduction

This file defines the SCRIPTA metrics framework. It combines literary-quality indicators with computational checks and expresses the exposed results on a common percentage scale from 0 to 100.

## Core Content

All exposed indicators must be normalized so that higher is better. If the underlying raw measure is a penalty, the system must store the raw value and publish a normalized positive score derived from it.

The literary indicator layer must include:

| Indicator | Meaning | Canonical labels |
| --- | --- | --- |
| Narrative coherence | Logical organization of events and cause-effect clarity | Low / Medium / High |
| Thematic depth | Complexity of ideas and thematic layering | Superficial / Moderate / Profound |
| Character complexity | Psychological development and transformation | Simple / Moderate / Complex |
| Originality | Freshness of ideas and narrative approach | Low / Partial / High |
| Stylistic quality | Clarity, expressiveness, and adequacy of language | Poor / Acceptable / Excellent |
| Emotional impact | Reader engagement and affective pressure | Weak / Moderate / Strong |
| Interpretive openness | Range of valid interpretations | Closed / Partially open / Open |
| Cultural value | Relevance and long-term significance | Local / Regional / Universal |

The computational indicator layer must include:

| Indicator | Public score meaning | Normalization rule |
| --- | --- | --- |
| OI | Higher means more original | Direct normalized score |
| NCS | Higher means less cliché dependence | Direct normalized score |
| BCI | Higher means better controlled bias behavior | Direct normalized score |
| VAD score | Higher means lower harmful deviation | `100 - raw_deviation_percent`, clamped |
| TOP score | Higher means lower problematic overlap | `100 - raw_overlap_percent`, clamped |
| STG-CSG | Higher means better STG-constrained generation | Direct normalized score |
| SFSG | Higher means better specification following | Direct normalized score |
| CCI | Higher means stronger continuity control | Direct normalized score |
| CAD score | Higher means lower unexplained trait drift | `100 - normalized_drift_percent`, clamped |
| EAP | Higher means more coherent intended emotional progression | Direct normalized score |

The category-to-percent mapping for the literary indicators must use three default bands unless a later DS revises them:

| Band | Percent range |
| --- | --- |
| Low / Superficial / Simple / Poor / Weak / Closed / Local | `0-39` |
| Medium / Moderate / Partial / Acceptable / Moderate / Partially open / Regional | `40-69` |
| High / Profound / Complex / Excellent / Strong / Open / Universal | `70-100` |

The composed metrics must be calculated from normalized components as follows:

| Metric | Formula | Role |
| --- | --- | --- |
| CAR | `0.40 * VAD_score + 0.35 * TOP_score + 0.25 * BCI`, capped at `49` if a hard legal or privacy violation is detected | Ethics and compliance |
| CS | `0.35 * CCI + 0.25 * SFSG + 0.20 * CAD_score + 0.20 * EAP` | Structural and continuity coherence |
| NQS | `0.40 * CS + 0.15 * thematic_depth + 0.15 * character_complexity + 0.10 * stylistic_quality + 0.10 * emotional_impact + 0.05 * OI + 0.05 * NCS` | Overall narrative quality |

Every metric report must contain:

| Output surface | Requirement |
| --- | --- |
| Normalized score | Public percentage from 0 to 100 |
| Raw support | Underlying overlaps, deviations, or comparison values when applicable |
| Evidence summary | Explanation of why the score was obtained |
| Issue list | Problems that lowered the score |
| Localization | Chapter and paragraph or block references |

## Decisions & Questions

### Question #1: Why does the framework convert overlap and deviation into positive scores instead of exposing penalties directly?

Response: The user asked for a uniform percentage scale across indicators. Positive normalization makes indicators comparable while still allowing the raw penalty values to remain visible in the detailed report.

### Question #2: Why is NQS a hybrid metric instead of a purely computational aggregate?

Response: The project explicitly bridges literary criticism and computational evaluation. NQS therefore has to reflect not only structural compliance, but also the literary dimensions that matter to narrative value.

## Conclusion

The metrics framework must keep SCRIPTA scores comparable, explainable, and tied to evidence. Aggregation is allowed only when the underlying issue localization remains accessible.
