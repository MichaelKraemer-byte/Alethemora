"use client";

import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";
import { principlesEn } from "@/lib/principles-en";
import { principles, spheres } from "@/lib/principles";

// TODO: EN prüfen
const pause: Record<Language, Record<string, string>> = {
  de: {
    "WER DU BIST":
      "Wo in meinem Leben verwechsle ich mich noch mit meinem Körper, meiner Rolle oder meiner Geschichte — statt mit der Seele, die das alles nur durchlebt?",
    "WOHER DU KOMMST":
      "Welches Muster in meinem Leben — eine Angst, ein Talent, eine sofortige Verbindung zu einem Ort oder Menschen — könnte älter sein als dieses eine Leben?",
    "MIT WEM DU REIST":
      "Wer in deinem aktuellen Leben fordert dein Herz am meisten heraus, und welche Lektion der Liebe könnte dahinterstehen?",
    "DIE GEGENWART UND DIE INNERE STIMME":
      "Wie viel von meinem heutigen Tag habe ich tatsächlich im gegenwärtigen Moment verbracht — und wann habe ich zuletzt eine leise, innere Gewissheit übergangen, nur weil der Verstand lauter war?",
    "WIE DU DEIN LEBEN GESTALTEST":
      "Welche Gedanken wiederhole ich mir selbst am häufigsten — und was erschaffen sie gerade in meinem Leben?",
    "DAS GRÖSSERE BILD":
      "Wenn ich mein bisheriges Leben heute schon einmal ehrlich und ohne Urteil zurückblickend betrachten müsste — was würde ich sehen, und was würde ich mir dafür vergeben?",
    "DIE ARBEIT AM CHARAKTER":
      "Welchem Schmerz bin ich zuletzt ausgewichen, indem ich ihn zu schnell in eine Lektion verwandelt habe, statt ihn zuerst wirklich zu fühlen?",
    "DIE EINHEIT UND DIE LIEBE":
      "Wo ziehe ich eine feste Grenze zwischen „ich“ und „die anderen“, die bei genauerem Hinsehen vielleicht nicht so fest ist, wie ich glaube — und was würde die liebevollste Version meiner selbst hier tun?",
    "DIE VERBINDUNG ZU ANDEREN": "Wem bin ich heute begegnet, ohne wirklich die Seele hinter dem Gesicht zu sehen?",
    "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL":
      "Wenn sich mein innerer Zustand heute auf die ganze Welt übertragen würde — welche Welt würde daraus entstehen, und was würde ich heute anders tun, wenn ich wirklich glaubte, dass mein volles Potenzial bereits in mir angelegt ist?",
    "DIE WISSENSCHAFT DES WACHSTUMS":
      "Welches Muster in mir würde sich verändern, wenn ich es heute bewusst und wiederholt anders übe?",
    "DAS OFFENE WELTBILD": "Woran halte ich fest, das ich eigentlich schon lange infrage stellen wollte?"
  },
  en: {
    "WER DU BIST":
      "Where in my life do I still confuse myself with my body, my role, or my story — instead of with the soul that is only living through all of it?",
    "WOHER DU KOMMST":
      "Which pattern in my life — a fear, a talent, an instant connection to a place or a person — might be older than this one life?",
    "MIT WEM DU REIST":
      "Who in your present life challenges your heart the most, and what lesson of love might stand behind that?",
    "DIE GEGENWART UND DIE INNERE STIMME":
      "How much of my day today did I actually spend in the present moment — and when did I last pass over a quiet inner certainty, only because the mind was louder?",
    "WIE DU DEIN LEBEN GESTALTEST":
      "Which thoughts do I repeat to myself most often — and what are they creating in my life right now?",
    "DAS GRÖSSERE BILD":
      "If I had to look back today, honestly and without judgment, on the life I have lived so far — what would I see, and what would I forgive myself for?",
    "DIE ARBEIT AM CHARAKTER":
      "Which pain did I last step around by turning it too quickly into a lesson, instead of feeling it first?",
    "DIE EINHEIT UND DIE LIEBE":
      "Where do I draw a hard line between “me” and “the others” that, looked at closely, may not be as hard as I believe — and what would the most loving version of myself do here?",
    "DIE VERBINDUNG ZU ANDEREN": "Whom did I meet today without really seeing the soul behind the face?",
    "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL":
      "If my inner state today were carried over onto the whole world — what world would come of it, and what would I do differently today if I truly believed that my full potential is already laid down in me?",
    "DIE WISSENSCHAFT DES WACHSTUMS":
      "Which pattern in me would change if I practiced it differently today, consciously and repeatedly?",
    "DAS OFFENE WELTBILD": "What am I holding on to that I have actually wanted to question for a long time?"
  }
};

