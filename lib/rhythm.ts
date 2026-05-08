import type { Language } from "@/lib/i18n";

export type RhythmLevel = "level1" | "level2" | "level3";

export type RhythmBlock = {
  key: "morning" | "day" | "evening";
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  purpose: Record<Language, string>;
  levels: Record<RhythmLevel, Record<Language, string[]>>;
};

export const levelMeta: Record<RhythmLevel, Record<Language, { label: string; description: string }>> = {
  level1: {
    en: {
      label: "Level 1 - Minimum",
      description: "First four weeks: compact base practice for stability and habit formation."
    },
    de: {
      label: "Stufe 1 - Minimum",
      description: "Erste vier Wochen: kurze Grundpraxis für Stabilität und Gewohnheitsbildung."
    }
  },
  level2: {
    en: {
      label: "Level 2 - Foundation",
      description: "Next eight weeks: expand morning practice plus deep reflection and digital hygiene."
    },
    de: {
      label: "Stufe 2 - Fundament",
      description: "Nächste acht Wochen: Ausbau der Morgenpraxis plus Tiefenreflexion und digitale Hygiene."
    }
  },
  level3: {
    en: {
      label: "Level 3 - Mastery",
      description: "From month four onward: full rhythm as a durable vessel for soul-led living."
    },
    de: {
      label: "Stufe 3 - Meisterschaft",
      description: "Ab Monat vier: vollständiger Rhythmus als dauerhaftes Gefäß für Seelenführung."
    }
  }
};

