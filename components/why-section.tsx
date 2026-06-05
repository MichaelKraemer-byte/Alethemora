"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import {
  Sunrise,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crown,
  Heart,
  MoonStar,
  Mountain,
  UserRound,
  X,
  type LucideIcon
} from "lucide-react";
import type { BeliefPhaseKey } from "@/components/belief-phase-visual";
import { SoulThreadJourney } from "@/components/soul-thread-journey";
import {
  getResearchCategories,
  getResearchersByCategory,
  type ResearchCategoryId,
  type ResearcherProfile
} from "@/lib/belief-researchers";
import type { Language } from "@/lib/i18n";

const phaseIcons: readonly LucideIcon[] = [Heart, MoonStar, UserRound, Mountain, Sunrise, Crown] as const;

const phaseKeys: readonly BeliefPhaseKey[] = [
  "source",
  "soulWorld",
  "incarnation",
  "earthly",
  "frequency",
  "mastery"
] as const;

const categoryStyles: Record<ResearchCategoryId, string> = {
  lbl: "border-soul-gold/35 bg-soul-gold/10 text-soul-gold",
  reincarnation: "border-indigo-400/35 bg-indigo-400/10 text-indigo-200",
  nde: "border-cyan-400/35 bg-cyan-400/10 text-cyan-200"
};

