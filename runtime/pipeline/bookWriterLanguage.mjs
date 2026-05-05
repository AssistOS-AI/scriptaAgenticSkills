const LANGUAGE_PACKS = {
  en: {
    code: 'en',
    htmlLang: 'en',
    name: 'English',
    direction: 'ltr',
    ui: {
      contents: 'Contents',
      titlePage: 'Title page',
      imprint: 'Edition notes',
      story: 'Story',
      appendix: 'Production appendix',
      profile: 'Profile',
      workForm: 'Work form',
      bookId: 'Book ID',
      edition: 'Edition',
      targetLanguage: 'Target language',
      editorialProfile: 'Editorial profile',
      translationInstruction: 'Translation instruction',
      generatedWith: 'Generated with',
      chapter: 'Chapter',
      coverLine: 'A single-file SCRIPTA reader edition',
      validationSnapshot: 'Validation snapshot',
      stageSources: 'Stage sources',
      unsupportedTranslation: 'Instruction-backed fallback',
      colophon: 'This edition keeps the SCRIPTA append-only provenance trail intact.'
    }
  },
  ro: {
    code: 'ro',
    htmlLang: 'ro',
    name: 'Romana',
    direction: 'ltr',
    ui: {
      contents: 'Cuprins',
      titlePage: 'Pagina de titlu',
      imprint: 'Note de editie',
      story: 'Poveste',
      appendix: 'Anexa de productie',
      profile: 'Profil',
      workForm: 'Forma operei',
      bookId: 'ID carte',
      edition: 'Editie',
      targetLanguage: 'Limba tinta',
      editorialProfile: 'Profil editorial',
      translationInstruction: 'Instructiune de traducere',
      generatedWith: 'Generat cu',
      chapter: 'Capitolul',
      coverLine: 'Editie SCRIPTA single-file pentru lectura si tipar',
      validationSnapshot: 'Instantaneu de validare',
      stageSources: 'Surse pe etape',
      unsupportedTranslation: 'Fallback bazat pe instructiuni',
      colophon: 'Aceasta editie pastreaza intact traseul de provenienta append-only din SCRIPTA.'
    }
  }
};

const PROFILE_LABELS = {
  en: {
    drama: 'Drama',
    'detective-police': 'Detective / Police',
    'science-fiction': 'Science Fiction',
    fantasy: 'Fantasy',
    'romance-relational': 'Romance / Relational'
  },
  ro: {
    drama: 'Drama',
    'detective-police': 'Politist / Detectiv',
    'science-fiction': 'Science-fiction',
    fantasy: 'Fantastic',
    'romance-relational': 'Romance / Relational'
  }
};

const SCENARIO_TITLES = {
  ro: {
    'When the Silence Returns': 'Cand se intoarce tacerea',
    'The River Knows First': 'Raul stie primul',
    'Orbit of the Unreturned': 'Orbita celor nereveniti',
    'The Ash Keeps Your Name': 'Cenusa iti pastreaza numele',
    'Margins of the Heart': 'Marginile inimii'
  }
};

const CHAPTER_ROLE_TITLES = {
  en: {
    setup: 'First Fracture',
    escalation: 'Pressure Line',
    investigation: 'The Search Tightens',
    revelation: 'What Surfaces',
    reversal: 'The Cost of Turning',
    culmination: 'Irreversible Choice',
    aftermath: 'After the Blow',
    bridge: 'Across the Fault'
  },
  ro: {
    setup: 'Prima fisura',
    escalation: 'Linia presiunii',
    investigation: 'Cautarea se strange',
    revelation: 'Ce iese la suprafata',
    reversal: 'Pretul intoarcerii',
    culmination: 'Alegerea ireversibila',
    aftermath: 'Dupa soc',
    bridge: 'Peste falie'
  }
};

const CLOSING_MODE_TITLES = {
  en: {
    'partial-resolution': 'a fragile partial resolution',
    revelation: 'a revelation that changes the pressure',
    reversal: 'a hard reversal',
    cliffhanger: 'an exposed cliff edge',
    aftermath: 'an unsettled aftermath',
    'open-question': 'an unanswered question'
  },
  ro: {
    'partial-resolution': 'o rezolvare partiala si fragila',
    revelation: 'o revelatie care schimba presiunea',
    reversal: 'o rasturnare dura',
    cliffhanger: 'o margine de prapastie lasata deschisa',
    aftermath: 'o urmare inca instabila',
    'open-question': 'o intrebare ramasa deschisa'
  }
};

