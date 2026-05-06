@sequence-009-core define
sequence-type: confrontation-chain
link-logic: mixed
chapter: $chapter-009
objective: {{sequence-objective:bridge}}
scene-chain: scene-009-01, scene-009-02, scene-009-03, scene-009-04, scene-009-05, scene-009-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:bridge}}
supporting-cast: $character-support-004, $character-support-005, $character-support-001
chapter-object: $plot-element-secondary-003
payoff: {{sequence-payoff:bridge}}

@location-009-anchor define
chapter: $chapter-009
primary-setting: $location-tertiary-001
secondary-setting: $location-tertiary-002
transit-setting: $location-tertiary-003
chapter-object: $plot-element-secondary-003
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-009-core apply
chapter: $chapter-009
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:bridge}}
action-limitation: {{action-limitation:bridge}}
conflict-output: {{conflict-output-rule:bridge}}
reveal-pattern: embed-rule-in-dialogue

@arc-009-protagonist map
chapter: $chapter-009
entry-belief: {{entry-belief:protagonist}} at the start of the bridge chapter
challenge: {{challenge:protagonist-bridge}}
insight-pressure: {{insight-pressure:protagonist-bridge}}
exit-belief: {{exit-belief:protagonist}} after the bridge chapter

@arc-009-relationship map
chapter: $chapter-009
pair: $character-protagonist-001, $character-support-004
entry-dynamic: careful-cooperation-strained-by-withheld-history
stress-line: {{relationship-stress:bridge}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-009-core arrange
chapter: $chapter-009
block-order: description-action-dialogue-suspense-interior-monologue-revelation-pause
reader-effect: {{reader-effect:bridge}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-009-01 define
chapter: $chapter-009
showing-mode: introspective
focalization: internal-shifting
time-space: $location-tertiary-001
introduction: {{scene-introduction:bridge-0}}
development: {{scene-development:bridge-0}}
conflict: {{scene-conflict:bridge-0}}
resolution: {{scene-resolution:bridge-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004
anchor-object: $plot-element-secondary-003
support-focus: $character-support-004
state-change: {{scene-state-change:bridge-0-mid}}

@action-009-1 place
action-mode: sacrifice
scene: $scene-009-01
actor: $character-protagonist-001
goal: {{action-goal:bridge-0}}
obstacle: {{action-obstacle:bridge-0}}
result: {{action-result:bridge-0-mid}}

@conflict-009-1 place
scope: $scene-009-01
type: external-nature
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-bridge-0}}
escalation: {{conflict-escalation:bridge-0}}

@event-009-1 trigger
scope: $scene-009-01
event-type: betrayal
trigger: {{event-trigger:bridge-0-mid}}
impact: {{event-impact:bridge-0}}
follow-through: {{event-follow-through:bridge-0-mid}}

@dialogue-turn-009-01-01 line
scene: $scene-009-01
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-009-01-02 line
scene: $scene-009-01
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:bridge-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-009-01-03 line
scene: $scene-009-01
speaker: $character-support-005
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:bridge-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-009-01-04 line
scene: $scene-009-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-pressure-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-009-02 define
chapter: $chapter-009
showing-mode: dialogic
focalization: internal-shifting
time-space: $location-tertiary-002
introduction: {{scene-introduction:bridge-1}}
development: {{scene-development:bridge-1}}
conflict: {{scene-conflict:bridge-1}}
resolution: {{scene-resolution:bridge-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-005, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-004
support-focus: $character-support-005
state-change: {{scene-state-change:bridge-1-mid}}

@action-009-2 place
action-mode: pursuit
scene: $scene-009-02
actor: $character-protagonist-001
goal: {{action-goal:bridge-1}}
obstacle: {{action-obstacle:bridge-1}}
result: {{action-result:bridge-1-mid}}

@conflict-009-2 place
scope: $scene-009-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-bridge-1}}
escalation: {{conflict-escalation:bridge-1}}

@event-009-2 trigger
scope: $scene-009-02
event-type: deadline
trigger: {{event-trigger:bridge-1-mid}}
impact: {{event-impact:bridge-1}}
follow-through: {{event-follow-through:bridge-1-mid}}

@dialogue-turn-009-02-01 line
scene: $scene-009-02
speaker: $character-support-005
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-009-02-02 line
scene: $scene-009-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:bridge-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-009-02-03 line
scene: $scene-009-02
speaker: $character-support-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:bridge-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-009-02-04 line
scene: $scene-009-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-pressure-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-009-03 define
chapter: $chapter-009
showing-mode: direct-showing
focalization: internal-shifting
time-space: $location-tertiary-003
introduction: {{scene-introduction:bridge-2}}
development: {{scene-development:bridge-2}}
conflict: {{scene-conflict:bridge-2}}
resolution: {{scene-resolution:bridge-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001
anchor-object: $plot-element-secondary-003
support-focus: $character-support-001
state-change: {{scene-state-change:bridge-2-mid}}

@action-009-3 place
action-mode: negotiation
scene: $scene-009-03
actor: $character-protagonist-001
goal: {{action-goal:bridge-2}}
obstacle: {{action-obstacle:bridge-2}}
result: {{action-result:bridge-2-mid}}

@conflict-009-3 place
scope: $scene-009-03
type: external-society
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-bridge-2}}
escalation: {{conflict-escalation:bridge-2}}

@event-009-3 trigger
scope: $scene-009-03
event-type: revelation
trigger: {{event-trigger:bridge-2-mid}}
impact: {{event-impact:bridge-2}}
follow-through: {{event-follow-through:bridge-2-mid}}

@dialogue-turn-009-03-01 line
scene: $scene-009-03
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-009-03-02 line
scene: $scene-009-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:bridge-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-009-03-03 line
scene: $scene-009-03
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:bridge-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-009-03-04 line
scene: $scene-009-03
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-pressure-2-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-009-04 define
chapter: $chapter-009
showing-mode: direct-showing
focalization: internal-shifting
time-space: $location-tertiary-001
introduction: {{scene-introduction:bridge-3}}
development: {{scene-development:bridge-3}}
conflict: {{scene-conflict:bridge-3}}
resolution: {{scene-resolution:bridge-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-004, $character-support-005
anchor-object: $plot-element-secondary-004
support-focus: $character-support-004
state-change: {{scene-state-change:bridge-3-mid}}

@action-009-4 place
action-mode: sacrifice
scene: $scene-009-04
actor: $character-protagonist-001
goal: {{action-goal:bridge-3}}
obstacle: {{action-obstacle:bridge-3}}
result: {{action-result:bridge-3-mid}}

@conflict-009-4 place
scope: $scene-009-04
type: mixed
forces: $character-protagonist-001 versus $character-support-005
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-bridge-3}}
escalation: {{conflict-escalation:bridge-3}}

@event-009-4 trigger
scope: $scene-009-04
event-type: discovery
trigger: {{event-trigger:bridge-3-mid}}
impact: {{event-impact:bridge-3}}
follow-through: {{event-follow-through:bridge-3-mid}}

@dialogue-turn-009-04-01 line
scene: $scene-009-04
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-009-04-02 line
scene: $scene-009-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:bridge-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-009-04-03 line
scene: $scene-009-04
speaker: $character-support-005
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:bridge-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-009-04-04 line
scene: $scene-009-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-pressure-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-009-05 define
chapter: $chapter-009
showing-mode: compressed-showing
focalization: internal-shifting
time-space: $location-tertiary-002
introduction: {{scene-introduction:bridge-4}}
development: {{scene-development:bridge-4}}
conflict: {{scene-conflict:bridge-4}}
resolution: {{scene-resolution:bridge-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-005, $character-pressure-001
anchor-object: $plot-element-secondary-003
support-focus: $character-support-005
state-change: {{scene-state-change:bridge-4-mid}}

@action-009-5 place
action-mode: sacrifice
scene: $scene-009-05
actor: $character-protagonist-001
goal: {{action-goal:bridge-4}}
obstacle: {{action-obstacle:bridge-4}}
result: {{action-result:bridge-4-mid}}

@conflict-009-5 place
scope: $scene-009-05
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-bridge-4}}
escalation: {{conflict-escalation:bridge-4}}

@event-009-5 trigger
scope: $scene-009-05
event-type: loss
trigger: {{event-trigger:bridge-4-mid}}
impact: {{event-impact:bridge-4}}
follow-through: {{event-follow-through:bridge-4-mid}}

@dialogue-turn-009-05-01 line
scene: $scene-009-05
speaker: $character-support-005
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-009-05-02 line
scene: $scene-009-05
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:bridge-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-009-05-03 line
scene: $scene-009-05
speaker: $character-support-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:bridge-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-009-05-04 line
scene: $scene-009-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-pressure-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-009-06 define
chapter: $chapter-009
showing-mode: direct-showing
focalization: internal-shifting
time-space: $location-tertiary-003
introduction: {{scene-introduction:bridge-5}}
development: {{scene-development:bridge-5}}
conflict: {{scene-conflict:bridge-5}}
resolution: {{scene-resolution:bridge-5-final}}
exit: the chapter hands off to a sharper bridge consequence
participants: $character-protagonist-001, $character-support-001, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-004
support-focus: $character-support-001
state-change: {{scene-state-change:bridge-5-final}}

@action-009-6 place
action-mode: sacrifice
scene: $scene-009-06
actor: $character-protagonist-001
goal: {{action-goal:bridge-5}}
obstacle: {{action-obstacle:bridge-5}}
result: {{action-result:bridge-5-final}}

@conflict-009-6 place
scope: $scene-009-06
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-bridge-5}}
escalation: {{conflict-escalation:bridge-5}}

