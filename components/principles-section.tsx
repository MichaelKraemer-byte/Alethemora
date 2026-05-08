"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Language } from "@/lib/i18n";
import { principlesEn } from "@/lib/principles-en";
import { principles, spheres, type Principle } from "@/lib/principles";

const sphereStyles: Record<string, string> = {
  "Innere Ordnung": "border-soul-gold/30 bg-soul-gold/10",
  "Die Seelenwelt": "border-cyan-400/30 bg-cyan-400/10",
  "Die Seelengruppe": "border-indigo-400/30 bg-indigo-400/10",
  "Charakter-Alchemie": "border-emerald-400/30 bg-emerald-400/10",
  "Die neue Zivilisation": "border-quantum-cyan/30 bg-quantum-cyan/10"
};
const sphereLabels: Record<string, Record<Language, string>> = {
  "Innere Ordnung": { en: "Inner Order", de: "Innere Ordnung" },
  "Die Seelenwelt": { en: "The Soul World", de: "Die Seelenwelt" },
  "Die Seelengruppe": { en: "The Soul Group", de: "Die Seelengruppe" },
  "Charakter-Alchemie": { en: "Character Alchemy", de: "Charakter-Alchemie" },
  "Die neue Zivilisation": { en: "The New Civilization", de: "Die neue Zivilisation" }
};

const constellationNodes = [
  { top: "8%", left: "9%", delay: 0.1 },
  { top: "16%", left: "32%", delay: 0.35 },
  { top: "10%", left: "72%", delay: 0.6 },
  { top: "28%", left: "18%", delay: 0.9 },
  { top: "36%", left: "58%", delay: 0.2 },
  { top: "42%", left: "83%", delay: 0.75 },
  { top: "56%", left: "12%", delay: 0.4 },
  { top: "62%", left: "38%", delay: 0.95 },
  { top: "70%", left: "69%", delay: 0.5 },
  { top: "84%", left: "22%", delay: 0.15 },
  { top: "88%", left: "52%", delay: 0.7 },
  { top: "80%", left: "86%", delay: 1.05 }
] as const;

const sectionCopy = {
  en: {
    badge: "CORE ENGINE",
    title: "The 35 Resonance Principles as Axioms of Reality",
    intro:
      "No rules. No dogma. These axioms describe the structure of conscious development. Select a principle to open its full meaning.",
    modalNote: "These principles are axioms of reality, not dogmatic rules.",
    prev: "Previous",
    next: "Next",
    principle: "Principle",
    axiomsInSphere: "axioms in this sphere"
  },
  de: {
    badge: "KERN-ENGINE",
    title: "Die 35 Resonanz-Prinzipien als Axiome der Realität",
    intro:
      "Keine Regeln. Keine Dogmen. Diese Axiome beschreiben die Struktur bewusster Entwicklung. Wähle ein Prinzip und öffne die volle Bedeutung.",
    modalNote: "Diese Prinzipien sind Axiome der Realität, keine dogmatischen Regeln.",
    prev: "Vorheriges",
    next: "Nächstes",
    principle: "Prinzip",
    axiomsInSphere: "Axiome in dieser Sphäre"
  }
} as const;

