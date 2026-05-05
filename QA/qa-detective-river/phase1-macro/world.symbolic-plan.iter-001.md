@plot-element-core-object define
name: {{object:OBJECT_001}}
category: relationship
subtype: secret
function: revelation
stakes: {{stakes:plot-element}}
holders: {{organization:ORG_001}}, $character-pressure-001
activation: the protagonist decodes {{object:OBJECT_001}} near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: foreshadowing
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
rule-type: social-norm
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
reveal-mode: explicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: show-consequence-first-explain-cause-later
rule-to-conflict: {{rule-to-conflict:world}}

@location-primary define
name: {{location:LOCATION_001}}
role: primary pressure stage
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@location-secondary define
name: {{location:LOCATION_002}}
role: revelation or narrowing stage
sensory-anchor: {{sensory-anchor:location-secondary}}
social-signal: {{social-signal:location-secondary}}
symbolic-charge: {{symbolic-charge:location-secondary}}
conflict-use: {{conflict-use:location-secondary}}
