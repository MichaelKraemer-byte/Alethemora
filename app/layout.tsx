import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
  variable: "--font-inter",
  preload: true
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-playfair",
  preload: true
});

export const metadata: Metadata = {
  title: "ALETHEMORA",
  // TODO: EN prüfen
  description:
    "Alethemora means this: the truth of one's own fate — the remembrance of the life the soul has chosen. The full text is in the free book."
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
        <SiteFooter />
      </body>
    </html>
  );
}
