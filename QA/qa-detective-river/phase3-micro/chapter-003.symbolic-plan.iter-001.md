@sequence-003-core define
sequence-type: investigation
link-logic: causal
chapter: $chapter-003
objective: {{sequence-objective:investigation}}
scene-chain: scene-003-01, scene-003-02, scene-003-03, scene-003-04, scene-003-05, scene-003-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:investigation}}
supporting-cast: $character-support-003, $character-support-004, $character-support-005
chapter-object: $plot-element-secondary-002
payoff: {{sequence-payoff:investigation}}

@location-003-anchor define
chapter: $chapter-003
primary-setting: $location-tertiary-001
secondary-setting: $location-tertiary-002
transit-setting: $location-tertiary-003
chapter-object: $plot-element-secondary-002
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
reveal-pattern: embed-rule-in-dialogue

@arc-003-protagonist map
chapter: $chapter-003
entry-belief: {{entry-belief:protagonist}} at the start of the investigation chapter
challenge: {{challenge:protagonist-investigation}}
insight-pressure: {{insight-pressure:protagonist-investigation}}
exit-belief: {{exit-belief:protagonist}} after the investigation chapter

@arc-003-relationship map
chapter: $chapter-003
pair: $character-protagonist-001, $character-support-003
entry-dynamic: professional-alliance-with-unequal-risk
stress-line: {{relationship-stress:investigation}}
exit-dynamic: altered-but-legible-bond

@alternation-003-core arrange
chapter: $chapter-003
block-order: action-dialogue-description-conflict-revelation-suspense-cliffhanger
reader-effect: {{reader-effect:investigation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-003-01 define
chapter: $chapter-003
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:investigation-0}}
development: {{scene-development:investigation-0}}
conflict: {{scene-conflict:investigation-0}}
resolution: {{scene-resolution:investigation-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003
anchor-object: $plot-element-secondary-002
support-focus: $character-support-003
state-change: {{scene-state-change:investigation-0-mid}}

@action-003-1 place
action-mode: sacrifice
scene: $scene-003-01
actor: $character-protagonist-001
goal: {{action-goal:investigation-0}}
obstacle: {{action-obstacle:investigation-0}}
result: {{action-result:investigation-0-mid}}

@conflict-003-1 place
scope: $scene-003-01
type: external-supernatural
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-investigation-0}}
escalation: {{conflict-escalation:investigation-0}}

@event-003-1 trigger
scope: $scene-003-01
event-type: decision
trigger: {{event-trigger:investigation-0-mid}}
impact: {{event-impact:investigation-0}}
follow-through: {{event-follow-through:investigation-0-mid}}

@dialogue-turn-003-01-01 line
scene: $scene-003-01
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-003-01-02 line
scene: $scene-003-01
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-003-01-03 line
scene: $scene-003-01
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-003-01-04 line
scene: $scene-003-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-003-02 define
chapter: $chapter-003
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:investigation-1}}
development: {{scene-development:investigation-1}}
conflict: {{scene-conflict:investigation-1}}
resolution: {{scene-resolution:investigation-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-004, $character-support-005, $character-pressure-001
anchor-object: $plot-element-secondary-003
support-focus: $character-support-004
state-change: {{scene-state-change:investigation-1-mid}}

@action-003-2 place
action-mode: sacrifice
scene: $scene-003-02
actor: $character-protagonist-001
goal: {{action-goal:investigation-1}}
obstacle: {{action-obstacle:investigation-1}}
result: {{action-result:investigation-1-mid}}

@conflict-003-2 place
scope: $scene-003-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-investigation-1}}
escalation: {{conflict-escalation:investigation-1}}

@event-003-2 trigger
scope: $scene-003-02
event-type: revelation
trigger: {{event-trigger:investigation-1-mid}}
impact: {{event-impact:investigation-1}}
follow-through: {{event-follow-through:investigation-1-mid}}

@dialogue-turn-003-02-01 line
scene: $scene-003-02
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-003-02-02 line
scene: $scene-003-02
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-003-02-03 line
scene: $scene-003-02
speaker: $character-support-005
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-003-02-04 line
scene: $scene-003-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-003-03 define
chapter: $chapter-003
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:investigation-2}}
development: {{scene-development:investigation-2}}
conflict: {{scene-conflict:investigation-2}}
resolution: {{scene-resolution:investigation-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-005
anchor-object: $plot-element-secondary-002
support-focus: $character-support-005
state-change: {{scene-state-change:investigation-2-mid}}

@action-003-3 place
action-mode: revelation-act
scene: $scene-003-03
actor: $character-protagonist-001
goal: {{action-goal:investigation-2}}
obstacle: {{action-obstacle:investigation-2}}
result: {{action-result:investigation-2-mid}}

@conflict-003-3 place
scope: $scene-003-03
type: mixed
forces: $character-protagonist-001 versus $character-support-005
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-investigation-2}}
escalation: {{conflict-escalation:investigation-2}}

@event-003-3 trigger
scope: $scene-003-03
event-type: crime
trigger: {{event-trigger:investigation-2-mid}}
impact: {{event-impact:investigation-2}}
follow-through: {{event-follow-through:investigation-2-mid}}

