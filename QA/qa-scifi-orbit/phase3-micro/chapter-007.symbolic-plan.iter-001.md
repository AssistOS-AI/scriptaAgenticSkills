@sequence-007-core define
sequence-type: escape
link-logic: mixed
chapter: $chapter-007
objective: {{sequence-objective:culmination}}
scene-chain: scene-007-01, scene-007-02, scene-007-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
payoff: {{sequence-payoff:culmination}}

@location-007-anchor define
chapter: $chapter-007
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-007-core apply
chapter: $chapter-007
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: embed-rule-in-dialogue

@arc-007-protagonist map
chapter: $chapter-007
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-007-relationship map
chapter: $chapter-007
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: productive-partnership-guarded-by-emotional-self-defense
stress-line: {{relationship-stress:culmination}}
exit-dynamic: altered-but-legible-bond

@alternation-007-core arrange
chapter: $chapter-007
block-order: description-dialogue-action-interior-monologue-suspense-revelation-acceleration
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-007-01 define
chapter: $chapter-007
showing-mode: direct-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-007-1 place
action-mode: attempt
scene: $scene-007-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-007-1 place
scope: $scene-007-01
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:culmination}}

@event-007-1 trigger
scope: $scene-007-01
event-type: arrival
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-007-01-01 line
scene: $scene-007-01
speaker: $character-counterpart-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-007-01-02 line
scene: $scene-007-01
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@scene-007-02 define
chapter: $chapter-007
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-1}}
development: {{scene-development:culmination-1}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-007-2 place
action-mode: attempt
scene: $scene-007-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-007-2 place
scope: $scene-007-02
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:culmination}}

@event-007-2 trigger
scope: $scene-007-02
event-type: crime
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-007-02-01 line
scene: $scene-007-02
speaker: $character-counterpart-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-007-02-02 line
scene: $scene-007-02
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@scene-007-03 define
chapter: $chapter-007
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

@action-007-3 place
action-mode: sacrifice
scene: $scene-007-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-007-3 place
scope: $scene-007-03
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:culmination}}

@event-007-3 trigger
scope: $scene-007-03
event-type: deadline
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-007-03-01 line
scene: $scene-007-03
speaker: $character-counterpart-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-007-03-02 line
scene: $scene-007-03
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:warn}}

@description-007-atmosphere apply
scope: $chapter-007
description-type: atmosphere
focus: {{description-focus:science-fiction}}
function: atmospheric
rhythm-effect: slow

@dialogue-007-core apply
scene: $scene-007-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:science-fiction}}

@narration-007-bridge apply
scope: $chapter-007
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-007-core apply
scene: $scene-007-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:culmination}}
texture: reflective

@suspense-007-core build
scope: $chapter-007
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: foreshadowing
payoff-zone: event-007-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-007-core hold
scope: $chapter-007
pause-function: atmospheric
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-007-core burst
scope: $chapter-007
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-007-03

@cliffhanger-007-exit cut
scope: $chapter-007
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:culmination}}
continuation-pressure: {{cliffhanger-continuation:culmination}}
