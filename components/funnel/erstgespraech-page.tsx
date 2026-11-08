"use client";

import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";
import { CalButton, WaitlistOnly } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelLead, funnelList } from "@/components/funnel/funnel-layout";

export function ErstgespraechPage() {
  return (
    <FunnelLayout page="erstgespraech" reading>
      {(language) => {
        if (phase !== "live") return <WaitlistOnly language={language} />;
        const t = funnelCopy[language];
        return (
          <>
            <h1 className={funnelH1}>{t.erstgespraech.title}</h1>
            <p className={funnelLead}>{t.erstgespraech.text}</p>
            <ul className={funnelList}>
              <li>{t.erstgespraech.bullet1}</li>
              <li>{t.erstgespraech.bullet2}</li>
              <li>{t.erstgespraech.bullet3}</li>
            </ul>
            <div className="mt-8">
              <CalButton which="intro" label={t.common.chooseTime} />
            </div>
          </>
        );
      }}
    </FunnelLayout>
  );
}
