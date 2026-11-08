import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Alethemora – Erinnere dich, wer du bist",
  description:
    "Eine Lebensphilosophie: Du bist eine Seele, die dieses Leben gewählt hat – mit freiem Willen und um Liebe zu erschaffen. Das Buch von Michael Krämer, kostenlos."
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alethemora",
  url: "https://alethemora.com",
  logo: "https://alethemora.com/icons/logo-512.png"
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePage />
    </>
  );
}
