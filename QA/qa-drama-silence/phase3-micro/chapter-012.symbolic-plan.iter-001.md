@sequence-012-core define
sequence-type: recovery
link-logic: mixed
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
reveal-pattern: show-exception-to-reveal-rule

@arc-012-protagonist map
chapter: $chapter-012
entry-belief: {{entry-belief:protagonist}} at the start of the aftermath chapter
challenge: {{challenge:protagonist-aftermath}}
insight-pressure: {{insight-pressure:protagonist-aftermath}}
exit-belief: {{exit-belief:protagonist}} after the aftermath chapter

@arc-012-relationship map
chapter: $chapter-012
pair: $character-protagonist-001, $character-support-002
entry-dynamic: professional-alliance-with-unequal-risk
stress-line: {{relationship-stress:aftermath}}
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-012-core arrange
chapter: $chapter-012
block-order: description-action-dialogue-pause-event-monologue
reader-effect: {{reader-effect:aftermath}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-012-01 define
chapter: $chapter-012
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:aftermath-0}}
development: {{scene-development:aftermath-0}}
conflict: {{scene-conflict:aftermath}}
resolution: {{scene-resolution:aftermath-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:aftermath-mid}}

@action-012-1 place
action-mode: attempt
scene: $scene-012-01
actor: $character-protagonist-001
goal: {{action-goal:aftermath-0}}
obstacle: {{action-obstacle:aftermath}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-012-1 place
scope: $scene-012-01
type: internal
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:aftermath}}

@event-012-1 trigger
scope: $scene-012-01
event-type: accident
trigger: {{event-trigger:aftermath-mid}}
impact: {{event-impact:aftermath}}
follow-through: {{event-follow-through:aftermath-mid}}

@dialogue-turn-012-01-01 line
scene: $scene-012-01
speaker: $character-support-002
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:aftermath-0-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-012-01-02 line
scene: $scene-012-01
speaker: $character-protagonist-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:aftermath-0-1}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-012-01-03 line
scene: $scene-012-01
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:aftermath-0-2}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-012-01-04 line
scene: $scene-012-01
speaker: $character-pressure-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:aftermath-0-3}}
reaction-beat: {{dialogue-reaction:reframe}}

@scene-012-02 define
chapter: $chapter-012
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:aftermath-1}}
development: {{scene-development:aftermath-1}}
conflict: {{scene-conflict:aftermath}}
resolution: {{scene-resolution:aftermath-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-003, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-003
state-change: {{scene-state-change:aftermath-mid}}

@action-012-2 place
action-mode: negotiation
scene: $scene-012-02
actor: $character-protagonist-001
goal: {{action-goal:aftermath-1}}
obstacle: {{action-obstacle:aftermath}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-012-2 place
scope: $scene-012-02
type: external-technology
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:aftermath}}

@event-012-2 trigger
scope: $scene-012-02
event-type: revelation
trigger: {{event-trigger:aftermath-mid}}
impact: {{event-impact:aftermath}}
follow-through: {{event-follow-through:aftermath-mid}}

@dialogue-turn-012-02-01 line
scene: $scene-012-02
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:aftermath-1-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-012-02-02 line
scene: $scene-012-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:aftermath-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-012-02-03 line
scene: $scene-012-02
speaker: $character-support-004
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:aftermath-1-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-012-02-04 line
scene: $scene-012-02
speaker: $character-pressure-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:aftermath-1-3}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@scene-012-03 define
chapter: $chapter-012
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:aftermath-2}}
development: {{scene-development:aftermath-2}}
conflict: {{scene-conflict:aftermath}}
resolution: {{scene-resolution:aftermath-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004
anchor-object: $plot-element-secondary-001
support-focus: $character-support-004
state-change: {{scene-state-change:aftermath-mid}}

@action-012-3 place
action-mode: attempt
scene: $scene-012-03
actor: $character-protagonist-001
goal: {{action-goal:aftermath-2}}
obstacle: {{action-obstacle:aftermath}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-012-3 place
scope: $scene-012-03
type: external-nature
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:aftermath}}

@event-012-3 trigger
scope: $scene-012-03
event-type: arrival
trigger: {{event-trigger:aftermath-mid}}
impact: {{event-impact:aftermath}}
follow-through: {{event-follow-through:aftermath-mid}}

@dialogue-turn-012-03-01 line
scene: $scene-012-03
speaker: $character-support-004
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:aftermath-2-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-012-03-02 line
scene: $scene-012-03
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:aftermath-2-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-012-03-03 line
scene: $scene-012-03
speaker: $character-support-002
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:aftermath-2-2}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-012-03-04 line
scene: $scene-012-03
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:aftermath-2-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-012-04 define
chapter: $chapter-012
showing-mode: dialogic
focalization: internal-single
time-space: $location-tertiary-004
introduction: {{scene-introduction:aftermath-3}}
development: {{scene-development:aftermath-3}}
conflict: {{scene-conflict:aftermath}}
resolution: {{scene-resolution:aftermath-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003
anchor-object: $plot-element-secondary-002
support-focus: $character-support-002
state-change: {{scene-state-change:aftermath-mid}}

@action-012-4 place
action-mode: negotiation
scene: $scene-012-04
actor: $character-protagonist-001
goal: {{action-goal:aftermath-3}}
obstacle: {{action-obstacle:aftermath}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-012-4 place
scope: $scene-012-04
type: external-character
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:aftermath}}

@event-012-4 trigger
scope: $scene-012-04
event-type: decision
trigger: {{event-trigger:aftermath-mid}}
impact: {{event-impact:aftermath}}
follow-through: {{event-follow-through:aftermath-mid}}

@dialogue-turn-012-04-01 line
scene: $scene-012-04
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:aftermath-3-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-012-04-02 line
scene: $scene-012-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:aftermath-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-012-04-03 line
scene: $scene-012-04
speaker: $character-support-003
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:aftermath-3-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-012-04-04 line
scene: $scene-012-04
speaker: $character-pressure-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:aftermath-3-3}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-012-05 define
chapter: $chapter-012
showing-mode: direct-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:aftermath-4}}
development: {{scene-development:aftermath-4}}
conflict: {{scene-conflict:aftermath}}
resolution: {{scene-resolution:aftermath-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:aftermath-mid}}

