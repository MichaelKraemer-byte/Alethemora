import type { Metadata } from "next";
import { MentoringPage } from "@/components/funnel/mentoring-page";
import { funnelCopy } from "@/lib/funnel-copy";

export const metadata: Metadata = {
  title: funnelCopy.en.meta.mentoring.title,
  description: funnelCopy.en.meta.mentoring.description
};

export default function Page() {
  return <MentoringPage />;
}
