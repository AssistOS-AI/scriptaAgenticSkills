@plot-element-core-object define
name: the flood compensation ledger
category: physical-object
subtype: artifact
function: revelation
stakes: her brother's last testimony, her mother's survival, and the town's false innocence
holders: Greywater mediation office, $character-pressure-001
activation: the protagonist decodes the flood compensation ledger near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: delayed-reveal
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
rule-type: social-norm
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
reveal-mode: implicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: embed-rule-in-dialogue
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
sensory-anchor: wet wool, radiator hiss, mildew trapped in paper bindings
social-signal: every conversation sounds temporary because the office trained people to trade truth for calm
symbolic-charge: a civic room designed to soften language until responsibility disappears
conflict-use: private negotiations keep collapsing into accusations that belong in public

@location-tertiary-001 define
name: Saltglass Walk
role: hidden pressure chamber
sensory-anchor: mildew trapped in ledger cloth
social-signal: everyone lowers their voice before naming the dead
symbolic-charge: public service stretched over private rot
conflict-use: every corridor funnels people back toward the same compromise

@location-tertiary-002 define
name: The Drowned Registry Annex
role: public consequence stage
sensory-anchor: tide-mud under polished shoes
social-signal: public pity and civic gossip mix without warning
symbolic-charge: an archive swollen with selective memory
conflict-use: official compassion becomes a shield for delay

@location-tertiary-003 define
name: Ravelin Ferry Office
role: hidden pressure chamber
sensory-anchor: brackish rope and carbon paper
social-signal: small courtesies are used to slow every accusation
symbolic-charge: grief staged as procedure
conflict-use: private pleading keeps colliding with civic performance

@location-tertiary-004 define
name: Greymarket Steps
role: public consequence stage
sensory-anchor: wet stone and candle soot
social-signal: records speak more honestly than the people guarding them
symbolic-charge: a promenade that remembers each evacuation
conflict-use: shared space removes the luxury of private denial

@plot-element-secondary-001 define
name: Black Ribbon Register
category: document
subtype: ledger
function: pressure-amplifier
stakes: it can prove the institution profited from selective silence
holders: Greywater mediation office, $character-pressure-001
activation: it is discovered inside a locked civic drawer after hours
payoff-zone: midbook escalation and final exposure

@plot-element-secondary-002 define
name: Salt-Stamped Evacuation File
category: artifact
subtype: seal
function: proof-carrier
stakes: it links family survival to the same compromise now under suspicion
holders: Greywater mediation office, $character-pressure-001
activation: it surfaces during a memorial exchange that should have remained ceremonial
payoff-zone: late revelation and aftermath

@plot-element-secondary-003 define
name: Floodplain Key Packet
category: token
subtype: key
function: pressure-amplifier
stakes: it makes compassion itself look like a laundering mechanism
holders: Greywater mediation office, $character-pressure-001
activation: it reappears when the public story begins to contradict the dates
payoff-zone: midbook escalation and final exposure

@plot-element-secondary-004 define
name: Greywater Ledger
category: device
subtype: recording
function: proof-carrier
stakes: it carries evidence that mourning was administratively curated
holders: Greywater mediation office, $character-pressure-001
activation: someone produces it while trying to make grief look procedural
payoff-zone: late revelation and aftermath

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
ref: sensory-anchor:location-primary -> wet wool, radiator hiss, mildew trapped in paper bindings
ref: social-signal:location-primary -> every conversation sounds temporary because the office trained people to trade truth for calm
ref: symbolic-charge:location-primary -> a civic room designed to soften language until responsibility disappears
ref: conflict-use:location-primary -> private negotiations keep collapsing into accusations that belong in public
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting socially legible and emotionally pressurized instead of merely visual
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: sensory-anchor:location-secondary -> wet wool, radiator hiss, mildew trapped in paper bindings
ref: social-signal:location-secondary -> every conversation sounds temporary because the office trained people to trade truth for calm
ref: symbolic-charge:location-secondary -> a civic room designed to soften language until responsibility disappears
ref: conflict-use:location-secondary -> private negotiations keep collapsing into accusations that belong in public
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting socially legible and emotionally pressurized instead of merely visual
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-001 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting socially legible and emotionally pressurized instead of merely visual
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-002 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting socially legible and emotionally pressurized instead of merely visual
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-003 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting socially legible and emotionally pressurized instead of merely visual
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-004 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting socially legible and emotionally pressurized instead of merely visual
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
