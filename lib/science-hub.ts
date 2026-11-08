import type { Language } from "@/lib/i18n";

export type ScienceTopicKey =
  | "reincarnation"
  | "resonanz"
  | "sovereignty"
  | "bildung"
  | "ernaehrung"
  | "quellen"
  | "fordernUndFoerdern";

export type ScienceCard = {
  title: string;
  body: string;
  mark?: string;
};

export type ScienceInlineLink = {
  phrase: string;
  href: string;
  external?: boolean;
};

export type ScienceTopicContent = {
  title: string;
  listTitle?: string;
  description?: string;
  tagline?: string;
  intro?: string;
  introMark?: string;
  cards?: ScienceCard[];
  sections: {
    heading: string;
    paragraphs: string[];
    marks?: string[];
    links?: ScienceInlineLink[];
    table?: {
      headers: [string, string];
      rows: [string, string][];
    };
  }[];
  closing?: string;
};

export const scienceTopicOrder: ScienceTopicKey[] = [
  "reincarnation",
  "resonanz",
  "sovereignty",
  "bildung",
  "ernaehrung",
  "quellen",
  "fordernUndFoerdern"
];

export const scienceHomeOrder = scienceTopicOrder;

export const scienceTopicHref: Record<ScienceTopicKey, string> = {
  reincarnation: "/science/reincarnation",
  resonanz: "/science/resonanz",
  sovereignty: "/science/sovereignty",
  bildung: "/science/bildung",
  ernaehrung: "/science/ernaehrung",
  quellen: "/science/quellen",
  fordernUndFoerdern: "/science/fordern-und-foerdern"
};

