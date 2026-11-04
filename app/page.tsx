"use client";

import { HeroSection } from "@/components/hero-section";
import { BookTeaserSection, WhatSection } from "@/components/home-teaser";
import { MentoringSection } from "@/components/mentoring-section";
import { SiteHeader } from "@/components/site-header";
import { useLanguagePreference } from "@/lib/use-language-preference";

export default function HomePage() {
  const { language, setLanguage } = useLanguagePreference();

  return (
    <>
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main className="relative min-h-screen overflow-x-clip pt-16">
        <HeroSection language={language} />
        <WhatSection language={language} />
        <BookTeaserSection language={language} />
        <MentoringSection language={language} />
      </main>
    </>
  );
}
