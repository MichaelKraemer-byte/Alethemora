"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { DocumentMeta } from "@/components/funnel/document-meta";
import type { Language } from "@/lib/i18n";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { useLanguagePreference } from "@/lib/use-language-preference";

export type FunnelPageId = keyof typeof funnelCopy.en.meta;

export const funnelH1 = "type-h1";
export const funnelH2 = "type-h2-sm mt-14";
export const funnelLead = "type-lead mt-5";
export const funnelList = "mt-4 list-disc space-y-2 pl-5 text-base font-normal leading-relaxed text-tinte";

export function FunnelLayout({
  page,
  focus = false,
  canvas = "weiss",
  children
}: {
  page: FunnelPageId;
  focus?: boolean;
  canvas?: "weiss" | "beige";
  children: (language: Language) => ReactNode;
}) {
  const { language, setLanguage } = useLanguagePreference();
  const copy = funnelCopy[language];
  const meta = copy.meta[page];
  const description = page === "agb" && phase !== "live" ? copy.agb.unpublished : meta.description;

  return (
    <div className={`min-h-screen overflow-x-hidden pt-16 ${canvas === "beige" ? "bg-beige" : "bg-white"}`}>
      <DocumentMeta title={meta.title} description={description} />
      <SiteHeader variant={focus ? "focus" : "full"} language={language} onLanguageChange={setLanguage} />
      <main className="section-shell max-w-3xl">{children(language)}</main>
    </div>
  );
}
