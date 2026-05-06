@sequence-006-core define
sequence-type: confrontation-chain
link-logic: causal
chapter: $chapter-006
objective: {{sequence-objective:reversal}}
scene-chain: scene-006-01, scene-006-02, scene-006-03, scene-006-04, scene-006-05, scene-006-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:reversal}}
supporting-cast: $character-support-001, $character-support-002, $character-support-003
chapter-object: $plot-element-core-object
payoff: {{sequence-payoff:reversal}}

@location-006-anchor define
chapter: $chapter-006
primary-setting: $location-tertiary-004
secondary-setting: $location-primary
transit-setting: $location-secondary
chapter-object: $plot-element-core-object
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-006-core apply
chapter: $chapter-006
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:reversal}}
action-limitation: {{action-limitation:reversal}}
conflict-output: {{conflict-output-rule:reversal}}
reveal-pattern: embed-rule-in-dialogue

@arc-006-protagonist map
chapter: $chapter-006
entry-belief: {{entry-belief:protagonist}} at the start of the reversal chapter
challenge: {{challenge:protagonist-reversal}}
insight-pressure: {{insight-pressure:protagonist-reversal}}
exit-belief: {{exit-belief:protagonist}} after the reversal chapter

@arc-006-relationship map
chapter: $chapter-006
pair: $character-protagonist-001, $character-support-001
entry-dynamic: productive-partnership-guarded-by-emotional-self-defense
stress-line: {{relationship-stress:reversal}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-006-core arrange
chapter: $chapter-006
block-order: description-action-dialogue-suspense-interior-monologue-revelation-pause
reader-effect: {{reader-effect:reversal}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-006-01 define
chapter: $chapter-006
showing-mode: mixed
focalization: internal-shifting
time-space: $location-tertiary-004
introduction: {{scene-introduction:reversal-0}}
development: {{scene-development:reversal-0}}
conflict: {{scene-conflict:reversal-0}}
resolution: {{scene-resolution:reversal-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001
anchor-object: $plot-element-core-object
support-focus: $character-support-001
state-change: {{scene-state-change:reversal-0-mid}}

@action-006-1 place
action-mode: attempt
scene: $scene-006-01
actor: $character-protagonist-001
goal: {{action-goal:reversal-0}}
obstacle: {{action-obstacle:reversal-0}}
result: {{action-result:reversal-0-mid}}

@conflict-006-1 place
scope: $scene-006-01
type: external-society
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-reversal-0}}
escalation: {{conflict-escalation:reversal-0}}

@event-006-1 trigger
scope: $scene-006-01
event-type: accident
trigger: {{event-trigger:reversal-0-mid}}
impact: {{event-impact:reversal-0}}
follow-through: {{event-follow-through:reversal-0-mid}}

@dialogue-turn-006-01-01 line
scene: $scene-006-01
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-006-01-02 line
scene: $scene-006-01
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:reversal-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-006-01-03 line
scene: $scene-006-01
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:reversal-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-006-01-04 line
scene: $scene-006-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-pressure-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-006-02 define
chapter: $chapter-006
showing-mode: introspective
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:reversal-1}}
development: {{scene-development:reversal-1}}
conflict: {{scene-conflict:reversal-1}}
resolution: {{scene-resolution:reversal-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:reversal-1-mid}}

@action-006-2 place
action-mode: attempt
scene: $scene-006-02
actor: $character-protagonist-001
goal: {{action-goal:reversal-1}}
obstacle: {{action-obstacle:reversal-1}}
result: {{action-result:reversal-1-mid}}

@conflict-006-2 place
scope: $scene-006-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-reversal-1}}
escalation: {{conflict-escalation:reversal-1}}

@event-006-2 trigger
scope: $scene-006-02
event-type: arrival
trigger: {{event-trigger:reversal-1-mid}}
impact: {{event-impact:reversal-1}}
follow-through: {{event-follow-through:reversal-1-mid}}

@dialogue-turn-006-02-01 line
scene: $scene-006-02
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-006-02-02 line
scene: $scene-006-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:reversal-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-006-02-03 line
scene: $scene-006-02
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-006-02-04 line
scene: $scene-006-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-pressure-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-006-03 define
chapter: $chapter-006
showing-mode: compressed-showing
focalization: internal-shifting
time-space: $location-secondary
introduction: {{scene-introduction:reversal-2}}
development: {{scene-development:reversal-2}}
conflict: {{scene-conflict:reversal-2}}
resolution: {{scene-resolution:reversal-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003
anchor-object: $plot-element-core-object
support-focus: $character-support-003
state-change: {{scene-state-change:reversal-2-mid}}

@action-006-3 place
action-mode: sacrifice
scene: $scene-006-03
actor: $character-protagonist-001
goal: {{action-goal:reversal-2}}
obstacle: {{action-obstacle:reversal-2}}
result: {{action-result:reversal-2-mid}}

@conflict-006-3 place
scope: $scene-006-03
type: external-society
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-reversal-2}}
escalation: {{conflict-escalation:reversal-2}}

@event-006-3 trigger
scope: $scene-006-03
event-type: loss
trigger: {{event-trigger:reversal-2-mid}}
impact: {{event-impact:reversal-2}}
follow-through: {{event-follow-through:reversal-2-mid}}

