"use client";

import { copyValuesFor, fill } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { CalButton, WaitlistOnly } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelLead, funnelList } from "@/components/funnel/funnel-layout";

export function KlarheitPage() {
  return (
    <FunnelLayout page="klarheit">
      {(language) => {
        if (phase !== "live") return <WaitlistOnly language={language} />;
        const t = funnelCopy[language].klarheit;
        return (
          <>
            <h1 className={funnelH1}>{t.title}</h1>
            <p className={funnelLead}>{t.text}</p>
            <ul className={funnelList}>
              <li>{t.bullet1}</li>
              <li>{fill(t.bullet2, copyValuesFor(language))}</li>
              <li>{t.bullet3}</li>
            </ul>
            <div className="mt-8">
              <CalButton which="clarity" label={funnelCopy[language].common.chooseTime} />
            </div>
          </>
        );
      }}
    </FunnelLayout>
  );
}
