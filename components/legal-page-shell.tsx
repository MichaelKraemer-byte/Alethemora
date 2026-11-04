"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { useLanguagePreference } from "@/lib/use-language-preference";
import { formatLegalBody } from "@/lib/legal-copy";

type LegalPageShellProps = {
  title: string;
  intro?: string;
  notice?: ReactNode;
  sections: readonly { heading?: string; body: string }[];
};

export function LegalPageShell({ title, intro, notice, sections }: LegalPageShellProps) {
  const { language, setLanguage } = useLanguagePreference();
  const back = language === "en" ? "Back to home" : "Zurück zur Startseite";

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-8 pt-16">
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main className="section-shell max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gold underline decoration-gold underline-offset-4"
        >
          <ArrowLeft className="h-4 w-4" />
          {back}
        </Link>

        <article className="rounded-2xl border border-sand bg-white p-6 sm:p-8">
          <h1 className="font-serif text-3xl text-tinte sm:text-4xl">{title}</h1>
          {notice}
          {intro ? <p className="mt-4 text-sm leading-relaxed text-tinte-weich sm:text-base">{intro}</p> : null}

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.heading ?? section.body}>
                {section.heading ? (
                  <h2 className="font-serif text-xl text-tinte sm:text-2xl">{section.heading}</h2>
                ) : null}
                <div className="mt-3 space-y-2 text-sm leading-relaxed text-tinte sm:text-base">
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
