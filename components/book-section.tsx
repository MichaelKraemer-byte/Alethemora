"use client";

import Link from "next/link";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    title: "Das Buch",
    subtitle: "Alethemora – Eine Lebensphilosophie für eine höhere Zivilisation",
    text: "Woher die Seele kommt und wohin sie zurückkehrt, warum sie vergisst und wie sie zwischen Tier und Seele, Ego-Liebe und Seelen-Liebe reift. Dazu 49 Prinzipien, 18 Praktiken für den Alltag und eine Vision für eine höhere Zivilisation. Von Michael Krämer.",
    button: "Buch kostenlos erhalten",
    alt: "Buchcover Alethemora, deutsch"
  },
  en: {
    title: "The book",
    subtitle: "Alethemora – A Philosophy of Life for a Higher Civilization",
    text: "Where the soul comes from and where it returns, why it forgets, and how it matures between animal and soul, ego-love and soul-love. With that, 49 principles, 18 practices for everyday life, and a vision for a higher civilization. By Michael Krämer.",
    button: "Get the book for free",
    alt: "Alethemora book cover, English"
  }
} as const;

export function BookSection({ language }: { language: Language }) {
  const t = copy[language];
  const cover = language === "de" ? "/images/cover-de.jpg" : "/images/cover-en.jpg";

  return (
    <section id="buch" className="bg-white">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={cover}
            alt={t.alt}
            className="mx-auto w-full max-w-sm rounded-2xl border border-sand shadow-[0_10px_28px_rgba(42,37,34,0.08)]"
          />
          <div className="crystal-card p-6 sm:p-8">
            <h2 className="type-h2">{t.title}</h2>
            <p className="type-h3-sm mt-3">{t.subtitle}</p>
            <p className="type-body mt-5">{t.text}</p>
            <Link
              href="/start"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-rose px-7 text-sm font-bold tracking-wide text-white transition hover:bg-rose-hover sm:text-base"
            >
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
