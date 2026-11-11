"use client";

import Link from "next/link";
import type { Language } from "@/lib/i18n";
import {
  books,
  copyValuesFor,
  externalUrl,
  fill,
  kitFormAction,
  mailtoHref,
  waitlistHref
} from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { calErstgespraech, calKlarheitsgespraech, instagram } from "@/lib/site-config";
import { funnelH1 } from "@/components/funnel/funnel-layout";

export const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-rose px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-rose-hover hover:font-bold hover:text-white disabled:cursor-not-allowed disabled:border disabled:border-sand disabled:bg-transparent disabled:text-tinte-weich";

export const textLinkClass =
  "font-normal text-gold underline decoration-gold underline-offset-4";

const downloadFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinte";

const downloadPrimaryClass = `${primaryButtonClass} h-full w-full ${downloadFocus}`;

const downloadSecondaryClass =
  `inline-flex h-full min-h-11 w-full items-center justify-center rounded-full border border-tinte bg-transparent px-5 py-2.5 text-center text-sm font-medium text-tinte transition hover:bg-tinte hover:text-white ${downloadFocus}`;

type BookEdition = keyof typeof books;
type BookFormat = "pdf" | "epub";

/** Fixed bilingual labels. Do not translate them away. */
const editionLanguage = {
  de: "Deutsch",
  en: "English"
} as const;

const formatLabel: Record<BookFormat, string> = {
  pdf: "PDF",
  epub: "EPUB"
};

function downloadItems(editions: readonly BookEdition[]) {
  return editions.flatMap((edition) =>
    (["pdf", "epub"] as const).map((format) => ({ edition, format }))
  );
}

function DownloadButtons({ items }: { items: { edition: BookEdition; format: BookFormat }[] }) {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item, index) => {
        const file = books[item.edition];
        const href = item.format === "pdf" ? file.pdf : file.epub;
        const name = item.format === "pdf" ? file.pdfName : file.epubName;
        return (
          <a
            key={`${item.edition}-${item.format}`}
            href={href}
            download={name}
            className={index === 0 ? downloadPrimaryClass : downloadSecondaryClass}
          >
            {`${formatLabel[item.format]} · ${editionLanguage[item.edition]}`}
          </a>
        );
      })}
    </div>
  );
}

export function WaitlistButton({ language }: { language: Language }) {
  return (
    <a href={waitlistHref()} className={primaryButtonClass}>
      {funnelCopy[language].common.waitlist}
    </a>
  );
}

export function WaitlistOnly({ language }: { language: Language }) {
  return (
    <>
      <h1 className={funnelH1}>{fill(funnelCopy[language].common.mentoringFrom, copyValuesFor(language))}</h1>
      <div className="mt-8">
        <WaitlistButton language={language} />
      </div>
    </>
  );
}

export function CalButton({ which, label }: { which: "intro" | "clarity"; label: string }) {
  const href = externalUrl(which === "intro" ? calErstgespraech : calKlarheitsgespraech);
  if (!href) {
    return (
      <button type="button" disabled className={primaryButtonClass}>
        {label}
      </button>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>
      {label}
    </a>
  );
}

export function LanguageBooks({ language }: { language: Language }) {
  return <DownloadButtons items={downloadItems([language])} />;
}

export function BothEditions({ language }: { language: Language }) {
  const order = language === "de" ? (["de", "en"] as const) : (["en", "de"] as const);
  return (
    <div className="mt-8">
      <DownloadButtons items={downloadItems(order)} />
    </div>
  );
}

export function SignupBlock({
  language,
  embedded = false,
  list = false,
  anchored = true
}: {
  language: Language;
  embedded?: boolean;
  /** true auf /start#anmelden: Buch und Mentoring-Liste, dasselbe Formular. */
  list?: boolean;
  /** false, wenn die umgebende Überschrift den Anker #anmelden schon trägt. */
  anchored?: boolean;
}) {
  const t = funnelCopy[language].form;
  const action = kitFormAction();
  const anchorId = anchored ? "anmelden" : undefined;

  if (!action) {
    return (
      <section id={anchorId} className="mt-10">
        <LanguageBooks language={language} />
      </section>
    );
  }

  return (
    <section id={anchorId} className={embedded ? "mt-8" : "crystal-card mt-10 p-5 sm:p-6"}>
      <form method="post" action={action} className="space-y-4">
        <div>
          <label htmlFor="email_address" className="type-field-label">
            {t.label}
          </label>
          <input
            id="email_address"
            name="email_address"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            aria-describedby="email-hint"
            className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-base font-normal text-tinte"
          />
          <p id="email-hint" className="type-muted mt-2 text-sm">
            {t.hint}
          </p>
        </div>
        <button type="submit" className={primaryButtonClass}>
          {list ? t.buttonList : t.button}
        </button>
        <p className="type-muted text-sm">
          {t.fineBefore}
          <Link href="/datenschutz" className={textLinkClass}>
            {t.fineLink}
          </Link>
          {t.fineAfter}
        </p>
      </form>
    </section>
  );
}

export function InstagramLink({ language }: { language: Language }) {
  const href = externalUrl(instagram);
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${textLinkClass} mt-8 inline-flex`}>
      {funnelCopy[language].willkommen.instagram}
    </a>
  );
}

export function TalkMailLink({ label }: { label: string }) {
  return (
    <a href={mailtoHref("Anfrage Vortrag")} className={primaryButtonClass}>
      {label}
    </a>
  );
}
