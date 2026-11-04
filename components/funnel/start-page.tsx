"use client";

import { copyValuesFor, fill } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { CalButton, SignupBlock } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelH2, funnelLead, funnelList } from "@/components/funnel/funnel-layout";

export function StartPage() {
  return (
    <FunnelLayout page="start" focus canvas="beige">
      {(language) => {
        const t = funnelCopy[language].start;
        return (
          <>
            <div className="rounded-3xl border border-sand bg-white p-6 shadow-[0_12px_40px_rgba(42,37,34,0.06)] sm:p-10">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                <div className="grid aspect-[3/4] w-full max-w-[16rem] shrink-0 place-items-center rounded-2xl border border-sand bg-beige px-4 text-center text-sm font-medium text-tinte shadow-[0_10px_28px_rgba(42,37,34,0.08)]">
                  TODO: Porträtfoto
                </div>
                <div className="min-w-0 w-full flex-1">
                  <p className="text-xs font-medium tracking-[0.18em] text-gold">{t.eyebrow}</p>
                  <h1 className={`mt-4 ${funnelH1}`}>{t.title}</h1>
                  <p className={funnelLead}>{t.text}</p>
                  <SignupBlock language={language} embedded />
                </div>
              </div>
            </div>
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
            <p className="mt-14 text-base leading-relaxed text-tinte">{t.about}</p>
          </>
        );
      }}
    </FunnelLayout>
  );
}