const uiCopy = {
  en: {
    badge: "WHAT WE BELIEVE",
    title: "What we believe — and how we live",
    intro:
      "Alethemora is a life philosophy and a lived path: consciousness continues, growth is intentional, and everyday life is where soul maturity becomes visible. Soul continuity is our working model — grounded in research, tested in practice.",
    introExpand:
      "Life-between-lives regression, child reincarnation cases, and near-death research point in the same direction across independent methods. From that emerges a coherent path: principles, practice, rhythm, and community. Openness to deeper truth guides how we learn and grow.",
    threadLabel: "The thread in six steps",
    researchersTitle: "Research lines",
    researchersHint: "Pick a field — tap a name for the full profile. Swipe or use arrows in the dialog.",
    worksLabel: "Key works",
    findingsLabel: "Core findings",
    convergenceLabel: "Why it matters for Alethemora",
    modalSwipeHint: "Swipe left or right to browse researchers in this field.",
    prev: "Previous",
    next: "Next",
    expandStep: "Go deeper",
    collapseStep: "Show less",
    evidenceLabel: "Research",
    practiceLabel: "For your life",
    steps: [
      {
        title: "Source",
        summary: "Before birth: a luminous origin from which every soul emerges.",
        journeyText:
          "The Source is not a place but an ocean of consciousness and love. Countless souls stream forth — yours consciously detaches and becomes the soul of this path.",
        corePoints: [
          "Your soul carries a signature before any biography begins.",
          "LBL and NDE research converge on the same source-light.",
          "Life gains direction when understood as expression — not random noise."
        ]
      },
      {
        title: "Soul world",
        summary: "Between lives: healing, soul family, and planning in soft realms of light.",
        journeyText:
          "Newton describes pastel realms of layered resonance — healing, soul groups, councils, and life libraries. Your soul arrives here; what you learn on Earth ripens in relationship.",
        corePoints: [
          "Vibrational layers: healing, companionship, resonance, and guidance.",
          "Soul groups and teachers shape the arc between incarnations.",
          "You never learn alone — growth is guided and collective."
        ]
      },
      {
        title: "Chosen life",
        summary: "The soul consciously chooses family, frame, and trials as curriculum.",
        journeyText:
          "Here the soul decides: which family ring, which conditions, which trials — not as punishment, but as training for specific capacities.",
        corePoints: [
          "Hard lives often train compassion, courage, and sovereignty.",
          "LBL sessions describe precise pre-birth planning with the soul ring.",
          "Responsibility without guilt — difficulty as training, not victimhood."
        ]
      },
      {
        title: "Earth school",
        summary: "Daily life is the classroom — relationships mirror what still seeks integration.",
        journeyText:
          "The body and everyday friction are not obstacles to escape — they are the forge where insight becomes character.",
        corePoints: [
          "Limits, loss, and relationship mirror open themes.",
          "Cross-case reincarnation and NDE literature show recurring relational loads.",
          "Insight matures only where it meets real resistance."
        ]
      },
      {
        title: "The Return",
        summary: "After death the soul comes home — life review, healing, and reunion with the spirit world.",
        journeyText:
          "Incarnation ends; the soul releases the body and ascends. Newton, NDE research, and LBL literature describe the same arc: passage into light, life review from every affected perspective, reunion with soul family and guides — not punishment, but honest reckoning held in love.",
        corePoints: [
          "The crossing: releasing the body, rising into light, healing in spheres of resonance.",
          "Life review: you see your life — and how it landed in others — from the inside.",
          "Return means understanding, forgiving, and planning anew — before you choose to go again."
        ]
      },
      {
        title: "Soul maturity",
        summary: "Mature love and greater service — guidance, creation, and ascent into the soul's higher roles.",
        journeyText:
          "Reincarnation is not a meaningless loop: it wears down ego, deepens compassion, and prepares the soul for work larger than one lifespan. Newton maps advanced souls as spirit guides, teachers, and council members; Cannon's subjects describe councils and creation spheres where mature souls co-design worlds, life forms, and learning paths with others.",
        corePoints: [
          "Mastery of love: clear, serving understanding — not sentiment, not attachment.",
          "New tasks: become a soul guide, serve on councils of wise beings, help others plan lives.",
          "Highest reaches: co-create planets, species, and new paths of evolution — maturity as creative responsibility."
        ]
      }
    ]
  },
  de: {
    badge: "WORAN WIR GLAUBEN",
    title: "Woran wir glauben — und wie wir leben",
    intro:
      "Alethemora ist Lebensphilosophie und gelebter Weg: Bewusstsein setzt sich fort, Reifung ist intentionell, und der Alltag ist der Ort, an dem Seelenreife sichtbar wird. Seelenkontinuität ist unser Arbeitsmodell — in Forschung verankert, in Praxis geprüft.",
    introExpand:
      "LBL-Regression, Kinder-Reinkarnationsfälle und Nahtoderfahrungsforschung weisen über unabhängige Methoden hinweg in dieselbe Richtung. Daraus entsteht ein stimmiger Weg: Prinzipien, Praxis, Rhythmus und Gemeinschaft. Offenheit für tiefere Wahrheit prägt, wie wir lernen und wachsen.",
    threadLabel: "Der Faden in sechs Schritten",
    researchersTitle: "Forschungslinien",
    researchersHint:
      "Feld wählen — Name antippen für das vollständige Profil. Im Dialog wischen oder Pfeile nutzen.",
    worksLabel: "Wichtige Werke",
    findingsLabel: "Kern-Erkenntnisse",
    convergenceLabel: "Warum das für Alethemora zählt",
    modalSwipeHint: "Wische links/rechts, um Forscher in diesem Feld zu durchblättern.",
    prev: "Vorheriger",
    next: "Nächster",
    expandStep: "Mehr erfahren",
    collapseStep: "Weniger anzeigen",
    evidenceLabel: "Forschung",
    practiceLabel: "Für dein Leben",
    steps: [
      {
        title: "Quelle",
        summary: "Vor der Geburt: ein lichtvoller Urgrund, aus dem jede Seele hervorgeht.",
        journeyText:
          "Die Quelle ist kein Ort — ein Meer aus Bewusstsein und Liebe. Unzählige Seelen strömen hervor; deine löst sich bewusst ab und wird zur Seele auf diesem Faden.",
        corePoints: [
          "Die Seele trägt eine Signatur, bevor es eine Biografie gibt.",
          "LBL- und NDE-Forschung konvergieren auf dasselbe Quellenlicht.",
          "Leben gewinnt Richtung, wenn es Ausdruck ist — nicht zufälliges Rauschen."
        ]
      },
      {
        title: "Geistige Welt",
        summary: "Zwischen den Leben: Heilung, Seelengruppe und Planung in sanften Lichtwelten.",
        journeyText:
          "Newton beschreibt Pastellwelten aus Schichten und Resonanzen — Heilung, Seelengruppen, Räte und Lebensbibliotheken. Hier reift, was du auf Erden lernst.",
        corePoints: [
          "Schichten der Resonanz: Heilung, Gemeinschaft, Resonanz, Führung.",
          "Seelengruppen und Lehrer formen den Bogen zwischen Inkarnationen.",
          "Du lernst nie allein — Reifung geschieht in Beziehung."
        ]
      },
      {
        title: "Gewähltes Leben",
        summary: "Die Seele wählt bewusst Familie, Rahmen und Prüfungen als Lehrplan.",
        journeyText:
          "Hier entscheidet die Seele: welcher Familienring, welche Bedingungen, welche Prüfungen — nicht als Strafe, sondern als Training bestimmter Fähigkeiten.",
        corePoints: [
          "Schwere Leben trainieren Mitgefühl, Mut und Souveränität.",
          "LBL-Sitzungen beschreiben präzise Geburtsplanung mit dem Seelenring.",
          "Verantwortung ohne Schuld — Schwierigkeit als Training, nicht Opferrolle."
        ]
      },
      {
        title: "Erdenschule",
        summary: "Der Alltag ist Klassenzimmer — Beziehungen spiegeln, was noch reift.",
        journeyText:
          "Körper und Alltagsreibung sind keine Fluchtobjekte — sie sind die Schmiede, in der Einsicht zu Charakter wird.",
        corePoints: [
          "Grenze, Verlust und Beziehung spiegeln offene Themen.",
          "Reinkarnations- und NDE-Literatur zeigt wiederkehrende Beziehungslasten.",
          "Einsicht reift nur dort, wo sie auf echte Reibung trifft."
        ]
      },
      {
        title: "Die Rückkehr",
        summary: "Nach dem Tod kehrt die Seele heim — Life Review, Heilung und Wiederanbindung an die geistige Welt.",
        journeyText:
          "Die Inkarnation endet; die Seele löst sich vom Körper und steigt zurück. Newton, NDE-Forschung und LBL-Literatur beschreiben denselben Bogen: Übergang ins Licht, Life Review aus der Perspektive aller Betroffenen, Begegnung mit Seelengruppe und Führern — nicht als Strafe, sondern als ehrliche Bilanz in Liebe.",
        corePoints: [
          "Der Übergang: Loslassen des Körpers, Aufstieg ins Licht, Heilung in Resonanzzonen.",
          "Life Review: du siehst dein Leben — und seine Wirkung auf andere — von innen.",
          "Rückkehr heißt: verstehen, vergeben, neu planen — bevor du dich erneut auf den Weg machst."
        ]
      },
      {
        title: "Seelenreife",
        summary: "Reife Liebe, größerer Dienst — Führung, Schöpfung und Aufstieg in höhere Rollen der Seele.",
        journeyText:
          "Reinkarnation ist kein sinnloser Kreislauf: Sie schleift das Ego ab, vertieft Mitgefühl und bereitet die Seele auf Aufgaben vor, die größer sind als ein Leben. Newton beschreibt fortgeschrittene Seelen als Geistführer, Lehrer und Ratsmitglieder; Cannon berichtet von Räten und Schöpfungszonen, in denen reife Seelen gemeinsam Welten, Lebensformen und Lernpfade entwerfen.",
        corePoints: [
          "Meisterschaft in Liebe: klares, dienendes Verstehen — nicht Sentimentalität, nicht Anhaftung.",
          "Neue Aufgaben: Seelenführer werden, im Rat der Weisen mitwirken, anderen bei der Lebensplanung helfen.",
          "Höchste Stufen: mit anderen Seelen Planeten, Spezies und Entwicklungsbahnen miterschaffen — Reife als Schöpferverantwortung."
        ]
      }
    ]
  }
} as const;

