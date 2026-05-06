@sequence-001-core define
sequence-type: courtship
link-logic: causal
chapter: $chapter-001
objective: {{sequence-objective:setup}}
scene-chain: scene-001-01, scene-001-02, scene-001-03, scene-001-04, scene-001-05, scene-001-06
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:setup}}
supporting-cast: $character-support-001, $character-support-002, $character-support-003
chapter-object: $plot-element-core-object
payoff: {{sequence-payoff:setup}}

@location-001-anchor define
chapter: $chapter-001
primary-setting: $location-primary
secondary-setting: $location-secondary
transit-setting: $location-tertiary-001
chapter-object: $plot-element-core-object
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-001-core apply
chapter: $chapter-001
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:setup}}
action-limitation: {{action-limitation:setup}}
conflict-output: {{conflict-output-rule:setup}}
reveal-pattern: show-exception-to-reveal-rule

@arc-001-protagonist map
chapter: $chapter-001
entry-belief: {{entry-belief:protagonist}} at the start of the setup chapter
challenge: {{challenge:protagonist-setup}}
insight-pressure: {{insight-pressure:protagonist-setup}}
exit-belief: {{exit-belief:protagonist}} after the setup chapter

@arc-001-relationship map
chapter: $chapter-001
pair: $character-protagonist-001, $character-support-001
entry-dynamic: productive-partnership-guarded-by-emotional-self-defense
stress-line: {{relationship-stress:setup}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-001-core arrange
chapter: $chapter-001
block-order: dialogue-description-interior-monologue-action-pause-dialogue-cliffhanger
reader-effect: {{reader-effect:setup}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-001-01 define
chapter: $chapter-001
showing-mode: mixed
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:setup-0}}
development: {{scene-development:setup-0}}
conflict: {{scene-conflict:setup-0}}
resolution: {{scene-resolution:setup-0-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-001
anchor-object: $plot-element-core-object
support-focus: $character-support-001
state-change: {{scene-state-change:setup-0-mid}}

@action-001-1 place
action-mode: pursuit
scene: $scene-001-01
actor: $character-protagonist-001
goal: {{action-goal:setup-0}}
obstacle: {{action-obstacle:setup-0}}
result: {{action-result:setup-0-mid}}

@conflict-001-1 place
scope: $scene-001-01
type: external-character
forces: $character-protagonist-001 versus $character-support-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-setup-0}}
escalation: {{conflict-escalation:setup-0}}

@event-001-1 trigger
scope: $scene-001-01
event-type: reversal
trigger: {{event-trigger:setup-0-mid}}
impact: {{event-impact:setup-0}}
follow-through: {{event-follow-through:setup-0-mid}}

@dialogue-turn-001-01-01 line
scene: $scene-001-01
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:setup-support-0-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-001-01-02 line
scene: $scene-001-01
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:setup-protagonist-0-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-001-01-03 line
scene: $scene-001-01
speaker: $character-support-002
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:setup-support-0-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-001-01-04 line
scene: $scene-001-01
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:setup-pressure-0-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-001-02 define
chapter: $chapter-001
showing-mode: dialogic
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:setup-1}}
development: {{scene-development:setup-1}}
conflict: {{scene-conflict:setup-1}}
resolution: {{scene-resolution:setup-1-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-002, $character-support-003, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-002
state-change: {{scene-state-change:setup-1-mid}}

@action-001-2 place
action-mode: negotiation
scene: $scene-001-02
actor: $character-protagonist-001
goal: {{action-goal:setup-1}}
obstacle: {{action-obstacle:setup-1}}
result: {{action-result:setup-1-mid}}

@conflict-001-2 place
scope: $scene-001-02
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-setup-1}}
escalation: {{conflict-escalation:setup-1}}

@event-001-2 trigger
scope: $scene-001-02
event-type: accident
trigger: {{event-trigger:setup-1-mid}}
impact: {{event-impact:setup-1}}
follow-through: {{event-follow-through:setup-1-mid}}

