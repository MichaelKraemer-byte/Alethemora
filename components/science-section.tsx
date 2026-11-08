"use client";

import Link from "next/link";
import type { Language } from "@/lib/i18n";
import { scienceHomeOrder, scienceTopicHref, scienceTopics } from "@/lib/science-hub";

// TODO: EN prüfen
const heading: Record<Language, string> = {
  de: "Wissenschaft und Zivilisation",
  en: "Science and civilization"
};

const eyebrow: Record<Language, string> = {
  de: "Wissenswertes",
  // TODO: EN prüfen
  en: "Worth knowing"
};

const linkClass =
  "inline-block py-4 text-base font-normal text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte sm:text-lg";

export function ScienceSection({ language }: { language: Language }) {
  const items = scienceHomeOrder.map((key) => ({
    href: scienceTopicHref[key],
    title: scienceTopics[key][language].listTitle ?? scienceTopics[key][language].title
  }));

  return (
    <section id="wissenschaft" className="bg-beige">
      <div className="section-shell">
        <h2 className="type-h2">{heading[language]}</h2>
        <p className="mt-2 text-sm font-normal text-tinte-weich">{eyebrow[language]}</p>
        <ul className="mt-10 max-w-3xl border-t border-sand">
          {items.map((item) => (
            <li key={item.href} className="border-b border-sand">
              <Link href={item.href} className={linkClass}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