const WORK_FORM_LABELS = {
  en: {
    'short-story': 'Short story',
    novelette: 'Novelette',
    novella: 'Novella',
    novel: 'Novel',
    'series-volume': 'Series volume'
  },
  ro: {
    'short-story': 'Povestire',
    novelette: 'Nuvela scurta',
    novella: 'Nuvela',
    novel: 'Roman',
    'series-volume': 'Volum de serie'
  }
};

const EDITION_MODE_LABELS = {
  en: {
    'built-in-renderer': 'Built-in bilingual renderer',
    'instruction-backed-fallback': 'Instruction-backed fallback'
  },
  ro: {
    'built-in-renderer': 'Renderer bilingv integrat',
    'instruction-backed-fallback': 'Fallback bazat pe instructiuni'
  }
};

const EDITORIAL_PROFILE_LABELS = {
  en: {
    'literary-smooth': 'Literary smoothing'
  },
  ro: {
    'literary-smooth': 'Netezire literara'
  }
};

const PROFILE_FLAVOR = {
  en: {
    drama: {
      atmosphere: 'grief has already been trained into politeness and silence',
      coverTagline: 'Truth returns wearing the shape of grief.',
      thematicBridge: 'Every act of care risks becoming another method of concealment.'
    },
    'detective-police': {
      atmosphere: 'the case still smells of river water, wet paper, and municipal panic',
      coverTagline: 'The city keeps the secret only while everyone obeys.',
      thematicBridge: 'Procedure becomes dangerous when truth has learned to hide inside it.'
    },
    'science-fiction': {
      atmosphere: 'the regulated air hums with memory systems that promise order at a human cost',
      coverTagline: 'A peaceful orbit can be the sharpest prison.',
      thematicBridge: 'Every stable system asks someone to forget on command.'
    },
    fantasy: {
      atmosphere: 'ash, oath-smoke, and ancestral pressure cling to every threshold',
      coverTagline: 'Inheritance burns brightest when it is forced to confess.',
      thematicBridge: 'Magic remains beautiful only while someone else carries the cost.'
    },
    'romance-relational': {
      atmosphere: 'craft, routine, and old tenderness keep rubbing against unspoken hurt',
      coverTagline: 'Work becomes intimate long before trust admits it.',
      thematicBridge: 'Partnership fails whenever honesty arrives later than care.'
    }
  },
  ro: {
    drama: {
      atmosphere: 'durerea a fost deja disciplinata in politete si tacere',
      coverTagline: 'Adevarul se intoarce purtand forma durerii.',
      thematicBridge: 'Fiecare gest de grija risca sa devina inca o metoda de ascundere.'
    },
    'detective-police': {
      atmosphere: 'dosarul inca miroase a apa de rau, hartie uda si panica administrativa',
      coverTagline: 'Orasul pastreaza secretul doar cat timp toti asculta.',
      thematicBridge: 'Procedura devine periculoasa cand adevarul invata sa se ascunda in ea.'
    },
    'science-fiction': {
      atmosphere: 'aerul reglat pulseaza cu sisteme de memorie care promit ordine la un pret uman',
      coverTagline: 'O orbita pasnica poate fi cea mai precisa inchisoare.',
      thematicBridge: 'Orice sistem stabil cere cuiva sa uite la comanda.'
    },
    fantasy: {
      atmosphere: 'cenusa, fumul juramantului si presiunea mostenirii se lipesc de fiecare prag',
      coverTagline: 'Mostenirea arde cel mai tare cand este silita sa marturiseasca.',
      thematicBridge: 'Magia ramane frumoasa doar cat timp altcineva ii poarta pretul.'
    },
    'romance-relational': {
      atmosphere: 'mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse',
      coverTagline: 'Munca devine intima cu mult inainte ca increderea sa recunoasca asta.',
      thematicBridge: 'Parteneriatul esueaza ori de cate ori sinceritatea vine dupa grija.'
    }
  }
};

