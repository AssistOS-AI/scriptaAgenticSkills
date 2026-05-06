@sequence-003-core define
sequence-type: escape
link-logic: mixed
chapter: $chapter-003
objective: {{sequence-objective:investigation}}
scene-chain: scene-003-01, scene-003-02, scene-003-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:investigation}}
payoff: {{sequence-payoff:investigation}}

@location-003-anchor define
chapter: $chapter-003
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-003-core apply
chapter: $chapter-003
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:investigation}}
action-limitation: {{action-limitation:investigation}}
conflict-output: {{conflict-output-rule:investigation}}
reveal-pattern: show-consequence-first-explain-cause-later

@arc-003-protagonist map
chapter: $chapter-003
entry-belief: {{entry-belief:protagonist}} at the start of the investigation chapter
challenge: {{challenge:protagonist-investigation}}
insight-pressure: {{insight-pressure:protagonist-investigation}}
exit-belief: {{exit-belief:protagonist}} after the investigation chapter

@arc-003-relationship map
chapter: $chapter-003
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: technical-trust-without-moral-agreement
stress-line: {{relationship-stress:investigation}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-003-core arrange
chapter: $chapter-003
block-order: description-dialogue-action-interior-monologue-suspense-revelation-acceleration
reader-effect: {{reader-effect:investigation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-003-01 define
chapter: $chapter-003
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:investigation-0}}
development: {{scene-development:investigation-0}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:investigation-mid}}

@action-003-1 place
action-mode: evasion
scene: $scene-003-01
actor: $character-protagonist-001
goal: {{action-goal:investigation-0}}
obstacle: {{action-obstacle:investigation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-003-1 place
scope: $scene-003-01
type: external-nature
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-003-1 trigger
scope: $scene-003-01
event-type: accident
trigger: {{event-trigger:investigation-mid}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-mid}}

@dialogue-turn-003-01-01 line
scene: $scene-003-01
speaker: $character-counterpart-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:investigation-0-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-003-01-02 line
scene: $scene-003-01
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-0-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-003-02 define
chapter: $chapter-003
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:investigation-1}}
development: {{scene-development:investigation-1}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:investigation-mid}}

@action-003-2 place
action-mode: negotiation
scene: $scene-003-02
actor: $character-protagonist-001
goal: {{action-goal:investigation-1}}
obstacle: {{action-obstacle:investigation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-003-2 place
scope: $scene-003-02
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-003-2 trigger
scope: $scene-003-02
event-type: decision
trigger: {{event-trigger:investigation-mid}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-mid}}

@dialogue-turn-003-02-01 line
scene: $scene-003-02
speaker: $character-counterpart-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-003-02-02 line
scene: $scene-003-02
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-1-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-003-03 define
chapter: $chapter-003
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:investigation-2}}
development: {{scene-development:investigation-2}}
conflict: {{scene-conflict:investigation}}
resolution: {{scene-resolution:investigation-final}}
exit: the chapter hands off to a sharper investigation consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:investigation-final}}

@action-003-3 place
action-mode: attempt
scene: $scene-003-03
actor: $character-protagonist-001
goal: {{action-goal:investigation-2}}
obstacle: {{action-obstacle:investigation}}
result: {{action-result:investigation-final}}

@conflict-003-3 place
scope: $scene-003-03
type: external-nature
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:freedom-consent-memory-agency}}
escalation: {{conflict-escalation:investigation}}

@event-003-3 trigger
scope: $scene-003-03
event-type: arrival
trigger: {{event-trigger:investigation-final}}
impact: {{event-impact:investigation}}
follow-through: {{event-follow-through:investigation-final}}

@dialogue-turn-003-03-01 line
scene: $scene-003-03
speaker: $character-counterpart-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:investigation-2-0}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-003-03-02 line
scene: $scene-003-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:investigation-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@description-003-atmosphere apply
scope: $chapter-003
description-type: atmosphere
focus: {{description-focus:science-fiction}}
function: atmospheric
rhythm-effect: contrast

@dialogue-003-core apply
scene: $scene-003-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:science-fiction}}

@narration-003-bridge apply
scope: $chapter-003
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-003-core apply
scene: $scene-003-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:investigation}}
texture: reflective

@suspense-003-core build
scope: $chapter-003
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:investigation}}
delay-technique: foreshadowing
payoff-zone: event-003-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-003-core hold
scope: $chapter-003
pause-function: atmospheric
focus: {{pause-focus:investigation}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-003-core burst
scope: $chapter-003
acceleration-mode: montage
trigger: {{acceleration-trigger:investigation}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-003-03

@cliffhanger-003-exit cut
scope: $chapter-003
cliffhanger-type: unresolved-confrontation
cut-moment: {{cliffhanger-moment:investigation}}
continuation-pressure: {{cliffhanger-continuation:investigation}}
