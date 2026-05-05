@plot-element-core-object define
category: relationship
subtype: prophecy
function: revelation
stakes: the valley's survival, the memory of the consumed dead, and Neris's right to belong without domination
holders: House Vale, Regent Maeron Vale
activation: the protagonist decodes the original vow chronicle near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: delayed-reveal
purpose: the narrative purpose of this plot-device chapter
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: biology
magic-determinacy: semi-hard
function: defines the system that constrains action and shapes conflict
conflict-output: every promise of protection arrives already entangled with control, debt, and ancestral shame
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: physical-limitation
rule: The valley wards hold only while an heir keeps the furnace vow active through lineage-bound ritual obedience.
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: technological-restriction
rule: A ward can be reforged through named communal consent, but only if the hidden dead are spoken publicly first.
conflict-transform: A ward can be reforged through named communal consent, but only if the hidden dead are spoken publicly first.
reveal-mode: explicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: show-exception-to-reveal-rule
rule-to-conflict: The valley wards hold only while an heir keeps the furnace vow active through lineage-bound ritual obedience. so every promise of protection arrives already entangled with control, debt, and ancestral shame

@location-primary define
name: the ash terrace above Drovna village
role: primary pressure stage
sensory-anchor: cedar smoke, warm soot under snowlight, bells muffled by volcanic dust
social-signal: every greeting sounds half like welcome and half like ritual surveillance
symbolic-charge: a homeland that records lineage in the same ash that settles on the living
conflict-use: belonging feels real here only when obedience remains visible

@location-secondary define
name: the vow furnace catacombs
role: revelation or narrowing stage
sensory-anchor: ember breath, iron prayer chains, old ash turning slick under candle wax
social-signal: power here speaks in liturgy because law and sacrifice were forged together
symbolic-charge: the family's hidden engine where legitimacy is literally burned into permanence
conflict-use: secrets become material once spoken beside the furnace that consumed them

@world-rule-primary refine
ref: rule:world-primary -> The valley wards hold only while an heir keeps the furnace vow active through lineage-bound ritual obedience.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make laws magical, political, and costly in the same movement
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-rule-secondary refine
ref: rule:world-secondary -> A ward can be reforged through named communal consent, but only if the hidden dead are spoken publicly first.
ref: conflict-transform:world-secondary -> A ward can be reforged through named communal consent, but only if the hidden dead are spoken publicly first.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make laws magical, political, and costly in the same movement
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-reveal-strategy refine
ref: rule-to-conflict:world -> The valley wards hold only while an heir keeps the furnace vow active through lineage-bound ritual obedience. so every promise of protection arrives already entangled with control, debt, and ancestral shame
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make laws magical, political, and costly in the same movement
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-primary refine
ref: location:primary-001 -> the ash terrace above Drovna village
ref: sensory-anchor:location-primary -> cedar smoke, warm soot under snowlight, bells muffled by volcanic dust
ref: social-signal:location-primary -> every greeting sounds half like welcome and half like ritual surveillance
ref: symbolic-charge:location-primary -> a homeland that records lineage in the same ash that settles on the living
ref: conflict-use:location-primary -> belonging feels real here only when obedience remains visible
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place sensorial, mythic, and constrained by cost
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: location:secondary-001 -> the vow furnace catacombs
ref: sensory-anchor:location-secondary -> ember breath, iron prayer chains, old ash turning slick under candle wax
ref: social-signal:location-secondary -> power here speaks in liturgy because law and sacrifice were forged together
ref: symbolic-charge:location-secondary -> the family's hidden engine where legitimacy is literally burned into permanence
ref: conflict-use:location-secondary -> secrets become material once spoken beside the furnace that consumed them
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place sensorial, mythic, and constrained by cost
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
