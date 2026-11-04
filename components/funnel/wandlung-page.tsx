"use client";

import { copyValuesFor, fill } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase, pilotPlaetzeFrei } from "@/lib/site-config";
import { CalButton, WaitlistButton } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelLead, funnelList } from "@/components/funnel/funnel-layout";

export function WandlungPage() {
  return (
    <FunnelLayout page="wandlung">
      {(language) => {
        const t = funnelCopy[language];
        const w = t.wandlung;
        return (
          <>
            <h1 className={funnelH1}>{w.title}</h1>
            <p className={funnelLead}>{w.text}</p>
            <h2 className="mt-10 font-serif text-2xl text-zinc-50">{w.includes}</h2>
            <ul className={funnelList}>
              <li>{w.bullet1}</li>
              <li>{w.bullet2}</li>
              <li>{w.bullet3}</li>
              <li>{w.bullet4}</li>
            </ul>
            {phase === "live" ? (
              <div className="mt-8 space-y-4">
                <p className="text-base leading-relaxed text-zinc-100">{fill(w.price, copyValuesFor(language))}</p>
                {pilotPlaetzeFrei > 0 ? (
                  <p className="text-base leading-relaxed text-zinc-100">{fill(w.pilot, copyValuesFor(language))}</p>
                ) : null}
                <p className="text-base leading-relaxed text-zinc-300">{w.path}</p>
                <CalButton which="intro" label={t.common.bookCall} />
              </div>
            ) : (
              <div className="mt-8">
                <p className="text-base text-zinc-100">{fill(t.common.starts, copyValuesFor(language))}</p>
                <div className="mt-4">
                  <WaitlistButton language={language} />
                </div>
              </div>
            )}
          </>
        );
      }}
    </FunnelLayout>
  );
}
