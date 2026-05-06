@plot-element-core-object define
name: the stolen drive case
category: event
subtype: secret
function: revelation
stakes: {{stakes:plot-element}}
holders: the redevelopment corridor precinct, $character-pressure-001
activation: the protagonist decodes the stolen drive case near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: macguffin
purpose: {{purpose:plot-device}}
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: society
function: defines the system that constrains action and shapes conflict
conflict-output: {{conflict-output:world-system}}
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: resource-scarcity
rule: {{rule:world-primary}}
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: resource-scarcity
rule: {{rule:world-secondary}}
conflict-transform: {{conflict-transform:world-secondary}}
reveal-mode: implicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: embed-rule-in-dialogue
rule-to-conflict: {{rule-to-conflict:world}}

@location-primary define
name: the river evidence hangar beside Lock Six
role: primary pressure stage
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@location-secondary define
name: the abandoned sluice control room above the spillway
role: revelation or narrowing stage
sensory-anchor: {{sensory-anchor:location-secondary}}
social-signal: {{social-signal:location-secondary}}
symbolic-charge: {{symbolic-charge:location-secondary}}
conflict-use: {{conflict-use:location-secondary}}

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
