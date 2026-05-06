@sequence-010-core define
sequence-type: courtship
link-logic: causal
chapter: $chapter-010
objective: {{sequence-objective:culmination}}
scene-chain: scene-010-01, scene-010-02, scene-010-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
payoff: the sequence delivers its final irreversible choice

@location-010-anchor define
chapter: $chapter-010
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-010-core apply
chapter: $chapter-010
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: show-consequence-first-explain-cause-later

@arc-010-protagonist map
chapter: $chapter-010
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-010-relationship map
chapter: $chapter-010
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: productive-partnership-guarded-by-emotional-self-defense
stress-line: {{relationship-stress:culmination}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-010-core arrange
chapter: $chapter-010
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-010-01 define
chapter: $chapter-010
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

@action-010-1 place
action-mode: attempt
scene: $scene-010-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-010-1 place
scope: $scene-010-01
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-010-1 trigger
scope: $scene-010-01
event-type: accident
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-010-01-01 line
scene: $scene-010-01
speaker: $character-counterpart-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-010-01-02 line
scene: $scene-010-01
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:probe}}

@scene-010-02 define
chapter: $chapter-010
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

@action-010-2 place
action-mode: revelation-act
scene: $scene-010-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-010-2 place
scope: $scene-010-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-010-2 trigger
scope: $scene-010-02
event-type: revelation
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-010-02-01 line
scene: $scene-010-02
speaker: $character-counterpart-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-010-02-02 line
scene: $scene-010-02
speaker: $character-protagonist-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@scene-010-03 define
chapter: $chapter-010
showing-mode: direct-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-final}}

@action-010-3 place
action-mode: negotiation
scene: $scene-010-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-010-3 place
scope: $scene-010-03
type: internal
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:culmination}}

@event-010-3 trigger
scope: $scene-010-03
event-type: discovery
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-010-03-01 line
scene: $scene-010-03
speaker: $character-counterpart-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-010-03-02 line
scene: $scene-010-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@description-010-atmosphere apply
scope: $chapter-010
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: hold

@dialogue-010-core apply
scene: $scene-010-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

@narration-010-bridge apply
scope: $chapter-010
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-010-core apply
scene: $scene-010-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:culmination}}
texture: associative

@suspense-010-core build
scope: $chapter-010
suspense-type: emotional
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: interruption
payoff-zone: event-010-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-010-core hold
scope: $chapter-010
pause-function: psychological
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-010-core burst
scope: $chapter-010
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-010-03