@dialogue-turn-003-03-01 line
scene: $scene-003-03
speaker: $character-support-005
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-003-03-02 line
scene: $scene-003-03
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-003-03-03 line
scene: $scene-003-03
speaker: $character-support-003
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-003-03-04 line
scene: $scene-003-03
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-2-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-003-04 define
chapter: $chapter-003
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:investigation-3}}
development: {{scene-development:investigation-3}}
conflict: {{scene-conflict:investigation-3}}
resolution: {{scene-resolution:investigation-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-003, $character-support-004
anchor-object: $plot-element-secondary-003
support-focus: $character-support-003
state-change: {{scene-state-change:investigation-3-mid}}

@action-003-4 place
action-mode: pursuit
scene: $scene-003-04
actor: $character-protagonist-001
goal: {{action-goal:investigation-3}}
obstacle: {{action-obstacle:investigation-3}}
result: {{action-result:investigation-3-mid}}

@conflict-003-4 place
scope: $scene-003-04
type: external-character
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-investigation-3}}
escalation: {{conflict-escalation:investigation-3}}

@event-003-4 trigger
scope: $scene-003-04
event-type: discovery
trigger: {{event-trigger:investigation-3-mid}}
impact: {{event-impact:investigation-3}}
follow-through: {{event-follow-through:investigation-3-mid}}

@dialogue-turn-003-04-01 line
scene: $scene-003-04
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-003-04-02 line
scene: $scene-003-04
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-003-04-03 line
scene: $scene-003-04
speaker: $character-support-004
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-003-04-04 line
scene: $scene-003-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-003-05 define
chapter: $chapter-003
showing-mode: mixed
focalization: internal-single
time-space: $location-tertiary-002
introduction: {{scene-introduction:investigation-4}}
development: {{scene-development:investigation-4}}
conflict: {{scene-conflict:investigation-4}}
resolution: {{scene-resolution:investigation-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-004
state-change: {{scene-state-change:investigation-4-mid}}

@action-003-5 place
action-mode: evasion
scene: $scene-003-05
actor: $character-protagonist-001
goal: {{action-goal:investigation-4}}
obstacle: {{action-obstacle:investigation-4}}
result: {{action-result:investigation-4-mid}}

@conflict-003-5 place
scope: $scene-003-05
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-investigation-4}}
escalation: {{conflict-escalation:investigation-4}}

@event-003-5 trigger
scope: $scene-003-05
event-type: deadline
trigger: {{event-trigger:investigation-4-mid}}
impact: {{event-impact:investigation-4}}
follow-through: {{event-follow-through:investigation-4-mid}}

@dialogue-turn-003-05-01 line
scene: $scene-003-05
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-003-05-02 line
scene: $scene-003-05
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-003-05-03 line
scene: $scene-003-05
speaker: $character-support-005
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:investigation-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-003-05-04 line
scene: $scene-003-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-003-06 define
chapter: $chapter-003
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-003
introduction: {{scene-introduction:investigation-5}}
development: {{scene-development:investigation-5}}
conflict: {{scene-conflict:investigation-5}}
resolution: {{scene-resolution:investigation-5-final}}
exit: the chapter hands off to a sharper investigation consequence
participants: $character-protagonist-001, $character-support-005, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-003
support-focus: $character-support-005
state-change: {{scene-state-change:investigation-5-final}}

@action-003-6 place
action-mode: pursuit
scene: $scene-003-06
actor: $character-protagonist-001
goal: {{action-goal:investigation-5}}
obstacle: {{action-obstacle:investigation-5}}
result: {{action-result:investigation-5-final}}

@conflict-003-6 place
scope: $scene-003-06
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety-investigation-5}}
escalation: {{conflict-escalation:investigation-5}}

@event-003-6 trigger
scope: $scene-003-06
event-type: accident
trigger: {{event-trigger:investigation-5-final}}
impact: {{event-impact:investigation-5}}
follow-through: {{event-follow-through:investigation-5-final}}

@dialogue-turn-003-06-01 line
scene: $scene-003-06
speaker: $character-support-005
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:investigation-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-003-06-02 line
scene: $scene-003-06
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-003-06-03 line
scene: $scene-003-06
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:investigation-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-003-06-04 line
scene: $scene-003-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:investigation-pressure-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-003-atmosphere apply
scope: $chapter-003
description-type: setting
focus: {{description-focus:detective-police}}
function: narrative
rhythm-effect: contrast

@dialogue-003-core apply
scene: $scene-003-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-003, $character-support-004
exchange-type: question-answer
purpose: information
subtext: {{dialogue-core-subtext:detective-police}}

@narration-003-bridge apply
scope: $chapter-003
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-003-core apply
scene: $scene-003-06
character: $character-protagonist-001
function: characterization
trigger: {{monologue-trigger:investigation}}
texture: fragmented

@suspense-003-core build
scope: $chapter-003
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:investigation-2}}
delay-technique: delayed-information
payoff-zone: event-003-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-003-core hold
scope: $chapter-003
pause-function: explanatory
focus: {{pause-focus:investigation-2}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-003-core burst
scope: $chapter-003
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:investigation-2}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-003-06

@cliffhanger-003-exit cut
scope: $chapter-003
cliffhanger-type: danger
cut-moment: {{cliffhanger-moment:investigation-2}}
continuation-pressure: {{cliffhanger-continuation:investigation-2}}
