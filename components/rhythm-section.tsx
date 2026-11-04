"use client";

import { useState } from "react";
import type { Language } from "@/lib/i18n";
import { levelMeta, rhythmBlocks, type RhythmLevel } from "@/lib/rhythm";

// TODO: EN prüfen
const intro = {
  de: {
    title: "Rhythmus",
    text: "Stille, Meditation und Yoga sind seine Werkzeuge."
  },
  en: {
    title: "Rhythm",
    text: "Silence, meditation, and yoga are its tools."
  }
} as const;

const levels: RhythmLevel[] = ["level1", "level2", "level3"];

export function RhythmSection({ language }: { language: Language }) {
  const [level, setLevel] = useState<RhythmLevel>("level1");
  const t = intro[language];

  return (
    <section id="rhythmus" className="bg-beige">
      <div className="section-shell">
        <h2 className="type-h2">{t.title}</h2>
        <p className="type-lead mt-6 max-w-3xl">{t.text}</p>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={t.title}>
          {levels.map((key) => {
            const active = level === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setLevel(key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active ? "border-tinte bg-white text-tinte" : "border-sand bg-transparent text-tinte-weich hover:bg-white"
                }`}
              >
                {levelMeta[key][language].label}
              </button>
            );
          })}
        </div>
        <p className="type-small mt-4 max-w-3xl text-tinte-weich">{levelMeta[level][language].description}</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {rhythmBlocks.map((block) => (
            <article key={block.key} className="crystal-card p-6">
              <h3 className="type-h3-sm">{block.title[language]}</h3>
              <p className="type-small mt-1 text-gold">{block.subtitle[language]}</p>
              <p className="type-body mt-3">{block.purpose[language]}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {block.levels[level][language].map((line) => (
                  <li key={line} className="type-small">
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
