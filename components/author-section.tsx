"use client";

import Link from "next/link";
import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    title: "Über den Autor",
    lead: "Ich bin Michael Krämer",
    text: "Ich bin Michael Krämer – Erzieher und Sozialpädagoge, Tätowierer und Frontend-Entwickler. Jahre ununterbrochenen Arbeitens und Lernens auf drei Kontinenten führten mich in ein Burnout. Ich kündigte, arbeitete als Küchenhilfe und Gartenhelfer und sparte für eine Weltreise. In dieser Zeit las ich mich abends durch Berichte von Nahtoderfahrungen und durch die Reinkarnationsforschung – und aus vielen losen Fäden wurde langsam ein Bild: Alethemora. Das Auge auf dem Buch war einst mein Zeichen als Tätowierer, ein Zeichen für Achtsamkeit. Ich weiß aus eigener Erfahrung, dass dieser Weg nicht im perfekten Leben beginnt, sondern genau dort, wo es nicht mehr weitergeht.",
    link: "Mentoring"
  },
  en: {
    title: "About the author",
    lead: "I am Michael Krämer",
    // TODO: EN prüfen
    text: "I am Michael Krämer — educator and social pedagogue, tattoo artist and frontend developer. Years of uninterrupted working and learning on three continents led me into burnout. I quit, worked as a kitchen helper and a garden helper, and saved for a journey around the world. In that time I read, in the evenings, through reports of near-death experiences and through reincarnation research — and out of many loose threads a picture slowly formed: Alethemora. The eye on the book was once my sign as a tattoo artist, a sign for mindfulness. I know from my own experience that this path does not begin in the perfect life, but exactly where it no longer goes on.",
    link: "Mentoring"
  }
} as const;

export function AuthorSection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="autor" className="bg-white">
      <div className="section-shell">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14">
          <img
            src="/images/michael.jpg"
            alt="Michael Krämer"
            width={641}
            height={1024}
            className="w-full max-w-[20rem] shrink-0 -scale-x-100 rounded-2xl border border-sand shadow-[0_6px_18px_rgba(42,37,34,0.05)] md:w-64 md:max-w-none"
          />
          <div className="min-w-0 w-full">
            <h2 className="type-h2">{t.title}</h2>
            <p className="type-lead mt-6 max-w-3xl">{emphasize(t.text, t.lead)}</p>
            <p className="mt-6">
              <Link href="/mentoring" className="text-base font-normal text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte">
                {t.link}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
