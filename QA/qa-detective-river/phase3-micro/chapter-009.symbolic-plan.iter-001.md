@sequence-009-core define
sequence-type: investigation
link-logic: causal
chapter: $chapter-009
objective: {{sequence-objective:culmination}}
scene-chain: scene-009-01, scene-009-02, scene-009-03
carry-forward-pressure: each scene must inherit and intensify the previous unresolved pressure
conflict-line: {{sequence-conflict:culmination}}
payoff: {{sequence-payoff:culmination}}

@location-009-anchor define
chapter: $chapter-009
primary-setting: $location-primary
secondary-setting: $location-secondary
sensory-anchor: {{sensory-anchor:location-primary}}
social-signal: {{social-signal:location-primary}}
symbolic-charge: {{symbolic-charge:location-primary}}
conflict-use: {{conflict-use:location-primary}}

@rule-pressure-009-core apply
chapter: $chapter-009
rule-reference: $world-rule-primary
visible-symptom: {{visible-symptom:culmination}}
action-limitation: {{action-limitation:culmination}}
conflict-output: {{conflict-output-rule:culmination}}
reveal-pattern: embed-rule-in-dialogue

@arc-009-protagonist map
chapter: $chapter-009
entry-belief: {{entry-belief:protagonist}} at the start of the culmination chapter
challenge: {{challenge:protagonist-culmination}}
insight-pressure: {{insight-pressure:protagonist-culmination}}
exit-belief: {{exit-belief:protagonist}} after the culmination chapter

@arc-009-relationship map
chapter: $chapter-009
pair: $character-protagonist-001, $character-counterpart-001
entry-dynamic: technical-trust-without-moral-agreement
stress-line: {{relationship-stress:culmination}}
exit-dynamic: altered-but-legible-bond

@alternation-009-core arrange
chapter: $chapter-009
block-order: action-dialogue-description-conflict-revelation-suspense-cliffhanger
reader-effect: {{reader-effect:culmination}}
anti-flatness-rule: do not chain action summaries without dialogue, atmosphere, or reflection support

@scene-009-01 define
chapter: $chapter-009
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-0}}
development: {{scene-development:culmination-0}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-009-1 place
action-mode: evasion
scene: $scene-009-01
actor: $character-protagonist-001
goal: {{action-goal:culmination-0}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-009-1 place
scope: $scene-009-01
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-009-1 trigger
scope: $scene-009-01
event-type: revelation
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-009-01-01 line
scene: $scene-009-01
speaker: $character-counterpart-001
intent: tease-probe
subtext: {{dialogue-subtext:tease-probe}}
line-hint: {{dialogue-line-hint:culmination-0-0}}
reaction-beat: {{dialogue-reaction:tease-probe}}

@dialogue-turn-009-01-02 line
scene: $scene-009-01
speaker: $character-protagonist-001
intent: name-risk
subtext: {{dialogue-subtext:name-risk}}
line-hint: {{dialogue-line-hint:culmination-0-1}}
reaction-beat: {{dialogue-reaction:name-risk}}

@scene-009-02 define
chapter: $chapter-009
showing-mode: dialogic
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-1}}
development: {{scene-development:culmination-1}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-mid}}
exit: the next scene begins before the pressure can settle
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-mid}}

@action-009-2 place
action-mode: negotiation
scene: $scene-009-02
actor: $character-protagonist-001
goal: {{action-goal:culmination-1}}
obstacle: {{action-obstacle:culmination}}
result: the attempt reveals only part of the hidden structure and deepens the next demand

@conflict-009-2 place
scope: $scene-009-02
type: external-society
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-009-2 trigger
scope: $scene-009-02
event-type: decision
trigger: {{event-trigger:culmination-mid}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-mid}}

@dialogue-turn-009-02-01 line
scene: $scene-009-02
speaker: $character-counterpart-001
intent: deflect
subtext: {{dialogue-subtext:deflect}}
line-hint: {{dialogue-line-hint:culmination-1-0}}
reaction-beat: {{dialogue-reaction:deflect}}

