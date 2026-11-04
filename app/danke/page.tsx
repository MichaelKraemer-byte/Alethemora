import type { Metadata } from "next";
import { DankePage } from "@/components/funnel/danke-page";
import { funnelCopy } from "@/lib/funnel-copy";

export const metadata: Metadata = {
  title: funnelCopy.en.meta.danke.title,
  description: funnelCopy.en.meta.danke.description,
  robots: { index: false, follow: false }
};

export default function Page() {
  return <DankePage />;
}
