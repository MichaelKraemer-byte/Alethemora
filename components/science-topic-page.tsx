"use client";

import Link from "next/link";
import { DocumentMeta } from "@/components/funnel/document-meta";
import { SiteHeader } from "@/components/site-header";
import type { Language } from "@/lib/i18n";
import { scienceTopics, type ScienceTopicKey } from "@/lib/science-hub";
import { useLanguagePreference } from "@/lib/use-language-preference";

const back: Record<Language, string> = {
  de: "Zurück zur Wissenschaft",
  en: "Back to science"
};

export function ScienceTopicPage({ topic }: { topic: ScienceTopicKey }) {
  const { language, setLanguage } = useLanguagePreference();
  const content = scienceTopics[topic][language];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-16">
      <DocumentMeta title={content.title} description={content.tagline} />
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main className="section-shell max-w-3xl">
        <p className="type-eyebrow">{content.tagline}</p>
        <h1 className="type-h1 mt-4">{content.title}</h1>
        <p className="type-lead mt-6">{content.intro}</p>
        {content.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="type-h2-sm">{section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="type-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
        {content.closing ? <p className="type-body mt-10">{content.closing}</p> : null}
        <p className="mt-12">
          <Link href="/#wissenschaft" className="text-base font-normal text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte">
            {back[language]}
          </Link>
        </p>
      </main>
    </div>
  );
}
