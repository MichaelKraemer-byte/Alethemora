import type { Language } from "@/lib/i18n";

export type ScienceTopicKey = "reincarnation" | "quantum" | "sovereignty";

export type ScienceTopicContent = {
  title: string;
  tagline: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const scienceTopicOrder: ScienceTopicKey[] = ["reincarnation", "quantum", "sovereignty"];

export const scienceTopics: Record<ScienceTopicKey, Record<Language, ScienceTopicContent>> = {
  reincarnation: {
    en: {
      title: "Reincarnation & Afterlife Research",
      tagline: "Empirical patterns beyond one lifetime",
      intro:
        "Alethemora treats reincarnation and afterlife research as a disciplined evidence field, not a belief badge. The focus is pattern consistency, cross-source convergence, and practical implications for ethical living.",
      sections: [
        {
          heading: "Research Lineage",
          paragraphs: [
            "Michael Newton documented highly consistent structures in thousands of deep-regression sessions: soul groups, life planning, guides, life review, and developmental stages.",
            "Ian Stevenson and Jim Tucker added a complementary evidentiary layer through child cases with verifiable memories, behavioral correspondences, and birthmark/injury parallels in selected datasets."
          ],
          bullets: [
            "Convergence across independent methods matters more than isolated anecdotes.",
            "Alethemora uses these findings as working models, not as infallible doctrine."
          ]
        },
        {
          heading: "Near-Death Convergence",
          paragraphs: [
            "Near-death studies provide a second line of evidence: stable motifs such as expanded awareness, panoramic review, non-local perception, and enduring value shifts after return.",
            "For practice, this reframes death from annihilation panic toward continuity-responsibility: how one lives now shapes experiential quality later."
          ]
        },
        {
          heading: "Practical Consequence",
          paragraphs: [
            "If consciousness continues, integrity is not moral theater; it is energetic realism. Harm, deception, and denial remain unresolved loads in the field of the self.",
            "Therefore daily reflection, forgiveness, and corrective action are intelligent preparation, not religious guilt-management."
          ]
        }
      ]
    },
    de: {
      title: "Reinkarnation & Jenseitsforschung",
      tagline: "Empirische Muster jenseits einer Lebensspanne",
      intro:
        "Alethemora behandelt Reinkarnations- und Jenseitsforschung als diszipliniertes Evidenzfeld, nicht als Glaubensabzeichen. Im Fokus stehen Musterkonsistenz, Quellenkonvergenz und praktische Konsequenzen für ein integres Leben.",
      sections: [
        {
          heading: "Forschungslinie",
          paragraphs: [
            "Michael Newton dokumentierte in tausenden Tiefenregressionen hochkonsistente Strukturen: Seelengruppen, Lebensplanung, Geistführer, Life Review und Reifestufen.",
            "Ian Stevenson und Jim Tucker ergänzten eine zweite Evidenzschicht über Kindheitsfälle mit überprüfbaren Erinnerungen, Verhaltenskorrespondenzen und in ausgewählten Datensätzen passenden Geburtsmal-/Verletzungsmustern."
          ],
          bullets: [
            "Konvergenz über unabhängige Methoden ist wichtiger als Einzelanekdoten.",
            "Alethemora nutzt diese Befunde als Arbeitsmodelle, nicht als unfehlbares Dogma."
          ]
        },
        {
          heading: "Konvergenz mit Nahtoderfahrung",
          paragraphs: [
            "Nahtoderfahrungsforschung liefert eine zweite Linie: stabile Motive wie erweiterte Wahrnehmung, panoramischer Rückblick, nicht-lokale Bewusstheit und dauerhafte Wertverschiebungen nach Rückkehr.",
            "Für die Praxis bedeutet das: Tod wird weniger als Auslöschung und mehr als Kontinuität mit Verantwortung verstanden."
          ]
        },
        {
          heading: "Praktische Konsequenz",
          paragraphs: [
            "Wenn Bewusstsein fortbesteht, ist Integrität keine Moralinszenierung, sondern energetischer Realismus. Schaden, Täuschung und Verdrängung bleiben als ungelöste Last im Feld des Selbst.",
            "Darum sind tägliche Reflexion, Vergebung und Korrekturakte intelligente Vorbereitung, nicht religiöses Schulddenken."
          ]
        }
      ]
    }
  },
  quantum: {
    en: {
      title: "Quantum Physics & Resonance",
      tagline: "From mechanism to participatory reality",
      intro:
        "Alethemora does not misuse physics as mystic decoration. It draws a careful bridge: modern physics destabilizes naive materialism and opens conceptual space for non-local, relational models of consciousness.",
      sections: [
        {
          heading: "Non-Locality & Relational Structure",
          paragraphs: [
            "Quantum non-local correlations challenge strictly separative worldviews. At minimum, they force humility about what 'independent objects' means at fundamental levels.",
            "In practice language, this supports a resonance paradigm: inner state and outer expression are not isolated events but coupled dynamics in a shared field."
          ]
        },
        {
          heading: "Observer and Measurement",
          paragraphs: [
            "Interpretations differ, but one insight remains: observation and measured reality cannot be treated as fully detached in every framework.",
            "Alethemora translates this philosophically: attention quality matters. What is repeatedly attended, emotionally charged, and enacted tends to stabilize as lived reality."
          ],
          bullets: [
            "Attention is not magic; it is directional energy with cumulative effects.",
            "Discipline of perception precedes discipline of action."
          ]
        },
        {
          heading: "Resonance Ethics",
          paragraphs: [
            "Resonance means coherence between thought, feeling, speech, and action. Dissonance means fragmentation across these layers.",
            "Hence the framework is causal, not moralistic: coherent patterns increase clarity and vitality; incoherent patterns increase noise and suffering."
          ]
        }
      ]
    },
    de: {
      title: "Quantenphysik & Resonanz",
      tagline: "Vom Mechanismus zur teilnehmenden Wirklichkeit",
      intro:
        "Alethemora missbraucht Physik nicht als spirituelle Dekoration. Es baut eine präzise Brücke: Moderne Physik erschüttert naiven Materialismus und öffnet einen Denkraum für nicht-lokale, relationale Bewusstseinsmodelle.",
      sections: [
        {
          heading: "Nichtlokalität & relationale Struktur",
          paragraphs: [
            "Quantenkorrelationen stellen strikt trennende Weltbilder infrage. Mindestens erzwingen sie epistemische Demut darüber, was auf fundamentaler Ebene als 'unabhängiges Objekt' gilt.",
            "In Praxissprache stützt das ein Resonanzmodell: innerer Zustand und äußerer Ausdruck sind keine isolierten Ereignisse, sondern gekoppelte Dynamiken im gemeinsamen Feld."
          ]
        },
        {
          heading: "Beobachter und Messung",
          paragraphs: [
            "Interpretationen unterscheiden sich, doch eine Einsicht bleibt: Beobachtung und gemessene Wirklichkeit lassen sich nicht in jedem Rahmen vollständig trennen.",
            "Alethemora übersetzt das philosophisch: Die Qualität von Aufmerksamkeit ist relevant. Was wiederholt fokussiert, emotional aufgeladen und gehandelt wird, stabilisiert sich als gelebte Realität."
          ],
          bullets: [
            "Aufmerksamkeit ist keine Magie, sondern gerichtete Energie mit Kumulationseffekt.",
            "Disziplin der Wahrnehmung geht Disziplin des Handelns voraus."
          ]
        },
        {
          heading: "Resonanz-Ethik",
          paragraphs: [
            "Resonanz bedeutet Kohärenz zwischen Denken, Fühlen, Sprechen und Handeln. Dissonanz bedeutet Fragmentierung zwischen diesen Ebenen.",
            "Darum ist der Ansatz kausal statt moralistisch: kohärente Muster erhöhen Klarheit und Vitalität, inkohärente Muster erhöhen Rauschen und Leiden."
          ]
        }
      ]
    }
  },
  sovereignty: {
    en: {
      title: "Decentralized Sovereignty & Bitcoin",
      tagline: "Economic freedom as spiritual infrastructure",
      intro:
        "Alethemora treats economics as applied ethics. If soul growth requires responsibility, then monetary architecture must reward honesty, time preference discipline, and voluntary coordination.",
      sections: [
        {
          heading: "Austrian Foundation",
          paragraphs: [
            "In Austrian economics, capital is condensed time, effort, and risk. Distorting money distorts human coordination itself.",
            "Inflationary and centrally manipulated systems externalize costs to the less connected while rewarding proximity to issuance and leverage."
          ],
          bullets: [
            "Money is not neutral plumbing; it is civilizational signal structure.",
            "Bad incentives produce moral and psychological downstream effects."
          ]
        },
        {
          heading: "Bitcoin as Monetary Rule-Set",
          paragraphs: [
            "Bitcoin introduces a transparent, finite, non-discretionary rule set. In Alethemora terms, it can be viewed as 'frozen life energy': saved effort protected from arbitrary dilution.",
            "This is why it maps to sovereignty: it reduces dependence on central decree and restores long-horizon planning for individuals and communities."
          ]
        },
        {
          heading: "Bridge to Soul Mastery",
          paragraphs: [
            "Spiritual work without material sovereignty remains structurally vulnerable. Constant extraction pressure narrows cognition toward survival loops.",
            "A freer monetary substrate supports dignity, voluntary cooperation, and the time-depth required for real inner development."
          ]
        }
      ]
    },
    de: {
      title: "Dezentrale Souveränität & Bitcoin",
      tagline: "Ökonomische Freiheit als spirituelle Infrastruktur",
      intro:
        "Alethemora versteht Ökonomie als angewandte Ethik. Wenn Seelenwachstum Verantwortung braucht, muss auch die monetäre Architektur Ehrlichkeit, Zeitpräferenz-Disziplin und freiwillige Koordination belohnen.",
      sections: [
        {
          heading: "Österreichisches Fundament",
          paragraphs: [
            "In der Österreichischen Schule ist Kapital verdichtete Zeit, Anstrengung und Risiko. Wer Geld verzerrt, verzerrt menschliche Koordination selbst.",
            "Inflationäre und zentral manipulierbare Systeme externalisieren Kosten auf weniger Verbundene und belohnen Nähe zu Emission und Leverage."
          ],
          bullets: [
            "Geld ist nicht neutrale Infrastruktur, sondern zivilisatorische Signalstruktur.",
            "Schlechte Anreize erzeugen moralische und psychologische Folgewirkungen."
          ]
        },
        {
          heading: "Bitcoin als monetäres Regelwerk",
          paragraphs: [
            "Bitcoin etabliert ein transparentes, endliches, nicht-diskretionäres Regelwerk. In Alethemora-Sprache kann es als 'gefrorene Lebensenergie' gelesen werden: gespeicherte Leistung, geschützt vor willkürlicher Verwässerung.",
            "Darum korrespondiert Bitcoin mit Souveränität: Abhängigkeit von zentralem Dekret sinkt, langfristige Planung für Individuen und Gemeinschaften steigt."
          ]
        },
        {
          heading: "Brücke zur Seelenmeisterschaft",
          paragraphs: [
            "Spirituelle Arbeit ohne materielle Souveränität bleibt strukturell verletzlich. Permanenter Extraktionsdruck verengt Kognition auf Überlebensschleifen.",
            "Ein freieres monetäres Substrat unterstützt Würde, freiwillige Kooperation und die zeitliche Tiefe, die echte innere Entwicklung benötigt."
          ]
        }
      ]
    }
  }
};
