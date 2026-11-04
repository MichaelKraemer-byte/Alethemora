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
  "inline-flex min-h-11 items-center justify-center rounded-full border border-soul-gold/70 bg-soul-gold/15 px-5 py-2.5 text-center text-sm font-medium text-zinc-50 transition hover:bg-soul-gold/25 disabled:cursor-not-allowed disabled:border-white/25 disabled:bg-transparent disabled:text-zinc-200";

export const textLinkClass =
  "text-zinc-50 underline decoration-soul-gold/70 underline-offset-4 transition hover:text-soul-gold";

const downloadClass =
  "group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-zinc-50 transition hover:border-soul-gold/40 hover:bg-soul-gold/10";

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
          <span className="block font-serif text-lg">{label}</span>
          <span className="mt-1 block text-xs tracking-[0.16em] text-soul-gold">PDF</span>
        </span>
      </a>
      <a href={edition.epub} download={edition.epubName} className={downloadClass}>
        <span>
          <span className="block font-serif text-lg">{label}</span>
          <span className="mt-1 block text-xs tracking-[0.16em] text-soul-gold">EPUB</span>
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
    <div className="mt-8 space-y-3 text-base text-zinc-50 sm:text-lg">
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

export function SignupBlock({ language }: { language: Language }) {
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
    <section id="anmelden" className="crystal-card mt-10 p-5 sm:p-6">
      <form method="post" action={action} className="space-y-4">
        <div>
          <label htmlFor="email_address" className="block text-sm font-medium text-zinc-50">
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
            className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-base text-zinc-50"
          />
          <p id="email-hint" className="mt-2 text-sm leading-relaxed text-zinc-300">
            {t.hint}
          </p>
        </div>
        <button type="submit" className={primaryButtonClass}>
          {t.button}
        </button>
        <p className="text-sm leading-relaxed text-zinc-300">
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