export const rhythmBlocks: RhythmBlock[] = [
  {
    key: "morning",
    title: { en: "Morning", de: "Morgen" },
    subtitle: { en: "The awakening of the soul", de: "Das Erwachen der Seele" },
    purpose: {
      en: "Begin the day from the soul, not from the ego.",
      de: "Den Tag aus der Seele heraus beginnen, nicht aus dem Ego."
    },
    levels: {
      level1: {
        en: [
          "5 minutes of silence immediately after waking.",
          "Feel 3 lines of gratitude consciously.",
          "Short dream-window note (last dream, first feeling, first image)."
        ],
        de: [
          "5 Minuten Stille direkt nach dem Erwachen.",
          "3 Sätze Dankbarkeit bewusst fühlen.",
          "Kurze Notiz zum Traumfenster (letzter Traum, erstes Gefühl, erstes Bild)."
        ]
      },
      level2: {
        en: [
          "Dream window (2-5 min): brief note in dream journal or symbol journal.",
          "Alignment (5 min): three breaths and the question 'What does my soul want today?'",
          "Movement (15-30 min) to activate the vessel.",
          "Meditation (10-20 min) as calm observation.",
          "Gratitude (3-5 min) to open the heart for the day."
        ],
        de: [
          "Traumfenster (2-5 Min): kurze Notiz im Traumtagebuch oder Symboljournal.",
          "Ausrichtung (5 Min): Drei Atemzüge und die Frage 'Was will meine Seele heute?'.",
          "Bewegung (15-30 Min) als Aktivierung des Gefäßes.",
          "Meditation (10-20 Min) als ruhige Beobachtung.",
          "Dankbarkeit (3-5 Min) als Herzöffnung für den Tag."
        ]
      },
      level3: {
        en: [
          "Complete morning practice daily as a non-negotiable core sequence.",
          "Distraction-free body activation (ideally without media).",
          "Anchor alignment as lived inner direction, not just a thought."
        ],
        de: [
          "Vollständige Morgenpraxis täglich als nicht verhandelbare Kernsequenz.",
          "Ablenkungsfreie Körperaktivierung (wenn möglich ohne Medien).",
          "Ausrichtung nicht nur denken, sondern als klare innere Richtung verankern."
        ]
      }
    }
  },
  {
    key: "day",
    title: { en: "Day", de: "Tag" },
    subtitle: { en: "The soul in daily life", de: "Die Seele im Alltag" },
    purpose: {
      en: "Carry morning alignment through the whole day.",
      de: "Die Morgenausrichtung durch den gesamten Tag tragen."
    },
    levels: {
      level1: {
        en: [
          "Before important encounters: three-breaths practice.",
          "Prepare evening reflection by noting key moments during the day."
        ],
        de: [
          "Vor wichtigen Begegnungen: Drei-Atemzüge-Praxis.",
          "Abends 5 Minuten schriftliche Reflexion vorbereiten, indem Schlüsselmomente notiert werden."
        ]
      },
      level2: {
        en: [
          "Three-breaths practice before conversations, decisions, and conflict.",
          "At least one mindful meal without a screen.",
          "Midday silence break (5-10 min) for re-alignment.",
          "Digital hygiene with clear time windows instead of passive scrolling."
        ],
        de: [
          "Drei-Atemzüge-Praxis vor Gesprächen, Entscheidungen und Konflikten.",
          "Mindestens eine achtsame Mahlzeit ohne Bildschirm.",
          "Mittagspause in Stille (5-10 Min) zur Neuausrichtung.",
          "Digitale Hygiene mit klaren Zeiten statt passivem Scrollen."
        ]
      },
      level3: {
        en: [
          "Hold every encounter consciously as a soul encounter.",
          "Presence as default mode: repeated micro-pauses instead of reactivity.",
          "Use technology by one criterion: does this serve the soul or numb it?"
        ],
        de: [
          "Jede Begegnung bewusst als Seelenbegegnung halten.",
          "Präsenz als Standardmodus: wiederholte Mikro-Pausen statt Reaktivität.",
          "Digitale Nutzung konsequent nach dem Kriterium: dient es der Seele oder betäubt es sie?"
        ]
      }
    }
  },
  {
    key: "evening",
    title: { en: "Evening", de: "Abend" },
    subtitle: { en: "Return to the soul", de: "Die Rückkehr zur Seele" },
    purpose: {
      en: "Honor the day, clear your energy, and enter sleep consciously.",
      de: "Den Tag würdigen, energetisch reinigen und klar in den Schlaf gehen."
    },
    levels: {
      level1: {
        en: [
          "5-minute daily reflection with three questions:",
          "Where did I act from the soul?",
          "Where did ego take over?",
          "What do I want to live differently tomorrow?"
        ],
        de: [
          "5 Minuten Tagesreflexion mit drei Fragen:",
          "Wo habe ich aus der Seele gehandelt?",
          "Wo hat das Ego übernommen?",
          "Was will ich morgen anders leben?"
        ]
      },
      level2: {
        en: [
          "Daily reflection (10-15 min) as a life review in miniature.",
          "Forgiveness practice (~5 min): 'I forgive you. I forgive myself.'",
          "Body release (~10 min): breath, stretching, or calm body scan.",
          "Sleep intention (2-3 min): open to guidance during sleep."
        ],
        de: [
          "Tagesreflexion (10-15 Min) als Life Review im Kleinen.",
          "Vergebung des Tages (ca. 5 Min): 'Ich vergebe dir. Ich vergebe mir.'",
          "Körperentspannung (ca. 10 Min): Atmung, Dehnung oder ruhige Körperwahrnehmung.",
          "Schlafintention (2-3 Min): Öffnung für Führung im Schlaf."
        ]
      },
      level3: {
        en: [
          "Evening practice as consistent closure of each day.",
          "Resolve conflict and resentment energy the same day whenever possible.",
          "Conscious transition into sleep as the second threshold time of the day."
        ],
        de: [
          "Abendpraxis als konsequenter Abschluss jedes Tages.",
          "Konflikt- und Grollenergie möglichst am selben Tag auflösen.",
          "Bewusster Übergang in den Schlaf als zweite Schwellenzeit des Tages."
        ]
      }
    }
  }
];
