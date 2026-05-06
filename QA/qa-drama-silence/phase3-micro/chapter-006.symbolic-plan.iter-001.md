@sequence-006-core define
sequence-type: recovery
link-logic: mixed
chapter: $chapter-006
objective: {{sequence-objective:reversal}}
scene-chain: scene-006-01, scene-006-02, scene-006-03, scene-006-04, scene-006-05, scene-006-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:reversal}}
supporting-cast: $character-support-001, $character-support-002, $character-support-003
chapter-object: $plot-element-core-object
payoff: {{sequence-payoff:reversal}}

@location-006-anchor define
chapter: $chapter-006
primary-setting: $location-tertiary-004
secondary-setting: $location-primary
transit-setting: $location-secondary
chapter-object: $plot-element-core-object
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-006-core apply
chapter: $chapter-006
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:reversal}}
action-limitation: {{action-limitation:reversal}}
conflict-output: {{conflict-output-rule:reversal}}
reveal-pattern: show-consequence-first-explain-cause-later

@arc-006-protagonist map
chapter: $chapter-006
entry-belief: {{entry-belief:protagonist}} at the start of the reversal chapter
challenge: {{challenge:protagonist-reversal}}
insight-pressure: {{insight-pressure:protagonist-reversal}}
exit-belief: {{exit-belief:protagonist}} after the reversal chapter

@arc-006-relationship map
chapter: $chapter-006
pair: $character-protagonist-001, $character-support-001
entry-dynamic: professional-alliance-with-unequal-risk
stress-line: {{relationship-stress:reversal}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-006-core arrange
chapter: $chapter-006
block-order: description-action-dialogue-pause-event-monologue
reader-effect: {{reader-effect:reversal}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-006-01 define
chapter: $chapter-006
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:reversal-0}}
development: {{scene-development:reversal-0}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001
anchor-object: $plot-element-core-object
support-focus: $character-support-001
state-change: {{scene-state-change:reversal-mid}}

@action-006-1 place
action-mode: attempt
scene: $scene-006-01
actor: $character-protagonist-001
goal: {{action-goal:reversal-0}}
obstacle: {{action-obstacle:reversal}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-006-1 place
scope: $scene-006-01
type: external-technology
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:reversal}}

@event-006-1 trigger
scope: $scene-006-01
event-type: betrayal
trigger: {{event-trigger:reversal-mid}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-mid}}

@dialogue-turn-006-01-01 line
scene: $scene-006-01
speaker: $character-support-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-0-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-006-01-02 line
scene: $scene-006-01
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-0-1}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-006-01-03 line
scene: $scene-006-01
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-0-2}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-006-01-04 line
scene: $scene-006-01
speaker: $character-pressure-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-0-3}}
reaction-beat: {{dialogue-reaction:probe}}

@scene-006-02 define
chapter: $chapter-006
showing-mode: direct-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:reversal-1}}
development: {{scene-development:reversal-1}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:reversal-mid}}

@action-006-2 place
action-mode: negotiation
scene: $scene-006-02
actor: $character-protagonist-001
goal: {{action-goal:reversal-1}}
obstacle: {{action-obstacle:reversal}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-006-2 place
scope: $scene-006-02
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:reversal}}

@event-006-2 trigger
scope: $scene-006-02
event-type: accident
trigger: {{event-trigger:reversal-mid}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-mid}}

@dialogue-turn-006-02-01 line
scene: $scene-006-02
speaker: $character-support-002
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-1-0}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-006-02-02 line
scene: $scene-006-02
speaker: $character-protagonist-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:reversal-1-1}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-006-02-03 line
scene: $scene-006-02
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-1-2}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-006-02-04 line
scene: $scene-006-02
speaker: $character-pressure-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-1-3}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-006-03 define
chapter: $chapter-006
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:reversal-2}}
development: {{scene-development:reversal-2}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003
anchor-object: $plot-element-core-object
support-focus: $character-support-003
state-change: {{scene-state-change:reversal-mid}}

@action-006-3 place
action-mode: revelation-act
scene: $scene-006-03
actor: $character-protagonist-001
goal: {{action-goal:reversal-2}}
obstacle: {{action-obstacle:reversal}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-006-3 place
scope: $scene-006-03
type: external-nature
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:reversal}}

@event-006-3 trigger
scope: $scene-006-03
event-type: arrival
trigger: {{event-trigger:reversal-mid}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-mid}}

