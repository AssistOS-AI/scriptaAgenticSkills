@sequence-012-core define
sequence-type: courtship
link-logic: causal
chapter: $chapter-012
objective: {{sequence-objective:aftermath}}
scene-chain: scene-012-01, scene-012-02, scene-012-03, scene-012-04, scene-012-05, scene-012-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:aftermath}}
supporting-cast: $character-support-002, $character-support-003, $character-support-004
chapter-object: $plot-element-secondary-001
payoff: the sequence delivers its final irreversible choice

@location-012-anchor define
chapter: $chapter-012
primary-setting: $location-tertiary-004
secondary-setting: $location-primary
transit-setting: $location-secondary
chapter-object: $plot-element-secondary-001
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-012-core apply
chapter: $chapter-012
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:aftermath}}
action-limitation: {{action-limitation:aftermath}}
conflict-output: {{conflict-output-rule:aftermath}}
reveal-pattern: embed-rule-in-dialogue

@arc-012-protagonist map
chapter: $chapter-012
entry-belief: {{entry-belief:protagonist}} at the start of the aftermath chapter
challenge: {{challenge:protagonist-aftermath}}
insight-pressure: {{insight-pressure:protagonist-aftermath}}
exit-belief: {{exit-belief:protagonist}} after the aftermath chapter

@arc-012-relationship map
chapter: $chapter-012
pair: $character-protagonist-001, $character-support-002
entry-dynamic: technical-trust-without-moral-agreement
stress-line: {{relationship-stress:aftermath}}
exit-dynamic: altered-but-legible-bond

@alternation-012-core arrange
chapter: $chapter-012
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:aftermath}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-012-01 define
chapter: $chapter-012
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:aftermath-0}}
development: {{scene-development:aftermath-0}}
conflict: {{scene-conflict:aftermath-0}}
resolution: {{scene-resolution:aftermath-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:aftermath-0-mid}}

@action-012-1 place
action-mode: sacrifice
scene: $scene-012-01
actor: $character-protagonist-001
goal: {{action-goal:aftermath-0}}
obstacle: {{action-obstacle:aftermath-0}}
result: {{action-result:aftermath-0-mid}}

@conflict-012-1 place
scope: $scene-012-01
type: external-society
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-aftermath-0}}
escalation: {{conflict-escalation:aftermath-0}}

@event-012-1 trigger
scope: $scene-012-01
event-type: discovery
trigger: {{event-trigger:aftermath-0-mid}}
impact: {{event-impact:aftermath-0}}
follow-through: {{event-follow-through:aftermath-0-mid}}

@dialogue-turn-012-01-01 line
scene: $scene-012-01
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:aftermath-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-012-01-02 line
scene: $scene-012-01
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:aftermath-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-012-01-03 line
scene: $scene-012-01
speaker: $character-support-003
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:aftermath-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-012-01-04 line
scene: $scene-012-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:aftermath-pressure-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-012-02 define
chapter: $chapter-012
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:aftermath-1}}
development: {{scene-development:aftermath-1}}
conflict: {{scene-conflict:aftermath-1}}
resolution: {{scene-resolution:aftermath-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-003, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-003
state-change: {{scene-state-change:aftermath-1-mid}}

@action-012-2 place
action-mode: evasion
scene: $scene-012-02
actor: $character-protagonist-001
goal: {{action-goal:aftermath-1}}
obstacle: {{action-obstacle:aftermath-1}}
result: {{action-result:aftermath-1-mid}}

@conflict-012-2 place
scope: $scene-012-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-aftermath-1}}
escalation: {{conflict-escalation:aftermath-1}}

@event-012-2 trigger
scope: $scene-012-02
event-type: arrival
trigger: {{event-trigger:aftermath-1-mid}}
impact: {{event-impact:aftermath-1}}
follow-through: {{event-follow-through:aftermath-1-mid}}

@dialogue-turn-012-02-01 line
scene: $scene-012-02
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:aftermath-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-012-02-02 line
scene: $scene-012-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:aftermath-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-012-02-03 line
scene: $scene-012-02
speaker: $character-support-004
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:aftermath-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-012-02-04 line
scene: $scene-012-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:aftermath-pressure-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-012-03 define
chapter: $chapter-012
showing-mode: mixed
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:aftermath-2}}
development: {{scene-development:aftermath-2}}
conflict: {{scene-conflict:aftermath-2}}
resolution: {{scene-resolution:aftermath-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004
anchor-object: $plot-element-secondary-001
support-focus: $character-support-004
state-change: {{scene-state-change:aftermath-2-mid}}

@action-012-3 place
action-mode: evasion
scene: $scene-012-03
actor: $character-protagonist-001
goal: {{action-goal:aftermath-2}}
obstacle: {{action-obstacle:aftermath-2}}
result: {{action-result:aftermath-2-mid}}

@conflict-012-3 place
scope: $scene-012-03
type: internal
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-aftermath-2}}
escalation: {{conflict-escalation:aftermath-2}}

@event-012-3 trigger
scope: $scene-012-03
event-type: crime
trigger: {{event-trigger:aftermath-2-mid}}
impact: {{event-impact:aftermath-2}}
follow-through: {{event-follow-through:aftermath-2-mid}}

