@sequence-002-core define
sequence-type: courtship
link-logic: causal
chapter: $chapter-002
objective: {{sequence-objective:escalation}}
scene-chain: scene-002-01, scene-002-02, scene-002-03, scene-002-04, scene-002-05, scene-002-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:escalation}}
supporting-cast: $character-support-002, $character-support-003, $character-support-004
chapter-object: $plot-element-secondary-001
payoff: {{sequence-payoff:escalation}}

@location-002-anchor define
chapter: $chapter-002
primary-setting: $location-secondary
secondary-setting: $location-tertiary-001
transit-setting: $location-tertiary-002
chapter-object: $plot-element-secondary-001
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-002-core apply
chapter: $chapter-002
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:escalation}}
action-limitation: {{action-limitation:escalation}}
conflict-output: {{conflict-output-rule:escalation}}
reveal-pattern: show-exception-to-reveal-rule

@arc-002-protagonist map
chapter: $chapter-002
entry-belief: {{entry-belief:protagonist}} at the start of the escalation chapter
challenge: {{challenge:protagonist-escalation}}
insight-pressure: {{insight-pressure:protagonist-escalation}}
exit-belief: {{exit-belief:protagonist}} after the escalation chapter

@arc-002-relationship map
chapter: $chapter-002
pair: $character-protagonist-001, $character-support-002
entry-dynamic: productive-partnership-guarded-by-emotional-self-defense
stress-line: {{relationship-stress:escalation}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-002-core arrange
chapter: $chapter-002
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:escalation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-002-01 define
chapter: $chapter-002
showing-mode: introspective
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:escalation-0}}
development: {{scene-development:escalation-0}}
conflict: {{scene-conflict:escalation-0}}
resolution: {{scene-resolution:escalation-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:escalation-0-mid}}

@action-002-1 place
action-mode: negotiation
scene: $scene-002-01
actor: $character-protagonist-001
goal: {{action-goal:escalation-0}}
obstacle: {{action-obstacle:escalation-0}}
result: {{action-result:escalation-0-mid}}

@conflict-002-1 place
scope: $scene-002-01
type: external-supernatural
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-escalation-0}}
escalation: {{conflict-escalation:escalation-0}}

@event-002-1 trigger
scope: $scene-002-01
event-type: loss
trigger: {{event-trigger:escalation-0-mid}}
impact: {{event-impact:escalation-0}}
follow-through: {{event-follow-through:escalation-0-mid}}

@dialogue-turn-002-01-01 line
scene: $scene-002-01
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-002-01-02 line
scene: $scene-002-01
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:escalation-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-002-01-03 line
scene: $scene-002-01
speaker: $character-support-003
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-002-01-04 line
scene: $scene-002-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-pressure-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-002-02 define
chapter: $chapter-002
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:escalation-1}}
development: {{scene-development:escalation-1}}
conflict: {{scene-conflict:escalation-1}}
resolution: {{scene-resolution:escalation-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-003, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-003
state-change: {{scene-state-change:escalation-1-mid}}

@action-002-2 place
action-mode: revelation-act
scene: $scene-002-02
actor: $character-protagonist-001
goal: {{action-goal:escalation-1}}
obstacle: {{action-obstacle:escalation-1}}
result: {{action-result:escalation-1-mid}}

@conflict-002-2 place
scope: $scene-002-02
type: internal
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-escalation-1}}
escalation: {{conflict-escalation:escalation-1}}

@event-002-2 trigger
scope: $scene-002-02
event-type: betrayal
trigger: {{event-trigger:escalation-1-mid}}
impact: {{event-impact:escalation-1}}
follow-through: {{event-follow-through:escalation-1-mid}}

@dialogue-turn-002-02-01 line
scene: $scene-002-02
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-002-02-02 line
scene: $scene-002-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:escalation-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-002-02-03 line
scene: $scene-002-02
speaker: $character-support-004
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:escalation-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-002-02-04 line
scene: $scene-002-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-pressure-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-002-03 define
chapter: $chapter-002
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:escalation-2}}
development: {{scene-development:escalation-2}}
conflict: {{scene-conflict:escalation-2}}
resolution: {{scene-resolution:escalation-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004
anchor-object: $plot-element-secondary-001
support-focus: $character-support-004
state-change: {{scene-state-change:escalation-2-mid}}

@action-002-3 place
action-mode: revelation-act
scene: $scene-002-03
actor: $character-protagonist-001
goal: {{action-goal:escalation-2}}
obstacle: {{action-obstacle:escalation-2}}
result: {{action-result:escalation-2-mid}}

@conflict-002-3 place
scope: $scene-002-03
type: internal
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-escalation-2}}
escalation: {{conflict-escalation:escalation-2}}

@event-002-3 trigger
scope: $scene-002-03
event-type: loss
trigger: {{event-trigger:escalation-2-mid}}
impact: {{event-impact:escalation-2}}
follow-through: {{event-follow-through:escalation-2-mid}}

