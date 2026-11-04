"use client";

import { copyValuesFor, fill } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { CalButton, SignupBlock } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelH2, funnelLead, funnelList } from "@/components/funnel/funnel-layout";

export function StartPage() {
  return (
    <FunnelLayout page="start" focus>
      {(language) => {
        const t = funnelCopy[language].start;
        return (
          <>
            <p className="text-xs font-medium tracking-[0.18em] text-soul-gold">{t.eyebrow}</p>
            <h1 className={`mt-4 ${funnelH1}`}>{t.title}</h1>
            <p className={funnelLead}>{t.text}</p>
            <SignupBlock language={language} />
            <ul className={funnelList}>
              <li>{t.pointBook}</li>
              <li>{t.pointMail}</li>
            </ul>
            <h2 className={funnelH2}>{t.afterTitle}</h2>
            {phase === "live" ? (
              <>
                <p className={funnelLead}>{t.afterLive}</p>
                <div className="mt-6">
                  <CalButton which="intro" label={funnelCopy[language].common.bookCall} />
                </div>
              </>
            ) : (
              <p className={funnelLead}>{fill(t.afterAufbau, copyValuesFor(language))}</p>
            )}
            <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="grid h-52 w-full max-w-xs shrink-0 place-items-center rounded-2xl border border-dashed border-soul-gold/55 bg-charcoal px-4 text-center text-sm font-medium text-zinc-50 sm:w-52">
                TODO: Porträtfoto
              </div>
              <p className="text-base leading-relaxed text-zinc-300">{t.about}</p>
            </div>
          </>
        );
      }}
    </FunnelLayout>
  );
}
