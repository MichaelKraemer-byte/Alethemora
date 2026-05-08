export type PracticeTierKey = "body" | "mind" | "soul";

export type PracticeTier = {
  key: PracticeTierKey;
  title: string;
  subtitle: string;
  concept: string;
  colorClass: string;
  resonanceTooltip: string;
  dissonanceTooltip: string;
  sections: { title: string; bullets: string[] }[];
  resonance: string[];
  dissonance: string[];
};

export const practiceTiers: PracticeTier[] = [
  {
    key: "body",
    title: "KÖRPER",
    subtitle: "Das Gefäß",
    concept:
      "Der Körper ist der Tempel der Seele. Ohne ein stabiles, vitales Gefäß kann die Seele nicht vollständig durch den Menschen wirken.",
    colorClass: "from-amber-500/35 to-red-500/30 border-amber-300/45",
    resonanceTooltip: "Resonanz: Vitalität, Klarheit, geerdete Präsenz.",
    dissonanceTooltip: "Dissonanz: Trägheit, Entzündung, blockierte Lebensenergie.",
    sections: [
      {
        title: "Vitalität & Gesundheit",
        bullets: [
          "Schlaf als höchste Regenerationspraxis bewusst pflegen",
          "Bewegung täglich — nicht als Pflicht, sondern als Ausdruck von Lebendigkeit",
          "Krafttraining zum Aufbau und Erhalt der Muskulatur",
          "Ausdauer für Herz, Lunge und Nervensystem"
        ]
      },
      {
        title: "Ernährung & inneres Ökosystem",
        bullets: [
          "Nahrung als Information für Körper und Geist verstehen",
          "Darmgesundheit pflegen: Fermentation, Ballaststoffe, lebendige Lebensmittel",
          "Entzündungsarme, nährstoffreiche Ernährung als Grundlage geistiger Klarheit",
          "Bewusstes Fasten zur Reinigung und Selbstwahrnehmung"
        ]
      },
      {
        title: "Körperbewusstsein",
        bullets: [
          "Den eigenen Körper kennen: Organe, Nervensystem, hormonelles System",
          "Stresssignale früh erkennen und regulieren",
          "Atem als direktes Werkzeug zwischen Körper und Geist nutzen"
        ]
      },
      {
        title: "Schmerz & Krankheit als Seelenlektion",
        bullets: [
          "Körperliche Leiden nicht nur bekämpfen, sondern zuerst verstehen — was will diese Erfahrung zeigen?",
          "Krankheit als mögliche bewusst gewählte Lektion der Seele respektieren",
          "Schmerz als Lehrmeister annehmen, ohne im Leiden zu verharren"
        ]
      },
      {
        title: "Sexualität & Lebensenergie",
        bullets: [
          "Sexuelle Energie als eine der stärksten Lebenskräfte bewusst wahrnehmen",
          "Lebensenergie nicht gedankenlos zerstreuen, sondern bewusst führen und kanalisieren",
          "Sexualität als Ausdruck von Verbindung und Schöpfung verstehen — nicht primär als Triebbefriedigung"
        ]
      }
    ],
    resonance: [
      "Stabiler Schlafrhythmus und regelmäßige Bewegung",
      "Nährstoffreiche, entzündungsarme Ernährung",
      "Atemarbeit und frühe Stressregulation",
      "Verantwortlicher Umgang mit sexueller Energie"
    ],
    dissonance: [
      "Chronischer Schlafmangel und Bewegungsarmut",
      "Digitale Überstimulation beim Essen, Überkonsum",
      "Ignorierte Körpersignale und verdrängter Schmerz",
      "Gedankenlose Zerstreuung von Lebensenergie"
    ]
  },
  {
    key: "mind",
    title: "GEIST",
    subtitle: "Das Werkzeug",
    concept:
      "Der Geist ist kein Feind — er ist das präziseste Werkzeug der Seele. Seelenmeisterschaft bedeutet, ihn zu schulen, nicht ihn zu unterdrücken.",
    colorClass: "from-cyan-500/30 to-blue-500/30 border-cyan-300/45",
    resonanceTooltip: "Resonanz: Fokus, Unterscheidungskraft, geistige Souveränität.",
    dissonanceTooltip: "Dissonanz: Reaktivität, Zerstreuung, Konditionierungs-Schleifen.",
    sections: [
      {
        title: "Psychologisches Fundament",
        bullets: [
          "Grundwissen in Psychologie, Pädagogik und Hirnforschung aufbauen",
          "Eigene Konditionierungen, Glaubenssätze und Traumata erkennen und auflösen",
          "Das Ego als nützliches Werkzeug führen — nicht von ihm geführt werden",
          "Mündigkeit und kommunikative Reife stetig weiterentwickeln"
        ]
      },
      {
        title: "Dopamin-Balance & Geisteshygiene",
        bullets: [
          "Bewusster Umgang mit digitalen Stimuli: soziale Medien, Serien, Pornografie, Überkonsum",
          "Die Langeweile umarmen lernen — sie ist der Eingang zur Stille der Seele",
          "Belohnungsaufschub kultivieren als Zeichen innerer Reife",
          "Dopaminquellen bewusst wählen: Schöpfung statt Konsum"
        ]
      },
      {
        title: "Wissensfelder des Geistes",
        bullets: [
          "Nahtoderfahrungen, Reinkarnationsforschung (Newton, Stevenson, Weiss u.a.) studieren",
          "Quantenphysik und ihre spirituellen Implikationen verstehen",
          "Astronomie und Naturwissenschaft als Staunen-Praxis",
          "Österreichische Ökonomie als Fundament souveräner Gesellschaftsorganisation",
          "Bitcoin als dezentrales, ehrliches Geldsystem für eine freie Zivilisation begreifen"
        ]
      },
      {
        title: "Schattenarbeit",
        bullets: [
          "Die abgelehnten, verdrängten und beschämten Teile des Selbst aktiv aufsuchen",
          "Eigene Wiederholungsmuster in Beziehungen, Konflikten und Selbstsabotage erkennen",
          "Den Schatten nicht bekämpfen, sondern integrieren — er trägt verborgene Kraft",
          "Therapeutische Unterstützung als Zeichen von Stärke, nicht Schwäche annehmen"
        ]
      },
      {
        title: "Dienst durch Wissen",
        bullets: [
          "Hilfe an Hilfsbedürftige: Kinder, Kranke, Alte, Menschen mit Behinderung",
          "Wissen teilen, ohne zu missionieren",
          "Spenden oder aktive Fürsorge als Ausdruck von Fülle, nicht Pflicht"
        ]
      }
    ],
    resonance: [
      "Ehrliche Selbstreflexion und klare Verantwortungsübernahme",
      "Digitale Hygiene und Belohnungsaufschub",
      "Schattenintegration statt Verdrängung",
      "Wissensaufbau mit Dienstorientierung"
    ],
    dissonance: [
      "Digitale Überstimulation und Pornografie",
      "Rationalisierung ohne innere Arbeit",
      "Unintegrierter Schatten und Selbstsabotage",
      "Wissen als Ego-Dekoration statt Dienst"
    ]
  },
  {
    key: "soul",
    title: "SEELE",
    subtitle: "Das Wesen",
    concept:
      "Die Seele ist nicht etwas, das man entwickelt — sie ist das, was man ist. Seelenpraxis bedeutet, die Schichten abzutragen, die sie verdecken.",
    colorClass: "from-soul-gold/35 to-zinc-100/25 border-soul-gold/50",
    resonanceTooltip: "Resonanz: Einheit, Mitgefühl, intuitive Führung.",
    dissonanceTooltip: "Dissonanz: Trennungserleben, Ego-Impuls, innere Taubheit.",
    sections: [
      {
        title: "Stille & Achtsamkeit",
        bullets: [
          "Meditation als tägliche Grundpraxis — nicht als Technik, sondern als Heimkehr",
          "Achtsamkeit im Alltag: vollständige Präsenz in einfachen Momenten",
          "Stille aktiv suchen und aushalten lernen"
        ]
      },
      {
        title: "Mitgefühl & Liebe als Praxis",
        bullets: [
          "Mitgefühlsmeditationen (Metta, Loving-Kindness) als regelmäßige Übung",
          "Aktiv Liebesgefühle nach außen investieren: Menschen, Tiere, Natur, Pflanzen, Pilze, das Universum",
          "Den anderen als Seele sehen — auch in Konflikten"
        ]
      },
      {
        title: "Die bewusste Übung des freien Willens",
        bullets: [
          "Täglich kleine Momente bewusst wahrnehmen, in denen man gegen den Impuls des Egos wählt",
          "Den freien Willen als heiliges Werkzeug der Seele verstehen — nicht als Freiheit des Egos",
          "Jede bewusste Wahl im Dienst der Seele als Akt der Seelenmeisterschaft feiern"
        ]
      },
      {
        title: "Kreativität als Seelenausdruck",
        bullets: [
          "Einen kreativen Kanal finden und regelmäßig leben: Schreiben, Musik, Handwerk, Kunst",
          "Schöpfen als spirituelle Praxis begreifen — jede Schöpfung ist ein Ausdruck der Seele"
        ]
      },
      {
        title: "Die innere Sprache der Seele",
        bullets: [
          "Träume, Symbole, Synchronizitäten und Intuitionen als Seelenkommunikation ernst nehmen",
          "Ein Traumtagebuch oder Symboljournal führen",
          "Innere Bilder und Impulse nicht sofort rational auflösen — erst fühlen, dann verstehen"
        ]
      },
      {
        title: "Kosmisches Bewusstsein als Zielzustand",
        bullets: [
          "Das Wissen um die Einheit aller Seelen nicht nur als Konzept kennen, sondern als Wahrnehmungshintergrund des Alltags kultivieren",
          "Den Moment erkennen, wenn man aus dem Einheitsbewusstsein herausfällt — und bewusst zurückkehren",
          "Das Leben aus der Perspektive der Seele führen: Was würde meine Seele in diesem Moment wählen?"
        ]
      }
    ],
    resonance: [
      "Tägliche Stillepraxis und meditative Heimkehr",
      "Mitgefühl im Konflikt statt Urteil",
      "Bewusste Entscheidungen gegen Ego-Impulse",
      "Kreativer Ausdruck als gelebte Seelensprache"
    ],
    dissonance: [
      "Dauerhafte Betäubung durch Reize und Konsum",
      "Zynismus, Groll und Verhärtung",
      "Ignorierte Intuition und verdrängte Symbolik",
      "Anhaftung an Trennung statt Einheitsbewusstsein"
    ]
  }
];

export const naturalCausalityText =
  "Resonanz und Dissonanz sind keine moralischen Kategorien und keine Sündenlehre. Sie beschreiben natürliche Kausalität im Energiemanagement: Was Klarheit, Integrität und Präsenz stärkt, erhöht Resonanz. Was betäubt, fragmentiert oder bindet, erzeugt Dissonanz.";
