@sequence-008-core define
sequence-type: confrontation-chain
link-logic: mixed
chapter: $chapter-008
objective: {{sequence-objective:culmination}}
scene-chain: scene-008-01, scene-008-02, scene-008-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
payoff: {{sequence-payoff:culmination}}

@location-008-anchor define
chapter: $chapter-008
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-008-core apply
chapter: $chapter-008
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: show-exception-to-reveal-rule

@arc-008-protagonist map
chapter: $chapter-008
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-008-relationship map
chapter: $chapter-008
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: professional-alliance-with-unequal-risk
stress-line: {{relationship-stress:culmination}}
exit-dynamic: altered-but-legible-bond

@alternation-008-core arrange
chapter: $chapter-008
block-order: description-action-dialogue-suspense-interior-monologue-revelation-pause
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-008-01 define
chapter: $chapter-008
showing-mode: dialogic
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-008-1 place
action-mode: attempt
scene: $scene-008-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-008-1 place
scope: $scene-008-01
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:culmination}}

@event-008-1 trigger
scope: $scene-008-01
event-type: revelation
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-008-01-01 line
scene: $scene-008-01
speaker: $character-counterpart-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-008-01-02 line
scene: $scene-008-01
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-008-02 define
chapter: $chapter-008
showing-mode: dialogic
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:culmination-1}}
development: {{scene-development:culmination-1}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-008-2 place
action-mode: pursuit
scene: $scene-008-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-008-2 place
scope: $scene-008-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:culmination}}

@event-008-2 trigger
scope: $scene-008-02
event-type: betrayal
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-008-02-01 line
scene: $scene-008-02
speaker: $character-counterpart-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-008-02-02 line
scene: $scene-008-02
speaker: $character-protagonist-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-008-03 define
chapter: $chapter-008
showing-mode: dialogic
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-final}}

@action-008-3 place
action-mode: attempt
scene: $scene-008-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-008-3 place
scope: $scene-008-03
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:culmination}}

@event-008-3 trigger
scope: $scene-008-03
event-type: betrayal
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-008-03-01 line
scene: $scene-008-03
speaker: $character-counterpart-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-008-03-02 line
scene: $scene-008-03
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:probe}}

@description-008-atmosphere apply
scope: $chapter-008
description-type: symbolic
focus: {{description-focus:fantasy}}
function: symbolic
rhythm-effect: frame

@dialogue-008-core apply
scene: $scene-008-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:fantasy}}

@narration-008-bridge apply
scope: $chapter-008
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-008-core apply
scene: $scene-008-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:culmination}}
texture: reflective

@suspense-008-core build
scope: $chapter-008
suspense-type: situational
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: foreshadowing
payoff-zone: event-008-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-008-core hold
scope: $chapter-008
pause-function: atmospheric
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-008-core burst
scope: $chapter-008
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-008-03

@cliffhanger-008-exit cut
scope: $chapter-008
cliffhanger-type: danger
cut-moment: {{cliffhanger-moment:culmination}}
continuation-pressure: {{cliffhanger-continuation:culmination}}
