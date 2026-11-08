import type { Metadata } from "next";
import { PrinciplesPage } from "@/components/principles-page";
import { principlesPageMeta } from "@/lib/subpage-meta";

export const metadata: Metadata = {
  title: principlesPageMeta.de.title,
  description: principlesPageMeta.de.description
};

export default function Page() {
  return <PrinciplesPage />;
}
