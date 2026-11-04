"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlethemoraRing } from "@/components/alethemora-ring";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy: Record<Language, { badge: string; title: string; text: string; primary: string; secondary: string }> = {
  en: {
    badge: "A philosophy of life for a higher civilization",
    title: "Remember who you are.",
    text: "You are an immortal soul. You chose this life — its people, its tests, its turning points — but not a finished script. What becomes of it, you decide with every step, out of free will. And you have come to learn here what is easy in the spirit world: to create love — even out of the apparent nothing.",
    primary: "Get the book for free",
    secondary: "The core ideas"
  },
  de: {
    badge: "Eine Lebensphilosophie für eine höhere Zivilisation",
    title: "Erinnere dich, wer du bist.",
    text: "Du bist eine unsterbliche Seele. Du hast dieses Leben gewählt – seine Menschen, seine Prüfungen, seine Wendepunkte –, aber kein fertiges Drehbuch. Was daraus wird, entscheidest du mit jedem Schritt aus freiem Willen. Und du bist gekommen, um hier zu lernen, was in der Geistwelt leicht ist: Liebe zu erschaffen – auch aus dem scheinbaren Nichts.",
    primary: "Buch kostenlos erhalten",
    secondary: "Die Kerngedanken"
  }
};

export function HeroSection({ language }: { language: Language }) {
  const t = copy[language];

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

      <div className="section-shell relative z-10 flex min-h-[78vh] flex-col items-center justify-center px-4 pb-16 pt-8 text-center sm:min-h-[82vh] sm:pb-20 sm:pt-12">
        <div className="type-eyebrow mb-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-white/80 px-4 py-2.5 text-center leading-relaxed tracking-[0.12em] sm:mb-10">
          <AlethemoraRing variant="badge" className="h-4 w-4 shrink-0 sm:h-[1.15rem] sm:w-[1.15rem]" />
          {t.badge}
        </div>

        <h1 className="type-hero">{t.title}</h1>
        <p className="type-lead mx-auto mt-6 max-w-3xl">{t.text}</p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row">
          <div className="rounded-full bg-white p-1.5">
            <Link
              href="/start"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-rose px-7 text-sm font-bold tracking-wide text-white transition hover:bg-rose-hover sm:text-base"
            >
              {t.primary}
            </Link>
          </div>
          <Link
            href="#why"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-sand bg-white/80 px-7 text-sm font-medium tracking-wide text-tinte transition hover:bg-white sm:text-base"
          >
            {t.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
