"use client";

import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    eyebrow: "Das Dach über allen Prinzipien",
    title: "Liebe als höchste Lernaufgabe",
    lead: "An der Spitze dieses Weges stehen nicht Reife, Bewusstsein oder Verantwortung – so wichtig sie sind. An der Spitze steht die Liebe: nicht als Gefühl unter anderen, sondern als die Energie, die in allem steckt und alles erschafft. Das Leben ist der Raum, den wir uns selbst geschaffen haben, um Liebe nicht nur zu finden, sondern zu erschaffen.",
    egoTitle: "Ego-Liebe",
    ego: "Ego-Liebe ist die Liebe der Bedingung: Ich liebe dich, weil du mir gibst, was ich brauche. Sie klammert, vergleicht, fürchtet den Verlust, bindet den anderen an die eigene Erwartung. Sie ist nicht falsch — sie ist der Ausgangspunkt fast jeder menschlichen Liebe —, aber sie bleibt an das Ego gebunden, das sich selbst als getrennt und bedürftig erlebt.",
    soulTitle: "Seelen-Liebe",
    soul: "Seelen-Liebe dagegen lässt frei, statt zu binden. Sie erkennt im anderen dasselbe Göttliche, das im eigenen Inneren wohnt, ohne dafür eine Gegenleistung zu verlangen. Sie versteht, statt zu urteilen. Sie liebt nicht, weil der andere etwas gibt, sondern weil Liebe das ist, was durch sie hindurch will, sobald der Widerstand des Egos nachlässt.",
    circleTitle: "Der Kreis der Liebe",
    stations: ["entfalten", "erschaffen", "erleben", "lernen"],
    circle:
      "Die Seele entfaltet sich, sie erschafft, sie erlebt, was sie erschaffen hat, und sie lernt daraus — um sich von dort aus weiter zu entfalten. Jedes Leben ist eine Runde in diesem Kreis.",
    quote:
      "Liebe in der Geistwelt zu sein, ist leicht. Liebe aus dem scheinbaren Nichts zu erschaffen – in einem Moment, in dem keine Kraft mehr da zu sein scheint, allein aus dem freien Willen –, das ist es, wofür die Seele gekommen ist.",
    close:
      "Wir sind nicht nur Lernende der Liebe. Wir sind ihre Erschaffer – in jedem Moment, in dem wir uns dafür entscheiden."
  },
  en: {
    eyebrow: "The roof over all the principles",
    title: "Love as the highest lesson",
    lead: "At the summit of this path stand not maturity, consciousness, or responsibility — important as they are. At the summit stands love: not as one feeling among others, but as the energy that is in everything and creates everything. Life is the space we have made for ourselves, in order not only to find love, but to create it.",
    egoTitle: "Ego-love",
    ego: "Ego-love is the love of condition: I love you because you give me what I need. It clings, compares, fears loss, binds the other to its own expectation. It is not wrong — it is the starting point of almost every human love — but it stays bound to the ego, which experiences itself as separate and in need.",
    soulTitle: "Soul-love",
    soul: "Soul-love, by contrast, lets free instead of binding. It recognizes in the other the same divine that lives in one’s own inner being, without demanding anything in return. It understands, instead of judging. It does not love because the other gives something, but because love is what wants to pass through it as soon as the resistance of the ego eases.",
    circleTitle: "The circle of love",
    stations: ["unfold", "create", "experience", "learn"],
    circle:
      "The soul unfolds, it creates, it experiences what it has created, and it learns from that — in order to unfold further from there. Every life is one round in this circle.",
    quote:
      "To be love in the spirit world is easy. To create love out of the apparent nothing — in a moment when no strength seems left, out of free will alone — that is what the soul has come for.",
    close: "We are not only learners of love. We are its creators — in every moment in which we decide for it."
  }
} as const;

function LoveCircle({ stations }: { stations: readonly string[] }) {
  const points = [
    { x: 240, y: 118, labelX: 240, labelY: 96, anchor: "middle" as const },
    { x: 332, y: 210, labelX: 348, labelY: 214, anchor: "start" as const },
    { x: 240, y: 302, labelX: 240, labelY: 332, anchor: "middle" as const },
    { x: 148, y: 210, labelX: 132, labelY: 214, anchor: "end" as const }
  ];

  return (
    <svg viewBox="0 0 480 400" className="mx-auto mt-6 w-full max-w-lg" role="img" aria-label={stations.join(" → ")}>
      <circle cx="240" cy="210" r="92" fill="none" stroke="#DDD2BF" strokeWidth="1.5" />
      {points.map((point, index) => (
        <g key={stations[index]}>
          <circle cx={point.x} cy={point.y} r="6" fill="#7A5F2A" />
          <text
            x={point.labelX}
            y={point.labelY}
            textAnchor={point.anchor}
            fill="#2A2522"
            fontSize="16"
            fontFamily="var(--font-playfair), Georgia, serif"
          >
            {stations[index]}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function LoveSection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="liebe" className="bg-beige">
      <div className="section-shell">
        <p className="type-eyebrow">{t.eyebrow}</p>
        <h2 className="type-h2 mt-4">{t.title}</h2>
        <p className="type-lead mt-6 max-w-3xl">{t.lead}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="crystal-card p-6">
            <h3 className="type-h3-sm">{t.egoTitle}</h3>
            <p className="type-body mt-3">{t.ego}</p>
          </article>
          <article className="crystal-card p-6">
            <h3 className="type-h3-sm">{t.soulTitle}</h3>
            <p className="type-body mt-3">{t.soul}</p>
          </article>
        </div>
        <h3 className="type-h3 mt-16 text-center">{t.circleTitle}</h3>
        <LoveCircle stations={t.stations} />
        <p className="type-body mx-auto mt-4 max-w-3xl text-center">{t.circle}</p>
        <blockquote className="type-subtitle mx-auto mt-14 max-w-3xl text-center">{t.quote}</blockquote>
        <p className="type-lead mx-auto mt-8 max-w-3xl text-center">{t.close}</p>
      </div>
    </section>
  );
}
