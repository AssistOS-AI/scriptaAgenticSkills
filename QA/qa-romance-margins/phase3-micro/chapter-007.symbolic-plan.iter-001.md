@sequence-007-core define
sequence-type: courtship
link-logic: causal
chapter: $chapter-007
objective: {{sequence-objective:escalation}}
scene-chain: scene-007-01, scene-007-02, scene-007-03, scene-007-04, scene-007-05, scene-007-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:escalation}}
supporting-cast: $character-support-002, $character-support-003, $character-support-004
chapter-object: $plot-element-secondary-001
payoff: {{sequence-payoff:escalation}}

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
visible-symptom: {{visible-symptom:escalation}}
action-limitation: {{action-limitation:escalation}}
conflict-output: {{conflict-output-rule:escalation}}
reveal-pattern: show-exception-to-reveal-rule

@arc-007-protagonist map
chapter: $chapter-007
entry-belief: {{entry-belief:protagonist}} at the start of the escalation chapter
challenge: {{challenge:protagonist-escalation}}
insight-pressure: {{insight-pressure:protagonist-escalation}}
exit-belief: {{exit-belief:protagonist}} after the escalation chapter

@arc-007-relationship map
chapter: $chapter-007
pair: $character-protagonist-001, $character-support-002
entry-dynamic: oath-bound-cooperation-shadowed-by-allegiance
stress-line: {{relationship-stress:escalation}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-007-core arrange
chapter: $chapter-007
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:escalation}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-007-01 define
chapter: $chapter-007
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:escalation-0}}
development: {{scene-development:escalation-0}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:escalation-mid}}

@action-007-1 place
action-mode: pursuit
scene: $scene-007-01
actor: $character-protagonist-001
goal: {{action-goal:escalation-0}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-007-1 place
scope: $scene-007-01
type: mixed
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:escalation}}

@event-007-1 trigger
scope: $scene-007-01
event-type: loss
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-007-01-01 line
scene: $scene-007-01
speaker: $character-support-002
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:escalation-0-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-007-01-02 line
scene: $scene-007-01
speaker: $character-protagonist-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:escalation-0-1}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-007-01-03 line
scene: $scene-007-01
speaker: $character-support-003
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-0-2}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-01-04 line
scene: $scene-007-01
speaker: $character-pressure-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-0-3}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-007-02 define
chapter: $chapter-007
showing-mode: dialogic
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:escalation-1}}
development: {{scene-development:escalation-1}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-003, $character-support-004, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-003
state-change: {{scene-state-change:escalation-mid}}

@action-007-2 place
action-mode: attempt
scene: $scene-007-02
actor: $character-protagonist-001
goal: {{action-goal:escalation-1}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-007-2 place
scope: $scene-007-02
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:escalation}}

@event-007-2 trigger
scope: $scene-007-02
event-type: betrayal
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-007-02-01 line
scene: $scene-007-02
speaker: $character-support-003
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:escalation-1-0}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-007-02-02 line
scene: $scene-007-02
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-1-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-007-02-03 line
scene: $scene-007-02
speaker: $character-support-004
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:escalation-1-2}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-007-02-04 line
scene: $scene-007-02
speaker: $character-pressure-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:escalation-1-3}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@scene-007-03 define
chapter: $chapter-007
showing-mode: direct-showing
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:escalation-2}}
development: {{scene-development:escalation-2}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-004
anchor-object: $plot-element-secondary-001
support-focus: $character-support-004
state-change: {{scene-state-change:escalation-mid}}

@action-007-3 place
action-mode: revelation-act
scene: $scene-007-03
actor: $character-protagonist-001
goal: {{action-goal:escalation-2}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-007-3 place
scope: $scene-007-03
type: mixed
forces: $character-protagonist-001 versus $character-support-004
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:escalation}}

@event-007-3 trigger
scope: $scene-007-03
event-type: discovery
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-007-03-01 line
scene: $scene-007-03
speaker: $character-support-004
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:escalation-2-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-007-03-02 line
scene: $scene-007-03
speaker: $character-protagonist-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:escalation-2-1}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-007-03-03 line
scene: $scene-007-03
speaker: $character-support-002
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-2-2}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-03-04 line
scene: $scene-007-03
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:escalation-2-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-007-04 define
chapter: $chapter-007
showing-mode: introspective
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:escalation-3}}
development: {{scene-development:escalation-3}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003
anchor-object: $plot-element-secondary-002
support-focus: $character-support-002
state-change: {{scene-state-change:escalation-mid}}

@action-007-4 place
action-mode: negotiation
scene: $scene-007-04
actor: $character-protagonist-001
goal: {{action-goal:escalation-3}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-007-4 place
scope: $scene-007-04
type: external-character
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:escalation}}

