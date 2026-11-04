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
    <section id="mentoring" className="bg-beige">
      <div className="section-shell">
      <h2 className="type-h2">{t.title}</h2>
      <p className="type-lead mt-4 max-w-3xl">{t.text}</p>
      {/* TODO: EN prüfen */}
      <p className="type-body mt-4 max-w-3xl">
        {language === "de"
          ? "Mein Mentoring trägt den Namen eines Schrittes aus dem Buch: Die Wandlung – erst fühlen, was ist, dann entscheiden, was du daraus erschaffen willst."
          : "My mentoring carries the name of a step from the book: The Transformation — first feel what is, then decide what you want to create from it."}
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="crystal-card block p-6 transition hover:border-tinte/30"
          >
            <h3 className="type-h3">{content[card.key].title}</h3>
            <p className="type-body mt-3">{content[card.key].text}</p>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