const EXACT_TEXT_TRANSLATIONS = {
  ro: {
    'a rain-dark apartment block': 'un bloc de apartamente intunecat de ploaie',
    'the old district hospital': 'vechiul spital de cartier',
    'the municipal archive': 'arhiva municipala',
    'the flooded river promenade': 'promenada inundata de pe malul raului',
    'the evidence basement': 'subsolul probelor',
    'the central police tribunal': 'tribunalul central al politiei',
    'Orbital Station Horizon': 'Statia Orbitala Horizon',
    'the cryo archive ring': 'inelul arhivei criogenice',
    'the restricted signal garden': 'gradina semnalelor restrictionate',
    'the Ash Vale': 'Valea Cenusii',
    'the drowned observatory': 'observatorul inecat',
    'the black cedar road': 'drumul cedrilor negri',
    'the winter book market': 'targul de carte de iarna',
    'a riverside print studio': 'un atelier tipografic de pe malul raului',
    'the rooftop herb garden': 'gradina de plante de pe acoperis',
    'a sealed cassette recorder': 'un reportofon sigilat',
    'a missing diagnosis file': 'un dosar medical disparut',
    'a notebook of apologies': 'un caiet de scuze',
    'a falsified autopsy report': 'un raport de autopsie falsificat',
    'an erased camera ledger': 'un registru video sters',
    'a sealed witness transcript': 'o transcriere sigilata de martor',
    'a damaged continuity key': 'o cheie de continuitate avariata',
    'a forbidden recall shard': 'un fragment interzis de rememorare',
    'an adaptive signal relay': 'un releu adaptiv de semnal',
    'a vow-bound relic': 'o relicva legata prin juramant',
    'a cracked star compass': 'o busola stelara crapata',
    'the ember sigil blade': 'lama cu sigiliul jarului',
    'an annotated recipe book': 'o carte de retete adnotata',
    'a misdelivered galley proof': 'o proba de tipar livrata gresit',
    'a ring of greenhouse keys': 'un inel de chei pentru sera',
    'the initial promise is unstable but not yet public': 'promisiunea initiala este fragila, dar inca nu a devenit publica',
    'chapter 1 ends with increased pressure and narrower choices': 'capitolul 1 se inchide cu presiune crescuta si alegeri mai inguste',
    'chapter 2 ends with increased pressure and narrower choices': 'capitolul 2 se inchide cu presiune crescuta si alegeri mai inguste',
    'chapter 3 ends with increased pressure and narrower choices': 'capitolul 3 se inchide cu presiune crescuta si alegeri mai inguste',
    'chapter 4 ends with increased pressure and narrower choices': 'capitolul 4 se inchide cu presiune crescuta si alegeri mai inguste',
    'chapter 5 ends with increased pressure and narrower choices': 'capitolul 5 se inchide cu presiune crescuta si alegeri mai inguste',
    'the central pressure resolves with visible cost': 'presiunea centrala se rezolva cu un cost vizibil',
    'orientation under visible strain': 'orientarea se face sub o tensiune deja vizibila',
    'the previous pressure resumes in altered form': 'presiunea anterioara revine intr-o forma schimbata',
    'dialogue, evidence, or movement narrows the available choices': 'dialogul, dovada sau miscarea strang campul posibilului',
    'competing interpretations or desires collide inside the local action': 'interpretarile si dorintele concurente se ciocnesc in miezul actiunii locale',
    'the scene closes with partial knowledge and increased risk': 'scena se inchide cu cunoastere partiala si risc crescut',
    'the scene ends after a costly decision or reveal': 'scena se incheie dupa o decizie costisitoare sau dupa o revelatie',
    'the next scene begins before the pressure can settle': 'scena urmatoare incepe inainte ca presiunea sa se aseze',
    'the chapter hands off to a sharper unresolved consequence': 'capitolul preda stafeta unei consecinte mai ascutite si nerezolvate',
    'the local conflict changes direction but does not resolve': 'conflictul local isi schimba directia fara sa se rezolve',
    'the chapter-level conflict becomes harder to hide': 'conflictul la nivel de capitol devine mai greu de ascuns',
    'force a clearer truth into the open': 'forteze iesirea la lumina a unui adevar mai limpede',
    'the opposing side can still reinterpret the evidence or relationship': 'partea opusa inca poate reinterpreta dovada sau relatia',
    'the explicit conversation should hide a harder emotional or structural truth': 'conversatia explicita trebuie sa ascunda un adevar emotional sau structural mai dur',
    'the latest cost forces the protagonist to reinterpret earlier certainty': 'ultimul cost il obliga pe protagonist sa reinterpretaze certitudinea de mai devreme',
    'the real outcome remains unreadable until the next scene or chapter': 'deznodamantul real ramane ilizibil pana la scena sau capitolul urmator',
    'hold the family together after a public loss': 'tina familia laolalta dupa o pierdere publica',
    'protect an old lie or expose the truth that may break the family apart': 'sa protejeze o minciuna veche sau sa expuna adevarul care poate rupe familia',
    'can repair begin before the most damaging truth is spoken aloud?': 'poate incepe reparatia inainte ca adevarul cel mai dureros sa fie rostit cu voce tare?',
    'is honesty still compassionate when it arrives too late?': 'mai este onestitatea o forma de compasiune cand vine prea tarziu?',
    'delayed honesty prolongs pain, but spoken truth can still create a difficult form of repair': 'onestitatea amanata prelungeste durerea, dar adevarul rostit poate totusi crea o forma dificila de reparatie',
    'a mediator returns home after her brother\'s death and discovers that the family grief was built around a false story': 'o mediatoare se intoarce acasa dupa moartea fratelui ei si descopera ca doliul familiei a fost construit pe o poveste falsa',
    'public institutions protect reputation before they protect emotional truth': 'institutiile publice protejeaza reputatia inainte sa protejeze adevarul emotional',
    'prove that a staged drowning was a political murder': 'demonstreze ca o inecare inscenata a fost o crima politica',
    'close the case cleanly or expose the system that employs her': 'inchida cazul curat sau sa expuna sistemul care o angajeaza',
    'how much of the city must she accuse in order to save one dead woman from silence?': 'cat din oras trebuie sa acuze pentru a salva o femeie moarta din tacere?',
    'can lawful institutions still deliver justice when they profit from concealment?': 'mai pot institutiile legale sa faca dreptate cand profita din ascundere?',
    'institutions that value stability over truth become complicit in violence': 'institutiile care pun stabilitatea deasupra adevarului devin complice la violenta',
    'an inspector reopens a drowning case after evidence suggests the victim died while uncovering municipal corruption': 'o inspectoare redeschide un caz de inec dupa ce dovezile sugereaza ca victima a murit in timp ce descoperea coruptie municipala',
    'every protected file creates a new layer of plausible deniability': 'fiecare dosar protejat creeaza un nou strat de negare plauzibila',
    'restore unstable memories or preserve a peaceful lie': 'restabileasca amintiri instabile sau sa pastreze o minciuna pasnica',
    'what kind of society survives when memory itself has become a security tool?': 'ce fel de societate supravietuieste cand memoria insasi devine un instrument de securitate?',
    'is safety meaningful when it depends on controlled forgetting?': 'mai are siguranta sens cand depinde de uitare controlata?',
    'security purchased through engineered forgetting produces obedient but diminished communities': 'siguranta cumparata prin uitare inginerizata produce comunitati obediente, dar diminuate',
    'a systems architect discovers that the station\'s peace depends on curated memory erasure': 'o arhitecta de sisteme descopera ca pacea statiei depinde de stergerea atent curatoriata a memoriei',
    'all memory restoration consumes finite computational bandwidth and destabilizes civic prediction systems': 'orice restaurare a memoriei consuma latime de banda computationala finita si destabilizeaza sistemele civice de predictie',
    'lift the curse that is devouring her valley': 'ridice blestemul care ii devoreaza valea',
    'speak the binding truth and lose her inheritance, or remain silent and let the valley die slowly': 'rosteasca adevarul legator si sa-si piarda mostenirea, ori sa taca si sa lase valea sa moara incet',
    'what remains of a lineage when the truth that can save it also destroys its claim to power?': 'ce mai ramane dintr-o linie de sange cand adevarul care o poate salva ii distruge si pretentia la putere?',
    'can a damaged inheritance be redeemed without renouncing ownership of it?': 'poate fi rascumparata o mostenire stricata fara renuntarea la posesia ei?',
    'redemption requires relinquishing the identity built on inherited harm': 'rascumpararea cere renuntarea la identitatea construita pe raul mostenit',
    'an heir returns to a cursed valley and learns the curse persists because her bloodline hides the truth of its founding vow': 'o mostenitoare se intoarce intr-o vale blestemata si afla ca blestemul persista fiindca neamul ei ascunde adevarul juramantului de intemeiere',
    'every truthful oath spoken against inherited power burns away one layer of family privilege': 'fiecare juramant adevarat rostit impotriva puterii mostenite arde un strat de privilegiu familial',
    'save a failing family print studio without surrendering her independence': 'salveze un atelier tipografic de familie aflat in cadere fara sa-si predea independenta',
    'protect professional distance or accept the vulnerability required for partnership': 'protejeze distanta profesionala sau sa accepte vulnerabilitatea ceruta de parteneriat',
    'can two people rebuild trust while the work binding them together keeps exposing their old injuries?': 'pot doi oameni sa reconstruiasca increderea cat timp munca ce ii leaga continua sa le expuna ranile vechi?',
    'is love a threat to autonomy or the place where autonomy becomes honest?': 'este iubirea o amenintare pentru autonomie sau locul in care autonomia devine sincera?',
    'intimacy does not erase autonomy, but it does demand honest interdependence': 'intimitatea nu sterge autonomia, dar cere interdependenta sincera',
    'an editor inherits part of a print studio and must collaborate with the designer who once abandoned the project and her trust': 'o editoare mosteneste o parte dintr-un atelier tipografic si trebuie sa colaboreze cu designerul care a abandonat candva atat proiectul, cat si increderea ei',
    'creative partnerships reveal emotional imbalance faster than private confession does': 'parteneriatele creative scot la iveala dezechilibrul emotional mai repede decat o confesiune privata',
    'the flooded riverside promenade': 'promenada inundata de pe malul raului',
    'the evidence archive': 'arhiva probelor',
    'the civic tribunal annex': 'anexa tribunalului civic',
    'what hidden pressure is this chapter forcing into view?': 'ce presiune ascunsa obliga acest capitol sa iasa la vedere?',
    'which fact is the city most afraid to let survive?': 'care este faptul pe care orasul se teme cel mai mult sa-l lase sa supravietuiasca?',
    'how much of the institution is implicated in the case?': 'cat de mult este implicata institutia in caz?',
    'what kind of order depends on engineered forgetting?': 'ce fel de ordine depinde de uitarea inginerizata?',
    'the answer moves from suspicion toward institutional implication': 'raspunsul se misca de la suspiciune spre implicare institutionala',
    'the answer moves from anomaly toward designed control': 'raspunsul se misca de la anomalie spre control proiectat',
    'a procedural detail refuses to stay procedural': 'un detaliu procedural refuza sa ramana doar procedural',
    'fresh evidence makes the official timeline wobble': 'o dovada noua face sa se clatine cronologia oficiala',
    'the safe reading of the case begins to collapse': 'lectura sigura a cazului incepe sa se prabuseasca',
    'a system alert exposes human fragility inside the station': 'o alerta de sistem expune fragilitatea umana din interiorul statiei',
    'one corrupted memory trace disturbs the engineered calm': 'o urma de memorie corupta tulbura calmul inginerizat',
    'the controlled environment reveals its own fear of freedom': 'mediul controlat isi dezvaluie propria frica de libertate',
    'evidence and authority now point in opposite directions': 'dovada si autoritatea indica acum directii opuse',
    'procedure protects the wrong people more efficiently than it protects truth': 'procedura ii protejeaza pe oamenii nepotriviti mai eficient decat protejeaza adevarul',
    'the clue chain becomes dangerous precisely because it is coherent': 'lantul indiciilor devine periculos tocmai pentru ca este coerent',
    'freedom and safety now require conflicting system states': 'libertatea si siguranta cer acum stari de sistem aflate in conflict',
    'memory repair threatens the peace built on forgetting': 'repararea memoriei ameninta pacea construita pe uitare',
    'human consent collides with predictive control': 'consimtamantul uman se ciocneste de controlul predictiv',
    'lock the evidence to a timeline that cannot be denied': 'fixeze dovada intr-o cronologie care nu mai poate fi negata',
    'pressure the witness chain into coherence': 'forteze lantul martorilor sa devina coerent',
    'force the official story to absorb one unmanageable fact': 'forteze povestea oficiala sa absoarba un fapt imposibil de gestionat',
    'restore the corrupted memory trace before governance seals it': 'restabileasca urma de memorie corupta inainte ca guvernanta sa o sigileze',
    'keep human consent visible inside the system response': 'mentina consimtamantul uman vizibil in raspunsul de sistem',
    'translate anomaly into public knowledge before prediction closes over it': 'transforme anomalia in cunoastere publica inainte ca predictia sa o acopere',
    'the official record still protects the version that serves power': 'registrul oficial protejeaza in continuare versiunea care serveste puterii',
    'the station treats uncertainty as a security breach instead of a civic fact': 'statia trateaza nesiguranta ca pe o bresa de securitate, nu ca pe un fapt civic',
    'justice, legitimacy, witness safety, and public trust': 'dreptate, legitimitate, siguranta martorilor si incredere publica',
    'consent, civic memory, security, and political agency': 'consimtamant, memorie civica, siguranta si agentie politica',
    'authority is visible in every locked cabinet and withheld file': 'autoritatea este vizibila in fiecare dulap incuiat si in fiecare dosar retinut',
    'the environment treats citizens like variables inside a stability model': 'mediul trateaza cetatenii ca pe niste variabile dintr-un model de stabilitate',
    'justice is never clean when the system profits from concealment': 'dreptatea nu este niciodata curata cand sistemul profita din ascundere',
    'memory belongs to citizens, not to prediction systems': 'memoria apartine cetatenilor, nu sistemelor de predictie',
    'alliance tested by public consequence': 'alianta testata de consecinta publica',
    'solidarity forged through contested memory': 'solidaritate forjata prin memorie disputata',
    'If the ledger was complete, why is the river camera blind exactly when the body entered the water?': 'Daca registrul era complet, de ce este camera de pe rau oarba exact cand corpul a intrat in apa?',
    'Because someone upstream decided the gap was safer than the truth.': 'Pentru ca cineva de mai sus a decis ca golul era mai sigur decat adevarul.',
    'Then stop calling this a case file and say who profits if it stays closed.': 'Atunci nu-i mai spune dosar de caz si spune cine castiga daca ramane inchis.',
    'If the transcript holds, the city itself becomes part of the murder.': 'Daca transcrierea se confirma, orasul insusi devine parte din crima.',
    'This is not corruption in the archive; it is policy pretending to be repair.': 'Asta nu este coruptie in arhiva; este politica prefacandu-se reparatie.',
    'If I can isolate the drift, I can still restore the citizens without collapsing the station.': 'Daca pot izola deriva, inca pot restaura cetatenii fara sa prabusesc statia.',
    'The station does not fear error; it fears uncurated memory.': 'Statia nu se teme de eroare; se teme de memoria necuratoriata.',
    'Then we stop asking permission from the model that harmed them.': 'Atunci incetam sa mai cerem permisiune modelului care le-a facut rau.',
    'The question sounds procedural and accusatory at once': 'intrebarea suna procedural si acuzator in acelasi timp',
    'The answer carries fear disguised as competence': 'raspunsul poarta frica deghizata in competenta',
    'The demand removes procedural cover': 'cererea indeparteaza acoperirea procedurala',
    'The line transforms investigation into public danger': 'replica transforma investigatia in pericol public',
    'The technical reading becomes morally unstable': 'lectura tehnica devine moral instabila',
    'Hope sounds dangerously procedural': 'speranta suna periculos de procedural',
    'The insight turns maintenance into dissent': 'acea intuitie transforma mentenanta in disidenta',
    'The reply accelerates the ethical line of action': 'raspunsul accelereaza linia etica a actiunii',
    'the question sounds procedural and accusatory at once': 'intrebarea suna procedural si acuzator in acelasi timp',
    'the answer carries fear disguised as competence': 'raspunsul poarta frica deghizata in competenta',
    'the demand removes procedural cover': 'cererea indeparteaza acoperirea procedurala',
    'the line transforms investigation into public danger': 'replica transforma investigatia in pericol public',
    'the technical reading becomes morally unstable': 'lectura tehnica devine moral instabila',
    'hope sounds dangerously procedural': 'speranta suna periculos de procedural',
    'the insight turns maintenance into dissent': 'acea intuitie transforma mentenanta in disidenta',
    'the reply accelerates the ethical line of action': 'raspunsul accelereaza linia etica a actiunii',
    'destabilizes the official timeline': 'destabilizeaza cronologia oficiala',
    'links the victim directly to the protected redevelopment file': 'leaga victima direct de dosarul protejat de reamenajare',
    'proves the anomaly was administered, not accidental': 'dovedeste ca anomalia a fost administrata, nu accidentala',
    'restores a memory sequence the station was designed to suppress': 'restabileste o secventa de memorie pe care statia a fost proiectata sa o suprime',
    'the local conflict changes direction, but the central pressure remains active': 'conflictul local isi schimba directia, dar presiunea centrala ramane activa',
    'the chapter-level accusation becomes harder to dismiss as speculation': 'acuzatia de la nivelul capitolului devine mai greu de respins drept simpla speculatie',
    'the chapter-level choice becomes legible as a conflict over freedom and safety': 'alegerea de la nivelul capitolului devine lizibila ca un conflict intre libertate si siguranta'
  }
};

