@sequence-010-core define
sequence-type: investigation
link-logic: causal
chapter: $chapter-010
objective: {{sequence-objective:revelation}}
scene-chain: scene-010-01, scene-010-02, scene-010-03, scene-010-04, scene-010-05, scene-010-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:revelation}}
supporting-cast: $character-support-005, $character-support-001, $character-support-002
chapter-object: $plot-element-secondary-004
payoff: {{sequence-payoff:revelation}}

@location-010-anchor define
chapter: $chapter-010
primary-setting: $location-tertiary-002
secondary-setting: $location-tertiary-003
transit-setting: $location-tertiary-004
chapter-object: $plot-element-secondary-004
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-010-core apply
chapter: $chapter-010
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:revelation}}
action-limitation: {{action-limitation:revelation}}
conflict-output: {{conflict-output-rule:revelation}}
reveal-pattern: embed-rule-in-dialogue

@arc-010-protagonist map
chapter: $chapter-010
entry-belief: {{entry-belief:protagonist}} at the start of the revelation chapter
challenge: {{challenge:protagonist-revelation}}
insight-pressure: {{insight-pressure:protagonist-revelation}}
exit-belief: {{exit-belief:protagonist}} after the revelation chapter

@arc-010-relationship map
chapter: $chapter-010
pair: $character-protagonist-001, $character-support-005
entry-dynamic: careful-cooperation-strained-by-withheld-history
stress-line: {{relationship-stress:revelation}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-010-core arrange
chapter: $chapter-010
block-order: action-dialogue-description-conflict-revelation-suspense-cliffhanger
reader-effect: {{reader-effect:revelation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-010-01 define
chapter: $chapter-010
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:revelation-0}}
development: {{scene-development:revelation-0}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-005
anchor-object: $plot-element-secondary-004
support-focus: $character-support-005
state-change: {{scene-state-change:revelation-mid}}

@action-010-1 place
action-mode: revelation-act
scene: $scene-010-01
actor: $character-protagonist-001
goal: {{action-goal:revelation-0}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-010-1 place
scope: $scene-010-01
type: external-society
forces: $character-protagonist-001 versus $character-support-005
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:revelation}}

@event-010-1 trigger
scope: $scene-010-01
event-type: deadline
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-010-01-01 line
scene: $scene-010-01
speaker: $character-support-005
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:revelation-0-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-010-01-02 line
scene: $scene-010-01
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-0-1}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-01-03 line
scene: $scene-010-01
speaker: $character-support-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:revelation-0-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-010-01-04 line
scene: $scene-010-01
speaker: $character-pressure-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:revelation-0-3}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@scene-010-02 define
chapter: $chapter-010
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:revelation-1}}
development: {{scene-development:revelation-1}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-001, $character-support-002, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-001
state-change: {{scene-state-change:revelation-mid}}

@action-010-2 place
action-mode: evasion
scene: $scene-010-02
actor: $character-protagonist-001
goal: {{action-goal:revelation-1}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-010-2 place
scope: $scene-010-02
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:revelation}}

@event-010-2 trigger
scope: $scene-010-02
event-type: deadline
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-010-02-01 line
scene: $scene-010-02
speaker: $character-support-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:revelation-1-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-010-02-02 line
scene: $scene-010-02
speaker: $character-protagonist-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:revelation-1-1}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-010-02-03 line
scene: $scene-010-02
speaker: $character-support-002
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:revelation-1-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-010-02-04 line
scene: $scene-010-02
speaker: $character-pressure-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-1-3}}
reaction-beat: {{dialogue-reaction:probe}}

@scene-010-03 define
chapter: $chapter-010
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:revelation-2}}
development: {{scene-development:revelation-2}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002
anchor-object: $plot-element-secondary-004
support-focus: $character-support-002
state-change: {{scene-state-change:revelation-mid}}

@action-010-3 place
action-mode: attempt
scene: $scene-010-03
actor: $character-protagonist-001
goal: {{action-goal:revelation-2}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-010-3 place
scope: $scene-010-03
type: external-supernatural
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:revelation}}

