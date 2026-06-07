"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 }
  }
};

const timelineEase = [0.22, 1, 0.36, 1] as const;

function useFinePointer() {
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setHasFinePointer(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return hasFinePointer;
}

export function RhythmSection({ language }: { language: Language }) {
  const t = copy[language];
  const [activeLevel, setActiveLevel] = useState<RhythmLevel>("level1");
  const hasFinePointer = useFinePointer();

  return (
    <section id="rhythmus" className="section-shell">
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={staggerContainer}
      >
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.45, ease: timelineEase }}
          className="rounded-full border border-soul-gold/40 bg-soul-gold/10 px-3 py-1 text-xs tracking-[0.16em] text-soul-gold"
        >
          {t.badge}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.45, ease: timelineEase }}
          className="mt-4 font-serif text-3xl text-zinc-100 sm:text-4xl"
        >
          {t.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: timelineEase }}
          className="mt-3 max-w-3xl text-zinc-300"
        >
          {t.intro}
        </motion.p>
      </motion.div>

      <motion.div
        className="mb-8 rounded-2xl border border-white/10 bg-charcoal/70 p-3 sm:p-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: timelineEase }}
      >
        <div className="grid gap-3 md:grid-cols-3">
          {levels.map((level, index) => {
            const isActive = activeLevel === level;
            return (
              <motion.button
                key={level}
                type="button"
                onClick={() => setActiveLevel(level)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: timelineEase }}
                whileHover={
                  hasFinePointer && !isActive
                    ? { y: -2, transition: { duration: 0.2 } }
                    : undefined
                }
                whileTap={{ scale: 0.985 }}
                className={`rounded-xl border px-4 py-3 text-left transition-colors duration-300 ${
                  isActive
                    ? "border-soul-gold/55 bg-soul-gold/15 text-zinc-100 shadow-glowGold"
                    : "border-white/10 bg-black/20 text-zinc-300 [@media(hover:hover)_and_(pointer:fine)]:hover:border-soul-gold/30 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-black/30"
                }`}
              >
                <p className="text-sm font-medium">{levelMeta[level][language].label}</p>
                <p className="mt-1 text-xs text-zinc-400">{levelMeta[level][language].description}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <div className="relative pl-6 sm:pl-10">
        <motion.div
          className="absolute bottom-3 left-1.5 top-3 w-px origin-top bg-gradient-to-b from-soul-gold/70 via-zinc-600 to-quantum-cyan/70 sm:left-4"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.85, ease: timelineEase }}
        />

        <div className="space-y-8">
          {rhythmBlocks.map((block, index) => (
            <motion.article
              key={block.key}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: timelineEase }}
              whileHover={
                hasFinePointer
                  ? { y: -3, transition: { duration: 0.25, ease: "easeOut" } }
                  : undefined
              }
              className="group relative rounded-2xl border border-white/10 bg-charcoal/70 p-6 transition-[border-color,box-shadow] duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:border-soul-gold/35 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-glowGold"
            >
              <motion.div
                className="absolute -left-[1.95rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-soul-gold/80 bg-onyx sm:-left-[2.25rem]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.1 + 0.12,
                  type: "spring",
                  stiffness: 280,
                  damping: 22
                }}
                whileHover={
                  hasFinePointer
                    ? {
                        scale: 1.18,
                        boxShadow: "0 0 16px rgba(212, 175, 55, 0.4)",
                        transition: { duration: 0.2 }
                      }
                    : undefined
                }
              />
              <p className="text-xs tracking-[0.14em] text-zinc-400 transition-colors duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-soul-gold/70">
                {block.subtitle[language].toUpperCase()}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-zinc-100">{block.title[language]}</h3>
              <p className="mt-2 text-zinc-300">{block.purpose[language]}</p>

              <motion.ul
                key={activeLevel}
                className="mt-5 space-y-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.045 } }
                }}
              >
                {block.levels[activeLevel][language].map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: -6 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.3, ease: timelineEase }}
                    className="flex gap-3 text-zinc-200"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-quantum-cyan transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-125" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
