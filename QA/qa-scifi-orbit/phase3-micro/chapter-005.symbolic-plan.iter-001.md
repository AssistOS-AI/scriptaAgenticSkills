@sequence-005-core define
sequence-type: escape
link-logic: causal
chapter: $chapter-005
objective: {{sequence-objective:culmination}}
scene-chain: scene-005-01, scene-005-02, scene-005-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
payoff: {{sequence-payoff:culmination}}

@location-005-anchor define
chapter: $chapter-005
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-005-core apply
chapter: $chapter-005
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: show-exception-to-reveal-rule

@arc-005-protagonist map
chapter: $chapter-005
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-005-relationship map
chapter: $chapter-005
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: professional-alliance-with-unequal-risk
stress-line: {{relationship-stress:culmination}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-005-core arrange
chapter: $chapter-005
block-order: description-dialogue-action-interior-monologue-suspense-revelation-acceleration
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-005-01 define
chapter: $chapter-005
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-005-1 place
action-mode: attempt
scene: $scene-005-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-005-1 place
scope: $scene-005-01
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:culmination}}

@event-005-1 trigger
scope: $scene-005-01
event-type: revelation
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-005-01-01 line
scene: $scene-005-01
speaker: $character-counterpart-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-005-01-02 line
scene: $scene-005-01
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-005-02 define
chapter: $chapter-005
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

@action-005-2 place
action-mode: sacrifice
scene: $scene-005-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-005-2 place
scope: $scene-005-02
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:culmination}}

@event-005-2 trigger
scope: $scene-005-02
event-type: discovery
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-005-02-01 line
scene: $scene-005-02
speaker: $character-counterpart-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-005-02-02 line
scene: $scene-005-02
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-005-03 define
chapter: $chapter-005
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

@action-005-3 place
action-mode: negotiation
scene: $scene-005-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-005-3 place
scope: $scene-005-03
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:culmination}}

@event-005-3 trigger
scope: $scene-005-03
event-type: arrival
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-005-03-01 line
scene: $scene-005-03
speaker: $character-counterpart-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-005-03-02 line
scene: $scene-005-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@description-005-atmosphere apply
scope: $chapter-005
description-type: atmosphere
focus: {{description-focus:science-fiction}}
function: atmospheric
rhythm-effect: hold

@dialogue-005-core apply
scene: $scene-005-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:science-fiction}}

@narration-005-bridge apply
scope: $chapter-005
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-005-core apply
scene: $scene-005-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:culmination}}
texture: reflective

@suspense-005-core build
scope: $chapter-005
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: foreshadowing
payoff-zone: event-005-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-005-core hold
scope: $chapter-005
pause-function: atmospheric
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-005-core burst
scope: $chapter-005
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-005-03

@cliffhanger-005-exit cut
scope: $chapter-005
cliffhanger-type: danger
cut-moment: {{cliffhanger-moment:culmination}}
continuation-pressure: {{cliffhanger-continuation:culmination}}
