import type { Metadata } from "next";
import { ScienceTopicPage } from "@/components/science-topic-page";
import { scienceTopics } from "@/lib/science-hub";

export const metadata: Metadata = {
  title: scienceTopics.sovereignty.de.title,
  description: scienceTopics.sovereignty.de.tagline
};

export default function Page() {
  return <ScienceTopicPage topic="sovereignty" />;
}
