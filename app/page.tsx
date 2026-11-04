import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Alethemora – Erinnere dich, wer du bist",
  description:
    "Eine Lebensphilosophie: Du bist eine Seele, die dieses Leben gewählt hat – mit freiem Willen und um Liebe zu erschaffen. Das Buch von Michael Krämer, kostenlos."
};

export default function Page() {
  return <HomePage />;
}