@dialogue-turn-001-02-01 line
scene: $scene-001-02
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:setup-support-1-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-001-02-02 line
scene: $scene-001-02
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:setup-protagonist-1-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-001-02-03 line
scene: $scene-001-02
speaker: $character-support-003
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:setup-support-1-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-001-02-04 line
scene: $scene-001-02
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:setup-pressure-1-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-001-03 define
chapter: $chapter-001
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:setup-2}}
development: {{scene-development:setup-2}}
conflict: {{scene-conflict:setup-2}}
resolution: {{scene-resolution:setup-2-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-003
anchor-object: $plot-element-core-object
support-focus: $character-support-003
state-change: {{scene-state-change:setup-2-mid}}

@action-001-3 place
action-mode: pursuit
scene: $scene-001-03
actor: $character-protagonist-001
goal: {{action-goal:setup-2}}
obstacle: {{action-obstacle:setup-2}}
result: {{action-result:setup-2-mid}}

@conflict-001-3 place
scope: $scene-001-03
type: external-nature
forces: $character-protagonist-001 versus $character-support-003
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-setup-2}}
escalation: {{conflict-escalation:setup-2}}

@event-001-3 trigger
scope: $scene-001-03
event-type: loss
trigger: {{event-trigger:setup-2-mid}}
impact: {{event-impact:setup-2}}
follow-through: {{event-follow-through:setup-2-mid}}

@dialogue-turn-001-03-01 line
scene: $scene-001-03
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:setup-support-2-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-001-03-02 line
scene: $scene-001-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:setup-protagonist-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-001-03-03 line
scene: $scene-001-03
speaker: $character-support-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:setup-support-2-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-001-03-04 line
scene: $scene-001-03
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:setup-pressure-2-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-001-04 define
chapter: $chapter-001
showing-mode: compressed-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:setup-3}}
development: {{scene-development:setup-3}}
conflict: {{scene-conflict:setup-3}}
resolution: {{scene-resolution:setup-3-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-support-001, $character-support-002
anchor-object: $plot-element-secondary-001
support-focus: $character-support-001
state-change: {{scene-state-change:setup-3-mid}}

@action-001-4 place
action-mode: attempt
scene: $scene-001-04
actor: $character-protagonist-001
goal: {{action-goal:setup-3}}
obstacle: {{action-obstacle:setup-3}}
result: {{action-result:setup-3-mid}}

@conflict-001-4 place
scope: $scene-001-04
type: external-character
forces: $character-protagonist-001 versus $character-support-002
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-setup-3}}
escalation: {{conflict-escalation:setup-3}}

@event-001-4 trigger
scope: $scene-001-04
event-type: loss
trigger: {{event-trigger:setup-3-mid}}
impact: {{event-impact:setup-3}}
follow-through: {{event-follow-through:setup-3-mid}}

@dialogue-turn-001-04-01 line
scene: $scene-001-04
speaker: $character-support-001
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:setup-support-3-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-001-04-02 line
scene: $scene-001-04
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:setup-protagonist-3-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-001-04-03 line
scene: $scene-001-04
speaker: $character-support-002
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:setup-support-3-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-001-04-04 line
scene: $scene-001-04
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:setup-pressure-3-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-001-05 define
chapter: $chapter-001
showing-mode: direct-showing
focalization: internal-single
time-space: $location-secondary
introduction: {{scene-introduction:setup-4}}
development: {{scene-development:setup-4}}
conflict: {{scene-conflict:setup-4}}
resolution: {{scene-resolution:setup-4-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-support-002, $character-pressure-001
anchor-object: $plot-element-core-object
support-focus: $character-support-002
state-change: {{scene-state-change:setup-4-mid}}

@action-001-5 place
action-mode: pursuit
scene: $scene-001-05
actor: $character-protagonist-001
goal: {{action-goal:setup-4}}
obstacle: {{action-obstacle:setup-4}}
result: {{action-result:setup-4-mid}}

@conflict-001-5 place
scope: $scene-001-05
type: external-supernatural
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-setup-4}}
escalation: {{conflict-escalation:setup-4}}

