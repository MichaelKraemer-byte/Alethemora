import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
