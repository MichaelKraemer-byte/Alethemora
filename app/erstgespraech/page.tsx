import type { Metadata } from "next";
import { ErstgespraechPage } from "@/components/funnel/erstgespraech-page";
import { funnelCopy } from "@/lib/funnel-copy";

export const metadata: Metadata = {
  title: funnelCopy.en.meta.erstgespraech.title,
  description: funnelCopy.en.meta.erstgespraech.description
};

export default function Page() {
  return <ErstgespraechPage />;
}