// TODO: EN prüfen
export const scienceTopics: Record<ScienceTopicKey, Record<Language, ScienceTopicContent>> = {
  reincarnation: {
    de: {
      title: "Leben nach dem Tod",
      tagline: "Eine Landkarte, kein Beweis",
      intro:
        "Drei Arten von Berichten stehen hier nebeneinander: was Menschen an der Schwelle des Todes erzählen, was Klienten über die Zeit zwischen den Leben schildern, und was Kinder sagen, die von einem früheren Leben sprechen. Diese Berichte sind eine Landkarte, kein Beweis und keine Religion. Neben den Berichten von Michael Newton nennt das Buch die Nahtodforschung von Pim van Lommel. Auch sie steht hier als Landkarte, nicht als Beweis.",
      sections: [
        {
          heading: "Die wiederkehrende Abfolge",
          paragraphs: [
            "Raymond R. Moody hat in Life After Life zusammengetragen, was Menschen berichten, die dem Tod sehr nahe waren und zurückkehrten. Nicht jede Schilderung enthält jedes Merkmal. Eine Reihe von Zügen zeigt sich aber wieder und wieder, in Berichten aus sehr verschiedenen Kulturen.",
            "Manche erfahren, dass ihnen gesagt wird, sie seien gestorben. Andere finden sich außerhalb des Körpers und erleben, was um ihn herum geschieht. Oft wird ein tiefer Frieden beschrieben, eine Stille, in der Angst und Schmerz nachlassen.",
            "Dann ein Übergang, häufig als Tunnel oder als Dunkelheit. Viele begegnen Menschen, die sie gekannt haben und die bereits gestorben sind. Eine Helligkeit oder eine Gegenwart wird erlebt, und sie wird als liebevoll erfahren.",
            "Im Rückblick auf das eigene Leben sehen viele nicht nur, was sie getan haben, sondern wie es auf andere gewirkt hat. Eine Grenze oder eine Schwelle erscheint, ein Punkt, über den es in diesem Leben nicht weitergeht. Danach die Rückkehr in den Körper."
          ]
        },
        {
          heading: "Was danach bleibt",
          paragraphs: [
            "Als Nachwirkung berichten viele, dass die Furcht vor dem Tod nachlässt und dass Liebe und der Umgang mit anderen wichtiger werden. Welche religiösen Gestalten dabei begegnen, unterscheidet sich von Kultur zu Kultur. Was sich hält, ist diese Abfolge.",
            "Es sind Berichte, über die Herkunft hinweg erstaunlich ähnlich. Sie beweisen das Überleben nicht. Sie zeigen, was an dieser Schwelle immer wieder erzählt wird."
          ]
        },
        {
          heading: "Zwischen den Leben",
          paragraphs: [
            "Michael Newton hat in Journey of Souls und Destiny of Souls festgehalten, was Klienten in Sitzungen über die Zeit zwischen den Leben schildern. Die Schilderungen weisen über viele Fälle hinweg in eine ähnliche Richtung. Sie sind hier kein Laborbeweis, sondern Berichte, gelesen in der Haltung dieses Weges: gewählte Lektionen, freier Wille, keine Strafe."
          ]
        },
        {
          heading: "Verlassen, Orientierung, Führer",
          paragraphs: [
            "Nach dem Tod verlässt die Seele den Körper. In den Berichten folgt eine erste Orientierung: Sie kommt an, wird empfangen und beginnt zu verstehen, wo sie ist.",
            "Häufig sind es Führer, die empfangen. Erfahrenere Seelen begleiten und erklären. Sie drängen den nächsten Schritt nicht auf. Die Entscheidung bleibt bei der Seele."
          ]
        },
        {
          heading: "Die liebevolle Rückschau",
          paragraphs: [
            "Die Rückschau auf das Leben ist in diesen Berichten eine liebevolle Begegnung, kein Gericht und keine Hölle. Die Seele sieht, was sie getan hat, und erlebt von innen, wie es auf andere gewirkt hat. Kein Richter verurteilt. Die Seele selbst versteht."
          ]
        },
        {
          heading: "Heilung",
          paragraphs: [
            "Nach schweren Leben schildern die Klienten eine Zeit der Heilung. Die Seele wird aufgerichtet und gepflegt, begleitet von ihren Führern. Es ist Wiederherstellung, damit sie weitergehen kann."
          ]
        },
        {
          heading: "Seelengruppen",
          paragraphs: [
            "Newtons Klienten beschreiben Seelengruppen: Kreise von Seelen, die über viele Leben gemeinsam reisen und einander wieder begegnen, in wechselnden Rollen. Die Gruppe ist Gesellschaft auf dem Weg."
          ]
        },
        {
          heading: "Die Planung des nächsten Lebens",
          paragraphs: [
            "Vor jedem Leben betrachtet die Seele gemeinsam mit ihren Führern mögliche Leben und mögliche Körper und wählt das, was ihrem nächsten Schritt dient. Zur Planung gehören die Menschen, die Familie, die Lektionen und die Wendepunkte.",
            "Sie sieht dabei Schlüsselmomente, aber kein fertiges Drehbuch. Der Weg ist angelegt, der Ausgang ist offen. Was die Seele aus den Umständen macht, entscheidet sie im Leben selbst, aus freiem Willen."
          ]
        },
        {
          heading: "Der Rat",
          paragraphs: [
            "Die Berichte sprechen von einem Rat aus Seelen von außerordentlicher Reife und Weisheit. Er begleitet den Weg der Inkarnation. Die Seele schaut mit ihm auf das gelebte Leben und auf das, was als Nächstes anstehen kann. Die Begegnung hilft ihr, sich selbst zu sehen."
          ]
        },
        {
          heading: "Unterschiedliche Erfahrung",
          paragraphs: [
            "Die Berichte unterscheiden Seelen nach Erfahrung. Manche stehen noch am Anfang vieler Leben, andere haben schon viel gesehen und können die weniger erfahrenen begleiten. Es ist ein Bild von Entwicklung."
          ]
        },
        {
          heading: "Die Wahl zurückzukehren",
          paragraphs: [
            "Die Seele kommt nicht auf die Erde, um bestraft zu werden oder um etwas abzuarbeiten, sondern um zu reifen. Jede Rückkehr auf die Erde ist dabei eine freie Entscheidung. Keine Seele wird gezwungen; sie kann ruhen, zögern oder ein Leben ablehnen. So verstanden ist Karma kein Urteil von außen, sondern Selbsterkenntnis: der ehrliche Blick der Seele auf sich selbst und der innere Wunsch, zu wachsen."
          ]
        },
        {
          heading: "Der Schleier des Vergessens",
          paragraphs: [
            "Mit der Geburt senkt sich der Schleier des Vergessens. Beim Eintritt in den Körper vergisst die Seele, woher sie kommt und was sie sich vorgenommen hat. Newtons Klienten beschreiben diese Amnesie als bewusst und notwendig.",
            "Würde die Seele sich an alles erinnern, wären die Prüfungen des Lebens keine echten Prüfungen. Erst im Vergessen wird jede liebevolle Entscheidung zu einer wirklichen Wahl."
          ]
        },
        {
          heading: "Keine Hölle",
          paragraphs: [
            "In keinem der Berichte gibt es Verdammnis. Auch Seelen, die im Leben anderen schweren Schaden zugefügt haben, werden nicht bestraft, sondern gesondert betreut, neu ausgerichtet und auf ein weiteres Leben vorbereitet, in dem sie wiedergutmachen können. Das ist keine Nachsicht ohne Folgen: In der Rückschau erlebt die Seele von innen, was sie anderen angetan hat. Aber es ist immer ein Weg zurück, nie ein Ende."
          ]
        },
        {
          heading: "Der Tod trennt nicht",
          paragraphs: [
            "Der Tod trennt nicht. Newtons Klienten beschreiben, dass Seelen nach ihrer Heimkehr ihre Liebsten auf der Erde weiter begleiten und trösten können."
          ]
        },
        {
          heading: "Kinder, die von einem früheren Leben sprechen",
          paragraphs: [
            "Die moderne wissenschaftliche Reinkarnationsforschung wird maßgeblich von der Division of Perceptual Studies (DOPS) an der University of Virginia betrieben. Die methodischen Grundlagen schuf im 20. Jahrhundert der Pionier Dr. Ian Stevenson. Ab dem Jahr 2002 übernahm der Kinderpsychiater Prof. Dr. Jim B. Tucker die Studien und führt sie bis heute fort. Die weltweite Datenbank umfasst inzwischen über 2.500 dokumentierte Fälle von Kindern, die vorgebliche Erinnerungen an ein früheres Leben äußern. Seit dem Jahr 2000 liegt der Fokus verstärkt auf westlichen Ländern, insbesondere den USA, und auf computergestützten statistischen Auswertungen.",
            "Es sind dokumentierte Fallberichte von Kindern, die so sprechen, als erinnerten sie sich an ein früheres Leben. Wo es möglich ist, wird das mit Unterlagen abgeglichen. Nicht jeder Fall ist damit bestätigt.",
            "Auch diese Fälle stehen hier als Landkarte. Sie beweisen die Wiedergeburt nicht, und sie gründen keine Religion."
          ]
        }
      ],
      closing:
        "Die drei Sammlungen liegen als Karte übereinander: eine Abfolge, die an der Schwelle immer wieder erzählt wird; Berichte aus der Zeit zwischen den Leben, mit gewählten Lektionen, freiem Willen und ohne Strafe; und Fallberichte von Kindern, abgeglichen, wo es möglich ist. Was davon im eigenen Leben trägt, bleibt dem prüfenden Blick überlassen."
    },
    // TODO: EN prüfen — neuer englischer Seitentext, nicht aus einem vorhandenen EN-Manuskript übernommen. Einzelne Sätze unten sind ältere Seitenformulierungen und bleiben unverändert.
    en: {
      title: "Life after death",
      tagline: "A map, not a proof",
      intro:
        "Three kinds of reports stand here side by side: what people tell of the threshold of death, what clients describe of the time between lives, and what children say who speak of a previous life. These reports are a map, not a proof, and not a religion. Beside Newton’s reports, the book names the near-death research of Pim van Lommel. That, too, stands here as a map, not as proof.",
      sections: [
        {
          // TODO: EN prüfen
          heading: "The sequence that keeps returning",
          paragraphs: [
            // TODO: EN prüfen
            "In Life After Life, Raymond R. Moody gathered what people report who came very close to death and returned. Not every account contains every feature. A set of features shows up again and again, though, in reports from very different cultures.",
            // TODO: EN prüfen
            "Some are told that they have died. Others find themselves outside the body and experience what is happening around it. Often a deep peace is described, a quiet in which fear and pain recede.",
            // TODO: EN prüfen
            "Then a passage, often described as a tunnel or as darkness. Many meet people they knew who have already died. A light, or a presence, is experienced as loving.",
            // TODO: EN prüfen
            "In a review of their own life, many see not only what they did, but how it affected others. A border or a limit appears, a point beyond which this life does not continue. Then the return to the body."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "What remains afterward",
          paragraphs: [
            // TODO: EN prüfen
            "As an after-effect, many report that the fear of death recedes, and that love, and the way they treat others, matter more. The religious figures people meet differ by culture. What keeps being reported is this sequence.",
            // TODO: EN prüfen
            "They are reports, remarkably similar across origins. They do not prove survival. They show what keeps being told at this threshold."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "Between lives",
          paragraphs: [
            // TODO: EN prüfen
            "In Journey of Souls and Destiny of Souls, Michael Newton set down what clients describe in sessions about the time between lives. Across many cases the accounts point in a similar direction. They are not laboratory proof here. They are reports, read in the stance of this path: chosen lessons, free will, no punishment."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "Leaving, orientation, guides",
          paragraphs: [
            // TODO: EN prüfen
            "After death the soul leaves the body. In the reports a first orientation follows: it arrives, is received, and begins to understand where it is.",
            // TODO: EN prüfen
            "Often it is guides who receive it. More experienced souls accompany and explain. They do not press the next step. The decision stays with the soul."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "The loving review",
          paragraphs: [
            // TODO: EN prüfen
            "In these reports the review of a life is a loving encounter, not a court and not a hell. The soul sees what it did and experiences from the inside how it affected others. No judge condemns. The soul itself understands."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "Healing",
          paragraphs: [
            // TODO: EN prüfen
            "After hard lives, clients describe a time of healing. The soul is restored and cared for, accompanied by its guides. It is recovery, so that it can go on."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "Soul groups",
          paragraphs: [
            // TODO: EN prüfen
            "Newton’s clients describe soul groups: circles of souls who travel together across many lives and meet one another again, in changing roles. The group is company on the way."
          ]
        },
        {
          heading: "Planning the next life",
          paragraphs: [
            // TODO: EN prüfen
            "Before each life the soul, together with its guides, looks at possible lives and possible bodies and chooses what serves its next step. The planning includes the people, the family, the lessons, and the turning points.",
            "It sees key moments, but no finished script. The path is laid out, the outcome is open. What the soul makes of the circumstances, it decides in the life itself, out of free will."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "The council",
          paragraphs: [
            // TODO: EN prüfen
            "The reports speak of a council of souls of extraordinary maturity and wisdom. It accompanies the way of incarnation. With it, the soul looks at the life it has lived and at what can come next. The meeting helps it to see itself."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "Different experience",
          paragraphs: [
            // TODO: EN prüfen
            "The reports distinguish souls by experience. Some are still at the beginning of many lives, others have already seen a great deal and can accompany the less experienced. It is a picture of development."
          ]
        },
        {
          heading: "The choice to return",
          paragraphs: [
            "The soul does not come to earth to be punished or to work something off, but to mature. Every return to earth is a free decision. No soul is forced; it can rest, hesitate, or decline a life. Understood this way, karma is not a judgment from outside, but self-knowledge: the soul’s honest look at itself, and the inner wish to grow."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "The veil of forgetting",
          paragraphs: [
            // TODO: EN prüfen
            "At birth the veil of forgetting comes down. On entering the body the soul forgets where it comes from and what it set out to do. Newton’s clients describe this amnesia as conscious and necessary.",
            "If the soul remembered everything, the tests of life would not be real tests. Only in forgetting does every loving decision become a real choice."
          ]
        },
        {
          heading: "No hell",
          paragraphs: [
            "In none of the reports is there damnation. Even souls who caused serious harm to others in life are not punished. They are cared for apart, realigned, and prepared for another life in which they can make amends. This is not leniency without consequence: in the review the soul experiences from the inside what it did to others. But it is always a way back, never an end."
          ]
        },
        {
          heading: "Death does not separate",
          paragraphs: [
            "Death does not separate. Newton’s clients describe souls who, after coming home, can still accompany and comfort the people they love on earth."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "Children who speak of a previous life",
          paragraphs: [
            // TODO: EN prüfen
            "Modern scientific reincarnation research is carried on in substantial part by the Division of Perceptual Studies (DOPS) at the University of Virginia. The pioneer Dr. Ian Stevenson laid the methodological foundations in the 20th century. From 2002 the child psychiatrist Prof. Dr. Jim B. Tucker took over the studies and has continued them to this day. The worldwide database now holds over 2,500 documented cases of children who express alleged memories of a previous life. Since the year 2000 the research has focused more strongly on Western countries, especially the USA, and on computer-assisted statistical evaluation.",
            // TODO: EN prüfen
            "These are documented case reports of children speaking as if they remembered a previous life. Where it is possible, this is checked against records. Not every case is thereby confirmed.",
            // TODO: EN prüfen
            "These cases, too, stand here as a map. They do not prove rebirth, and they are not a religion."
          ]
        }
      ],
      // TODO: EN prüfen
      closing:
        "The three collections lie over one another as a map: a sequence that keeps being told at the threshold; reports from the time between lives, with chosen lessons, free will, and without punishment; and case reports of children, checked where that is possible. What of this carries in one’s own life is left for each person to test."
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
          heading: "Zwei Ebenen",
          paragraphs: [
            "Dem Erfinder Nikola Tesla wird der Satz zugeschrieben: „Wenn du die Geheimnisse des Universums verstehen willst, denke in Begriffen von Energie, Frequenz und Schwingung.“ Ob er ihn je so gesagt hat, ist nicht belegt — aber er trifft etwas. In der Physik ist Resonanz ein genau beschriebenes Phänomen: Ein schwingender Körper bringt einen anderen zum Mitschwingen, wenn beide aufeinander abgestimmt sind.",
            "Auch der Mensch lebt in messbaren Rhythmen — Herzschlag, Atem, Hirnwellen. Die Forschung zeigt, dass langsames, ruhiges Atmen den Herzrhythmus in einen gleichmäßigen, kohärenten Zustand bringt, dass Gefühle von Mensch zu Mensch überspringen und dass sich die Gehirnaktivität von Menschen, die einander wirklich zuhören, aneinander angleicht.",
            "Wenn Alethemora von Schwingung spricht, meint es deshalb zweierlei: die messbaren Rhythmen von Körper und Beziehung — und darüber hinaus ein Bild für die Seele, deren Licht nach den Berichten aus der Geistwelt umso klarer wird, je reifer sie ist. Das Erste ist Wissenschaft, das Zweite Landkarte. Das Licht der Seele ist ein Bild aus der Landkarte.",
            "Darum bleiben die beiden Ebenen nebeneinander stehen. Der gleichmäßige Herzrhythmus, das Überspringen von Gefühlen und das Angleichen der Gehirnaktivität beim Zuhören sind Beobachtungen an Körper und Beziehung. Das klarer werdende Licht der reiferen Seele bleibt ein Bild aus den Berichten."
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
          // TODO: EN prüfen
          heading: "Two levels",
          paragraphs: [
            "A sentence is attributed to the inventor Nikola Tesla: “If you want to understand the secrets of the universe, think in terms of energy, frequency, and vibration.” Whether he ever said it that way is not documented — but it touches something. In physics, resonance is a precisely described phenomenon: one oscillating body sets another oscillating when the two are attuned.",
            "The human being, too, lives in measurable rhythms — heartbeat, breath, brain waves. Research shows that slow, calm breathing brings the heart rhythm into an even, coherent state, that feelings pass from person to person, and that the brain activity of people who truly listen to each other aligns.",
            "When Alethemora speaks of vibration, it therefore means two things: the measurable rhythms of body and relationship — and, beyond that, an image for the soul, whose light, according to the reports from the spirit world, grows clearer the more mature it is. The first is science, the second is map. The light of the soul is an image from the map.",
            // TODO: EN prüfen
            "So the two levels stay side by side. The even heart rhythm, the passing of feelings, and the aligning of brain activity while listening are observations of body and relationship. The light of the more mature soul, growing clearer, remains an image from the reports."
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
          heading: "Für den einzelnen Menschen",
          paragraphs: [
            "Kaufkraft ist gespeicherte Arbeit. Der Lohn von gestern liegt in dem, was ein Mensch heute noch kaufen und zurücklegen kann. Wird neues Geld geschaffen, hat, wer diesen Lohn verdient hat, nicht darüber abgestimmt.",
            "Preise, Miete und Ersparnisse bewegen sich. Souveränität heißt hier, dass der Mensch selbst festlegt, was seine Arbeit wert ist: durch das, was er kaufen und sparen kann. Ein Ausschuss tut das nicht."
          ],
          marks: ["Kaufkraft ist gespeicherte Arbeit"]
        },
        {
          heading: "Das Gut, das den Wert hielt",
          paragraphs: [
            "Geld entstand im Tausch als das Gut, das Menschen vorzogen, weil es seinen Wert hielt. Carl Menger hat das so beschrieben. Es ist ein Grundgedanke der Österreichischen Schule."
          ],
          marks: ["Geld entstand im Tausch"]
        },
        {
          heading: "Der Preis als Einigung",
          paragraphs: [
            "Der Wert ist subjektiv. Das heißt: Ein Preis ist eine Einigung zwischen Menschen, keine Zahl, die ein Amt ohne Folgen festsetzen kann."
          ],
          marks: ["Der Wert ist subjektiv"]
        },
        {
          heading: "Wer das neue Geld zuerst bekommt",
          paragraphs: [
            "Neues Geld erreicht nicht alle zugleich. Wer es zuerst erhält, kauft noch zu den alten Preisen. Alle anderen treffen die höheren Preise später. Richard Cantillon hat das beschrieben."
          ],
          marks: ["Neues Geld erreicht nicht alle zugleich"]
        },
        {
          heading: "Was nur bei billigem Geld trägt",
          paragraphs: [
            "Projekte auf billigem Geld beginnen, wenn neues Geld den Zins herunterdrückt. Sie tragen nur, solange das Geld billig ist. Später scheitern sie. So sieht Ludwig von Mises den Aufschwung und den Einbruch."
          ],
          marks: ["Projekte auf billigem Geld"]
        },
        {
          heading: "Wenn ein Amt Einheiten schaffen kann",
          paragraphs: [
            "Der Vorteil ist die Geschwindigkeit. Ein Staat und seine Bank können Einheiten schaffen. So werden Kriege, Krisen und Programme bezahlt, ohne dass sofort eine Steuerrechnung kommt. Ausgeben lässt sich, bevor gefragt wird.",
            "Die Kosten bleiben leise. Ersparnisse kaufen weniger. Löhne, die höher aussehen, kaufen dasselbe oder weniger. Schulden werden der gewöhnliche Weg zu leben.",
            "Politiker können Ausgaben versprechen, weil die Rechnung als Preise ankommt, nicht als Gesetz mit ihrem Namen. Das ist die Tür für Verschwendung und für Korruption: Geld, das sich schaffen lässt, lässt sich zu denen lenken, die nahe der Stelle sitzen, an der es entsteht."
          ],
          marks: ["Der Vorteil ist die Geschwindigkeit"]
        },
        {
          heading: "Seit dem 15. August 1971",
          paragraphs: [
            "Nicht mehr in Gold einlösbar. Das gilt für den US-Dollar seit dem 15. August 1971. Damit endete die Grenze von Bretton Woods. Von da an konnte die Menge des Geldes ohne diesen Anker wachsen.",
            "Die Folgen dieser Geldpolitik seit 1971 sind schwer. Auf der Seite WTF happened in 1971 zeigen die Diagramme, wie nach diesem Bruch Produktivität und typischer Lohn auseinanderliefen, wie Wohnen und Bildung einem normalen Lohn entglitten und wie Schulden und Vermögenspreise stiegen. Diese Reihen lassen sich dort nachverfolgen. Die Seite sammelt die öffentlichen Reihen; Alethemora fügt keine eigenen Zahlen hinzu."
          ],
          marks: ["Nicht mehr in Gold einlösbar"],
          links: [
            {
              phrase: "WTF happened in 1971",
              href: "https://www.blocktrainer.de/en/blog/wtf-happened-in-1971",
              external: true
            }
          ]
        },
        {
          heading: "Ein Standard, den kein Amt vermehrt",
          paragraphs: [
            "Keine zusätzlichen Einheiten. Niemand schafft sie durch eine Abstimmung. Sparen wird nicht still besteuert. Ein Projekt kommt nur zustande, wenn Menschen es aus freien Stücken bezahlen. Politik kann die Kosten nicht verstecken. Der Bitcoin-Standard ist hier das Beispiel für Geld, das kein Amt vermehren kann.",
            "Der Nachteil ist wirklich. Der Übergang ist rau. Der Preis dieses Geldes, gerechnet in dem Geld der Staaten, schwankt. Kommt eine Krise, fehlt die Presse für neues Geld. Eine Zahlung, die aus Versehen hinausgeht, ist weg. Das sind die Kosten einer Regel, die auch die Mächtigen bindet."
          ],
          marks: ["Keine zusätzlichen Einheiten"]
        },
        {
          heading: "Kaufkraft als Stimmzettel",
          paragraphs: [
            "Ein Geld, dessen Menge niemand beliebig vermehren kann, verschiebt die Machtverhältnisse einer Gesellschaft auf eine einfache, aber tiefgreifende Weise: Es entsteht eine Art direkte Demokratie durch Kaufkraft. Menschen, die ihre Ersparnisse nicht mehr Jahr für Jahr durch Geldentwertung schwinden sehen, können es sich leisten, langfristig zu denken, statt im Überlebensmodus zu konsumieren. Ihre Kaufentscheidungen — wo sie ihr Geld tatsächlich ausgeben, welche Qualität sie belohnen, welche Institutionen sie durch ihre Teilnahme stärken oder durch ihr Fernbleiben schwächen — werden zum eigentlichen Stimmzettel. Qualität und Kooperation setzen sich in einem solchen System eher durch als Blendwerk und kurzfristige Ausbeutung, weil Menschen es sich wieder leisten können, wählerisch zu sein.",
            "Dieselbe Logik wirkt auf Politik und Bildung zurück: Eine Regierung, die ihre Fehler nicht mehr durch das stille Drucken neuen Geldes verschleiern kann, muss sich der ehrlichen Rückmeldung ihrer Bürger stellen. Bildungseinrichtungen, die um informierte, langfristig denkende Menschen konkurrieren müssen, statt sich auf einen alternativlosen Pflichtbesuch verlassen zu können, sind gezwungen, tatsächlich gut zu werden.",
            "Beide Verschiebungen hängen an derselben Möglichkeit. Wer nicht mehr im Überlebensmodus verbraucht, kann langfristig denken: mit der Kaufkraft als Stimmzettel, und als Bürger, dessen Rückmeldung sich nicht mehr durch neues Geld übertönen lässt."
          ]
        },
        {
          heading: "Die Macht bei den vielen",
          paragraphs: [
            "Die Macht liegt bei den vielen. Jeder Mensch behält die Energie seiner Arbeit und kann sie in das legen, was er selbst für bauenswert hält, statt sie immer wieder an die Vermehrung des Geldes, an Gefälligkeiten und an Korruption zu verlieren.",
            "Politik muss dann dienen. Sie kann nur ausgeben, was die Menschen ihr tatsächlich geben. So halten die Menschen die großen Entscheidungen, nicht ein Amt.",
            "Dieser Boden macht ein besseres Bildungssystem möglich. Psychologie, Hirnforschung und Pädagogik wissen längst, was Kinder brauchen: Bindung und Autonomie, keine Fabrik für den Arbeitsmarkt.",
            "Die Konzepte für eine höhere Zivilisation liegen bereit. Sie stocken, weil das heutige Ausgeben keine harte Grenze kennt. Was auf diesem Boden möglich wird, steht in Bildung neu gedacht."
          ],
          marks: ["Die Macht liegt bei den vielen"],
          links: [{ phrase: "Bildung neu gedacht", href: "/science/bildung" }]
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
          // TODO: EN prüfen
          heading: "For the single person",
          paragraphs: [
            // TODO: EN prüfen
            "Purchasing power is stored work. Yesterday’s wage lies in what a person can still buy and set aside today. When new money is created, the person who earned that wage did not vote on it.",
            // TODO: EN prüfen
            "Prices, rent, and savings move. Sovereignty here means that the person decides what their work is worth, by what they can buy and save. A committee does not."
          ],
          marks: ["Purchasing power is stored work"]
        },
        {
          // TODO: EN prüfen
          heading: "The good that kept its value",
          paragraphs: [
            // TODO: EN prüfen
            "Money arose in exchange as the good people preferred because it kept its value. Carl Menger described it that way. It is a founding idea of the Austrian school."
          ],
          marks: ["Money arose in exchange"]
        },
        {
          // TODO: EN prüfen
          heading: "A price is an agreement",
          paragraphs: [
            // TODO: EN prüfen
            "Value is subjective. That means: a price is an agreement between people, not a number an office can set without consequences."
          ],
          marks: ["Value is subjective"]
        },
        {
          // TODO: EN prüfen
          heading: "Whoever receives the new money first",
          paragraphs: [
            // TODO: EN prüfen
            "New money does not reach everyone at once. Whoever receives it first still buys at the old prices. Everyone else meets the higher prices later. Richard Cantillon described this."
          ],
          marks: ["New money does not reach everyone at once"]
        },
        {
          // TODO: EN prüfen
          heading: "What works only while money is cheap",
          paragraphs: [
            // TODO: EN prüfen
            "Projects on cheap money begin when new money pushes the interest rate down. They work only while the money is cheap. Later they fail. That is how Ludwig von Mises sees the boom and the bust."
          ],
          marks: ["Projects on cheap money"]
        },
        {
          // TODO: EN prüfen
          heading: "When an office can create units",
          paragraphs: [
            // TODO: EN prüfen
            "The advantage is speed. A state and its bank can create units. That pays for wars, crises, and programs without an immediate tax bill. Spending can happen before anyone is asked.",
            // TODO: EN prüfen
            "The cost stays quiet. Savings buy less. Wages that look higher buy the same or less. Debt becomes the ordinary way to live.",
            // TODO: EN prüfen
            "Politicians can promise spending because the bill arrives as prices, not as a law with their name on it. That is the door for waste and for corruption: money that can be created can be steered toward whoever sits close to where it is created."
          ],
          marks: ["The advantage is speed"]
        },
        {
          // TODO: EN prüfen
          heading: "Since 15 August 1971",
          paragraphs: [
            // TODO: EN prüfen
            "Not redeemable in gold. The US dollar has been that way since 15 August 1971. That ended the Bretton Woods limit. From then on the amount of money could grow without that anchor.",
            // TODO: EN prüfen
            "The consequences of this monetary policy since 1971 are severe. The charts on the page WTF happened in 1971 show how, after that break, productivity and typical pay drifted apart, how housing and education slipped out of reach of a normal wage, and how debt and asset prices climbed. Those series can be traced on that page. The page collects the public series; Alethemora does not add its own numbers."
          ],
          marks: ["Not redeemable in gold"],
          links: [
            {
              phrase: "WTF happened in 1971",
              href: "https://www.blocktrainer.de/en/blog/wtf-happened-in-1971",
              external: true
            }
          ]
        },
        {
          // TODO: EN prüfen
          heading: "A standard no office can multiply",
          paragraphs: [
            // TODO: EN prüfen
            "No extra units. Nobody creates them by a vote. Saving is not silently taxed. A project comes about only when people pay for it of their own choice. Politics cannot hide the cost. The Bitcoin standard is the example here of money no office can multiply.",
            // TODO: EN prüfen
            "The disadvantage is real. The transition is rough. The price of this money, measured in the money of states, swings. When a crisis comes, the press that would create new money is missing. A payment sent by mistake is gone. Those are the costs of a rule that also binds the powerful."
          ],
          marks: ["No extra units"]
        },
        {
          // TODO: EN prüfen
          heading: "Purchasing power as the ballot",
          paragraphs: [
            "A money whose quantity nobody can multiply at will shifts the power relations of a society in a simple but far-reaching way: a kind of direct democracy through purchasing power arises. People who no longer watch their savings shrink year after year through the devaluation of money can afford to think long-term, instead of consuming in survival mode. Their buying decisions — where they actually spend their money, which quality they reward, which institutions they strengthen by taking part or weaken by staying away — become the real ballot. Quality and cooperation prevail in such a system more readily than dazzle and short-term exploitation, because people can once again afford to be choosy.",
            "The same logic works back on politics and education: a government that can no longer conceal its mistakes by quietly printing new money must face the honest feedback of its citizens. Educational institutions that must compete for informed, long-term-thinking people, instead of relying on compulsory attendance with no alternative, are forced to actually become good.",
            // TODO: EN prüfen
            "Both shifts hang on the same possibility. Whoever no longer spends in survival mode can think long-term: with purchasing power as the ballot, and as a citizen whose feedback can no longer be drowned out by new money."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "The power with the many",
          paragraphs: [
            // TODO: EN prüfen
            "The power lies with the many. Each person keeps the energy of their work and can put it into what they themselves find worth building, instead of losing it again and again to the creation of money, to favors, and to corruption.",
            // TODO: EN prüfen
            "Politics then has to serve. It can spend only what people actually hand over. That is how the people, not an office, hold the large decisions.",
            // TODO: EN prüfen
            "This soil is what makes a better education system possible. Psychology, brain research, and pedagogy have long known what children need: attachment and autonomy, not a factory for the labor market.",
            // TODO: EN prüfen
            "The concepts for a higher civilization are there. They stall because today’s spending has no hard limit. What becomes possible on this soil is set out in Education, thought anew."
          ],
          marks: ["The power lies with the many"],
          links: [{ phrase: "Education, thought anew", href: "/science/bildung" }]
        }
      ],
      closing: "Thoughts on society, not investment advice."
    }
  },
  bildung: {
    de: {
      title: "Bildung neu gedacht",
      description:
        "Kinder sind ewig lernende Seelen, kein Rohmaterial für einen Arbeitsmarkt. Bindung ohne Autonomie erzeugt Abhängigkeit. Autonomie ohne Bindung erzeugt Angst statt Mut.",
      intro:
        "Kinder sind ewig lernende Seelen, kein Rohmaterial für einen Arbeitsmarkt. Bindung ohne Autonomie erzeugt Abhängigkeit. Autonomie ohne Bindung erzeugt Angst statt Mut.",
      introMark: "Kinder sind ewig lernende Seelen",
      sections: [
        {
          heading: "Bindung und Autonomie",
          paragraphs: [
            "Bindung und Autonomie tragen einander. Fehlt die Autonomie, wird aus der Bindung Abhängigkeit. Fehlt die Bindung, wird aus der Freiheit Angst statt Mut. Ein Kind, das beides hat, kann lernen, ohne Rohstoff für einen Arbeitsmarkt zu sein."
          ]
        },
        {
          heading: "Das Potenzial",
          paragraphs: [
            "Jedes Kind trägt ein Potenzial. Neurowissenschaft, Psychologie und Pädagogik treffen sich in einer Richtung, die schon feststeht: Das Gehirn verdrahtet sich durch Beziehung, durch Spiel und durch echte Aufgaben. Sicherheit, ein verlässlicher Erwachsener, öffnet das Lernen. Drohung und Scham schließen es.",
            "John Bowlby hat die Bindung als sichere Basis beschrieben, von der aus ein Kind die Welt erkundet. Übung und Schlaf festigen, was gelernt wurde."
          ]
        },
        {
          heading: "Mitgestalten",
          paragraphs: [
            "Kinder lernen, wenn sie die Arbeit mitgestalten, wenn das Vorhaben echt ist, wenn es schwer genug ist, um sie zu strecken, und getragen genug, dass sie nicht allein gelassen werden. Freude am Lernen ist keine Unterhaltung. Sie ist das Gefühl, dass die Anstrengung ihnen gehört. Das ist Fordern und Fördern in derselben Arbeit."
          ],
          links: [{ phrase: "Fordern und Fördern", href: "/science/fordern-und-foerdern" }]
        },
        {
          heading: "Pädagogik ist Beziehung",
          paragraphs: [
            "Pädagogik ist Beziehung. Ein Kind leiht sich die Ruhe des Erwachsenen. Konflikte sind kein Misslingen des Tages. Sie sind der Ort, an dem Empathie gelernt wird: den anderen bemerken, reparieren, nach einem Nein im Kontakt bleiben."
          ]
        },
        {
          heading: "Was eine höhere Zivilisation benutzt",
          paragraphs: [
            "Eine höhere Zivilisation entsteht, indem die pädagogischen Konzepte, die schon als tragfähig bekannt sind, wirklich benutzt werden, statt Kinder für einen Arbeitsmarkt zu lagern. Unter diesen Bedingungen entfalten sich der Körper (Schlaf, Bewegung, Essen), der Geist (Aufmerksamkeit, Sprache, Vorhaben) und die Seele (Sinn, Gewissen, das stille Gespür, wer man ist) gemeinsam.",
            "Bei Alethemora ist der Körper das Werkzeug, nicht das Selbst. Er muss trotzdem gut geführt werden, sonst verhungern die beiden anderen."
          ]
        },
        {
          heading: "Darm und Gehirn",
          paragraphs: [
            "Darm und Gehirn sprechen über den Vagusnerv, über Signale des Immunsystems und über Stoffe, die die Mikroben des Darms bilden. Was ein Kind isst, verändert dieses Gespräch. Schwankender Blutzucker und ein gestörter Darm zeigen sich als unruhige Aufmerksamkeit und als schwerere Stimmung.",
            "Darum gehört ein optimaler Körper zur Bildung, nicht als Nebenhobby. Wir wollen dieses Optimum für uns selbst und in der Erziehung, weil die Harmonie von Körper und Geist der Boden ist, auf dem das Übrige steht, und was das im Tag heißt, steht in Ernährung, neu gedacht."
          ],
          links: [{ phrase: "Ernährung, neu gedacht", href: "/science/ernaehrung" }]
        }
      ]
    },
    en: {
      title: "Education, thought anew",
      description:
        "Children are eternally learning souls, not raw material for a labor market. Attachment without autonomy produces dependence. Autonomy without attachment produces fear instead of courage.",
      intro:
        "Children are eternally learning souls, not raw material for a labor market. Attachment without autonomy produces dependence. Autonomy without attachment produces fear instead of courage.",
      introMark: "Children are eternally learning souls",
      sections: [
        {
          // TODO: EN prüfen
          heading: "Attachment and autonomy",
          paragraphs: [
            // TODO: EN prüfen
            "Attachment and autonomy carry each other. Where autonomy is missing, attachment becomes dependence. Where attachment is missing, freedom becomes fear instead of courage. A child who has both can learn, and is not raw material for a labor market."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "The potential",
          paragraphs: [
            // TODO: EN prüfen
            "Each child carries a potential. Neuroscience, psychology, and pedagogy already meet in a direction that is established: the brain wires itself through relationship, through play, and through real problems. Safety, a reliable adult, opens learning. Threat and shame shut it down.",
            // TODO: EN prüfen
            "John Bowlby described attachment as a secure base from which a child explores the world. Practice and sleep consolidate what has been learned."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "Shaping the work",
          paragraphs: [
            // TODO: EN prüfen
            "Children learn when they help shape the work, when the project is real, when it is hard enough to stretch them and supported enough that they are not left alone. Joy in learning is not entertainment. It is the feeling that the effort belongs to them. That is challenge and support in the same work."
          ],
          links: [{ phrase: "challenge and support", href: "/science/fordern-und-foerdern" }]
        },
        {
          // TODO: EN prüfen
          heading: "Pedagogy is relationship",
          paragraphs: [
            // TODO: EN prüfen
            "Pedagogy is relationship. A child borrows the adult’s calm. Conflicts are not a failure of the day. They are where empathy is learned: to notice the other, to repair, to stay in contact after a no."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "What a higher civilization uses",
          paragraphs: [
            // TODO: EN prüfen
            "A higher civilization comes about by actually using the pedagogical concepts that are already known to work, instead of storing children for a labor market. Under those conditions the body (sleep, movement, food), the mind (attention, language, projects), and the soul (meaning, conscience, the quiet sense of who one is) unfold together.",
            // TODO: EN prüfen
            "At Alethemora the body is the tool, not the self. It still has to be led well, or the other two starve."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "Gut and brain",
          paragraphs: [
            // TODO: EN prüfen
            "Gut and brain speak through the vagus nerve, through immune signals, and through substances the gut microbes make. What a child eats changes that conversation. Blood sugar swings and a disturbed gut show up as restless attention and a heavier mood.",
            // TODO: EN prüfen
            "That is why an optimal body is part of education, not a side hobby. We want this optimum for ourselves and in upbringing, because the harmony of body and mind is the ground the rest stands on, and what that means in the day is set out in Nutrition, thought anew."
          ],
          links: [{ phrase: "Nutrition, thought anew", href: "/science/ernaehrung" }]
        }
      ]
    }
  },
  ernaehrung: {
    de: {
      title: "Ernährung, neu gedacht",
      listTitle: "Ernährung",
      description:
        "Bei Alethemora soll der Körper so gut geführt werden, wie er sich führen lässt. Nicht als Strafe und nicht als Kult um den Körper. Gesundheit, Konzentration, Vitalität und eine helle, stetige Stimmung sind das, was ein gut geführter Körper zurückgibt.",
      intro:
        "Bei Alethemora soll der Körper so gut geführt werden, wie er sich führen lässt. Nicht als Strafe und nicht als Kult um den Körper. Gesundheit, Konzentration, Vitalität und eine helle, stetige Stimmung sind das, was ein gut geführter Körper zurückgibt.",
      introMark: "so gut geführt werden, wie er sich führen lässt",
      sections: [
        {
          heading: "Bewegung und Schlaf",
          paragraphs: [
            "Sport und Bewegung gehören zu dieser Führung, nicht als eigene Moral. Kraft, Gehen, Spiel, und mehrmals in der Woche außer Atem kommen. Schlaf gehört dazu."
          ]
        },
        {
          heading: "Der gewöhnliche Tag",
          paragraphs: [
            "Was sich breit trägt, steht hier als Tisch des gewöhnlichen Lebens. Keine Kalorienziele. Es ist eine Richtung, nicht der einzig erlaubte Teller. Ganze Mahlzeiten, und Eiweiß zu jeder Mahlzeit, damit die Aufmerksamkeit hält."
          ],
          table: {
            headers: ["Auf dem Tisch", "Im Tag"],
            rows: [
              ["Gemüse und Kräuter", "Reichlich, zu den Mahlzeiten."],
              ["Hülsenfrüchte", "Linsen, Bohnen, Kichererbsen, fest in der Woche."],
              ["Beeren und Obst", "Als Frucht, über den Tag."],
              ["Nüsse und Samen", "Als Teil der Mahlzeit."],
              ["Eier", "Ein gewöhnliches Lebensmittel, wenn sie vertragen werden."],
              [
                "Fisch",
                "Ein paarmal in der Woche. Fehlt er, ist das die Lücke, die bei Omega-3 steht."
              ],
              ["Fermentiertes", "Joghurt, Kefir, Sauerkraut, für den Darm."],
              ["Olivenöl", "Zum Zubereiten und Abschmecken der Mahlzeit."],
              ["Wasser", "Statt süßer Getränke."]
            ]
          }
        },
        {
          heading: "Wenige Ergänzungen",
          paragraphs: [
            "Nur die wenigen Stoffe, die häufige Lücken füllen. Kein Einkaufstempel.",
            "Vitamin D, wenn die Sonne knapp ist. Omega-3, also EPA und DHA, wenn Fisch selten ist. Magnesium am Abend, wenn Schlaf oder Spannung schlecht sind. Vitamin B12, wenn jemand keine Lebensmittel vom Tier isst.",
            "Jod und Eisen nur, wenn ein Test oder eine Ärztin oder ein Arzt einen Mangel feststellt. Nicht jeder soll sie nehmen.",
            "Keine Menge auf dieser Seite ist eine Verordnung.",
            "Das ist keine medizinische Beratung: ein Blutbild schlägt einen ungeprüften Stapel, und wer schwanger ist, krank ist oder Medikamente nimmt, fragt eine Ärztin oder einen Arzt."
          ]
        },
        {
          heading: "Wofür der Körper geführt wird",
          paragraphs: [
            "Ein gut ernährter, bewegter, ausgeruhter Körper ist das, was das Gespräch von Darm und Gehirn braucht, und das, was ein Kind braucht, um zu lernen. Wie das zusammenhängt, steht in Bildung neu gedacht."
          ],
          links: [{ phrase: "Bildung neu gedacht", href: "/science/bildung" }]
        }
      ]
    },
    en: {
      // TODO: EN prüfen
      title: "Nutrition, thought anew",
      // TODO: EN prüfen
      listTitle: "Nutrition",
      // TODO: EN prüfen
      description:
        "At Alethemora the body is to be led as well as it can be led. Not as punishment and not as a cult of the body. Health, concentration, vitality, and a bright, steady mood are what a well-led body gives back.",
      // TODO: EN prüfen
      intro:
        "At Alethemora the body is to be led as well as it can be led. Not as punishment and not as a cult of the body. Health, concentration, vitality, and a bright, steady mood are what a well-led body gives back.",
      // TODO: EN prüfen
      introMark: "led as well as it can be led",
      sections: [
        {
          // TODO: EN prüfen
          heading: "Movement and sleep",
          paragraphs: [
            // TODO: EN prüfen
            "Sport and movement belong to this leading, not as a separate morality. Strength, walking, play, and getting out of breath several times a week. Sleep belongs to it."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "The ordinary day",
          paragraphs: [
            // TODO: EN prüfen
            "What is broadly supported stands here as the table of an ordinary life. No calorie targets. It is a direction, not the only lawful plate. Whole meals, and protein at each meal, so that attention lasts."
          ],
          // TODO: EN prüfen
          table: {
            headers: ["On the table", "In the day"],
            rows: [
              ["Vegetables and herbs", "In quantity, with meals."],
              ["Legumes", "Lentils, beans, chickpeas, steady through the week."],
              ["Berries and fruit", "As fruit, across the day."],
              ["Nuts and seeds", "As part of the meal."],
              ["Eggs", "An ordinary food, when they are tolerated."],
              [
                "Fish",
                "A few times a week. If there is none, that is the gap the omega-3 line covers."
              ],
              ["Fermented foods", "Yogurt, kefir, sauerkraut, for the gut."],
              ["Olive oil", "For preparing the meal and finishing its taste."],
              ["Water", "Instead of sweet drinks."]
            ]
          }
        },
        {
          // TODO: EN prüfen
          heading: "The few additions",
          paragraphs: [
            // TODO: EN prüfen
            "Only the few substances that fill common gaps. Not a shopping cathedral.",
            // TODO: EN prüfen
            "Vitamin D when sun is scarce. Omega-3, that is EPA and DHA, when fish is rare. Magnesium in the evening if sleep or tension is poor. Vitamin B12 if someone eats no animal foods.",
            // TODO: EN prüfen
            "Iodine and iron only if a test or a doctor shows a lack. They are not for everyone to take.",
            // TODO: EN prüfen
            "No amount on this page is an order.",
            // TODO: EN prüfen
            "This is not medical advice: a blood test beats a blind stack, and people who are pregnant, ill, or on medication ask a doctor."
          ]
        },
        {
          // TODO: EN prüfen
          heading: "What the body is led for",
          paragraphs: [
            // TODO: EN prüfen
            "A well-fed, moved, rested body is what the conversation of gut and brain needs, and what a child needs in order to learn. How that belongs together is set out in Education, thought anew."
          ],
          links: [{ phrase: "Education, thought anew", href: "/science/bildung" }]
        }
      ]
    }
  },
  quellen: {
    de: {
      title: "Die vier Quellen dieses Weges",
      description:
        "Allen voran die Arbeit von Dr. Michael Newton: ein erstaunlich konsistentes Bild eines Bewusstseins, das den Tod überdauert, sich über viele Leben entwickelt und sich seine Herausforderungen mit einem tieferen Sinn aussucht.",
      cards: [
        {
          title: "Reinkarnationsforschung",
          body: "Allen voran die Arbeit von Dr. Michael Newton: ein erstaunlich konsistentes Bild eines Bewusstseins, das den Tod überdauert, sich über viele Leben entwickelt und sich seine Herausforderungen mit einem tieferen Sinn aussucht. Diese Berichte sind wissenschaftlich nicht abschließend beweisbar — sie werden hier als Landkarte verstanden, nicht als Beweis."
        },
        {
          title: "Lehre von der Gegenwart",
          body: "Wie sie insbesondere Eckhart Tolle geprägt hat: Leiden entsteht nicht durch das Leben selbst, sondern durch den Widerstand des Verstandes gegen das, was ist. Wer im gegenwärtigen Moment verweilt und sich vom ständigen Kommentar des Egos löst, findet einen Frieden, der nicht von äußeren Umständen abhängt."
        },
        {
          title: "Einheit und bewusste Erschaffung",
          body: "Wie sie unter anderem Neale Donald Walsch formuliert hat: das eigene Leben nicht als etwas verstehen, das einem widerfährt, sondern als etwas, das durch die eigenen Gedanken, Worte und Handlungen mitgestaltet wird — und den Menschen nicht getrennt von einer höheren Ordnung sehen, sondern als ihren Ausdruck."
        },
        {
          title: "Wissenschaft",
          body: "Psychologie, Hirnforschung und Biologie liefern das Handwerkszeug für den Alltag: wie Neuroplastizität es erlaubt, eingefahrene Muster zu verändern; wie Stressregulation den Körper beeinflusst; wie Verhalten sich durch Übung und Wiederholung wandelt. Die eine gibt die Richtung, die andere das Werkzeug."
        }
      ],
      sections: [
        {
          heading: "Richtung und Werkzeug",
          paragraphs: [
            "Die ersten drei Quellen geben eine Richtung: die Berichte über ein Bewusstsein, das den Tod überdauert; das Verweilen in der Gegenwart, wenn der Widerstand des Verstandes nachlässt; das Leben als Mitgestaltung durch Gedanken, Worte und Handlungen. Die vierte gibt das Werkzeug für den Alltag: Neuroplastizität, Stressregulation und Übung. Die eine gibt die Richtung, die andere das Werkzeug. Die Berichte der ersten Quelle bleiben dabei eine Landkarte, kein Beweis."
          ]
        }
      ]
    },
    en: {
      title: "The four sources of this path",
      description:
        "Above all the work of Dr. Michael Newton: a remarkably consistent picture of a consciousness that survives death, develops over many lives, and chooses its challenges with a deeper sense.",
      cards: [
        {
          title: "Reincarnation research",
          body: "Above all the work of Dr. Michael Newton: a remarkably consistent picture of a consciousness that survives death, develops over many lives, and chooses its challenges with a deeper sense. These reports cannot be finally proven by science — they are understood here as a map, not as proof."
        },
        {
          title: "The teaching of the present",
          body: "As Eckhart Tolle in particular has shaped it: suffering does not arise from life itself, but from the mind’s resistance to what is. Whoever learns to remain in the present moment, and to step back from the ego’s constant commentary, finds a peace that does not depend on outer circumstances."
        },
        {
          title: "Unity and conscious creation",
          body: "As Neale Donald Walsch, among others, has formulated it: not to understand one’s own life as something that happens to you, but as something co-shaped by your own thoughts, words, and actions — and not to see the human being as separate from a higher order, but as its expression."
        },
        {
          title: "Science",
          body: "Psychology, brain research, and biology provide the tools for everyday life: how neuroplasticity makes it possible to change ingrained patterns; how stress regulation affects the body; how behavior actually changes through practice and repetition. One gives the direction, the other the tool."
        }
      ],
      sections: [
        {
          // TODO: EN prüfen
          heading: "Direction and tool",
          paragraphs: [
            // TODO: EN prüfen
            "The first three sources give a direction: the reports of a consciousness that survives death; remaining in the present as the mind’s resistance eases; life as something co-shaped by thoughts, words, and actions. The fourth gives the tool for the day: neuroplasticity, stress regulation, and practice. One gives the direction, the other the tool. The reports of the first source remain a map, not a proof."
          ]
        }
      ]
    }
  },
  fordernUndFoerdern: {
    de: {
      title: "Der gemeinsame Nenner",
      description:
        "All diese Verschiebungen — in Bildung, Wirtschaft, Politik, im Umgang mit der Erde — folgen demselben Prinzip, das schon die persönliche Praxis trägt: Fordern und Fördern.",
      sections: [
        {
          heading: "Dasselbe Prinzip",
          paragraphs: [
            "All diese Verschiebungen — in Bildung, Wirtschaft, Politik, im Umgang mit der Erde — folgen demselben Prinzip, das schon die persönliche Praxis trägt: Fordern und Fördern. Nicht weil ein neues Geldsystem allein die Seele reifen lässt — sondern weil es den Raum schafft, in dem diese Reifung überhaupt stattfinden kann.",
            "Der gemeinsame Nenner ist deshalb kein zweites Thema neben der Praxis. Bildung, Wirtschaft, Politik und der Umgang mit der Erde werden an dem gemessen, was schon den einzelnen Menschen tragen soll. Das Geld bleibt dabei der Raum, nicht die Reifung."
          ],
          marks: ["Fordern und Fördern", ""]
        }
      ]
    },
    en: {
      title: "The common denominator",
      description:
        "All these shifts — in education, economy, politics, in the way we treat the earth — follow the same principle that already carries the personal practice: challenge and support.",
      sections: [
        {
          // TODO: EN prüfen
          heading: "The same principle",
          paragraphs: [
            "All these shifts — in education, economy, politics, in the way we treat the earth — follow the same principle that already carries the personal practice: challenge and support. Not because a new money system by itself lets the soul mature — but because it creates the space in which this maturing can happen at all.",
            // TODO: EN prüfen
            "The common denominator is therefore not a second topic beside the practice. Education, economy, politics, and the way we treat the earth are measured by what is already meant to carry the individual person. Money remains the space, not the maturing."
          ],
          marks: ["challenge and support", ""]
        }
      ]
    }
  }
};
