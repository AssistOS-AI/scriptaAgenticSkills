@sequence-004-core define
sequence-type: courtship
link-logic: mixed
chapter: $chapter-004
objective: {{sequence-objective:culmination}}
scene-chain: scene-004-01, scene-004-02, scene-004-03
continuity-thread: each scene must inherit and intensify the previous scene's unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
payoff: the sequence delivers its final irreversible choice

@location-004-anchor define
chapter: $chapter-004
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-004-core apply
chapter: $chapter-004
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: show-consequence-first-explain-cause-later

@arc-004-protagonist map
chapter: $chapter-004
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-004-relationship map
chapter: $chapter-004
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: oath-bound-cooperation-shadowed-by-allegiance
stress-line: {{relationship-stress:culmination}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-004-core arrange
chapter: $chapter-004
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-004-01 define
chapter: $chapter-004
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

@action-004-1 place
action-mode: negotiation
scene: $scene-004-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-1 place
scope: $scene-004-01
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-004-1 trigger
scope: $scene-004-01
event-type: decision
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-004-01-01 line
scene: $scene-004-01
speaker: $character-counterpart-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-004-01-02 line
scene: $scene-004-01
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@scene-004-02 define
chapter: $chapter-004
showing-mode: introspective
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-1}}
development: {{scene-development:culmination-1}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-004-2 place
action-mode: sacrifice
scene: $scene-004-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-2 place
scope: $scene-004-02
type: external-technology
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-004-2 trigger
scope: $scene-004-02
event-type: arrival
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-004-02-01 line
scene: $scene-004-02
speaker: $character-counterpart-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-004-02-02 line
scene: $scene-004-02
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@scene-004-03 define
chapter: $chapter-004
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-final}}

@action-004-3 place
action-mode: pursuit
scene: $scene-004-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-004-3 place
scope: $scene-004-03
type: external-nature
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-004-3 trigger
scope: $scene-004-03
event-type: loss
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-004-03-01 line
scene: $scene-004-03
speaker: $character-counterpart-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-004-03-02 line
scene: $scene-004-03
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@description-004-atmosphere apply
scope: $chapter-004
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: slow

@dialogue-004-core apply
scene: $scene-004-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

@narration-004-bridge apply
scope: $chapter-004
narrator-mode: first-person
function: organizational
time-handling: mixed

@interior-monologue-004-core apply
scene: $scene-004-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:culmination}}
texture: fragmented

@suspense-004-core build
scope: $chapter-004
suspense-type: emotional
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: interruption
payoff-zone: event-004-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-004-core hold
scope: $chapter-004
pause-function: psychological
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-004-core burst
scope: $chapter-004
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-004-03
