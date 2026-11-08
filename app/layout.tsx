import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { BackButton } from "@/components/back-button";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: "normal",
  display: "swap",
  variable: "--font-inter",
  preload: true
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
  variable: "--font-playfair",
  preload: true
});

export const metadata: Metadata = {
  title: "ALETHEMORA",
  // TODO: EN prüfen
  description:
    "The name carries three words: Aletheia, the unconcealed truth and a path of science; Hem, the soul's home and the soul friends who stay with us; Amor, love, the endless energy of creation, of being, and of the light. The full text is in the free book."
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans font-normal">
        <Script id="alethemora-language-boot" strategy="beforeInteractive">
          {`(function(){try{var k="alethemora-language";var s=localStorage.getItem(k);var n=(navigator.language||"").toLowerCase();var lang=(s==="en"||s==="de")?s:(n.indexOf("de")===0?"de":"en");document.documentElement.lang=lang;document.documentElement.setAttribute("data-lang",lang);if(lang!=="en"){document.documentElement.setAttribute("data-pending-lang","1");setTimeout(function(){document.documentElement.removeAttribute("data-pending-lang");},2500);}}catch(e){}})();`}
        </Script>
        {children}
        <BackButton />
        <SiteFooter />
      </body>
    </html>
  );
}
