"use client";

import Link from "next/link";
import { funnelCopy } from "@/lib/funnel-copy";
import { textLinkClass } from "@/components/funnel/actions";
import { FunnelLayout, funnelH1, funnelLead } from "@/components/funnel/funnel-layout";

export function DankePage() {
  return (
    <FunnelLayout page="danke" focus>
      {(language) => {
        const t = funnelCopy[language];
        return (
          <>
            <h1 className={funnelH1}>{t.danke.title}</h1>
            <p className={funnelLead}>{t.danke.text}</p>
            <Link href="/" className={`${textLinkClass} mt-8 inline-flex`}>
              {t.common.backHome}
            </Link>
          </>
        );
      }}
    </FunnelLayout>
  );
}
