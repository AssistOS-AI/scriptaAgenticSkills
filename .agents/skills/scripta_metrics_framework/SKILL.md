---
name: scripta_metrics_framework
description: Expose the normalized metric bundle for a validated SCRIPTA workspace.
---

# SCRIPTA Metrics Framework

This skill is the metrics-facing surface over the validation runtime. It is intended for workflows that need the percentage indicators without re-implementing the weighting logic.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Metrics tooling must read `$identifier` references as valid planning links rather than as placeholder residue.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked proper names.
