"use client";

import Link from "next/link";
import { BodyMindSoulSection } from "@/components/body-mind-soul-section";
import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";

const rhythmLink = {
  de: "Tagesrhythmus",
  en: "Daily rhythm" // TODO: EN prüfen
} as const;

const rhythmButtonClass =
  "mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-sand bg-white px-7 text-sm font-bold tracking-wide text-tinte transition hover:bg-beige hover:text-tinte sm:text-base";

type Practice = { title: string; bullets: string[]; note?: string };

// TODO: EN prüfen — Wortlaut der 18 Praktiken aus dem deutschen Buch übertragen.
const areas: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    intro: string;
    introMark: string;
    book: string;
    groups: { title: string; practices: Practice[] }[];
  }
> = {
  de: {
    eyebrow: "Körper, Geist und Seele",
    title: "Praxis",
    introMark: "Körper, Geist und Seele sind eine untrennbare Einheit",
    intro:
      "Körper, Geist und Seele sind eine untrennbare Einheit: Vernachlässigt man eine Ebene, leiden die anderen. Der Körper ist das Werkzeug der Seele, nicht ihr Wesen – und er bringt das Tier mit: Temperament, Instinkte und Ängste. Reife heißt, dass die Seele führt.",
    book: "Im Buch: 18 Praktiken in drei Bereichen – tägliche Praxis, Selbstbildung und Anwendung im Außen.",
    groups: [
      {
        title: "Tägliche und wiederkehrende Praktiken",
        practices: [
          {
            title: "Finde stetig den Pfad wieder",
            bullets: [
              "Reflektiere regelmäßig deinen Weg: dein Leben, wie du gerade Liebe lernen möchtest, welche Lektion du lernen wolltest, was du auf dieser Erde lernen möchtest und warum du hier bist",
              "Entfalte dich als die Person, als die du dich selbst erfahren möchtest"
            ]
          },
          {
            title: "Achte auf Zeichen, Träume & Intuition",
            bullets: [
              "Träume reflektieren und deuten",
              "Zeichen und Impulse im Alltag wahrnehmen und deuten (Begegnungen, Intuitionen, Zufälle)"
            ]
          },
          {
            title: "Übe Vergebung",
            bullets: ["Dir selbst und anderen gegenüber", "Konflikte als Lernchance statt als Schuldfrage betrachten"]
          },
          {
            title: "Praktiziere Meditation & Achtsamkeit",
            bullets: [
              "Meditation & Yoga",
              "Achtsamkeitstraining",
              "Stressregulierung",
              "Nimm dich selbst und deine Suche dabei nicht zu ernst — Leichtigkeit und Humor gehören zur Reife dazu"
            ]
          },
          {
            title: "Entwickle stetig deine Sprache & Kommunikation weiter",
            bullets: ["Harmonie", "Effizienz", "Empathie & Verständlichkeit"]
          },
          {
            title: "Pflege echte Gemeinschaft",
            bullets: [
              "Suche und gestalte Beziehungen, die fordern und fördern",
              "Pflege Familie und Freundschaften bewusst, nicht nebenbei",
              "Gestalte Liebe und Intimität reif und bewusst",
              "Suche oder schaffe Rituale der Verbindung: gemeinsames Feiern ohne Betäubung, aktives Zuhören, Zeit am Feuer statt vor dem Bildschirm",
              "Begegne auch Fremden mit dem Bewusstsein tieferer Verbundenheit"
            ]
          },
          { title: "Optimiere deinen Körper (Sport)", bullets: ["Funktionalität, Gesundheit, Vitalität"] },
          { title: "Optimale Ernährung", bullets: ["Gesundheit und Vitalität", "Darm-Hirn-Achse optimieren"] },
          {
            title: "Sorge für Schlaf & Regeneration",
            bullets: [
              "Ausreichender, qualitativ hochwertiger Schlaf als Fundament für Körper, Geist und Seele",
              "Bewusste Erholungsphasen"
            ]
          },
          {
            title: "Drücke dich kreativ aus",
            bullets: ["Kunst, Handwerk oder Gestaltung als Weg der Selbsterkenntnis und des Ausdrucks"]
          },
          {
            title: "Halte bewusst Distanz zu Ablenkung & Sucht",
            bullets: [
              "Erkenne die alltäglichen Betäubungsmittel der Zeit: Social Media, endloser Konsum, digitale Reizüberflutung",
              "Ersetze Betäubung durch echte Präsenz"
            ]
          },
          {
            title: "Naturverbundenheit",
            bullets: [
              "Regelmäßiger, bewusster Aufenthalt in der Natur",
              "Die Rhythmen der Natur wahrnehmen und das eigene Leben daran ausrichten: Jahreszeiten, Tag und Nacht, Ebbe und Flut der eigenen Energie",
              "Tod und Leben als Teil desselben Kreislaufs ehren",
              "Achtung und Pflege der natürlichen Umwelt",
              "Zeit ohne Bildschirm, ohne Ziel, nur um wahrzunehmen"
            ]
          },
          {
            title: "Rituale & gelebte Göttlichkeit",
            bullets: [
              "Gebete — bewusstes Sprechen von Dankbarkeit, Bitte oder Hingabe",
              "Affirmationen — klar formulierte, positive Selbstaussagen",
              "Manifestation durch Dankbarkeit — bewusst innehalten bei dem, was bereits da ist",
              "Bewusst gesprochene Worte in Bewegung — Sprache als erschaffene Energie",
              "Opfergabe — kleine, bewusste Akte des Gebens"
            ]
          },
          {
            title: "Pflege deine Energie, deinen Rhythmus und deine Resonanz",
            bullets: [
              "Kohärentes Atmen: täglich einige Minuten langsam atmen, etwa sechs Atemzüge pro Minute",
              "Musik, Rhythmus, Gesang und Tanz als Wege, Körper und Seele in Einklang zu bringen",
              "Tätigkeiten suchen und pflegen, die dich in den Flow bringen",
              "Bewusst wählen, mit welchen Menschen, Orten und Inhalten du in Resonanz gehst",
              "Abends kurz spüren: Was hat mir heute Energie gegeben, und was hat sie mir genommen?"
            ]
          }
        ]
      },
      {
        title: "Fortlaufende Selbstbildung",
        practices: [
          {
            title: "Bilde dich über deinen gesamten Körper aus",
            bullets: ["Anatomie, Biologie, Gesundheit, Funktionalität & Effizienz"]
          },
          {
            title: "Bilde dich über deine gesamte Psyche aus",
            bullets: ["Psychologie, Hirnforschung, Geisteswissenschaften"]
          },
          {
            title: "Bilde dich über das Leben nach dem Tod weiter",
            bullets: ["Nahtoderfahrungen (NDEs)", "Reinkarnationsforschung", "Berichte aus der Hypnosetherapie über die Geistwelt"],
            note: "Diese Berichte gelten hier nicht als bewiesene Beschreibung einer objektiven Geistwelt, sondern als wiederkehrendes, kulturübergreifendes Muster menschlicher Weisheit über Reifung, Rückschau und Gemeinschaft — eine Landkarte für das gelebte Leben, kein Foto vom Jenseits."
          }
        ]
      },
      {
        title: "Anwendung",
        practices: [
          {
            title: "Leben im Außen",
            bullets: [
              "Wende das gewonnene Wissen an — in deinem Alltag, in deinen Beziehungen, in deiner Arbeit",
              "Seelenreife ist kein Zustand, den man erreicht, sondern eine tägliche Übung, die man wählt",
              "Entwickle dich zu einem höheren Wesen weiter und fordere und fördere stetig genauso andere dazu weiter",
              "Suche aktiv Gelegenheiten, anderen zu dienen, zu lehren oder zu unterstützen"
            ]
          }
        ]
      }
    ]
  },
  en: {
    eyebrow: "Body, mind, and soul",
    title: "Practice",
    introMark: "Body, mind, and soul are an inseparable unity",
    intro:
      "Body, mind, and soul are an inseparable unity: neglect one level, and the others suffer. The body is the soul’s instrument, not its essence — and it brings the animal with it: temperament, instincts, and fears. Maturity means that the soul leads.",
    book: "In the book: 18 practices in three areas — daily practice, self-education, and application in the outer world.",
    groups: [
      {
        title: "Daily and recurring practices",
        practices: [
          {
            title: "Find the path again, steadily",
            bullets: [
              "Reflect regularly on your way: your life, how you want to learn love just now, which lesson you wanted to learn, what you want to learn on this earth, and why you are here",
              "Unfold as the person you want to experience yourself as"
            ]
          },
          {
            title: "Attend to signs, dreams, and intuition",
            bullets: [
              "Reflect on dreams and interpret them",
              "Notice and interpret signs and impulses in everyday life (encounters, intuitions, coincidences)"
            ]
          },
          {
            title: "Practice forgiveness",
            bullets: ["Toward yourself and toward others", "See conflicts as a chance to learn, not as a question of guilt"]
          },
          {
            title: "Practice meditation and mindfulness",
            bullets: [
              "Meditation and yoga",
              "Mindfulness training",
              "Stress regulation",
              "Do not take yourself and your search too seriously — lightness and humor belong to maturity"
            ]
          },
          {
            title: "Keep developing your language and communication",
            bullets: ["Harmony", "Efficiency", "Empathy and clarity"]
          },
          {
            title: "Tend real community",
            bullets: [
              "Seek and shape relationships that challenge and support",
              "Tend family and friendships consciously, not on the side",
              "Shape love and intimacy in a mature and conscious way",
              "Seek or create rituals of connection: celebrating together without numbing, active listening, time by the fire instead of in front of the screen",
              "Meet strangers, too, with the awareness of a deeper bond"
            ]
          },
          { title: "Care for your body (movement)", bullets: ["Function, health, vitality"] },
          { title: "Nourishment", bullets: ["Health and vitality", "Tend the gut-brain axis"] },
          {
            title: "Sleep and recovery",
            bullets: [
              "Enough sleep of good quality, as a foundation for body, mind, and soul",
              "Conscious phases of rest"
            ]
          },
          {
            title: "Express yourself creatively",
            bullets: ["Art, craft, or making as a way of self-knowledge and expression"]
          },
          {
            title: "Keep a conscious distance from distraction and addiction",
            bullets: [
              "Recognize the everyday numbing agents of the time: social media, endless consumption, digital overload",
              "Replace numbing with real presence"
            ]
          },
          {
            title: "Connection with nature",
            bullets: [
              "Regular, conscious time in nature",
              "Notice the rhythms of nature and align your own life with them: seasons, day and night, the ebb and flow of your own energy",
              "Honor death and life as part of the same cycle",
              "Respect and care for the natural environment",
              "Time without a screen, without a goal, only to perceive"
            ]
          },
          {
            title: "Rituals and lived divinity",
            bullets: [
              "Prayers — consciously speaking gratitude, request, or surrender",
              "Affirmations — clearly formulated, positive statements to oneself",
              "Manifestation through gratitude — consciously pausing with what is already there",
              "Consciously spoken words in movement — language as created energy",
              "Offering — small, conscious acts of giving"
            ]
          },
          {
            title: "Tend your energy, your rhythm, and your resonance",
            bullets: [
              "Coherent breathing: a few minutes of slow breathing each day, about six breaths a minute",
              "Music, rhythm, singing, and dance as ways to bring body and soul into accord",
              "Seek and tend activities that bring you into flow",
              "Choose consciously which people, places, and contents you go into resonance with",
              "In the evening, feel briefly: what gave me energy today, and what took it?"
            ]
          }
        ]
      },
      {
        title: "Ongoing self-education",
        practices: [
          { title: "Educate yourself about your whole body", bullets: ["Anatomy, biology, health, function, and efficiency"] },
          {
            title: "Educate yourself about your whole psyche",
            bullets: ["Psychology, brain research, the humanities"]
          },
          {
            title: "Keep learning about life after death",
            bullets: ["Near-death experiences", "Reincarnation research", "Reports from hypnotherapy about the spirit world"],
            note: "These reports are not taken here as a proven description of an objective spirit world, but as a recurring, cross-cultural pattern of human wisdom about maturing, review, and community — a map for the lived life, not a photograph of the beyond."
          }
        ]
      },
      {
        title: "Application",
        practices: [
          {
            title: "Life in the outer world",
            bullets: [
              "Apply what you have learned — in your everyday life, in your relationships, in your work",
              "Soul maturity is not a state one reaches, but a daily practice one chooses",
              "Keep developing toward a higher being, and steadily challenge and support others to do the same",
              "Actively seek occasions to serve, teach, or support others"
            ]
          }
        ]
      }
    ]
  }
};

