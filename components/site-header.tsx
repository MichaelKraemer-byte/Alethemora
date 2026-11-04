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

const navItems: Record<Language, { label: string; href: string }[]> = {
  en: [
    { label: "Belief", href: "#why" },
    { label: "Principles", href: "#prinzipien" },
    { label: "Practice Path", href: "#path-of-practice" },
    { label: "Rhythm", href: "#rhythmus" },
    { label: "Science", href: "#wissenschaft" },
    { label: "Tribe", href: "#tribe" }
  ],
  de: [
    { label: "Glaube", href: "#why" },
    { label: "Prinzipien", href: "#prinzipien" },
    { label: "Praxispfad", href: "#path-of-practice" },
    { label: "Rhythmus", href: "#rhythmus" },
    { label: "Wissenschaft", href: "#wissenschaft" },
    { label: "Stamm", href: "#tribe" }
  ]
};

const ctaClass =
  "inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-soul-gold/70 bg-gradient-to-r from-soul-gold/30 to-quantum-cyan/25 px-2.5 text-[11px] font-medium tracking-wide text-white shadow-[0_0_18px_rgba(212,175,55,0.22)] transition hover:from-soul-gold/40 sm:px-3.5 sm:text-xs";

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
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-onyx/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:px-10">
        <Link
          href="/"
          className={`flex min-w-0 items-center gap-2 sm:gap-3 ${
            showNav ? "max-w-[28%] sm:max-w-[48%] md:max-w-none" : "max-w-[70%] sm:max-w-none"
          }`}
          onClick={closeMobile}
        >
          <div className="shrink-0 rounded-xl border border-soul-gold/45 bg-gradient-to-br from-soul-gold/12 to-black/40 p-1.5 shadow-[0_0_20px_rgba(212,175,55,0.15)] sm:p-2">
            <AlethemoraRing variant="mark" className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
          <span className="truncate font-serif text-base tracking-wide text-zinc-100 sm:text-lg">ALETHEMORA</span>
        </Link>

        {showNav ? (
          <nav className="hidden items-center gap-5 text-sm text-zinc-300 lg:gap-6 md:flex">
            {navItems[language].map((item) => (
              <Link
                key={item.label}
                href={isHome ? item.href : `/${item.href}`}
                className="whitespace-nowrap transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/mentoring" className="whitespace-nowrap transition hover:text-white">
              {labels.mentoring}
            </Link>
          </nav>
        ) : null}

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {showNav ? (
            <Link href={cta.href} className={ctaClass}>
              {cta.label}
            </Link>
          ) : null}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-black/45 p-0.5 shadow-[0_8px_26px_rgba(0,0,0,0.45)] sm:p-1">
            {(["en", "de"] as const).map((lang) => {
              const active = language === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onLanguageChange(lang)}
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] tracking-[0.1em] transition sm:gap-1.5 sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.12em] ${
                    active
                      ? "bg-gradient-to-r from-soul-gold/35 to-quantum-cyan/35 text-white shadow-[0_0_18px_rgba(212,175,55,0.28)]"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                  aria-label={lang === "en" ? "English" : "Deutsch"}
                  aria-pressed={active}
                >
                  <Globe2 className="hidden h-3 w-3 sm:block" />
                  <span className="font-medium sm:hidden">{lang.toUpperCase()}</span>
                  <span className="hidden sm:inline">{lang === "en" ? "ENGLISH" : "DEUTSCH"}</span>
                </button>
              );
            })}
          </div>

          {showNav ? (
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/35 text-zinc-100 transition hover:border-white/25 hover:bg-white/5 md:hidden"
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
                className="fixed inset-0 top-16 z-40 bg-black/55 backdrop-blur-[2px] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobile}
              />
              <motion.nav
                id="site-mobile-nav"
                className="fixed left-0 right-0 top-16 z-50 max-h-[min(32rem,calc(100dvh-4rem))] overflow-y-auto border-b border-white/15 border-t border-white/10 bg-charcoal/92 shadow-[0_28px_56px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:hidden"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(212,175,55,0.12),transparent_52%),radial-gradient(90%_60%_at_100%_100%,rgba(0,229,255,0.08),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.4)_0%,rgba(17,17,17,0.85)_100%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-soul-gold/35 to-transparent"
                  aria-hidden
                />
                <ul className="relative flex flex-col px-3 py-2 pb-4">
                  <li>
                    <Link
                      href={cta.href}
                      className={`${ctaClass} my-2 w-full`}
                      onClick={closeMobile}
                    >
                      {cta.label}
                    </Link>
                  </li>
                  {navItems[language].map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={isHome ? item.href : `/${item.href}`}
                        className="block rounded-xl px-3 py-3.5 text-[15px] text-zinc-200 transition active:bg-white/10 hover:bg-white/5 hover:text-white"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/mentoring"
                      className="block rounded-xl px-3 py-3.5 text-[15px] text-zinc-200 transition active:bg-white/10 hover:bg-white/5 hover:text-white"
                      onClick={closeMobile}
                    >
                      {labels.mentoring}
                    </Link>
                  </li>
                </ul>
              </motion.nav>
            </>
          ) : null}
        </AnimatePresence>
      ) : null}
    </header>
  );
}
