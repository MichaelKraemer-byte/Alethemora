import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { StartPage } from "@/components/funnel/start-page";
import { funnelCopy } from "@/lib/funnel-copy";

function publicImageExists(fileName: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "images", fileName));
}

// Static title and description are English, matching the first render without JavaScript.
// German title and description are applied on the client with the language preference.
// TODO: Open-Graph-Bild für /start ergänzen, sobald die Datei vorliegt. Kein Bild anlegen.
export const metadata: Metadata = {
  title: funnelCopy.en.meta.start.title,
  description: funnelCopy.en.meta.start.description
};

export default function Page() {
  return (
    <StartPage
      showPortrait={publicImageExists("michael.jpg")}
      showCoverDe={publicImageExists("cover-de.jpg")}
      showCoverEn={publicImageExists("cover-en.jpg")}
    />
  );
}
