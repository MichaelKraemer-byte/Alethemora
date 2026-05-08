"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AlethemoraRing } from "@/components/alethemora-ring";
import type { Language } from "@/lib/i18n";

const copy: Record<Language, { badge: string; title: string; sub: string; cta: string }> = {
  en: {
    badge: "DIGITAL SANCTUARY FOR SOUL MASTERY",
    title: "ALETHEMORA — The Eternal Within Us, Lived in the Now.",
    sub: "No borrowed belief—only insight honed by intuition and logic: soul mastery without religion or dogma, rooted in the light you recover within.",
    cta: "Enter the Path"
  },
  de: {
    badge: "DIGITALES SANCTUARIUM FÜR SEELENMEISTERSCHAFT",
    title: "ALETHEMORA — Das Ewige in uns, gelebt im Jetzt.",
    sub: "Kein Glaube aus Autorität – sondern Einsicht aus Intuition und Logik: Seelenmeisterschaft ohne Religion, ohne Dogma, verwurzelt im Licht, das du in dir wiederfindest.",
    cta: "Betritt den Pfad"
  }
};

export function HeroSection({ language }: { language: Language }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center pt-[8vh] sm:pt-[10vh]">
        <motion.div
          className="relative h-[min(72vw,20rem)] w-[min(72vw,20rem)] sm:h-[min(62vw,24rem)] sm:w-[min(62vw,24rem)] lg:h-[28rem] lg:w-[28rem]"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 200, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <AlethemoraRing variant="hero" className="h-full w-full opacity-[0.22] sm:opacity-[0.28]" />
          </motion.div>
          <motion.div
            className="absolute inset-[12%]"
            animate={{ rotate: -360 }}
            transition={{ duration: 260, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <AlethemoraRing variant="hero" className="h-full w-full opacity-[0.12] blur-[0.5px] sm:opacity-[0.16]" />
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_42%,transparent_0%,transparent_28%,rgba(8,8,8,0.35)_55%,rgba(8,8,8,0.82)_78%,#080808_100%)]"
        aria-hidden
      />

      <div className="section-shell relative z-10 flex min-h-[88vh] flex-col items-center justify-center px-4 pb-16 pt-8 text-center sm:min-h-[90vh] sm:pb-20 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-soul-gold/40 bg-black/35 px-4 py-2.5 text-xs tracking-[0.2em] text-soul-gold/95 shadow-[0_0_32px_rgba(212,175,55,0.12)] backdrop-blur-md sm:mb-10 sm:tracking-[0.22em]"
        >
          <AlethemoraRing variant="badge" className="h-4 w-4 shrink-0 sm:h-[1.15rem] sm:w-[1.15rem]" />
          {copy[language].badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-4xl bg-gradient-to-b from-zinc-50 to-zinc-200 bg-clip-text font-serif text-4xl leading-[1.12] text-transparent sm:text-5xl sm:leading-tight lg:text-7xl"
        >
          {copy[language].title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg"
        >
          {copy[language].sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mt-10 sm:mt-12"
        >
          <a
            href="#prinzipien"
            className="group inline-flex items-center gap-2 rounded-full border border-soul-gold/20 bg-soul-gold/[0.04] px-6 py-2.5 text-sm font-normal tracking-wide text-soul-gold/85 transition-colors duration-500 ease-out hover:border-soul-gold/35 hover:bg-soul-gold/[0.07] hover:text-soul-gold sm:gap-2.5 sm:px-7 sm:py-3 sm:text-base"
          >
            {copy[language].cta}
            <ArrowDown
              className="h-3.5 w-3.5 opacity-70 transition duration-500 ease-out group-hover:translate-y-px group-hover:opacity-90 sm:h-4 sm:w-4"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
