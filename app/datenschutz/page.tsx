"use client";

import { LegalPageShell } from "@/components/legal-page-shell";
import { privacyCopy } from "@/lib/legal-copy";
import { useLanguagePreference } from "@/lib/use-language-preference";

export default function DatenschutzPage() {
  const { language } = useLanguagePreference();
  const c = privacyCopy[language];
  return <LegalPageShell title={c.title} intro={c.intro} sections={[...c.sections]} />;
}
