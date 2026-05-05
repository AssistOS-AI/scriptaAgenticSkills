@sequence-001-core define
sequence-type: recovery
link-logic: temporal
chapter: chapter-001
objective: {{sequence-objective:setup}}
scene-chain: scene-001-01, scene-001-02, scene-001-03
continuity-thread: each scene must inherit and intensify the previous scene's unresolved pressure
conflict-line: {{sequence-conflict:setup}}
payoff: {{sequence-payoff:setup}}

@location-001-anchor define
chapter: chapter-001
primary-setting: {{location:primary-001}}
secondary-setting: {{location:secondary-001}}
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-001-core apply
chapter: chapter-001
rule-reference: world-rule-primary
visible-symptom: {{visible-symptom:setup}}
action-limitation: {{action-limitation:setup}}
conflict-output: {{conflict-output-rule:setup}}
reveal-pattern: show-exception-to-reveal-rule

@arc-001-protagonist map
chapter: chapter-001
entry-belief: {{entry-belief:protagonist}} at the start of the setup chapter
challenge: {{challenge:protagonist-setup}}
insight-pressure: {{insight-pressure:protagonist-setup}}
exit-belief: {{exit-belief:protagonist}} after the setup chapter

@arc-001-relationship map
chapter: chapter-001
pair: {{character:protagonist-001}}, {{character:counterpart-001}}
entry-dynamic: productive-partnership-guarded-by-emotional-self-defense
stress-line: {{relationship-stress:setup}}
exit-dynamic: scarred-trust-rebuilt-on-painful-clarity

@alternation-001-core arrange
chapter: chapter-001
block-order: description-action-dialogue-suspense-interior-monologue-revelation-pause
reader-effect: {{reader-effect:setup}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-001-01 define
chapter: chapter-001
showing-mode: direct-showing
focalization: internal-shifting
time-space: {{location:primary-001}}
introduction: {{scene-introduction:setup-0}}
development: {{scene-development:setup-0}}
conflict: {{scene-conflict:setup}}
resolution: {{scene-resolution:setup-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:setup-mid}}

@action-001-1 place
action-mode: sacrifice
scene: scene-001-01
actor: {{character:protagonist-001}}
goal: {{action-goal:setup-0}}
obstacle: {{action-obstacle:setup}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-001-1 place
scope: scene-001-01
type: external-society
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:setup}}

@event-001-1 trigger
scope: scene-001-01
event-type: discovery
trigger: {{event-trigger:setup-mid}}
impact: {{event-impact:setup}}
follow-through: {{event-follow-through:setup-mid}}

@dialogue-turn-001-01-01 line
scene: scene-001-01
speaker: {{character:counterpart-001}}
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:setup-0-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-001-01-02 line
scene: scene-001-01
speaker: {{character:protagonist-001}}
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:setup-0-1}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-001-02 define
chapter: chapter-001
showing-mode: dialogic
focalization: internal-shifting
time-space: {{location:primary-001}}
introduction: {{scene-introduction:setup-1}}
development: {{scene-development:setup-1}}
conflict: {{scene-conflict:setup}}
resolution: {{scene-resolution:setup-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:setup-mid}}

@action-001-2 place
action-mode: attempt
scene: scene-001-02
actor: {{character:protagonist-001}}
goal: {{action-goal:setup-1}}
obstacle: {{action-obstacle:setup}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-001-2 place
scope: scene-001-02
type: external-society
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:setup}}

@event-001-2 trigger
scope: scene-001-02
event-type: discovery
trigger: {{event-trigger:setup-mid}}
impact: {{event-impact:setup}}
follow-through: {{event-follow-through:setup-mid}}

@dialogue-turn-001-02-01 line
scene: scene-001-02
speaker: {{character:counterpart-001}}
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:setup-1-0}}
reaction-beat: {{dialogue-reaction:commit}}

@dialogue-turn-001-02-02 line
scene: scene-001-02
speaker: {{character:protagonist-001}}
intent: probe
subtext: {{dialogue-subtext:probe}}
line-hint: {{dialogue-line-hint:setup-1-1}}
reaction-beat: {{dialogue-reaction:probe}}

@scene-001-03 define
chapter: chapter-001
showing-mode: direct-showing
focalization: internal-shifting
time-space: {{location:primary-001}}
introduction: {{scene-introduction:setup-2}}
development: {{scene-development:setup-2}}
conflict: {{scene-conflict:setup}}
resolution: {{scene-resolution:setup-final}}
exit: the chapter hands off to a sharper setup consequence
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:setup-final}}

@action-001-3 place
action-mode: evasion
scene: scene-001-03
actor: {{character:protagonist-001}}
goal: {{action-goal:setup-2}}
obstacle: {{action-obstacle:setup}}
result: {{action-result:setup-final}}

@conflict-001-3 place
scope: scene-001-03
type: external-supernatural
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:lineage-survival-legitimacy-cost}}
escalation: {{conflict-escalation:setup}}

@event-001-3 trigger
scope: scene-001-03
event-type: decision
trigger: {{event-trigger:setup-final}}
impact: {{event-impact:setup}}
follow-through: {{event-follow-through:setup-final}}

@dialogue-turn-001-03-01 line
scene: scene-001-03
speaker: {{character:counterpart-001}}
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:setup-2-0}}
reaction-beat: {{dialogue-reaction:warn}}

@dialogue-turn-001-03-02 line
scene: scene-001-03
speaker: {{character:protagonist-001}}
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:setup-2-1}}
reaction-beat: {{dialogue-reaction:warn}}

@description-001-atmosphere apply
scope: chapter-001
description-type: symbolic
focus: {{description-focus:fantasy}}
function: symbolic
rhythm-effect: contrast

@dialogue-001-core apply
scene: scene-001-01
speakers: {{character:protagonist-001}}, {{character:counterpart-001}}
exchange-type: conflictual
purpose: tension
subtext: {{dialogue-core-subtext:fantasy}}

@narration-001-bridge apply
scope: chapter-001
narrator-mode: objective
function: organizational
time-handling: mixed

@interior-monologue-001-core apply
scene: scene-001-03
character: {{character:protagonist-001}}
function: psychological-insight
trigger: {{monologue-trigger:setup}}
texture: reflective

@suspense-001-core build
scope: chapter-001
suspense-type: situational
uncertainty: {{suspense-uncertainty:setup}}
delay-technique: foreshadowing
payoff-zone: event-001-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-001-core hold
scope: chapter-001
pause-function: atmospheric
focus: {{pause-focus:setup}}
placement: after-first-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-001-core burst
scope: chapter-001
acceleration-mode: summary-burst
trigger: {{acceleration-trigger:setup}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: scene-001-03

@cliffhanger-001-exit cut
scope: chapter-001
cliffhanger-type: danger
cut-moment: {{cliffhanger-moment:setup}}
continuation-pressure: {{cliffhanger-continuation:setup}}
