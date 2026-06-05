"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { MutableRefObject } from "react";
import { BeliefPhaseVisual, journeySoulClassName, type BeliefPhaseKey } from "@/components/belief-phase-visual";
import {
  buildThreadPath,
  getThreadPoints,
  getThreadViewHeight,
  getSourceEmergenceOrigin,
  pointToPercent,
  THREAD_STEP_HEIGHT_DESKTOP,
  THREAD_STEP_HEIGHT_MOBILE
} from "@/lib/soul-thread-path";

function useThreadStepHeight() {
  const [stepHeight, setStepHeight] = useState(THREAD_STEP_HEIGHT_DESKTOP);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setStepHeight(media.matches ? THREAD_STEP_HEIGHT_DESKTOP : THREAD_STEP_HEIGHT_MOBILE);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return stepHeight;
}

export type ThreadStepData = {
  title: string;
  summary: string;
  journeyText: string;
  corePoints: readonly string[];
};

type SoulThreadJourneyProps = {
  steps: readonly ThreadStepData[];
  phaseKeys: readonly BeliefPhaseKey[];
  phaseIcons: readonly LucideIcon[];
  activeStep: number;
  hoveredStep: number | null;
  onHoverStep: (idx: number | null) => void;
  stepRefs: MutableRefObject<Array<HTMLDivElement | null>>;
};

