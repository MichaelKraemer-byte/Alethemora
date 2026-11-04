"use client";

import Link from "next/link";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    title: "Wissenschaft und Zivilisation",
    sourcesTitle: "Die vier Quellen dieses Weges",
    sources: [
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
    topics: [
      {
        title: "Leben nach dem Tod",
        body: "Newtons Berichte und die Nahtodforschung von Pim van Lommel — als Landkarte, nicht als Beweis.",
        href: "/science/reincarnation"
      },
      {
        title: "Energie, Schwingung und Resonanz",
        body: "Messbar sind die Rhythmen von Körper und Beziehung: ruhiges Atmen bringt den Herzrhythmus in einen kohärenten Zustand, Gefühle gehen von Mensch zu Mensch über, und die Gehirnaktivität von Menschen, die einander wirklich zuhören, gleicht sich an. Das Licht der Seele ist ein Bild aus der Landkarte. Nicht gemeint ist, dass „hohe Schwingung“ Glück anzieht oder dass Menschen, die leiden, „zu niedrig schwingen“.",
        href: "/science/resonanz"
      },
      {
        title: "Hartes, dezentrales Geld",
        body: "Ein Geld, das niemand nach Belieben vermehren kann, belohnt langfristiges Denken, und Kaufentscheidungen werden zum eigentlichen Stimmzettel. Gedanken zur Gesellschaft, keine Anlageberatung.",
        href: "/science/sovereignty"
      },
      {
        title: "Bildung neu gedacht",
        body: "Kinder sind ewig lernende Seelen, kein Rohmaterial für einen Arbeitsmarkt. Bindung ohne Autonomie erzeugt Abhängigkeit. Autonomie ohne Bindung erzeugt Angst statt Mut."
      }
    ],
    commonTitle: "Der gemeinsame Nenner",
    common: [
      "All diese Verschiebungen — in Bildung, Wirtschaft, Politik, im Umgang mit der Erde — folgen demselben Prinzip, das schon die persönliche Praxis trägt: Fordern und Fördern.",
      "Nicht weil ein neues Geldsystem allein die Seele reifen lässt — sondern weil es den Raum schafft, in dem diese Reifung überhaupt stattfinden kann."
    ]
  },
  en: {
    title: "Science and civilization",
    sourcesTitle: "The four sources of this path",
    sources: [
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
    topics: [
      {
        title: "Life after death",
        body: "Newton’s reports and the near-death research of Pim van Lommel — as a map, not as proof.",
        href: "/science/reincarnation"
      },
      {
        title: "Energy, vibration, and resonance",
        body: "What can be measured are the rhythms of body and relationship: calm breathing brings the heart rhythm into a coherent state, feelings pass from person to person, and the brain activity of people who truly listen to each other aligns. The light of the soul is an image from the map. What is not meant: that “high vibration” attracts luck, or that people who suffer “vibrate too low.”",
        href: "/science/resonanz"
      },
      {
        title: "Hard, decentralized money",
        body: "A money nobody can multiply at will rewards long-term thinking, and buying decisions become the real ballot. Thoughts on society, not investment advice.",
        href: "/science/sovereignty"
      },
      {
        title: "Education, thought anew",
        body: "Children are eternally learning souls, not raw material for a labor market. Attachment without autonomy produces dependence. Autonomy without attachment produces fear instead of courage."
      }
    ],
    commonTitle: "The common denominator",
    common: [
      "All these shifts — in education, economy, politics, in the way we treat the earth — follow the same principle that already carries the personal practice: challenge and support.",
      "Not because a new money system by itself lets the soul mature — but because it creates the space in which this maturing can happen at all."
    ]
  }
} as const;

export function ScienceSection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="wissenschaft" className="bg-white">
      <div className="section-shell">
        <h2 className="type-h2">{t.title}</h2>
        <h3 className="type-h3-sm mt-10">{t.sourcesTitle}</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {t.sources.map((source) => (
            <li key={source.title} className="crystal-card p-6">
              <h4 className="type-card-title">{source.title}</h4>
              <p className="type-body mt-3">{source.body}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {t.topics.map((topic) => (
            <li key={topic.title} className="border-t border-sand pt-4">
              <h3 className="type-h3-sm">{topic.title}</h3>
              <p className="type-body mt-3">{topic.body}</p>
              {"href" in topic && topic.href ? (
                <Link
                  href={topic.href}
                  className="mt-3 inline-block text-sm font-normal text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte"
                >
                  {topic.title}
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
        <h3 className="type-h3-sm mt-14">{t.commonTitle}</h3>
        <div className="mt-4 max-w-3xl space-y-4">
          {t.common.map((paragraph) => (
            <p key={paragraph} className="type-body">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
