---
id: DS013
title: CNL Plan Format
status: implemented
owner: repository
summary: Defines the common CNL syntax for all SCRIPTA plan files based on @identifier verb headers and mixed fixed-plus-natural-language bodies.
---

# DS013 CNL Plan Format

## Introduction

All SCRIPTA plan files must use a shared controlled natural language format. The format must be simple enough for scripts to parse line by line and expressive enough for LLMs to read as text.

## Core Content

Every command block must begin with a header line in the form:

```text
@<identifier> <verb> [optional arguments...]
```

The `<identifier>` must be lowercase kebab-case and must follow the command-family prefix rules defined in the command-specific DS files. The `<verb>` must be one of the verbs allowed for that command family.

A command block continues until the next line that starts with `@` or until end of file. The header line must stay on its own line. All machine-readable fields, guidance lines, and free natural-language hints must therefore appear on separate following lines rather than being packed onto the header. The body of a command block may contain three kinds of lines:

| Line kind | Syntax | Contract |
| --- | --- | --- |
| Fixed labeled line | `field-name: value` | Parsed by scripts and validated against the command DS |
| Common guidance line | `ref: ...`, `must: ...`, `should: ...`, `avoid: ...`, `note: ...` | Shared semantics across command families |
| Free natural-language line | Any non-empty line not starting with `@` and not using a reserved label | Preserved as readable hints for LLMs and optional soft context for scripts |

The common verbs available across the plan language are:

| Verb | Meaning |
| --- | --- |
| `define` | Introduces the authoritative initial block for an identifier |
| `refine` | Adds detail to an existing identifier without replacing its identity |
| `check` | Declares an explicit constraint or quality expectation to be verified later |

An identifier must be introduced by a `define` block before it is refined. A `check` block may appear after a `define` block for the same identifier or for a related scope.

Scripts must treat the header line and fixed labeled lines as the primary machine-readable surface. Free natural-language lines must remain available to later LLM stages as context, nuance, and style guidance. This dual requirement is the reason the format must stay text-like rather than becoming a strict JSON schema.

Blank lines are allowed inside blocks. Nested command blocks are not allowed. A line that starts with `@` always starts a new command block.

The plan language must distinguish between classifier values and semantic values. Classifier values are the enumeration-backed labels used by symbolic generation. They must come from the controlled domains defined in the command-specific DS files and must never be left as placeholders. Semantic values may begin as typed placeholders and be resolved later by refinement stages.

The canonical placeholder syntax is:

```text
{{<entity-type>:<stable-id>}}
```

Allowed `entity-type` values include `character`, `location`, `organization`, `object`, `artifact`, and `concept`. Placeholder tokens are permitted only in semantic value positions and only in stages that explicitly allow unresolved surface details.

The canonical cross-block reference syntax is:

```text
$<identifier>
```

`$<identifier>` points at an identifier that was already introduced by an earlier `define` block. Reference tokens are valid in both structural and semantic value positions when a block needs to point back to a previously defined character, location, chapter, scene, rule, or other traceable planning unit. They are not a replacement for `{{...}}`: `$<identifier>` preserves lineage to an already-defined block, while `{{<entity-type>:<stable-id>}}` marks a surface detail that is still unresolved.

The CNL contract is stage-aware. Symbolic seed files may contain placeholders and `$<identifier>` references. Refinement files may replace placeholders with concrete names and richer natural-language cues while preserving cross-block references. Downstream drafting and export artifacts must treat unresolved placeholders as failures and must not leak raw `$<identifier>` references into reader-facing prose unless a DS explicitly marks the artifact as diagnostic.

The plan contract must remain append-only across stages. Later stages may reuse identifiers through `refine` or `check` blocks, but they must do so in successor artifacts rather than by erasing the original seed file that made the identifier traceable.

## Decisions & Questions

### Question #1: Why is the format line-oriented instead of fully structured data?

Response: The user explicitly asked for plan files that can be scanned quickly by scripts looking for lines starting with `@identifier` while still remaining readable and useful to LLMs. A line-oriented CNL format satisfies both requirements.

### Question #2: Why are free natural-language lines allowed if scripts mostly use fixed labels?

Response: The later refinement stage is supposed to add richer detail with an LLM. Free natural-language lines let the plan stay expressive without sacrificing the machine-readable header and fixed field layer.

### Question #3: Why does the format standardize placeholder syntax instead of letting each tool invent its own markers?

Response: Placeholder residue must be detectable by validation and easy to rewrite by refinement stages. A single typed placeholder format makes that possible across all command families.

### Question #4: Why does the format now distinguish `$<identifier>` references from `{{...}}` placeholders?

Response: The user wanted plans to stay line-oriented and traceable while also allowing blocks to refer directly to previously defined characters, locations, and situations. A dedicated reference syntax keeps lineage explicit without pretending those references are unresolved surface details.

## Conclusion

The CNL plan format is the common interface of the SCRIPTA planning stack. Future plan files must preserve its `@identifier verb` discipline, one-line headers with body lines underneath, fixed labeled lines, `$<identifier>` references, typed placeholders, and free-text hint capability.
