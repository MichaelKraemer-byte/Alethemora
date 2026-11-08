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

function renderLegalBody(body: string) {
  const lines = formatLegalBody(body);
  const compact =
    lines.length > 1 && lines.every((line) => line.length < 60 && !/[.!?…]$/.test(line.trim()));
  if (compact) {
    return <p className="whitespace-pre-line">{lines.join("\n")}</p>;
  }
  return lines.map((line) => <p key={line}>{line}</p>);
}

export function LegalPageShell({ title, intro, notice, sections }: LegalPageShellProps) {
  const { language, setLanguage } = useLanguagePreference();
  const back = language === "en" ? "Back to home" : "Zurück zur Startseite";

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-8 pt-16">
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main className="section-shell">
        <div className="reading-column">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-normal text-gold underline decoration-gold underline-offset-4"
        >
          <ArrowLeft className="h-4 w-4" />
          {back}
        </Link>

        <article className="rounded-2xl border border-sand bg-white p-6 sm:p-8">
          <h1 className="type-doc-title">{title}</h1>
          {notice}
          {intro ? <p className="type-muted mt-4 text-base">{intro}</p> : null}

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.heading ?? section.body}>
                {section.heading ? (
                  <h2 className="type-doc-heading">{section.heading}</h2>
                ) : null}
                <div className="mt-3 text-base font-normal text-tinte">
                  {renderLegalBody(section.body)}
                </div>
              </section>
            ))}
          </div>
        </article>
        </div>
      </main>
    </div>
  );
}
