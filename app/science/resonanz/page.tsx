import type { Metadata } from "next";
import { ScienceTopicPage } from "@/components/science-topic-page";
import { scienceTopics } from "@/lib/science-hub";

export const metadata: Metadata = {
  title: scienceTopics.resonanz.de.title,
  description: scienceTopics.resonanz.de.tagline
};

export default function Page() {
  return <ScienceTopicPage topic="resonanz" />;
}
