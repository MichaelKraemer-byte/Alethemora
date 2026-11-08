import type { Metadata } from "next";
import { PraxisPage } from "@/components/praxis-page";
import { praxisPageMeta } from "@/lib/subpage-meta";

export const metadata: Metadata = {
  title: praxisPageMeta.de.title,
  description: praxisPageMeta.de.description
};

export default function Page() {
  return <PraxisPage />;
}
