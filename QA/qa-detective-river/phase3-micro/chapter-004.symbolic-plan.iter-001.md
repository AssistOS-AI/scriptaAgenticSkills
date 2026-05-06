@sequence-004-core define
sequence-type: investigation
link-logic: causal
chapter: $chapter-004
objective: {{sequence-objective:bridge}}
scene-chain: scene-004-01, scene-004-02, scene-004-03, scene-004-04, scene-004-05, scene-004-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:bridge}}
supporting-cast: $character-support-004, $character-support-005, $character-support-001
chapter-object: $plot-element-secondary-003
payoff: {{sequence-payoff:bridge}}

@location-004-anchor define
chapter: $chapter-004
primary-setting: $location-tertiary-002
secondary-setting: $location-tertiary-003
transit-setting: $location-tertiary-004
chapter-object: $plot-element-secondary-003
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-004-core apply
chapter: $chapter-004
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:bridge}}
action-limitation: {{action-limitation:bridge}}
conflict-output: {{conflict-output-rule:bridge}}
reveal-pattern: embed-rule-in-dialogue

@arc-004-protagonist map
chapter: $chapter-004
entry-belief: {{entry-belief:protagonist}} at the start of the bridge chapter
challenge: {{challenge:protagonist-bridge}}
insight-pressure: {{insight-pressure:protagonist-bridge}}
exit-belief: {{exit-belief:protagonist}} after the bridge chapter

@arc-004-relationship map
chapter: $chapter-004
pair: $character-protagonist-001, $character-support-004
entry-dynamic: professional-alliance-with-unequal-risk
stress-line: {{relationship-stress:bridge}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-004-core arrange
chapter: $chapter-004
block-order: action-dialogue-description-conflict-revelation-suspense-cliffhanger
reader-effect: {{reader-effect:bridge}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-004-01 define
chapter: $chapter-004
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:bridge-0}}
development: {{scene-development:bridge-0}}
conflict: {{scene-conflict:bridge}}
resolution: {{scene-resolution:bridge-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004
anchor-object: $plot-element-secondary-003
support-focus: $character-support-004
state-change: {{scene-state-change:bridge-mid}}

@action-004-1 place
action-mode: negotiation
scene: $scene-004-01
actor: $character-protagonist-001
goal: {{action-goal:bridge-0}}
obstacle: {{action-obstacle:bridge}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-1 place
scope: $scene-004-01
type: external-character
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:bridge}}

@event-004-1 trigger
scope: $scene-004-01
event-type: crime
trigger: {{event-trigger:bridge-mid}}
impact: {{event-impact:bridge}}
follow-through: {{event-follow-through:bridge-mid}}

@dialogue-turn-004-01-01 line
scene: $scene-004-01
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:bridge-0-0}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-004-01-02 line
scene: $scene-004-01
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:bridge-0-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-004-01-03 line
scene: $scene-004-01
speaker: $character-support-005
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-0-2}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-004-01-04 line
scene: $scene-004-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-004-02 define
chapter: $chapter-004
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:bridge-1}}
development: {{scene-development:bridge-1}}
conflict: {{scene-conflict:bridge}}
resolution: {{scene-resolution:bridge-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-005, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-004
support-focus: $character-support-005
state-change: {{scene-state-change:bridge-mid}}

@action-004-2 place
action-mode: pursuit
scene: $scene-004-02
actor: $character-protagonist-001
goal: {{action-goal:bridge-1}}
obstacle: {{action-obstacle:bridge}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-2 place
scope: $scene-004-02
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:bridge}}

@event-004-2 trigger
scope: $scene-004-02
event-type: revelation
trigger: {{event-trigger:bridge-mid}}
impact: {{event-impact:bridge}}
follow-through: {{event-follow-through:bridge-mid}}

@dialogue-turn-004-02-01 line
scene: $scene-004-02
speaker: $character-support-005
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:bridge-1-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-004-02-02 line
scene: $scene-004-02
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-1-1}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-004-02-03 line
scene: $scene-004-02
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-1-2}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-004-02-04 line
scene: $scene-004-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-004-03 define
chapter: $chapter-004
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:bridge-2}}
development: {{scene-development:bridge-2}}
conflict: {{scene-conflict:bridge}}
resolution: {{scene-resolution:bridge-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001
anchor-object: $plot-element-secondary-003
support-focus: $character-support-001
state-change: {{scene-state-change:bridge-mid}}

@action-004-3 place
action-mode: evasion
scene: $scene-004-03
actor: $character-protagonist-001
goal: {{action-goal:bridge-2}}
obstacle: {{action-obstacle:bridge}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-3 place
scope: $scene-004-03
type: external-supernatural
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:bridge}}

@event-004-3 trigger
scope: $scene-004-03
event-type: crime
trigger: {{event-trigger:bridge-mid}}
impact: {{event-impact:bridge}}
follow-through: {{event-follow-through:bridge-mid}}

@dialogue-turn-004-03-01 line
scene: $scene-004-03
speaker: $character-support-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:bridge-2-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-004-03-02 line
scene: $scene-004-03
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-2-1}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-004-03-03 line
scene: $scene-004-03
speaker: $character-support-004
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:bridge-2-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-004-03-04 line
scene: $scene-004-03
speaker: $character-pressure-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-2-3}}
reaction-beat: {{dialogue-reaction:probe}}

