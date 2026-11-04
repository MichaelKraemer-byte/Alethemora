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
  "inline-flex min-h-11 items-center justify-center rounded-full bg-rose px-5 py-2.5 text-center text-sm font-medium text-tinte transition hover:bg-rose-hover disabled:cursor-not-allowed disabled:border disabled:border-sand disabled:bg-transparent disabled:text-tinte-weich";

export const textLinkClass =
  "font-normal text-gold underline decoration-gold underline-offset-4";

const downloadClass =
  "group flex items-center justify-between gap-4 rounded-2xl border border-sand bg-white px-5 py-4 text-tinte transition hover:border-tinte";

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
  const edition = books[language];
  const label = language === "de" ? "Deutsch" : "English";
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <a href={edition.pdf} download={edition.pdfName} className={downloadClass}>
        <span>
          <span className="type-card-title">{label}</span>
          <span className="type-eyebrow mt-1 block">PDF</span>
        </span>
      </a>
      <a href={edition.epub} download={edition.epubName} className={downloadClass}>
        <span>
          <span className="type-card-title">{label}</span>
          <span className="type-eyebrow mt-1 block">EPUB</span>
        </span>
      </a>
    </div>
  );
}

/** Fixed bilingual labels. Do not translate them away. */
const editionLabels = {
  de: "Deutsche Ausgabe",
  en: "English edition"
} as const;

export function BothEditions({ language }: { language: Language }) {
  const order = language === "de" ? (["de", "en"] as const) : (["en", "de"] as const);
  return (
    <div className="type-lead mt-8 space-y-3">
      {order.map((edition) => (
        <p key={edition}>
          {editionLabels[edition]}
          {": "}
          <a href={books[edition].pdf} download={books[edition].pdfName} className={textLinkClass}>
            PDF
          </a>
          {" · "}
          <a href={books[edition].epub} download={books[edition].epubName} className={textLinkClass}>
            EPUB
          </a>
        </p>
      ))}
    </div>
  );
}

export function SignupBlock({ language, embedded = false }: { language: Language; embedded?: boolean }) {
  const t = funnelCopy[language].form;
  const action = kitFormAction();

  if (!action) {
    return (
      <section id="anmelden" className="mt-10">
        <LanguageBooks language={language} />
      </section>
    );
  }

  return (
    <section id="anmelden" className={embedded ? "mt-8" : "crystal-card mt-10 p-5 sm:p-6"}>
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
          {t.button}
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
