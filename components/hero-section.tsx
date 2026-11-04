"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlethemoraRing } from "@/components/alethemora-ring";
import { funnelCopy } from "@/lib/funnel-copy";
import type { Language } from "@/lib/i18n";
import { phase } from "@/lib/site-config";

// TODO: EN prüfen
const copy: Record<Language, { badge: string; title: string }> = {
  en: {
    badge: "A PHILOSOPHY OF LIFE FOR A HIGHER CIVILIZATION",
    title:
      "Alethemora means this: the truth of one's own fate — the remembrance of the life the soul has chosen."
  },
  de: {
    badge: "EINE LEBENSPHILOSOPHIE FÜR EINE HÖHERE ZIVILISATION",
    title:
      "Alethemora heißt damit: die Wahrheit des eigenen Schicksals — die Erinnerung an das Leben, das die Seele gewählt hat."
  }
};

export function HeroSection({ language }: { language: Language }) {
  const labels = funnelCopy[language].nav;
  const cta =
    phase === "live"
      ? { href: "/erstgespraech", label: labels.ctaLive }
      : { href: "/start", label: labels.ctaAufbau };

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
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-white/80 px-4 py-2.5 text-xs tracking-[0.2em] text-gold sm:mb-10 sm:tracking-[0.22em]">
          <AlethemoraRing variant="badge" className="h-4 w-4 shrink-0 sm:h-[1.15rem] sm:w-[1.15rem]" />
          {copy[language].badge}
        </div>

        <h1 className="max-w-4xl font-serif text-3xl leading-[1.2] text-tinte sm:text-5xl sm:leading-tight lg:text-6xl">
          {copy[language].title}
        </h1>

        <div className="mt-10 rounded-full bg-white p-1.5 sm:mt-12">
          <Link
            href={cta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-rose px-7 text-sm font-medium tracking-wide text-tinte transition hover:bg-rose-hover sm:text-base"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