@scene-004-04 define
chapter: $chapter-004
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:bridge-3}}
development: {{scene-development:bridge-3}}
conflict: {{scene-conflict:bridge}}
resolution: {{scene-resolution:bridge-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-004, $character-support-005
anchor-object: $plot-element-secondary-004
support-focus: $character-support-004
state-change: {{scene-state-change:bridge-mid}}

@action-004-4 place
action-mode: negotiation
scene: $scene-004-04
actor: $character-protagonist-001
goal: {{action-goal:bridge-3}}
obstacle: {{action-obstacle:bridge}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-4 place
scope: $scene-004-04
type: external-society
forces: $character-protagonist-001 versus $character-support-005
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:bridge}}

@event-004-4 trigger
scope: $scene-004-04
event-type: crime
trigger: {{event-trigger:bridge-mid}}
impact: {{event-impact:bridge}}
follow-through: {{event-follow-through:bridge-mid}}

@dialogue-turn-004-04-01 line
scene: $scene-004-04
speaker: $character-support-004
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:bridge-3-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-004-04-02 line
scene: $scene-004-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:bridge-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-004-04-03 line
scene: $scene-004-04
speaker: $character-support-005
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:bridge-3-2}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-004-04-04 line
scene: $scene-004-04
speaker: $character-pressure-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:bridge-3-3}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@scene-004-05 define
chapter: $chapter-004
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:bridge-4}}
development: {{scene-development:bridge-4}}
conflict: {{scene-conflict:bridge}}
resolution: {{scene-resolution:bridge-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-005, $character-pressure-001
anchor-object: $plot-element-secondary-003
support-focus: $character-support-005
state-change: {{scene-state-change:bridge-mid}}

@action-004-5 place
action-mode: negotiation
scene: $scene-004-05
actor: $character-protagonist-001
goal: {{action-goal:bridge-4}}
obstacle: {{action-obstacle:bridge}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-5 place
scope: $scene-004-05
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:bridge}}

@event-004-5 trigger
scope: $scene-004-05
event-type: arrival
trigger: {{event-trigger:bridge-mid}}
impact: {{event-impact:bridge}}
follow-through: {{event-follow-through:bridge-mid}}

@dialogue-turn-004-05-01 line
scene: $scene-004-05
speaker: $character-support-005
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:bridge-4-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-004-05-02 line
scene: $scene-004-05
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-4-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-004-05-03 line
scene: $scene-004-05
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-4-2}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-004-05-04 line
scene: $scene-004-05
speaker: $character-pressure-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:bridge-4-3}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-004-06 define
chapter: $chapter-004
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:bridge-5}}
development: {{scene-development:bridge-5}}
conflict: {{scene-conflict:bridge}}
resolution: {{scene-resolution:bridge-final}}
exit: the chapter hands off to a sharper bridge consequence
participants: $character-protagonist-001, $character-support-001, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-004
support-focus: $character-support-001
state-change: {{scene-state-change:bridge-final}}

@action-004-6 place
action-mode: pursuit
scene: $scene-004-06
actor: $character-protagonist-001
goal: {{action-goal:bridge-5}}
obstacle: {{action-obstacle:bridge}}
result: {{action-result:bridge-final}}

@conflict-004-6 place
scope: $scene-004-06
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:bridge}}

@event-004-6 trigger
scope: $scene-004-06
event-type: loss
trigger: {{event-trigger:bridge-final}}
impact: {{event-impact:bridge}}
follow-through: {{event-follow-through:bridge-final}}

@dialogue-turn-004-06-01 line
scene: $scene-004-06
speaker: $character-support-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:bridge-5-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-004-06-02 line
scene: $scene-004-06
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-5-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-004-06-03 line
scene: $scene-004-06
speaker: $character-support-004
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-5-2}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-004-06-04 line
scene: $scene-004-06
speaker: $character-pressure-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:bridge-5-3}}
reaction-beat: {{dialogue-reaction:commit}}

@description-004-atmosphere apply
scope: $chapter-004
description-type: setting
focus: {{description-focus:detective-police}}
function: narrative
rhythm-effect: frame

@dialogue-004-core apply
scene: $scene-004-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-004, $character-support-005
exchange-type: question-answer
purpose: information
subtext: {{dialogue-core-subtext:detective-police}}

@narration-004-bridge apply
scope: $chapter-004
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-004-core apply
scene: $scene-004-06
character: $character-protagonist-001
function: characterization
trigger: {{monologue-trigger:bridge}}
texture: fragmented

@suspense-004-core build
scope: $chapter-004
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:bridge}}
delay-technique: delayed-information
payoff-zone: event-004-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-004-core hold
scope: $chapter-004
pause-function: explanatory
focus: {{pause-focus:bridge}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-004-core burst
scope: $chapter-004
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:bridge}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-004-06

@cliffhanger-004-exit cut
scope: $chapter-004
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:bridge}}
continuation-pressure: {{cliffhanger-continuation:bridge}}
