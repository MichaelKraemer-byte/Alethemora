import type { Language } from "@/lib/i18n";

export type ResearchCategoryId = "lbl" | "reincarnation" | "nde";

export type ResearcherProfile = {
  id: string;
  category: ResearchCategoryId;
  name: string;
  tag: string;
  teaser: string;
  works: string[];
  findings: string[];
  convergence: string;
};

const categoriesCopy = {
  en: [
    { id: "lbl" as const, label: "LBL regression", short: "Between lives" },
    { id: "reincarnation" as const, label: "Reincarnation", short: "Past-life cases" },
    { id: "nde" as const, label: "Near-death", short: "NDE studies" }
  ],
  de: [
    { id: "lbl" as const, label: "LBL-Regression", short: "Zwischen Leben" },
    { id: "reincarnation" as const, label: "Reinkarnation", short: "Vor-Leben-Fälle" },
    { id: "nde" as const, label: "Nahtoderleben", short: "NDE-Studien" }
  ]
} as const;

const researchersCopy = {
  en: [
    {
      id: "newton",
      category: "lbl",
      name: "Michael Newton",
      tag: "LBL pioneer",
      teaser: "Soul groups, guides, life planning — mapped across thousands of sessions.",
      works: [
        "Journey of Souls (1994) — systematic map of the between-life realm",
        "Destiny of Souls (2000) — deeper layers of soul planning and councils",
        "Life Between Lives (2004) — therapeutic method and case methodology"
      ],
      findings: [
        "Highly consistent reports of soul groups, spirit guides, and council settings across unrelated clients.",
        "Life review and pre-birth planning recur as structural elements, not one-off metaphors.",
        "Reincarnation is described as developmental cycles — not random punishment/reward.",
        "LBL states show stable phenomenology comparable across cultures and decades of practice."
      ],
      convergence:
        "Newton supplies the architectural blueprint Alethemora uses: continuity, relational learning, and intentional incarnation."
    },
    {
      id: "weiss",
      category: "lbl",
      name: "Brian Weiss",
      tag: "Clinical regression",
      teaser: "Past-life therapy under hypnosis — trauma release across lifetimes.",
      works: [
        "Many Lives, Many Masters (1988) — breakthrough past-life regression case series",
        "Through Time Into Healing (1992) — therapeutic application and ethics",
        "Same Soul, Many Bodies (2004) — continuity of soul themes across incarnations"
      ],
      findings: [
        "Patients under deep hypnosis report past-life narratives that unlock present symptoms.",
        "Emotional and somatic healing can follow when unfinished soul themes are integrated.",
        "Master/guide figures appear in sessions — paralleling LBL literature independently.",
        "Regression work suggests memory-like continuity beyond single-biography explanation."
      ],
      convergence:
        "Weiss bridges clinical practice and soul continuity — Alethemora treats such patterns as workable, not merely symbolic."
    },
    {
      id: "cannon",
      category: "lbl",
      name: "Dolores Cannon",
      tag: "QHHT / deep trance",
      teaser: "Quantized deep-trance sessions — overlapping maps of the soul realm.",
      works: [
        "Between Death and Life (1993) — interviews from the between-life space",
        "The Convoluted Universe series — expanded cosmology from deep trance",
        "The Three Waves of Volunteers — soul missions and incarnation choice"
      ],
      findings: [
        "Deep trance subjects describe staging areas, councils, and learning spheres between lives.",
        "Soul contracts and volunteer incarnations appear as recurring planning motifs.",
        "Multiple session layers converge on non-local consciousness and guided development.",
        "Independent from Newton’s method, similar structural motifs emerge at scale."
      ],
      convergence:
        "Cannon reinforces cross-method convergence — different techniques, comparable soul-world architecture."
    },
    {
      id: "stevenson",
      category: "reincarnation",
      name: "Ian Stevenson",
      tag: "UVA · empirical cases",
      teaser: "Child past-life memories tested against verifiable facts.",
      works: [
        "Twenty Cases Suggestive of Reincarnation (1966) — foundational case collection",
        "Cases of the Reincarnation Type (vols.) — global field investigations",
        "Reincarnation and Biology (1997) — birthmarks/injuries aligned with claimed past deaths"
      ],
      findings: [
        "Young children report detailed memories of previous lives, often before cultural conditioning.",
        "Statements can be checked: names, locations, manners of death, family structures.",
        "Behavioral traits and phobias sometimes match the claimed previous personality.",
        "In selected cases, birthmarks correspond to fatal wounds reported in the prior life."
      ],
      convergence:
        "Stevenson anchors Alethemora’s model in third-person evidence — not only regression narratives."
    },
    {
      id: "tucker",
      category: "reincarnation",
      name: "Jim Tucker",
      tag: "UVA · successor line",
      teaser: "Modern reincarnation cases with tighter documentation.",
      works: [
        "Life Before Life (2005) — updated child case methodology",
        "Return to Life (2013) — strong American cases with verifiable details",
        "Before (2021) — continuity of research at the University of Virginia"
      ],
      findings: [
        "Continues Stevenson’s line with improved recording and contemporary case standards.",
        "Strong American cases show verifiable matches between memory claims and historical persons.",
        "Children often lose past-life memories around ages when normal autobiographical memory consolidates.",
        "Patterns support personality continuity rather than cryptomnesia alone."
      ],
      convergence:
        "Tucker keeps the empirical thread alive — Alethemora cites this line as independent corroboration of LBL maps."
    },
    {
      id: "haraldsson",
      category: "reincarnation",
      name: "Erlendur Haraldsson",
      tag: "Cross-cultural replication",
      teaser: "Reincarnation cases replicated in Sri Lanka and India.",
      works: [
        "Miracles Are My Visiting Cards (1987) — field work with Sathya Sai Baba and case studies",
        "I Saw a Light and Came Here (2016, with Alvarado) — children’s past-life narratives",
        "Numerous peer-reviewed studies on reincarnation-type cases in Asia"
      ],
      findings: [
        "Documented reincarnation-type cases outside Western hypnosis contexts.",
        "Independent investigators verified statements in Sri Lankan and Indian child cases.",
        "Shows the phenomenon is not confined to one culture or suggestion framework.",
        "Strengthens the case for recurring structural patterns globally."
      ],
      convergence:
        "Haraldsson widens the evidence base geographically — convergence is not a Western artifact."
    },
    {
      id: "moody",
      category: "nde",
      name: "Raymond Moody",
      tag: "NDE pioneer",
      teaser: "Named and structured the near-death experience.",
      works: [
        "Life After Life (1975) — coined and catalogued the NDE",
        "Reflections on Life After Life (1977) — expanded phenomenology",
        "Glimpses of Eternity (2010) — shared death experiences and related phenomena"
      ],
      findings: [
        "Identified stable NDE elements: out-of-body state, tunnel, light, life review, return decision.",
        "Experiences occur across cultures, ages, and belief systems with motif overlap.",
        "Many experiencers report lasting ethical and existential transformation after return.",
        "Established NDE as a legitimate field of inquiry beyond anecdote."
      ],
      convergence:
        "Moody’s core motifs align with LBL and reincarnation maps — one continuity narrative from multiple gates."
    },
    {
      id: "ring",
      category: "nde",
      name: "Kenneth Ring",
      tag: "NDE phenomenology",
      teaser: "Measured core NDE profiles and lasting value change.",
      works: [
        "Life at Death (1980) — systematic NDE measurement",
        "Heading Toward Omega (1984) — transformation after NDE",
        "The Omega Project (1992) — depth psychology of experiencers"
      ],
      findings: [
        "Developed scales to quantify NDE depth and core features reliably.",
        "Deep experiencers show persistent shifts toward compassion and reduced materialism.",
        "Blind experiencers report visual phenomena during NDE — challenging simple physiological reduction.",
        "Transformation profiles resemble moral recalibration described in life-review literature."
      ],
      convergence:
        "Ring shows NDE impact is structured and enduring — not fleeting hallucination without consequence."
    },
    {
      id: "lommel",
      category: "nde",
      name: "Pim van Lommel",
      tag: "Prospective cardiology",
      teaser: "NDEs documented during documented cardiac arrest.",
      works: [
        "Consciousness Beyond Life (2010) — prospective hospital study synthesis",
        "Lancet paper (2001) — landmark prospective NDE study in survivors of cardiac arrest"
      ],
      findings: [
        "Prospective design: NDE reports collected before media contamination where possible.",
        "Consciousness phenomena reported when brain function is severely compromised.",
        "Long-term follow-up shows sustained personality and outlook changes.",
        "Argues for non-local consciousness models in mainstream medical discourse."
      ],
      convergence:
        "Van Lommel brings NDE evidence into clinical rigor — Alethemora treats this as peer to regression and child cases."
    },
    {
      id: "greyson",
      category: "nde",
      name: "Bruce Greyson",
      tag: "UVA · NDE science",
      teaser: "Decades of standardized NDE research at the University of Virginia.",
      works: [
        "After (2021) — career synthesis of NDE science",
        "The Handbook of Near-Death Experiences (2009, co-ed.) — academic reference",
        "Greyson NDE Scale — standard assessment instrument used worldwide"
      ],
      findings: [
        "Co-founded the academic study of NDEs with rigorous instruments and follow-up.",
        "NDEs cannot be reduced cleanly to oxygen loss, drugs, or expectation alone.",
        "Experiencers show measurable long-term changes in attitudes, relationships, and fear of death.",
        "Life review and moral clarity recur — matching cross-literature convergence."
      ],
      convergence:
        "Greyson institutionalizes NDE research — Alethemora cites this as the medical anchor of the same soul narrative."
    },
    {
      id: "parnia",
      category: "nde",
      name: "Sam Parnia",
      tag: "AWARE / resuscitation science",
      teaser: "Consciousness and perception studied during cardiac arrest (AWARE studies).",
      works: [
        "Erasing Death (2013) — resuscitation science and consciousness timing",
        "AWARE and AWARE II studies — prospective cardiac arrest consciousness research",
        "What Happens When We Die (2023) — updated evidence synthesis"
      ],
      findings: [
        "Prospective multi-center studies during cardiac arrest with timed consciousness markers.",
        "Documented awareness episodes when brain perfusion is critically low.",
        "Explores whether mind and brain decouple under extreme clinical conditions.",
        "Brings NDE questions into emergency medicine with structured protocols."
      ],
      convergence:
        "Parnia tests consciousness claims at the hospital bedside — complementary to Moody, Ring, and van Lommel."
    },
    {
      id: "fenwick",
      category: "nde",
      name: "Peter Fenwick",
      tag: "UK neuropsychiatry",
      teaser: "British NDE and end-of-life consciousness research.",
      works: [
        "The Truth in the Light (1995, with Elizabeth Fenwick) — NDE case anthology",
        "The Art of Dying (2008) — dying process and consciousness transitions",
        "Multiple BBC-documented studies on deathbed and NDE phenomena"
      ],
      findings: [
        "Neuropsychiatrist documenting NDEs with clinical and pastoral sensitivity.",
        "Deathbed visions and terminal lucidity studied alongside classic NDE motifs.",
        "Reports of shared or witnessed transition phenomena at the moment of death.",
        "Supports a continuum between NDE, dying, and post-death awareness themes."
      ],
      convergence:
        "Fenwick connects NDE literature to the dying process — Alethemora’s continuity model spans life, threshold, and return."
    }
  ],
  de: [
    {
      id: "newton",
      category: "lbl",
      name: "Michael Newton",
      tag: "LBL-Pionier",
      teaser: "Seelengruppen, Führer, Lebensplanung — über tausende Sitzungen kartiert.",
      works: [
        "Journey of Souls (1994) — systematische Karte der Zwischenwelt",
        "Destiny of Souls (2000) — tiefere Schichten der Seelenplanung und Räte",
        "Life Between Lives (2004) — therapeutische Methode und Fallmethodik"
      ],
      findings: [
        "Hochkonsistente Berichte über Seelengruppen, Geistführer und Rats-Szenarien bei unabhängigen Klienten.",
        "Life Review und Geburtsplanung kehren als Strukturelemente zurück — nicht als Einmal-Metaphern.",
        "Reinkarnation wird als Entwicklungszyklen beschrieben — nicht als zufällige Strafe/Belohnung.",
        "LBL-Zustände zeigen über Kulturen und Jahrzehnte vergleichbare Phänomenologie."
      ],
      convergence:
        "Newton liefert den architektonischen Bauplan, den Alethemora nutzt: Kontinuität, relationales Lernen, intentionale Inkarnation."
    },
    {
      id: "weiss",
      category: "lbl",
      name: "Brian Weiss",
      tag: "Klinische Regression",
      teaser: "Vor-Leben-Therapie unter Hypnose — Trauma-Auflösung über Leben hinweg.",
      works: [
        "Many Lives, Many Masters (1988) — bahnbrechende Vor-Leben-Regression",
        "Through Time Into Healing (1992) — therapeutische Anwendung und Ethik",
        "Same Soul, Many Bodies (2004) — Kontinuität von Seelenthemen über Inkarnationen"
      ],
      findings: [
        "Patienten unter tiefer Hypnose berichten Vor-Leben-Narrative, die gegenwärtige Symptome lösen.",
        "Emotionale und somatische Heilung kann folgen, wenn offene Seelenthemen integriert werden.",
        "Meister-/Führerfiguren erscheinen in Sitzungen — unabhängig parallel zur LBL-Literatur.",
        "Regressionsarbeit deutet auf erinnerungsähnliche Kontinuität jenseits einer Biografie hin."
      ],
      convergence:
        "Weiss verbindet klinische Praxis und Seelenkontinuität — Alethemora behandelt solche Muster als bearbeitbar, nicht nur symbolisch."
    },
    {
      id: "cannon",
      category: "lbl",
      name: "Dolores Cannon",
      tag: "QHHT / Tieftrance",
      teaser: "Tiefste Trance-Sitzungen — überlappende Karten der Seelenwelt.",
      works: [
        "Between Death and Life (1993) — Interviews aus dem Zwischen-Leben-Raum",
        "The Convoluted Universe-Reihe — erweiterte Kosmologie aus Tieftrance",
        "The Three Waves of Volunteers — Seelenaufträge und Inkarnationswahl"
      ],
      findings: [
        "Tieftrance-Probanden beschreiben Zwischenstationen, Räte und Lernsphären zwischen Leben.",
        "Seelenverträge und freiwillige Inkarnationen erscheinen als Planungsmotive.",
        "Mehrere Sitzungsebenen konvergieren auf nicht-lokales Bewusstsein und geführte Entwicklung.",
        "Unabhängig von Newtons Methode entstehen vergleichbare Strukturmotive in großer Zahl."
      ],
      convergence:
        "Cannon stärkt methodenübergreifende Konvergenz — verschiedene Techniken, vergleichbare Seelenwelt-Architektur."
    },
    {
      id: "stevenson",
      category: "reincarnation",
      name: "Ian Stevenson",
      tag: "UVA · empirische Fälle",
      teaser: "Kinder-Erinnerungen an frühere Leben — gegen überprüfbare Fakten getestet.",
      works: [
        "Twenty Cases Suggestive of Reincarnation (1966) — grundlegende Fallsammlung",
        "Cases of the Reincarnation Type (Bände) — globale Feldforschung",
        "Reincarnation and Biology (1997) — Geburtsmale/Verletzungen passend zu behaupteten Todesszenen"
      ],
      findings: [
        "Kleine Kinder berichten detaillierte Erinnerungen, oft vor kultureller Prägung.",
        "Aussagen sind prüfbar: Namen, Orte, Todesarten, Familienstrukturen.",
        "Verhaltenszüge und Phobien können zur behaupteten früheren Persönlichkeit passen.",
        "In ausgewählten Fällen entsprechen Geburtsmale tödlichen Wunden des behaupteten Vor-Lebens."
      ],
      convergence:
        "Stevenson verankert Alethemoras Modell in Drittperson-Evidenz — nicht nur Regressionsnarrative."
    },
    {
      id: "tucker",
      category: "reincarnation",
      name: "Jim Tucker",
      tag: "UVA · Nachfolgelinie",
      teaser: "Moderne Reinkarnationsfälle mit strafferer Dokumentation.",
      works: [
        "Life Before Life (2005) — aktualisierte Kinderfall-Methodik",
        "Return to Life (2013) — starke amerikanische Fälle mit überprüfbaren Details",
        "Before (2021) — Fortführung der Forschung an der University of Virginia"
      ],
      findings: [
        "Setzt Stevensons Linie mit verbesserter Aufzeichnung und zeitgemäßer Fallstandard fort.",
        "Starke US-Fälle zeigen überprüfbare Übereinstimmungen zwischen Erinnerungsaussagen und historischen Personen.",
        "Kinder verlieren Vor-Leben-Erinnerungen oft im Alter, in dem autobiographisches Gedächtnis konsolidiert.",
        "Muster sprechen für Persönlichkeitskontinuität — nicht allein Kryptomnesie."
      ],
      convergence:
        "Tucker hält den empirischen Faden aktiv — Alethemora zitiert diese Linie als unabhängige Stütze der LBL-Karten."
    },
    {
      id: "haraldsson",
      category: "reincarnation",
      name: "Erlendur Haraldsson",
      tag: "Interkulturelle Replikation",
      teaser: "Reinkarnationsfälle in Sri Lanka und Indien repliziert.",
      works: [
        "Miracles Are My Visiting Cards (1987) — Feldarbeit und Fallstudien",
        "I Saw a Light and Came Here (2016, mit Alvarado) — Kinder-Vor-Leben-Narrative",
        "Zahlreiche peer-reviewte Studien zu Reinkarnationstyp-Fällen in Asien"
      ],
      findings: [
        "Dokumentierte Reinkarnationstyp-Fälle außerhalb westlicher Hypnose-Kontexte.",
        "Unabhängige Prüfer verifizierten Aussagen in sri-lankischen und indischen Kinderfällen.",
        "Das Phänomen ist nicht auf eine Kultur oder Suggestionssituation beschränkt.",
        "Stärkt wiederkehrende Strukturmuster global."
      ],
      convergence:
        "Haraldsson erweitert die Evidenzbasis geografisch — Konvergenz ist kein westliches Artefakt."
    },
    {
      id: "moody",
      category: "nde",
      name: "Raymond Moody",
      tag: "NDE-Pionier",
      teaser: "Benannte und strukturierte die Nahtoderfahrung.",
      works: [
        "Life After Life (1975) — prägte und katalogisierte die NDE",
        "Reflections on Life After Life (1977) — erweiterte Phänomenologie",
        "Glimpses of Eternity (2010) — geteilte Sterbeerlebnisse und verwandte Phänomene"
      ],
      findings: [
        "Stabile NDE-Elemente: Körperlosigkeit, Tunnel, Licht, Lebensrückblick, Rückkehr-Entscheidung.",
        "Erlebnisse über Kulturen, Alter und Glaubenssysteme mit Motiv-Überlappung.",
        "Viele Betroffene berichten dauerhafte ethische und existenzielle Transformation.",
        "Etablierte NDE als legitimes Forschungsfeld jenseits der Anekdote."
      ],
      convergence:
        "Moodys Kernmotive passen zu LBL- und Reinkarnationskarten — eine Kontinuitäts-Erzählung durch mehrere Tore."
    },
    {
      id: "ring",
      category: "nde",
      name: "Kenneth Ring",
      tag: "NDE-Phänomenologie",
      teaser: "Kernerlebnis-Profile gemessen und dauerhaften Wertewandel dokumentiert.",
      works: [
        "Life at Death (1980) — systematische NDE-Messung",
        "Heading Toward Omega (1984) — Transformation nach NDE",
        "The Omega Project (1992) — Tiefenpsychologie der Betroffenen"
      ],
      findings: [
        "Entwickelte Skalen zur zuverlässigen Quantifizierung von NDE-Tiefe und Kernmerkmalen.",
        "Tiefe Erlebnisse zeigen anhaltende Verschiebungen zu Mitgefühl und weniger Materialismus.",
        "Blinde Betroffene berichten visuelle Phänomene während NDE — erschwert simple physiologische Reduktion.",
        "Transformationsprofile ähneln der moralischen Neukalibrierung aus Life-Review-Literatur."
      ],
      convergence:
        "Ring zeigt: NDE-Wirkung ist strukturiert und dauerhaft — keine flüchtige Halluzination ohne Folgen."
    },
    {
      id: "lommel",
      category: "nde",
      name: "Pim van Lommel",
      tag: "Prospektive Kardiologie",
      teaser: "NDEs während dokumentiertem Herzstillstand erfasst.",
      works: [
        "Consciousness Beyond Life (2010) — Synthese prospektiver Krankenhausstudien",
        "Lancet-Paper (2001) — wegweisende prospektive NDE-Studie bei Herzstillstand-Überlebenden"
      ],
      findings: [
        "Prospektives Design: NDE-Berichte möglichst vor Medienkontamination erhoben.",
        "Bewusstseinsphänomene bei schwer eingeschränkter Hirnfunktion berichtet.",
        "Langzeit-Follow-up zeigt anhaltende Persönlichkeits- und Weltsicht-Änderungen.",
        "Argument für nicht-lokale Bewusstseinsmodelle im medizinischen Diskurs."
      ],
      convergence:
        "Van Lommel bringt NDE-Evidenz in klinische Strenge — Alethemora behandelt das als Peer zu Regression und Kinderfällen."
    },
    {
      id: "greyson",
      category: "nde",
      name: "Bruce Greyson",
      tag: "UVA · NDE-Wissenschaft",
      teaser: "Jahrzehnte standardisierter NDE-Forschung an der University of Virginia.",
      works: [
        "After (2021) — Karriere-Synthese der NDE-Wissenschaft",
        "The Handbook of Near-Death Experiences (2009, mithr.) — akademisches Referenzwerk",
        "Greyson NDE Scale — weltweit genutztes Standard-Instrument"
      ],
      findings: [
        "Mitbegründete akademische NDE-Forschung mit rigorosen Instrumenten und Follow-up.",
        "NDEs lassen sich nicht sauber auf Sauerstoffmangel, Medikamente oder Erwartung reduzieren.",
        "Betroffene zeigen messbare Langzeit-Änderungen in Haltung, Beziehungen und Todesangst.",
        "Life Review und moralische Klarheit kehren zurück — passend zur Querliteratur-Konvergenz."
      ],
      convergence:
        "Greyson institutionalisiert NDE-Forschung — Alethemora zitiert das als medizinischen Anker derselben Seelen-Erzählung."
    },
    {
      id: "parnia",
      category: "nde",
      name: "Sam Parnia",
      tag: "AWARE / Reanimationswissenschaft",
      teaser: "Bewusstsein und Wahrnehmung beim Herzstillstand (AWARE-Studien).",
      works: [
        "Erasing Death (2013) — Reanimationswissenschaft und Bewusstseins-Timing",
        "AWARE- und AWARE-II-Studien — prospektive Herzstillstand-Bewusstseinsforschung",
        "What Happens When We Die (2023) — aktualisierte Evidenz-Synthese"
      ],
      findings: [
        "Prospektive Multicenter-Studien beim Herzstillstand mit zeitlichen Bewusstseinsmarkern.",
        "Dokumentierte Awareness-Episoden bei kritisch niedriger Hirnperfusion.",
        "Untersucht, ob Geist und Gehirn unter extremen klinischen Bedingungen entkoppeln.",
        "Bringt NDE-Fragen mit strukturierten Protokollen in die Notfallmedizin."
      ],
      convergence:
        "Parnia testet Bewusstseinsaussagen am Krankenbett — ergänzend zu Moody, Ring und van Lommel."
    },
    {
      id: "fenwick",
      category: "nde",
      name: "Peter Fenwick",
      tag: "UK-Neuropsychiatrie",
      teaser: "Britische NDE- und Sterbensprozess-Forschung.",
      works: [
        "The Truth in the Light (1995, mit Elizabeth Fenwick) — NDE-Fallanthologie",
        "The Art of Dying (2008) — Sterbeprozess und Bewusstseinsübergänge",
        "Mehrere BBC-dokumentierte Studien zu Sterbebett- und NDE-Phänomenen"
      ],
      findings: [
        "Neuropsychiater dokumentiert NDEs mit klinischer und pastoraler Sensibilität.",
        "Sterbebett-Visionen und terminale Klärheit neben klassischen NDE-Motiven erforscht.",
        "Berichte über geteilte oder miterlebte Übergangsphänomene im Sterbemoment.",
        "Stützt Kontinuität zwischen NDE, Sterben und post-mortem Bewusstheitsthemen."
      ],
      convergence:
        "Fenwick verbindet NDE-Literatur mit dem Sterbeprozess — Alethemoras Kontinuitätsmodell spannt Leben, Schwelle und Rückkehr."
    }
  ]
} as const;

export function getResearchCategories(language: Language) {
  return categoriesCopy[language];
}

export function getResearchers(language: Language): ResearcherProfile[] {
  return researchersCopy[language] as unknown as ResearcherProfile[];
}

export function getResearchersByCategory(language: Language, category: ResearchCategoryId) {
  return getResearchers(language).filter((r) => r.category === category);
}

export function getResearcherById(language: Language, id: string) {
  return getResearchers(language).find((r) => r.id === id) ?? null;
}
