"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { externalUrl, isFocusPath } from "@/lib/funnel";
import { funnelCopy } from "@/lib/funnel-copy";
import { legalNav } from "@/lib/legal-copy";
import { phase, youtube } from "@/lib/site-config";
import { useLanguagePreference } from "@/lib/use-language-preference";

const linkClass = "text-sm text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte";

export function SiteFooter() {
  const pathname = usePathname();
  const { language } = useLanguagePreference();
  const legal = legalNav[language];
  const t = funnelCopy[language].footer;
  const year = new Date().getFullYear();
  const focus = isFocusPath(pathname);
  const youtubeHref = externalUrl(youtube);

  return (
    <footer className="border-t border-sand bg-beige py-8 text-tinte">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-10">
        <p className="text-center text-xs sm:text-left">© {year} Alethemora</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {focus ? null : (
            <>
              <Link href="/" className={linkClass}>
                {legal.home}
              </Link>
              <Link href="/mentoring" className={linkClass}>
                {t.mentoring}
              </Link>
            </>
          )}
          <Link href="/impressum" className={linkClass}>
            {legal.impressum}
          </Link>
          <Link href="/datenschutz" className={linkClass}>
            {legal.privacy}
          </Link>
          {!focus && phase === "live" ? (
            <Link href="/agb" className={linkClass}>
              {t.agb}
            </Link>
          ) : null}
          {!focus && youtubeHref ? (
            <a href={youtubeHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t.youtube}
            </a>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
