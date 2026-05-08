"use client";

import { useRouter } from "next/navigation";
import { EvolutionaryPyramid } from "@/components/evolutionary-pyramid";
import type { Language } from "@/lib/i18n";
import { practiceTiers, type PracticeTierKey } from "@/lib/path-of-practice";
import { practiceTiersEn } from "@/lib/path-of-practice-en";

const copy = {
  en: {
    badge: "PATH OF PRACTICE",
    title: "Hierarchy of human experience",
    intro:
      "Body, mind, and soul form an integrated developmental stack. Explore the diagram and open a deep dive for each tier."
  },
  de: {
    badge: "PFAD DER PRAXIS",
    title: "Hierarchie menschlicher Erfahrung",
    intro:
      "Körper, Geist und Seele bilden einen integrierten Entwicklungsstapel. Erkunde das Diagramm und öffne den Deep Dive je Ebene."
  }
} as const;

export function PathOfPracticeSection({ language }: { language: Language }) {
  const t = copy[language];
  const router = useRouter();
  const tiers = language === "en" ? practiceTiersEn : practiceTiers;

  function handleSelect(key: PracticeTierKey) {
    router.push(`/path/${key}`);
  }

  return (
    <section id="path-of-practice" className="section-shell">
      <div className="mb-8">
        <span className="rounded-full border border-soul-gold/40 bg-soul-gold/10 px-3 py-1 text-xs tracking-[0.16em] text-soul-gold">
          {t.badge}
        </span>
        <h2 className="mt-4 font-serif text-3xl text-zinc-100 sm:text-4xl">{t.title}</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">{t.intro}</p>
      </div>

      <EvolutionaryPyramid tiers={tiers} onSelect={handleSelect} />
    </section>
  );
}