@dialogue-turn-012-03-01 line
scene: $scene-012-03
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:aftermath-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-012-03-02 line
scene: $scene-012-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:aftermath-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-012-03-03 line
scene: $scene-012-03
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:aftermath-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-012-03-04 line
scene: $scene-012-03
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:aftermath-pressure-2-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-012-04 define
chapter: $chapter-012
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:aftermath-3}}
development: {{scene-development:aftermath-3}}
conflict: {{scene-conflict:aftermath-3}}
resolution: {{scene-resolution:aftermath-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003
anchor-object: $plot-element-secondary-002
support-focus: $character-support-002
state-change: {{scene-state-change:aftermath-3-mid}}

@action-012-4 place
action-mode: attempt
scene: $scene-012-04
actor: $character-protagonist-001
goal: {{action-goal:aftermath-3}}
obstacle: {{action-obstacle:aftermath-3}}
result: {{action-result:aftermath-3-mid}}

@conflict-012-4 place
scope: $scene-012-04
type: mixed
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-aftermath-3}}
escalation: {{conflict-escalation:aftermath-3}}

@event-012-4 trigger
scope: $scene-012-04
event-type: loss
trigger: {{event-trigger:aftermath-3-mid}}
impact: {{event-impact:aftermath-3}}
follow-through: {{event-follow-through:aftermath-3-mid}}

@dialogue-turn-012-04-01 line
scene: $scene-012-04
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:aftermath-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-012-04-02 line
scene: $scene-012-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:aftermath-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-012-04-03 line
scene: $scene-012-04
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:aftermath-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-012-04-04 line
scene: $scene-012-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:aftermath-pressure-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-012-05 define
chapter: $chapter-012
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:aftermath-4}}
development: {{scene-development:aftermath-4}}
conflict: {{scene-conflict:aftermath-4}}
resolution: {{scene-resolution:aftermath-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:aftermath-4-mid}}

@action-012-5 place
action-mode: negotiation
scene: $scene-012-05
actor: $character-protagonist-001
goal: {{action-goal:aftermath-4}}
obstacle: {{action-obstacle:aftermath-4}}
result: {{action-result:aftermath-4-mid}}

@conflict-012-5 place
scope: $scene-012-05
type: external-nature
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-aftermath-4}}
escalation: {{conflict-escalation:aftermath-4}}

@event-012-5 trigger
scope: $scene-012-05
event-type: loss
trigger: {{event-trigger:aftermath-4-mid}}
impact: {{event-impact:aftermath-4}}
follow-through: {{event-follow-through:aftermath-4-mid}}

@dialogue-turn-012-05-01 line
scene: $scene-012-05
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:aftermath-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-012-05-02 line
scene: $scene-012-05
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:aftermath-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-012-05-03 line
scene: $scene-012-05
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:aftermath-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-012-05-04 line
scene: $scene-012-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:aftermath-pressure-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-012-06 define
chapter: $chapter-012
showing-mode: dialogic
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:aftermath-5}}
development: {{scene-development:aftermath-5}}
conflict: {{scene-conflict:aftermath-5}}
resolution: {{scene-resolution:aftermath-5-final}}
exit: the chapter hands off to a sharper aftermath consequence
participants: $character-protagonist-001, $character-support-004, $character-support-002, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-004
state-change: {{scene-state-change:aftermath-5-final}}

@action-012-6 place
action-mode: sacrifice
scene: $scene-012-06
actor: $character-protagonist-001
goal: {{action-goal:aftermath-5}}
obstacle: {{action-obstacle:aftermath-5}}
result: {{action-result:aftermath-5-final}}

@conflict-012-6 place
scope: $scene-012-06
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-aftermath-5}}
escalation: {{conflict-escalation:aftermath-5}}

@event-012-6 trigger
scope: $scene-012-06
event-type: loss
trigger: {{event-trigger:aftermath-5-final}}
impact: {{event-impact:aftermath-5}}
follow-through: {{event-follow-through:aftermath-5-final}}

@dialogue-turn-012-06-01 line
scene: $scene-012-06
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:aftermath-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-012-06-02 line
scene: $scene-012-06
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:aftermath-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-012-06-03 line
scene: $scene-012-06
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:aftermath-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-012-06-04 line
scene: $scene-012-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:aftermath-pressure-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-012-atmosphere apply
scope: $chapter-012
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: frame

@dialogue-012-core apply
scene: $scene-012-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-support-003
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

@narration-012-bridge apply
scope: $chapter-012
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-012-core apply
scene: $scene-012-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:aftermath}}
texture: reflective

@suspense-012-core build
scope: $chapter-012
suspense-type: emotional
uncertainty: {{suspense-uncertainty:aftermath-11}}
delay-technique: interruption
payoff-zone: event-012-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-012-core hold
scope: $chapter-012
pause-function: psychological
focus: {{pause-focus:aftermath-11}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-012-core burst
scope: $chapter-012
acceleration-mode: transition-skip
trigger: {{acceleration-trigger:aftermath-11}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-012-06