const REGEX_TRANSLATIONS = {
  ro: [
    [/\bchapter-(\d{3})\b/g, 'capitolul-$1'],
    [/ later chapters must preserve the consequence introduced in /g, ' capitolele urmatoare trebuie sa pastreze consecinta introdusa in '],
    [/ yields a new implication or the relationship slips into open contradiction/g, ' produce o implicatie noua sau relatia aluneca intr-o contradictie deschisa'],
    [/ the attempt reveals only part of the structure/g, ' incercarea dezvaluie doar o parte din structura'],
    [/ the attempt succeeds at a personal cost/g, ' incercarea reuseste cu un cost personal'],
    [/ each exchange removes a safer interpretation of the conflict/g, ' fiecare schimb indeparteaza o interpretare mai sigura a conflictului'],
    [/ the chapter can no longer return to its opening state/g, ' capitolul nu mai poate reveni la starea sa de deschidere'],
    [/ the next scene must reinterpret the same pressure at a higher level/g, ' scena urmatoare trebuie sa reinterpretaze aceeasi presiune la un nivel mai ridicat'],
    [/ the next chapter must absorb the fallout/g, ' capitolul urmator trebuie sa absoarba consecintele'],
    [/truthful action demands visible cost/g, 'actiunea adevarata cere un cost vizibil'],
    [/close-third-person/g, 'persoana a treia apropiata'],
    [/proves the anomaly was administered, not accidental\./gi, 'dovedeste ca anomalia a fost administrata, nu accidentala.'],
    [/restores a memory sequence the station was designed to suppress\./gi, 'restabileste o secventa de memorie pe care statia a fost proiectata sa o suprime.'],
    [/destabilizes the official timeline\./gi, 'destabilizeaza cronologia oficiala.'],
    [/links the victim directly to the protected redevelopment file\./gi, 'leaga victima direct de dosarul protejat de reamenajare.'],
    [/characters cannot follow evidence without triggering institutional resistance/gi, 'personajele nu pot urmari dovada fara sa declanseze rezistenta institutionala'],
    [/characters cannot repair memory without destabilizing the governing model/gi, 'personajele nu pot repara memoria fara sa destabilizeze modelul de guvernare'],
    [/the local conflict changes direction, but the central pressure remains active\./gi, 'conflictul local isi schimba directia, dar presiunea centrala ramane activa.'],
    [/the chapter-level accusation becomes harder to dismiss as speculation\./gi, 'acuzatia de la nivelul capitolului devine mai greu de respins drept simpla speculatie.'],
    [/the chapter-level choice becomes legible as a conflict over freedom and safety\./gi, 'alegerea de la nivelul capitolului devine lizibila ca un conflict intre libertate si siguranta.'],
    [/the question sounds procedural and accusatory at once\./gi, 'intrebarea suna procedural si acuzator in acelasi timp.'],
    [/the answer carries fear disguised as competence\./gi, 'raspunsul poarta frica deghizata in competenta.'],
    [/the demand removes procedural cover\./gi, 'cererea indeparteaza acoperirea procedurala.'],
    [/the line transforms investigation into public danger\./gi, 'replica transforma investigatia in pericol public.'],
    [/the technical reading becomes morally unstable\./gi, 'lectura tehnica devine moral instabila.'],
    [/hope sounds dangerously procedural\./gi, 'speranta suna periculos de procedural.'],
    [/the insight turns maintenance into dissent\./gi, 'acea intuitie transforma mentenanta in disidenta.'],
    [/the reply accelerates the ethical line of action\./gi, 'raspunsul accelereaza linia etica a actiunii.'],
    [/let the clue settle long enough to expose its institutional meaning/gi, 'lasa indiciul sa se aseze suficient pentru a-si expune sensul institutional'],
    [/let the reader feel the engineered environment before action resumes/gi, 'lasa cititorul sa simta mediul inginerizat inainte ca actiunea sa reinceapa'],
    [/the evidence chain has crossed into public danger/gi, 'lantul probelor a trecut in zona pericolului public'],
    [/the system has recognized the breach and begun to react/gi, 'sistemul a recunoscut bresa si a inceput sa reactioneze'],
    [/ while the chapter still carries ([a-z-]+) pressure/g, (_, role) => ` in timp ce capitolul poarta inca presiunea de ${localizeRoleToken(role)}`],
    [/ under ([a-z-]+) pressure/g, (_, role) => ` sub presiunea de ${localizeRoleToken(role)}`],
    [/ during the ([a-z-]+) (chapter|stage|movement)/g, (_, role, form) => {
      if (form === 'chapter') {
        return ` in capitolul de ${localizeRoleToken(role)}`;
      }
      if (form === 'stage') {
        return ` in etapa de ${localizeRoleToken(role)}`;
      }
      return ` in miscarea de ${localizeRoleToken(role)}`;
    }],
    [/ after the ([a-z-]+) chapter/g, (_, role) => ` dupa capitolul de ${localizeRoleToken(role)}`]
  ]
};

