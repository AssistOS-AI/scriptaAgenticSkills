@sequence-001-core define
sequence-type: investigation
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
reveal-pattern: show-consequence-first-explain-cause-later

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
exit-dynamic: solidarity-forged-through-contested-truth

@alternation-001-core arrange
chapter: chapter-001
block-order: action-dialogue-description-conflict-revelation-suspense-cliffhanger
reader-effect: {{reader-effect:setup}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-001-01 define
chapter: chapter-001
showing-mode: mixed
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:setup-0}}
development: {{scene-development:setup-0}}
conflict: {{scene-conflict:setup}}
resolution: {{scene-resolution:setup-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:setup-mid}}

@action-001-1 place
action-mode: attempt
scene: scene-001-01
actor: {{character:protagonist-001}}
goal: {{action-goal:setup-0}}
obstacle: {{action-obstacle:setup}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-001-1 place
scope: scene-001-01
type: mixed
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:setup}}

@event-001-1 trigger
scope: scene-001-01
event-type: crime
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
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:setup-0-1}}
reaction-beat: {{dialogue-reaction:commit}}

@scene-001-02 define
chapter: chapter-001
showing-mode: direct-showing
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:setup-1}}
development: {{scene-development:setup-1}}
conflict: {{scene-conflict:setup}}
resolution: {{scene-resolution:setup-mid}}
exit: the next scene begins before the pressure can settle
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:setup-mid}}

@action-001-2 place
action-mode: negotiation
scene: scene-001-02
actor: {{character:protagonist-001}}
goal: {{action-goal:setup-1}}
obstacle: {{action-obstacle:setup}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-001-2 place
scope: scene-001-02
type: external-supernatural
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:setup}}

@event-001-2 trigger
scope: scene-001-02
event-type: revelation
trigger: {{event-trigger:setup-mid}}
impact: {{event-impact:setup}}
follow-through: {{event-follow-through:setup-mid}}

@dialogue-turn-001-02-01 line
scene: scene-001-02
speaker: {{character:counterpart-001}}
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:setup-1-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-001-02-02 line
scene: scene-001-02
speaker: {{character:protagonist-001}}
intent: reframe
subtext: {{dialogue-subtext:reframe}}
line-hint: {{dialogue-line-hint:setup-1-1}}
reaction-beat: {{dialogue-reaction:reframe}}

@scene-001-03 define
chapter: chapter-001
showing-mode: dialogic
focalization: internal-single
time-space: {{location:primary-001}}
introduction: {{scene-introduction:setup-2}}
development: {{scene-development:setup-2}}
conflict: {{scene-conflict:setup}}
resolution: {{scene-resolution:setup-final}}
exit: the chapter hands off to a sharper setup consequence
participants: {{character:protagonist-001}}, {{character:counterpart-001}}, {{character:pressure-001}}
state-change: {{scene-state-change:setup-final}}

@action-001-3 place
action-mode: negotiation
scene: scene-001-03
actor: {{character:protagonist-001}}
goal: {{action-goal:setup-2}}
obstacle: {{action-obstacle:setup}}
result: {{action-result:setup-final}}

@conflict-001-3 place
scope: scene-001-03
type: external-character
forces: {{character:protagonist-001}} versus {{character:pressure-001}}
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:setup}}

@event-001-3 trigger
scope: scene-001-03
event-type: reversal
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
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:setup-2-1}}
reaction-beat: {{dialogue-reaction:deflect}}

@description-001-atmosphere apply
scope: chapter-001
description-type: setting
focus: {{description-focus:detective-police}}
function: narrative
rhythm-effect: hold

@dialogue-001-core apply
scene: scene-001-01
speakers: {{character:protagonist-001}}, {{character:counterpart-001}}
exchange-type: question-answer
purpose: information
subtext: {{dialogue-core-subtext:detective-police}}

@narration-001-bridge apply
scope: chapter-001
narrator-mode: third-person
function: organizational
time-handling: mixed

@interior-monologue-001-core apply
scene: scene-001-03
character: {{character:protagonist-001}}
function: characterization
trigger: {{monologue-trigger:setup}}
texture: fragmented

@suspense-001-core build
scope: chapter-001
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:setup}}
delay-technique: delayed-information
payoff-zone: event-001-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-001-core hold
scope: chapter-001
pause-function: explanatory
focus: {{pause-focus:setup}}
placement: after-first-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-001-core burst
scope: chapter-001
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:setup}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: scene-001-03

@cliffhanger-001-exit cut
scope: chapter-001
cliffhanger-type: unresolved-confrontation
cut-moment: {{cliffhanger-moment:setup}}
continuation-pressure: {{cliffhanger-continuation:setup}}
