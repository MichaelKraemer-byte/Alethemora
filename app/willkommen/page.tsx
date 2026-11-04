import type { Metadata } from "next";
import { WillkommenPage } from "@/components/funnel/willkommen-page";
import { funnelCopy } from "@/lib/funnel-copy";

export const metadata: Metadata = {
  title: funnelCopy.en.meta.willkommen.title,
  description: funnelCopy.en.meta.willkommen.description,
  robots: { index: false, follow: false }
};

export default function Page() {
  return <WillkommenPage />;
}