const COVER_PALETTES = {
  drama: { background: '#1f2230', accent: '#b35d5d', accentSoft: '#f3d9d5', ink: '#f7f4ef' },
  'detective-police': { background: '#10222f', accent: '#4fb7c5', accentSoft: '#cde9ee', ink: '#f2f5f6' },
  'science-fiction': { background: '#101827', accent: '#8b5cf6', accentSoft: '#d9ccff', ink: '#f5f7ff' },
  fantasy: { background: '#21161b', accent: '#d07c3f', accentSoft: '#f4dbc8', ink: '#fff5ef' },
  'romance-relational': { background: '#2a1622', accent: '#d96ba1', accentSoft: '#f5d7e6', ink: '#fff5fb' }
};

export function getLanguagePack(languageCode) {
  return LANGUAGE_PACKS[normalizeLanguageCode(languageCode)] ?? LANGUAGE_PACKS.en;
}

export function isBuiltInBookLanguage(languageCode) {
  return Boolean(LANGUAGE_PACKS[normalizeLanguageCode(languageCode)]);
}

export function normalizeLanguageCode(languageCode) {
  return String(languageCode ?? 'en').trim().toLowerCase();
}

export function localizeProfileLabel(profileId, fallbackLabel, languageCode) {
  const code = normalizeLanguageCode(languageCode);
  return PROFILE_LABELS[code]?.[profileId] ?? fallbackLabel;
}

