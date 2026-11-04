"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe2, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlethemoraRing } from "@/components/alethemora-ring";
import type { Language } from "@/lib/i18n";
import { funnelCopy } from "@/lib/funnel-copy";
import { phase } from "@/lib/site-config";

// TODO: EN prüfen
const navItems: Record<Language, { label: string; href: string }[]> = {
  en: [
    { label: "Core", href: "#why" },
    { label: "Principles", href: "#prinzipien" },
    { label: "Practice", href: "#path-of-practice" },
    { label: "Rhythm", href: "#rhythmus" },
    { label: "Science", href: "#wissenschaft" },
    { label: "Community", href: "#tribe" },
    { label: "Mentoring", href: "/mentoring" }
  ],
  de: [
    { label: "Kern", href: "#why" },
    { label: "Prinzipien", href: "#prinzipien" },
    { label: "Praxis", href: "#path-of-practice" },
    { label: "Rhythmus", href: "#rhythmus" },
    { label: "Wissenschaft", href: "#wissenschaft" },
    { label: "Gemeinschaft", href: "#tribe" },
    { label: "Mentoring", href: "/mentoring" }
  ]
};

function itemHref(isHome: boolean, href: string) {
  if (href.startsWith("/")) return href;
  return isHome ? href : `/${href}`;
}

const ctaClass =
  "inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-rose px-2.5 text-[11px] font-bold tracking-wide text-white transition hover:bg-rose-hover hover:font-bold hover:text-white sm:px-3.5 sm:text-xs";

const menuCtaClass =
  "inline-flex min-h-10 w-full items-center justify-center whitespace-nowrap rounded-full border border-tinte bg-transparent px-2.5 text-[11px] font-medium tracking-wide text-tinte transition hover:bg-tinte hover:text-white sm:px-3.5 sm:text-xs";

export function SiteHeader({
  language,
  onLanguageChange,
  variant = "full"
}: {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  variant?: "full" | "focus";
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const showNav = variant === "full";
  const labels = funnelCopy[language].nav;
  const cta =
    phase === "live"
      ? { href: "/erstgespraech", label: labels.ctaLive }
      : { href: "/start", label: labels.ctaAufbau };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-sand bg-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:px-10">
        <Link
          href="/"
          className={`flex min-w-0 items-center gap-2 sm:gap-3 ${
            showNav ? "max-w-[28%] sm:max-w-[48%] md:max-w-none" : "max-w-[70%] sm:max-w-none"
          }`}
          onClick={closeMobile}
        >
          <div className="shrink-0 rounded-xl border border-sand bg-white p-1.5 sm:p-2">
            <AlethemoraRing variant="mark" className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
          <span className="type-wordmark">ALETHEMORA</span>
        </Link>

        {showNav ? (
          <nav className="hidden items-center gap-5 text-sm font-normal text-tinte lg:gap-6 md:flex">
            {navItems[language].map((item) => (
              <Link
                key={item.label}
                href={itemHref(isHome, item.href)}
                className="whitespace-nowrap text-tinte transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {showNav ? (
            <Link href={cta.href} className={ctaClass}>
              {cta.label}
            </Link>
          ) : null}
          <div className="inline-flex items-center rounded-full border border-sand bg-white p-0.5 sm:p-1">
            {(["en", "de"] as const).map((lang) => {
              const active = language === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onLanguageChange(lang)}
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium tracking-[0.12em] transition sm:gap-1.5 sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.14em] ${
                    active
                      ? "bg-beige text-tinte"
                      : "text-tinte-weich hover:bg-beige hover:text-tinte"
                  }`}
                  aria-label={lang === "en" ? "English" : "Deutsch"}
                  aria-pressed={active}
                >
                  <Globe2 className="hidden h-3 w-3 sm:block" />
                  <span className="sm:hidden">{lang.toUpperCase()}</span>
                  <span className="hidden sm:inline">{lang === "en" ? "ENGLISH" : "DEUTSCH"}</span>
                </button>
              );
            })}
          </div>

          {showNav ? (
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sand bg-white text-tinte transition hover:bg-beige md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="site-mobile-nav"
              aria-label={mobileOpen ? "Navigation schließen" : "Navigation öffnen"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
            </button>
          ) : null}
        </div>
      </div>

      {showNav ? (
        <AnimatePresence>
          {mobileOpen ? (
            <>
              <motion.button
                type="button"
                aria-label="Menü schließen"
                className="fixed inset-0 top-16 z-40 bg-tinte/30 backdrop-blur-[2px] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobile}
              />
              <motion.nav
                id="site-mobile-nav"
                className="fixed left-0 right-0 top-16 z-50 max-h-[min(32rem,calc(100dvh-4rem))] overflow-y-auto border-b border-t border-sand bg-white shadow-[0_16px_40px_rgba(42,37,34,0.08)] md:hidden"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-sand"
                  aria-hidden
                />
                <ul className="relative flex flex-col px-3 py-2 pb-4">
                  <li>
                    <Link
                      href={cta.href}
                      className={`${menuCtaClass} my-2`}
                      onClick={closeMobile}
                    >
                      {cta.label}
                    </Link>
                  </li>
                  {navItems[language].map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={itemHref(isHome, item.href)}
                        className="block rounded-xl px-3 py-3.5 text-[15px] font-normal text-tinte transition hover:bg-beige hover:text-gold"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </>
          ) : null}
        </AnimatePresence>
      ) : null}
    </header>
  );
}
