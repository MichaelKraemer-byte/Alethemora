import type { Metadata } from "next";
import { KlarheitPage } from "@/components/funnel/klarheit-page";
import { funnelCopy } from "@/lib/funnel-copy";

export const metadata: Metadata = {
  title: funnelCopy.en.meta.klarheit.title,
  description: funnelCopy.en.meta.klarheit.description
};

export default function Page() {
  return <KlarheitPage />;
}
