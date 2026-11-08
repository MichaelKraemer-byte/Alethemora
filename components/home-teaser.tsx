"use client";

import Link from "next/link";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy: Record<
  Language,
  {
    whatTitle: string;
    nameLead: string;
    nameParts: { word: string; text: string }[];
    whatMap: string;
    bookTitle: string;
    bookClose: string;
    bookLink: string;
    teasers: { title: string; line: string }[];
  }
> = {
  en: {
    whatTitle: "What the name means",
    // TODO: EN prüfen
    nameLead: "The name carries three words.",
    nameParts: [
      {
        word: "Aletheia",
        text: "the unconcealed, the truth: Alethemora is a path of science. The truth of the spirit guides lies before our eyes, in the signs they give us on our way."
      },
      {
        word: "Hem",
        text: "the soul's home, where we come from, and the soul friends who are always with us."
      },
      {
        word: "Amor",
        text: "love: the endless energy of creation, of being, and of the light, our divinity, in which, with which, and through which we unfold for eternity."
      }
    ],
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
    nameLead: "Der Name trägt drei Worte.",
    nameParts: [
      {
        word: "Aletheia",
        text: "das Unverborgene, die Wahrheit: Alethemora ist ein Pfad der Wissenschaft. Die Wahrheit der Geistführer liegt vor unseren Augen, in den Zeichen, die sie uns auf den Weg legen."
      },
      {
        word: "Hem",
        text: "das Seelenheim, woher wir kommen, und die Seelenfreunde, die immer bei uns sind."
      },
      {
        word: "Amor",
        text: "die Liebe: die endlose Energie der Schöpfung, des Daseins und des Lichts, unsere Göttlichkeit, in der, mit der und durch die wir uns in Ewigkeit entfalten."
      }
    ],
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
        <h2 className="type-h2">{t.whatTitle}</h2>
        <div className="mt-6 max-w-3xl space-y-3">
          <p className="type-lead">{t.nameLead}</p>
          {t.nameParts.map((part) => (
            <p key={part.word} className="type-lead">
              <strong className="font-bold text-tinte">{part.word}</strong>
              {`, ${part.text}`}
            </p>
          ))}
          <p className="type-lead">{t.whatMap}</p>
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
        <h2 className="type-h2">{t.bookTitle}</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.teasers.map((item) => (
            <li key={item.title} className="border-t border-sand pt-4">
              <h3 className="type-h3-sm">{item.title}</h3>
              <p className="type-body mt-2">{item.line}</p>
            </li>
          ))}
        </ul>
        <p className="type-lead mt-12 max-w-3xl">{t.bookClose}</p>
        <p className="mt-3">
          <Link href="/start" className="text-base font-normal text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte sm:text-lg">
            {t.bookLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
