@sequence-003-core define
sequence-type: courtship
link-logic: causal
chapter: chapter-003
objective: {{sequence-objective:reversal}}
scene-chain: scene-003-01, scene-003-02, scene-003-03
continuity-thread: each scene must inherit and intensify the previous scene's unresolved pressure
conflict-line: {{sequence-conflict:reversal}}
payoff: {{sequence-payoff:reversal}}

@location-003-anchor define
chapter: chapter-003
primary-setting: {{location:primary-001}}
secondary-setting: {{location:secondary-001}}
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-003-core apply
chapter: chapter-003
rule-reference: world-rule-primary
visible-symptom: {{visible-symptom:reversal}}
action-limitation: {{action-limitation:reversal}}
conflict-output: {{conflict-output-rule:reversal}}
reveal-pattern: show-exception-to-reveal-rule

@arc-003-protagonist map
chapter: chapter-003
entry-belief: {{entry-belief:protagonist}} at the start of the reversal chapter
challenge: {{challenge:protagonist-reversal}}
insight-pressure: {{insight-pressure:protagonist-reversal}}
exit-belief: {{exit-belief:protagonist}} after the reversal chapter

@arc-003-relationship map
chapter: chapter-003
pair: {{character:protagonist-001}}, {{character:counterpart-001}}
entry-dynamic: productive-partnership-guarded-by-emotional-self-defense
stress-line: {{relationship-stress:reversal}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-003-core arrange
chapter: chapter-003
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:reversal}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-003-01 define
chapter: chapter-003
showing-mode: introspective
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:reversal-0}}
development: {{scene-development:reversal-0}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:reversal-mid}}

@action-003-1 place
action-mode: evasion
scene: scene-003-01
actor: {{character:protagonist-001}}
goal: {{action-goal:reversal-0}}
obstacle: {{action-obstacle:reversal}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-003-1 place
scope: scene-003-01
type: external-character
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:reversal}}

@event-003-1 trigger
scope: scene-003-01
event-type: deadline
trigger: {{event-trigger:reversal-mid}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-mid}}

@dialogue-turn-003-01-01 line
scene: scene-003-01
speaker: {{character:counterpart-001}}
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:reversal-0-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-003-01-02 line
scene: scene-003-01
speaker: {{character:protagonist-001}}
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:reversal-0-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@scene-003-02 define
chapter: chapter-003
showing-mode: compressed-showing
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:reversal-1}}
development: {{scene-development:reversal-1}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:reversal-mid}}

@action-003-2 place
action-mode: sacrifice
scene: scene-003-02
actor: {{character:protagonist-001}}
goal: {{action-goal:reversal-1}}
obstacle: {{action-obstacle:reversal}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-003-2 place
scope: scene-003-02
type: external-technology
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:reversal}}

@event-003-2 trigger
scope: scene-003-02
event-type: deadline
trigger: {{event-trigger:reversal-mid}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-mid}}

@dialogue-turn-003-02-01 line
scene: scene-003-02
speaker: {{character:counterpart-001}}
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:reversal-1-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-003-02-02 line
scene: scene-003-02
speaker: {{character:protagonist-001}}
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:reversal-1-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@scene-003-03 define
chapter: chapter-003
showing-mode: introspective
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:reversal-2}}
development: {{scene-development:reversal-2}}
conflict: {{scene-conflict:reversal}}
resolution: {{scene-resolution:reversal-final}}
exit: the chapter hands off to a sharper reversal consequence
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:reversal-final}}

@action-003-3 place
action-mode: attempt
scene: scene-003-03
actor: {{character:protagonist-001}}
goal: {{action-goal:reversal-2}}
obstacle: {{action-obstacle:reversal}}
result: {{action-result:reversal-final}}

@conflict-003-3 place
scope: scene-003-03
type: external-character
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:reversal}}

@event-003-3 trigger
scope: scene-003-03
event-type: loss
trigger: {{event-trigger:reversal-final}}
impact: {{event-impact:reversal}}
follow-through: {{event-follow-through:reversal-final}}

@dialogue-turn-003-03-01 line
scene: scene-003-03
speaker: {{character:counterpart-001}}
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-2-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-003-03-02 line
scene: scene-003-03
speaker: {{character:protagonist-001}}
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-2-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-003-atmosphere apply
scope: chapter-003
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: slow

@dialogue-003-core apply
scene: scene-003-01
speakers: {{character:protagonist-001}}, {{character:counterpart-001}}
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

@narration-003-bridge apply
scope: chapter-003
narrator-mode: first-person
function: organizational
time-handling: mixed

@interior-monologue-003-core apply
scene: scene-003-03
character: {{character:protagonist-001}}
function: psychological-insight
trigger: {{monologue-trigger:reversal}}
texture: reflective

@suspense-003-core build
scope: chapter-003
suspense-type: emotional
uncertainty: {{suspense-uncertainty:reversal}}
delay-technique: interruption
payoff-zone: event-003-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-003-core hold
scope: chapter-003
pause-function: psychological
focus: {{pause-focus:reversal}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-003-core burst
scope: chapter-003
acceleration-mode: transition-skip
trigger: {{acceleration-trigger:reversal}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: scene-003-03

@cliffhanger-003-exit cut
scope: chapter-003
cliffhanger-type: unresolved-confrontation
cut-moment: {{cliffhanger-moment:reversal}}
continuation-pressure: {{cliffhanger-continuation:reversal}}
