@sequence-011-core define
sequence-type: investigation
link-logic: causal
chapter: $chapter-011
objective: {{sequence-objective:culmination}}
scene-chain: scene-011-01, scene-011-02, scene-011-03, scene-011-04, scene-011-05, scene-011-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
supporting-cast: $character-support-001, $character-support-002, $character-support-003
chapter-object: $plot-element-core-object
payoff: {{sequence-payoff:culmination}}

@location-011-anchor define
chapter: $chapter-011
primary-setting: $location-tertiary-003
secondary-setting: $location-tertiary-004
transit-setting: $location-primary
chapter-object: $plot-element-core-object
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-011-core apply
chapter: $chapter-011
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: show-consequence-first-explain-cause-later

@arc-011-protagonist map
chapter: $chapter-011
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-011-relationship map
chapter: $chapter-011
pair: $character-protagonist-001, $character-support-001
entry-dynamic: oath-bound-cooperation-shadowed-by-allegiance
stress-line: {{relationship-stress:culmination}}
exit-dynamic: altered-but-legible-bond

@alternation-011-core arrange
chapter: $chapter-011
block-order: action-dialogue-description-conflict-revelation-suspense-cliffhanger
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-011-01 define
chapter: $chapter-011
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001
anchor-object: $plot-element-core-object
support-focus: $character-support-001
state-change: {{scene-state-change:culmination-mid}}

@action-011-1 place
action-mode: attempt
scene: $scene-011-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-011-1 place
scope: $scene-011-01
type: external-society
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-011-1 trigger
scope: $scene-011-01
event-type: discovery
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-011-01-01 line
scene: $scene-011-01
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-011-01-02 line
scene: $scene-011-01
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-011-01-03 line
scene: $scene-011-01
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-011-01-04 line
scene: $scene-011-01
speaker: $character-pressure-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:culmination-0-3}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@scene-011-02 define
chapter: $chapter-011
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:culmination-1}}
development: {{scene-development:culmination-1}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:culmination-mid}}

@action-011-2 place
action-mode: attempt
scene: $scene-011-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-011-2 place
scope: $scene-011-02
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-011-2 trigger
scope: $scene-011-02
event-type: arrival
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-011-02-01 line
scene: $scene-011-02
speaker: $character-support-002
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-02-02 line
scene: $scene-011-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-02-03 line
scene: $scene-011-02
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-011-02-04 line
scene: $scene-011-02
speaker: $character-pressure-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-1-3}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-011-03 define
chapter: $chapter-011
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003
anchor-object: $plot-element-core-object
support-focus: $character-support-003
state-change: {{scene-state-change:culmination-mid}}

@action-011-3 place
action-mode: attempt
scene: $scene-011-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-011-3 place
scope: $scene-011-03
type: mixed
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-011-3 trigger
scope: $scene-011-03
event-type: loss
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-011-03-01 line
scene: $scene-011-03
speaker: $character-support-003
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-011-03-02 line
scene: $scene-011-03
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-011-03-03 line
scene: $scene-011-03
speaker: $character-support-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-2-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-011-03-04 line
scene: $scene-011-03
speaker: $character-pressure-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-2-3}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-011-04 define
chapter: $chapter-011
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:culmination-3}}
development: {{scene-development:culmination-3}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-001
state-change: {{scene-state-change:culmination-mid}}

@action-011-4 place
action-mode: pursuit
scene: $scene-011-04
actor: $character-protagonist-001
goal: {{action-goal:culmination-3}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-011-4 place
scope: $scene-011-04
type: mixed
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-011-4 trigger
scope: $scene-011-04
event-type: loss
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-011-04-01 line
scene: $scene-011-04
speaker: $character-support-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-3-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-011-04-02 line
scene: $scene-011-04
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-3-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-011-04-03 line
scene: $scene-011-04
speaker: $character-support-002
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-3-2}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-04-04 line
scene: $scene-011-04
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-3-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-011-05 define
chapter: $chapter-011
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:culmination-4}}
development: {{scene-development:culmination-4}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-002
state-change: {{scene-state-change:culmination-mid}}

@action-011-5 place
action-mode: negotiation
scene: $scene-011-05
actor: $character-protagonist-001
goal: {{action-goal:culmination-4}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-011-5 place
scope: $scene-011-05
type: internal
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-011-5 trigger
scope: $scene-011-05
event-type: discovery
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-011-05-01 line
scene: $scene-011-05
speaker: $character-support-002
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-4-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-011-05-02 line
scene: $scene-011-05
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:culmination-4-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-011-05-03 line
scene: $scene-011-05
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-4-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-011-05-04 line
scene: $scene-011-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:culmination-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-011-06 define
chapter: $chapter-011
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-5}}
development: {{scene-development:culmination-5}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: $character-protagonist-001, $character-support-003, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:culmination-final}}

@action-011-6 place
action-mode: revelation-act
scene: $scene-011-06
actor: $character-protagonist-001
goal: {{action-goal:culmination-5}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-011-6 place
scope: $scene-011-06
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-011-6 trigger
scope: $scene-011-06
event-type: reversal
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-011-06-01 line
scene: $scene-011-06
speaker: $character-support-003
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-5-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-011-06-02 line
scene: $scene-011-06
speaker: $character-protagonist-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-5-1}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-011-06-03 line
scene: $scene-011-06
speaker: $character-support-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-5-2}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-011-06-04 line
scene: $scene-011-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:culmination-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-011-atmosphere apply
scope: $chapter-011
description-type: setting
focus: {{description-focus:detective-police}}
function: narrative
rhythm-effect: slow

@dialogue-011-core apply
scene: $scene-011-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-001, $character-support-002
exchange-type: question-answer
purpose: information
subtext: {{dialogue-core-subtext:detective-police}}

@narration-011-bridge apply
scope: $chapter-011
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-011-core apply
scene: $scene-011-06
character: $character-protagonist-001
function: characterization
trigger: {{monologue-trigger:culmination}}
texture: fragmented

@suspense-011-core build
scope: $chapter-011
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: delayed-information
payoff-zone: event-011-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-011-core hold
scope: $chapter-011
pause-function: explanatory
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-011-core burst
scope: $chapter-011
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-011-06

@cliffhanger-011-exit cut
scope: $chapter-011
cliffhanger-type: critical-decision
cut-moment: {{cliffhanger-moment:culmination}}
continuation-pressure: {{cliffhanger-continuation:culmination}}