export function SoulThreadJourney({
  steps,
  phaseKeys,
  phaseIcons,
  activeStep,
  hoveredStep,
  onHoverStep,
  stepRefs
}: SoulThreadJourneyProps) {
  const stepHeight = useThreadStepHeight();
  const points = useMemo(() => getThreadPoints(steps.length, stepHeight), [steps.length, stepHeight]);
  const viewHeight = useMemo(() => getThreadViewHeight(steps.length, stepHeight), [steps.length, stepHeight]);
  const pathD = useMemo(() => buildThreadPath(points), [points]);

  const [emerging, setEmerging] = useState(false);

  useEffect(() => {
    if (activeStep !== 0) {
      setEmerging(false);
      return;
    }
    setEmerging(true);
    const timer = window.setTimeout(() => setEmerging(false), 1400);
    return () => window.clearTimeout(timer);
  }, [activeStep]);

  const soulPoint =
    activeStep === 0 && emerging
      ? getSourceEmergenceOrigin(stepHeight)
      : (points[activeStep] ?? points[0]!);
  const soulPos = pointToPercent(soulPoint, viewHeight);

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox={`0 0 100 ${viewHeight}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="soul-thread-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,248,220,0.85)" />
            <stop offset="35%" stopColor="rgba(181,168,213,0.65)" />
            <stop offset="68%" stopColor="rgba(126,200,184,0.55)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.75)" />
          </linearGradient>
          <filter id="soul-thread-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={pathD}
          fill="none"
          stroke="url(#soul-thread-gradient)"
          strokeWidth="0.55"
          strokeLinecap="round"
          filter="url(#soul-thread-glow)"
          opacity={0.85}
        />

        {points.map((point, idx) => (
          <circle
            key={idx}
            cx={point.x}
            cy={point.y}
            r={idx === activeStep ? 0 : 0.85}
            fill={idx <= activeStep ? "rgba(212,175,55,0.45)" : "rgba(255,255,255,0.1)"}
          />
        ))}
      </svg>

      <motion.div
        className={`pointer-events-none absolute z-30 h-5 w-5 -translate-x-1/2 -translate-y-1/2 md:h-6 md:w-6 ${journeySoulClassName}`}
        animate={{
          left: soulPos.left,
          top: soulPos.top,
          scale: activeStep === 0 && emerging ? [0.15, 1.15, 1] : 1,
          opacity: activeStep === 0 && emerging ? [0.3, 1, 1] : 1
        }}
        transition={{
          left: { type: "spring", stiffness: activeStep === 0 && emerging ? 180 : 260, damping: 24 },
          top: { type: "spring", stiffness: activeStep === 0 && emerging ? 180 : 260, damping: 24 },
          scale: { duration: activeStep === 0 && emerging ? 1.4 : 0.3 },
          opacity: { duration: 1.2 }
        }}
        aria-hidden
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-white/30"
          animate={{ scale: [1, 1.45, 1], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
        />
      </motion.div>

      <div className="relative z-10">
        {steps.map((step, idx) => {
          const Icon = phaseIcons[idx]!;
          const phaseKey = phaseKeys[idx]!;
          const isActive = activeStep === idx;
          const isHovered = hoveredStep === idx;
          const visualLeft = idx % 2 === 0;

          return (
            <ThreadStepRow
              key={step.title}
              step={step}
              idx={idx}
              Icon={Icon}
              phaseKey={phaseKey}
              stepHeight={stepHeight}
              visualLeft={visualLeft}
              isActive={isActive}
              isHovered={isHovered}
              onHover={(hover) => onHoverStep(hover ? idx : null)}
              rowRef={(node) => {
                stepRefs.current[idx] = node;
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function ThreadStepRow({
  step,
  idx,
  Icon,
  phaseKey,
  stepHeight,
  visualLeft,
  isActive,
  isHovered,
  onHover,
  rowRef
}: {
  step: ThreadStepData;
  idx: number;
  Icon: LucideIcon;
  phaseKey: BeliefPhaseKey;
  stepHeight: number;
  visualLeft: boolean;
  isActive: boolean;
  isHovered: boolean;
  onHover: (hover: boolean) => void;
  rowRef: (node: HTMLDivElement | null) => void;
}) {
  const showDetail = isActive || isHovered;

  const isReturnPhase = phaseKey === "frequency";

  return (
    <div
      ref={rowRef}
      className={`relative flex scroll-mt-28 items-center overflow-visible ${
        isReturnPhase ? "py-8 sm:py-10 md:py-8" : "py-5 sm:py-6 md:py-4"
      } ${visualLeft ? "pl-2 pr-1 sm:pl-3 md:pl-0 md:pr-0" : "pl-1 pr-2 sm:pr-3 md:pl-0 md:pr-0"}`}
      style={{ minHeight: `${stepHeight}px` }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div
        className={`mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:gap-10 ${
          visualLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        <div
          className={`flex shrink-0 justify-center overflow-visible md:w-[38%] ${
            isReturnPhase ? "belief-thread-return-visual px-2 pt-6 pb-2 sm:pt-8" : ""
          }`}
        >
          <BeliefPhaseVisual phase={phaseKey} isActive={isActive} isHovered={isHovered} variant="timeline" />
        </div>

        <article className={`min-w-0 flex-1 md:w-[58%] ${visualLeft ? "md:text-left" : "md:text-right"}`}>
          <div className={`flex items-center gap-3 ${visualLeft ? "" : "md:flex-row-reverse"}`}>
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                isActive
                  ? "border-soul-gold/45 bg-soul-gold/12 text-soul-gold"
                  : "border-white/12 bg-black/30 text-zinc-400"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={isActive ? 2.2 : 1.75} />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] tracking-[0.14em] text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
              <h4 className="font-serif text-xl text-zinc-100 sm:text-2xl">{step.title}</h4>
            </div>
          </div>

          <motion.p
            className={`mt-3 text-base leading-relaxed text-zinc-400 sm:mt-4 sm:text-[1.05rem] sm:leading-relaxed ${
              visualLeft ? "" : "md:text-right"
            }`}
            initial={false}
            animate={{ opacity: showDetail ? 1 : 0.22, y: showDetail ? 0 : 4 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {step.journeyText}
          </motion.p>

          <motion.ul
            className={`mt-3 space-y-2 sm:mt-4 sm:space-y-2.5 ${visualLeft ? "" : "md:ml-auto md:text-right"}`}
            initial={false}
            animate={{ opacity: showDetail ? 1 : 0.18 }}
            transition={{ duration: 0.45, ease: "easeInOut", delay: showDetail ? 0.06 : 0 }}
          >
            {step.corePoints.map((point, pointIdx) => (
              <motion.li
                key={point}
                className={`flex gap-2.5 text-sm leading-relaxed text-zinc-400 sm:text-[0.95rem] ${
                  visualLeft ? "" : "md:flex-row-reverse"
                }`}
                initial={false}
                animate={{ opacity: showDetail ? 1 : 0.15, y: showDetail ? 0 : 3 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: showDetail ? 0.08 + pointIdx * 0.05 : 0
                }}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-soul-gold/70" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </article>
      </div>
    </div>
  );
}
