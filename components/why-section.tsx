"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Crown, Heart, MoonStar, Mountain, UserRound, type LucideIcon } from "lucide-react";
import type { Language } from "@/lib/i18n";

const phaseIcons: readonly LucideIcon[] = [
  Heart,
  MoonStar,
  UserRound,
  Mountain,
  Activity,
  Crown
] as const;

const copy = {
  en: {
    badge: "THE WHY",
    title: "Soul mastery in the context of reincarnation",
    intro:
      "Alethemora frames life as a conscious school of the soul. We emerge from source, enter incarnation by choice, learn through challenge, and refine our vibration into alignment, balance, and coherent presence.",
    flowTitle: "The path in six phases",
    why: "Why this phase matters",
    scrollHint: "Scroll to move through the phases.",
    steps: [
      {
        title: "Source",
        core: "Your soul emerges from source-consciousness with a unique signature.",
        why: "Identity begins deeper than biography. This gives life direction beyond random events."
      },
      {
        title: "Soul world",
        core: "Between incarnations, learning fields are reviewed with soul teachers and the soul group.",
        why: "Growth is relational and guided, not isolated. Development follows intelligent structure."
      },
      {
        title: "Conscious incarnation",
        core: "Challenging conditions are chosen to strengthen specific capacities.",
        why: "Difficulty is reframed from punishment to curriculum, from victimhood to responsibility."
      },
      {
        title: "Earthly lessons",
        core: "Relationships, limits, loss, desire, and duty become mirrors for integration.",
        why: "Without embodied lessons, insight stays abstract and does not become mastery."
      },
      {
        title: "Frequency alignment",
        core: "Dissonance can be transformed into balance through silence, truth, and service.",
        why: "High vibration is coherence in action, not emotional euphoria."
      },
      {
        title: "Return in mastery",
        core: "Embodied coherence becomes stable wisdom beyond this life.",
        why: "Every aligned act has trans-life value and expands your capacity for greater tasks."
      }
    ]
  },
  de: {
    badge: "DAS WARUM",
    title: "Seelenmeisterschaft im Kontext der Reinkarnation",
    intro:
      "Alethemora versteht das Leben als bewusste Schule der Seele. Wir entspringen der Quelle, inkarnieren aus Wahl, lernen durch Herausforderung und verfeinern unsere Schwingung in Richtung Einklang, Balance und kohärente Präsenz.",
    flowTitle: "Der Weg in sechs Phasen",
    why: "Warum diese Phase wichtig ist",
    scrollHint: "Scrolle, um die Phasen nacheinander zu durchlaufen.",
    steps: [
      {
        title: "Quelle",
        core: "Deine Seele entspringt dem Quellbewusstsein und trägt eine einzigartige Signatur.",
        why: "Identität beginnt tiefer als Biografie. Das gibt dem Leben Richtung jenseits von Zufall."
      },
      {
        title: "Geistige Welt",
        core: "Zwischen Inkarnationen werden Lernfelder mit Seelenlehrern und der Seelengruppe betrachtet.",
        why: "Reifung ist geführt und relational, nicht isoliert. Entwicklung folgt einer intelligenten Ordnung."
      },
      {
        title: "Bewusste Wahl",
        core: "Ein herausforderndes Leben wird gewählt, um konkrete Fähigkeiten zu vertiefen.",
        why: "Schwierigkeit wird vom Strafnarrativ zum Lehrplan - von Opferhaltung zu Verantwortung."
      },
      {
        title: "Erdenschule",
        core: "Beziehung, Grenze, Verlust, Wunsch und Pflicht werden zu Spiegeln für Integration.",
        why: "Ohne verkörperte Lektionen bleibt Erkenntnis abstrakt und wird nicht zu Meisterschaft."
      },
      {
        title: "Schwingungsabgleich",
        core: "Dissonanz kann durch Stille, Wahrheit und Dienst in Balance verwandelt werden.",
        why: "Hohe Schwingung ist Kohärenz im Handeln, nicht emotionale Dauer-Euphorie."
      },
      {
        title: "Rückkehr mit Meisterschaft",
        core: "Verkörperte Kohärenz wird über dieses Leben hinaus zu stabiler Weisheit.",
        why: "Jede ausgerichtete Handlung hat trans-lebensbezogenen Wert und erweitert deine Aufgabe."
      }
    ]
  }
} as const;

