"use client";

import Link from "next/link";
import { copyValuesFor, fill } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { textLinkClass, WaitlistButton } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelLead } from "@/components/funnel/funnel-layout";

export function MentoringPage() {
  return (
    <FunnelLayout page="mentoring">
      {(language) => {
        const t = funnelCopy[language];
        const m = t.mentoring;
        return (
          <>
            <h1 className={funnelH1}>{m.title}</h1>
            <p className="mt-4 font-serif text-2xl text-tinte">{m.leadTitle}</p>
            <p className={funnelLead}>{m.lead}</p>
            <ol className="mt-10 list-none space-y-4">
              <li className="crystal-card p-6">
                <p className="text-xs tracking-[0.16em] text-gold">1</p>
                <h2 className="mt-2 font-serif text-2xl text-tinte">
                  <Link href="/start" className={textLinkClass}>
                    {m.giftTitle}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-tinte">{m.giftText}</p>
              </li>
              <li className="crystal-card p-6">
                <p className="text-xs tracking-[0.16em] text-gold">2</p>
                <h2 className="mt-2 font-serif text-2xl text-tinte">
                  <Link href="/erstgespraech" className={textLinkClass}>
                    {m.introTitle}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-tinte">{m.introText}</p>
                {phase === "live" ? null : (
                  <div className="mt-5">
                    <p className="text-base text-tinte">{fill(t.common.mentoringFrom, copyValuesFor(language))}</p>
                    <div className="mt-4">
                      <WaitlistButton language={language} />
                    </div>
                  </div>
                )}
              </li>
              <li className="crystal-card p-6">
                <p className="text-xs tracking-[0.16em] text-gold">3</p>
                <h2 className="mt-2 font-serif text-2xl text-tinte">
                  <Link href="/die-wandlung" className={textLinkClass}>
                    {m.wandlungTitle}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-tinte">{m.wandlungText}</p>
                {phase === "live" ? (
                  <p className="mt-4">
                    <Link href="/erstgespraech" className={textLinkClass}>
                      {m.wandlungPath}
                    </Link>
                  </p>
                ) : (
                  <div className="mt-5">
                    <p className="text-base text-tinte">{fill(t.common.starts, copyValuesFor(language))}</p>
                    <div className="mt-4">
                      <WaitlistButton language={language} />
                    </div>
                  </div>
                )}
              </li>
            </ol>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href="/klarheitsgespraech"
                className="rounded-2xl border border-sand bg-white p-4 transition hover:border-gold/35"
              >
                <span className="block font-serif text-lg text-tinte">{m.clarityTitle}</span>
                <span className="mt-2 block text-sm leading-relaxed text-tinte">{m.clarityText}</span>
              </Link>
              <Link
                href="/vortrag"
                className="rounded-2xl border border-sand bg-white p-4 transition hover:border-gold/35"
              >
                <span className="block font-serif text-lg text-tinte">{m.talkTitle}</span>
                <span className="mt-2 block text-sm leading-relaxed text-tinte">{m.talkText}</span>
              </Link>
            </div>
          </>
        );
      }}
    </FunnelLayout>
  );
}
