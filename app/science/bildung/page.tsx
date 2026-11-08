import type { Metadata } from "next";
import { ScienceTopicPage } from "@/components/science-topic-page";
import { scienceTopics } from "@/lib/science-hub";

const topic = scienceTopics.bildung.de;

export const metadata: Metadata = {
  title: topic.title,
  description: topic.description || topic.intro
};

export default function Page() {
  return <ScienceTopicPage topic="bildung" />;
}
