"use client";

import { HeroSection } from "@/components/hero-section";
import { PathOfPracticeSection } from "@/components/path-of-practice-section";
import { PrinciplesSection } from "@/components/principles-section";
import { RhythmSection } from "@/components/rhythm-section";
import { ScienceSection } from "@/components/science-section";
import { SiteHeader } from "@/components/site-header";
import { TribeSection } from "@/components/tribe-section";
import { WhySection } from "@/components/why-section";
import { useLanguagePreference } from "@/lib/use-language-preference";

export default function HomePage() {
  const { language, setLanguage } = useLanguagePreference();

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-16">
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <WhySection language={language} />
      <PrinciplesSection language={language} />
      <PathOfPracticeSection language={language} />
      <RhythmSection language={language} />
      <ScienceSection language={language} />
      <TribeSection language={language} />
    </main>
  );
}
