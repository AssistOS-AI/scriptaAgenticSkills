@sequence-005-core define
sequence-type: recovery
link-logic: mixed
chapter: $chapter-005
objective: {{sequence-objective:revelation}}
scene-chain: scene-005-01, scene-005-02, scene-005-03, scene-005-04, scene-005-05, scene-005-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:revelation}}
supporting-cast: $character-support-005, $character-support-001, $character-support-002
chapter-object: $plot-element-secondary-004
payoff: {{sequence-payoff:revelation}}

@location-005-anchor define
chapter: $chapter-005
primary-setting: $location-tertiary-003
secondary-setting: $location-tertiary-004
transit-setting: $location-primary
chapter-object: $plot-element-secondary-004
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-005-core apply
chapter: $chapter-005
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:revelation}}
action-limitation: {{action-limitation:revelation}}
conflict-output: {{conflict-output-rule:revelation}}
reveal-pattern: show-exception-to-reveal-rule

@arc-005-protagonist map
chapter: $chapter-005
entry-belief: {{entry-belief:protagonist}} at the start of the revelation chapter
challenge: {{challenge:protagonist-revelation}}
insight-pressure: {{insight-pressure:protagonist-revelation}}
exit-belief: {{exit-belief:protagonist}} after the revelation chapter

@arc-005-relationship map
chapter: $chapter-005
pair: $character-protagonist-001, $character-support-005
entry-dynamic: technical-trust-without-moral-agreement
stress-line: {{relationship-stress:revelation}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-005-core arrange
chapter: $chapter-005
block-order: description-action-dialogue-pause-event-monologue
reader-effect: {{reader-effect:revelation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-005-01 define
chapter: $chapter-005
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:revelation-0}}
development: {{scene-development:revelation-0}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-005
anchor-object: $plot-element-secondary-004
support-focus: $character-support-005
state-change: {{scene-state-change:revelation-mid}}

@action-005-1 place
action-mode: revelation-act
scene: $scene-005-01
actor: $character-protagonist-001
goal: {{action-goal:revelation-0}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-005-1 place
scope: $scene-005-01
type: external-nature
forces: $character-protagonist-001 versus $character-support-005
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-005-1 trigger
scope: $scene-005-01
event-type: betrayal
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-005-01-01 line
scene: $scene-005-01
speaker: $character-support-005
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:revelation-0-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-005-01-02 line
scene: $scene-005-01
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:revelation-0-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-005-01-03 line
scene: $scene-005-01
speaker: $character-support-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:revelation-0-2}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-005-01-04 line
scene: $scene-005-01
speaker: $character-pressure-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-0-3}}
reaction-beat: {{dialogue-reaction:commit}}

@scene-005-02 define
chapter: $chapter-005
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:revelation-1}}
development: {{scene-development:revelation-1}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-001, $character-support-002, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-001
state-change: {{scene-state-change:revelation-mid}}

@action-005-2 place
action-mode: attempt
scene: $scene-005-02
actor: $character-protagonist-001
goal: {{action-goal:revelation-1}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-005-2 place
scope: $scene-005-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-005-2 trigger
scope: $scene-005-02
event-type: decision
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-005-02-01 line
scene: $scene-005-02
speaker: $character-support-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-1-0}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-005-02-02 line
scene: $scene-005-02
speaker: $character-protagonist-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:revelation-1-1}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-005-02-03 line
scene: $scene-005-02
speaker: $character-support-002
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-1-2}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-005-02-04 line
scene: $scene-005-02
speaker: $character-pressure-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-1-3}}
reaction-beat: {{dialogue-reaction:probe}}

@scene-005-03 define
chapter: $chapter-005
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:revelation-2}}
development: {{scene-development:revelation-2}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002
anchor-object: $plot-element-secondary-004
support-focus: $character-support-002
state-change: {{scene-state-change:revelation-mid}}

@action-005-3 place
action-mode: negotiation
scene: $scene-005-03
actor: $character-protagonist-001
goal: {{action-goal:revelation-2}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-005-3 place
scope: $scene-005-03
type: internal
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-005-3 trigger
scope: $scene-005-03
event-type: betrayal
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-005-03-01 line
scene: $scene-005-03
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:revelation-2-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-005-03-02 line
scene: $scene-005-03
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:revelation-2-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-005-03-03 line
scene: $scene-005-03
speaker: $character-support-005
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:revelation-2-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-005-03-04 line
scene: $scene-005-03
speaker: $character-pressure-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-2-3}}
reaction-beat: {{dialogue-reaction:commit}}

