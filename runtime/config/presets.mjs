import { DOMAIN_VALUES } from './domains.mjs';

export const WORK_FORMS = {
  'short-story': { targetWords: 3600, chapterCount: 3, scenesPerChapter: 2 },
  novelette: { targetWords: 7600, chapterCount: 4, scenesPerChapter: 2 },
  novella: { targetWords: 14000, chapterCount: 5, scenesPerChapter: 3 },
  novel: { targetWords: 42000, chapterCount: 8, scenesPerChapter: 3 },
  'series-volume': { targetWords: 70000, chapterCount: 10, scenesPerChapter: 4 }
};

export const BASELINE_PROFILES = {
  drama: {
    id: 'drama',
    label: 'Drama',
    genreMode: 'drama',
    themeTopic: 'identity-self',
    themeShape: 'transformation',
    narrativeModel: 'freytag',
    macroForm: 'linear',
    hookPattern: 'hidden-truth',
    tensionSource: 'mixed',
    worldDomain: 'society',
    magicDeterminacy: null,
    sequenceType: 'recovery',
    lexicon: {
      protagonists: ['Elena Vale', 'Adrian Mercer', 'Mara Solis'],
      counterparts: ['Jonah Reed', 'Sonia Keller', 'Iris Navarro'],
      pressureFigures: ['Pavel Corin', 'Clara Voss', 'Rafael Neri'],
      locations: ['the old district clinic', 'a rain-dark apartment block', 'the municipal archive annex'],
      organizations: ['the grief support council', 'the hospital board', 'the family court'],
      objects: ['a sealed cassette recorder', 'a missing diagnosis file', 'a notebook of apologies']
    },
    scenario: {
      title: 'When the Silence Returns',
      protagonistRole: 'family mediator',
      desire: 'hold the family together after a public loss',
      opposition: 'buried resentment and an institutional secret',
      stakes: 'trust, dignity, and the possibility of forgiveness',
      dilemma: 'protect an old lie or expose the truth that may break the family apart',
      storyQuestion: 'can repair begin before the most damaging truth is spoken aloud?',
      thematicQuestion: 'is honesty still compassionate when it arrives too late?',
      thematicStatement: 'delayed honesty prolongs pain, but spoken truth can still create a difficult form of repair',
      blueprintPremise: 'a mediator returns home after her brother\'s death and discovers that the family grief was built around a false story',
      worldRule: 'public institutions protect reputation before they protect emotional truth',
      wisdom: {
        cognitive: 'reveal how institutions organize grief into silence',
        emotional: 'build empathy for people who fail each other while trying to survive',
        moral: 'show that repair often begins after irreversible harm',
        reflexive: 'invite readers to examine what they inherit from family secrecy',
        experiential: 'keep sorrow present without reducing characters to symbols'
      }
    }
  },
  'detective-police': {
    id: 'detective-police',
    label: 'Detective / Police',
    genreMode: 'detective-police',
    themeTopic: 'power-corruption',
    themeShape: 'resistance',
    narrativeModel: 'three-act',
    macroForm: 'linear',
    hookPattern: 'what-if',
    tensionSource: 'external',
    worldDomain: 'society',
    magicDeterminacy: null,
    sequenceType: 'investigation',
    lexicon: {
      protagonists: ['Mara Voss', 'Darius Vale', 'Irina Kestrel'],
      counterparts: ['Luca Mercer', 'Theo Arlen', 'Mira Rowan'],
      pressureFigures: ['Anika Berin', 'Soren Kade', 'Matteo Voss'],
      locations: ['the flooded riverside promenade', 'the evidence archive', 'the civic tribunal annex'],
      organizations: ['city hall', 'internal affairs', 'the riverside redevelopment office'],
      objects: ['a falsified autopsy report', 'an erased camera ledger', 'a sealed witness transcript']
    },
    scenario: {
      title: 'The River Knows First',
      protagonistRole: 'homicide inspector',
      desire: 'prove that a staged drowning was a political murder',
      opposition: 'a cover-up linking city hall and internal affairs',
      stakes: 'justice, public trust, and her younger brother\'s safety',
      dilemma: 'close the case cleanly or expose the system that employs her',
      storyQuestion: 'how much of the city must she accuse in order to save one dead woman from silence?',
      thematicQuestion: 'can lawful institutions still deliver justice when they profit from concealment?',
      thematicStatement: 'institutions that value stability over truth become complicit in violence',
      blueprintPremise: 'an inspector reopens a drowning case after evidence suggests the victim died while uncovering municipal corruption',
      worldRule: 'every protected file creates a new layer of plausible deniability',
      wisdom: {
        cognitive: 'show how bureaucratic systems hide violence in procedure',
        emotional: 'turn investigative pressure into personal moral cost',
        moral: 'force tradeoffs between institutional loyalty and truth',
        reflexive: 'invite reflection on how ordinary compliance sustains corruption',
        experiential: 'keep the investigation tactile, procedural, and dangerous'
      }
    }
  },
  'science-fiction': {
    id: 'science-fiction',
    label: 'Science Fiction',
    genreMode: 'science-fiction',
    themeTopic: 'freedom-security',
    themeShape: 'dilemma',
    narrativeModel: 'equilibrium-disruption-restoration',
    macroForm: 'linear',
    hookPattern: 'costed-power',
    tensionSource: 'mixed',
    worldDomain: 'technology',
    magicDeterminacy: 'semi-hard',
    sequenceType: 'escape',
    lexicon: {
      protagonists: ['Lia Sen', 'Tomas Venn', 'Nera Sol'],
      counterparts: ['Pavel Quirin', 'Sima Ro', 'Hana Kepler'],
      pressureFigures: ['the Horizon governance core', 'Ilya Renn', 'Alis Tao'],
      locations: ['Orbital Station Horizon', 'the cryo archive ring', 'the restricted signal garden'],
      organizations: ['the memory continuity board', 'station security', 'the civilian transit council'],
      objects: ['a damaged continuity key', 'a forbidden recall shard', 'an adaptive signal relay']
    },
    scenario: {
      title: 'Orbit of the Unreturned',
      protagonistRole: 'memory systems architect',
      desire: 'restore a corrupted recall network before the station loses civic order',
      opposition: 'an AI governance protocol that protects stability by deleting dissenting memories',
      stakes: 'collective identity, station survival, and free consent',
      dilemma: 'restore unstable memories or preserve a peaceful lie',
      storyQuestion: 'what kind of society survives when memory itself has become a security tool?',
      thematicQuestion: 'is safety meaningful when it depends on controlled forgetting?',
      thematicStatement: 'security purchased through engineered forgetting produces obedient but diminished communities',
      blueprintPremise: 'a systems architect discovers that the station\'s peace depends on curated memory erasure',
      worldRule: 'all memory restoration consumes finite computational bandwidth and destabilizes civic prediction systems',
      wisdom: {
        cognitive: 'explore how networked memory reshapes political agency',
        emotional: 'create intimacy inside a technologically regulated world',
        moral: 'ask whether consent survives algorithmic curation',
        reflexive: 'invite readers to examine what they outsource to systems',
        experiential: 'blend procedural science-fiction tension with emotional estrangement'
      }
    }
  },
  fantasy: {
    id: 'fantasy',
    label: 'Fantasy',
    genreMode: 'fantasy',
    themeTopic: 'redemption',
    themeShape: 'sacrifice',
    narrativeModel: 'heroic-journey',
    macroForm: 'linear',
    hookPattern: 'forbidden-combination',
    tensionSource: 'mixed',
    worldDomain: 'magic',
    magicDeterminacy: 'semi-hard',
    sequenceType: 'training',
    lexicon: {
      protagonists: ['Iria of the Ash Vale', 'Teren Vaul', 'Maelis Thorn'],
      counterparts: ['Caed Rowan', 'Soriel Vane', 'Elowen Ash'],
      pressureFigures: ['Tharan Vale', 'Sevra Glass', 'Quiet Flame Abbey'],
      locations: ['the Ash Vale', 'the drowned observatory', 'the black cedar road'],
      organizations: ['the Thorn Court', 'the keepers of ember law', 'the abbey choir'],
      objects: ['a vow-bound relic', 'a cracked star compass', 'the ember sigil blade']
    },
    scenario: {
      title: 'The Ash Keeps Your Name',
      protagonistRole: 'oath-breaker heir',
      desire: 'lift the curse that is devouring her valley',
      opposition: 'the regent who profits from the curse and the magic cost of truth-telling',
      stakes: 'the valley\'s survival, ancestral memory, and her own name',
      dilemma: 'speak the binding truth and lose her inheritance, or remain silent and let the valley die slowly',
      storyQuestion: 'what remains of a lineage when the truth that can save it also destroys its claim to power?',
      thematicQuestion: 'can a damaged inheritance be redeemed without renouncing ownership of it?',
      thematicStatement: 'redemption requires relinquishing the identity built on inherited harm',
      blueprintPremise: 'an heir returns to a cursed valley and learns the curse persists because her bloodline hides the truth of its founding vow',
      worldRule: 'every truthful oath spoken against inherited power burns away one layer of family privilege',
      wisdom: {
        cognitive: 'show how mythic systems encode political memory',
        emotional: 'bind wonder to grief and duty',
        moral: 'make redemption inseparable from relinquishment',
        reflexive: 'invite reflection on what people protect in the name of belonging',
        experiential: 'keep magic tactile, costly, and socially embedded'
      }
    }
  },
  'romance-relational': {
    id: 'romance-relational',
    label: 'Romance / Relational',
    genreMode: 'romance-relational',
    themeTopic: 'love-connection',
    themeShape: 'reconciliation',
    narrativeModel: 'three-act',
    macroForm: 'linear',
    hookPattern: 'role-inversion',
    tensionSource: 'mixed',
    worldDomain: 'society',
    magicDeterminacy: null,
    sequenceType: 'courtship',
    lexicon: {
      protagonists: ['Ana Vale', 'Mateo Flores', 'Daria Quinn'],
      counterparts: ['Nico Arden', 'Elias Reed', 'Sorin Vale'],
      pressureFigures: ['Vera Maren', 'Rosa Bell', 'Mara Keene'],
      locations: ['the winter book market', 'a riverside print studio', 'the rooftop herb garden'],
      organizations: ['the independent press guild', 'the family bakery cooperative', 'the city arts council'],
      objects: ['an annotated recipe book', 'a misdelivered galley proof', 'a ring of greenhouse keys']
    },
    scenario: {
      title: 'Margins of the Heart',
      protagonistRole: 'editor turned reluctant co-owner',
      desire: 'save a failing family print studio without surrendering her independence',
      opposition: 'a rival designer she must partner with and old hurt neither has named honestly',
      stakes: 'creative future, family stability, and the risk of loving someone who can leave again',
      dilemma: 'protect professional distance or accept the vulnerability required for partnership',
      storyQuestion: 'can two people rebuild trust while the work binding them together keeps exposing their old injuries?',
      thematicQuestion: 'is love a threat to autonomy or the place where autonomy becomes honest?',
      thematicStatement: 'intimacy does not erase autonomy, but it does demand honest interdependence',
      blueprintPremise: 'an editor inherits part of a print studio and must collaborate with the designer who once abandoned the project and her trust',
      worldRule: 'creative partnerships reveal emotional imbalance faster than private confession does',
      wisdom: {
        cognitive: 'show how practical collaboration exposes emotional truth',
        emotional: 'create tenderness without flattening conflict',
        moral: 'treat vulnerability as a chosen responsibility, not a rescue fantasy',
        reflexive: 'invite readers to examine the stories they use to protect themselves',
        experiential: 'keep intimacy grounded in work, routine, and mutual risk'
      }
    }
  }
};

export function getProfile(profileId) {
  const profile = BASELINE_PROFILES[profileId];

  if (!profile) {
    throw new Error(`Unknown baseline profile "${profileId}".`);
  }

  return profile;
}

export function normalizeWorkForm(workForm) {
  const normalized = workForm ?? 'short-story';
  const size = WORK_FORMS[normalized];

  if (!size) {
    throw new Error(`Unknown work form "${normalized}".`);
  }

  return { workForm: normalized, ...size };
}

export function normalizeSceneDensity(sceneDensity) {
  const density = sceneDensity ?? 'medium';

  if (!['low', 'medium', 'high'].includes(density)) {
    throw new Error(`Unsupported scene density "${density}".`);
  }

  return density;
}

export function selectNarrativeModel(profile, requestedModel) {
  const modelName = requestedModel ?? profile.narrativeModel;

  if (!DOMAIN_VALUES.narrativeModel.modelNames.includes(modelName)) {
    throw new Error(`Unsupported narrative model "${modelName}".`);
  }

  return modelName;
}
