@sequence-007-core define
sequence-type: confrontation-chain
link-logic: mixed
chapter: $chapter-007
objective: {{sequence-objective:investigation}}
scene-chain: scene-007-01, scene-007-02, scene-007-03, scene-007-04, scene-007-05, scene-007-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:investigation}}
supporting-cast: $character-support-002, $character-support-003, $character-support-004
chapter-object: $plot-element-secondary-001
payoff: {{sequence-payoff:investigation}}

@location-007-anchor define
chapter: $chapter-007
primary-setting: $location-primary
secondary-setting: $location-secondary
transit-setting: $location-tertiary-001
chapter-object: $plot-element-secondary-001
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-007-core apply
chapter: $chapter-007
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:investigation}}
action-limitation: {{action-limitation:investigation}}
conflict-output: {{conflict-output-rule:investigation}}
reveal-pattern: show-consequence-first-explain-cause-later

@arc-007-protagonist map
chapter: $chapter-007
entry-belief: {{entry-belief:protagonist}} at the start of the investigation chapter
challenge: {{challenge:protagonist-investigation}}
insight-pressure: {{insight-pressure:protagonist-investigation}}
exit-belief: {{exit-belief:protagonist}} after the investigation chapter

@arc-007-relationship map
chapter: $chapter-007
pair: $character-protagonist-001, $character-support-002
entry-dynamic: technical-trust-without-moral-agreement
stress-line: {{relationship-stress:investigation}}
exit-dynamic: altered-but-legible-bond

@alternation-007-core arrange
chapter: $chapter-007
block-order: description-action-dialogue-suspense-interior-monologue-revelation-pause
reader-effect: {{reader-effect:investigation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-007-01 define
chapter: $chapter-007
showing-mode: compressed-showing
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:investigation-0}}
development: {{scene-development:investigation-0}}
conflict: {{scene-conflict:investigation-0}}
resolution: {{scene-resolution:investigation-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:investigation-0-mid}}

@action-007-1 place
action-mode: attempt
scene: $scene-007-01
actor: $character-protagonist-001
goal: {{action-goal:investigation-0}}
obstacle: {{action-obstacle:investigation-0}}
result: {{action-result:investigation-0-mid}}

@conflict-007-1 place
scope: $scene-007-01
type: mixed
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-investigation-0}}
escalation: {{conflict-escalation:investigation-0}}

@event-007-1 trigger
scope: $scene-007-01
event-type: betrayal
trigger: {{event-trigger:investigation-0-mid}}
impact: {{event-impact:investigation-0}}
follow-through: {{event-follow-through:investigation-0-mid}}

@dialogue-turn-007-01-01 line
scene: $scene-007-01
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-007-01-02 line
scene: $scene-007-01
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-01-03 line
scene: $scene-007-01
speaker: $character-support-003
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-007-01-04 line
scene: $scene-007-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-007-02 define
chapter: $chapter-007
showing-mode: mixed
focalization: internal-shifting
time-space: $location-secondary
introduction: {{scene-introduction:investigation-1}}
development: {{scene-development:investigation-1}}
conflict: {{scene-conflict:investigation-1}}
resolution: {{scene-resolution:investigation-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-003, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-003
state-change: {{scene-state-change:investigation-1-mid}}

@action-007-2 place
action-mode: pursuit
scene: $scene-007-02
actor: $character-protagonist-001
goal: {{action-goal:investigation-1}}
obstacle: {{action-obstacle:investigation-1}}
result: {{action-result:investigation-1-mid}}

@conflict-007-2 place
scope: $scene-007-02
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-investigation-1}}
escalation: {{conflict-escalation:investigation-1}}

@event-007-2 trigger
scope: $scene-007-02
event-type: betrayal
trigger: {{event-trigger:investigation-1-mid}}
impact: {{event-impact:investigation-1}}
follow-through: {{event-follow-through:investigation-1-mid}}

@dialogue-turn-007-02-01 line
scene: $scene-007-02
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-007-02-02 line
scene: $scene-007-02
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-02-03 line
scene: $scene-007-02
speaker: $character-support-004
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-007-02-04 line
scene: $scene-007-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-007-03 define
chapter: $chapter-007
showing-mode: mixed
focalization: internal-shifting
time-space: $location-tertiary-001
introduction: {{scene-introduction:investigation-2}}
development: {{scene-development:investigation-2}}
conflict: {{scene-conflict:investigation-2}}
resolution: {{scene-resolution:investigation-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004
anchor-object: $plot-element-secondary-001
support-focus: $character-support-004
state-change: {{scene-state-change:investigation-2-mid}}

@action-007-3 place
action-mode: pursuit
scene: $scene-007-03
actor: $character-protagonist-001
goal: {{action-goal:investigation-2}}
obstacle: {{action-obstacle:investigation-2}}
result: {{action-result:investigation-2-mid}}

@conflict-007-3 place
scope: $scene-007-03
type: external-nature
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-investigation-2}}
escalation: {{conflict-escalation:investigation-2}}

@event-007-3 trigger
scope: $scene-007-03
event-type: loss
trigger: {{event-trigger:investigation-2-mid}}
impact: {{event-impact:investigation-2}}
follow-through: {{event-follow-through:investigation-2-mid}}

