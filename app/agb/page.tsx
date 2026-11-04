import type { Metadata } from "next";
import { AgbPage } from "@/components/funnel/agb-page";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";

const copy = funnelCopy.en;

export const metadata: Metadata = {
  title: copy.meta.agb.title,
  description: phase === "live" ? copy.meta.agb.description : copy.agb.unpublished,
  ...(phase === "live" ? {} : { robots: { index: false, follow: false } })
};

export default function Page() {
  return <AgbPage />;
}
