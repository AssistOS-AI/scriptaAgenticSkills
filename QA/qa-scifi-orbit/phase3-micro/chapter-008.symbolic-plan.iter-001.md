@sequence-008-core define
sequence-type: escape
link-logic: mixed
chapter: $chapter-008
objective: {{sequence-objective:investigation}}
scene-chain: scene-008-01, scene-008-02, scene-008-03, scene-008-04, scene-008-05, scene-008-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:investigation}}
supporting-cast: $character-support-003, $character-support-004, $character-support-005
chapter-object: $plot-element-secondary-002
payoff: {{sequence-payoff:investigation}}

@location-008-anchor define
chapter: $chapter-008
primary-setting: $location-secondary
secondary-setting: $location-tertiary-001
transit-setting: $location-tertiary-002
chapter-object: $plot-element-secondary-002
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-008-core apply
chapter: $chapter-008
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:investigation}}
action-limitation: {{action-limitation:investigation}}
conflict-output: {{conflict-output-rule:investigation}}
reveal-pattern: show-exception-to-reveal-rule

@arc-008-protagonist map
chapter: $chapter-008
entry-belief: {{entry-belief:protagonist}} at the start of the investigation chapter
challenge: {{challenge:protagonist-investigation}}
insight-pressure: {{insight-pressure:protagonist-investigation}}
exit-belief: {{exit-belief:protagonist}} after the investigation chapter

@arc-008-relationship map
chapter: $chapter-008
pair: $character-protagonist-001, $character-support-003
entry-dynamic: technical-trust-without-moral-agreement
stress-line: {{relationship-stress:investigation}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-008-core arrange
chapter: $chapter-008
block-order: description-dialogue-action-interior-monologue-suspense-revelation-acceleration
reader-effect: {{reader-effect:investigation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-008-01 define
chapter: $chapter-008
showing-mode: direct-showing
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:investigation-0}}
development: {{scene-development:investigation-0}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003
anchor-object: $plot-element-secondary-002
support-focus: $character-support-003
state-change: {{scene-state-change:investigation-mid}}

@action-008-1 place
action-mode: evasion
scene: $scene-008-01
actor: $character-protagonist-001
goal: {{action-goal:investigation-0}}
obstacle: {{action-obstacle:investigation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-008-1 place
scope: $scene-008-01
type: external-society
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-008-1 trigger
scope: $scene-008-01
event-type: deadline
trigger: {{event-trigger:investigation-mid}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-mid}}

@dialogue-turn-008-01-01 line
scene: $scene-008-01
speaker: $character-support-003
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:investigation-0-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-008-01-02 line
scene: $scene-008-01
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:investigation-0-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-008-01-03 line
scene: $scene-008-01
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-008-01-04 line
scene: $scene-008-01
speaker: $character-pressure-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-0-3}}
reaction-beat: {{dialogue-reaction:probe}}

@scene-008-02 define
chapter: $chapter-008
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:investigation-1}}
development: {{scene-development:investigation-1}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-004, $character-support-005, $character-pressure-001
anchor-object: $plot-element-secondary-003
support-focus: $character-support-004
state-change: {{scene-state-change:investigation-mid}}

@action-008-2 place
action-mode: revelation-act
scene: $scene-008-02
actor: $character-protagonist-001
goal: {{action-goal:investigation-1}}
obstacle: {{action-obstacle:investigation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-008-2 place
scope: $scene-008-02
type: external-technology
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-008-2 trigger
scope: $scene-008-02
event-type: decision
trigger: {{event-trigger:investigation-mid}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-mid}}

@dialogue-turn-008-02-01 line
scene: $scene-008-02
speaker: $character-support-004
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:investigation-1-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-008-02-02 line
scene: $scene-008-02
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-1-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-008-02-03 line
scene: $scene-008-02
speaker: $character-support-005
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:investigation-1-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-008-02-04 line
scene: $scene-008-02
speaker: $character-pressure-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-1-3}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-008-03 define
chapter: $chapter-008
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:investigation-2}}
development: {{scene-development:investigation-2}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-005
anchor-object: $plot-element-secondary-002
support-focus: $character-support-005
state-change: {{scene-state-change:investigation-mid}}

@action-008-3 place
action-mode: evasion
scene: $scene-008-03
actor: $character-protagonist-001
goal: {{action-goal:investigation-2}}
obstacle: {{action-obstacle:investigation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-008-3 place
scope: $scene-008-03
type: external-supernatural
forces: $character-protagonist-001 versus $character-support-005
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-008-3 trigger
scope: $scene-008-03
event-type: deadline
trigger: {{event-trigger:investigation-mid}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-mid}}

@dialogue-turn-008-03-01 line
scene: $scene-008-03
speaker: $character-support-005
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:investigation-2-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-008-03-02 line
scene: $scene-008-03
speaker: $character-protagonist-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:investigation-2-1}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-008-03-03 line
scene: $scene-008-03
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-2-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-008-03-04 line
scene: $scene-008-03
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:investigation-2-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-008-04 define
chapter: $chapter-008
showing-mode: introspective
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:investigation-3}}
development: {{scene-development:investigation-3}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-003, $character-support-004
anchor-object: $plot-element-secondary-003
support-focus: $character-support-003
state-change: {{scene-state-change:investigation-mid}}

@action-008-4 place
action-mode: pursuit
scene: $scene-008-04
actor: $character-protagonist-001
goal: {{action-goal:investigation-3}}
obstacle: {{action-obstacle:investigation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-008-4 place
scope: $scene-008-04
type: external-technology
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-008-4 trigger
scope: $scene-008-04
event-type: arrival
trigger: {{event-trigger:investigation-mid}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-mid}}

@dialogue-turn-008-04-01 line
scene: $scene-008-04
speaker: $character-support-003
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-3-0}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-008-04-02 line
scene: $scene-008-04
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:investigation-3-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-008-04-03 line
scene: $scene-008-04
speaker: $character-support-004
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:investigation-3-2}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-008-04-04 line
scene: $scene-008-04
speaker: $character-pressure-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:investigation-3-3}}
reaction-beat: {{dialogue-reaction:reframe}}

