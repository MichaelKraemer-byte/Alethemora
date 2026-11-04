"use client";

import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    eyebrow: "Was wir glauben – und wie wir leben",
    title: "Alethemora auf den Punkt",
    intro:
      "Der Name verbindet zwei griechische Wörter: Aletheia, die Wahrheit – wörtlich das Nicht-Vergessene – und Moira, das Lebenslos. Alethemora heißt: sich an das Leben erinnern, das die Seele gewählt hat.",
    cards: [
      {
        title: "Du bist eine Seele.",
        body: "Ein Teil der Quelle – aus Licht und Liebe, einzigartig und unsterblich. Du bist nicht dein Körper, dein Name oder deine Geschichte. Dein Körper ist dein Werkzeug, nicht dein Wesen."
      },
      {
        title: "Du hast dieses Leben gewählt.",
        body: "Vor deiner Geburt hast du mit deinen Geistführern deine Familie, deine Umstände und deine großen Lektionen gewählt – nicht als Strafe, sondern als Schule. Nichts davon ist sinnlos oder zufällig."
      },
      {
        title: "Dein freier Wille entscheidet.",
        body: "Gewählt hast du die Schlüsselmomente, kein fertiges Drehbuch. Die Zukunft ist ein Baum der Möglichkeiten: Der Weg ist angelegt, der Ausgang ist offen – mit jeder Entscheidung wählst du den nächsten Ast."
      },
      {
        title: "Du hast vergessen – damit es echt wird.",
        body: "Mit der Geburt vergisst die Seele, woher sie kommt und was sie sich vorgenommen hat. Erst im Vergessen wird jede liebevolle Entscheidung zu einer wirklichen Wahl. Der Weg führt zurück: vom Vergessen zur Erinnerung."
      },
      {
        title: "Seele und Tier.",
        body: "In dir sprechen zwei Stimmen: das Tier, laut, das überleben will – und die Seele, leise, die weiß. Reife heißt nicht, das Tier zu bekämpfen, sondern es zu erkennen und zu führen."
      },
      {
        title: "Liebe erschafft.",
        body: "Liebe musst du nicht finden – sie ist, was du bist. Die Seele entfaltet sich, erschafft, erlebt, was sie erschaffen hat, und lernt daraus: der Kreis der Liebe. Weit gereifte Seelen, so die Berichte, gestalten sogar Lebensformen und Welten mit – und erleben sie selbst."
      },
      {
        title: "Kein Gericht, keine Hölle.",
        body: "Am Ende eines Lebens steht kein Urteil, sondern eine liebevolle Rückschau und ein Heimkommen. Karma ist keine Strafe, sondern Selbsterkenntnis, und jede Rückkehr auf die Erde ist eine freie Wahl."
      },
      {
        title: "Du bist nie allein.",
        body: "Du reist mit einer Gruppe vertrauter Seelen durch viele Leben – als Familie, Freunde, manchmal als schwierige Lehrer. Geistführer begleiten dich, ohne dir Entscheidungen abzunehmen. Und der Tod trennt nicht."
      }
    ],
    follows: "Daraus folgt",
    columns: [
      {
        title: "Gelebt, nicht geglaubt.",
        body: "Körper, Geist und Seele sind eine Einheit. Der Weg führt über Stille, Meditation und Yoga, Gegenwart, Vergebung und Selbstbeobachtung ohne Selbstverurteilung – und genauso über Schlaf, Bewegung, Natur und echte Gemeinschaft."
      },
      {
        title: "Erst fühlen, dann erschaffen.",
        body: "Schmerz will zuerst gefühlt werden – nicht überflogen, nicht schöngeredet. Erst dann öffnet sich die Frage: Was will ich daraus erschaffen? Diesen Schritt nennt Alethemora Die Wandlung."
      },
      {
        title: "Von der Seele zur Zivilisation.",
        body: "Wer reift, verändert sein Umfeld. Eine höhere Zivilisation braucht ein Fundament, das Reife zulässt: hartes, dezentrales Geld, Bildung aus Bindung und Autonomie und überall dasselbe Prinzip – Fordern und Fördern."
      }
    ],
    map: "Alethemora ist eine Landkarte, kein Dogma. Sie verwebt vier Quellen – die Reinkarnationsforschung von Michael Newton, die Lehre von der Gegenwart, die Idee bewusster Erschaffung und die Wissenschaft von Gehirn und Verhalten – und lädt dazu ein, sie im eigenen Leben zu prüfen. Keine Religion besitzt die Wahrheit allein; sie alle können Wege zum selben Zuhause sein.",
    threadTitle: "Der rote Faden in sechs Schritten",
    threadLead: "Eine abschließende, bildhafte Zusammenfassung — eine Erzählung, kein Beweis.",
    steps: [
      {
        title: "Quelle",
        body: "Die Quelle ist, in diesem Bild, ein Ozean aus Bewusstsein und Liebe. Unzählige Seelen strömen aus ihr hervor. Das Leben gewinnt Ausrichtung, wenn es als Ausdruck dieser Quelle verstanden wird."
      },
      {
        title: "Geistwelt",
        body: "In den Berichten der Hypnoseregression wird eine Welt geschichteter Resonanz beschrieben — Heilung, Seelengruppen, Räte, Wachstum, das geführt und gemeinschaftlich geschieht."
      },
      {
        title: "Gewähltes Leben",
        body: "Hier, so die wiederkehrende Erzählung, entscheidet die Seele: welche Familie, welche Bedingungen, welche Prüfungen — als Training für das, was sie entwickeln möchte. Schwierigkeit als Training, nicht als Strafe."
      },
      {
        title: "Erdschule",
        body: "Der Körper und die alltägliche Reibung sind die Schmiede, in der Erkenntnis zu Charakter wird. Der Alltag ist der Ort, an dem Seelenlernen sichtbar wird — Erkenntnis reift dort, wo sie auf realen Widerstand trifft."
      },
      {
        title: "Die Rückkehr",
        body: "Die Inkarnation endet, die Seele lässt den Körper los. Übergang, Rückschau aus Liebe statt aus Urteil, Wiedersehen mit denen, die sie begleiteten. Rückkehr bedeutet verstehen, vergeben und neu planen."
      },
      {
        title: "Seelenreife",
        body: "Reinkarnation, so das Bild, schleift das Ego ab und vertieft das Mitgefühl. Reife Seelen wachsen über sich selbst hinaus, in Dienst an anderen — Meisterschaft der Liebe als klares, dienendes Verstehen."
      }
    ]
  },
  en: {
    eyebrow: "What we believe — and how we live",
    title: "Alethemora in brief",
    intro:
      "The name joins two Greek words: Aletheia, truth — literally the unforgotten — and Moira, the lot in life. Alethemora means: to remember the life the soul has chosen.",
    cards: [
      {
        title: "You are a soul.",
        body: "A part of the source — of light and love, unique and immortal. You are not your body, your name, or your story. Your body is your instrument, not your essence."
      },
      {
        title: "You chose this life.",
        body: "Before your birth you chose, with your spirit guides, your family, your circumstances, and your great lessons — not as punishment, but as a school. None of it is meaningless or accidental."
      },
      {
        title: "Your free will decides.",
        body: "You chose the key moments, not a finished script. The future is a tree of possibilities: the path is laid out, the outcome is open — with every decision you choose the next branch."
      },
      {
        title: "You forgot — so that it becomes real.",
        body: "With birth the soul forgets where it comes from and what it set out to do. Only in forgetting does every loving decision become a real choice. The way leads back: from forgetting to remembrance."
      },
      {
        title: "Soul and animal.",
        body: "Two voices speak in you: the animal, loud, that wants to survive — and the soul, quiet, that knows. Maturity does not mean fighting the animal, but recognizing it and leading it."
      },
      {
        title: "Love creates.",
        body: "You do not have to find love — it is what you are. The soul unfolds, creates, experiences what it has created, and learns from it: the circle of love. Far-matured souls, so the reports say, even take part in shaping life forms and worlds — and experience them themselves."
      },
      {
        title: "No court, no hell.",
        body: "At the end of a life there is no verdict, but a loving review and a coming home. Karma is not punishment, but self-knowledge, and every return to earth is a free choice."
      },
      {
        title: "You are never alone.",
        body: "You travel with a group of familiar souls through many lives — as family, friends, sometimes as difficult teachers. Spirit guides accompany you without taking your decisions from you. And death does not separate."
      }
    ],
    follows: "What follows",
    columns: [
      {
        title: "Lived, not merely believed.",
        body: "Body, mind, and soul are one. The way leads through silence, meditation and yoga, presence, forgiveness, and self-observation without self-condemnation — and equally through sleep, movement, nature, and real community."
      },
      {
        title: "Feel first, then create.",
        body: "Pain wants to be felt first — not skipped over, not talked into something prettier. Only then does the question open: what do I want to create from this? Alethemora calls this step The Transformation."
      },
      {
        title: "From the soul to civilization.",
        body: "Whoever matures changes their surroundings. A higher civilization needs a foundation that allows maturity: hard, decentralized money, education out of attachment and autonomy, and everywhere the same principle — challenge and support."
      }
    ],
    map: "Alethemora is a map, not a dogma. It weaves four sources — the reincarnation research of Michael Newton, the teaching of the present, the idea of conscious creation, and the science of brain and behavior — and invites you to test them in your own life. No religion owns the truth alone; they can all be ways to the same home.",
    threadTitle: "The red thread in six steps",
    threadLead: "A closing, pictorial summary — a telling, not a proof.",
    steps: [
      {
        title: "Source",
        body: "The source, in this image, is an ocean of consciousness and love. Countless souls stream out of it. Life gains direction when it is understood as an expression of this source."
      },
      {
        title: "Spirit world",
        body: "In the reports of hypnosis regression a world of layered resonance is described — healing, soul groups, councils, growth that happens in a guided and communal way."
      },
      {
        title: "Chosen life",
        body: "Here, so the recurring telling goes, the soul decides: which family, which conditions, which tests — as training for what it wants to develop. Difficulty as training, not as punishment."
      },
      {
        title: "Earth school",
        body: "The body and everyday friction are the forge in which recognition becomes character. Everyday life is the place where soul-learning becomes visible — recognition matures where it meets real resistance."
      },
      {
        title: "The return",
        body: "The incarnation ends, the soul lets go of the body. Transition, a review out of love rather than judgment, reunion with those who accompanied it. Return means to understand, to forgive, and to plan anew."
      },
      {
        title: "Soul maturity",
        body: "Reincarnation, so the image, wears the ego down and deepens compassion. Mature souls grow beyond themselves, into service to others — mastery of love as clear, serving understanding."
      }
    ]
  }
} as const;

