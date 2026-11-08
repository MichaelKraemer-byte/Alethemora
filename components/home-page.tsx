"use client";

import { AuthorSection } from "@/components/author-section";
import { BookSection } from "@/components/book-section";
import { DocumentMeta } from "@/components/funnel/document-meta";
import { HeroSection } from "@/components/hero-section";
import { LoveSection } from "@/components/love-section";
import { MentoringSection } from "@/components/mentoring-section";
import { PracticeTeaser } from "@/components/practice-teaser";
import { PrinciplesTeaser } from "@/components/principles-teaser";
import { ScienceSection } from "@/components/science-section";
import { SiteHeader } from "@/components/site-header";
import { WhySection } from "@/components/why-section";
import type { Language } from "@/lib/i18n";
import { useLanguagePreference } from "@/lib/use-language-preference";

// TODO: EN prüfen
const meta: Record<Language, { title: string; description: string }> = {
  de: {
    title: "Alethemora – Erinnere dich, wer du bist",
    description:
      "Eine Lebensphilosophie: Du bist eine Seele, die dieses Leben gewählt hat – mit freiem Willen und um Liebe zu erschaffen. Das Buch von Michael Krämer, kostenlos."
  },
  en: {
    title: "Alethemora – Remember who you are",
    description:
      "A philosophy of life: you are a soul who chose this life — with free will, and in order to create love. The book by Michael Krämer, free."
  }
};

export function HomePage() {
  const { language, setLanguage } = useLanguagePreference();

  return (
    <>
      <DocumentMeta title={meta[language].title} description={meta[language].description} />
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main className="relative min-h-screen overflow-x-clip pt-16">
        <HeroSection language={language} />
        <WhySection language={language} />
        <LoveSection language={language} />
        <BookSection language={language} />
        <PrinciplesTeaser language={language} />
        <PracticeTeaser language={language} />
        <ScienceSection language={language} />
        <AuthorSection language={language} />
        <MentoringSection language={language} />
      </main>
    </>
  );
}
