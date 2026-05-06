@plot-element-core-object define
name: the erased vote lattice
category: physical-object
subtype: prophecy
function: revelation
stakes: the station's political legitimacy, Elian's own complicity, and the residents' right to remember
holders: the Nacre station council, $character-pressure-001
activation: the protagonist decodes the erased vote lattice near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: red-herring
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
rule-type: technological-restriction
rule: The station's peace index allows the council to authorize memory smoothing whenever dissent crosses a quantified risk threshold.
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: physical-limitation
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
sensory-anchor: ionized citrus, coolant mist, glass leaves pulsing with archived light
social-signal: citizens come here to rehearse approved memories in carefully moderated quiet
symbolic-charge: an engineered garden where recollection has become a civic utility
conflict-use: intimacy keeps colliding with the fact that every remembered detail may be edited

@location-tertiary-001 define
name: Dockside Cooling Loop
role: hidden pressure chamber
sensory-anchor: magnetic vibration in the floor plates
social-signal: movement is logged before motive can be stated
symbolic-charge: public transit shaped like a circulatory lie
conflict-use: technical access becomes moral trespass

@location-tertiary-002 define
name: Spoke Nine Transit Vein
role: public consequence stage
sensory-anchor: soft lattice hum below civic announcements
social-signal: citizens speak like witnesses to an edited memory
symbolic-charge: democracy stripped to a museum fragment
conflict-use: the architecture converts delay into pacification

@location-tertiary-003 define
name: Mnemonic Orchard Spine
role: hidden pressure chamber
sensory-anchor: dustless seats and archived breath
social-signal: the room was built to make dissent look accidental
symbolic-charge: infrastructure carrying the station's hidden panic
conflict-use: shared memory fails in the exact place everyone trusts most

@location-tertiary-004 define
name: The Quiet Vote Chamber
role: public consequence stage
sensory-anchor: frost against warm conduit glass
social-signal: comfort has been engineered past the point of honesty
symbolic-charge: the station trying to route unrest as if it were waste heat
conflict-use: distance only sharpens the ethical cost

@plot-element-secondary-001 define
name: Nacre Vote Lattice
category: document
subtype: ledger
function: pressure-amplifier
stakes: it proves the station automated obedience through memory loss
holders: the Nacre station council, $character-pressure-001
activation: it begins broadcasting its own audit trail under load
payoff-zone: midbook escalation and final exposure

@plot-element-secondary-002 define
name: Halo Recall Cylinder
category: artifact
subtype: seal
function: proof-carrier
stakes: it makes civic harmony read like managed coercion
holders: the Nacre station council, $character-pressure-001
activation: it ties the memory smoothing protocol to an old authorization signature
payoff-zone: late revelation and aftermath

@plot-element-secondary-003 define
name: Dock Nine Archive Key
category: token
subtype: key
function: pressure-amplifier
stakes: it can restore one erased vote and unravel years of counterfeit consent
holders: the Nacre station council, $character-pressure-001
activation: it emerges from maintenance metadata no civilian was meant to inspect
payoff-zone: midbook escalation and final exposure

@plot-element-secondary-004 define
name: Pacification Patch Core
category: device
subtype: recording
function: proof-carrier
stakes: it can return public memory faster than the council can erase it again
holders: the Nacre station council, $character-pressure-001
activation: it turns a technical anomaly into a constitutional breach
payoff-zone: late revelation and aftermath

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
ref: sensory-anchor:location-primary -> ionized citrus, coolant mist, glass leaves pulsing with archived light
ref: social-signal:location-primary -> citizens come here to rehearse approved memories in carefully moderated quiet
ref: symbolic-charge:location-primary -> an engineered garden where recollection has become a civic utility
ref: conflict-use:location-primary -> intimacy keeps colliding with the fact that every remembered detail may be edited
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting engineered, tactile, and ethically revealing
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: sensory-anchor:location-secondary -> ionized citrus, coolant mist, glass leaves pulsing with archived light
ref: social-signal:location-secondary -> citizens come here to rehearse approved memories in carefully moderated quiet
ref: symbolic-charge:location-secondary -> an engineered garden where recollection has become a civic utility
ref: conflict-use:location-secondary -> intimacy keeps colliding with the fact that every remembered detail may be edited
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting engineered, tactile, and ethically revealing
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-001 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting engineered, tactile, and ethically revealing
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-002 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting engineered, tactile, and ethically revealing
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-003 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting engineered, tactile, and ethically revealing
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-004 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the setting engineered, tactile, and ethically revealing
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
