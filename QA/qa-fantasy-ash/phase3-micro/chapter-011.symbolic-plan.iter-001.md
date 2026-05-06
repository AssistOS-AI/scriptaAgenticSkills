@sequence-011-core define
sequence-type: confrontation-chain
link-logic: mixed
chapter: $chapter-011
objective: {{sequence-objective:culmination}}
scene-chain: scene-011-01, scene-011-02, scene-011-03, scene-011-04, scene-011-05, scene-011-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
supporting-cast: $character-support-001, $character-support-002, $character-support-003
chapter-object: $plot-element-core-object
payoff: {{sequence-payoff:culmination}}

@location-011-anchor define
chapter: $chapter-011
primary-setting: $location-tertiary-003
secondary-setting: $location-tertiary-004
transit-setting: $location-primary
chapter-object: $plot-element-core-object
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-011-core apply
chapter: $chapter-011
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: show-exception-to-reveal-rule

@arc-011-protagonist map
chapter: $chapter-011
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-011-relationship map
chapter: $chapter-011
pair: $character-protagonist-001, $character-support-001
entry-dynamic: oath-bound-cooperation-shadowed-by-allegiance
stress-line: {{relationship-stress:culmination}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-011-core arrange
chapter: $chapter-011
block-order: description-action-dialogue-suspense-interior-monologue-revelation-pause
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-011-01 define
chapter: $chapter-011
showing-mode: direct-showing
focalization: internal-shifting
time-space: $location-tertiary-003
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination-0}}
resolution: {{scene-resolution:culmination-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001
anchor-object: $plot-element-core-object
support-focus: $character-support-001
state-change: {{scene-state-change:culmination-0-mid}}

@action-011-1 place
action-mode: attempt
scene: $scene-011-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination-0}}
result: {{action-result:culmination-0-mid}}

@conflict-011-1 place
scope: $scene-011-01
type: external-technology
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-culmination-0}}
escalation: {{conflict-escalation:culmination-0}}

@event-011-1 trigger
scope: $scene-011-01
event-type: decision
trigger: {{event-trigger:culmination-0-mid}}
impact: {{event-impact:culmination-0}}
follow-through: {{event-follow-through:culmination-0-mid}}

@dialogue-turn-011-01-01 line
scene: $scene-011-01
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-011-01-02 line
scene: $scene-011-01
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-01-03 line
scene: $scene-011-01
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-011-01-04 line
scene: $scene-011-01
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-pressure-0-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-011-02 define
chapter: $chapter-011
showing-mode: mixed
focalization: internal-shifting
time-space: $location-tertiary-004
introduction: {{scene-introduction:culmination-1}}
development: {{scene-development:culmination-1}}
conflict: {{scene-conflict:culmination-1}}
resolution: {{scene-resolution:culmination-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:culmination-1-mid}}

@action-011-2 place
action-mode: sacrifice
scene: $scene-011-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination-1}}
result: {{action-result:culmination-1-mid}}

@conflict-011-2 place
scope: $scene-011-02
type: external-technology
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-culmination-1}}
escalation: {{conflict-escalation:culmination-1}}

@event-011-2 trigger
scope: $scene-011-02
event-type: discovery
trigger: {{event-trigger:culmination-1-mid}}
impact: {{event-impact:culmination-1}}
follow-through: {{event-follow-through:culmination-1-mid}}

@dialogue-turn-011-02-01 line
scene: $scene-011-02
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-011-02-02 line
scene: $scene-011-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-02-03 line
scene: $scene-011-02
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-011-02-04 line
scene: $scene-011-02
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-pressure-1-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-011-03 define
chapter: $chapter-011
showing-mode: introspective
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination-2}}
resolution: {{scene-resolution:culmination-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003
anchor-object: $plot-element-core-object
support-focus: $character-support-003
state-change: {{scene-state-change:culmination-2-mid}}

@action-011-3 place
action-mode: sacrifice
scene: $scene-011-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination-2}}
result: {{action-result:culmination-2-mid}}

@conflict-011-3 place
scope: $scene-011-03
type: external-character
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-culmination-2}}
escalation: {{conflict-escalation:culmination-2}}

@event-011-3 trigger
scope: $scene-011-03
event-type: loss
trigger: {{event-trigger:culmination-2-mid}}
impact: {{event-impact:culmination-2}}
follow-through: {{event-follow-through:culmination-2-mid}}

