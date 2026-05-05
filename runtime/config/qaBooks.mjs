const QA_BOOK_SEEDS = [
  {
    bookId: 'qa-drama-silence',
    profile: 'drama',
    title: 'When the Silence Returns',
    brief: 'A grieving mediator returns home after her brother dies and discovers the family grief was organized around an institutional lie.',
    workForm: 'novelette',
    chapterCount: 4,
    sceneDensity: 'high',
    vision: {
      storySummary: 'Mediator Mara Iliev returns to the flood-struck town of Cernav after her brother dies in what officials call an accident. With archivist Iona Radu she uncovers a compensation fraud hidden inside the mediation office, but exposing it would strip Mara\'s mother of the pension that kept the family alive.',
      storyQuestion: 'Can Mara expose the lie that killed her brother if the truth also proves her family survived on the same silence?',
      dilemma: 'Protect her mother from public ruin or read the forged flood ledger aloud before the town can bury her brother a second time.',
      themeQuestion: 'When grief becomes a civic ritual, is silence still mercy or only a softer form of power?',
      themeStatement: 'Private sorrow becomes public duty the moment institutions begin feeding on silence.',
      poleA: 'mercy-through-silence',
      poleB: 'justice-through-exposure',
      characters: {
        protagonist: {
          name: 'Mara Iliev',
          role: 'returning mediator who once taught the town how to de-escalate public conflict',
          publicGoal: 'recover her brother\'s last testimony and reopen the closed flood compensation files',
          hiddenNeed: 'admit that keeping the family intact turned her into a careful accomplice',
          fear: 'learning that her mother knowingly accepted money tied to the lie',
          contradiction: 'professionally composed yet privately volatile, dutiful yet resentful',
          entryBelief: 'keeping a family safe matters more than forcing a public reckoning',
          exitBelief: 'care without truth only prolongs the violence of the original wound',
          turningInsight: 'the dead are betrayed again whenever the living turn grief into paperwork'
        },
        counterpart: {
          name: 'Iona Radu',
          role: 'municipal archivist and Mara\'s former closest friend',
          publicGoal: 'preserve the last unaltered records before the archive is resealed',
          hiddenNeed: 'stop treating witnesshood as a morally neutral profession',
          fear: 'being forced to testify alone against the men who control the town hall',
          contradiction: 'precise yet evasive, loyal yet chronically late to intervene'
        },
        pressure: {
          name: 'Lucian Petrescu',
          role: 'deputy mayor who turned emergency relief into a patronage machine',
          publicGoal: 'keep the flood ledger sealed until the commemoration ceremony passes',
          hiddenNeed: 'convince himself that order mattered more than the lives it cost',
          fear: 'a public witness pairing that makes his signatures impossible to dismiss',
          contradiction: 'courteous in tone, predatory in timing'
        }
      },
      locations: {
        primary: {
          name: 'the shuttered mediation office above the old customs hall',
          sensory: 'wet wool, radiator hiss, mildew trapped in paper bindings',
          socialSignal: 'every conversation sounds temporary because the office trained people to trade truth for calm',
          symbolicCharge: 'a civic room designed to soften language until responsibility disappears',
          conflictUse: 'private negotiations keep collapsing into accusations that belong in public'
        },
        secondary: {
          name: 'the flood memorial crypt beneath Saint Varin church',
          sensory: 'cold limestone, candle smoke, varnish over damp names',
          socialSignal: 'mourning is choreographed here so that blame never reaches the living officials',
          symbolicCharge: 'the dead are remembered through inscriptions edited by the same people who failed them',
          conflictUse: 'witness testimony becomes unbearable once spoken directly among the names of the lost'
        }
      },
      scenes: {
        setup: [
          {
            title: 'Memorial supper recording',
            introduction: 'At her brother\'s memorial supper, Mara hears a hidden recording tucked inside a borrowed prayer book.',
            development: 'The message points toward one erased witness statement and a ledger that should not exist anymore.',
            conflict: 'Mara needs Iona\'s help immediately, but Iona refuses to move without proof that will survive the town hall.',
            resolution: 'They agree to meet at dawn inside the sealed mediation office before the deputy mayor can collect the archive keys.',
            stateChange: 'grief shifts from private mourning into a timed investigation',
            actionGoal: 'secure the recording and identify the file number mentioned in it',
            actionObstacle: 'family members keep interrupting every attempt to name what the voice implies',
            eventTrigger: 'the recording ends with Mara\'s brother naming Lucian before the tape cuts off',
            eventImpact: 'the memorial becomes evidence instead of closure',
            payoff: 'Mara can no longer pretend the death belongs only to the past'
          }
        ],
        escalation: [
          {
            title: 'Archive window without signatures',
            introduction: 'Inside the mediation office, Mara and Iona find claims approved for the dead and rejected for the living.',
            development: 'Lucian arrives with coffee, condolences, and a rewritten story about emergency discretion.',
            conflict: 'Iona wants to copy the ledger quietly, while Mara wants to confront Lucian before he can recode the files again.',
            resolution: 'They steal only three photographed pages and leave knowing Lucian saw the flash reflection in the cabinet glass.',
            stateChange: 'the lie becomes documentable, and therefore more dangerous',
            actionGoal: 'extract enough records to prove the compensation pattern is deliberate',
            actionObstacle: 'the archive software now mirrors paper files only after political approval',
            eventTrigger: 'one photographed page carries Mara\'s mother\'s signature beneath a false evacuation report',
            eventImpact: 'the investigation now threatens the family as much as the institution',
            payoff: 'Mara loses the comfort of treating her mother as untouched by the fraud'
          }
        ],
        revelation: [
          {
            title: 'Names beneath the memorial varnish',
            introduction: 'In the church crypt, Iona reveals that Mara\'s brother planned to testify during the annual flood commemoration.',
            development: 'The plaques show corrected dates that match the forged ledger rather than the actual deaths.',
            conflict: 'Mara realizes public exposure will erase the pension her mother depends on, while silence will erase her brother completely.',
            resolution: 'She asks Iona to stand beside her publicly, even if it means both families lose protection.',
            stateChange: 'the truth stops being archival and becomes a shared moral choice',
            actionGoal: 'find a form of testimony that cannot be dismissed as private grief',
            actionObstacle: 'every valid witness is tied to the town through debt, salary, or kinship',
            eventTrigger: 'the memorial plaque for Mara\'s brother lists a death date that predates the night he called her',
            eventImpact: 'forgery turns from suspicion into undeniable chronology',
            payoff: 'the case becomes inseparable from the commemoration ceremony'
          }
        ],
        culmination: [
          {
            title: 'Commemoration ledger reading',
            introduction: 'During the public flood ceremony, Mara interrupts the scripted prayer and reads from the photographed ledger pages.',
            development: 'Lucian orders the microphone cut, but Iona starts naming the missing witnesses from memory.',
            conflict: 'Mara must decide whether to stop before her mother is implicated or finish the testimony in full view of the town.',
            resolution: 'She finishes reading and lets the silence after the final name condemn the room.',
            stateChange: 'the town loses its protective story even though no immediate justice follows',
            actionGoal: 'force the lie into a setting where it cannot be quietly revised afterward',
            actionObstacle: 'the ceremony is choreographed to make dissent look like sacrilege',
            eventTrigger: 'Mara reaches the line proving that relief money was routed through Lucian\'s family company',
            eventImpact: 'grief becomes accusation before the whole town',
            payoff: 'the truth survives, but so does the cost of having spoken it'
          }
        ]
      },
      constraints: {
        institutionName: 'the Cernav Mediation Office',
        plotObject: 'the flood compensation ledger',
        motif: 'rain-stained witness signatures',
        worldRule: 'Every flood-district compensation claim must pass through the mediation office before it reaches the court archive.',
        worldCost: 'Any family that challenges an approved claim loses access to emergency stipends and public legal aid.',
        secondaryRule: 'Memorial plaques can be amended only when two living witnesses testify together in public.',
        actionLimitation: 'Mara cannot accuse the town hall without exposing her mother and Iona to the same hearing.',
        conflictOutput: 'bureaucratic delay turns each act of mourning into a negotiation over who gets to keep dignity',
        visibleSymptom: 'files return with fresh signatures but older dates, as if grief itself were rewritten overnight',
        stakes: 'her brother\'s last testimony, her mother\'s survival, and the town\'s false innocence'
      }
    }
  },
  {
    bookId: 'qa-detective-river',
    profile: 'detective-police',
    title: 'The River Knows First',
    brief: 'A homicide inspector suspects that a drowning ruled accidental hides a municipal murder and a police cover-up.',
    workForm: 'novelette',
    chapterCount: 4,
    sceneDensity: 'high',
    vision: {
      storySummary: 'Inspector Daria Muntean reopens a river drowning that the county police marked accidental, only to find tide logs, surveillance gaps, and witness transfers pointing back to a redevelopment contract. Diver-journalist Teo Sava helps her track the physical evidence while precinct chief Pavel Orban turns procedure into a moving wall designed to exhaust the case.',
      storyQuestion: 'Can Daria prove murder before procedure itself is used to wash the evidence clean?',
      dilemma: 'Obey the chain of command and lose the victim forever, or break protocol and prove the station protected the killing.',
      themeQuestion: 'What remains of justice when institutions become experts at making truth look administrative?',
      themeStatement: 'Procedure stops protecting order the moment it is weaponized against the facts it claims to preserve.',
      poleA: 'order-through-procedure',
      poleB: 'truth-through-breach',
      characters: {
        protagonist: {
          name: 'Daria Muntean',
          role: 'homicide inspector with a reputation for airtight reports',
          publicGoal: 'prove that the drowning victim was killed before he entered the river lock',
          hiddenNeed: 'accept that lawful procedure can become the crime\'s most reliable accomplice',
          fear: 'discovering that her own precinct archived the decisive evidence',
          contradiction: 'forensic in method, furious when facts are treated as etiquette',
          entryBelief: 'if she follows procedure closely enough, the truth will eventually surface',
          exitBelief: 'evidence survives only when someone refuses the procedure designed to neutralize it',
          turningInsight: 'the cover-up is not separate from the institution; it is how the institution currently functions'
        },
        counterpart: {
          name: 'Teo Sava',
          role: 'river diver turned local investigations reporter',
          publicGoal: 'locate the missing lock-camera drive before it is sold as scrap',
          hiddenNeed: 'stop mistaking cynicism for immunity',
          fear: 'being forced back into the river under orders from the same precinct he no longer trusts',
          contradiction: 'reckless in the field, exacting with physical evidence'
        },
        pressure: {
          name: 'Pavel Orban',
          role: 'precinct chief tied to the riverfront redevelopment board',
          publicGoal: 'close the file before the mayor signs the lock privatization deal',
          hiddenNeed: 'believe that preserving departmental stability still counts as public service',
          fear: 'a chain-of-custody break that points directly to his desk',
          contradiction: 'measured in speech, brutal in procedural timing'
        }
      },
      locations: {
        primary: {
          name: 'the river evidence hangar beside Lock Six',
          sensory: 'diesel sheen, wet rope, fluorescent glare on metal trays',
          socialSignal: 'everyone speaks in clipped inventory terms because the room only respects what can be tagged',
          symbolicCharge: 'a warehouse where facts are stored just long enough to be reassigned',
          conflictUse: 'physical traces keep resisting the official story each time they are catalogued'
        },
        secondary: {
          name: 'the abandoned sluice control room above the spillway',
          sensory: 'iron rust, mossed concrete, drowned electrical hum',
          socialSignal: 'old municipal power lingers here in equipment no one admits still works',
          symbolicCharge: 'the city\'s hidden mechanism for deciding what gets flushed away',
          conflictUse: 'a confrontation here makes institutional sabotage feel material rather than abstract'
        }
      },
      scenes: {
        setup: [
          {
            title: 'Autopsy against the report',
            introduction: 'Daria watches the river autopsy and notices blunt-force trauma hidden beneath water damage.',
            development: 'The medical examiner lowers his voice when he mentions a missing evidence bag logged the night before.',
            conflict: 'Daria needs the missing bag and the lock-camera footage, but Pavel insists the drowning is already administratively closed.',
            resolution: 'Teo offers her an off-record copy of tide maintenance logs that should not match the official timeline.',
            stateChange: 'the accidental drowning becomes a timed contradiction',
            actionGoal: 'preserve the physical inconsistency before it is corrected in the paperwork',
            actionObstacle: 'the precinct has already reassigned the scene file to property damage review',
            eventTrigger: 'the body shows wrist abrasions inconsistent with drifting debris',
            eventImpact: 'cause-of-death certainty is replaced by a procedural hole',
            payoff: 'Daria has enough doubt to justify disobedience'
          }
        ],
        escalation: [
          {
            title: 'Camera gap at Lock Six',
            introduction: 'In the evidence hangar, Daria and Teo trace the victim\'s last route through broken camera timestamps.',
            development: 'The footage gap lines up exactly with a maintenance override signed by Pavel\'s deputy.',
            conflict: 'Teo wants to publish immediately, while Daria still needs proof that the camera gap conceals homicide rather than corruption alone.',
            resolution: 'They identify a stolen drive case tagged as scrap and follow it toward the abandoned control room.',
            stateChange: 'administrative negligence hardens into coordinated concealment',
            actionGoal: 'connect the missing footage to a human decision rather than a technical accident',
            actionObstacle: 'every request for the raw server logs pings Pavel before it reaches records',
            eventTrigger: 'a duplicate maintenance form appears with two different timestamps',
            eventImpact: 'chain-of-custody becomes the crime scene',
            payoff: 'Daria now knows the cover-up has a clock and a route'
          }
        ],
        revelation: [
          {
            title: 'Diversion beneath the spillway',
            introduction: 'At the abandoned control room, they recover the drive case and a blood-marked retaining bolt.',
            development: 'Teo realizes the victim was killed during a meeting about the lock privatization signatures.',
            conflict: 'Daria must decide whether to log the evidence through Pavel\'s system or leak it to the prosecutor first.',
            resolution: 'She copies the drive, then files the bolt officially so the precinct cannot deny it existed.',
            stateChange: 'the investigation turns from hidden search into institutional showdown',
            actionGoal: 'separate proof of murder from the police pathway designed to bury it',
            actionObstacle: 'the only lawful reporting channel leads back to Pavel\'s office',
            eventTrigger: 'the recovered drive contains muted footage of the victim arriving with the deputy mayor alive',
            eventImpact: 'murder, not drowning, becomes the central fact',
            payoff: 'Daria can now accuse the precinct itself of obstruction'
          }
        ],
        culmination: [
          {
            title: 'Briefing room breach',
            introduction: 'During the precinct briefing, Daria projects the recovered footage before Pavel can suspend her.',
            development: 'Teo streams the room live while officers realize the cover-up reaches beyond one report.',
            conflict: 'Daria can still frame the scandal as a deputy\'s mistake or name Pavel as the architect of the concealment.',
            resolution: 'She names him and files the footage directly to the prosecutor while the live stream continues.',
            stateChange: 'the case survives because the institution loses control of its own narrative',
            actionGoal: 'move the evidence faster than the suspension order',
            actionObstacle: 'the briefing room was built to keep testimony internal and deniable',
            eventTrigger: 'the footage freezes on Pavel entering the lock corridor minutes after the murder',
            eventImpact: 'command authority becomes visible complicity',
            payoff: 'the victim finally receives a case worthy of the facts'
          }
        ]
      },
      constraints: {
        institutionName: 'County Precinct South',
        plotObject: 'the missing lock-camera drive',
        motif: 'watermarked evidence tags',
        worldRule: 'Any river death inside the redevelopment corridor is reviewed first by the precinct and only later by the civil prosecutor.',
        worldCost: 'Procedural errors let the redevelopment board void testimony and delay charges indefinitely.',
        secondaryRule: 'Maintenance overrides can be audited only if their physical hardware is recovered from the lock site.',
        actionLimitation: 'Daria cannot move the evidence outside the precinct without committing the very breach Pavel is waiting to punish.',
        conflictOutput: 'every lawful request alerts the people most interested in erasing the answer',
        visibleSymptom: 'logs are complete on paper but physically impossible when matched against the river timing',
        stakes: 'the victim\'s true cause of death, the integrity of the precinct, and the city contract tied to the riverfront'
      }
    }
  },
  {
    bookId: 'qa-scifi-orbit',
    profile: 'science-fiction',
    title: 'Orbit of the Unreturned',
    brief: 'A memory architect learns that her orbital station stays peaceful by deleting politically inconvenient memories.',
    workForm: 'novelette',
    chapterCount: 4,
    sceneDensity: 'high',
    vision: {
      storySummary: 'Memory architect Elian Quill discovers that the orbital station Nacre keeps social harmony by erasing witness memory whenever dissent threatens the station council. With shuttle pilot Yara Sen she traces a series of benign technical anomalies back to a hidden archive where entire political decisions have been amputated from collective recall.',
      storyQuestion: 'Can Elian restore the station\'s memory without destroying the fragile peace built on forgetting?',
      dilemma: 'Preserve a stable station that survives by selective erasure, or return memory to the people who may tear it apart once they remember what was done to them.',
      themeQuestion: 'Is peace still peace when consent depends on not remembering the price?',
      themeStatement: 'Safety purchased through engineered forgetting is only a delayed form of coercion.',
      poleA: 'stability-through-erasure',
      poleB: 'freedom-through-memory',
      characters: {
        protagonist: {
          name: 'Elian Quill',
          role: 'memory architect responsible for civic recall calibrations on Nacre Station',
          publicGoal: 'trace the corrupted recall patterns and restore the missing vote archive',
          hiddenNeed: 'accept that elegant systems can become moral anesthesia',
          fear: 'learning that she designed part of the erasure protocol herself',
          contradiction: 'technically serene, ethically combustible once certainty breaks',
          entryBelief: 'stable systems prevent larger human harm',
          exitBelief: 'a system that edits consent cannot claim legitimacy even if it remains efficient',
          turningInsight: 'peace without memory turns citizens into well-maintained evidence gaps'
        },
        counterpart: {
          name: 'Yara Sen',
          role: 'maintenance shuttle pilot who remembers glitches others forget',
          publicGoal: 'recover the phantom cargo crate routed through the sealed archive ring',
          hiddenNeed: 'stop living as if surviving the station is the same as belonging to it',
          fear: 'being designated unstable and erased next',
          contradiction: 'defiant in crisis, emotionally evasive in trust'
        },
        pressure: {
          name: 'Director Cael Oris',
          role: 'station council chair and guardian of the memory pacification protocol',
          publicGoal: 'complete the next scheduled memory smoothing before unrest reaches the habitat spokes',
          hiddenNeed: 'believe that managed forgetting saved more lives than it stole',
          fear: 'a station-wide memory return that reveals how often governance already crossed into violence',
          contradiction: 'soft-spoken, mathematically merciless'
        }
      },
      locations: {
        primary: {
          name: 'the mnemonic orchard ring',
          sensory: 'ionized citrus, coolant mist, glass leaves pulsing with archived light',
          socialSignal: 'citizens come here to rehearse approved memories in carefully moderated quiet',
          symbolicCharge: 'an engineered garden where recollection has become a civic utility',
          conflictUse: 'intimacy keeps colliding with the fact that every remembered detail may be edited'
        },
        secondary: {
          name: 'the sealed archive airlock beneath Council Spoke Three',
          sensory: 'static-dry metal, cryogenic dust, dormant server fans',
          socialSignal: 'only governance enters here with official reason, which is why truth feels contraband',
          symbolicCharge: 'the station\'s missing conscience locked behind procedural sterility',
          conflictUse: 'once opened, the room turns abstract ethics into recoverable names and files'
        }
      },
      scenes: {
        setup: [
          {
            title: 'Anomaly inside the orchard',
            introduction: 'During a routine recalibration in the mnemonic orchard, Elian hears a protest chant no one else remembers uttering.',
            development: 'Yara identifies the chant as dockside slang from a vanished labor vote.',
            conflict: 'Elian wants to isolate the anomaly quietly, while Yara insists anomalies only survive if someone acts before the system rebalances.',
            resolution: 'They trace the chant to a recall shard marked as botanical maintenance metadata.',
            stateChange: 'a harmless system glitch becomes political evidence',
            actionGoal: 'preserve the anomalous memory trace before the orchard flushes it',
            actionObstacle: 'the civic recall system auto-corrects destabilizing patterns every twelve minutes',
            eventTrigger: 'the shard contains voices naming a vote that station records say never occurred',
            eventImpact: 'memory corruption becomes proof of historical deletion',
            payoff: 'Elian can no longer treat the problem as technical noise'
          }
        ],
        escalation: [
          {
            title: 'Cargo route for the vanished vote',
            introduction: 'Yara flies Elian through maintenance lanes no civilian archivist is meant to access.',
            development: 'They discover phantom cargo movements feeding a hidden archive airlock after every major policy dispute.',
            conflict: 'Elian still hopes the council preserved the memories for lawful quarantine, while Yara assumes the archive is a burial chamber for dissent.',
            resolution: 'A council drone nearly traps them, forcing Elian to copy partial manifests rather than the whole route map.',
            stateChange: 'the station reveals a physical pathway for forgetting',
            actionGoal: 'locate the archive ring without triggering a council lockdown',
            actionObstacle: 'the shuttle navigation grid reassigns routes whenever forbidden sectors are approached',
            eventTrigger: 'one phantom crate is tagged with Elian\'s own authorization signature from two years earlier',
            eventImpact: 'the conspiracy reaches into Elian\'s professional past',
            payoff: 'technical distance gives way to personal implication'
          }
        ],
        revelation: [
          {
            title: 'The room of amputated recall',
            introduction: 'Inside the sealed archive airlock, they uncover memory lattices containing erased debates, strikes, and citizen testimonies.',
            development: 'Elian sees that her old optimization patch became the core of the pacification protocol.',
            conflict: 'Restoring memory station-wide could trigger panic and secondary casualties, yet leaving the archive hidden means permanent counterfeit consent.',
            resolution: 'Elian prepares a targeted broadcast that returns the erased council vote first, not the entire archive at once.',
            stateChange: 'the ethical problem becomes a timed release rather than a discovery alone',
            actionGoal: 'design a restoration sequence that exposes the lie without collapsing life-support trust',
            actionObstacle: 'the archive is wired to purge itself if council override detects mass upload behavior',
            eventTrigger: 'the recovered vote proves the station once rejected the pacification protocol outright',
            eventImpact: 'the council\'s legitimacy evaporates in one file',
            payoff: 'Elian finally knows what truth must be returned first'
          }
        ],
        culmination: [
          {
            title: 'Broadcast of the unreturned',
            introduction: 'As the council begins a fresh memory smoothing cycle, Elian hijacks the orchard display lattice.',
            development: 'Yara reroutes power long enough for the erased vote and witness testimony to bloom across the habitat spokes.',
            conflict: 'Elian can still narrow the release to the council alone or let every resident recover the same missing decision at once.',
            resolution: 'She releases the memory to everyone and lets the station face its first honest unrest in years.',
            stateChange: 'peace fractures, but consent re-enters the political life of the station',
            actionGoal: 'restore shared memory faster than the council can trigger another wipe',
            actionObstacle: 'the pacification cycle treats truth itself as a destabilizing contaminant',
            eventTrigger: 'citizens across the station begin repeating the erased vote count aloud',
            eventImpact: 'public memory becomes impossible to confiscate again in silence',
            payoff: 'the station survives only by surrendering its false innocence'
          }
        ]
      },
      constraints: {
        institutionName: 'Nacre Station Council',
        plotObject: 'the erased council vote archive',
        motif: 'orchard leaves flickering with absent voices',
        worldRule: 'The station\'s peace index allows the council to authorize memory smoothing whenever dissent crosses a quantified risk threshold.',
        worldCost: 'Every smoothing cycle deletes witness continuity, making future consent less meaningful and future resistance harder to prove.',
        secondaryRule: 'Hidden archives can be opened only through paired biometric authorization from architecture and flight systems.',
        actionLimitation: 'Elian cannot expose the protocol without using the very infrastructure built to overwrite public recall.',
        conflictOutput: 'technical maintenance becomes indistinguishable from political censorship',
        visibleSymptom: 'citizens remember the emotional aftermath of conflict but not the decisions that created it',
        stakes: 'the station\'s political legitimacy, Elian\'s own complicity, and the residents\' right to remember'
      }
    }
  },
  {
    bookId: 'qa-fantasy-ash',
    profile: 'fantasy',
    title: 'The Ash Keeps Your Name',
    brief: 'An oath-breaker heir returns to a cursed valley and must expose the vow that gave her family power.',
    workForm: 'novelette',
    chapterCount: 4,
    sceneDensity: 'high',
    vision: {
      storySummary: 'Exiled heir Neris Vale returns to the ash valley of Drovna when the family oath-fires begin speaking the names of the dead aloud. Guided by oath-keeper Brother Caelan, she learns that her dynasty\'s power comes from a vow furnace that burns witness memories into political obedience, and breaking it will strip the valley of the same protection that kept the winter spirits out.',
      storyQuestion: 'Can Neris free the valley from her family\'s vow without leaving it defenseless against the cost the vow once contained?',
      dilemma: 'Keep the inherited oath that protects the valley through coerced obedience, or break it and let both truth and danger return together.',
      themeQuestion: 'Is inherited protection still noble once it depends on ritualized theft from the people it claims to save?',
      themeStatement: 'Redemption begins when inherited power is treated as a debt to be relinquished rather than a right to be managed.',
      poleA: 'protection-through-oath',
      poleB: 'freedom-through-renunciation',
      characters: {
        protagonist: {
          name: 'Neris Vale',
          role: 'oath-breaker heir raised to inherit the valley\'s furnace rites',
          publicGoal: 'learn the true wording of the family vow and sever it before the valley chooses another heir',
          hiddenNeed: 'accept that returning home requires losing the shelter her lineage once guaranteed',
          fear: 'becoming the next keeper of a system she already fled once in shame',
          contradiction: 'ceremonially skilled yet distrustful of every sacred form',
          entryBelief: 'the family oath can be repaired without being destroyed',
          exitBelief: 'some inheritances become just only when they are surrendered',
          turningInsight: 'the valley was never protected from cost; it was merely trained to pay it quietly'
        },
        counterpart: {
          name: 'Brother Caelan Vey',
          role: 'disgraced oath-keeper who preserved forbidden valley chronicles',
          publicGoal: 'guide Neris to the furnace catacombs before the regent seals them for another generation',
          hiddenNeed: 'stop mistaking custodianship for moral innocence',
          fear: 'watching Neris repeat the same compromise he once blessed',
          contradiction: 'gentle in manner, relentless in doctrinal clarity'
        },
        pressure: {
          name: 'Regent Maeron Vale',
          role: 'Neris\'s uncle and temporary ruler of the valley',
          publicGoal: 'bind a successor to the furnace before winter spirits test the mountain wards',
          hiddenNeed: 'believe that domination still counts as protection if the valley survives',
          fear: 'a public naming of the children consumed by the vow fires',
          contradiction: 'paternal in ritual, predatory in governance'
        }
      },
      locations: {
        primary: {
          name: 'the ash terrace above Drovna village',
          sensory: 'cedar smoke, warm soot under snowlight, bells muffled by volcanic dust',
          socialSignal: 'every greeting sounds half like welcome and half like ritual surveillance',
          symbolicCharge: 'a homeland that records lineage in the same ash that settles on the living',
          conflictUse: 'belonging feels real here only when obedience remains visible'
        },
        secondary: {
          name: 'the vow furnace catacombs',
          sensory: 'ember breath, iron prayer chains, old ash turning slick under candle wax',
          socialSignal: 'power here speaks in liturgy because law and sacrifice were forged together',
          symbolicCharge: 'the family\'s hidden engine where legitimacy is literally burned into permanence',
          conflictUse: 'secrets become material once spoken beside the furnace that consumed them'
        }
      },
      scenes: {
        setup: [
          {
            title: 'Ash speaks the forbidden name',
            introduction: 'Neris returns to the terrace as the oath-fires begin whispering the names of children no one admits were taken.',
            development: 'Brother Caelan shows her a chronicle leaf spared from the furnace generations earlier.',
            conflict: 'Neris wants proof the whispers are more than grief-magic, while Caelan insists the valley is already warning her directly.',
            resolution: 'They descend toward the catacombs before Maeron can bind her publicly at dusk.',
            stateChange: 'homecoming turns into a race against ritual succession',
            actionGoal: 'verify that the speaking ash is tied to the original family vow',
            actionObstacle: 'the valley treats any doubt about the oath as treason against winter survival',
            eventTrigger: 'the ash names Neris\'s younger sister, long said to have died of fever',
            eventImpact: 'family legend breaks open into accusation',
            payoff: 'Neris must face the possibility that exile protected her from knowing the truth'
          }
        ],
        escalation: [
          {
            title: 'Chronicle beneath the chains',
            introduction: 'In the catacombs, Caelan reveals furnace records listing each life traded into the mountain wards.',
            development: 'The records prove the vow consumed memory as well as blood, leaving entire households obedient but incomplete.',
            conflict: 'Neris wants to expose Maeron immediately, yet doing so before the warding rite could leave the valley open to the winter breach.',
            resolution: 'She steals the regent\'s binding seal instead, buying time but alerting him to the betrayal.',
            stateChange: 'the oath becomes both a crime and a necessary shield',
            actionGoal: 'find a path to truth that does not abandon the valley overnight',
            actionObstacle: 'the only people who know the full rite are the ones invested in preserving it',
            eventTrigger: 'the records show Neris\'s mother volunteered the sister\'s memory to preserve the wards',
            eventImpact: 'inheritance becomes personal wound rather than abstract lineage guilt',
            payoff: 'Neris can no longer separate public duty from private violation'
          }
        ],
        revelation: [
          {
            title: 'Ward breach at the mountain gate',
            introduction: 'A winter spirit tests the valley ward while Maeron accuses Neris of inviting the breach through disobedience.',
            development: 'Neris realizes the ward responds more strongly to named truth than to repeated liturgy.',
            conflict: 'If she reveals the rite publicly, panic may shatter the valley before she can reforge the protection honestly.',
            resolution: 'She decides to break the binding ceremony and speak the hidden names during the next warding chant.',
            stateChange: 'renunciation becomes the only form of leadership left to her',
            actionGoal: 'replace coerced obedience with a protection the valley chooses knowingly',
            actionObstacle: 'Maeron controls the ceremony platform, the guards, and the valley\'s fear',
            eventTrigger: 'the winter spirit retreats only when Neris names one of the forgotten dead aloud',
            eventImpact: 'truth reveals itself as the missing element in the valley\'s defense',
            payoff: 'Neris finally knows what must be sacrificed and what must be preserved'
          }
        ],
        culmination: [
          {
            title: 'The furnace broken in public',
            introduction: 'During the valley rite, Neris interrupts Maeron\'s succession oath with the stolen seal and the hidden chronicle.',
            development: 'She names the dead, breaks the seal, and forces the furnace to release the stored memories as ash-light across the terrace.',
            conflict: 'The valley must choose whether to stand in fear with Maeron or bear the truth and rebuild the wards differently.',
            resolution: 'Maeron falls with the collapsing rite, and the valley joins Neris in a new chant built on remembered names rather than erased ones.',
            stateChange: 'power changes from inherited command to shared burden',
            actionGoal: 'destroy the coercive heart of the oath without abandoning the valley to the winter breach',
            actionObstacle: 'the old rite promises immediate safety while the new one offers only costly possibility',
            eventTrigger: 'the furnace spills the trapped names in a voice all of Drovna can hear',
            eventImpact: 'the valley witnesses the true cost of its protection at once',
            payoff: 'Neris earns belonging only by giving up the right to rule as her family did'
          }
        ]
      },
      constraints: {
        institutionName: 'House Vale',
        plotObject: 'the original vow chronicle',
        motif: 'ash carrying unspoken names',
        worldRule: 'The valley wards hold only while an heir keeps the furnace vow active through lineage-bound ritual obedience.',
        worldCost: 'Each renewal burns away witness memory from one household chosen by the ruling house.',
        secondaryRule: 'A ward can be reforged through named communal consent, but only if the hidden dead are spoken publicly first.',
        actionLimitation: 'Neris cannot break the oath in secret because the valley must witness and accept the cost together.',
        conflictOutput: 'every promise of protection arrives already entangled with control, debt, and ancestral shame',
        visibleSymptom: 'ash drifts indoors and whispers names the ruling house refuses to acknowledge',
        stakes: 'the valley\'s survival, the memory of the consumed dead, and Neris\'s right to belong without domination'
      }
    }
  },
  {
    bookId: 'qa-romance-margins',
    profile: 'romance-relational',
    title: 'Margins of the Heart',
    brief: 'An editor inherits a print studio and must rebuild it with the designer who once left both the work and her behind.',
    workForm: 'novelette',
    chapterCount: 4,
    sceneDensity: 'high',
    vision: {
      storySummary: 'Editor Leora Kestrel inherits a failing letterpress studio and can save it only by working with designer Talia Voss, the woman who left both the business and their relationship unfinished three years earlier. Estate manager Cassia Mercer gives them one season to deliver a landmark art-book commission, forcing every practical decision to reopen the tenderness and betrayal buried in the studio itself.',
      storyQuestion: 'Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?',
      dilemma: 'Protect the commission by staying emotionally procedural, or risk the studio\'s future by telling the truth their partnership was built to avoid.',
      themeQuestion: 'Is intimacy a threat to autonomy, or the form that honest autonomy eventually takes?',
      themeStatement: 'Partnership becomes real only when usefulness stops impersonating emotional safety.',
      poleA: 'competence-as-shelter',
      poleB: 'honesty-as-risk',
      characters: {
        protagonist: {
          name: 'Leora Kestrel',
          role: 'editor-restorer who inherited the studio and its unfinished debts',
          publicGoal: 'deliver the museum art-book commission before the winter launch deadline',
          hiddenNeed: 'admit that precision has become her preferred disguise for abandonment fear',
          fear: 'watching Talia leave again once the work is finally complete',
          contradiction: 'warmly attentive to details, defensively cold when care becomes visible',
          entryBelief: 'competence is safer than emotional dependence',
          exitBelief: 'shared risk creates a truer form of security than controlled distance',
          turningInsight: 'the studio survives only if the people inside it stop pretending usefulness is neutral'
        },
        counterpart: {
          name: 'Talia Voss',
          role: 'book designer whose departure froze the studio in half-finished trust',
          publicGoal: 'finish the commission well enough to prove she is no longer the person who fled',
          hiddenNeed: 'replace apology-by-labor with spoken accountability',
          fear: 'discovering that repair is only another way to prolong Leora\'s resentment',
          contradiction: 'flirtatious under pressure, painfully indirect about guilt'
        },
        pressure: {
          name: 'Cassia Mercer',
          role: 'estate manager who controls the inheritance terms and the launch calendar',
          publicGoal: 'keep the commission alive long enough to sell the studio at a premium if they fail',
          hiddenNeed: 'treat emotional complications as inefficiencies she can schedule around',
          fear: 'a public collapse that lowers the estate value',
          contradiction: 'generous in resources, ruthless in deadlines'
        }
      },
      locations: {
        primary: {
          name: 'the inherited letterpress studio on Brindle Lane',
          sensory: 'ink oil, paper dust, hot metal type, winter air trapped in skylight glass',
          socialSignal: 'work replaces confession here because every surface carries the memory of collaboration',
          symbolicCharge: 'a place where touch leaves visible marks and every correction shows',
          conflictUse: 'routine tasks keep exposing the intimacy both women call professional'
        },
        secondary: {
          name: 'the riverside paper warehouse leased for the launch',
          sensory: 'cold rope, pallet wood, citrus cleaner, damp cardboard',
          socialSignal: 'public ambition feels possible here only if the private partnership holds together',
          symbolicCharge: 'a future-facing space that keeps demanding an honest version of the past',
          conflictUse: 'the launch site turns private hesitation into visible consequence'
        }
      },
      scenes: {
        setup: [
          {
            title: 'Inventory with old annotations',
            introduction: 'On the first day back in the studio, Leora and Talia sort inherited forms and discover a proof set covered in both their handwritten notes.',
            development: 'Cassia announces the launch deadline and makes their joint contract unavoidable.',
            conflict: 'Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived.',
            resolution: 'They agree to share the commission room but not discuss why Talia left until after the first dummy book is approved.',
            stateChange: 'the studio moves from inheritance problem to emotional workplace',
            actionGoal: 'stabilize the commission schedule before old hurt destabilizes the work',
            actionObstacle: 'every useful object in the room still belongs to their unfinished history',
            eventTrigger: 'the annotated proof reveals a page Talia once designed around Leora\'s private dedication line',
            eventImpact: 'the job starts carrying evidence of love rather than just shared labor',
            payoff: 'professional collaboration becomes impossible to keep emotionally neutral'
          }
        ],
        escalation: [
          {
            title: 'The misprinted folio night',
            introduction: 'A batch of folios misprints during an overnight press run, forcing them into the same exhausted shift.',
            development: 'Talia admits she left after receiving an offer that promised security she never trusted herself to ask Leora for.',
            conflict: 'Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission.',
            resolution: 'They salvage the run together, but the repaired sheets now carry a faint doubled margin they decide to keep.',
            stateChange: 'the work begins storing their conflict instead of hiding it',
            actionGoal: 'save the damaged folios without destroying the schedule',
            actionObstacle: 'fatigue makes every careful sentence sound either too sharp or too intimate',
            eventTrigger: 'the misprint mirrors the exact margin shift from the night Talia left',
            eventImpact: 'the studio forces the past into the present workload',
            payoff: 'repair becomes emotionally riskier than failure'
          }
        ],
        revelation: [
          {
            title: 'Warehouse mock-up and public eyes',
            introduction: 'At the warehouse mock-up, a museum curator mistakes them for a long-established couple and thanks them for working so seamlessly together.',
            development: 'The public misreading makes both women realize how much of their intimacy remains visible even after the rupture.',
            conflict: 'Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence.',
            resolution: 'She asks Talia to stay after the mock-up and tell the full story of the departure without turning it into logistics.',
            stateChange: 'what they feel becomes harder to frame as accidental residue',
            actionGoal: 'decide whether the launch should preserve the partnership or simply conclude it gracefully',
            actionObstacle: 'public success keeps rewarding them for the same evasions that nearly ruined them',
            eventTrigger: 'the curator chooses the doubled-margin proof as the book\'s defining design feature',
            eventImpact: 'their most damaged page becomes the commission\'s emotional signature',
            payoff: 'the future of the studio becomes inseparable from whether they can speak honestly'
          }
        ],
        culmination: [
          {
            title: 'Launch with the unfinished dedication',
            introduction: 'On launch night, Leora inserts the once-abandoned dedication page back into the finished edition.',
            development: 'Talia sees the page only after the first public copy is opened in front of the crowd.',
            conflict: 'Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability.',
            resolution: 'She tells Talia the page stayed because the studio, and the relationship, were worth rebuilding in full view.',
            stateChange: 'their bond shifts from guarded usefulness to acknowledged reciprocity',
            actionGoal: 'finish the commission without sacrificing the truth that now gives it meaning',
            actionObstacle: 'public celebration offers an easy way to hide inside performance instead of confession',
            eventTrigger: 'the dedication names the year Talia left and the future Leora still wants',
            eventImpact: 'the launch becomes confession as much as success',
            payoff: 'the partnership survives because honesty finally becomes part of the work'
          }
        ]
      },
      constraints: {
        institutionName: 'the Mercer Estate',
        plotObject: 'the doubled-margin proof set',
        motif: 'handwritten notes in the book margins',
        worldRule: 'The inheritance keeps the studio open only if the museum commission is delivered on schedule and signed by both women.',
        worldCost: 'Any delay lets Cassia liquidate the equipment and end the studio as a living workplace.',
        secondaryRule: 'The final edition may include one unscheduled page only if both lead signatories approve it before launch.',
        actionLimitation: 'Leora and Talia cannot protect the studio without working inside the same room and the same deadline pressure.',
        conflictOutput: 'shared labor turns every practical choice into a referendum on trust, apology, and future risk',
        visibleSymptom: 'the most beautiful pages are the ones where old corrections remain faintly visible beneath the new work',
        stakes: 'the studio\'s survival, the commission that could define both careers, and the possibility of loving honestly again'
      }
    }
  }
];