@event-010-3 trigger
scope: $scene-010-03
event-type: loss
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-010-03-01 line
scene: $scene-010-03
speaker: $character-support-002
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-2-0}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-010-03-02 line
scene: $scene-010-03
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-2-1}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-03-03 line
scene: $scene-010-03
speaker: $character-support-005
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-2-2}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-03-04 line
scene: $scene-010-03
speaker: $character-pressure-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-2-3}}
reaction-beat: {{dialogue-reaction:probe}}

@scene-010-04 define
chapter: $chapter-010
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:revelation-3}}
development: {{scene-development:revelation-3}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-005, $character-support-001
anchor-object: $plot-element-core-object
support-focus: $character-support-005
state-change: {{scene-state-change:revelation-mid}}

@action-010-4 place
action-mode: negotiation
scene: $scene-010-04
actor: $character-protagonist-001
goal: {{action-goal:revelation-3}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-010-4 place
scope: $scene-010-04
type: internal
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:revelation}}

@event-010-4 trigger
scope: $scene-010-04
event-type: deadline
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-010-04-01 line
scene: $scene-010-04
speaker: $character-support-005
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:revelation-3-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-010-04-02 line
scene: $scene-010-04
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-3-1}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-04-03 line
scene: $scene-010-04
speaker: $character-support-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:revelation-3-2}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-010-04-04 line
scene: $scene-010-04
speaker: $character-pressure-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-3-3}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-010-05 define
chapter: $chapter-010
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:revelation-4}}
development: {{scene-development:revelation-4}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-004
support-focus: $character-support-001
state-change: {{scene-state-change:revelation-mid}}

@action-010-5 place
action-mode: pursuit
scene: $scene-010-05
actor: $character-protagonist-001
goal: {{action-goal:revelation-4}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-010-5 place
scope: $scene-010-05
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:revelation}}

@event-010-5 trigger
scope: $scene-010-05
event-type: reversal
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-010-05-01 line
scene: $scene-010-05
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-05-02 line
scene: $scene-010-05
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-4-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-010-05-03 line
scene: $scene-010-05
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-010-05-04 line
scene: $scene-010-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-010-06 define
chapter: $chapter-010
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:revelation-5}}
development: {{scene-development:revelation-5}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-final}}
exit: the chapter hands off to a sharper revelation consequence
participants: $character-protagonist-001, $character-support-002, $character-support-005, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-002
state-change: {{scene-state-change:revelation-final}}

@action-010-6 place
action-mode: negotiation
scene: $scene-010-06
actor: $character-protagonist-001
goal: {{action-goal:revelation-5}}
obstacle: {{action-obstacle:revelation}}
result: {{action-result:revelation-final}}

@conflict-010-6 place
scope: $scene-010-06
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:revelation}}

@event-010-6 trigger
scope: $scene-010-06
event-type: loss
trigger: {{event-trigger:revelation-final}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-final}}

@dialogue-turn-010-06-01 line
scene: $scene-010-06
speaker: $character-support-002
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:revelation-5-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-010-06-02 line
scene: $scene-010-06
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-5-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-010-06-03 line
scene: $scene-010-06
speaker: $character-support-005
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-5-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-010-06-04 line
scene: $scene-010-06
speaker: $character-pressure-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:revelation-5-3}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@description-010-atmosphere apply
scope: $chapter-010
description-type: setting
focus: {{description-focus:detective-police}}
function: narrative
rhythm-effect: frame

@dialogue-010-core apply
scene: $scene-010-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-005, $character-support-001
exchange-type: question-answer
purpose: information
subtext: {{dialogue-core-subtext:detective-police}}

@narration-010-bridge apply
scope: $chapter-010
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-010-core apply
scene: $scene-010-06
character: $character-protagonist-001
function: characterization
trigger: {{monologue-trigger:revelation}}
texture: fragmented

@suspense-010-core build
scope: $chapter-010
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:revelation}}
delay-technique: delayed-information
payoff-zone: event-010-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-010-core hold
scope: $chapter-010
pause-function: explanatory
focus: {{pause-focus:revelation}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-010-core burst
scope: $chapter-010
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:revelation}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-010-06

@cliffhanger-010-exit cut
scope: $chapter-010
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:revelation}}
continuation-pressure: {{cliffhanger-continuation:revelation}}