@event-009-6 trigger
scope: $scene-009-06
event-type: loss
trigger: {{event-trigger:bridge-5-final}}
impact: {{event-impact:bridge-5}}
follow-through: {{event-follow-through:bridge-5-final}}

@dialogue-turn-009-06-01 line
scene: $scene-009-06
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:bridge-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-009-06-02 line
scene: $scene-009-06
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:bridge-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-009-06-03 line
scene: $scene-009-06
speaker: $character-support-004
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:bridge-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-009-06-04 line
scene: $scene-009-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:bridge-pressure-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-009-atmosphere apply
scope: $chapter-009
description-type: symbolic
focus: {{description-focus:fantasy}}
function: symbolic
rhythm-effect: frame

@dialogue-009-core apply
scene: $scene-009-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-004, $character-support-005
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:fantasy}}

@narration-009-bridge apply
scope: $chapter-009
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-009-core apply
scene: $scene-009-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:bridge}}
texture: reflective

@suspense-009-core build
scope: $chapter-009
suspense-type: situational
uncertainty: {{suspense-uncertainty:bridge-8}}
delay-technique: foreshadowing
payoff-zone: event-009-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-009-core hold
scope: $chapter-009
pause-function: atmospheric
focus: {{pause-focus:bridge-8}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-009-core burst
scope: $chapter-009
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:bridge-8}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-009-06

@cliffhanger-009-exit cut
scope: $chapter-009
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:bridge-8}}
continuation-pressure: {{cliffhanger-continuation:bridge-8}}
