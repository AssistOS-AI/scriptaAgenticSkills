---
name: scripta_validation_suite
description: Validate a SCRIPTA workspace with deterministic checks, evidence localization, and composed scores.
---

# SCRIPTA Validation Suite

This skill computes deterministic validation signals, metrics, localized issue lists, and the revision-facing report for a book workspace.

Global directives:

1. Keep every CNL command header on its own line as `@identifier verb`, followed by one instruction per line until the next `@identifier` header.
2. Validation must tolerate `$identifier` references inside planning artifacts but treat leaked raw references in reader-facing outputs as failures.
3. When names are resolved, they must stay internationally portable and must not default to locale-locked proper names.
