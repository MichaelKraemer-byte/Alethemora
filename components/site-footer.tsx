"use client";

import Link from "next/link";
import { legalNav } from "@/lib/legal-copy";
import { useLanguagePreference } from "@/lib/use-language-preference";

export function SiteFooter() {
  const { language } = useLanguagePreference();
  const t = legalNav[language];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-onyx/90 py-8 text-zinc-500 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-10">
        <p className="text-center text-xs sm:text-left">
          © {year} Alethemora
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">
          <Link href="/" className="transition hover:text-zinc-200">
            {t.home}
          </Link>
          <Link href="/impressum" className="transition hover:text-zinc-200">
            {t.impressum}
          </Link>
          <Link href="/datenschutz" className="transition hover:text-zinc-200">
            {t.privacy}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
