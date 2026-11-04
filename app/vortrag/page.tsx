import type { Metadata } from "next";
import { VortragPage } from "@/components/funnel/vortrag-page";
import { funnelCopy } from "@/lib/funnel-copy";

export const metadata: Metadata = {
  title: funnelCopy.en.meta.vortrag.title,
  description: funnelCopy.en.meta.vortrag.description
};

export default function Page() {
  return <VortragPage />;
}
