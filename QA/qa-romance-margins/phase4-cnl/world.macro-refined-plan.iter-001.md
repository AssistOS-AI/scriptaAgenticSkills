@plot-element-core-object define
category: relationship
subtype: discovery
function: revelation
stakes: the studio's survival, the commission that could define both careers, and the possibility of loving honestly again
holders: the Mercer Estate, Cassia Mercer
activation: the protagonist decodes the doubled-margin proof set near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: chekhov-gun
purpose: the narrative purpose of this plot-device chapter
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: physics
function: defines the system that constrains action and shapes conflict
conflict-output: shared labor turns every practical choice into a referendum on trust, apology, and future risk
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: metaphysical-cost
rule: The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: physical-limitation
rule: The final edition may include one unscheduled page only if both lead signatories approve it before launch.
conflict-transform: The final edition may include one unscheduled page only if both lead signatories approve it before launch.
reveal-mode: structural
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: embed-rule-in-dialogue
rule-to-conflict: The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women. so shared labor turns every practical choice into a referendum on trust, apology, and future risk

@location-primary define
name: the inherited letterpress studio on Brindle Lane
role: primary pressure stage
sensory-anchor: ink oil, paper dust, hot metal type, winter air trapped in skylight glass
social-signal: work replaces confession here because every surface carries the memory of collaboration
symbolic-charge: a place where touch leaves visible marks and every correction shows
conflict-use: routine tasks keep exposing the intimacy both women call professional

@location-secondary define
name: the riverside paper warehouse leased for the launch
role: revelation or narrowing stage
sensory-anchor: cold rope, pallet wood, citrus cleaner, damp cardboard
social-signal: public ambition feels possible here only if the private partnership holds together
symbolic-charge: a future-facing space that keeps demanding an honest version of the past
conflict-use: the launch site turns private hesitation into visible consequence

@world-rule-primary refine
ref: rule:world-primary -> The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: treat social expectations as real constraints on intimacy and choice
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-rule-secondary refine
ref: rule:world-secondary -> The final edition may include one unscheduled page only if both lead signatories approve it before launch.
ref: conflict-transform:world-secondary -> The final edition may include one unscheduled page only if both lead signatories approve it before launch.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: treat social expectations as real constraints on intimacy and choice
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-reveal-strategy refine
ref: rule-to-conflict:world -> The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women. so shared labor turns every practical choice into a referendum on trust, apology, and future risk
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: treat social expectations as real constraints on intimacy and choice
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-primary refine
ref: location:primary-001 -> the inherited letterpress studio on Brindle Lane
ref: sensory-anchor:location-primary -> ink oil, paper dust, hot metal type, winter air trapped in skylight glass
ref: social-signal:location-primary -> work replaces confession here because every surface carries the memory of collaboration
ref: symbolic-charge:location-primary -> a place where touch leaves visible marks and every correction shows
ref: conflict-use:location-primary -> routine tasks keep exposing the intimacy both women call professional
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place intimate through work, routine, and shared objects
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: location:secondary-001 -> the riverside paper warehouse leased for the launch
ref: sensory-anchor:location-secondary -> cold rope, pallet wood, citrus cleaner, damp cardboard
ref: social-signal:location-secondary -> public ambition feels possible here only if the private partnership holds together
ref: symbolic-charge:location-secondary -> a future-facing space that keeps demanding an honest version of the past
ref: conflict-use:location-secondary -> the launch site turns private hesitation into visible consequence
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place intimate through work, routine, and shared objects
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
