@sequence-010-core define
sequence-type: investigation
link-logic: causal
chapter: $chapter-010
objective: {{sequence-objective:revelation}}
scene-chain: scene-010-01, scene-010-02, scene-010-03, scene-010-04, scene-010-05, scene-010-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:revelation}}
supporting-cast: $character-support-005, $character-support-001, $character-support-002
chapter-object: $plot-element-secondary-004
payoff: {{sequence-payoff:revelation}}

@location-010-anchor define
chapter: $chapter-010
primary-setting: $location-tertiary-002
secondary-setting: $location-tertiary-003
transit-setting: $location-tertiary-004
chapter-object: $plot-element-secondary-004
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-010-core apply
chapter: $chapter-010
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:revelation}}
action-limitation: {{action-limitation:revelation}}
conflict-output: {{conflict-output-rule:revelation}}
reveal-pattern: embed-rule-in-dialogue

@arc-010-protagonist map
chapter: $chapter-010
entry-belief: {{entry-belief:protagonist}} at the start of the revelation chapter
challenge: {{challenge:protagonist-revelation}}
insight-pressure: {{insight-pressure:protagonist-revelation}}
exit-belief: {{exit-belief:protagonist}} after the revelation chapter

@arc-010-relationship map
chapter: $chapter-010
pair: $character-protagonist-001, $character-support-005
entry-dynamic: professional-alliance-with-unequal-risk
stress-line: {{relationship-stress:revelation}}
exit-dynamic: altered-but-legible-bond

@alternation-010-core arrange
chapter: $chapter-010
block-order: action-dialogue-description-conflict-revelation-suspense-cliffhanger
reader-effect: {{reader-effect:revelation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-010-01 define
chapter: $chapter-010
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:revelation-0}}
development: {{scene-development:revelation-0}}
conflict: {{scene-conflict:revelation-0}}
resolution: {{scene-resolution:revelation-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-005
anchor-object: $plot-element-secondary-004
support-focus: $character-support-005
state-change: {{scene-state-change:revelation-0-mid}}

@action-010-1 place
action-mode: evasion
scene: $scene-010-01
actor: $character-protagonist-001
goal: {{action-goal:revelation-0}}
obstacle: {{action-obstacle:revelation-0}}
result: {{action-result:revelation-0-mid}}

@conflict-010-1 place
scope: $scene-010-01
type: external-society
forces: $character-protagonist-001 versus $character-support-005
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-revelation-0}}
escalation: {{conflict-escalation:revelation-0}}

@event-010-1 trigger
scope: $scene-010-01
event-type: deadline
trigger: {{event-trigger:revelation-0-mid}}
impact: {{event-impact:revelation-0}}
follow-through: {{event-follow-through:revelation-0-mid}}

@dialogue-turn-010-01-01 line
scene: $scene-010-01
speaker: $character-support-005
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-01-02 line
scene: $scene-010-01
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-010-01-03 line
scene: $scene-010-01
speaker: $character-support-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-010-01-04 line
scene: $scene-010-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-pressure-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-010-02 define
chapter: $chapter-010
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:revelation-1}}
development: {{scene-development:revelation-1}}
conflict: {{scene-conflict:revelation-1}}
resolution: {{scene-resolution:revelation-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-001, $character-support-002, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-001
state-change: {{scene-state-change:revelation-1-mid}}

@action-010-2 place
action-mode: revelation-act
scene: $scene-010-02
actor: $character-protagonist-001
goal: {{action-goal:revelation-1}}
obstacle: {{action-obstacle:revelation-1}}
result: {{action-result:revelation-1-mid}}

@conflict-010-2 place
scope: $scene-010-02
type: external-nature
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-revelation-1}}
escalation: {{conflict-escalation:revelation-1}}

@event-010-2 trigger
scope: $scene-010-02
event-type: reversal
trigger: {{event-trigger:revelation-1-mid}}
impact: {{event-impact:revelation-1}}
follow-through: {{event-follow-through:revelation-1-mid}}

@dialogue-turn-010-02-01 line
scene: $scene-010-02
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-02-02 line
scene: $scene-010-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-010-02-03 line
scene: $scene-010-02
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:revelation-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-010-02-04 line
scene: $scene-010-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-pressure-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-010-03 define
chapter: $chapter-010
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:revelation-2}}
development: {{scene-development:revelation-2}}
conflict: {{scene-conflict:revelation-2}}
resolution: {{scene-resolution:revelation-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002
anchor-object: $plot-element-secondary-004
support-focus: $character-support-002
state-change: {{scene-state-change:revelation-2-mid}}

@action-010-3 place
action-mode: revelation-act
scene: $scene-010-03
actor: $character-protagonist-001
goal: {{action-goal:revelation-2}}
obstacle: {{action-obstacle:revelation-2}}
result: {{action-result:revelation-2-mid}}

@conflict-010-3 place
scope: $scene-010-03
type: internal
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-revelation-2}}
escalation: {{conflict-escalation:revelation-2}}

@event-010-3 trigger
scope: $scene-010-03
event-type: deadline
trigger: {{event-trigger:revelation-2-mid}}
impact: {{event-impact:revelation-2}}
follow-through: {{event-follow-through:revelation-2-mid}}