export function PrinciplesSection({ language }: { language: Language }) {
  const t = sectionCopy[language];
  const [activeId, setActiveId] = useState<number | null>(null);
  const [openSphere, setOpenSphere] = useState<string | null>(() => spheres[0] ?? null);

  const activePrinciple = useMemo(
    () => principles.find((principle) => principle.id === activeId) ?? null,
    [activeId]
  );
  const activeIndex = useMemo(
    () => principles.findIndex((principle) => principle.id === activeId),
    [activeId]
  );
  const hasPrevious = activeIndex > 0;
  const hasNext = activeIndex >= 0 && activeIndex < principles.length - 1;

  const goToPrevious = useCallback(() => {
    if (!hasPrevious) return;
    setActiveId(principles[activeIndex - 1].id);
  }, [hasPrevious, activeIndex]);

  const goToNext = useCallback(() => {
    if (!hasNext) return;
    setActiveId(principles[activeIndex + 1].id);
  }, [hasNext, activeIndex]);

  function handleSwipe(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    const swipeThreshold = 72;
    if (info.offset.x <= -swipeThreshold && hasNext) goToNext();
    if (info.offset.x >= swipeThreshold && hasPrevious) goToPrevious();
  }

  useEffect(() => {
    if (!activePrinciple) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveId(null);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePrinciple, goToNext, goToPrevious]);

  return (
    <section id="prinzipien" className="section-shell overflow-hidden">
      <div className="constellation-network" />
      {constellationNodes.map((node, index) => (
        <motion.span
          key={`${node.top}-${node.left}-${index}`}
          className="constellation-node"
          style={{ top: node.top, left: node.left }}
          animate={{ opacity: [0.25, 0.75, 0.25], scale: [1, 1.22, 1] }}
          transition={{
            duration: 3.2,
            delay: node.delay,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY
          }}
        />
      ))}

      <div className="mb-10">
        <span className="rounded-full border border-soul-gold/40 bg-soul-gold/10 px-3 py-1 text-xs tracking-[0.16em] text-soul-gold">
          {t.badge}
        </span>
        <h2 className="mt-4 font-serif text-3xl text-zinc-100 sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-300">{t.intro}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {spheres.map((sphere, sphereIndex) => {
          const items = principles.filter((principle) => principle.sphere === sphere);
          const isOpen = openSphere === sphere;
          const panelId = `principles-sphere-${sphereIndex}`;
          const headId = `${panelId}-head`;

          return (
            <div key={sphere} className="border-b border-white/10 last:border-b-0">
              <button
                type="button"
                id={headId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenSphere((prev) => (prev === sphere ? null : sphere))}
                className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-white/[0.04] sm:px-5 sm:py-5 ${sphereStyles[sphere]}`}
              >
                <div className="min-w-0">
                  <h3 className="font-serif text-lg text-zinc-100 sm:text-2xl">{sphereLabels[sphere][language]}</h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    {items.length} {t.axiomsInSphere}
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-180 text-soul-gold/90" : ""
                  }`}
                  strokeWidth={1.75}
                  aria-hidden
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key={panelId}
                    id={panelId}
                    role="region"
                    aria-labelledby={headId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden border-t border-white/5 bg-black/20"
                  >
                    <div className="grid gap-4 p-4 sm:p-5 md:grid-cols-2 xl:grid-cols-3">
                      {items.map((principle) => (
                        <PrincipleCard
                          key={principle.id}
                          language={language}
                          principle={principle}
                          onClick={() => setActiveId(principle.id)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {activePrinciple ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-3 backdrop-blur-md sm:p-4"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={handleSwipe}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-charcoal p-5 shadow-2xl sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs tracking-[0.12em] text-zinc-100 ${sphereStyles[activePrinciple.sphere]}`}
                  >
                    {sphereLabels[activePrinciple.sphere][language].toUpperCase()}
                  </span>
                  <p className="mt-4 text-sm text-zinc-400">
                    {t.principle} {activePrinciple.id}
                  </p>
                  <h4 className="mt-1 font-serif text-[clamp(1.3rem,2.7vw,1.8rem)] text-zinc-100">
                    {language === "en"
                      ? (principlesEn[activePrinciple.id]?.title ?? activePrinciple.title)
                      : activePrinciple.title}
                  </h4>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-white/20 p-2 text-zinc-300 transition hover:text-white"
                  onClick={() => setActiveId(null)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-6 text-[clamp(1rem,2.2vw,1.1rem)] leading-relaxed text-zinc-100">
                {language === "en"
                  ? (principlesEn[activePrinciple.id]?.statement ?? activePrinciple.statement)
                  : activePrinciple.statement}
              </p>
              <p className="mt-4 text-[clamp(0.95rem,2vw,1rem)] leading-relaxed text-zinc-300">
                {language === "en"
                  ? (principlesEn[activePrinciple.id]?.detail ?? activePrinciple.detail)
                  : activePrinciple.detail}
              </p>
              <p className="mt-4 text-sm text-zinc-500">{t.modalNote}</p>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={goToPrevious}
                  disabled={!hasPrevious}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t.prev}
                </button>

                <p className="text-xs tracking-[0.12em] text-zinc-500">
                  {activeIndex + 1} / {principles.length}
                </p>

                <button
                  type="button"
                  onClick={goToNext}
                  disabled={!hasNext}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  {t.next}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function PrincipleCard({
  language,
  principle,
  onClick
}: {
  language: Language;
  principle: Principle;
  onClick: () => void;
}) {
  const title = language === "en" ? (principlesEn[principle.id]?.title ?? principle.title) : principle.title;
  const statement =
    language === "en" ? (principlesEn[principle.id]?.statement ?? principle.statement) : principle.statement;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      className={`crystal-card p-5 text-left transition ${sphereStyles[principle.sphere]} hover:-translate-y-0.5 hover:border-white/40`}
    >
      <p className="text-xs uppercase tracking-[0.14em] text-zinc-300">ID {principle.id}</p>
      <h4 className="mt-2 font-serif text-xl text-zinc-100">{title}</h4>
      <p className="mt-3 line-clamp-3 text-sm text-zinc-300">{statement}</p>
    </motion.button>
  );
}