@dialogue-turn-009-02-02 line
scene: $scene-009-02
speaker: $character-protagonist-001
intent: warn
subtext: {{dialogue-subtext:warn}}
line-hint: {{dialogue-line-hint:culmination-1-1}}
reaction-beat: {{dialogue-reaction:warn}}

@scene-009-03 define
chapter: $chapter-009
showing-mode: direct-showing
focalization: internal-single
time-space: $location-primary
introduction: {{scene-introduction:culmination-2}}
development: {{scene-development:culmination-2}}
conflict: {{scene-conflict:culmination}}
resolution: {{scene-resolution:culmination-final}}
exit: the chapter hands off to a sharper culmination consequence
participants: $character-protagonist-001, $character-counterpart-001, $character-pressure-001
state-change: {{scene-state-change:culmination-final}}

@action-009-3 place
action-mode: evasion
scene: $scene-009-03
actor: $character-protagonist-001
goal: {{action-goal:culmination-2}}
obstacle: {{action-obstacle:culmination}}
result: {{action-result:culmination-final}}

@conflict-009-3 place
scope: $scene-009-03
type: external-character
forces: $character-protagonist-001 versus $character-pressure-001
stakes: {{conflict-stakes:justice-legitimacy-trust-safety}}
escalation: {{conflict-escalation:culmination}}

@event-009-3 trigger
scope: $scene-009-03
event-type: crime
trigger: {{event-trigger:culmination-final}}
impact: {{event-impact:culmination}}
follow-through: {{event-follow-through:culmination-final}}

@dialogue-turn-009-03-01 line
scene: $scene-009-03
speaker: $character-counterpart-001
intent: challenge
subtext: {{dialogue-subtext:challenge}}
line-hint: {{dialogue-line-hint:culmination-2-0}}
reaction-beat: {{dialogue-reaction:challenge}}

@dialogue-turn-009-03-02 line
scene: $scene-009-03
speaker: $character-protagonist-001
intent: commit
subtext: {{dialogue-subtext:commit}}
line-hint: {{dialogue-line-hint:culmination-2-1}}
reaction-beat: {{dialogue-reaction:commit}}

@description-009-atmosphere apply
scope: $chapter-009
description-type: setting
focus: {{description-focus:detective-police}}
function: narrative
rhythm-effect: frame

@dialogue-009-core apply
scene: $scene-009-01
speakers: $character-protagonist-001, $character-counterpart-001
exchange-type: question-answer
purpose: information
subtext: {{dialogue-core-subtext:detective-police}}

@narration-009-bridge apply
scope: $chapter-009
narrator-mode: close-third-person
function: organizational
time-handling: mixed

@interior-monologue-009-core apply
scene: $scene-009-03
character: $character-protagonist-001
function: characterization
trigger: {{monologue-trigger:culmination}}
texture: fragmented

@suspense-009-core build
scope: $chapter-009
suspense-type: cognitive
uncertainty: {{suspense-uncertainty:culmination}}
delay-technique: delayed-information
payoff-zone: event-009-3
Delayed access, withheld explanation, and emotional pressure should work together instead of in isolation.

@pause-009-core hold
scope: $chapter-009
pause-function: explanatory
focus: {{pause-focus:culmination}}
placement: before-final-scene
reader-effect: decelerate just enough to let consequence become legible

@acceleration-009-core burst
scope: $chapter-009
acceleration-mode: pursuit-compression
trigger: {{acceleration-trigger:culmination}}
reader-effect: compress time and force the next consequence to land without emotional escape
target-zone: $scene-009-03

@cliffhanger-009-exit cut
scope: $chapter-009
cliffhanger-type: critical-decision
cut-moment: {{cliffhanger-moment:culmination}}
continuation-pressure: {{cliffhanger-continuation:culmination}}
