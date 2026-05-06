@sequence-008-core define
sequence-type: courtship
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
entry-dynamic: careful-cooperation-strained-by-withheld-history
stress-line: {{relationship-stress:culmination}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-008-core arrange
chapter: $chapter-008
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-008-01 define
chapter: $chapter-008
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-008-1 place
action-mode: pursuit
scene: $scene-008-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-008-1 place
scope: $scene-008-01
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-008-1 trigger
scope: $scene-008-01
event-type: loss
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-008-01-01 line
scene: $scene-008-01
speaker: $character-counterpart-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-008-01-02 line
scene: $scene-008-01
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-008-02 define
chapter: $chapter-008
showing-mode: mixed
focalization: internal-single
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
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-008-2 trigger
scope: $scene-008-02
event-type: discovery
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-008-02-01 line
scene: $scene-008-02
speaker: $character-counterpart-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-008-02-02 line
scene: $scene-008-02
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@scene-008-03 define
chapter: $chapter-008
showing-mode: introspective
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-final}}

@action-008-3 place
action-mode: revelation-act
scene: $scene-008-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-008-3 place
scope: $scene-008-03
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-008-3 trigger
scope: $scene-008-03
event-type: decision
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-008-03-01 line
scene: $scene-008-03
speaker: $character-counterpart-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-008-03-02 line
scene: $scene-008-03
speaker: $character-protagonist-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:deflect}}

@description-008-atmosphere apply
scope: $chapter-008
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: contrast

@dialogue-008-core apply
scene: $scene-008-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

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
suspense-type: emotional
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: interruption
payoff-zone: event-008-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-008-core hold
scope: $chapter-008
pause-function: psychological
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
cliffhanger-type: unresolved-confrontation
cut-moment: {{cliffhanger-moment:culmination}}
continuation-pressure: {{cliffhanger-continuation:culmination}}