@dialogue-turn-002-03-01 line
scene: $scene-002-03
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-002-03-02 line
scene: $scene-002-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:escalation-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-002-03-03 line
scene: $scene-002-03
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-002-03-04 line
scene: $scene-002-03
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-pressure-2-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-002-04 define
chapter: $chapter-002
showing-mode: dialogic
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:escalation-3}}
development: {{scene-development:escalation-3}}
conflict: {{scene-conflict:escalation-3}}
resolution: {{scene-resolution:escalation-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003
anchor-object: $plot-element-secondary-002
support-focus: $character-support-002
state-change: {{scene-state-change:escalation-3-mid}}

@action-002-4 place
action-mode: attempt
scene: $scene-002-04
actor: $character-protagonist-001
goal: {{action-goal:escalation-3}}
obstacle: {{action-obstacle:escalation-3}}
result: {{action-result:escalation-3-mid}}

@conflict-002-4 place
scope: $scene-002-04
type: mixed
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-escalation-3}}
escalation: {{conflict-escalation:escalation-3}}

@event-002-4 trigger
scope: $scene-002-04
event-type: arrival
trigger: {{event-trigger:escalation-3-mid}}
impact: {{event-impact:escalation-3}}
follow-through: {{event-follow-through:escalation-3-mid}}

@dialogue-turn-002-04-01 line
scene: $scene-002-04
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-002-04-02 line
scene: $scene-002-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:escalation-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-002-04-03 line
scene: $scene-002-04
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:escalation-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-002-04-04 line
scene: $scene-002-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-pressure-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-002-05 define
chapter: $chapter-002
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:escalation-4}}
development: {{scene-development:escalation-4}}
conflict: {{scene-conflict:escalation-4}}
resolution: {{scene-resolution:escalation-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:escalation-4-mid}}

@action-002-5 place
action-mode: revelation-act
scene: $scene-002-05
actor: $character-protagonist-001
goal: {{action-goal:escalation-4}}
obstacle: {{action-obstacle:escalation-4}}
result: {{action-result:escalation-4-mid}}

@conflict-002-5 place
scope: $scene-002-05
type: external-nature
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-escalation-4}}
escalation: {{conflict-escalation:escalation-4}}

@event-002-5 trigger
scope: $scene-002-05
event-type: betrayal
trigger: {{event-trigger:escalation-4-mid}}
impact: {{event-impact:escalation-4}}
follow-through: {{event-follow-through:escalation-4-mid}}

@dialogue-turn-002-05-01 line
scene: $scene-002-05
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-002-05-02 line
scene: $scene-002-05
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:escalation-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-002-05-03 line
scene: $scene-002-05
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-002-05-04 line
scene: $scene-002-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-pressure-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-002-06 define
chapter: $chapter-002
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:escalation-5}}
development: {{scene-development:escalation-5}}
conflict: {{scene-conflict:escalation-5}}
resolution: {{scene-resolution:escalation-5-final}}
exit: the chapter hands off to a sharper escalation consequence
participants: $character-protagonist-001, $character-support-004, $character-support-002, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-004
state-change: {{scene-state-change:escalation-5-final}}

@action-002-6 place
action-mode: pursuit
scene: $scene-002-06
actor: $character-protagonist-001
goal: {{action-goal:escalation-5}}
obstacle: {{action-obstacle:escalation-5}}
result: {{action-result:escalation-5-final}}

@conflict-002-6 place
scope: $scene-002-06
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-escalation-5}}
escalation: {{conflict-escalation:escalation-5}}

@event-002-6 trigger
scope: $scene-002-06
event-type: accident
trigger: {{event-trigger:escalation-5-final}}
impact: {{event-impact:escalation-5}}
follow-through: {{event-follow-through:escalation-5-final}}

@dialogue-turn-002-06-01 line
scene: $scene-002-06
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-002-06-02 line
scene: $scene-002-06
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:escalation-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-002-06-03 line
scene: $scene-002-06
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:escalation-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-002-06-04 line
scene: $scene-002-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-pressure-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-002-atmosphere apply
scope: $chapter-002
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: frame

@dialogue-002-core apply
scene: $scene-002-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-support-003
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

@narration-002-bridge apply
scope: $chapter-002
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-002-core apply
scene: $scene-002-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:escalation}}
texture: reflective

@suspense-002-core build
scope: $chapter-002
suspense-type: emotional
uncertainty: {{suspense-uncertainty:escalation-1}}
delay-technique: interruption
payoff-zone: event-002-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-002-core hold
scope: $chapter-002
pause-function: psychological
focus: {{pause-focus:escalation-1}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-002-core burst
scope: $chapter-002
acceleration-mode: transition-skip
trigger: {{acceleration-trigger:escalation-1}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-002-06

@cliffhanger-002-exit cut
scope: $chapter-002
cliffhanger-type: unresolved-confrontation
cut-moment: {{cliffhanger-moment:escalation-1}}
continuation-pressure: {{cliffhanger-continuation:escalation-1}}