export function WhySection({ language }: { language: Language }) {
  const t = copy[language];
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredNavStep, setHoveredNavStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const stepCount = t.steps.length;

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const centerY = window.innerHeight * 0.42;
      let closestIdx = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((node, idx) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const nodeCenter = rect.top + rect.height * 0.5;
        const distance = Math.abs(nodeCenter - centerY);
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

  const displayStep = hoveredNavStep ?? activeStep;
  const progress = useMemo(() => (displayStep / (stepCount - 1 || 1)) * 100, [displayStep, stepCount]);

  function scrollToStep(idx: number) {
    const el = stepRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section id="why" ref={sectionRef} className="section-shell">
      <div className="mb-10">
        <span className="rounded-full border border-soul-gold/40 bg-soul-gold/10 px-3 py-1 text-xs tracking-[0.16em] text-soul-gold">
          {t.badge}
        </span>
        <h2 className="mt-4 font-serif text-3xl text-zinc-100 sm:text-4xl">{t.title}</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">{t.intro}</p>
      </div>

      <div className="mb-8 rounded-2xl border border-white/10 bg-charcoal/60 p-4 backdrop-blur-sm sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs tracking-[0.16em] text-zinc-500">{t.flowTitle}</p>
            <p className="mt-1 text-sm text-zinc-300">
              {t.steps[displayStep].title}
              <span className="ml-2 text-zinc-500">
                ({String(displayStep + 1).padStart(2, "0")}/{String(stepCount).padStart(2, "0")})
              </span>
            </p>
          </div>
          <div
            className="flex flex-wrap items-center gap-1.5 sm:gap-2"
            onMouseLeave={() => setHoveredNavStep(null)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHoveredNavStep(null);
            }}
          >
            {t.steps.map((step, idx) => {
              const Icon = phaseIcons[idx]!;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;
              const isHoverPreview = hoveredNavStep === idx;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => {
                    setHoveredNavStep(null);
                    scrollToStep(idx);
                  }}
                  onMouseEnter={() => setHoveredNavStep(idx)}
                  onFocus={() => setHoveredNavStep(idx)}
                  aria-label={`${step.title}`}
                  aria-current={isActive ? "step" : undefined}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition sm:h-10 sm:w-10 ${
                    isHoverPreview && !isActive
                      ? "border-quantum-cyan/55 bg-quantum-cyan/15 text-quantum-cyan shadow-[0_0_16px_rgba(0,229,255,0.25)] active:scale-95"
                      : isActive
                        ? "border-soul-gold/70 bg-soul-gold/20 text-soul-gold shadow-[0_0_18px_rgba(212,175,55,0.35)]"
                        : isPast
                          ? "border-white/20 bg-white/5 text-zinc-300 hover:border-white/35 active:scale-95"
                          : "border-white/10 bg-black/30 text-zinc-500 hover:border-white/20 hover:text-zinc-400 active:scale-95"
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isActive || isHoverPreview ? "scale-110" : ""}`}
                    strokeWidth={isActive || isHoverPreview ? 2.25 : 1.75}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-3 h-1 rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-soul-gold to-quantum-cyan"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <p className="mt-2 text-xs text-zinc-500">{t.scrollHint}</p>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-[21px] top-8 bottom-8 w-px bg-gradient-to-b from-soul-gold/45 via-white/12 to-quantum-cyan/45 sm:left-[22px] md:left-[26px]"
          aria-hidden
        />

        <div className="space-y-6 sm:space-y-10">
          {t.steps.map((step, idx) => {
            const Icon = phaseIcons[idx]!;
            const isActive = activeStep === idx;
            const isPast = idx < activeStep;

            return (
              <div
                key={step.title}
                ref={(node) => {
                  stepRefs.current[idx] = node;
                }}
                className="relative flex gap-4 sm:gap-8"
              >
                <div className="relative z-10 flex shrink-0 flex-col items-center sm:w-14 md:w-16">
                  <motion.div
                    layout
                    animate={{
                      scale: isActive ? 1.08 : isPast ? 1 : 0.92,
                      opacity: isActive ? 1 : isPast ? 0.88 : 0.45
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className={`relative flex h-11 w-11 items-center justify-center rounded-full border sm:h-14 sm:w-14 ${
                      isActive
                        ? "border-soul-gold/75 bg-gradient-to-br from-soul-gold/25 to-black/40 text-soul-gold shadow-[0_0_28px_rgba(212,175,55,0.35)]"
                        : isPast
                          ? "border-white/25 bg-white/8 text-zinc-200"
                          : "border-white/12 bg-black/40 text-zinc-500"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${idx}-${isActive ? "on" : "off"}`}
                        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.85, rotate: 8 }}
                        transition={{ duration: 0.22 }}
                        className="flex items-center justify-center"
                      >
                        <Icon
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          strokeWidth={isActive ? 2.35 : isPast ? 2 : 1.65}
                        />
                      </motion.span>
                    </AnimatePresence>
                    {isActive ? (
                      <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-quantum-cyan/40 ring-offset-2 ring-offset-charcoal/80" />
                    ) : null}
                  </motion.div>
                </div>

                <motion.article
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className={`min-w-0 flex-1 rounded-2xl border p-5 sm:p-6 ${
                    isActive
                      ? "border-soul-gold/45 bg-gradient-to-br from-soul-gold/12 via-black/25 to-quantum-cyan/10 shadow-[0_0_36px_rgba(212,175,55,0.12)]"
                      : "border-white/10 bg-charcoal/70"
                  }`}
                >
                  <div className="mb-3">
                    <p className="text-xs tracking-[0.16em] text-zinc-500">{String(idx + 1).padStart(2, "0")}</p>
                  </div>
                  <h4 className="font-serif text-xl text-zinc-100 sm:text-2xl">{step.title}</h4>
                  <p className="mt-3 text-sm text-zinc-200 sm:text-base">{step.core}</p>

                  <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-4">
                    <p className="text-xs tracking-[0.14em] text-zinc-500">{t.why}</p>
                    <p className="mt-1 text-sm text-zinc-300">{step.why}</p>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
