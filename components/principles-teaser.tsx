"use client";

import Link from "next/link";
import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    title: "Die Prinzipien — Der Weg zum höheren Wesen",
    text: "Diese Prinzipien sind als persönliches Credo zu lesen — als das, was ein Mensch sich vornimmt zu leben, nicht als wissenschaftlich bewiesene Aussage über die Welt.",
    textMark: "Diese Prinzipien sind als persönliches Credo zu lesen",
    button: "Zu den Prinzipien"
  },
  en: {
    title: "The principles — the way to the higher being",
    text: "These principles are to be read as a personal credo — as what a person resolves to live, not as a scientifically proven statement about the world.",
    textMark: "These principles are to be read as a personal credo",
    // TODO: EN prüfen
    button: "To the principles"
  }
} as const;

const buttonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-rose px-7 text-sm font-bold tracking-wide text-white transition hover:bg-rose-hover hover:font-bold hover:text-white sm:text-base";

export function PrinciplesTeaser({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section className="bg-beige">
      <div className="section-shell">
        <h2 className="type-h2">{t.title}</h2>
        <p className="type-lead mt-6 max-w-3xl">{emphasize(t.text, t.textMark)}</p>
        <div className="mt-8 w-fit rounded-full bg-white p-1.5">
          <Link href="/prinzipien" className={buttonClass}>
            {t.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
