"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { DocumentMeta } from "@/components/funnel/document-meta";
import { SiteHeader } from "@/components/site-header";
import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";
import { scienceTopics, type ScienceInlineLink, type ScienceTopicKey } from "@/lib/science-hub";
import { useLanguagePreference } from "@/lib/use-language-preference";

const inlineLinkClass =
  "font-normal text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte";

function renderParagraph(text: string, lead: string, links?: ScienceInlineLink[]): ReactNode {
  type Hit = { start: number; end: number; kind: "lead" | "link"; link?: ScienceInlineLink };
  const hits: Hit[] = [];

  if (lead) {
    const start = text.indexOf(lead);
    if (start >= 0) hits.push({ start, end: start + lead.length, kind: "lead" });
  }

  for (const link of links ?? []) {
    if (!link.phrase) continue;
    const start = text.indexOf(link.phrase);
    if (start >= 0) hits.push({ start, end: start + link.phrase.length, kind: "link", link });
  }

  if (hits.length === 0) return text;

  hits.sort((a, b) => a.start - b.start);

  const parts: ReactNode[] = [];
  let cursor = 0;

  hits.forEach((hit, index) => {
    if (hit.start < cursor) return;
    if (hit.start > cursor) parts.push(text.slice(cursor, hit.start));
    if (hit.kind === "lead") {
      parts.push(
        <strong key={index} className="font-bold text-tinte">
          {text.slice(hit.start, hit.end)}
        </strong>
      );
    } else if (hit.link?.external) {
      parts.push(
        <a key={index} href={hit.link.href} target="_blank" rel="noopener" className={inlineLinkClass}>
          {hit.link.phrase}
        </a>
      );
    } else if (hit.link) {
      parts.push(
        <Link key={index} href={hit.link.href} className={inlineLinkClass}>
          {hit.link.phrase}
        </Link>
      );
    }
    cursor = hit.end;
  });

  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

const back: Record<Language, string> = {
  de: "Zurück zur Wissenschaft",
  en: "Back to science"
};

export function ScienceTopicPage({ topic }: { topic: ScienceTopicKey }) {
  const { language, setLanguage } = useLanguagePreference();
  const content = scienceTopics[topic][language];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-16">
      <DocumentMeta
        title={content.title}
        description={content.description || content.tagline || content.intro || content.title}
      />
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main className="section-shell">
        <article className="reading-column">
        {content.tagline ? <p className="type-eyebrow">{content.tagline}</p> : null}
        <h1 className={content.tagline ? "type-h1 mt-4" : "type-h1"}>{content.title}</h1>
        {content.intro ? (
          <p className="type-lead mt-6">{emphasize(content.intro, content.introMark ?? "")}</p>
        ) : null}
        {content.cards?.length ? (
          <ul className="mt-10 space-y-4">
            {content.cards.map((card) => (
              <li key={card.title} className="crystal-card p-6">
                <h2 className="type-card-title">{card.title}</h2>
                <p className="type-body mt-3">{emphasize(card.body, card.mark ?? "")}</p>
              </li>
            ))}
          </ul>
        ) : null}
        {content.sections.map((section) => (
          <section key={section.heading || section.paragraphs[0]} className="mt-10">
            {section.heading ? <h2 className="type-h2-sm">{section.heading}</h2> : null}
            <div className={section.heading ? "mt-4" : undefined}>
              {section.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className="type-body">
                  {renderParagraph(paragraph, section.marks?.[index] ?? "", section.links)}
                </p>
              ))}
            </div>
            {section.table ? (
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {section.table.headers.map((header) => (
                        <th key={header} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ))}
        {content.closing ? <p className="type-body mt-10">{content.closing}</p> : null}
        <div className="mt-12">
          <Link href="/#wissenschaft" className="text-base font-normal text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte">
            {back[language]}
          </Link>
        </div>
        </article>
      </main>
    </div>
  );
}
