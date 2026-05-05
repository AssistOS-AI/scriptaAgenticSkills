@plot-element-core-object define
category: relationship
subtype: discovery
function: revelation
stakes: {{stakes:plot-element}}
holders: {{organization:institution-001}}, {{character:pressure-001}}
activation: the protagonist decodes {{object:plot-001}} near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: chekhov-gun
purpose: {{purpose:plot-device}}
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: physics
function: defines the system that constrains action and shapes conflict
conflict-output: {{conflict-output:world-system}}
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: metaphysical-cost
rule: {{rule:world-primary}}
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: physical-limitation
rule: {{rule:world-secondary}}
conflict-transform: {{conflict-transform:world-secondary}}
reveal-mode: structural
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: embed-rule-in-dialogue
rule-to-conflict: {{rule-to-conflict:world}}

@location-primary define
name: {{location:primary-001}}
role: primary pressure stage
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@location-secondary define
name: {{location:secondary-001}}
role: revelation or narrowing stage
sensory-anchor: {{sensory-anchor:location-secondary}}
social-signal: {{social-signal:location-secondary}}
symbolic-charge: {{symbolic-charge:location-secondary}}
conflict-use: {{conflict-use:location-secondary}}
