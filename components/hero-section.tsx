"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy: Record<Language, { badge: string; title: string; lead: string; text: string; primary: string; secondary: string }> = {
  en: {
    badge: "A philosophy of life for a higher civilization",
    title: "Remember who you are.",
    lead: "You are an immortal soul.",
    text: "You are an immortal soul. You chose this life — its people, its tests, its turning points — but not a finished script. What becomes of it, you decide with every step, out of free will. And you have come to learn here what is easy in the spirit world: to create love — even out of the apparent nothing.",
    primary: "Get the book for free",
    secondary: "The core ideas"
  },
  de: {
    badge: "Eine Lebensphilosophie für eine höhere Zivilisation",
    title: "Erinnere dich, wer du bist.",
    lead: "Du bist eine unsterbliche Seele.",
    text: "Du bist eine unsterbliche Seele. Du hast dieses Leben gewählt – seine Menschen, seine Prüfungen, seine Wendepunkte –, aber kein fertiges Drehbuch. Was daraus wird, entscheidest du mit jedem Schritt aus freiem Willen. Und du bist gekommen, um hier zu lernen, was in der Geistwelt leicht ist: Liebe zu erschaffen – auch aus dem scheinbaren Nichts.",
    primary: "Buch kostenlos erhalten",
    secondary: "Die Kerngedanken"
  }
};

const heroRings = [
  { r: 88, width: 0.8, opacity: 0.22 },
  { r: 74, width: 0.65, opacity: 0.17 },
  { r: 60, width: 0.7, opacity: 0.19 },
  { r: 46, width: 0.55, opacity: 0.15 },
  { r: 32, width: 0.5, opacity: 0.13 }
] as const;

const maxTurn = 8;

export function HeroSection({ language }: { language: Language }) {
  const t = copy[language];
  const uid = useId().replace(/:/g, "");
  const sectionRef = useRef<HTMLElement>(null);
  const ringRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let running = false;
    let pointer = 0;
    let scroll = 0;
    let pointerNow = 0;
    let scrollNow = 0;
    let last = 0;
    const started = performance.now();

    const paint = (influence: number, breath: number) => {
      const angle = Math.max(-maxTurn, Math.min(maxTurn, influence + breath));
      heroRings.forEach((_, index) => {
        const node = ringRefs.current[index];
        if (node) node.style.transform = `rotate(${angle}deg)`;
      });
    };

    const rest = () => {
      heroRings.forEach((_, index) => {
        const node = ringRefs.current[index];
        if (node) node.style.transform = "rotate(0deg)";
      });
    };

    const readScroll = () => {
      const range = Math.max(window.innerHeight * 0.9, 1);
      scroll = Math.max(0, Math.min(1, window.scrollY / range)) * 4;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = section.getBoundingClientRect();
      const nx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      pointer = Math.max(-5, Math.min(5, nx * 4 + ny * 1.5));
    };

    const onLeave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer = 0;
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = last === 0 ? 16 : Math.min(48, now - last);
      last = now;
      const k = 1 - Math.exp(-dt / 240);
      pointerNow += (pointer - pointerNow) * k;
      scrollNow += (scroll - scrollNow) * k;
      const influence = Math.max(-maxTurn, Math.min(maxTurn, pointerNow + scrollNow));
      const breath = Math.sin(((now - started) / 28000) * Math.PI * 2) * 1.1;
      paint(influence, breath);
      frame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(frame);
      pointer = 0;
      scroll = 0;
      pointerNow = 0;
      scrollNow = 0;
      last = 0;
      rest();
    };

    const start = () => {
      if (running || mq.matches) return;
      running = true;
      readScroll();
      last = 0;
      frame = window.requestAnimationFrame(tick);
    };

    const onMotion = () => {
      if (mq.matches) stop();
      else start();
    };

    rest();
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", readScroll, { passive: true });
    if (!mq.matches) start();
    mq.addEventListener("change", onMotion);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", readScroll);
      mq.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-beige">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center pt-[8vh] sm:pt-[10vh]">
        <div className="relative h-[min(72vw,20rem)] w-[min(72vw,20rem)] sm:h-[min(62vw,24rem)] sm:w-[min(62vw,24rem)] lg:h-[28rem] lg:w-[28rem]">
          {heroRings.map((ring, index) => (
            <div
              key={ring.r}
              ref={(node) => {
                ringRefs.current[index] = node;
              }}
              className="absolute inset-0"
              style={{ transform: "rotate(0deg)" }}
              aria-hidden
            >
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <linearGradient id={`hero-ring-${uid}-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7A5F2A" />
                    <stop offset="50%" stopColor="#DDD2BF" />
                    <stop offset="100%" stopColor="#2A2522" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r={ring.r}
                  fill="none"
                  stroke={`url(#hero-ring-${uid}-${index})`}
                  strokeWidth={ring.width}
                  opacity={ring.opacity}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4),transparent_58%)]"
        aria-hidden
      />

      <div className="section-shell relative z-10 flex min-h-[78vh] flex-col items-center justify-center px-4 pb-16 pt-8 text-center sm:min-h-[82vh] sm:pb-20 sm:pt-12">
        <div className="type-eyebrow mb-8 inline-flex items-center rounded-full border border-gold/40 bg-white/80 px-4 py-2.5 text-center leading-relaxed tracking-[0.12em] sm:mb-10">
          {t.badge}
        </div>

        <h1 className="type-hero">{t.title}</h1>
        <p className="type-lead mx-auto mt-6 max-w-3xl">{emphasize(t.text, t.lead)}</p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row">
          <div className="rounded-full bg-white p-1.5">
            <Link
              href="/start"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-rose px-7 text-sm font-bold tracking-wide text-white transition hover:bg-rose-hover hover:font-bold hover:text-white sm:text-base"
            >
              {t.primary}
            </Link>
          </div>
          <Link
            href="#why"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-sand bg-white/80 px-7 text-sm font-medium tracking-wide text-tinte transition hover:bg-white sm:text-base"
          >
            {t.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
