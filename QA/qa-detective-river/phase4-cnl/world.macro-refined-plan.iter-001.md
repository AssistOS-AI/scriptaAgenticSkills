@plot-element-core-object define
name: the stolen drive case
category: event
subtype: secret
function: revelation
stakes: the victim's true cause of death, the integrity of the precinct, and the city contract tied to the riverfront
holders: the redevelopment corridor precinct, $character-pressure-001
activation: the protagonist decodes the stolen drive case near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: macguffin
purpose: the narrative purpose of this plot-device chapter
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: society
function: defines the system that constrains action and shapes conflict
conflict-output: every lawful request alerts the people most interested in erasing the answer
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: resource-scarcity
rule: Any river death inside the redevelopment corridor is reviewed first by the precinct and only later by the civil prosecutor.
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: resource-scarcity
rule: Maintenance overrides can be audited only if their physical hardware is recovered from the lock site.
conflict-transform: Maintenance overrides can be audited only if their physical hardware is recovered from the lock site.
reveal-mode: implicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: embed-rule-in-dialogue
rule-to-conflict: Any river death inside the redevelopment corridor is reviewed first by the precinct and only later by the civil prosecutor. so every lawful request alerts the people most interested in erasing the answer

@location-primary define
name: the river evidence hangar beside Lock Six
role: primary pressure stage
sensory-anchor: diesel sheen, wet rope, fluorescent glare on metal trays
social-signal: everyone speaks in clipped inventory terms because the room only respects what can be tagged
symbolic-charge: a warehouse where facts are stored just long enough to be reassigned
conflict-use: physical traces keep resisting the official story each time they are catalogued

@location-secondary define
name: the abandoned sluice control room above the spillway
role: revelation or narrowing stage
sensory-anchor: diesel sheen, wet rope, fluorescent glare on metal trays
social-signal: everyone speaks in clipped inventory terms because the room only respects what can be tagged
symbolic-charge: a warehouse where facts are stored just long enough to be reassigned
conflict-use: physical traces keep resisting the official story each time they are catalogued

@location-tertiary-001 define
name: Harbor Salvage Shed
role: hidden pressure chamber
sensory-anchor: rope fibers and diesel sheen
social-signal: records move only when someone higher panics
symbolic-charge: a warehouse built for disappearance under fluorescent light
conflict-use: physical evidence keeps forcing argument back into the material world

@location-tertiary-002 define
name: Brine Tunnel Records Cage
role: public consequence stage
sensory-anchor: rust and printer heat
social-signal: everyone speaks in clipped inventory terms
symbolic-charge: salvage dressed up as routine disposal
conflict-use: access itself becomes a measurable risk

@location-tertiary-003 define
name: Coffer Slip Warehouse
role: hidden pressure chamber
sensory-anchor: tidewater trapped under concrete
social-signal: the room respects only what can be tagged
symbolic-charge: command trying to close the case before language catches up
conflict-use: public authority tries to shrink the scale of the crime

@location-tertiary-004 define
name: Lock Six Camera Deck
role: public consequence stage
sensory-anchor: cold fluorescents over wet steel
social-signal: rank still thinks volume can replace fact
symbolic-charge: surveillance failing exactly where power wants darkness
conflict-use: the setting turns delay into tactical interference

@plot-element-secondary-001 define
name: Dock Chain Custody Tag
category: document
subtype: ledger
function: pressure-amplifier
stakes: it can shift the case from accident to institutionally managed murder
holders: the redevelopment corridor precinct, $character-pressure-001
activation: it is logged at the exact minute the official timeline begins to fail
payoff-zone: midbook escalation and final exposure

@plot-element-secondary-002 define
name: Lock Six Override Sheet
category: artifact
subtype: seal
function: proof-carrier
stakes: it makes the precinct itself a viable suspect
holders: the redevelopment corridor precinct, $character-pressure-001
activation: it turns administrative delay into direct obstruction
payoff-zone: late revelation and aftermath

@plot-element-secondary-003 define
name: Harbor Camera Spindle
category: token
subtype: key
function: pressure-amplifier
stakes: it drags redevelopment money directly into the death
holders: the redevelopment corridor precinct, $character-pressure-001
activation: it ties the river scene to a meeting no one admitted took place
payoff-zone: midbook escalation and final exposure

@plot-element-secondary-004 define
name: Cold Room Bolt Packet
category: device
subtype: recording
function: proof-carrier
stakes: it proves procedure was used to bury physical evidence
holders: the redevelopment corridor precinct, $character-pressure-001
activation: someone tries to reclassify it as salvage before the report is filed
payoff-zone: late revelation and aftermath

@world-rule-primary refine
ref: rule:world-primary -> Any river death inside the redevelopment corridor is reviewed first by the precinct and only later by the civil prosecutor.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make rules generate clue pressure and institutional obstruction
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-rule-secondary refine
ref: rule:world-secondary -> Maintenance overrides can be audited only if their physical hardware is recovered from the lock site.
ref: conflict-transform:world-secondary -> Maintenance overrides can be audited only if their physical hardware is recovered from the lock site.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make rules generate clue pressure and institutional obstruction
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-reveal-strategy refine
ref: rule-to-conflict:world -> Any river death inside the redevelopment corridor is reviewed first by the precinct and only later by the civil prosecutor. so every lawful request alerts the people most interested in erasing the answer
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make rules generate clue pressure and institutional obstruction
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-primary refine
ref: sensory-anchor:location-primary -> diesel sheen, wet rope, fluorescent glare on metal trays
ref: social-signal:location-primary -> everyone speaks in clipped inventory terms because the room only respects what can be tagged
ref: symbolic-charge:location-primary -> a warehouse where facts are stored just long enough to be reassigned
ref: conflict-use:location-primary -> physical traces keep resisting the official story each time they are catalogued
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place feel procedural, political, and materially specific
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: sensory-anchor:location-secondary -> diesel sheen, wet rope, fluorescent glare on metal trays
ref: social-signal:location-secondary -> everyone speaks in clipped inventory terms because the room only respects what can be tagged
ref: symbolic-charge:location-secondary -> a warehouse where facts are stored just long enough to be reassigned
ref: conflict-use:location-secondary -> physical traces keep resisting the official story each time they are catalogued
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place feel procedural, political, and materially specific
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-001 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place feel procedural, political, and materially specific
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-002 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place feel procedural, political, and materially specific
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-003 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place feel procedural, political, and materially specific
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-004 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place feel procedural, political, and materially specific
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
