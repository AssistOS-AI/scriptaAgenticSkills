@plot-element-core-object define
name: the erased council vote archive
category: physical-object
subtype: deadline
function: revelation
stakes: the station's political legitimacy, Elian's own complicity, and the residents' right to remember
holders: Nacre Station Council, $character-pressure-001
activation: the protagonist decodes the erased council vote archive near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: flash-forward
purpose: the narrative purpose of this plot-device chapter
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: technology
magic-determinacy: semi-hard
function: defines the system that constrains action and shapes conflict
conflict-output: technical maintenance becomes indistinguishable from political censorship
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: temporal-law
rule: The station's peace index allows the council to authorize memory smoothing whenever dissent crosses a quantified risk threshold.
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: technological-restriction
rule: Hidden archives can be opened only through paired biometric authorization from architecture and flight systems.
conflict-transform: Hidden archives can be opened only through paired biometric authorization from architecture and flight systems.
reveal-mode: implicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: show-exception-to-reveal-rule
rule-to-conflict: The station's peace index allows the council to authorize memory smoothing whenever dissent crosses a quantified risk threshold. so technical maintenance becomes indistinguishable from political censorship

@location-primary define
name: the mnemonic orchard ring
role: primary pressure stage
sensory-anchor: ionized citrus, coolant mist, glass leaves pulsing with archived light
social-signal: citizens come here to rehearse approved memories in carefully moderated quiet
symbolic-charge: an engineered garden where recollection has become a civic utility
conflict-use: intimacy keeps colliding with the fact that every remembered detail may be edited

@location-secondary define
name: the sealed archive airlock beneath Council Spoke Three
role: revelation or narrowing stage
sensory-anchor: static-dry metal, cryogenic dust, dormant server fans
social-signal: only governance enters here with official reason, which is why truth feels contraband
symbolic-charge: the station's missing conscience locked behind procedural sterility
conflict-use: once opened, the room turns abstract ethics into recoverable names and files

@world-rule-primary refine
ref: rule:world-primary -> The station's peace index allows the council to authorize memory smoothing whenever dissent crosses a quantified risk threshold.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: let system rules create action limits, not just background lore
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-rule-secondary refine
ref: rule:world-secondary -> Hidden archives can be opened only through paired biometric authorization from architecture and flight systems.
ref: conflict-transform:world-secondary -> Hidden archives can be opened only through paired biometric authorization from architecture and flight systems.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: let system rules create action limits, not just background lore
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-reveal-strategy refine
ref: rule-to-conflict:world -> The station's peace index allows the council to authorize memory smoothing whenever dissent crosses a quantified risk threshold. so technical maintenance becomes indistinguishable from political censorship
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: let system rules create action limits, not just background lore
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-primary refine
ref: location:primary-001 -> the mnemonic orchard ring
ref: sensory-anchor:location-primary -> ionized citrus, coolant mist, glass leaves pulsing with archived light
ref: social-signal:location-primary -> citizens come here to rehearse approved memories in carefully moderated quiet
ref: symbolic-charge:location-primary -> an engineered garden where recollection has become a civic utility
ref: conflict-use:location-primary -> intimacy keeps colliding with the fact that every remembered detail may be edited
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting engineered, tactile, and ethically revealing
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: location:secondary-001 -> the sealed archive airlock beneath Council Spoke Three
ref: sensory-anchor:location-secondary -> static-dry metal, cryogenic dust, dormant server fans
ref: social-signal:location-secondary -> only governance enters here with official reason, which is why truth feels contraband
ref: symbolic-charge:location-secondary -> the station's missing conscience locked behind procedural sterility
ref: conflict-use:location-secondary -> once opened, the room turns abstract ethics into recoverable names and files
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting engineered, tactile, and ethically revealing
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