@dialogue-turn-006-03-01 line
scene: $scene-006-03
speaker: $character-support-003
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:reversal-2-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-006-03-02 line
scene: $scene-006-03
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:reversal-2-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-006-03-03 line
scene: $scene-006-03
speaker: $character-support-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-2-2}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-006-03-04 line
scene: $scene-006-03
speaker: $character-pressure-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-2-3}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-006-04 define
chapter: $chapter-006
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:reversal-3}}
development: {{scene-development:reversal-3}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-001
state-change: {{scene-state-change:reversal-mid}}

@action-006-4 place
action-mode: sacrifice
scene: $scene-006-04
actor: $character-protagonist-001
goal: {{action-goal:reversal-3}}
obstacle: {{action-obstacle:reversal}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-006-4 place
scope: $scene-006-04
type: external-nature
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:reversal}}

@event-006-4 trigger
scope: $scene-006-04
event-type: arrival
trigger: {{event-trigger:reversal-mid}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-mid}}

@dialogue-turn-006-04-01 line
scene: $scene-006-04
speaker: $character-support-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:reversal-3-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-006-04-02 line
scene: $scene-006-04
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:reversal-3-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-006-04-03 line
scene: $scene-006-04
speaker: $character-support-002
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:reversal-3-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-006-04-04 line
scene: $scene-006-04
speaker: $character-pressure-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-3-3}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-006-05 define
chapter: $chapter-006
showing-mode: direct-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:reversal-4}}
development: {{scene-development:reversal-4}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-002
state-change: {{scene-state-change:reversal-mid}}

@action-006-5 place
action-mode: revelation-act
scene: $scene-006-05
actor: $character-protagonist-001
goal: {{action-goal:reversal-4}}
obstacle: {{action-obstacle:reversal}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-006-5 place
scope: $scene-006-05
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:reversal}}

@event-006-5 trigger
scope: $scene-006-05
event-type: loss
trigger: {{event-trigger:reversal-mid}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-mid}}

@dialogue-turn-006-05-01 line
scene: $scene-006-05
speaker: $character-support-002
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:reversal-4-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-006-05-02 line
scene: $scene-006-05
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:reversal-4-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-006-05-03 line
scene: $scene-006-05
speaker: $character-support-003
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:reversal-4-2}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-006-05-04 line
scene: $scene-006-05
speaker: $character-pressure-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:reversal-4-3}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@scene-006-06 define
chapter: $chapter-006
showing-mode: direct-showing
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:reversal-5}}
development: {{scene-development:reversal-5}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-final}}
exit: the chapter hands off to a sharper reversal consequence
participants: $character-protagonist-001, $character-support-003, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:reversal-final}}

@action-006-6 place
action-mode: evasion
scene: $scene-006-06
actor: $character-protagonist-001
goal: {{action-goal:reversal-5}}
obstacle: {{action-obstacle:reversal}}
result: {{action-result:reversal-final}}

@conflict-006-6 place
scope: $scene-006-06
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:reversal}}

@event-006-6 trigger
scope: $scene-006-06
event-type: betrayal
trigger: {{event-trigger:reversal-final}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-final}}

@dialogue-turn-006-06-01 line
scene: $scene-006-06
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-5-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-006-06-02 line
scene: $scene-006-06
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:reversal-5-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-006-06-03 line
scene: $scene-006-06
speaker: $character-support-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-006-06-04 line
scene: $scene-006-06
speaker: $character-pressure-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:reversal-5-3}}
reaction-beat: {{dialogue-reaction:reframe}}

@description-006-atmosphere apply
scope: $chapter-006
description-type: atmosphere
focus: {{description-focus:drama}}
function: atmospheric
rhythm-effect: slow

@dialogue-006-core apply
scene: $scene-006-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-001, $character-support-002
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:drama}}

@narration-006-bridge apply
scope: $chapter-006
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-006-core apply
scene: $scene-006-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:reversal}}
texture: reflective

@suspense-006-core build
scope: $chapter-006
suspense-type: emotional
uncertainty: {{suspense-uncertainty:reversal}}
delay-technique: mixed
payoff-zone: event-006-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-006-core hold
scope: $chapter-006
pause-function: psychological
focus: {{pause-focus:reversal}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-006-core burst
scope: $chapter-006
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:reversal}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-006-06

@cliffhanger-006-exit cut
scope: $chapter-006
cliffhanger-type: unresolved-confrontation
cut-moment: {{cliffhanger-moment:reversal}}
continuation-pressure: {{cliffhanger-continuation:reversal}}
