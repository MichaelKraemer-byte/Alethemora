"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { scienceTopicOrder, scienceTopics, type ScienceTopicKey } from "@/lib/science-hub";
import { useLanguagePreference } from "@/lib/use-language-preference";

export function ScienceTopicPage({ topic }: { topic: ScienceTopicKey }) {
  const { language, setLanguage } = useLanguagePreference();

  const content = useMemo(() => scienceTopics[topic][language], [topic, language]);
  const backLabel = language === "en" ? "Back to Science Hub" : "Zurück zum Science Hub";
  const relatedLabel = language === "en" ? "Related Topics" : "Verwandte Themen";

  const topicIndex = scienceTopicOrder.indexOf(topic);
  const prevTopic = topicIndex > 0 ? scienceTopicOrder[topicIndex - 1] : null;
  const nextTopic = topicIndex < scienceTopicOrder.length - 1 ? scienceTopicOrder[topicIndex + 1] : null;

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-16">
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <section className="section-shell">
        <div className="mb-6 flex items-center gap-2 text-sm text-tinte-weich">
          <Link href="/#wissenschaft" className="inline-flex items-center gap-2 text-gold underline decoration-gold underline-offset-4">
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>

        <header className="rounded-3xl border border-sand bg-white p-7">
          <p className="text-xs tracking-[0.14em] text-gold">{content.tagline.toUpperCase()}</p>
          <h1 className="mt-2 font-serif text-4xl text-tinte">{content.title}</h1>
          <p className="mt-4 max-w-4xl text-tinte">{content.intro}</p>
        </header>

        <section className="mt-7 space-y-5">
          {content.sections.map((entry) => (
            <article key={entry.heading} className="rounded-2xl border border-sand bg-white p-6">
              <h2 className="font-serif text-2xl text-tinte">{entry.heading}</h2>
              <div className="mt-4 space-y-3 text-tinte">
                {entry.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {entry.bullets ? (
                <ul className="mt-4 space-y-2 text-tinte">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-sand bg-white p-6">
          <h3 className="font-serif text-2xl text-tinte">{relatedLabel}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {prevTopic ? (
              <Link
                href={`/science/${prevTopic}`}
                className="rounded-xl border border-sand bg-beige p-4 transition hover:border-tinte/40"
              >
                <p className="text-xs tracking-[0.12em] text-tinte-weich">
                  {language === "en" ? "PREVIOUS" : "VORHERIGES"}
                </p>
                <p className="mt-2 font-serif text-xl text-tinte">{scienceTopics[prevTopic][language].title}</p>
              </Link>
            ) : (
              <div className="rounded-xl border border-sand/60 bg-beige p-4 opacity-40" />
            )}

            {nextTopic ? (
              <Link
                href={`/science/${nextTopic}`}
                className="rounded-xl border border-sand bg-beige p-4 transition hover:border-tinte/40"
              >
                <p className="text-xs tracking-[0.12em] text-tinte-weich">{language === "en" ? "NEXT" : "NÄCHSTES"}</p>
                <p className="mt-2 font-serif text-xl text-tinte">{scienceTopics[nextTopic][language].title}</p>
              </Link>
            ) : (
              <div className="rounded-xl border border-sand/60 bg-beige p-4 opacity-40" />
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