@action-012-5 place
action-mode: revelation-act
scene: $scene-012-05
actor: $character-protagonist-001
goal: {{action-goal:aftermath-4}}
obstacle: {{action-obstacle:aftermath}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-012-5 place
scope: $scene-012-05
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:aftermath}}

@event-012-5 trigger
scope: $scene-012-05
event-type: reversal
trigger: {{event-trigger:aftermath-mid}}
impact: {{event-impact:aftermath}}
follow-through: {{event-follow-through:aftermath-mid}}

@dialogue-turn-012-05-01 line
scene: $scene-012-05
speaker: $character-support-003
intent: answer-honestly
subtext: {{dialogue-subtext:answer-honestly}}
line-hint: {{dialogue-line-hint:aftermath-4-0}}
reaction-beat: {{dialogue-reaction:answer-honestly}}

@dialogue-turn-012-05-02 line
scene: $scene-012-05
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:aftermath-4-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-012-05-03 line
scene: $scene-012-05
speaker: $character-support-004
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:aftermath-4-2}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-012-05-04 line
scene: $scene-012-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:aftermath-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-012-06 define
chapter: $chapter-012
showing-mode: dialogic
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:aftermath-5}}
development: {{scene-development:aftermath-5}}
conflict: {{scene-conflict:aftermath}}
resolution: {{scene-resolution:aftermath-final}}
exit: the chapter hands off to a sharper aftermath consequence
participants: $character-protagonist-001, $character-support-004, $character-support-002, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-004
state-change: {{scene-state-change:aftermath-final}}

@action-012-6 place
action-mode: revelation-act
scene: $scene-012-06
actor: $character-protagonist-001
goal: {{action-goal:aftermath-5}}
obstacle: {{action-obstacle:aftermath}}
result: {{action-result:aftermath-final}}

@conflict-012-6 place
scope: $scene-012-06
type: internal
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:identity-dignity-belonging-consequence}}
escalation: {{conflict-escalation:aftermath}}

@event-012-6 trigger
scope: $scene-012-06
event-type: decision
trigger: {{event-trigger:aftermath-final}}
impact: {{event-impact:aftermath}}
follow-through: {{event-follow-through:aftermath-final}}

@dialogue-turn-012-06-01 line
scene: $scene-012-06
speaker: $character-support-004
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:aftermath-5-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-012-06-02 line
scene: $scene-012-06
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:aftermath-5-1}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-012-06-03 line
scene: $scene-012-06
speaker: $character-support-002
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:aftermath-5-2}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-012-06-04 line
scene: $scene-012-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:aftermath-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-012-atmosphere apply
scope: $chapter-012
description-type: atmosphere
focus: {{description-focus:drama}}
function: atmospheric
rhythm-effect: hold

@dialogue-012-core apply
scene: $scene-012-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-support-003
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:drama}}

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
texture: fragmented

@suspense-012-core build
scope: $chapter-012
suspense-type: emotional
uncertainty: {{suspense-uncertainty:aftermath}}
delay-technique: mixed
payoff-zone: event-012-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-012-core hold
scope: $chapter-012
pause-function: psychological
focus: {{pause-focus:aftermath}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-012-core burst
scope: $chapter-012
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:aftermath}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-012-06
