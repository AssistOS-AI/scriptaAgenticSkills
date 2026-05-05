@plot-element-core-object define
name: OBJECT_001
category: relationship
subtype: secret
function: revelation
stakes: what is at risk if the protagonist fails
holders: ORG_001, $character-pressure-001
activation: the protagonist decodes OBJECT_001 near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: foreshadowing
purpose: the narrative purpose of this plot-device chapter
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: society
function: defines the system that constrains action and shapes conflict
conflict-output: how the world system generates conflict
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: social-norm
rule: the world rule that governs this domain
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: resource-scarcity
rule: the world rule that governs this domain
conflict-transform: how the secondary rule transforms conflict
reveal-mode: explicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: show-consequence-first-explain-cause-later
rule-to-conflict: how the world rule translates into narrative conflict

@location-primary define
name: the river evidence hangar beside Lock Six
role: primary pressure stage
sensory-anchor: diesel sheen, wet rope, fluorescent glare on metal trays
social-signal: how this location signals social dynamics
symbolic-charge: the symbolic weight this location carries
conflict-use: how this location intensifies conflict

@location-secondary define
name: LOCATION_002
role: revelation or narrowing stage
sensory-anchor: diesel sheen, wet rope, fluorescent glare on metal trays
social-signal: how this location signals social dynamics
symbolic-charge: the symbolic weight this location carries
conflict-use: how this location intensifies conflict

@world-rule-primary refine
ref: rule:world-primary -> the world rule that governs this domain
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make rules generate clue pressure and institutional obstruction
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-rule-secondary refine
ref: rule:world-secondary -> the world rule that governs this domain
ref: conflict-transform:world-secondary -> how the secondary rule transforms conflict
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make rules generate clue pressure and institutional obstruction
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-reveal-strategy refine
ref: rule-to-conflict:world -> how the world rule translates into narrative conflict
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make rules generate clue pressure and institutional obstruction
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-primary refine
ref: location:LOCATION_001 -> the river evidence hangar beside Lock Six
ref: sensory-anchor:location-primary -> diesel sheen, wet rope, fluorescent glare on metal trays
ref: social-signal:location-primary -> how this location signals social dynamics
ref: symbolic-charge:location-primary -> the symbolic weight this location carries
ref: conflict-use:location-primary -> how this location intensifies conflict
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place feel procedural, political, and materially specific
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: location:LOCATION_002 -> LOCATION_002
ref: sensory-anchor:location-secondary -> diesel sheen, wet rope, fluorescent glare on metal trays
ref: social-signal:location-secondary -> how this location signals social dynamics
ref: symbolic-charge:location-secondary -> the symbolic weight this location carries
ref: conflict-use:location-secondary -> how this location intensifies conflict
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place feel procedural, political, and materially specific
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
