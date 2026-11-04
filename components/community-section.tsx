"use client";

import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    title: "Gemeinschaft",
    intro:
      "Ich missioniere nicht. Ich predige nicht. Ich überzeuge nicht durch Worte. Ich lebe. Das ist die wirksamste Form des Zeugnisses: ein Leben, das die Prinzipien nicht beschreibt, sondern verkörpert. Wenn Menschen fragen, was mich trägt, was mich ruhig macht, was mir Kraft gibt — dann teile ich offen. Aber der erste und stärkste Beweis ist das Leben selbst.",
    rituals:
      "Rituale der Verbindung – gemeinsames Feiern ohne Betäubung, aktives Zuhören, Zeit am Feuer statt vor dem Bildschirm.",
    formatsTitle: "Gemeinschaftsformate",
    note: "Die folgenden Formate sind Beispiele — lokale Gemeinschaften können je nach realem Bedarf weitere Formen entwickeln.",
    formats: [
      { title: "Kreativgruppen", text: "Schreibzirkel, Musik-Kollektive, Design-Labs und Handwerksräume, in denen Seelenausdruck sozialen Wert erzeugt." },
      { title: "Hilfsorganisationen", text: "Lokale Hilfsnetze für Kinder, Ältere, vulnerable Menschen und Krisenhilfe — Dienst als angewandtes Mitgefühl." },
      { title: "Selbsthilfegruppen", text: "Peer-Gruppen für Integration, Reflexion, Nüchternheit und Schattenarbeit — gemeinsame Verantwortung ohne Hierarchie." },
      { title: "Lern-Pods", text: "Kleine Studienkreise für Psychologie, Bewusstseinsforschung, Ökonomie und praktische Lebenskompetenz." },
      { title: "Mentoring-Netzwerke", text: "Generationenübergreifende Begleitung, in der reifere Mitglieder Neue durch gelebtes Beispiel unterstützen." },
      { title: "Familien- & Elternzellen", text: "Gemeinschaften für bewusste Elternschaft, Beziehungsreife und eine resiliente Familienkultur." },
      { title: "Praxiskreise", text: "Kontemplative Gruppen für Meditation, Ritual und tägliche innere Ausrichtung — Seelenarbeit im gemeinsamen Rhythmus verankern." },
      { title: "Regenerative Lebenszellen", text: "Lokale Zellen für ökologische Verantwortung, Ernährungssouveränität und Landpflege — Dienst am Lebendigen." },
      { title: "Kooperative Wirtschaftsknoten", text: "Peer-Tauschringe, Gabenkreisläufe und lokale Genossenschaften, die Wert ohne extraktive Zwischenebenen zirkulieren lassen." },
      { title: "Heilungs- & Körperarbeitsgruppen", text: "Somatische Integrationsgruppen für Trauma-Auflösung, Atemarbeit und verkörperte Heilung — Heilung als gemeinsame Präsenz." },
      { title: "Weisheits- & Erzählkreise", text: "Mündliche Traditionskreise, in denen gelebte Erfahrung zu übertragbarer Weisheit zwischen Generationen wird." }
    ]
  },
  en: {
    title: "Community",
    intro:
      "I do not missionize. I do not preach. I do not persuade with words. I live. That is the most effective form of witness: a life that does not describe the principles, but embodies them. When people ask what carries me, what makes me calm, what gives me strength — then I share openly. But the first and strongest proof is life itself.",
    rituals:
      "Rituals of connection — celebrating together without numbing, active listening, time by the fire instead of in front of the screen.",
    formatsTitle: "Community formats",
    note: "The following formats are examples — local communities can develop further forms according to real need.",
    formats: [
      { title: "Creative groups", text: "Writing circles, music collectives, design labs, and craft rooms in which soul expression creates social value." },
      { title: "Aid organizations", text: "Local help networks for children, elders, vulnerable people, and crisis aid — service as applied compassion." },
      { title: "Self-help circles", text: "Peer groups for integration, reflection, sobriety, and shadow work — shared responsibility without hierarchy." },
      { title: "Learning pods", text: "Small study circles for psychology, consciousness research, economics, and practical life skill." },
      { title: "Mentoring networks", text: "Guidance across generations, in which more mature members support newcomers by lived example." },
      { title: "Family and parenting cells", text: "Communities for conscious parenting, maturity in relationship, and a resilient family culture." },
      { title: "Practice circles", text: "Contemplative groups for meditation, ritual, and daily inner alignment — anchoring soul work in a shared rhythm." },
      { title: "Regenerative living cells", text: "Local cells for ecological responsibility, food sovereignty, and care of the land — service to the living." },
      { title: "Cooperative economy nodes", text: "Peer exchange rings, gift cycles, and local cooperatives that circulate value without extractive middle layers." },
      { title: "Healing and bodywork groups", text: "Somatic groups for the release of trauma, breathwork, and embodied healing — healing as shared presence." },
      { title: "Wisdom and story circles", text: "Oral circles in which lived experience becomes wisdom that can be passed between generations." }
    ]
  }
} as const;

export function CommunitySection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="tribe" className="bg-beige">
      <div className="section-shell">
        <h2 className="type-h2">{t.title}</h2>
        <p className="type-lead mt-6 max-w-3xl">{t.intro}</p>
        <p className="type-body mt-4 max-w-3xl">{t.rituals}</p>
        <h3 className="type-h3-sm mt-12">{t.formatsTitle}</h3>
        <p className="type-small mt-3 max-w-3xl text-tinte-weich">{t.note}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.formats.map((format) => (
            <li key={format.title} className="crystal-card p-5">
              <h4 className="type-card-title">{format.title}</h4>
              <p className="type-small mt-2">{format.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
