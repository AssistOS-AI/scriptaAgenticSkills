@sequence-006-core define
sequence-type: courtship
link-logic: causal
chapter: $chapter-006
objective: {{sequence-objective:culmination}}
scene-chain: scene-006-01, scene-006-02, scene-006-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
payoff: {{sequence-payoff:culmination}}

@location-006-anchor define
chapter: $chapter-006
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-006-core apply
chapter: $chapter-006
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: show-consequence-first-explain-cause-later

@arc-006-protagonist map
chapter: $chapter-006
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-006-relationship map
chapter: $chapter-006
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: careful-cooperation-strained-by-withheld-history
stress-line: {{relationship-stress:culmination}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-006-core arrange
chapter: $chapter-006
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-006-01 define
chapter: $chapter-006
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-006-1 place
action-mode: attempt
scene: $scene-006-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-006-1 place
scope: $scene-006-01
type: internal
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-006-1 trigger
scope: $scene-006-01
event-type: revelation
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-006-01-01 line
scene: $scene-006-01
speaker: $character-counterpart-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-006-01-02 line
scene: $scene-006-01
speaker: $character-protagonist-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-006-02 define
chapter: $chapter-006
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-1}}
development: {{scene-development:culmination-1}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-006-2 place
action-mode: negotiation
scene: $scene-006-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-006-2 place
scope: $scene-006-02
type: internal
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-006-2 trigger
scope: $scene-006-02
event-type: discovery
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-006-02-01 line
scene: $scene-006-02
speaker: $character-counterpart-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-006-02-02 line
scene: $scene-006-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@scene-006-03 define
chapter: $chapter-006
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-final}}

@action-006-3 place
action-mode: sacrifice
scene: $scene-006-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-006-3 place
scope: $scene-006-03
type: internal
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-006-3 trigger
scope: $scene-006-03
event-type: deadline
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-006-03-01 line
scene: $scene-006-03
speaker: $character-counterpart-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-006-03-02 line
scene: $scene-006-03
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:probe}}

@description-006-atmosphere apply
scope: $chapter-006
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: contrast

@dialogue-006-core apply
scene: $scene-006-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

@narration-006-bridge apply
scope: $chapter-006
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-006-core apply
scene: $scene-006-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:culmination}}
texture: reflective

@suspense-006-core build
scope: $chapter-006
suspense-type: emotional
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: interruption
payoff-zone: event-006-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-006-core hold
scope: $chapter-006
pause-function: psychological
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-006-core burst
scope: $chapter-006
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-006-03

@cliffhanger-006-exit cut
scope: $chapter-006
cliffhanger-type: critical-decision
cut-moment: {{cliffhanger-moment:culmination}}
continuation-pressure: {{cliffhanger-continuation:culmination}}
