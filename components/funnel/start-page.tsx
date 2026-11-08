"use client";

import { copyValuesFor, fill } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { CalButton, SignupBlock } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelH2, funnelLead, funnelList } from "@/components/funnel/funnel-layout";

const coverSrc = {
  de: "/images/cover-de.jpg",
  en: "/images/cover-en.jpg"
} as const;

type StartPageProps = {
  /** true only when public/images/michael.jpg is on disk. No placeholder otherwise. */
  showPortrait?: boolean;
  showCoverDe?: boolean;
  showCoverEn?: boolean;
};

export function StartPage({ showPortrait = false, showCoverDe = false, showCoverEn = false }: StartPageProps) {
  const coverPresent = { de: showCoverDe, en: showCoverEn };
  return (
    <FunnelLayout page="start" focus canvas="beige">
      {(language) => {
        const t = funnelCopy[language].start;
        const cover = coverSrc[language];
        return (
          <>
            <div className="rounded-3xl border border-sand bg-white p-6 shadow-[0_12px_40px_rgba(42,37,34,0.06)] sm:p-10">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                {coverPresent[language] ? (
                  <img
                    src={cover}
                    alt={t.coverAlt}
                    className="w-full max-w-[16rem] shrink-0 rounded-2xl border border-sand shadow-[0_6px_18px_rgba(42,37,34,0.05)]"
                  />
                ) : null}
                <div className="min-w-0 w-full flex-1">
                  <p className="type-eyebrow">{t.eyebrow}</p>
                  <h1 className={`mt-4 ${funnelH1}`}>{t.title}</h1>
                  <p className={funnelLead}>{t.text}</p>
                  <SignupBlock language={language} embedded />
                </div>
              </div>
            </div>
            <div className="reading-column">
            <ul className={funnelList}>
              <li>{t.pointBook}</li>
              <li>{t.pointMail}</li>
            </ul>
            <h2 className={funnelH2}>{t.afterTitle}</h2>
            {phase === "live" ? (
              <div className="mt-6 rounded-3xl border border-sand bg-white p-6 sm:p-8">
                <p className={funnelLead}>{t.afterLive}</p>
                <div className="mt-6">
                  <CalButton which="intro" label={funnelCopy[language].common.bookCall} />
                </div>
              </div>
            ) : (
              <p className={funnelLead}>{fill(t.afterAufbau, copyValuesFor(language))}</p>
            )}
            <div className="mt-14 flex items-start gap-4">
              {/* Porträt nur, wenn public/images/michael.jpg vorliegt. Sonst kein Platzhalter. */}
              {showPortrait ? (
                <img
                  src="/images/michael.jpg"
                  alt="Michael Krämer"
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-full object-cover"
                />
              ) : null}
              <p className="type-body">{t.about}</p>
            </div>
            </div>
          </>
        );
      }}
    </FunnelLayout>
  );
}
