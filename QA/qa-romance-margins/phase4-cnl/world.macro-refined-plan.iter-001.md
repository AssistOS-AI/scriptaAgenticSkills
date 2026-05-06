@plot-element-core-object define
name: the doubled-margin proof set
category: physical-object
subtype: document
function: revelation
stakes: the studio's survival, the commission that could define both careers, and the possibility of loving honestly again
holders: the estate trust behind the studio, $character-pressure-001
activation: the protagonist decodes the doubled-margin proof set near the midpoint
payoff-zone: midpoint and final confrontation

@plot-device-pressure-shift define
device-type: chekhov-gun
purpose: the narrative purpose of this plot-device chapter
setup-zone: opening and first chapter
payoff-zone: midpoint
fairness-rule: every later reveal must have at least one early concrete hint

@world-subsystem-primary define
domain: society
function: defines the system that constrains action and shapes conflict
conflict-output: shared labor turns every practical choice into a referendum on trust, apology, and future risk
visibility: explicit

@world-rule-primary define
subsystem: primary
rule-type: social-norm
rule: The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.
cost: every attempt to solve the central problem increases another kind of loss
exception: exceptions require a visible trade-off and cannot erase consequences
traceability: the manuscript must show repeated evidence that the rule shapes decisions
violation-effect: validation must flag coherence failure if the rule stops mattering

@world-rule-secondary define
subsystem: secondary
rule-type: social-norm
rule: The final edition may include one unscheduled page only if both lead signatories approve it before launch.
conflict-transform: The final edition may include one unscheduled page only if both lead signatories approve it before launch.
reveal-mode: explicit
narrative-duty: the rule should surface through scene friction, not abstract exposition

@world-reveal-strategy define
explicit-zone: opening pressure and late midpoint
implicit-zone: dialogue beats, location detail, and consequence scenes
reader-inference-goal: the reader should infer the larger system from local constraints before the book names the whole mechanism
reveal-strategy: embed-rule-in-dialogue
rule-to-conflict: The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women. so shared labor turns every practical choice into a referendum on trust, apology, and future risk

@location-primary define
name: the inherited letterpress studio on Brindle Lane
role: primary pressure stage
sensory-anchor: ink oil, paper dust, hot metal type, winter air trapped in skylight glass
social-signal: work replaces confession here because every surface carries the memory of collaboration
symbolic-charge: a place where touch leaves visible marks and every correction shows
conflict-use: routine tasks keep exposing the intimacy both women call professional

@location-secondary define
name: the riverside paper warehouse leased for the launch
role: revelation or narrowing stage
sensory-anchor: ink oil, paper dust, hot metal type, winter air trapped in skylight glass
social-signal: work replaces confession here because every surface carries the memory of collaboration
symbolic-charge: a place where touch leaves visible marks and every correction shows
conflict-use: routine tasks keep exposing the intimacy both women call professional

@location-tertiary-001 define
name: Museum Crate Hall
role: hidden pressure chamber
sensory-anchor: lamp heat over trimmed signatures
social-signal: small design decisions carry emotional memory
symbolic-charge: repair mistaken for mere maintenance
conflict-use: the setting keeps collapsing logistics into tenderness

@location-tertiary-002 define
name: Wick Market Arcade
role: public consequence stage
sensory-anchor: paper dust in winter light
social-signal: public praise threatens private caution
symbolic-charge: a workspace that remembers every unfinished touch
conflict-use: the space removes any believable excuse for emotional distance

@location-tertiary-003 define
name: Ink Room Mezzanine
role: hidden pressure chamber
sensory-anchor: pine crates and linen gloves
social-signal: craft offers cover but not real distance
symbolic-charge: display culture forcing intimacy into view
conflict-use: material beauty refuses to stay emotionally neutral

@location-tertiary-004 define
name: Riverside Binding Loft
role: public consequence stage
sensory-anchor: linseed ink and warm brass
social-signal: everyone keeps using practical language to avoid naming feeling
symbolic-charge: commerce offering a stage for confession
conflict-use: objects of craft turn into witnesses

@plot-element-secondary-001 define
name: Letterpress Dedication Slip
category: document
subtype: ledger
function: pressure-amplifier
stakes: it makes the finished book carry visible traces of prior damage
holders: the estate trust behind the studio, $character-pressure-001
activation: it reappears when craft decisions begin reading like emotional evidence
payoff-zone: midbook escalation and final exposure

@plot-element-secondary-002 define
name: Museum Dummy Spine
category: artifact
subtype: seal
function: proof-carrier
stakes: it shows that aesthetic polish was built on mutual hurt
holders: the estate trust behind the studio, $character-pressure-001
activation: it makes an old departure physically legible inside the new commission
payoff-zone: late revelation and aftermath

@plot-element-secondary-003 define
name: Ink Ledger of Corrections
category: token
subtype: key
function: pressure-amplifier
stakes: it can expose how much of the relationship survived inside the work
holders: the estate trust behind the studio, $character-pressure-001
activation: it turns repair marks into public design language
payoff-zone: midbook escalation and final exposure

@plot-element-secondary-004 define
name: Double-Margin Proof
category: device
subtype: recording
function: proof-carrier
stakes: it lets the commission become proof instead of camouflage
holders: the estate trust behind the studio, $character-pressure-001
activation: it forces usefulness and vulnerability into the same object
payoff-zone: late revelation and aftermath

@world-rule-primary refine
ref: rule:world-primary -> The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: treat social expectations as real constraints on intimacy and choice
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-rule-secondary refine
ref: rule:world-secondary -> The final edition may include one unscheduled page only if both lead signatories approve it before launch.
ref: conflict-transform:world-secondary -> The final edition may include one unscheduled page only if both lead signatories approve it before launch.
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: treat social expectations as real constraints on intimacy and choice
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@world-reveal-strategy refine
ref: rule-to-conflict:world -> The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women. so shared labor turns every practical choice into a referendum on trust, apology, and future risk
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: treat social expectations as real constraints on intimacy and choice
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-primary refine
ref: sensory-anchor:location-primary -> ink oil, paper dust, hot metal type, winter air trapped in skylight glass
ref: social-signal:location-primary -> work replaces confession here because every surface carries the memory of collaboration
ref: symbolic-charge:location-primary -> a place where touch leaves visible marks and every correction shows
ref: conflict-use:location-primary -> routine tasks keep exposing the intimacy both women call professional
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place intimate through work, routine, and shared objects
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-secondary refine
ref: sensory-anchor:location-secondary -> ink oil, paper dust, hot metal type, winter air trapped in skylight glass
ref: social-signal:location-secondary -> work replaces confession here because every surface carries the memory of collaboration
ref: symbolic-charge:location-secondary -> a place where touch leaves visible marks and every correction shows
ref: conflict-use:location-secondary -> routine tasks keep exposing the intimacy both women call professional
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place intimate through work, routine, and shared objects
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-001 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place intimate through work, routine, and shared objects
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-002 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place intimate through work, routine, and shared objects
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-003 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place intimate through work, routine, and shared objects
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.

@location-tertiary-004 refine
naming-rule: resolved names must be internationally portable proper names and must not embed role words such as inspector, journalist, mayor, or doctor
validation-gate: no placeholder tokens may remain after refinement; if any survive, later drafting and export stages must fail explicitly
should: make the place intimate through work, routine, and shared objects
The refined artifact preserves identifier continuity so deterministic validation can compare seed and successor outputs.
