"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { useLanguagePreference } from "@/lib/use-language-preference";
import { formatLegalBody } from "@/lib/legal-copy";

type LegalPageShellProps = {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function LegalPageShell({ title, intro, sections }: LegalPageShellProps) {
  const { language, setLanguage } = useLanguagePreference();
  const back = language === "en" ? "Back to home" : "Zurück zur Startseite";

  return (
    <div className="min-h-screen overflow-x-hidden bg-onyx pb-8 pt-16">
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main className="section-shell max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-zinc-200"
        >
          <ArrowLeft className="h-4 w-4" />
          {back}
        </Link>

        <article className="rounded-2xl border border-white/10 bg-charcoal/70 p-6 sm:p-8">
          <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-amber-200/90 sm:text-base">{intro}</p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-xl text-zinc-100 sm:text-2xl">{section.heading}</h2>
                <div className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {formatLegalBody(section.body).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
