import type { Language } from "@/lib/i18n";

export type ScienceTopicKey = "reincarnation" | "resonanz" | "sovereignty";

export type ScienceTopicContent = {
  title: string;
  tagline: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  closing?: string;
};

export const scienceTopicOrder: ScienceTopicKey[] = ["reincarnation", "resonanz", "sovereignty"];

// TODO: EN prüfen
export const scienceTopics: Record<ScienceTopicKey, Record<Language, ScienceTopicContent>> = {
  reincarnation: {
    de: {
      title: "Leben nach dem Tod",
      tagline: "Eine Landkarte, kein Beweis",
      intro:
        "Die Reinkarnationsforschung, allen voran die Arbeit von Dr. Michael Newton, zeichnet über Jahrzehnte hinweg ein erstaunlich konsistentes Bild eines Bewusstseins, das den Tod überdauert, sich über viele Leben hinweg entwickelt und sich seine Herausforderungen mit einem tieferen Sinn aussucht. Diese Berichte sind wissenschaftlich nicht abschließend beweisbar — sie werden hier als Landkarte verstanden, nicht als Beweis. Neben Newtons Berichten nennt das Buch die Nahtodforschung von Pim van Lommel. Auch sie steht hier als Landkarte, nicht als Beweis.",
      sections: [
        {
          heading: "Die Wahl des Lebens",
          paragraphs: [
            "Vor jedem Leben betrachtet die Seele gemeinsam mit ihren Führern mögliche Leben und mögliche Körper und wählt das, was ihrem nächsten Schritt dient. Sie sieht dabei Schlüsselmomente, aber kein fertiges Drehbuch. Der Weg ist angelegt, der Ausgang ist offen. Was die Seele aus den Umständen macht, entscheidet sie im Leben selbst, aus freiem Willen."
          ]
        },
        {
          heading: "Das Vergessen",
          paragraphs: [
            "Beim Eintritt in den Körper vergisst die Seele, woher sie kommt und was sie sich vorgenommen hat. Newtons Klienten beschreiben diese Amnesie als bewusst und notwendig. Würde die Seele sich an alles erinnern, wären die Prüfungen des Lebens keine echten Prüfungen. Erst im Vergessen wird jede liebevolle Entscheidung zu einer wirklichen Wahl."
          ]
        },
        {
          heading: "Keine Hölle",
          paragraphs: [
            "In keinem der Berichte gibt es Verdammnis. Auch Seelen, die im Leben anderen schweren Schaden zugefügt haben, werden nicht bestraft, sondern gesondert betreut, neu ausgerichtet und auf ein weiteres Leben vorbereitet, in dem sie wiedergutmachen können. Das ist keine Nachsicht ohne Folgen: In der Rückschau erlebt die Seele von innen, was sie anderen angetan hat. Aber es ist immer ein Weg zurück, nie ein Ende."
          ]
        },
        {
          heading: "Der Sinn",
          paragraphs: [
            "Die Seele kommt nicht auf die Erde, um bestraft zu werden oder um etwas abzuarbeiten, sondern um zu reifen. Jede Rückkehr auf die Erde ist dabei eine freie Entscheidung. Keine Seele wird gezwungen; sie kann ruhen, zögern oder ein Leben ablehnen. So verstanden ist Karma kein Urteil von außen, sondern Selbsterkenntnis: der ehrliche Blick der Seele auf sich selbst und der innere Wunsch, zu wachsen.",
            "Der Tod trennt nicht. Newtons Klienten beschreiben, dass Seelen nach ihrer Heimkehr ihre Liebsten auf der Erde weiter begleiten und trösten können."
          ]
        }
      ]
    },
    en: {
      title: "Life after death",
      tagline: "A map, not a proof",
      intro:
        "Reincarnation research, above all the work of Dr. Michael Newton, draws a remarkably consistent picture, across decades, of a consciousness that survives death, develops over many lives, and chooses its challenges with a deeper sense. These reports cannot be finally proven by science — they are understood here as a map, not as proof. Beside Newton’s reports, the book names the near-death research of Pim van Lommel. That, too, stands here as a map, not as proof.",
      sections: [
        {
          heading: "The choice of a life",
          paragraphs: [
            "Before each life the soul, together with its guides, looks at possible lives and possible bodies and chooses what serves its next step. It sees key moments, but no finished script. The path is laid out, the outcome is open. What the soul makes of the circumstances, it decides in the life itself, out of free will."
          ]
        },
        {
          heading: "The forgetting",
          paragraphs: [
            "On entering the body the soul forgets where it comes from and what it set out to do. Newton’s clients describe this amnesia as conscious and necessary. If the soul remembered everything, the tests of life would not be real tests. Only in forgetting does every loving decision become a real choice."
          ]
        },
        {
          heading: "No hell",
          paragraphs: [
            "In none of the reports is there damnation. Even souls who caused serious harm to others in life are not punished. They are cared for apart, realigned, and prepared for another life in which they can make amends. This is not leniency without consequence: in the review the soul experiences from the inside what it did to others. But it is always a way back, never an end."
          ]
        },
        {
          heading: "The sense of it",
          paragraphs: [
            "The soul does not come to earth to be punished or to work something off, but to mature. Every return to earth is a free decision. No soul is forced; it can rest, hesitate, or decline a life. Understood this way, karma is not a judgment from outside, but self-knowledge: the soul’s honest look at itself, and the inner wish to grow.",
            "Death does not separate. Newton’s clients describe souls who, after coming home, can still accompany and comfort the people they love on earth."
          ]
        }
      ]
    }
  },
  resonanz: {
    de: {
      title: "Energie, Schwingung und Resonanz",
      tagline: "Messbare Rhythmen und ein Bild der Seele",
      intro:
        "Ich achte auf meine Energie, meine Schwingung und auf das, womit ich in Resonanz gehe. Newton beschreibt die Seele als Energie — als Licht, das klarer oder trüber sein kann, je nach Reife und innerem Zustand. Auch im Alltag spüre ich, dass ich nicht nur denke und handle, sondern schwinge: Manche Menschen, Orte und Tätigkeiten heben mich, andere ziehen mich hinunter.",
      sections: [
        {
          heading: "Was klärt, was trübt",
          paragraphs: [
            "Was trübt meine Energie? Ungelöste Konflikte, Groll, Angst, Sucht, Unehrlichkeit. Was klärt sie? Vergebung, Stille, Liebe, Integrität, Dienst, Musik, Bewegung, Natur. Ich wähle bewusst, womit ich in Resonanz gehe: welche Menschen ich nah an mich lasse, welche Bilder und Worte ich in mich aufnehme, welchen Rhythmus mein Tag hat.",
            "Dabei verwechsle ich nicht Unbequemes mit Schädlichem. Die ehrliche Kritik eines Freundes kann mich im ersten Moment hinunterziehen — und doch ist sie ein Geschenk, wenn sie wahr ist. Was mich fordert, fühlt sich oft schwer an und lässt mich wachsen; was mir wirklich schadet, macht mich auf Dauer kleiner, ängstlicher und unfreier."
          ]
        },
        {
          heading: "Schwingung und Resonanz",
          paragraphs: [
            "Dem Erfinder Nikola Tesla wird der Satz zugeschrieben: „Wenn du die Geheimnisse des Universums verstehen willst, denke in Begriffen von Energie, Frequenz und Schwingung.“ Ob er ihn je so gesagt hat, ist nicht belegt — aber er trifft etwas. In der Physik ist Resonanz ein genau beschriebenes Phänomen: Ein schwingender Körper bringt einen anderen zum Mitschwingen, wenn beide aufeinander abgestimmt sind.",
            "Auch der Mensch lebt in messbaren Rhythmen — Herzschlag, Atem, Hirnwellen. Die Forschung zeigt, dass langsames, ruhiges Atmen den Herzrhythmus in einen gleichmäßigen, kohärenten Zustand bringt, dass Gefühle von Mensch zu Mensch überspringen und dass sich die Gehirnaktivität von Menschen, die einander wirklich zuhören, aneinander angleicht.",
            "Wenn Alethemora von Schwingung spricht, meint es deshalb zweierlei: die messbaren Rhythmen von Körper und Beziehung — und darüber hinaus ein Bild für die Seele, deren Licht nach den Berichten aus der Geistwelt umso klarer wird, je reifer sie ist. Das Erste ist Wissenschaft, das Zweite Landkarte. Das Licht der Seele ist ein Bild aus der Landkarte."
          ]
        }
      ],
      closing:
        "Was Alethemora ausdrücklich nicht behauptet: dass man mit „hoher Schwingung“ Gesundheit, Glück oder Reichtum gezielt anzieht, oder dass jemand, dem Schweres widerfährt, „zu niedrig geschwungen“ habe. Solche Gedanken machen Leidende schuldig, und sie widersprechen dem Weg der Liebe."
    },
    en: {
      title: "Energy, vibration, and resonance",
      tagline: "Measurable rhythms, and an image of the soul",
      intro:
        "I attend to my energy, my vibration, and to what I go into resonance with. Newton describes the soul as energy — as light that can be clearer or dimmer, depending on maturity and inner state. In everyday life, too, I feel that I do not only think and act, but vibrate: some people, places, and activities lift me, others pull me down.",
      sections: [
        {
          heading: "What clears, what clouds",
          paragraphs: [
            "What clouds my energy? Unresolved conflict, resentment, fear, addiction, dishonesty. What clears it? Forgiveness, silence, love, integrity, service, music, movement, nature. I choose consciously what I go into resonance with: which people I let close, which images and words I take in, what rhythm my day has.",
            "I do not confuse the uncomfortable with the harmful. A friend’s honest criticism can pull me down in the first moment — and still be a gift when it is true. What challenges me often feels heavy and lets me grow; what truly harms me makes me, over time, smaller, more anxious, and less free."
          ]
        },
        {
          heading: "Vibration and resonance",
          paragraphs: [
            "A sentence is attributed to the inventor Nikola Tesla: “If you want to understand the secrets of the universe, think in terms of energy, frequency, and vibration.” Whether he ever said it that way is not documented — but it touches something. In physics, resonance is a precisely described phenomenon: one oscillating body sets another oscillating when the two are attuned.",
            "The human being, too, lives in measurable rhythms — heartbeat, breath, brain waves. Research shows that slow, calm breathing brings the heart rhythm into an even, coherent state, that feelings pass from person to person, and that the brain activity of people who truly listen to each other aligns.",
            "When Alethemora speaks of vibration, it therefore means two things: the measurable rhythms of body and relationship — and, beyond that, an image for the soul, whose light, according to the reports from the spirit world, grows clearer the more mature it is. The first is science, the second is map. The light of the soul is an image from the map."
          ]
        }
      ],
      closing:
        "What Alethemora explicitly does not claim: that “high vibration” attracts health, luck, or wealth, or that someone to whom hard things happen “vibrates too low.” Such thoughts make people who suffer guilty, and they contradict the way of love."
    }
  },
  sovereignty: {
    de: {
      title: "Hartes, dezentrales Geld",
      tagline: "Gedanken zur Gesellschaft, keine Anlageberatung",
      intro:
        "Im Zentrum dieser Vision steht eine ökonomische Überzeugung: dass ein hartes, dezentrales Geld — wie es der Bitcoin-Standard verkörpert — die materielle Grundlage für eine höhere Zivilisation legen kann, so wie die Prinzipien dieses Weges die geistige und seelische Grundlage für den Einzelnen legen.",
      sections: [
        {
          heading: "Das Fundament",
          paragraphs: [
            "Ein Geld, dessen Menge niemand beliebig vermehren kann, verschiebt die Machtverhältnisse einer Gesellschaft auf eine einfache, aber tiefgreifende Weise: Es entsteht eine Art direkte Demokratie durch Kaufkraft. Menschen, die ihre Ersparnisse nicht mehr Jahr für Jahr durch Geldentwertung schwinden sehen, können es sich leisten, langfristig zu denken, statt im Überlebensmodus zu konsumieren. Ihre Kaufentscheidungen — wo sie ihr Geld tatsächlich ausgeben, welche Qualität sie belohnen, welche Institutionen sie durch ihre Teilnahme stärken oder durch ihr Fernbleiben schwächen — werden zum eigentlichen Stimmzettel. Qualität und Kooperation setzen sich in einem solchen System eher durch als Blendwerk und kurzfristige Ausbeutung, weil Menschen es sich wieder leisten können, wählerisch zu sein.",
            "Dieselbe Logik wirkt auf Politik und Bildung zurück: Eine Regierung, die ihre Fehler nicht mehr durch das stille Drucken neuen Geldes verschleiern kann, muss sich der ehrlichen Rückmeldung ihrer Bürger stellen. Bildungseinrichtungen, die um informierte, langfristig denkende Menschen konkurrieren müssen, statt sich auf einen alternativlosen Pflichtbesuch verlassen zu können, sind gezwungen, tatsächlich gut zu werden."
          ]
        }
      ],
      closing: "Gedanken zur Gesellschaft, keine Anlageberatung."
    },
    en: {
      title: "Hard, decentralized money",
      tagline: "Thoughts on society, not investment advice",
      intro:
        "At the center of this vision stands an economic conviction: that a hard, decentralized money — as the Bitcoin standard embodies it — can lay the material foundation for a higher civilization, just as the principles of this path lay the mental and soul foundation for the individual.",
      sections: [
        {
          heading: "The foundation",
          paragraphs: [
            "A money whose quantity nobody can multiply at will shifts the power relations of a society in a simple but far-reaching way: a kind of direct democracy through purchasing power arises. People who no longer watch their savings shrink year after year through the devaluation of money can afford to think long-term, instead of consuming in survival mode. Their buying decisions — where they actually spend their money, which quality they reward, which institutions they strengthen by taking part or weaken by staying away — become the real ballot. Quality and cooperation prevail in such a system more readily than dazzle and short-term exploitation, because people can once again afford to be choosy.",
            "The same logic works back on politics and education: a government that can no longer conceal its mistakes by quietly printing new money must face the honest feedback of its citizens. Educational institutions that must compete for informed, long-term-thinking people, instead of relying on compulsory attendance with no alternative, are forced to actually become good."
          ]
        }
      ],
      closing: "Thoughts on society, not investment advice."
    }
  }
};