export function localizeScenarioTitle(title, profileId, languageCode) {
  const code = normalizeLanguageCode(languageCode);
  return SCENARIO_TITLES[code]?.[title] ?? title;
}

export function buildChapterDisplayTitle({ chapterNumber, role, languageCode }) {
  const pack = getLanguagePack(languageCode);
  const code = normalizeLanguageCode(languageCode);
  const chapterLabel = pack.ui.chapter;
  const roleTitle = CHAPTER_ROLE_TITLES[code]?.[role] ?? CHAPTER_ROLE_TITLES.en[role] ?? role;
  return `${chapterLabel} ${chapterNumber} — ${roleTitle}`;
}

export function localizeClosingMode(closingMode, languageCode) {
  const code = normalizeLanguageCode(languageCode);
  return CLOSING_MODE_TITLES[code]?.[closingMode] ?? CLOSING_MODE_TITLES.en[closingMode] ?? closingMode;
}

export function localizeWorkForm(workForm, languageCode) {
  const code = normalizeLanguageCode(languageCode);
  return WORK_FORM_LABELS[code]?.[workForm] ?? WORK_FORM_LABELS.en[workForm] ?? workForm;
}

export function localizeEditionMode(mode, languageCode) {
  const code = normalizeLanguageCode(languageCode);
  return EDITION_MODE_LABELS[code]?.[mode] ?? EDITION_MODE_LABELS.en[mode] ?? mode;
}

