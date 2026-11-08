"use client";

import { DocumentMeta } from "@/components/funnel/document-meta";
import { PrinciplesSection } from "@/components/principles-section";
import { SiteHeader } from "@/components/site-header";
import { principlesPageMeta } from "@/lib/subpage-meta";
import { useLanguagePreference } from "@/lib/use-language-preference";

export function PrinciplesPage() {
  const { language, setLanguage } = useLanguagePreference();
  const meta = principlesPageMeta[language];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-16">
      <DocumentMeta title={meta.title} description={meta.description} />
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main>
        <PrinciplesSection language={language} />
      </main>
    </div>
  );
}