@scene-005-04 define
chapter: $chapter-005
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:revelation-3}}
development: {{scene-development:revelation-3}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-005, $character-support-001
anchor-object: $plot-element-core-object
support-focus: $character-support-005
state-change: {{scene-state-change:revelation-mid}}

@action-005-4 place
action-mode: evasion
scene: $scene-005-04
actor: $character-protagonist-001
goal: {{action-goal:revelation-3}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-005-4 place
scope: $scene-005-04
type: mixed
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-005-4 trigger
scope: $scene-005-04
event-type: betrayal
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-005-04-01 line
scene: $scene-005-04
speaker: $character-support-005
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:revelation-3-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-005-04-02 line
scene: $scene-005-04
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:revelation-3-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-005-04-03 line
scene: $scene-005-04
speaker: $character-support-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:revelation-3-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-005-04-04 line
scene: $scene-005-04
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:revelation-3-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-005-05 define
chapter: $chapter-005
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:revelation-4}}
development: {{scene-development:revelation-4}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-004
support-focus: $character-support-001
state-change: {{scene-state-change:revelation-mid}}

@action-005-5 place
action-mode: evasion
scene: $scene-005-05
actor: $character-protagonist-001
goal: {{action-goal:revelation-4}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-005-5 place
scope: $scene-005-05
type: external-nature
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-005-5 trigger
scope: $scene-005-05
event-type: arrival
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-005-05-01 line
scene: $scene-005-05
speaker: $character-support-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-4-0}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-005-05-02 line
scene: $scene-005-05
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-4-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-005-05-03 line
scene: $scene-005-05
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-005-05-04 line
scene: $scene-005-05
speaker: $character-pressure-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:revelation-4-3}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@scene-005-06 define
chapter: $chapter-005
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:revelation-5}}
development: {{scene-development:revelation-5}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-final}}
exit: the chapter hands off to a sharper revelation consequence
participants: $character-protagonist-001, $character-support-002, $character-support-005, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-002
state-change: {{scene-state-change:revelation-final}}

@action-005-6 place
action-mode: revelation-act
scene: $scene-005-06
actor: $character-protagonist-001
goal: {{action-goal:revelation-5}}
obstacle: {{action-obstacle:revelation}}
result: {{action-result:revelation-final}}

@conflict-005-6 place
scope: $scene-005-06
type: external-technology
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-005-6 trigger
scope: $scene-005-06
event-type: revelation
trigger: {{event-trigger:revelation-final}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-final}}

@dialogue-turn-005-06-01 line
scene: $scene-005-06
speaker: $character-support-002
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:revelation-5-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-005-06-02 line
scene: $scene-005-06
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-5-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-005-06-03 line
scene: $scene-005-06
speaker: $character-support-005
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:revelation-5-2}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-005-06-04 line
scene: $scene-005-06
speaker: $character-pressure-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-5-3}}
reaction-beat: {{dialogue-reaction:commit}}

@description-005-atmosphere apply
scope: $chapter-005
description-type: atmosphere
focus: {{description-focus:drama}}
function: atmospheric
rhythm-effect: contrast

@dialogue-005-core apply
scene: $scene-005-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-005, $character-support-001
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:drama}}

@narration-005-bridge apply
scope: $chapter-005
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-005-core apply
scene: $scene-005-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:revelation}}
texture: reflective

@suspense-005-core build
scope: $chapter-005
suspense-type: emotional
uncertainty: {{suspense-uncertainty:revelation}}
delay-technique: mixed
payoff-zone: event-005-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-005-core hold
scope: $chapter-005
pause-function: psychological
focus: {{pause-focus:revelation}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-005-core burst
scope: $chapter-005
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:revelation}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-005-06

@cliffhanger-005-exit cut
scope: $chapter-005
cliffhanger-type: danger
cut-moment: {{cliffhanger-moment:revelation}}
continuation-pressure: {{cliffhanger-continuation:revelation}}
