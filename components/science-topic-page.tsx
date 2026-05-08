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
        <div className="mb-6 flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/#wissenschaft" className="inline-flex items-center gap-2 hover:text-zinc-200">
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>

        <header className="rounded-3xl border border-white/10 bg-charcoal/70 p-7">
          <p className="text-xs tracking-[0.14em] text-quantum-cyan">{content.tagline.toUpperCase()}</p>
          <h1 className="mt-2 font-serif text-4xl text-zinc-100">{content.title}</h1>
          <p className="mt-4 max-w-4xl text-zinc-300">{content.intro}</p>
        </header>

        <section className="mt-7 space-y-5">
          {content.sections.map((entry) => (
            <article key={entry.heading} className="rounded-2xl border border-white/10 bg-charcoal/70 p-6">
              <h2 className="font-serif text-2xl text-zinc-100">{entry.heading}</h2>
              <div className="mt-4 space-y-3 text-zinc-200">
                {entry.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {entry.bullets ? (
                <ul className="mt-4 space-y-2 text-zinc-100">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-soul-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-charcoal/70 p-6">
          <h3 className="font-serif text-2xl text-zinc-100">{relatedLabel}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {prevTopic ? (
              <Link
                href={`/science/${prevTopic}`}
                className="rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-white/30"
              >
                <p className="text-xs tracking-[0.12em] text-zinc-400">
                  {language === "en" ? "PREVIOUS" : "VORHERIGES"}
                </p>
                <p className="mt-2 font-serif text-xl text-zinc-100">{scienceTopics[prevTopic][language].title}</p>
              </Link>
            ) : (
              <div className="rounded-xl border border-white/5 bg-black/10 p-4 opacity-40" />
            )}

            {nextTopic ? (
              <Link
                href={`/science/${nextTopic}`}
                className="rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-white/30"
              >
                <p className="text-xs tracking-[0.12em] text-zinc-400">{language === "en" ? "NEXT" : "NÄCHSTES"}</p>
                <p className="mt-2 font-serif text-xl text-zinc-100">{scienceTopics[nextTopic][language].title}</p>
              </Link>
            ) : (
              <div className="rounded-xl border border-white/5 bg-black/10 p-4 opacity-40" />
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
