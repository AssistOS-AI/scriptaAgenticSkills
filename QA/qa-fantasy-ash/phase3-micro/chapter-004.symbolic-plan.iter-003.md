@sequence-004-core define
sequence-type: confrontation-chain
link-logic: logical
chapter: chapter-004
objective: {{sequence-objective:culmination}}
scene-chain: scene-004-01, scene-004-02, scene-004-03
continuity-thread: each scene must inherit and intensify the previous scene's unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
payoff: the sequence delivers its final irreversible choice

@location-004-anchor define
chapter: chapter-004
primary-setting: {{location:primary-001}}
secondary-setting: {{location:secondary-001}}
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-004-core apply
chapter: chapter-004
rule-reference: world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: show-exception-to-reveal-rule

@arc-004-protagonist map
chapter: chapter-004
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-004-relationship map
chapter: chapter-004
pair: {{character:protagonist-001}}, {{character:counterpart-001}}
entry-dynamic: oath-bound-cooperation-shadowed-by-allegiance
stress-line: {{relationship-stress:culmination}}
exit-dynamic: altered-but-legible-bond

@alternation-004-core arrange
chapter: chapter-004
block-order: description-action-dialogue-suspense-interior-monologue-revelation-pause
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-004-01 define
chapter: chapter-004
showing-mode: introspective
focalization: internal-shifting
time-space: {{location:primary-001}}
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:culmination-mid}}

@action-004-1 place
action-mode: attempt
scene: scene-004-01
actor: {{character:protagonist-001}}
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-1 place
scope: scene-004-01
type: internal
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:culmination}}

@event-004-1 trigger
scope: scene-004-01
event-type: revelation
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-004-01-01 line
scene: scene-004-01
speaker: {{character:counterpart-001}}
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-004-01-02 line
scene: scene-004-01
speaker: {{character:protagonist-001}}
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@scene-004-02 define
chapter: chapter-004
showing-mode: compressed-showing
focalization: internal-shifting
time-space: {{location:primary-001}}
introduction: {{scene-introduction:culmination-1}}
development: {{scene-development:culmination-1}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:culmination-mid}}

@action-004-2 place
action-mode: sacrifice
scene: scene-004-02
actor: {{character:protagonist-001}}
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-2 place
scope: scene-004-02
type: external-supernatural
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:culmination}}

@event-004-2 trigger
scope: scene-004-02
event-type: reversal
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-004-02-01 line
scene: scene-004-02
speaker: {{character:counterpart-001}}
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-004-02-02 line
scene: scene-004-02
speaker: {{character:protagonist-001}}
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@scene-004-03 define
chapter: chapter-004
showing-mode: compressed-showing
focalization: internal-shifting
time-space: {{location:primary-001}}
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:culmination-final}}

@action-004-3 place
action-mode: attempt
scene: scene-004-03
actor: {{character:protagonist-001}}
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-004-3 place
scope: scene-004-03
type: external-society
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:culmination}}

@event-004-3 trigger
scope: scene-004-03
event-type: discovery
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-004-03-01 line
scene: scene-004-03
speaker: {{character:counterpart-001}}
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-004-03-02 line
scene: scene-004-03
speaker: {{character:protagonist-001}}
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@description-004-atmosphere apply
scope: chapter-004
description-type: symbolic
focus: {{description-focus:fantasy}}
function: symbolic
rhythm-effect: hold

@dialogue-004-core apply
scene: scene-004-01
speakers: {{character:protagonist-001}}, {{character:counterpart-001}}
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:fantasy}}

@narration-004-bridge apply
scope: chapter-004
narrator-mode: objective
function: organizational
time-handling: mixed

@interior-monologue-004-core apply
scene: scene-004-03
character: {{character:protagonist-001}}
function: psychological-insight
trigger: {{monologue-trigger:culmination}}
texture: fragmented

@suspense-004-core build
scope: chapter-004
suspense-type: situational
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: foreshadowing
payoff-zone: event-004-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-004-core hold
scope: chapter-004
pause-function: atmospheric
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-004-core burst
scope: chapter-004
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: scene-004-03
