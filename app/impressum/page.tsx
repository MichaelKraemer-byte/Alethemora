"use client";

import { LegalPageShell } from "@/components/legal-page-shell";
import { impressumCopy } from "@/lib/legal-copy";
import { useLanguagePreference } from "@/lib/use-language-preference";

export default function ImpressumPage() {
  const { language } = useLanguagePreference();
  const c = impressumCopy[language];
  return (
    <LegalPageShell
      title={c.title}
      sections={[
        { heading: c.ddgHeading, body: c.address },
        { body: c.responsible },
        { body: c.arbitration }
      ]}
    />
  );
}
