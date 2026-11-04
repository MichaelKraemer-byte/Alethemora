"use client";

import { copyValuesFor, fill } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { TalkMailLink } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelLead } from "@/components/funnel/funnel-layout";

export function VortragPage() {
  return (
    <FunnelLayout page="vortrag">
      {(language) => {
        const t = funnelCopy[language].vortrag;
        return (
          <>
            <h1 className={funnelH1}>{t.title}</h1>
            <p className={funnelLead}>{t.text}</p>
            <p className="mt-8 text-base leading-relaxed text-zinc-100">
              {phase === "live" ? fill(t.models, copyValuesFor(language)) : fill(t.aufbau, copyValuesFor(language))}
            </p>
            <div className="mt-8">
              <TalkMailLink label={funnelCopy[language].common.requestTalk} />
            </div>
          </>
        );
      }}
    </FunnelLayout>
  );
}