@dialogue-turn-007-03-01 line
scene: $scene-007-03
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-007-03-02 line
scene: $scene-007-03
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-03-03 line
scene: $scene-007-03
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-007-03-04 line
scene: $scene-007-03
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-2-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-007-04 define
chapter: $chapter-007
showing-mode: compressed-showing
focalization: internal-shifting
time-space: $location-primary
introduction: {{scene-introduction:investigation-3}}
development: {{scene-development:investigation-3}}
conflict: {{scene-conflict:investigation-3}}
resolution: {{scene-resolution:investigation-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003
anchor-object: $plot-element-secondary-002
support-focus: $character-support-002
state-change: {{scene-state-change:investigation-3-mid}}

@action-007-4 place
action-mode: pursuit
scene: $scene-007-04
actor: $character-protagonist-001
goal: {{action-goal:investigation-3}}
obstacle: {{action-obstacle:investigation-3}}
result: {{action-result:investigation-3-mid}}

@conflict-007-4 place
scope: $scene-007-04
type: mixed
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-investigation-3}}
escalation: {{conflict-escalation:investigation-3}}

@event-007-4 trigger
scope: $scene-007-04
event-type: betrayal
trigger: {{event-trigger:investigation-3-mid}}
impact: {{event-impact:investigation-3}}
follow-through: {{event-follow-through:investigation-3-mid}}

@dialogue-turn-007-04-01 line
scene: $scene-007-04
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-007-04-02 line
scene: $scene-007-04
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-04-03 line
scene: $scene-007-04
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-007-04-04 line
scene: $scene-007-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-007-05 define
chapter: $chapter-007
showing-mode: dialogic
focalization: internal-shifting
time-space: $location-secondary
introduction: {{scene-introduction:investigation-4}}
development: {{scene-development:investigation-4}}
conflict: {{scene-conflict:investigation-4}}
resolution: {{scene-resolution:investigation-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:investigation-4-mid}}

@action-007-5 place
action-mode: negotiation
scene: $scene-007-05
actor: $character-protagonist-001
goal: {{action-goal:investigation-4}}
obstacle: {{action-obstacle:investigation-4}}
result: {{action-result:investigation-4-mid}}

@conflict-007-5 place
scope: $scene-007-05
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-investigation-4}}
escalation: {{conflict-escalation:investigation-4}}

@event-007-5 trigger
scope: $scene-007-05
event-type: discovery
trigger: {{event-trigger:investigation-4-mid}}
impact: {{event-impact:investigation-4}}
follow-through: {{event-follow-through:investigation-4-mid}}

@dialogue-turn-007-05-01 line
scene: $scene-007-05
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-007-05-02 line
scene: $scene-007-05
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-05-03 line
scene: $scene-007-05
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-007-05-04 line
scene: $scene-007-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-007-06 define
chapter: $chapter-007
showing-mode: introspective
focalization: internal-shifting
time-space: $location-tertiary-001
introduction: {{scene-introduction:investigation-5}}
development: {{scene-development:investigation-5}}
conflict: {{scene-conflict:investigation-5}}
resolution: {{scene-resolution:investigation-5-final}}
exit: the chapter hands off to a sharper investigation consequence
participants: $character-protagonist-001, $character-support-004, $character-support-002, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-004
state-change: {{scene-state-change:investigation-5-final}}

@action-007-6 place
action-mode: evasion
scene: $scene-007-06
actor: $character-protagonist-001
goal: {{action-goal:investigation-5}}
obstacle: {{action-obstacle:investigation-5}}
result: {{action-result:investigation-5-final}}

@conflict-007-6 place
scope: $scene-007-06
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost-investigation-5}}
escalation: {{conflict-escalation:investigation-5}}

@event-007-6 trigger
scope: $scene-007-06
event-type: arrival
trigger: {{event-trigger:investigation-5-final}}
impact: {{event-impact:investigation-5}}
follow-through: {{event-follow-through:investigation-5-final}}

@dialogue-turn-007-06-01 line
scene: $scene-007-06
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-007-06-02 line
scene: $scene-007-06
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-06-03 line
scene: $scene-007-06
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-007-06-04 line
scene: $scene-007-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-007-atmosphere apply
scope: $chapter-007
description-type: symbolic
focus: {{description-focus:fantasy}}
function: symbolic
rhythm-effect: contrast

@dialogue-007-core apply
scene: $scene-007-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-support-003
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:fantasy}}

@narration-007-bridge apply
scope: $chapter-007
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-007-core apply
scene: $scene-007-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:investigation}}
texture: reflective

@suspense-007-core build
scope: $chapter-007
suspense-type: situational
uncertainty: {{suspense-uncertainty:investigation-6}}
delay-technique: foreshadowing
payoff-zone: event-007-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-007-core hold
scope: $chapter-007
pause-function: atmospheric
focus: {{pause-focus:investigation-6}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-007-core burst
scope: $chapter-007
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:investigation-6}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-007-06

@cliffhanger-007-exit cut
scope: $chapter-007
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:investigation-6}}
continuation-pressure: {{cliffhanger-continuation:investigation-6}}