@event-007-4 trigger
scope: $scene-007-04
event-type: arrival
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-007-04-01 line
scene: $scene-007-04
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:escalation-3-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-007-04-02 line
scene: $scene-007-04
speaker: $character-protagonist-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-3-1}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-007-04-03 line
scene: $scene-007-04
speaker: $character-support-003
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:escalation-3-2}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-007-04-04 line
scene: $scene-007-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:escalation-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-007-05 define
chapter: $chapter-007
showing-mode: dialogic
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:escalation-4}}
development: {{scene-development:escalation-4}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:escalation-mid}}

@action-007-5 place
action-mode: pursuit
scene: $scene-007-05
actor: $character-protagonist-001
goal: {{action-goal:escalation-4}}
obstacle: {{action-obstacle:escalation}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-007-5 place
scope: $scene-007-05
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:escalation}}

@event-007-5 trigger
scope: $scene-007-05
event-type: decision
trigger: {{event-trigger:escalation-mid}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-mid}}

@dialogue-turn-007-05-01 line
scene: $scene-007-05
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:escalation-4-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-007-05-02 line
scene: $scene-007-05
speaker: $character-protagonist-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:escalation-4-1}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-007-05-03 line
scene: $scene-007-05
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-007-05-04 line
scene: $scene-007-05
speaker: $character-pressure-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:escalation-4-3}}
reaction-beat: {{dialogue-reaction:deflect}}

@scene-007-06 define
chapter: $chapter-007
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:escalation-5}}
development: {{scene-development:escalation-5}}
conflict: {{scene-conflict:escalation}}
resolution: {{scene-resolution:escalation-final}}
exit: the chapter hands off to a sharper escalation consequence
participants: $character-protagonist-001, $character-support-004, $character-support-002, $character-pressure-001
anchor-object: $plot-element-secondary-002
support-focus: $character-support-004
state-change: {{scene-state-change:escalation-final}}

@action-007-6 place
action-mode: pursuit
scene: $scene-007-06
actor: $character-protagonist-001
goal: {{action-goal:escalation-5}}
obstacle: {{action-obstacle:escalation}}
result: {{action-result:escalation-final}}

@conflict-007-6 place
scope: $scene-007-06
type: mixed
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future}}
escalation: {{conflict-escalation:escalation}}

@event-007-6 trigger
scope: $scene-007-06
event-type: revelation
trigger: {{event-trigger:escalation-final}}
impact: {{event-impact:escalation}}
follow-through: {{event-follow-through:escalation-final}}

@dialogue-turn-007-06-01 line
scene: $scene-007-06
speaker: $character-support-004
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-5-0}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-007-06-02 line
scene: $scene-007-06
speaker: $character-protagonist-001
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:escalation-5-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@dialogue-turn-007-06-03 line
scene: $scene-007-06
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:escalation-5-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-007-06-04 line
scene: $scene-007-06
speaker: $character-pressure-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:escalation-5-3}}
reaction-beat: {{dialogue-reaction:commit}}

@description-007-atmosphere apply
scope: $chapter-007
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: hold

@dialogue-007-core apply
scene: $scene-007-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-support-003
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

@narration-007-bridge apply
scope: $chapter-007
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-007-core apply
scene: $scene-007-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:escalation}}
texture: reflective

@suspense-007-core build
scope: $chapter-007
suspense-type: emotional
uncertainty: {{suspense-uncertainty:escalation}}
delay-technique: interruption
payoff-zone: event-007-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-007-core hold
scope: $chapter-007
pause-function: psychological
focus: {{pause-focus:escalation}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-007-core burst
scope: $chapter-007
acceleration-mode: transition-skip
trigger: {{acceleration-trigger:escalation}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-007-06

@cliffhanger-007-exit cut
scope: $chapter-007
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:escalation}}
continuation-pressure: {{cliffhanger-continuation:escalation}}
