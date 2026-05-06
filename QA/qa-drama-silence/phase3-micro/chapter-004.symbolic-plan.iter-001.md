@sequence-004-core define
sequence-type: recovery
link-logic: mixed
chapter: $chapter-004
objective: {{sequence-objective:revelation}}
scene-chain: scene-004-01, scene-004-02, scene-004-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:revelation}}
payoff: {{sequence-payoff:revelation}}

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
visible-symptom: {{visible-symptom:revelation}}
action-limitation: {{action-limitation:revelation}}
conflict-output: {{conflict-output-rule:revelation}}
reveal-pattern: show-exception-to-reveal-rule

@arc-004-protagonist map
chapter: $chapter-004
entry-belief: {{entry-belief:protagonist}} at the start of the revelation chapter
challenge: {{challenge:protagonist-revelation}}
insight-pressure: {{insight-pressure:protagonist-revelation}}
exit-belief: {{exit-belief:protagonist}} after the revelation chapter

@arc-004-relationship map
chapter: $chapter-004
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: oath-bound-cooperation-shadowed-by-allegiance
stress-line: {{relationship-stress:revelation}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-004-core arrange
chapter: $chapter-004
block-order: description-action-dialogue-pause-event-monologue
reader-effect: {{reader-effect:revelation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-004-01 define
chapter: $chapter-004
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:revelation-0}}
development: {{scene-development:revelation-0}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:revelation-mid}}

@action-004-1 place
action-mode: evasion
scene: $scene-004-01
actor: $character-protagonist-001
goal: {{action-goal:revelation-0}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-1 place
scope: $scene-004-01
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-004-1 trigger
scope: $scene-004-01
event-type: arrival
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-004-01-01 line
scene: $scene-004-01
speaker: $character-counterpart-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:revelation-0-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-004-01-02 line
scene: $scene-004-01
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-0-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-004-02 define
chapter: $chapter-004
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:revelation-1}}
development: {{scene-development:revelation-1}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:revelation-mid}}

@action-004-2 place
action-mode: negotiation
scene: $scene-004-02
actor: $character-protagonist-001
goal: {{action-goal:revelation-1}}
obstacle: {{action-obstacle:revelation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-004-2 place
scope: $scene-004-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-004-2 trigger
scope: $scene-004-02
event-type: loss
trigger: {{event-trigger:revelation-mid}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-mid}}

@dialogue-turn-004-02-01 line
scene: $scene-004-02
speaker: $character-counterpart-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-1-0}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-004-02-02 line
scene: $scene-004-02
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:revelation-1-1}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-004-03 define
chapter: $chapter-004
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:revelation-2}}
development: {{scene-development:revelation-2}}
conflict: {{scene-conflict:revelation}}
resolution: {{scene-resolution:revelation-final}}
exit: the chapter hands off to a sharper revelation consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:revelation-final}}

@action-004-3 place
action-mode: negotiation
scene: $scene-004-03
actor: $character-protagonist-001
goal: {{action-goal:revelation-2}}
obstacle: {{action-obstacle:revelation}}
result: {{action-result:revelation-final}}

@conflict-004-3 place
scope: $scene-004-03
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:revelation}}

@event-004-3 trigger
scope: $scene-004-03
event-type: loss
trigger: {{event-trigger:revelation-final}}
impact: {{event-impact:revelation}}
follow-through: {{event-follow-through:revelation-final}}

@dialogue-turn-004-03-01 line
scene: $scene-004-03
speaker: $character-counterpart-001
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:revelation-2-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-004-03-02 line
scene: $scene-004-03
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:revelation-2-1}}
reaction-beat: {{dialogue-reaction:warn}}

@description-004-atmosphere apply
scope: $chapter-004
description-type: atmosphere
focus: {{description-focus:drama}}
function: atmospheric
rhythm-effect: frame

@dialogue-004-core apply
scene: $scene-004-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:drama}}

@narration-004-bridge apply
scope: $chapter-004
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-004-core apply
scene: $scene-004-03
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:revelation}}
texture: reflective

@suspense-004-core build
scope: $chapter-004
suspense-type: emotional
uncertainty: {{suspense-uncertainty:revelation}}
delay-technique: mixed
payoff-zone: event-004-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-004-core hold
scope: $chapter-004
pause-function: psychological
focus: {{pause-focus:revelation}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-004-core burst
scope: $chapter-004
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:revelation}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-004-03

@cliffhanger-004-exit cut
scope: $chapter-004
cliffhanger-type: danger
cut-moment: {{cliffhanger-moment:revelation}}
continuation-pressure: {{cliffhanger-continuation:revelation}}