@dialogue-turn-011-03-01 line
scene: $scene-011-03
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-011-03-02 line
scene: $scene-011-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-03-03 line
scene: $scene-011-03
speaker: $character-support-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-011-03-04 line
scene: $scene-011-03
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-pressure-2-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-011-04 define
chapter: $chapter-011
showing-mode: mixed
focalization: internal-shifting
time-space: $location-tertiary-003
introduction: {{scene-introduction:culmination-3}}
development: {{scene-development:culmination-3}}
conflict: {{scene-conflict:culmination-3}}
resolution: {{scene-resolution:culmination-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-001
state-change: {{scene-state-change:culmination-3-mid}}

@action-011-4 place
action-mode: evasion
scene: $scene-011-04
actor: $character-protagonist-001
goal: {{action-goal:culmination-3}}
obstacle: {{action-obstacle:culmination-3}}
result: {{action-result:culmination-3-mid}}

@conflict-011-4 place
scope: $scene-011-04
type: external-nature
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-culmination-3}}
escalation: {{conflict-escalation:culmination-3}}

@event-011-4 trigger
scope: $scene-011-04
event-type: deadline
trigger: {{event-trigger:culmination-3-mid}}
impact: {{event-impact:culmination-3}}
follow-through: {{event-follow-through:culmination-3-mid}}

@dialogue-turn-011-04-01 line
scene: $scene-011-04
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-011-04-02 line
scene: $scene-011-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-04-03 line
scene: $scene-011-04
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-011-04-04 line
scene: $scene-011-04
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-pressure-3-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-011-05 define
chapter: $chapter-011
showing-mode: mixed
focalization: internal-shifting
time-space: $location-tertiary-004
introduction: {{scene-introduction:culmination-4}}
development: {{scene-development:culmination-4}}
conflict: {{scene-conflict:culmination-4}}
resolution: {{scene-resolution:culmination-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-002
state-change: {{scene-state-change:culmination-4-mid}}

@action-011-5 place
action-mode: evasion
scene: $scene-011-05
actor: $character-protagonist-001
goal: {{action-goal:culmination-4}}
obstacle: {{action-obstacle:culmination-4}}
result: {{action-result:culmination-4-mid}}

@conflict-011-5 place
scope: $scene-011-05
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-culmination-4}}
escalation: {{conflict-escalation:culmination-4}}

@event-011-5 trigger
scope: $scene-011-05
event-type: accident
trigger: {{event-trigger:culmination-4-mid}}
impact: {{event-impact:culmination-4}}
follow-through: {{event-follow-through:culmination-4-mid}}

@dialogue-turn-011-05-01 line
scene: $scene-011-05
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-011-05-02 line
scene: $scene-011-05
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-05-03 line
scene: $scene-011-05
speaker: $character-support-003
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-011-05-04 line
scene: $scene-011-05
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-pressure-4-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-011-06 define
chapter: $chapter-011
showing-mode: compressed-showing
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:culmination-5}}
development: {{scene-development:culmination-5}}
conflict: {{scene-conflict:culmination-5}}
resolution: {{scene-resolution:culmination-5-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: $character-protagonist-001, $character-support-003, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:culmination-5-final}}

@action-011-6 place
action-mode: attempt
scene: $scene-011-06
actor: $character-protagonist-001
goal: {{action-goal:culmination-5}}
obstacle: {{action-obstacle:culmination-5}}
result: {{action-result:culmination-5-final}}

@conflict-011-6 place
scope: $scene-011-06
type: internal
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-culmination-5}}
escalation: {{conflict-escalation:culmination-5}}

@event-011-6 trigger
scope: $scene-011-06
event-type: deadline
trigger: {{event-trigger:culmination-5-final}}
impact: {{event-impact:culmination-5}}
follow-through: {{event-follow-through:culmination-5-final}}

@dialogue-turn-011-06-01 line
scene: $scene-011-06
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:culmination-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-011-06-02 line
scene: $scene-011-06
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-011-06-03 line
scene: $scene-011-06
speaker: $character-support-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-011-06-04 line
scene: $scene-011-06
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-pressure-5-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@description-011-atmosphere apply
scope: $chapter-011
description-type: symbolic
focus: {{description-focus:fantasy}}
function: symbolic
rhythm-effect: slow

@dialogue-011-core apply
scene: $scene-011-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-001, $character-support-002
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:fantasy}}

@narration-011-bridge apply
scope: $chapter-011
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-011-core apply
scene: $scene-011-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:culmination}}
texture: reflective

@suspense-011-core build
scope: $chapter-011
suspense-type: situational
uncertainty: {{suspense-uncertainty:culmination-10}}
delay-technique: foreshadowing
payoff-zone: event-011-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-011-core hold
scope: $chapter-011
pause-function: atmospheric
focus: {{pause-focus:culmination-10}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-011-core burst
scope: $chapter-011
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination-10}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-011-06

@cliffhanger-011-exit cut
scope: $chapter-011
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:culmination-10}}
continuation-pressure: {{cliffhanger-continuation:culmination-10}}