function describeCharacter(character) {
  return `${character.name} - ${character.role}; wants ${character.publicGoal}; needs ${character.hiddenNeed}; fears ${character.fear}.`;
}

function describeLocation(label, location) {
  return `${location.name} - ${label} space; sensory anchor: ${location.sensory}; conflict use: ${location.conflictUse}.`;
}

function describeScene(stage, scene) {
  return `${scene.title} - ${stage} movement; conflict: ${scene.conflict}; turn: ${scene.payoff}.`;
}

function buildConstraintLines(vision) {
  return [
    `Story summary: ${vision.storySummary}`,
    `World rule: ${vision.constraints.worldRule}`,
    `Cost: ${vision.constraints.worldCost}`,
    `Secondary rule: ${vision.constraints.secondaryRule}`,
    `Action limitation: ${vision.constraints.actionLimitation}`,
    `Stakes: ${vision.constraints.stakes}`
  ];
}

function hydrateQaBook(book) {
  return {
    ...book,
    storySummary: book.vision.storySummary,
    initialCharacters: [
      describeCharacter(book.vision.characters.protagonist),
      describeCharacter(book.vision.characters.counterpart),
      describeCharacter(book.vision.characters.pressure)
    ],
    initialLocations: [
      describeLocation('primary', book.vision.locations.primary),
      describeLocation('secondary', book.vision.locations.secondary)
    ],
    initialScenes: Object.entries(book.vision.scenes).flatMap(([stage, scenes]) => scenes.map((scene) => describeScene(stage, scene))),
    initialConstraints: buildConstraintLines(book.vision)
  };
}

export const QA_BOOKS = QA_BOOK_SEEDS.map(hydrateQaBook);
