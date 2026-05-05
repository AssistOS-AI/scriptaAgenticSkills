import { QA_RO_EXACT_TEXT } from '../config/qaBookTranslations.mjs';

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
    'source-renderer': 'Source edition renderer',
    'chunk-translation': 'Chunked translation renderer',
    'instruction-backed-fallback': 'Instruction-backed fallback'
  },
  ro: {
    'source-renderer': 'Renderer pentru editia sursa',
    'chunk-translation': 'Renderer cu traducere pe bucati',
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
    ...QA_RO_EXACT_TEXT,
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
    'grief has already been trained into politeness and silence': 'durerea a fost deja disciplinata in politete si tacere',
    'the case still smells of river water, wet paper, and municipal panic': 'dosarul inca miroase a apa de rau, hartie uda si panica administrativa',
    'the regulated air hums with memory systems that promise order at a human cost': 'aerul reglat pulseaza cu sisteme de memorie care promit ordine la un pret uman',
    'ash, oath-smoke, and ancestral pressure cling to every threshold': 'cenusa, fumul juramantului si presiunea mostenirii se lipesc de fiecare prag',
    'craft, routine, and old tenderness keep rubbing against unspoken hurt': 'mestesugul, rutina si tandretea veche se lovesc mereu de rani nespuse',
    'the central question this science fiction story asks': 'intrebarea centrala pe care o pune aceasta poveste science-fiction',
    'the central question this drama story asks': 'intrebarea centrala pe care o pune aceasta poveste dramatica',
    'the central question this detective police story asks': 'intrebarea centrala pe care o pune aceasta poveste detectiv-politista',
    'the central question this fantasy story asks': 'intrebarea centrala pe care o pune aceasta poveste fantastica',
    'the central question this romance relational story asks': 'intrebarea centrala pe care o pune aceasta poveste relational-romantica',
    'symbolic seed for science-fiction profile': 'samanta simbolica pentru profilul science-fiction',
    'symbolic seed for drama profile': 'samanta simbolica pentru profilul drama',
    'symbolic seed for detective-police profile': 'samanta simbolica pentru profilul detectiv-politist',
    'symbolic seed for fantasy profile': 'samanta simbolica pentru profilul fantastic',
    'symbolic seed for romance-relational profile': 'samanta simbolica pentru profilul relational-romantic',
    'How this location signals social dynamics': 'cum semnaleaza acest loc dinamica sociala',
    'how this scene opens': 'cum se deschide aceasta scena',
    'what the protagonist tries to accomplish': 'ce incearca protagonistul sa obtina',
    'what prevents easy success': 'ce impiedica succesul facil',
    'The conflict in this scene': 'conflictul din aceasta scena',
    'What triggers this event': 'ce declanseaza acest eveniment',
    'A hint for the dialogue line': 'un indiciu pentru replica de dialog',
    'What remains uncertain at this point': 'ce ramane incert in acest punct',
    'the Civic Promenade': 'promenada civica',
    'the shuttered mediation office above the old customs hall': 'biroul de mediere inchis deasupra vechii hale vamale',
    'Every conversation sounds temporary because the office trained people to trade truth for calm.': 'Fiecare conversatie suna provizoriu fiindca biroul i-a invatat pe oameni sa schimbe adevarul pe calm.',
    'Mira needs Vera\'s help immediately, but Vera refuses to move without proof that will survive the town hall.': 'Mira are nevoie imediat de ajutorul Verei, dar Vera refuza sa se miste fara dovezi care sa reziste in fata primariei.',
    'The recording ends with Mira\'s brother naming Corin before the tape cuts off.': 'Inregistrarea se incheie cu fratele Mirei rostindu-i numele lui Corin chiar inainte ca banda sa se taie.',
    'Vera wants to copy the ledger quietly, while Mira wants to confront Corin before he can recode the files again.': 'Vera vrea sa copieze registrul in tacere, in timp ce Mira vrea sa-l confrunte pe Corin inainte ca el sa poata recoda din nou fisierele.',
    'One photographed page carries Mira\'s mother\'s signature beneath a false evacuation report.': 'O pagina fotografiata poarta semnatura mamei Mirei sub un raport fals de evacuare.',
    'Mira realizes public exposure will erase the pension her mother depends on, while silence will erase her brother completely.': 'Mira intelege ca expunerea publica ii va sterge pensia de care depinde mama ei, in timp ce tacerea il va sterge complet pe fratele ei.',
    'The memorial plaque for Mira\'s brother lists a death date that predates the night he called her.': 'Placa memoriala a fratelui Mirei poarta o data a mortii care precede noaptea in care a sunat-o.',
    'Mira must decide whether to stop before her mother is implicated or finish the testimony in full view of the town.': 'Mira trebuie sa hotarasca daca se opreste inainte ca mama ei sa fie implicata sau daca isi duce marturia pana la capat in vazul intregului oras.',
    'Mira reaches the line proving that relief money was routed through Corin\'s family company.': 'Mira ajunge la randul care dovedeste ca banii pentru ajutoare au fost directionati prin compania familiei lui Corin.',
    'Can Mira expose the lie that killed her brother if the truth also proves her family survived on the same silence?': 'Poate Mira sa expuna minciuna care i-a ucis fratele daca adevarul dovedeste totodata ca familia ei a supravietuit prin aceeasi tacere?',
    'Memorial supper recording': 'Inregistrarea de la masa de pomenire',
    'Archive window without signatures': 'Fereastra de arhiva fara semnaturi',
    'Names beneath the memorial varnish': 'Nume sub lacul memorial',
    'Commemoration ledger reading': 'Citirea registrului la comemorare',
    'the river evidence hangar beside Lock Six': 'hangarul de probe de pe rau de langa Ecluza Sase',
    'Everyone speaks in clipped inventory terms because the room only respects what can be tagged.': 'Toti vorbesc in termeni scurti de inventar fiindca incaperea respecta doar ceea ce poate fi etichetat.',
    'Nadia needs the missing bag and the lock-camera footage, but Soren insists the drowning is already administratively closed.': 'Nadia are nevoie de geanta disparuta si de imaginile camerei de la ecluza, dar Soren insista ca inecul este deja inchis administrativ.',
    'The body shows wrist abrasions inconsistent with drifting debris.': 'Corpul poarta urme la incheieturi care nu se potrivesc cu resturi purtate de apa.',
    'Theo wants to publish immediately, while Nadia still needs proof that the camera gap conceals homicide rather than corruption alone.': 'Theo vrea sa publice imediat, in timp ce Nadia mai are nevoie de dovada ca lipsa din filmare ascunde o omucidere, nu doar coruptie.',
    'A duplicate maintenance form appears with two different timestamps.': 'Apare un formular de mentenanta duplicat, cu doua marcaje de timp diferite.',
    'Nadia can still frame the scandal as a deputy\'s mistake or name Soren as the architect of the concealment.': 'Nadia mai poate prezenta scandalul drept greseala unui adjunct sau il poate numi pe Soren arhitectul ascunderii.',
    'The footage freezes on Soren entering the lock corridor minutes after the murder.': 'Inregistrarea se blocheaza exact cand Soren intra pe coridorul ecluzei la cateva minute dupa crima.',
    'Can Nadia prove murder before procedure itself is used to wash the evidence clean?': 'Poate Nadia sa dovedeasca omorul inainte ca procedura insasi sa fie folosita pentru a spala probele?',
    'Camera gap at Lock Six': 'Golul din filmare de la Ecluza Sase',
    'the mnemonic orchard ring': 'inelul livezii mnemonice',
    'Citizens come here to rehearse approved memories in carefully moderated quiet.': 'Cetatenii vin aici sa repete amintiri aprobate intr-o liniste atent controlata.',
    'Elian wants to isolate the anomaly quietly, while Yara insists anomalies only survive if someone acts before the system rebalances.': 'Elian vrea sa izoleze anomalia in tacere, in timp ce Yara insista ca anomaliile supravietuiesc doar daca cineva actioneaza inainte ca sistemul sa se reechilibreze.',
    'One phantom crate is tagged with Elian\'s own authorization signature from two years earlier.': 'Un container fantoma poarta chiar semnatura de autorizare a lui Elian de acum doi ani.',
    'Elian still hopes the council preserved the memories for lawful quarantine, while Yara assumes the archive is a burial chamber for dissent.': 'Elian inca spera ca forul a pastrat amintirile pentru o carantina legala, in timp ce Yara crede ca arhiva este o camera mortuara pentru disidenta.',
    'The recovered vote proves the station once rejected the pacification protocol outright.': 'Votul recuperat dovedeste ca statia a respins odinioara fara echivoc protocolul de pacificare.',
    'Restoring memory station-wide could trigger panic and secondary casualties, yet leaving the archive hidden means permanent counterfeit consent.': 'Restaurarea memoriei la scara intregii statii ar putea declansa panica si victime secundare, iar lasarea arhivei ascunse inseamna un consimtamant falsificat pentru totdeauna.',
    'Elian can still narrow the release to the council alone or let every resident recover the same missing decision at once.': 'Elian mai poate limita divulgarea doar la consiliu sau poate lasa fiecare locuitor sa recupereze deodata aceeasi decizie disparuta.',
    'Citizens across the station begin repeating the erased vote count aloud.': 'Cetatenii din toata statia incep sa repete cu voce tare numarul de voturi sters.',
    'Can Elian restore the station\'s memory without destroying the fragile peace built on forgetting?': 'Poate Elian sa restaureze memoria statiei fara sa distruga pacea fragila construita pe uitare?',
    'Anomaly inside the orchard': 'Anomalia din livada',
    'the ash terrace above Drovna village': 'terasa de cenusa deasupra satului Drovna',
    'Every greeting sounds half like welcome and half like ritual surveillance.': 'Fiecare salut suna pe jumatate a bun-venit si pe jumatate a supraveghere ritualica.',
    'Neris wants proof the whispers are more than grief-magic, while Caelan insists the valley is already warning her directly.': 'Neris vrea dovezi ca soaptele sunt mai mult decat magie a doliului, in timp ce Caelan insista ca valea o avertizeaza deja direct.',
    'Can Neris free the valley from her family\'s vow without leaving it defenseless against the cost the vow once contained?': 'Poate Neris sa elibereze valea de juramantul familiei sale fara sa o lase fara aparare in fata pretului pe care juramantul il tinea candva inchis?',
    'Neris wants to expose Maeron immediately, yet doing so before the warding rite could leave the valley open to the winter breach.': 'Neris vrea sa-l demaste imediat pe Maeron, dar daca face asta inainte de ritualul de aparare ar putea lasa valea deschisa spre ruptura iernii.',
    'The records show Neris\'s mother volunteered the sister\'s memory to preserve the wards.': 'Insemnarile arata ca mama lui Neris a oferit memoria surorii pentru a pastra ward-urile.',
    'If she reveals the rite publicly, panic may shatter the valley before she can reforge the protection honestly.': 'Daca dezvaluie public ritualul, panica ar putea sfarama valea inainte ca ea sa poata reface cinstit protectia.',
    'The winter spirit retreats only when Neris names one of the forgotten dead aloud.': 'Spiritul iernii se retrage doar cand Neris rosteste cu voce tare numele unuia dintre mortii uitati.',
    'The valley must choose whether to stand in fear with Maeron or bear the truth and rebuild the wards differently.': 'Valea trebuie sa aleaga daca ramane in frica alaturi de Maeron sau daca suporta adevarul si recladeste ward-urile altfel.',
    'The furnace spills the trapped names in a voice all of Drovna can hear.': 'Cuptorul varsa numele captive intr-o voce pe care toata Drovna o poate auzi.',
    'the inherited letterpress studio on Brindle Lane': 'atelierul tipografic mostenit de pe Brindle Lane',
    'Work replaces confession here because every surface carries the memory of collaboration.': 'Aici munca tine locul confesiunii fiindca fiecare suprafata poarta memoria colaborarii.',
    'Leora wants clear workflow boundaries, while Talia keeps treating practical language as a way to test whether tenderness survived.': 'Leora vrea limite clare de lucru, in timp ce Talia continua sa trateze limbajul practic drept o proba pentru a vedea daca tandretea a supravietuit.',
    'Can Leora and Talia rebuild the studio without turning the work into another polite way of avoiding the truth between them?': 'Pot Leora si Talia sa reconstruiasca atelierul fara sa transforme munca intr-o alta forma politicoasa de a evita adevarul dintre ele?',
    'Leora wants the apology named clearly, not tucked inside production chatter, while Talia fears direct honesty will cost them the commission.': 'Leora vrea ca scuzele sa fie rostite limpede, nu ascunse in vorbaria de productie, in timp ce Talia se teme ca onestitatea directa le va costa comanda.',
    'The misprint mirrors the exact margin shift from the night Talia left.': 'Eroarea de tipar reproduce exact deplasarea de margine din noaptea in care Talia a plecat.',
    'Leora can keep the partnership safely undefined, or admit that the commission cannot outlive another season of silence.': 'Leora poate pastra parteneriatul intr-o ambiguitate sigura sau poate admite ca aceasta comanda nu poate supravietui unui nou sezon de tacere.',
    'The curator chooses the doubled-margin proof as the book\'s defining design feature.': 'Curatoarea alege proba cu marginea dublata drept trasatura definitorie de design a cartii.',
    'Leora can still present the gesture as branding, or let it stand as a public act of chosen vulnerability.': 'Leora mai poate prezenta gestul drept branding sau il poate lasa sa stea ca un act public de vulnerabilitate asumata.',
    'The dedication names the year Talia left and the future Leora still wants.': 'Dedicatia numeste anul in care Talia a plecat si viitorul pe care Leora il mai doreste.',
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
    'Say the thing everyone has been arranging around without naming it.': 'Spune lucrul pe care toti il ocolesc fara sa-l numeasca.',
    'I thought silence was the gentlest version of the truth.': 'Am crezut ca tacerea era cea mai blanda forma a adevarului.',
    'Do not ask me to call this mercy when it was only delay.': 'Nu-mi cere sa numesc asta mila cand a fost doar amanare.',
    'I was trying to keep one thing from breaking before everything else did.': 'Incercam sa opresc un singur lucru din a se rupe inainte sa se rupa toate celelalte.',
    'The valley will hear the old name before it forgives the mouth that speaks it.': 'Valea va auzi vechiul nume inainte sa ierte gura care il rosteste.',
    'Then let it hear me, because silence has fed it longer than truth ever did.': 'Atunci las-o sa ma auda, fiindca tacerea a hranit-o mai mult decat a facut-o vreodata adevarul.',
    'If this bloodline survives only by hiding the vow, it deserves to lose its shelter.': 'Daca acest neam supravietuieste doar ascunzand juramantul, merita sa-si piarda adapostul.',
    'Then speak, and I will witness what the fire chooses to spare.': 'Atunci vorbeste, iar eu voi fi martor la ceea ce focul alege sa crute.',
    'You keep correcting the margins as if the page offended you personally.': 'Continui sa corectezi marginile de parca pagina te-ar fi jignit personal.',
    'The page is easier to repair than the person who left the proof half-finished.': 'Pagina e mai usor de reparat decat omul care a lasat proba pe jumatate facuta.',
    'I can share the studio with you, but not if we keep pretending the distance is professional.': 'Pot imparti atelierul cu tine, dar nu daca continuam sa ne prefacem ca distanta e doar profesionala.',
    'Then let the work be difficult for the right reason, not because we are still hiding.': 'Atunci lasa munca sa fie grea din motivul potrivit, nu fiindca inca ne ascundem.',
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
    'the chapter-level choice becomes legible as a conflict over freedom and safety': 'alegerea de la nivelul capitolului devine lizibila ca un conflict intre libertate si siguranta',
    'the scene closes with partial knowledge, altered leverage, and rising risk': 'scena se inchide cu cunoastere partiala, echilibru schimbat si risc in crestere',
    'the scene ends after evidence and accusation finally occupy the same frame': 'scena se incheie dupa ce dovada si acuzatia ajung in acelasi cadru',
    'the scene ends after a technical choice becomes an openly moral one': 'scena se incheie dupa ce o alegere tehnica devine pe fata una morala',
    'the scene ends after truth demands sacrifice instead of symbolism': 'scena se incheie dupa ce adevarul cere sacrificiu, nu simbolism',
    'no one can yet tell whether proof will survive the institution built to absorb it': 'nimeni nu poate sti inca daca dovada va supravietui institutiei construite sa o absoarba',
    'no one can yet tell whether restored memory will liberate the station or fracture it': 'nimeni nu poate sti inca daca memoria restaurata va elibera statia sau o va fractura',
    'no one can yet tell whether the truthful act will save the valley or finish stripping its protections': 'nimeni nu poate sti inca daca actul adevarat va salva valea sau ii va smulge pana la capat protectiile',
    'no one can yet tell whether truth will repair the bond or formalize the rupture': 'nimeni nu poate sti inca daca adevarul va repara legatura sau va oficializa ruptura',
    'no one can yet tell whether honesty will deepen the bond or expose its limits': 'nimeni nu poate sti inca daca onestitatea va adanci legatura sau ii va expune limitele',
    'ritual authority is embedded in the path itself': 'autoritatea rituala este incorporata in drumul insusi',
    'the place remembers who belongs and who has broken faith': 'locul isi aminteste cine apartine si cine a rupt credinta',
    'the place answers with omen before speech': 'locul raspunde cu semn inaintea vorbirii',
    'ancestral magic stirs around an avoided name': 'magia ancestrala se misca in jurul unui nume evitat',
    'the valley treats silence as a new wound': 'valea trateaza tacerea ca pe o rana noua',
    'name the binding oath before the valley exacts a harsher price': 'numeasca juramantul legator inainte ca valea sa ceara un pret mai dur',
    'recover the true line of inheritance without submitting to it': 'recupereze adevarata linie a mostenirii fara sa se supuna ei',
    'turn ritual knowledge into actionable release': 'transforme cunoasterea rituala intr-o eliberare care poate fi infaptuita',
    'truth burns through status, shelter, and magical protection at the same time': 'adevarul arde deodata statutul, adapostul si protectia magica',
    'inheritance and redemption pull the same bloodline apart': 'mostenirea si rascumpararea trag acelasi neam in directii opuse',
    'truthful speech burns through the protections it needs': 'vorbirea adevarata arde chiar protectiile de care are nevoie',
    'wonder now arrives with an enforceable cost': 'miracolul vine acum cu un cost care trebuie platit',
    'ties present danger to an inherited promise': 'leaga primejdia prezenta de o promisiune mostenita',
    'reveals the oath that bound the valley to its wound': 'dezvaluie juramantul care a legat valea de rana ei'
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
    localized = localized.replace(new RegExp(escapeRegex(source), 'gi'), target);
  }

  for (const [pattern, replacement] of REGEX_TRANSLATIONS[code] ?? []) {
    localized = localized.replace(pattern, replacement);
  }

  return localized;
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
