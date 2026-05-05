@sequence-002-core define
sequence-type: confrontation-chain
link-logic: causal
chapter: $chapter-002
objective: {{sequence-objective:escalation}}
scene-chain: scene-002-01, scene-002-02, scene-002-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:escalation}}
payoff: {{sequence-payoff:escalation}}

@location-002-anchor define
chapter: $chapter-002
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-002-core apply
chapter: $chapter-002
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:escalation}}
action-limitation: {{action-limitation:escalation}}
conflict-output: {{conflict-output-rule:escalation}}
reveal-pattern: embed-rule-in-dialogue

@arc-002-protagonist map
chapter: $chapter-002
entry-belief: {{entry-belief:protagonist}} at the start of the escalation chapter
challenge: {{challenge:protagonist-escalation}}
insight-pressure: {{insight-pressure:protagonist-escalation}}
exit-belief: {{exit-belief:protagonist}} after the escalation chapter

@arc-002-relationship map
chapter: $chapter-002
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: oath-bound-cooperation-shadowed-by-allegiance
stress-line: {{relationship-stress:escalation}}
exit-dynamic: altered-but-legible-bond

@alternation-002-core arrange
chapter: $chapter-002
block-order: description-action-dialogue-suspense-interior-monologue-revelation-pause
reader-effect: {{reader-effect:escalation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-002-01 define
chapter: $chapter-002
showing-mode: mixed
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:escalation-0}}
development: {{scene-development:escalation-0}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:escalation-mid}}

@action-002-1 place
action-mode: attempt
scene: $scene-002-01
actor: $character-protagonist-001
goal: {{action-goal:escalation-0}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-002-1 place
scope: $scene-002-01
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:escalation}}

@event-002-1 trigger
scope: $scene-002-01
event-type: betrayal
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-002-01-01 line
scene: $scene-002-01
speaker: $character-counterpart-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:escalation-0-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-002-01-02 line
scene: $scene-002-01
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-0-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-002-02 define
chapter: $chapter-002
showing-mode: introspective
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:escalation-1}}
development: {{scene-development:escalation-1}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:escalation-mid}}

@action-002-2 place
action-mode: evasion
scene: $scene-002-02
actor: $character-protagonist-001
goal: {{action-goal:escalation-1}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-002-2 place
scope: $scene-002-02
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:escalation}}

@event-002-2 trigger
scope: $scene-002-02
event-type: betrayal
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-002-02-01 line
scene: $scene-002-02
speaker: $character-counterpart-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:escalation-1-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-002-02-02 line
scene: $scene-002-02
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:escalation-1-1}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-002-03 define
chapter: $chapter-002
showing-mode: mixed
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:escalation-2}}
development: {{scene-development:escalation-2}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-final}}
exit: the chapter hands off to a sharper escalation consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:escalation-final}}

@action-002-3 place
action-mode: negotiation
scene: $scene-002-03
actor: $character-protagonist-001
goal: {{action-goal:escalation-2}}
obstacle: {{action-obstacle:escalation}}
result: {{action-result:escalation-final}}

@conflict-002-3 place
scope: $scene-002-03
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:escalation}}

@event-002-3 trigger
scope: $scene-002-03
event-type: decision
trigger: {{event-trigger:escalation-final}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-final}}

@dialogue-turn-002-03-01 line
scene: $scene-002-03
speaker: $character-counterpart-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-2-0}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-002-03-02 line
scene: $scene-002-03
speaker: $character-protagonist-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:escalation-2-1}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@description-002-atmosphere apply
scope: $chapter-002
description-type: symbolic
focus: {{description-focus:fantasy}}
function: symbolic
rhythm-effect: slow

@dialogue-002-core apply
scene: $scene-002-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:fantasy}}

@narration-002-bridge apply
scope: $chapter-002
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-002-core apply
scene: $scene-002-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:escalation}}
texture: reflective

@suspense-002-core build
scope: $chapter-002
suspense-type: situational
uncertainty: {{suspense-uncertainty:escalation}}
delay-technique: foreshadowing
payoff-zone: event-002-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-002-core hold
scope: $chapter-002
pause-function: atmospheric
focus: {{pause-focus:escalation}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-002-core burst
scope: $chapter-002
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:escalation}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-002-03

@cliffhanger-002-exit cut
scope: $chapter-002
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:escalation}}
continuation-pressure: {{cliffhanger-continuation:escalation}}
