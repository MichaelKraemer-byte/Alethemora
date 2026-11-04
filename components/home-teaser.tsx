"use client";

import Link from "next/link";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy: Record<
  Language,
  {
    whatTitle: string;
    whatName: string;
    whatMap: string;
    bookTitle: string;
    bookClose: string;
    bookLink: string;
    teasers: { title: string; line: string }[];
  }
> = {
  en: {
    whatTitle: "What the name means",
    whatName:
      "The name Alethemora goes back to two Greek words. Aletheia means truth. Moira is the allotted share, the lot in life, fate.",
    whatMap:
      "This conviction is not a proven fact, and it does not need to be one. It is a map, not a dogma — a hope that is tested in lived practice, not in blind profession.",
    bookTitle: "In the book",
    bookClose: "This book describes the why and the where to.",
    bookLink: "The full text is in the book.",
    teasers: [
      {
        title: "Core conviction",
        line: "None of it happens without meaning or by chance."
      },
      { title: "Love", line: "At the summit stands love." },
      { title: "The soul", line: "Love is what it is." },
      {
        title: "The present",
        line: "I recognize that only the present moment is truly real."
      },
      {
        title: "Body, mind, and soul",
        line: "Neglect one level, and the others suffer."
      },
      { title: "Forty-nine principles", line: "No rules. No dogmas." }
    ]
  },
  de: {
    whatTitle: "Was der Name bedeutet",
    whatName:
      "Der Name Alethemora geht auf zwei griechische Wörter zurück. Aletheia heißt Wahrheit. Moira ist der zugeteilte Anteil, das Lebenslos, das Schicksal.",
    whatMap:
      "Diese Überzeugung ist keine bewiesene Tatsache, und sie soll es auch nicht sein müssen. Sie ist eine Landkarte, kein Dogma — eine Hoffnung, die sich in gelebter Praxis prüft, nicht in blindem Bekenntnis.",
    bookTitle: "Im Buch",
    bookClose: "Dieses Buch beschreibt das Warum und das Wohin.",
    bookLink: "Der volle Text steht im Buch.",
    teasers: [
      {
        title: "Grundüberzeugung",
        line: "Nichts davon geschieht sinnlos oder zufällig."
      },
      { title: "Liebe", line: "An der Spitze steht Liebe." },
      { title: "Die Seele", line: "Liebe ist das, was sie ist." },
      {
        title: "Gegenwart",
        line: "Ich erkenne, dass nur der gegenwärtige Moment wirklich real ist."
      },
      {
        title: "Körper, Geist und Seele",
        line: "Vernachlässigt man eine Ebene, leiden die anderen."
      },
      { title: "Neunundvierzig Prinzipien", line: "Keine Regeln. Keine Dogmen." }
    ]
  }
};

export function WhatSection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="was" className="bg-white">
      <div className="section-shell">
        <h2 className="font-serif text-3xl text-tinte sm:text-4xl">{t.whatTitle}</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-tinte sm:text-lg">
          <p>{t.whatName}</p>
          <p>{t.whatMap}</p>
        </div>
      </div>
    </section>
  );
}

export function BookTeaserSection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="buch" className="bg-beige">
      <div className="section-shell">
        <h2 className="font-serif text-3xl text-tinte sm:text-4xl">{t.bookTitle}</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.teasers.map((item) => (
            <li key={item.title} className="border-t border-sand pt-4">
              <h3 className="font-serif text-xl text-tinte">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tinte sm:text-base">{item.line}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-3xl text-base leading-relaxed text-tinte sm:text-lg">{t.bookClose}</p>
        <p className="mt-3">
          <Link href="/start" className="text-base text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte sm:text-lg">
            {t.bookLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