export function WhySection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="why" className="bg-white">
      <div className="section-shell">
        <p className="type-eyebrow">{t.eyebrow}</p>
        <h2 className="type-h2 mt-4">{t.title}</h2>
        <p className="type-lead mt-6 max-w-3xl">{t.intro}</p>
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card) => (
            <li key={card.title} className="crystal-card p-5">
              <h3 className="type-card-title">{card.title}</h3>
              <p className="type-body mt-3">{card.body}</p>
            </li>
          ))}
        </ul>
        <h3 className="type-h3 mt-16">{t.follows}</h3>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {t.columns.map((column) => (
            <li key={column.title} className="border-t border-sand pt-4">
              <h4 className="type-h3-sm">{column.title}</h4>
              <p className="type-body mt-3">{column.body}</p>
            </li>
          ))}
        </ul>
        <p className="type-small mt-12 max-w-3xl text-tinte-weich">{t.map}</p>
        <div className="mt-16 max-w-3xl">
          <h3 className="type-h3">{t.threadTitle}</h3>
          <p className="type-body mt-3 text-tinte-weich">{t.threadLead}</p>
          <ol className="mt-8 space-y-6">
            {t.steps.map((step, index) => (
              <li key={step.title} className="border-t border-sand pt-4">
                <h4 className="type-card-title">
                  <span className="text-gold">{index + 1}. </span>
                  {step.title}
                </h4>
                <p className="type-body mt-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
