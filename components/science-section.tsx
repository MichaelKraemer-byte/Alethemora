"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Atom, Bitcoin, BrainCircuit, Orbit } from "lucide-react";
import type { Language } from "@/lib/i18n";

const foundationCards: Record<
  Language,
  { title: string; icon: typeof Orbit; points: string[]; href: string; cta: string }[]
> = {
  en: [
    {
      title: "Reincarnation & afterlife research",
      icon: Orbit,
      href: "/science/reincarnation",
      cta: "Open deep dive",
      points: [
        "Michael Newton: consistent patterns from thousands of regressions (soul groups, life planning, life review).",
        "Ian Stevenson / Jim Tucker: documented indicators of previous-life memories.",
        "Near-death research as convergent evidence for consciousness beyond pure brain activity."
      ]
    },
    {
      title: "Quantum physics & resonance",
      icon: Atom,
      href: "/science/quantum",
      cta: "Open deep dive",
      points: [
        "Non-locality and entanglement indicate deeper interconnected reality.",
        "Resonance as working model: inner states shape perception, decision, and impact.",
        "Consciousness is treated as an active factor, not reduced to a by-product."
      ]
    }
  ],
  de: [
    {
      title: "Reinkarnation & Jenseitsforschung",
      icon: Orbit,
      href: "/science/reincarnation",
      cta: "Deep Dive öffnen",
      points: [
        "Michael Newton: konsistente Muster aus tausenden Regressionen (Seelengruppen, Lebensplanung, Life Review).",
        "Ian Stevenson / Jim Tucker: dokumentierte Hinweise auf Erinnerungen früherer Leben.",
        "Nahtoderfahrungsforschung als konvergente Evidenz für Bewusstsein jenseits reiner Gehirnaktivität."
      ]
    },
    {
      title: "Quantenphysik & Resonanz",
      icon: Atom,
      href: "/science/quantum",
      cta: "Deep Dive öffnen",
      points: [
        "Nichtlokalität und Verschränkung deuten auf eine tiefere Verbundenheit von Wirklichkeit.",
        "Resonanz als Arbeitsmodell: innere Zustände beeinflussen Wahrnehmung, Entscheidung und Wirkung.",
        "Bewusstsein wird nicht als Nebenprodukt reduziert, sondern als aktiver Faktor ernst genommen."
      ]
    }
  ]
};

const copy = {
  en: {
    badge: "BRIDGE TO MATTER",
    intro:
      "Alethemora connects inner development with empirical research and an order of voluntary cooperation.",
    bitcoinTitle: "Decentralized Sovereignty & Bitcoin",
    austrian: "AUSTRIAN SCHOOL",
    austrianText:
      "Capital is stored life-time and life-energy. Honest economics respects scarcity, responsibility, and voluntary exchange instead of central manipulation.",
    btcTool: "BITCOIN AS A FREEDOM TOOL",
    btcText:
      "Bitcoin can be understood as frozen life energy: scarce, neutral, incorruptible. Economically, it mirrors free will—an immutable system enabling access to material life without inflationary theft or central control.",
    cta: "Open sovereignty deep dive"
  },
  de: {
    badge: "BRÜCKE ZUR MATERIE",
    intro:
      "Alethemora verbindet innere Entwicklung mit empirischer Forschung und einer Ordnung freier Kooperation.",
    bitcoinTitle: "Dezentrale Souveränität & Bitcoin",
    austrian: "ÖSTERREICHISCHE SCHULE",
    austrianText:
      "Kapital ist gespeicherte Lebenszeit und Lebensenergie. Ehrliche Wirtschaft respektiert Knappheit, Verantwortung und freiwilligen Tausch statt zentraler Manipulation.",
    btcTool: "BITCOIN ALS FREIHEITSWERKZEUG",
    btcText:
      "Bitcoin kann als gefrorene Lebensenergie verstanden werden: knapp, neutral, unbestechlich. Ökonomisch entspricht es dem freien Willen - ein System, das Zugang zur materiellen Welt ohne Enteignung durch Inflation oder zentrale Kontrolle ermöglicht.",
    cta: "Souveränitäts-Deep-Dive öffnen"
  }
} as const;

export function ScienceSection({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <section id="wissenschaft" className="section-shell">
      <div className="mb-10">
        <span className="rounded-full border border-quantum-cyan/40 bg-quantum-cyan/10 px-3 py-1 text-xs tracking-[0.16em] text-quantum-cyan">
          {t.badge}
        </span>
        <h2 className="mt-4 bg-gradient-to-r from-soul-gold via-zinc-100 to-quantum-cyan bg-clip-text font-serif text-3xl text-transparent sm:text-4xl">
          Science & Civilization Hub
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-300">
          {t.intro}
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {foundationCards[language].map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-charcoal/70 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-quantum-cyan/40 bg-quantum-cyan/10 p-2 text-quantum-cyan">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-2xl text-zinc-100">{card.title}</h3>
              </div>
              <ul className="mt-5 space-y-3 text-zinc-300">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-soul-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={card.href}
                className="mt-5 inline-flex rounded-full border border-quantum-cyan/35 bg-quantum-cyan/10 px-4 py-2 text-xs tracking-[0.1em] text-quantum-cyan transition hover:bg-quantum-cyan/20"
              >
                {card.cta}
              </Link>
            </motion.article>
          );
        })}
      </div>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mt-6 rounded-2xl border border-quantum-cyan/25 bg-gradient-to-br from-soul-gold/10 via-charcoal to-quantum-cyan/10 p-7"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-quantum-cyan/45 bg-quantum-cyan/10 p-2">
            <Bitcoin className="h-5 w-5 text-quantum-cyan" />
          </div>
          <h3 className="font-serif text-2xl text-zinc-100">{t.bitcoinTitle}</h3>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="flex items-center gap-2 text-sm tracking-[0.14em] text-soul-gold">
              <BrainCircuit className="h-4 w-4" />
              {t.austrian}
            </p>
            <p className="mt-3 text-zinc-200">
              {t.austrianText}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="flex items-center gap-2 text-sm tracking-[0.14em] text-quantum-cyan">
              <Bitcoin className="h-4 w-4" />
              {t.btcTool}
            </p>
            <p className="mt-3 text-zinc-200">
              {t.btcText}
            </p>
          </div>
        </div>
        <Link
          href="/science/sovereignty"
          className="mt-5 inline-flex rounded-full border border-quantum-cyan/35 bg-quantum-cyan/10 px-4 py-2 text-xs tracking-[0.1em] text-quantum-cyan transition hover:bg-quantum-cyan/20"
        >
          {t.cta}
        </Link>
      </motion.article>
    </section>
  );
}
