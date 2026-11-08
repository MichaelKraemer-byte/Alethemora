import type { Metadata } from "next";
import { ScienceTopicPage } from "@/components/science-topic-page";
import { scienceTopics } from "@/lib/science-hub";

const topic = scienceTopics.quellen.de;

export const metadata: Metadata = {
  title: topic.title,
  description: topic.description || topic.title
};

export default function Page() {
  return <ScienceTopicPage topic="quellen" />;
}
