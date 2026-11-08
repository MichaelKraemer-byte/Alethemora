"use client";

import { DocumentMeta } from "@/components/funnel/document-meta";
import { PathOfPracticeSection } from "@/components/path-of-practice-section";
import { RhythmSection } from "@/components/rhythm-section";
import { SiteHeader } from "@/components/site-header";
import { praxisPageMeta } from "@/lib/subpage-meta";
import { useLanguagePreference } from "@/lib/use-language-preference";

export function PraxisPage() {
  const { language, setLanguage } = useLanguagePreference();
  const meta = praxisPageMeta[language];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-16">
      <DocumentMeta title={meta.title} description={meta.description} />
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main>
        <PathOfPracticeSection language={language} />
        <RhythmSection language={language} />
      </main>
    </div>
  );
}
