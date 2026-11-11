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

const title = "ALETHEMORA";
// TODO: EN prüfen
const description =
  "The name carries three words: Aletheia, the unconcealed truth and a path of science; Hem, the soul's home and the soul friends who stay with us; Amor, love, the endless energy of creation, of being, and of the light. The full text is in the free book.";

const shareImage = {
  url: "https://alethemora.com/og/og-rings.jpg",
  width: 1200,
  height: 630,
  alt: "Das Ring-Zeichen von Alethemora"
} as const;

export const metadata: Metadata = {
  metadataBase: new URL("https://alethemora.com"),
  title,
  description,
  appleWebApp: {
    capable: true,
    title: "Alethemora",
    statusBarStyle: "default"
  },
  openGraph: {
    type: "website",
    siteName: "Alethemora",
    locale: "de_DE",
    url: "https://alethemora.com",
    title,
    description,
    images: [shareImage]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage.url]
  },
  icons: {
    icon: [
      { url: "/icons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  other: {
    "msapplication-TileColor": "#FFFFFF",
    "msapplication-TileImage": "https://alethemora.com/icons/icon-192.png"
  }
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