export function WhySection({ language }: { language: Language }) {
  const t = uiCopy[language];
  const categories = getResearchCategories(language);

  const [introOpen, setIntroOpen] = useState(false);
  const [researchCategory, setResearchCategory] = useState<ResearchCategoryId>("lbl");
  const [activeResearcherId, setActiveResearcherId] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  const categoryResearchers = useMemo(
    () => getResearchersByCategory(language, researchCategory),
    [language, researchCategory]
  );

  const activeResearcher = useMemo(
    () => categoryResearchers.find((r) => r.id === activeResearcherId) ?? null,
    [categoryResearchers, activeResearcherId]
  );

  const activeResearcherIndex = useMemo(
    () => categoryResearchers.findIndex((r) => r.id === activeResearcherId),
    [categoryResearchers, activeResearcherId]
  );

  const hasPreviousResearcher = activeResearcherIndex > 0;
  const hasNextResearcher = activeResearcherIndex >= 0 && activeResearcherIndex < categoryResearchers.length - 1;

  const goToPreviousResearcher = useCallback(() => {
    if (!hasPreviousResearcher) return;
    setActiveResearcherId(categoryResearchers[activeResearcherIndex - 1]!.id);
  }, [hasPreviousResearcher, categoryResearchers, activeResearcherIndex]);

  const goToNextResearcher = useCallback(() => {
    if (!hasNextResearcher) return;
    setActiveResearcherId(categoryResearchers[activeResearcherIndex + 1]!.id);
  }, [hasNextResearcher, categoryResearchers, activeResearcherIndex]);

  function handleResearcherSwipe(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    const threshold = 72;
    if (info.offset.x <= -threshold && hasNextResearcher) goToNextResearcher();
    if (info.offset.x >= threshold && hasPreviousResearcher) goToPreviousResearcher();
  }

  useEffect(() => {
    setActiveResearcherId(null);
  }, [researchCategory]);

  useEffect(() => {
    if (!activeResearcher) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveResearcherId(null);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPreviousResearcher();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNextResearcher();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeResearcher, goToNextResearcher, goToPreviousResearcher]);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const centerY = window.innerHeight * 0.5;
      let closestIdx = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((node, idx) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height * 0.5 - centerY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveStep(closestIdx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function scrollToStep(idx: number) {
    stepRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function openResearcher(id: string) {
    setActiveResearcherId(id);
  }

  return (
    <section id="why" ref={sectionRef} className="section-shell overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-16 h-56 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.07),transparent_65%)]" aria-hidden />

      <header className="relative mb-8 max-w-3xl">
        <span className="rounded-full border border-soul-gold/40 bg-soul-gold/10 px-3 py-1 text-xs tracking-[0.16em] text-soul-gold">
          {t.badge}
        </span>
        <h2 className="mt-3 font-serif text-3xl text-zinc-100 sm:text-4xl">{t.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-300">{t.intro}</p>
        <button
          type="button"
          onClick={() => setIntroOpen((o) => !o)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-soul-gold/90 transition hover:text-soul-gold"
          aria-expanded={introOpen}
        >
          {introOpen ? t.collapseStep : t.expandStep}
          <ChevronDown className={`h-4 w-4 transition ${introOpen ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence initial={false}>
          {introOpen ? (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 overflow-hidden text-sm leading-relaxed text-zinc-400"
            >
              {t.introExpand}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </header>

      <div className="mb-8 rounded-2xl border border-white/10 bg-charcoal/55 p-4 backdrop-blur-sm sm:p-5">
        <div>
          <h3 className="font-serif text-lg text-zinc-100">{t.researchersTitle}</h3>
          <p className="mt-0.5 text-xs text-zinc-500">{t.researchersHint}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label={t.researchersTitle}>
          {categories.map((cat) => {
            const active = researchCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setResearchCategory(cat.id)}
                className={`rounded-full border px-3 py-1.5 text-xs transition sm:text-sm ${
                  active
                    ? "border-soul-gold/50 bg-soul-gold/15 text-soul-gold"
                    : "border-white/10 bg-black/30 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                }`}
              >
                <span className="font-medium">{cat.label}</span>
                <span className="ml-1.5 hidden text-zinc-500 sm:inline">· {cat.short}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={researchCategory}
            role="tabpanel"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categoryResearchers.map((researcher) => (
              <ResearcherChip key={researcher.id} researcher={researcher} onOpen={() => openResearcher(researcher.id)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mb-5">
        <p className="text-xs tracking-[0.14em] text-zinc-500">{t.threadLabel}</p>
        <div className="mt-2 flex gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {t.steps.map((step, idx) => {
            const Icon = phaseIcons[idx]!;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => scrollToStep(idx)}
                title={step.title}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] transition sm:px-3 sm:text-xs ${
                  isActive
                    ? "border-soul-gold/45 bg-soul-gold/10 text-soul-gold"
                    : "border-white/10 bg-black/20 text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Icon className="h-3 w-3" strokeWidth={1.75} />
                <span className="max-w-[5.5rem] truncate sm:max-w-none">{step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-visible">
        <SoulThreadJourney
          steps={t.steps}
          phaseKeys={phaseKeys}
          phaseIcons={phaseIcons}
          activeStep={activeStep}
          hoveredStep={hoveredStep}
          onHoverStep={setHoveredStep}
          stepRefs={stepRefs}
        />
      </div>

      <AnimatePresence>
        {activeResearcher ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-3 backdrop-blur-md sm:p-4"
            onClick={() => setActiveResearcherId(null)}
          >
            <motion.div
              key={activeResearcher.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={handleResearcherSwipe}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-charcoal p-5 shadow-2xl sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs tracking-[0.12em] ${categoryStyles[activeResearcher.category]}`}
                  >
                    {categories.find((c) => c.id === activeResearcher.category)?.label.toUpperCase()}
                  </span>
                  <h4 className="mt-4 font-serif text-[clamp(1.35rem,2.8vw,1.9rem)] text-zinc-100">{activeResearcher.name}</h4>
                  <p className="mt-1 text-sm text-zinc-400">{activeResearcher.tag}</p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-full border border-white/20 p-2 text-zinc-300 transition hover:text-white"
                  onClick={() => setActiveResearcherId(null)}
                  aria-label={t.collapseStep}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-5 text-[clamp(0.95rem,2.1vw,1.05rem)] leading-relaxed text-zinc-200">{activeResearcher.teaser}</p>

              <div className="mt-6 space-y-5">
                <section>
                  <h5 className="text-xs tracking-[0.14em] text-soul-gold">{t.worksLabel}</h5>
                  <ul className="mt-3 space-y-2">
                    {activeResearcher.works.map((work) => (
                      <li key={work} className="flex gap-2 text-sm leading-relaxed text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-soul-gold/80" />
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h5 className="text-xs tracking-[0.14em] text-quantum-cyan">{t.findingsLabel}</h5>
                  <ul className="mt-3 space-y-2">
                    {activeResearcher.findings.map((finding) => (
                      <li key={finding} className="flex gap-2 text-sm leading-relaxed text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-quantum-cyan/80" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl border border-white/10 bg-black/25 p-4">
                  <h5 className="text-xs tracking-[0.14em] text-zinc-400">{t.convergenceLabel}</h5>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-200">{activeResearcher.convergence}</p>
                </section>
              </div>

              <p className="mt-5 text-xs text-zinc-500">{t.modalSwipeHint}</p>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={goToPreviousResearcher}
                  disabled={!hasPreviousResearcher}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t.prev}
                </button>

                <p className="text-xs tracking-[0.12em] text-zinc-500">
                  {activeResearcherIndex + 1} / {categoryResearchers.length}
                </p>

                <button
                  type="button"
                  onClick={goToNextResearcher}
                  disabled={!hasNextResearcher}
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

function ResearcherChip({ researcher, onOpen }: { researcher: ResearcherProfile; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className="crystal-card rounded-xl p-3 text-left transition hover:border-white/25"
    >
      <p className="font-serif text-sm text-zinc-100 sm:text-base">{researcher.name}</p>
      <p className="mt-0.5 text-[10px] tracking-[0.1em] text-zinc-500">{researcher.tag}</p>
      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-400">{researcher.teaser}</p>
    </motion.button>
  );
}
