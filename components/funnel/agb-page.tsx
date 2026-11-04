"use client";

import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { FunnelLayout, funnelH1, funnelLead } from "@/components/funnel/funnel-layout";

export function AgbPage() {
  return (
    <FunnelLayout page="agb">
      {(language) => {
        const t = funnelCopy[language].agb;
        if (phase !== "live") {
          return (
            <>
              <h1 className={funnelH1}>{t.title}</h1>
              <p className={funnelLead}>{t.unpublished}</p>
            </>
          );
        }
        return (
          <>
            <h1 className={funnelH1}>{t.title}</h1>
            <p className={funnelLead}>{t.placeholder}</p>
          </>
        );
      }}
    </FunnelLayout>
  );
}