@event-001-5 trigger
scope: $scene-001-05
event-type: revelation
trigger: {{event-trigger:setup-4-mid}}
impact: {{event-impact:setup-4}}
follow-through: {{event-follow-through:setup-4-mid}}

@dialogue-turn-001-05-01 line
scene: $scene-001-05
speaker: $character-support-002
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:setup-support-4-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-001-05-02 line
scene: $scene-001-05
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:setup-protagonist-4-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-001-05-03 line
scene: $scene-001-05
speaker: $character-support-003
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:setup-support-4-2}}
reaction-beat: {{dialogue-reaction:name-risk}}

@dialogue-turn-001-05-04 line
scene: $scene-001-05
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:setup-pressure-4-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@scene-001-06 define
chapter: $chapter-001
showing-mode: introspective
focalization: internal-single
time-space: $location-tertiary-001
introduction: {{scene-introduction:setup-5}}
development: {{scene-development:setup-5}}
conflict: {{scene-conflict:setup-5}}
resolution: {{scene-resolution:setup-5-final}}
exit: the chapter hands off to a sharper setup consequence
participants: $character-protagonist-001, $character-support-003, $character-support-001, $character-pressure-001
anchor-object: $plot-element-secondary-001
support-focus: $character-support-003
state-change: {{scene-state-change:setup-5-final}}

@action-001-6 place
action-mode: revelation-act
scene: $scene-001-06
actor: $character-protagonist-001
goal: {{action-goal:setup-5}}
obstacle: {{action-obstacle:setup-5}}
result: {{action-result:setup-5-final}}

@conflict-001-6 place
scope: $scene-001-06
type: external-technology
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:autonomy-tenderness-trust-future-setup-5}}
escalation: {{conflict-escalation:setup-5}}

@event-001-6 trigger
scope: $scene-001-06
event-type: revelation
trigger: {{event-trigger:setup-5-final}}
impact: {{event-impact:setup-5}}
follow-through: {{event-follow-through:setup-5-final}}

@dialogue-turn-001-06-01 line
scene: $scene-001-06
speaker: $character-support-003
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:setup-support-5-0}}
reaction-beat: {{dialogue-reaction:probe}}

@dialogue-turn-001-06-02 line
scene: $scene-001-06
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:setup-protagonist-5-1}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-001-06-03 line
scene: $scene-001-06
speaker: $character-support-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:setup-support-5-2}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-001-06-04 line
scene: $scene-001-06
speaker: $character-pressure-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:setup-pressure-5-3}}
reaction-beat: {{dialogue-reaction:challenge}}

@description-001-atmosphere apply
scope: $chapter-001
description-type: mixed
focus: {{description-focus:romance-relational}}
function: narrative
rhythm-effect: slow

@dialogue-001-core apply
scene: $scene-001-01
speakers: $character-protagonist-001, $character-counterpart-001, $character-support-001, $character-support-002
exchange-type: question-answer
purpose: characterization
subtext: {{dialogue-core-subtext:romance-relational}}

@narration-001-bridge apply
scope: $chapter-001
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-001-core apply
scene: $scene-001-06
character: $character-protagonist-001
function: psychological-insight
trigger: {{monologue-trigger:setup}}
texture: reflective

@suspense-001-core build
scope: $chapter-001
suspense-type: emotional
uncertainty: {{suspense-uncertainty:setup-0}}
delay-technique: interruption
payoff-zone: event-001-6
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-001-core hold
scope: $chapter-001
pause-function: psychological
focus: {{pause-focus:setup-0}}
placement: after-first-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-001-core burst
scope: $chapter-001
acceleration-mode: transition-skip
trigger: {{acceleration-trigger:setup-0}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-001-06

@cliffhanger-001-exit cut
scope: $chapter-001
cliffhanger-type: interrupted-revelation
cut-moment: {{cliffhanger-moment:setup-0}}
continuation-pressure: {{cliffhanger-continuation:setup-0}}