const sphereTitle: Record<Language, Record<string, string>> = {
  de: Object.fromEntries(spheres.map((sphere) => [sphere, sphere])),
  en: {
    "WER DU BIST": "WHO YOU ARE",
    "WOHER DU KOMMST": "WHERE YOU COME FROM",
    "MIT WEM DU REIST": "WHO YOU TRAVEL WITH",
    "DIE GEGENWART UND DIE INNERE STIMME": "THE PRESENT AND THE INNER VOICE",
    "WIE DU DEIN LEBEN GESTALTEST": "HOW YOU SHAPE YOUR LIFE",
    "DAS GRÖSSERE BILD": "THE LARGER PICTURE",
    "DIE ARBEIT AM CHARAKTER": "THE WORK ON CHARACTER",
    "DIE EINHEIT UND DIE LIEBE": "UNITY AND LOVE",
    "DIE VERBINDUNG ZU ANDEREN": "THE CONNECTION TO OTHERS",
    "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL": "COMMUNITY, CIVILIZATION, AND POTENTIAL",
    "DIE WISSENSCHAFT DES WACHSTUMS": "THE SCIENCE OF GROWTH",
    "DAS OFFENE WELTBILD": "THE OPEN WORLDVIEW"
  }
};

const intro = {
  de: {
    title: "Die Prinzipien — Der Weg zum höheren Wesen",
    credoMark: "Diese Prinzipien sind als persönliches Credo zu lesen",
    credo:
      "Diese Prinzipien sind als persönliches Credo zu lesen — als das, was ein Mensch sich vornimmt zu leben, nicht als wissenschaftlich bewiesene Aussage über die Welt. Im Licht der Grundüberzeugung („keine bewiesene Tatsache, eine Landkarte, kein Dogma“) sind sie eine Vertiefung dieser Haltung. Sie stammen aus unterschiedlichen Quellen — der Reinkarnationsforschung, der Lehre von der Gegenwart, der Vorstellung bewusster Erschaffung, der Wissenschaft von Gehirn und Verhalten —, sind hier aber bewusst nicht nach Herkunft, sondern nach Thema geordnet. Keine Quelle steht über der anderen; jede beleuchtet einen anderen Winkel desselben Weges.",
    rulesMark: "Keine Regeln. Keine Dogmen.",
    rules: "Keine Regeln. Keine Dogmen. Diese Prinzipien beschreiben die Struktur bewusster Entwicklung. Wähle eines und öffne die volle Bedeutung.",
    pauseLabel: "Zum Innehalten"
  },
  en: {
    title: "The principles — the way to the higher being",
    credoMark: "These principles are to be read as a personal credo",
    credo:
      "These principles are to be read as a personal credo — as what a person resolves to live, not as a scientifically proven statement about the world. In the light of the basic conviction (“no proven fact, a map, not a dogma”) they are a deepening of this stance. They come from different sources — reincarnation research, the teaching of the present, the idea of conscious creation, the science of brain and behavior — but here they are ordered deliberately not by origin, but by theme. No source stands above another; each lights a different angle of the same path.",
    rulesMark: "No rules. No dogmas.",
    rules: "No rules. No dogmas. These principles describe the structure of conscious development. Choose one and open its full meaning.",
    pauseLabel: "To pause with"
  }
} as const;

export function PrinciplesSection({ language }: { language: Language }) {
  const t = intro[language];

  return (
    <section id="prinzipien" className="bg-beige">
      <div className="section-shell">
        <div className="reading-column">
        <h1 className="type-h1">{t.title}</h1>
        <p className="type-lead mt-6">{emphasize(t.credo, t.credoMark)}</p>
        <p className="type-lead">{emphasize(t.rules, t.rulesMark)}</p>
        <div className="mt-14 space-y-14">
          {spheres.map((sphere) => {
            const items = principles.filter((principle) => principle.sphere === sphere);
            return (
              <div key={sphere}>
                <h3 className="type-h3-sm">{sphereTitle[language][sphere]}</h3>
                <p className="type-small mt-3 text-tinte-weich">
                  <span className="text-gold">{t.pauseLabel}: </span>
                  {pause[language][sphere]}
                </p>
                <div className="mt-4">
                  {items.map((principle) => {
                    const statement =
                      language === "en" ? principlesEn[principle.id]?.statement ?? principle.statement : principle.statement;
                    const detail =
                      language === "en" ? principlesEn[principle.id]?.detail ?? principle.detail : principle.detail;
                    const paragraphs = detail.split(/\n\n+/);
                    return (
                      <details key={principle.id} className="border-t border-sand py-3">
                        <summary className="cursor-pointer type-card-title">
                          <span className="text-gold">{principle.id}. </span>
                          {statement}
                        </summary>
                        <div className="mt-3">
                          {paragraphs.map((paragraph) => (
                            <p key={paragraph} className="type-body">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </details>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
