"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { naturalCausalityText, practiceTiers, type PracticeTierKey } from "@/lib/path-of-practice";
import { naturalCausalityTextEn, practiceTiersEn } from "@/lib/path-of-practice-en";
import { PathBalanceSheet } from "@/components/path-balance-sheet";
import { useLanguagePreference } from "@/lib/use-language-preference";

export function PathTierPage({ tierKey }: { tierKey: PracticeTierKey }) {
  const { language, setLanguage } = useLanguagePreference();

  const tiers = language === "en" ? practiceTiersEn : practiceTiers;
  const tier = useMemo(() => tiers.find((item) => item.key === tierKey) ?? tiers[0], [tiers, tierKey]);
  const backLabel = language === "en" ? "Back to Pyramid" : "Zurück zur Pyramide";
  const causalityText = language === "en" ? naturalCausalityTextEn : naturalCausalityText;

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-16">
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <section className="section-shell">
        <div className="mb-6 flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/#path-of-practice" className="inline-flex items-center gap-2 hover:text-zinc-200">
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>

        <header className="rounded-3xl border border-white/10 bg-charcoal/70 p-7">
          <p className="text-xs tracking-[0.14em] text-zinc-400">{tier.subtitle.toUpperCase()}</p>
          <h1 className="mt-2 font-serif text-4xl text-zinc-100">{tier.title}</h1>
          <p className="mt-4 max-w-4xl text-zinc-300">{tier.concept}</p>
        </header>

        <section className="mt-7 space-y-5">
          {tier.sections.map((entry) => (
            <article key={entry.title} className="rounded-2xl border border-white/10 bg-charcoal/70 p-6">
              <h2 className="font-serif text-2xl text-zinc-100">{entry.title}</h2>
              <ul className="mt-4 space-y-2 text-zinc-200">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-quantum-cyan" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <PathBalanceSheet
          language={language}
          resonance={tier.resonance}
          dissonance={tier.dissonance}
          causalityText={causalityText}
        />
      </section>
    </main>
  );
}