@dialogue-turn-006-03-01 line
scene: $scene-006-03
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-006-03-02 line
scene: $scene-006-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:reversal-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-006-03-03 line
scene: $scene-006-03
speaker: $character-support-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:reversal-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-006-03-04 line
scene: $scene-006-03
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-pressure-2-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-006-04 define
chapter: $chapter-006
showing-mode: mixed
focalization: internal-shifting
time-space: $location-tertiary-004
introduction: {{scene-introduction:reversal-3}}
development: {{scene-development:reversal-3}}
conflict: {{scene-conflict:reversal-3}}
resolution: {{scene-resolution:reversal-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-001
state-change: {{scene-state-change:reversal-3-mid}}

@action-006-4 place
action-mode: pursuit
scene: $scene-006-04
actor: $character-protagonist-001
goal: {{action-goal:reversal-3}}
obstacle: {{action-obstacle:reversal-3}}
result: {{action-result:reversal-3-mid}}

@conflict-006-4 place
scope: $scene-006-04
type: external-technology
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-reversal-3}}
escalation: {{conflict-escalation:reversal-3}}

@event-006-4 trigger
scope: $scene-006-04
event-type: reversal
trigger: {{event-trigger:reversal-3-mid}}
impact: {{event-impact:reversal-3}}
follow-through: {{event-follow-through:reversal-3-mid}}

@dialogue-turn-006-04-01 line
scene: $scene-006-04
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-006-04-02 line
scene: $scene-006-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:reversal-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-006-04-03 line
scene: $scene-006-04
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-006-04-04 line
scene: $scene-006-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-pressure-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-006-05 define
chapter: $chapter-006
showing-mode: dialogic
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:reversal-4}}
development: {{scene-development:reversal-4}}
conflict: {{scene-conflict:reversal-4}}
resolution: {{scene-resolution:reversal-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-002
state-change: {{scene-state-change:reversal-4-mid}}

@action-006-5 place
action-mode: sacrifice
scene: $scene-006-05
actor: $character-protagonist-001
goal: {{action-goal:reversal-4}}
obstacle: {{action-obstacle:reversal-4}}
result: {{action-result:reversal-4-mid}}

@conflict-006-5 place
scope: $scene-006-05
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-reversal-4}}
escalation: {{conflict-escalation:reversal-4}}

@event-006-5 trigger
scope: $scene-006-05
event-type: betrayal
trigger: {{event-trigger:reversal-4-mid}}
impact: {{event-impact:reversal-4}}
follow-through: {{event-follow-through:reversal-4-mid}}

@dialogue-turn-006-05-01 line
scene: $scene-006-05
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-006-05-02 line
scene: $scene-006-05
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:reversal-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-006-05-03 line
scene: $scene-006-05
speaker: $character-support-003
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:reversal-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-006-05-04 line
scene: $scene-006-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-pressure-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-006-06 define
chapter: $chapter-006
showing-mode: dialogic
focalization: internal-shifting
time-space: $location-secondary
introduction: {{scene-introduction:reversal-5}}
development: {{scene-development:reversal-5}}
conflict: {{scene-conflict:reversal-5}}
resolution: {{scene-resolution:reversal-5-final}}
exit: the chapter hands off to a sharper reversal consequence
participants: $character-protagonist-001, $character-support-003, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:reversal-5-final}}

@action-006-6 place
action-mode: attempt
scene: $scene-006-06
actor: $character-protagonist-001
goal: {{action-goal:reversal-5}}
obstacle: {{action-obstacle:reversal-5}}
result: {{action-result:reversal-5-final}}

@conflict-006-6 place
scope: $scene-006-06
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-reversal-5}}
escalation: {{conflict-escalation:reversal-5}}

@event-006-6 trigger
scope: $scene-006-06
event-type: arrival
trigger: {{event-trigger:reversal-5-final}}
impact: {{event-impact:reversal-5}}
follow-through: {{event-follow-through:reversal-5-final}}

@dialogue-turn-006-06-01 line
scene: $scene-006-06
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:reversal-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-006-06-02 line
scene: $scene-006-06
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:reversal-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-006-06-03 line
scene: $scene-006-06
speaker: $character-support-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:reversal-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-006-06-04 line
scene: $scene-006-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:reversal-pressure-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-006-atmosphere apply
scope: $chapter-006
description-type: symbolic
focus: {{description-focus:fantasy}}
function: symbolic
rhythm-effect: hold

@dialogue-006-core apply
scene: $scene-006-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-001, $character-support-002
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:fantasy}}

@narration-006-bridge apply
scope: $chapter-006
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-006-core apply
scene: $scene-006-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:reversal}}
texture: reflective

@suspense-006-core build
scope: $chapter-006
suspense-type: situational
uncertainty: {{suspense-uncertainty:reversal-5}}
delay-technique: foreshadowing
payoff-zone: event-006-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-006-core hold
scope: $chapter-006
pause-function: atmospheric
focus: {{pause-focus:reversal-5}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-006-core burst
scope: $chapter-006
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:reversal-5}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-006-06

@cliffhanger-006-exit cut
scope: $chapter-006
cliffhanger-type: danger
cut-moment: {{cliffhanger-moment:reversal-5}}
continuation-pressure: {{cliffhanger-continuation:reversal-5}}