@dialogue-turn-010-03-01 line
scene: $scene-010-03
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-03-02 line
scene: $scene-010-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-010-03-03 line
scene: $scene-010-03
speaker: $character-support-005
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-010-03-04 line
scene: $scene-010-03
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-pressure-2-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-010-04 define
chapter: $chapter-010
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:revelation-3}}
development: {{scene-development:revelation-3}}
conflict: {{scene-conflict:revelation-3}}
resolution: {{scene-resolution:revelation-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-005, $character-support-001
anchor-object: $plot-element-core-object
support-focus: $character-support-005
state-change: {{scene-state-change:revelation-3-mid}}

@action-010-4 place
action-mode: negotiation
scene: $scene-010-04
actor: $character-protagonist-001
goal: {{action-goal:revelation-3}}
obstacle: {{action-obstacle:revelation-3}}
result: {{action-result:revelation-3-mid}}

@conflict-010-4 place
scope: $scene-010-04
type: external-nature
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-revelation-3}}
escalation: {{conflict-escalation:revelation-3}}

@event-010-4 trigger
scope: $scene-010-04
event-type: betrayal
trigger: {{event-trigger:revelation-3-mid}}
impact: {{event-impact:revelation-3}}
follow-through: {{event-follow-through:revelation-3-mid}}

@dialogue-turn-010-04-01 line
scene: $scene-010-04
speaker: $character-support-005
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-04-02 line
scene: $scene-010-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-010-04-03 line
scene: $scene-010-04
speaker: $character-support-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:revelation-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-010-04-04 line
scene: $scene-010-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-pressure-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-010-05 define
chapter: $chapter-010
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:revelation-4}}
development: {{scene-development:revelation-4}}
conflict: {{scene-conflict:revelation-4}}
resolution: {{scene-resolution:revelation-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-004
support-focus: $character-support-001
state-change: {{scene-state-change:revelation-4-mid}}

@action-010-5 place
action-mode: pursuit
scene: $scene-010-05
actor: $character-protagonist-001
goal: {{action-goal:revelation-4}}
obstacle: {{action-obstacle:revelation-4}}
result: {{action-result:revelation-4-mid}}

@conflict-010-5 place
scope: $scene-010-05
type: external-nature
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-revelation-4}}
escalation: {{conflict-escalation:revelation-4}}

@event-010-5 trigger
scope: $scene-010-05
event-type: reversal
trigger: {{event-trigger:revelation-4-mid}}
impact: {{event-impact:revelation-4}}
follow-through: {{event-follow-through:revelation-4-mid}}

@dialogue-turn-010-05-01 line
scene: $scene-010-05
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-05-02 line
scene: $scene-010-05
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-010-05-03 line
scene: $scene-010-05
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:revelation-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-010-05-04 line
scene: $scene-010-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-pressure-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-010-06 define
chapter: $chapter-010
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:revelation-5}}
development: {{scene-development:revelation-5}}
conflict: {{scene-conflict:revelation-5}}
resolution: {{scene-resolution:revelation-5-final}}
exit: the chapter hands off to a sharper revelation consequence
participants: $character-protagonist-001, $character-support-002, $character-support-005, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-002
state-change: {{scene-state-change:revelation-5-final}}

@action-010-6 place
action-mode: pursuit
scene: $scene-010-06
actor: $character-protagonist-001
goal: {{action-goal:revelation-5}}
obstacle: {{action-obstacle:revelation-5}}
result: {{action-result:revelation-5-final}}

@conflict-010-6 place
scope: $scene-010-06
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-revelation-5}}
escalation: {{conflict-escalation:revelation-5}}

@event-010-6 trigger
scope: $scene-010-06
event-type: crime
trigger: {{event-trigger:revelation-5-final}}
impact: {{event-impact:revelation-5}}
follow-through: {{event-follow-through:revelation-5-final}}

@dialogue-turn-010-06-01 line
scene: $scene-010-06
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:revelation-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-010-06-02 line
scene: $scene-010-06
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:revelation-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-010-06-03 line
scene: $scene-010-06
speaker: $character-support-005
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:revelation-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-010-06-04 line
scene: $scene-010-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:revelation-pressure-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-010-atmosphere apply
scope: $chapter-010
description-type: setting
focus: {{description-focus:detective-police}}
function: narrative
rhythm-effect: slow

@dialogue-010-core apply
scene: $scene-010-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-005, $character-support-001
exchange-type: question-answer
purpose: information
subtext: {{dialogue-core-subtext:detective-police}}

@narration-010-bridge apply
scope: $chapter-010
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-010-core apply
scene: $scene-010-06
character: $character-protagonist-001
function: characterization
trigger: {{monologue-trigger:revelation}}
texture: fragmented

@suspense-010-core build
scope: $chapter-010
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:revelation-9}}
delay-technique: delayed-information
payoff-zone: event-010-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-010-core hold
scope: $chapter-010
pause-function: explanatory
focus: {{pause-focus:revelation-9}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-010-core burst
scope: $chapter-010
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:revelation-9}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-010-06

@cliffhanger-010-exit cut
scope: $chapter-010
cliffhanger-type: unresolved-confrontation
cut-moment: {{cliffhanger-moment:revelation-9}}
continuation-pressure: {{cliffhanger-continuation:revelation-9}}
