"use client";

import Link from "next/link";
import type { Language } from "@/lib/i18n";
import { funnelCopy } from "@/lib/funnel-copy";

const cards = [
  { key: "gift", href: "/start" },
  { key: "wandlung", href: "/die-wandlung" },
  { key: "talk", href: "/vortrag" }
] as const;

export function MentoringSection({ language }: { language: Language }) {
  const t = funnelCopy[language].home;
  const content = {
    gift: { title: t.giftTitle, text: t.giftText },
    wandlung: { title: t.wandlungTitle, text: t.wandlungText },
    talk: { title: t.talkTitle, text: t.talkText }
  };

  return (
    <section id="mentoring" className="bg-white">
      <div className="section-shell">
      <h2 className="font-serif text-3xl text-tinte sm:text-4xl">{t.title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-tinte sm:text-lg">{t.text}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="crystal-card block p-6 transition hover:border-tinte/30"
          >
            <h3 className="font-serif text-2xl text-tinte">{content[card.key].title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-tinte">{content[card.key].text}</p>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