export function PathOfPracticeSection({ language }: { language: Language }) {
  const t = areas[language];

  return (
    <section id="path-of-practice" className="bg-white">
      <div className="section-shell">
        <div className="reading-column min-w-0">
          <p className="type-eyebrow">{t.eyebrow}</p>
          <h1 className="type-h1 mt-4">{t.title}</h1>
          <Link href="/praxis#rhythmus" className={rhythmButtonClass}>
            {rhythmLink[language]}
          </Link>
          <BodyMindSoulSection language={language} />
          <p className="type-lead mt-24">{emphasize(t.intro, t.introMark)}</p>
          <p className="type-body">{t.book}</p>
          <div className="mt-16 space-y-20">
            {t.groups.map((group) => (
              <div key={group.title}>
                <h2 className="type-h2-sm">{group.title}</h2>
                <ol className="mt-8 border-t border-sand">
                  {group.practices.map((practice) => (
                    <li key={practice.title} className="border-b border-sand py-8">
                      <h3 className="type-card-title">{practice.title}</h3>
                      <ul className="mt-4 list-disc space-y-3 pl-5">
                        {practice.bullets.map((bullet) => (
                          <li key={bullet} className="type-body">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      {practice.note ? <p className="type-body mt-4">{practice.note}</p> : null}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
