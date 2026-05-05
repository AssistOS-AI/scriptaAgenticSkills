@sequence-002-core define
sequence-type: investigation
link-logic: causal
chapter: chapter-002
objective: {{sequence-objective:escalation}}
scene-chain: scene-002-01, scene-002-02, scene-002-03
continuity-thread: each scene must inherit and intensify the previous scene's unresolved pressure
conflict-line: {{sequence-conflict:escalation}}
payoff: {{sequence-payoff:escalation}}

@location-002-anchor define
chapter: chapter-002
primary-setting: {{location:primary-001}}
secondary-setting: {{location:secondary-001}}
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-002-core apply
chapter: chapter-002
rule-reference: world-rule-primary
visible-symptom: {{visible-symptom:escalation}}
action-limitation: {{action-limitation:escalation}}
conflict-output: {{conflict-output-rule:escalation}}
reveal-pattern: embed-rule-in-dialogue

@arc-002-protagonist map
chapter: chapter-002
entry-belief: {{entry-belief:protagonist}} at the start of the escalation chapter
challenge: {{challenge:protagonist-escalation}}
insight-pressure: {{insight-pressure:protagonist-escalation}}
exit-belief: {{exit-belief:protagonist}} after the escalation chapter

@arc-002-relationship map
chapter: chapter-002
pair: {{character:protagonist-001}}, {{character:counterpart-001}}
entry-dynamic: oath-bound-cooperation-shadowed-by-allegiance
stress-line: {{relationship-stress:escalation}}
exit-dynamic: altered-but-legible-bond

@alternation-002-core arrange
chapter: chapter-002
block-order: action-dialogue-description-conflict-revelation-suspense-cliffhanger
reader-effect: {{reader-effect:escalation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-002-01 define
chapter: chapter-002
showing-mode: direct-showing
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:escalation-0}}
development: {{scene-development:escalation-0}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:escalation-mid}}

@action-002-1 place
action-mode: evasion
scene: scene-002-01
actor: {{character:protagonist-001}}
goal: {{action-goal:escalation-0}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-002-1 place
scope: scene-002-01
type: external-technology
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:escalation}}

@event-002-1 trigger
scope: scene-002-01
event-type: revelation
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-002-01-01 line
scene: scene-002-01
speaker: {{character:counterpart-001}}
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-002-01-02 line
scene: scene-002-01
speaker: {{character:protagonist-001}}
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:escalation-0-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@scene-002-02 define
chapter: chapter-002
showing-mode: dialogic
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:escalation-1}}
development: {{scene-development:escalation-1}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:escalation-mid}}

@action-002-2 place
action-mode: negotiation
scene: scene-002-02
actor: {{character:protagonist-001}}
goal: {{action-goal:escalation-1}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-002-2 place
scope: scene-002-02
type: external-society
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:escalation}}

@event-002-2 trigger
scope: scene-002-02
event-type: reversal
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-002-02-01 line
scene: scene-002-02
speaker: {{character:counterpart-001}}
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-002-02-02 line
scene: scene-002-02
speaker: {{character:protagonist-001}}
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:escalation-1-1}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@scene-002-03 define
chapter: chapter-002
showing-mode: compressed-showing
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:escalation-2}}
development: {{scene-development:escalation-2}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-final}}
exit: the chapter hands off to a sharper escalation consequence
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:escalation-final}}

@action-002-3 place
action-mode: negotiation
scene: scene-002-03
actor: {{character:protagonist-001}}
goal: {{action-goal:escalation-2}}
obstacle: {{action-obstacle:escalation}}
result: {{action-result:escalation-final}}

@conflict-002-3 place
scope: scene-002-03
type: external-character
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:escalation}}

@event-002-3 trigger
scope: scene-002-03
event-type: decision
trigger: {{event-trigger:escalation-final}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-final}}

@dialogue-turn-002-03-01 line
scene: scene-002-03
speaker: {{character:counterpart-001}}
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:escalation-2-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-002-03-02 line
scene: scene-002-03
speaker: {{character:protagonist-001}}
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:escalation-2-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@description-002-atmosphere apply
scope: chapter-002
description-type: setting
focus: {{description-focus:detective-police}}
function: narrative
rhythm-effect: hold

@dialogue-002-core apply
scene: scene-002-01
speakers: {{character:protagonist-001}}, {{character:counterpart-001}}
exchange-type: question-answer
purpose: information
subtext: {{dialogue-core-subtext:detective-police}}

@narration-002-bridge apply
scope: chapter-002
narrator-mode: third-person
function: organizational
time-handling: mixed

@interior-monologue-002-core apply
scene: scene-002-03
character: {{character:protagonist-001}}
function: characterization
trigger: {{monologue-trigger:escalation}}
texture: fragmented

@suspense-002-core build
scope: chapter-002
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:escalation}}
delay-technique: delayed-information
payoff-zone: event-002-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-002-core hold
scope: chapter-002
pause-function: explanatory
focus: {{pause-focus:escalation}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-002-core burst
scope: chapter-002
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:escalation}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: scene-002-03

@cliffhanger-002-exit cut
scope: chapter-002
cliffhanger-type: unresolved-confrontation
cut-moment: {{cliffhanger-moment:escalation}}
continuation-pressure: {{cliffhanger-continuation:escalation}}