export function localizeEditorialProfile(profile, languageCode) {
  const code = normalizeLanguageCode(languageCode);
  return EDITORIAL_PROFILE_LABELS[code]?.[profile] ?? EDITORIAL_PROFILE_LABELS.en[profile] ?? profile;
}

export function getProfileFlavor(profileId, languageCode) {
  const code = normalizeLanguageCode(languageCode);
  return PROFILE_FLAVOR[code]?.[profileId] ?? PROFILE_FLAVOR.en[profileId] ?? PROFILE_FLAVOR.en.drama;
}

export function localizeBookText(text, languageCode) {
  const code = normalizeLanguageCode(languageCode);
  if (code === 'en') {
    return String(text ?? '');
  }

  let localized = String(text ?? '');
  const exactMap = EXACT_TEXT_TRANSLATIONS[code] ?? {};
  const exactEntries = Object.entries(exactMap).sort((left, right) => right[0].length - left[0].length);

  for (const [source, target] of exactEntries) {
    localized = localized.split(source).join(target);
  }

  for (const [pattern, replacement] of REGEX_TRANSLATIONS[code] ?? []) {
    localized = localized.replace(pattern, replacement);
  }

  return localized;
}

export function localizeRoleToken(role) {
  const map = {
    setup: 'deschidere',
    escalation: 'escaladare',
    investigation: 'investigatie',
    revelation: 'revelatie',
    reversal: 'rasturnare',
    culmination: 'culminare',
    aftermath: 'urmare',
    bridge: 'trecere'
  };

  return map[role] ?? role;
}

export function buildCoverPalette(profileId) {
  return COVER_PALETTES[profileId] ?? COVER_PALETTES.drama;
}
