@plot-element-core-object define
name: the flood compensation ledger
category: relationship
subtype: inheritance
function: revelation
stakes: her brother's last testimony, her mother's survival, and the town's false innocence
holders: the Greywater Mediation Office, $character-pressure-001
activation: the protagonist decodes the flood compensation ledger near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: chekhov-gun
purpose: the narrative purpose of this plot-device chapter
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: society
function: defines the system that constrains action and shapes conflict
conflict-output: bureaucratic delay turns each act of mourning into a negotiation over who gets to keep dignity
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: technological-restriction
rule: Every flood-district compensation claim must pass through the mediation office before it reaches the court archive.
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: social-norm
rule: Memorial plaques can be amended only when two living witnesses testify together in public.
conflict-transform: Memorial plaques can be amended only when two living witnesses testify together in public.
reveal-mode: explicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: show-consequence-first-explain-cause-later
rule-to-conflict: Every flood-district compensation claim must pass through the mediation office before it reaches the court archive. so bureaucratic delay turns each act of mourning into a negotiation over who gets to keep dignity

@location-primary define
name: the shuttered mediation office above the old customs hall
role: primary pressure stage
sensory-anchor: wet wool, radiator hiss, mildew trapped in paper bindings
social-signal: every conversation sounds temporary because the office trained people to trade truth for calm
symbolic-charge: a civic room designed to soften language until responsibility disappears
conflict-use: private negotiations keep collapsing into accusations that belong in public

@location-secondary define
name: the flood memorial crypt beneath Saint Rowan chapel
role: revelation or narrowing stage
sensory-anchor: cold limestone, candle smoke, varnish over damp names
social-signal: mourning is choreographed here so that blame never reaches the living officials
symbolic-charge: the dead are remembered through inscriptions edited by the same people who failed them
conflict-use: witness testimony becomes unbearable once spoken directly among the names of the lost

@world-rule-primary refine
ref: rule:world-primary -> Every flood-district compensation claim must pass through the mediation office before it reaches the court archive.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: show how institutions and norms shape action without over-explaining them
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-rule-secondary refine
ref: rule:world-secondary -> Memorial plaques can be amended only when two living witnesses testify together in public.
ref: conflict-transform:world-secondary -> Memorial plaques can be amended only when two living witnesses testify together in public.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: show how institutions and norms shape action without over-explaining them
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-reveal-strategy refine
ref: rule-to-conflict:world -> Every flood-district compensation claim must pass through the mediation office before it reaches the court archive. so bureaucratic delay turns each act of mourning into a negotiation over who gets to keep dignity
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: show how institutions and norms shape action without over-explaining them
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-primary refine
ref: location:primary-001 -> the shuttered mediation office above the old customs hall
ref: sensory-anchor:location-primary -> wet wool, radiator hiss, mildew trapped in paper bindings
ref: social-signal:location-primary -> every conversation sounds temporary because the office trained people to trade truth for calm
ref: symbolic-charge:location-primary -> a civic room designed to soften language until responsibility disappears
ref: conflict-use:location-primary -> private negotiations keep collapsing into accusations that belong in public
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting socially legible and emotionally pressurized instead of merely visual
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: location:secondary-001 -> the flood memorial crypt beneath Saint Rowan chapel
ref: sensory-anchor:location-secondary -> cold limestone, candle smoke, varnish over damp names
ref: social-signal:location-secondary -> mourning is choreographed here so that blame never reaches the living officials
ref: symbolic-charge:location-secondary -> the dead are remembered through inscriptions edited by the same people who failed them
ref: conflict-use:location-secondary -> witness testimony becomes unbearable once spoken directly among the names of the lost
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting socially legible and emotionally pressurized instead of merely visual
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
