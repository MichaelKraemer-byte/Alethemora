import type { Metadata } from "next";
import { WandlungPage } from "@/components/funnel/wandlung-page";
import { funnelCopy } from "@/lib/funnel-copy";

export const metadata: Metadata = {
  title: funnelCopy.en.meta.wandlung.title,
  description: funnelCopy.en.meta.wandlung.description
};

export default function Page() {
  return <WandlungPage />;
}
