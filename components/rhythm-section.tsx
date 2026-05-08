"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Language } from "@/lib/i18n";
import { levelMeta, rhythmBlocks, type RhythmLevel } from "@/lib/rhythm";

const levels: RhythmLevel[] = ["level1", "level2", "level3"];

const copy = {
  en: {
    badge: "THE VESSEL",
    title: "Daily rhythm",
    intro:
      "The rhythm is not a rulebook. It is a vessel. Choose your entry level and follow morning, day, and evening as a vertical axis of development."
  },
  de: {
    badge: "DAS GEFÄSS",
    title: "Der tägliche Lebensrhythmus",
    intro:
      "Der Rhythmus ist kein Regelwerk. Er ist ein Gefäß. Wähle dein Einstiegslevel und verfolge Morgen, Tag und Abend als vertikale Entwicklungsachse."
  }
} as const;

export function RhythmSection({ language }: { language: Language }) {
  const t = copy[language];
  const [activeLevel, setActiveLevel] = useState<RhythmLevel>("level1");

  return (
    <section id="rhythmus" className="section-shell">
      <div className="mb-10">
        <span className="rounded-full border border-soul-gold/40 bg-soul-gold/10 px-3 py-1 text-xs tracking-[0.16em] text-soul-gold">
          {t.badge}
        </span>
        <h2 className="mt-4 font-serif text-3xl text-zinc-100 sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-300">
          {t.intro}
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-white/10 bg-charcoal/70 p-3 sm:p-4">
        <div className="grid gap-3 md:grid-cols-3">
          {levels.map((level) => {
            const isActive = activeLevel === level;
            return (
              <button
                key={level}
                type="button"
                onClick={() => setActiveLevel(level)}
                className={`rounded-xl border px-4 py-3 text-left transition ${
                  isActive
                    ? "border-soul-gold/55 bg-soul-gold/15 text-zinc-100"
                    : "border-white/10 bg-black/20 text-zinc-300 hover:border-white/30"
                }`}
              >
                <p className="text-sm font-medium">{levelMeta[level][language].label}</p>
                <p className="mt-1 text-xs text-zinc-400">{levelMeta[level][language].description}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative pl-6 sm:pl-10">
        <div className="absolute bottom-3 left-1.5 top-3 w-px bg-gradient-to-b from-soul-gold/70 via-zinc-600 to-quantum-cyan/70 sm:left-4" />

        <div className="space-y-8">
          {rhythmBlocks.map((block, index) => (
            <motion.article
              key={block.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-charcoal/70 p-6"
            >
              <div className="absolute -left-[1.95rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-soul-gold/80 bg-onyx shadow-glowGold sm:-left-[2.25rem]" />
              <p className="text-xs tracking-[0.14em] text-zinc-400">{block.subtitle[language].toUpperCase()}</p>
              <h3 className="mt-2 font-serif text-2xl text-zinc-100">{block.title[language]}</h3>
              <p className="mt-2 text-zinc-300">{block.purpose[language]}</p>

              <ul className="mt-5 space-y-2">
                {block.levels[activeLevel][language].map((item) => (
                  <li key={item} className="flex gap-3 text-zinc-200">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-quantum-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
