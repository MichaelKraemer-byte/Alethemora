"use client";

import { copyValuesFor, fill } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { BothEditions, CalButton, InstagramLink } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelLead } from "@/components/funnel/funnel-layout";

export function WillkommenPage() {
  return (
    <FunnelLayout page="willkommen" focus>
      {(language) => {
        const t = funnelCopy[language];
        return (
          <>
            <h1 className={funnelH1}>{t.willkommen.title}</h1>
            <p className={funnelLead}>{t.willkommen.text}</p>
            <BothEditions language={language} />
            {phase === "live" ? (
              <div className="mt-10">
                <p className="type-body">{t.willkommen.liveLead}</p>
                <div className="mt-4">
                  <CalButton which="intro" label={t.common.bookCall} />
                </div>
              </div>
            ) : (
              <p className="type-body mt-10">{fill(t.willkommen.aufbau, copyValuesFor(language))}</p>
            )}
            <div>
              <InstagramLink language={language} />
            </div>
          </>
        );
      }}
    </FunnelLayout>
  );
}