@scene-008-05 define
chapter: $chapter-008
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:investigation-4}}
development: {{scene-development:investigation-4}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-004
state-change: {{scene-state-change:investigation-mid}}

@action-008-5 place
action-mode: pursuit
scene: $scene-008-05
actor: $character-protagonist-001
goal: {{action-goal:investigation-4}}
obstacle: {{action-obstacle:investigation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-008-5 place
scope: $scene-008-05
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-008-5 trigger
scope: $scene-008-05
event-type: decision
trigger: {{event-trigger:investigation-mid}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-mid}}

@dialogue-turn-008-05-01 line
scene: $scene-008-05
speaker: $character-support-004
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:investigation-4-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-008-05-02 line
scene: $scene-008-05
speaker: $character-protagonist-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:investigation-4-1}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-008-05-03 line
scene: $scene-008-05
speaker: $character-support-005
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-4-2}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-008-05-04 line
scene: $scene-008-05
speaker: $character-pressure-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-4-3}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-008-06 define
chapter: $chapter-008
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:investigation-5}}
development: {{scene-development:investigation-5}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-final}}
exit: the chapter hands off to a sharper investigation consequence
participants: $character-protagonist-001, $character-support-005, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-003
support-focus: $character-support-005
state-change: {{scene-state-change:investigation-final}}

@action-008-6 place
action-mode: sacrifice
scene: $scene-008-06
actor: $character-protagonist-001
goal: {{action-goal:investigation-5}}
obstacle: {{action-obstacle:investigation}}
result: {{action-result:investigation-final}}

@conflict-008-6 place
scope: $scene-008-06
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-008-6 trigger
scope: $scene-008-06
event-type: decision
trigger: {{event-trigger:investigation-final}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-final}}

@dialogue-turn-008-06-01 line
scene: $scene-008-06
speaker: $character-support-005
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-5-0}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-008-06-02 line
scene: $scene-008-06
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-5-1}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-008-06-03 line
scene: $scene-008-06
speaker: $character-support-003
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:investigation-5-2}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-008-06-04 line
scene: $scene-008-06
speaker: $character-pressure-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:investigation-5-3}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@description-008-atmosphere apply
scope: $chapter-008
description-type: atmosphere
focus: {{description-focus:science-fiction}}
function: atmospheric
rhythm-effect: frame

@dialogue-008-core apply
scene: $scene-008-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-003, $character-support-004
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:science-fiction}}

@narration-008-bridge apply
scope: $chapter-008
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-008-core apply
scene: $scene-008-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:investigation}}
texture: reflective

@suspense-008-core build
scope: $chapter-008
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:investigation}}
delay-technique: foreshadowing
payoff-zone: event-008-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-008-core hold
scope: $chapter-008
pause-function: atmospheric
focus: {{pause-focus:investigation}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-008-core burst
scope: $chapter-008
acceleration-mode: montage
trigger: {{acceleration-trigger:investigation}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-008-06

@cliffhanger-008-exit cut
scope: $chapter-008
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:investigation}}
continuation-pressure: {{cliffhanger-continuation:investigation}}
