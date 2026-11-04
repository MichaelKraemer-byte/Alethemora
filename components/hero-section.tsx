"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AlethemoraRing } from "@/components/alethemora-ring";
import type { Language } from "@/lib/i18n";

const copy: Record<Language, { badge: string; title: string; sub: string; cta: string }> = {
  en: {
    badge: "PHILOSOPHY & PRACTICE OF SOUL CONTINUITY",
    title: "ALETHEMORA — Soul continuity, soul maturity in everyday life.",
    sub: "We orient ourselves by convergent research and lived experience: consciousness continues, life is a field of learning. Alethemora is our path — insight from intuition and logic, rooted in the light you recover within.",
    cta: "What we believe"
  },
  de: {
    badge: "PHILOSOPHIE & PRAXIS DER SEELENKONTINUITÄT",
    title: "ALETHEMORA — Kontinuität der Seele, Seelenreife im Alltag.",
    sub: "Wir orientieren uns an konvergenter Forschung und gelebter Erfahrung: Bewusstsein setzt sich fort, Leben ist Lernfeld. Alethemora ist unser Weg — Einsicht aus Intuition und Logik, verwurzelt in dem Licht, das du in dir wiederfindest.",
    cta: "Woran wir glauben"
  }
};

export function HeroSection({ language }: { language: Language }) {
  return (
    <section className="relative overflow-hidden bg-beige">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center pt-[8vh] sm:pt-[10vh]">
        <div className="relative h-[min(72vw,20rem)] w-[min(72vw,20rem)] sm:h-[min(62vw,24rem)] sm:w-[min(62vw,24rem)] lg:h-[28rem] lg:w-[28rem]">
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
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4),transparent_58%)]"
        aria-hidden
      />

      <div className="section-shell relative z-10 flex min-h-[88vh] flex-col items-center justify-center px-4 pb-16 pt-8 text-center sm:min-h-[90vh] sm:pb-20 sm:pt-12">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-white/80 px-4 py-2.5 text-xs tracking-[0.2em] text-gold sm:mb-10 sm:tracking-[0.22em]">
          <AlethemoraRing variant="badge" className="h-4 w-4 shrink-0 sm:h-[1.15rem] sm:w-[1.15rem]" />
          {copy[language].badge}
        </div>

        <h1 className="max-w-4xl font-serif text-4xl leading-[1.12] text-tinte sm:text-5xl sm:leading-tight lg:text-7xl">
          {copy[language].title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-tinte sm:mt-8 sm:text-lg">
          {copy[language].sub}
        </p>

        <div className="mt-10 sm:mt-12">
          <a
            href="#why"
            className="group inline-flex items-center gap-2 rounded-full border border-tinte bg-transparent px-6 py-2.5 text-sm font-normal tracking-wide text-tinte transition-colors duration-500 ease-out hover:bg-tinte hover:text-white sm:gap-2.5 sm:px-7 sm:py-3 sm:text-base"
          >
            {copy[language].cta}
            <ArrowDown
              className="h-3.5 w-3.5 opacity-70 transition duration-500 ease-out group-hover:translate-y-px group-hover:opacity-90 sm:h-4 sm:w-4"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
