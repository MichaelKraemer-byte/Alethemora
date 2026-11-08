"use client";

import Link from "next/link";
import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    title: "Praxis",
    text: "Es ist eine Pyramide: Der Körper ist das Fundament, der Geist kommt danach, aus dem Körper, und die Seele ist die Spitze.",
    textMark: "Es ist eine Pyramide",
    button: "Zur Praxis",
    rhythm: "Tagesrhythmus"
  },
  en: {
    title: "Practice",
    // TODO: EN prüfen
    text: "It is a pyramid: the body is the fundament, the mind comes after, out of the body, and the soul is the top.",
    // TODO: EN prüfen
    textMark: "It is a pyramid",
    // TODO: EN prüfen
    button: "To the practice",
    // TODO: EN prüfen
    rhythm: "Daily rhythm"
  }
} as const;

const buttonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-rose px-7 text-sm font-bold tracking-wide text-white transition hover:bg-rose-hover hover:font-bold hover:text-white sm:text-base";

const rhythmButtonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-sand bg-white px-7 text-sm font-bold tracking-wide text-tinte transition hover:bg-beige hover:text-tinte sm:text-base";

export function PracticeTeaser({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section className="bg-white">
      <div className="section-shell">
        <h2 className="type-h2">{t.title}</h2>
        <p className="type-lead mt-6 max-w-[40rem]">{emphasize(t.text, t.textMark)}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/praxis" className={buttonClass}>
            {t.button}
          </Link>
          <Link href="/praxis#rhythmus" className={rhythmButtonClass}>
            {t.rhythm}
          </Link>
        </div>
      </div>
    </section>
  );
}
