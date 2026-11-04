"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Language } from "@/lib/i18n";
import { principlesEn } from "@/lib/principles-en";
import { principles, spheres, type Principle } from "@/lib/principles";

const spherePalette = [
  "border-soul-gold/30 bg-soul-gold/10",
  "border-cyan-400/30 bg-cyan-400/10",
  "border-indigo-400/30 bg-indigo-400/10",
  "border-emerald-400/30 bg-emerald-400/10",
  "border-quantum-cyan/30 bg-quantum-cyan/10",
  "border-amber-200/30 bg-amber-200/10",
  "border-emerald-300/30 bg-emerald-300/10",
  "border-soul-gold/40 bg-soul-gold/15",
  "border-indigo-300/30 bg-indigo-300/10",
  "border-cyan-300/30 bg-cyan-300/10",
  "border-teal-300/30 bg-teal-300/10",
  "border-white/15 bg-white/5"
] as const;

function sphereStyle(sphere: string) {
  const index = spheres.indexOf(sphere as (typeof spheres)[number]);
  return spherePalette[index] ?? spherePalette[0];
}

const sphereLabels: Record<string, Record<Language, string>> = {
  "WER DU BIST": { en: "Who you are", de: "Wer du bist" },
  "WOHER DU KOMMST": { en: "Where you come from", de: "Woher du kommst" },
  "MIT WEM DU REIST": { en: "Who you travel with", de: "Mit wem du reist" },
  "DIE GEGENWART UND DIE INNERE STIMME": {
    en: "The present and the inner voice",
    de: "Die Gegenwart und die innere Stimme"
  },
  "WIE DU DEIN LEBEN GESTALTEST": { en: "How you shape your life", de: "Wie du dein Leben gestaltest" },
  "DAS GRÖSSERE BILD": { en: "The bigger picture", de: "Das größere Bild" },
  "DIE ARBEIT AM CHARAKTER": { en: "The work on character", de: "Die Arbeit am Charakter" },
  "DIE EINHEIT UND DIE LIEBE": { en: "Oneness and love", de: "Die Einheit und die Liebe" },
  "DIE VERBINDUNG ZU ANDEREN": { en: "Connection with others", de: "Die Verbindung zu anderen" },
  "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL": {
    en: "Community, civilization and potential",
    de: "Die Gemeinschaft, die Zivilisation und das Potenzial"
  },
  "DIE WISSENSCHAFT DES WACHSTUMS": { en: "The science of growth", de: "Die Wissenschaft des Wachstums" },
  "DAS OFFENE WELTBILD": { en: "An open worldview", de: "Das offene Weltbild" }
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

const downloads = [
  {
    href: "/downloads/alethemora-lebensphilosophie-de.pdf",
    fileName: "alethemora-lebensphilosophie-de.pdf",
    languageLabel: "Deutsch",
    format: "PDF"
  },
  {
    href: "/downloads/alethemora-lebensphilosophie-de.epub",
    fileName: "alethemora-lebensphilosophie-de.epub",
    languageLabel: "Deutsch",
    format: "EPUB"
  },
  {
    href: "/downloads/alethemora-philosophy-of-life-en.pdf",
    fileName: "alethemora-philosophy-of-life-en.pdf",
    languageLabel: "English",
    format: "PDF"
  },
  {
    href: "/downloads/alethemora-philosophy-of-life-en.epub",
    fileName: "alethemora-philosophy-of-life-en.epub",
    languageLabel: "English",
    format: "EPUB"
  }
] as const;

const sectionCopy = {
  en: {
    badge: "49 PRINCIPLES",
    meaning:
      "Alethemora thus means: the truth of one’s own destiny—the remembering of the life the soul has chosen.",
    name:
      "The name Alethemora goes back to two Greek words. Aletheia means truth. Literally, it means the unconcealed, the not-forgotten: the word is formed from the negating a- and lethe, forgetting. Moira is one’s allotted share—the lot of a life, destiny.",
    conviction:
      "This way of life is grounded in one conviction: we are immortal souls who have consciously chosen to experience, in this life, exactly the challenges, people and circumstances that help us grow. None of it happens meaninglessly or by chance.",
    map: "It is a map, not a dogma—a hope that is tested in lived practice, not in blind confession.",
    title: "The Principles — The Path to a Higher Being",
    intro:
      "These principles are meant to be read as a personal creed—as what a person sets out to live, not as a scientifically proven statement about the world. No rules. No dogmas. These principles describe the structure of conscious development. Choose one and open up its full meaning.",
    modalNote: "A personal creed—not a scientifically proven statement about the world.",
    prev: "Previous",
    next: "Next",
    principle: "Principle",
    principleInTheme: "principle in this theme",
    principlesInTheme: "principles in this theme",
    bookTitle: "The book",
    bookLead:
      "Alethemora — A Philosophy of Life for a Higher Civilization. The full manuscript, in German and English."
  },
  de: {
    badge: "49 PRINZIPIEN",
    meaning:
      "Alethemora heißt damit: die Wahrheit des eigenen Schicksals — die Erinnerung an das Leben, das die Seele gewählt hat.",
    name:
      "Der Name Alethemora geht auf zwei griechische Wörter zurück. Aletheia heißt Wahrheit. Wörtlich bedeutet es das Unverborgene, das Nicht-Vergessene: Das Wort setzt sich zusammen aus der Verneinung a- und lethe, dem Vergessen. Moira ist der zugeteilte Anteil, das Lebenslos, das Schicksal.",
    conviction:
      "Diese Lebensweise gründet sich auf dieser Überzeugung: Wir sind unsterbliche Seelen, die sich bewusst dafür entschieden haben, in diesem Leben genau die Herausforderungen, Menschen und Umstände zu erfahren, die uns wachsen lassen. Nichts davon geschieht sinnlos oder zufällig.",
    map: "Sie ist eine Landkarte, kein Dogma — eine Hoffnung, die sich in gelebter Praxis prüft, nicht in blindem Bekenntnis.",
    title: "Die Prinzipien — Der Weg zum höheren Wesen",
    intro:
      "Diese Prinzipien sind als persönliches Credo zu lesen — als das, was ein Mensch sich vornimmt zu leben, nicht als wissenschaftlich bewiesene Aussage über die Welt. Keine Regeln. Keine Dogmen. Diese Prinzipien beschreiben die Struktur bewusster Entwicklung. Wähle eines und öffne die volle Bedeutung.",
    modalNote: "Ein persönliches Credo — keine wissenschaftlich bewiesene Aussage über die Welt.",
    prev: "Vorheriges",
    next: "Nächstes",
    principle: "Prinzip",
    principleInTheme: "Prinzip in diesem Thema",
    principlesInTheme: "Prinzipien in diesem Thema",
    bookTitle: "Das Buch",
    bookLead:
      "Alethemora — Eine Lebensphilosophie für eine höhere Zivilisation. Das Manuskript, auf Deutsch und auf Englisch."
  }
} as const;

function principleCopy(language: Language, principle: Principle) {
  if (language === "en") {
    const english = principlesEn[principle.id];
    return {
      statement: english?.statement ?? principle.statement,
      detail: english?.detail ?? principle.detail
    };
  }
  return { statement: principle.statement, detail: principle.detail };
}

export function PrinciplesSection({ language }: { language: Language }) {
  const t = sectionCopy[language];
  const [activeId, setActiveId] = useState<number | null>(null);
  const [openSphere, setOpenSphere] = useState<string | null>(() => spheres[0] ?? null);

  const activePrinciple = useMemo(
    () => principles.find((principle) => principle.id === activeId) ?? null,
    [activeId]
  );
  const activeText = activePrinciple ? principleCopy(language, activePrinciple) : null;
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

      <div className="mb-10 max-w-3xl">
        <span className="rounded-full border border-soul-gold/40 bg-soul-gold/10 px-3 py-1 text-xs tracking-[0.16em] text-soul-gold">
          {t.badge}
        </span>
        <p className="mt-4 font-serif text-2xl leading-snug text-zinc-100 sm:text-3xl">{t.meaning}</p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{t.name}</p>
        <p className="mt-4 leading-relaxed text-zinc-300">{t.conviction}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{t.map}</p>
        <h2 className="mt-10 font-serif text-3xl text-zinc-100 sm:text-4xl">{t.title}</h2>
        <p className="mt-3 text-zinc-300">{t.intro}</p>
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
                className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-white/[0.04] sm:px-5 sm:py-5 ${sphereStyle(sphere)}`}
              >
                <div className="min-w-0">
                  <h3 className="font-serif text-lg leading-snug text-zinc-100 sm:text-2xl">
                    {sphereLabels[sphere][language]}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    {items.length} {items.length === 1 ? t.principleInTheme : t.principlesInTheme}
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

      <div id="buch" className="mt-12 rounded-2xl border border-soul-gold/25 bg-charcoal/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
        <h3 className="font-serif text-2xl text-zinc-100 sm:text-3xl">{t.bookTitle}</h3>
        <p className="mt-3 max-w-3xl text-zinc-300">{t.bookLead}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {downloads.map((item) => (
            <a
              key={item.href}
              href={item.href}
              download={item.fileName}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-zinc-100 transition hover:border-soul-gold/40 hover:bg-soul-gold/10"
            >
              <span>
                <span className="block font-serif text-lg">{item.languageLabel}</span>
                <span className="mt-1 block text-xs tracking-[0.16em] text-soul-gold">{item.format}</span>
              </span>
              <Download className="h-4 w-4 shrink-0 text-soul-gold/80 transition group-hover:text-soul-gold" aria-hidden />
            </a>
          ))}
        </div>
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
                    className={`rounded-full border px-3 py-1 text-xs tracking-[0.12em] text-zinc-100 ${sphereStyle(activePrinciple.sphere)}`}
                  >
                    {sphereLabels[activePrinciple.sphere][language].toUpperCase()}
                  </span>
                  <p className="mt-4 text-sm text-zinc-400">
                    {t.principle} {activePrinciple.id}
                  </p>
                  <h4 className="mt-1 font-serif text-[clamp(1.3rem,2.7vw,1.8rem)] leading-snug text-zinc-100">
                    {activeText?.statement}
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

              <p className="mt-6 whitespace-pre-line text-[clamp(0.95rem,2vw,1rem)] leading-relaxed text-zinc-300">
                {activeText?.detail}
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
  const { statement } = principleCopy(language, principle);
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      className={`crystal-card p-5 text-left transition ${sphereStyle(principle.sphere)} hover:-translate-y-0.5 hover:border-white/40`}
    >
      <p className="text-xs uppercase tracking-[0.14em] text-zinc-300">ID {principle.id}</p>
      <h4 className="mt-2 line-clamp-4 font-serif text-lg leading-snug text-zinc-100">{statement}</h4>
    </motion.button>
  );
}
