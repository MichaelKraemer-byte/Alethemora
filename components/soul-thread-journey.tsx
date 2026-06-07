"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { MutableRefObject } from "react";
import {
  BeliefPhaseVisual,
  journeySoulClassName,
  type BeliefPhaseKey
} from "@/components/belief-phase-visual";
import { ChevronDown } from "lucide-react";
import {
  buildThreadPath,
  getLeftRailWidthPx,
  getSoulPointFromProgress,
  getStepHeightForTier,
  getThreadFillRatio,
  getThreadGlowStrokeWidth,
  getThreadPoints,
  getThreadStrokeWidth,
  getThreadViewHeight,
  getThreadViewWidth,
  getViewportTier,
  pointToPercent,
  THREAD_STEP_HEIGHT_DESKTOP,
  usesLeftRailLayout,
  type ViewportTier
} from "@/lib/soul-thread-path";

function useThreadLayout() {
  const [stepHeight, setStepHeight] = useState(THREAD_STEP_HEIGHT_DESKTOP);
  const [tier, setTier] = useState<ViewportTier>("desktop");
  const [hasFinePointer, setHasFinePointer] = useState(true);

  useEffect(() => {
    const pointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");

    const sync = () => {
      const nextTier = getViewportTier(window.innerWidth);
      setTier(nextTier);
      setStepHeight(getStepHeightForTier(nextTier));
      setHasFinePointer(pointerMedia.matches);
    };

    sync();
    window.addEventListener("resize", sync);
    pointerMedia.addEventListener("change", sync);
    return () => {
      window.removeEventListener("resize", sync);
      pointerMedia.removeEventListener("change", sync);
    };
  }, []);

  return { stepHeight, tier, hasFinePointer };
}

export type ThreadStepData = {
  title: string;
  summary: string;
  teaserTraits: readonly string[];
  journeyText: string;
  corePoints: readonly string[];
};

type SoulThreadJourneyProps = {
  steps: readonly ThreadStepData[];
  phaseKeys: readonly BeliefPhaseKey[];
  phaseIcons: readonly LucideIcon[];
  activeStep: number;
  scrollProgress: number;
  hoveredStep: number | null;
  onHoverStep: (idx: number | null) => void;
  stepRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  expandStepLabel: string;
  collapseStepLabel: string;
};

export function SoulThreadJourney({
  steps,
  phaseKeys,
  phaseIcons,
  activeStep,
  scrollProgress,
  hoveredStep,
  onHoverStep,
  stepRefs,
  expandStepLabel,
  collapseStepLabel
}: SoulThreadJourneyProps) {
  const { stepHeight, tier, hasFinePointer } = useThreadLayout();
  const isLeftRail = usesLeftRailLayout(tier);

  if (isLeftRail) {
    return (
      <LeftRailJourney
        steps={steps}
        phaseKeys={phaseKeys}
        phaseIcons={phaseIcons}
        activeStep={activeStep}
        scrollProgress={scrollProgress}
        hoveredStep={hoveredStep}
        onHoverStep={onHoverStep}
        stepRefs={stepRefs}
        stepHeight={stepHeight}
        tier={tier}
        hasFinePointer={hasFinePointer}
        expandStepLabel={expandStepLabel}
        collapseStepLabel={collapseStepLabel}
      />
    );
  }

  return (
    <DesktopZigzagJourney
      steps={steps}
      phaseKeys={phaseKeys}
      phaseIcons={phaseIcons}
      activeStep={activeStep}
      scrollProgress={scrollProgress}
      hoveredStep={hoveredStep}
      onHoverStep={onHoverStep}
      stepRefs={stepRefs}
      stepHeight={stepHeight}
      tier={tier}
      hasFinePointer={hasFinePointer}
    />
  );
}

type JourneyLayoutProps = Omit<SoulThreadJourneyProps, "expandStepLabel" | "collapseStepLabel"> & {
  stepHeight: number;
  tier: ViewportTier;
  hasFinePointer: boolean;
  expandStepLabel?: string;
  collapseStepLabel?: string;
};

function SoulCometTrail({ tier }: { tier: ViewportTier }) {
  const trailHeight = tier === "phone" ? 22 : 28;
  return (
    <span className="soul-comet-trail pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2" aria-hidden>
      <span
        className="soul-comet-trail-core block rounded-full"
        style={{ height: trailHeight }}
      />
      <span className="soul-comet-trail-glow absolute inset-x-0 top-0 block h-full rounded-full" />
    </span>
  );
}

function PhaseBackgroundPattern({
  phaseKey,
  isActive
}: {
  phaseKey: BeliefPhaseKey;
  isActive: boolean;
}) {
  return (
    <div
      className={`phase-pattern phase-pattern-${phaseKey} pointer-events-none absolute inset-0 overflow-hidden rounded-xl`}
      data-active={isActive ? "true" : "false"}
      aria-hidden
    />
  );
}

function MobileThreadRail({
  pathD,
  points,
  viewWidth,
  viewHeight,
  strokeWidth,
  glowWidth,
  fillRatio,
  activeStep,
  scrollProgress,
  tier
}: {
  pathD: string;
  points: ReturnType<typeof getThreadPoints>;
  viewWidth: number;
  viewHeight: number;
  strokeWidth: number;
  glowWidth: number;
  fillRatio: number;
  activeStep: number;
  scrollProgress: number;
  tier: ViewportTier;
}) {
  const flowPoint = getSoulPointFromProgress(points, scrollProgress, 0, tier, false);
  const nodeOuterR = tier === "phone" ? 5.5 : 6.5;
  const nodeInnerR = tier === "phone" ? 2.2 : 2.6;
  const flowR = tier === "phone" ? 3.2 : 3.8;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="mobile-thread-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,248,220,0.95)" />
          <stop offset="28%" stopColor="rgba(181,168,213,0.78)" />
          <stop offset="55%" stopColor="rgba(126,200,184,0.68)" />
          <stop offset="82%" stopColor="rgba(212,175,55,0.82)" />
          <stop offset="100%" stopColor="rgba(255,248,220,0.9)" />
        </linearGradient>
        <linearGradient id="mobile-thread-glow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,248,220,0.55)" />
          <stop offset="50%" stopColor="rgba(212,175,55,0.38)" />
          <stop offset="100%" stopColor="rgba(181,168,213,0.42)" />
        </linearGradient>
        <filter id="mobile-thread-glow" x="-120%" y="-4%" width="340%" height="108%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="mobile-thread-node-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={pathD}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth={strokeWidth + 0.6}
        strokeLinecap="round"
        pathLength={100}
      />

      <path
        className="mobile-thread-glow"
        d={pathD}
        fill="none"
        stroke="url(#mobile-thread-glow-gradient)"
        strokeWidth={glowWidth}
        strokeLinecap="round"
        opacity={0.55}
        filter="url(#mobile-thread-glow)"
        pathLength={100}
      />

      <path
        className="mobile-thread-line"
        d={pathD}
        fill="none"
        stroke="url(#mobile-thread-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter="url(#mobile-thread-glow)"
        opacity={0.92}
        pathLength={100}
      />

      <path
        className="mobile-thread-progress"
        d={pathD}
        fill="none"
        stroke="rgba(255,252,235,0.95)"
        strokeWidth={strokeWidth * 0.45}
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={`${fillRatio * 100} ${100 - fillRatio * 100}`}
        opacity={0.85}
      />

      <circle
        className="mobile-thread-flow"
        cx={flowPoint.x}
        cy={flowPoint.y}
        r={flowR}
        fill="rgba(255,252,235,0.95)"
        filter="url(#mobile-thread-node-glow)"
      />

      {points.map((point, idx) => {
        const isActive = activeStep === idx;
        const isPast = idx < activeStep;
        const ringOpacity = isActive ? 0.95 : isPast ? 0.55 : 0.22;

        return (
          <g key={idx}>
            {isActive ? (
              <circle
                className="mobile-thread-node-ring"
                cx={point.x}
                cy={point.y}
                r={nodeOuterR + 2.5}
                fill="none"
                stroke="rgba(255,248,220,0.35)"
                strokeWidth={0.8}
                opacity={0.7}
              />
            ) : null}
            <circle
              cx={point.x}
              cy={point.y}
              r={isActive ? nodeOuterR : isPast ? nodeOuterR * 0.72 : nodeOuterR * 0.5}
              fill={
                isActive
                  ? "rgba(212,175,55,0.18)"
                  : isPast
                    ? "rgba(212,175,55,0.1)"
                    : "rgba(255,255,255,0.04)"
              }
              stroke={
                isActive
                  ? "rgba(255,248,220,0.55)"
                  : isPast
                    ? "rgba(212,175,55,0.35)"
                    : "rgba(255,255,255,0.12)"
              }
              strokeWidth={isActive ? 0.9 : 0.55}
              opacity={ringOpacity}
              filter={isActive ? "url(#mobile-thread-node-glow)" : undefined}
            />
            <circle
              cx={point.x}
              cy={point.y}
              r={isActive ? nodeInnerR : isPast ? nodeInnerR * 0.85 : nodeInnerR * 0.65}
              fill={
                isActive
                  ? "rgba(255,248,220,0.98)"
                  : isPast
                    ? "rgba(212,175,55,0.72)"
                    : "rgba(255,255,255,0.2)"
              }
              opacity={isActive ? 1 : isPast ? 0.78 : 0.38}
            />
          </g>
        );
      })}
    </svg>
  );
}

function LeftRailJourney({
  steps,
  phaseKeys,
  phaseIcons,
  activeStep,
  scrollProgress,
  hoveredStep,
  onHoverStep,
  stepRefs,
  stepHeight,
  tier,
  hasFinePointer,
  expandStepLabel,
  collapseStepLabel
}: JourneyLayoutProps) {
  const points = useMemo(
    () => getThreadPoints(steps.length, stepHeight, tier),
    [steps.length, stepHeight, tier]
  );
  const strokeWidth = useMemo(() => getThreadStrokeWidth(tier), [tier]);
  const glowWidth = useMemo(() => getThreadGlowStrokeWidth(tier), [tier]);
  const viewHeight = useMemo(() => getThreadViewHeight(steps.length, stepHeight), [steps.length, stepHeight]);
  const viewWidth = useMemo(() => getThreadViewWidth(tier), [tier]);
  const pathD = useMemo(() => buildThreadPath(points), [points]);
  const railWidth = getLeftRailWidthPx(tier);
  const fillRatio = getThreadFillRatio(scrollProgress, steps.length);
  const inactiveOpacity = tier === "phone" ? 0.34 : 0.4;

  return (
    <div className="relative mx-auto w-full max-w-6xl overflow-x-clip">
      <div className="flex gap-1.5 sm:gap-2 md:gap-2.5">
        <div
          className="soul-left-rail relative shrink-0"
          style={{ width: railWidth }}
          aria-hidden
        >
          <MobileThreadRail
            pathD={pathD}
            points={points}
            viewWidth={viewWidth}
            viewHeight={viewHeight}
            strokeWidth={strokeWidth}
            glowWidth={glowWidth}
            fillRatio={fillRatio}
            activeStep={activeStep}
            scrollProgress={scrollProgress}
            tier={tier}
          />
        </div>

        <div className="relative min-w-0 flex-1">
          {steps.map((step, idx) => {
            const Icon = phaseIcons[idx]!;
            const phaseKey = phaseKeys[idx]!;
            const isActive = activeStep === idx;
            const isHovered = hoveredStep === idx;

            return (
              <LeftRailStepRow
                key={step.title}
                step={step}
                idx={idx}
                Icon={Icon}
                phaseKey={phaseKey}
                stepHeight={stepHeight}
                hasFinePointer={hasFinePointer}
                isActive={isActive}
                isHovered={isHovered}
                inactiveOpacity={inactiveOpacity}
                expandStepLabel={expandStepLabel ?? "More"}
                collapseStepLabel={collapseStepLabel ?? "Less"}
                onHover={(hover) => onHoverStep(hover ? idx : null)}
                rowRef={(node) => {
                  stepRefs.current[idx] = node;
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LeftRailStepRow({
  step,
  idx,
  Icon,
  phaseKey,
  stepHeight,
  hasFinePointer,
  isActive,
  isHovered,
  inactiveOpacity,
  expandStepLabel,
  collapseStepLabel,
  onHover,
  rowRef
}: {
  step: ThreadStepData;
  idx: number;
  Icon: LucideIcon;
  phaseKey: BeliefPhaseKey;
  stepHeight: number;
  hasFinePointer: boolean;
  isActive: boolean;
  isHovered: boolean;
  inactiveOpacity: number;
  expandStepLabel: string;
  collapseStepLabel: string;
  onHover: (hover: boolean) => void;
  rowRef: (node: HTMLDivElement | null) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const contentOpacity = isActive ? 1 : inactiveOpacity;
  const traitOpacity = isActive ? 1 : inactiveOpacity * 0.88;

  return (
    <div
      ref={rowRef}
      data-step-idx={idx}
      className="relative scroll-mt-24 py-3 sm:scroll-mt-28 sm:py-4"
      style={{ minHeight: `${stepHeight}px` }}
      onMouseEnter={hasFinePointer ? () => onHover(true) : undefined}
      onMouseLeave={hasFinePointer ? () => onHover(false) : undefined}
    >
      <motion.article
        className="soul-rail-card relative overflow-hidden rounded-xl border px-3 py-3 sm:px-3.5 sm:py-3.5"
        initial={false}
        animate={{
          opacity: contentOpacity,
          borderColor: isActive ? "rgba(212,175,55,0.32)" : "rgba(255,255,255,0.08)",
          backgroundColor: isActive ? "rgba(212,175,55,0.07)" : "rgba(0,0,0,0.22)",
          boxShadow: isActive ? "0 0 24px rgba(212,175,55,0.08)" : "0 0 0 transparent"
        }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <PhaseBackgroundPattern phaseKey={phaseKey} isActive={isActive} />

        <div className="relative z-10">
          <div className="flex items-start gap-2">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-9 sm:w-9 ${
                isActive
                  ? "border-soul-gold/45 bg-soul-gold/12 text-soul-gold shadow-[0_0_16px_rgba(212,175,55,0.2)]"
                  : "border-white/12 bg-black/30 text-zinc-400"
              }`}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={isActive ? 2.2 : 1.75} />
            </span>

            <div className="min-w-0 flex-1">
              <span
                className={`text-[10px] tracking-[0.14em] transition-colors duration-500 ${
                  isActive ? "text-soul-gold/70" : "text-zinc-500"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h4
                className={`font-serif text-base leading-snug transition-colors duration-500 sm:text-[1.05rem] ${
                  isActive ? "text-zinc-50" : "text-zinc-300"
                }`}
              >
                {step.title}
              </h4>
              <motion.p
                className={`mt-1 text-[0.82rem] leading-snug transition-colors duration-500 sm:text-sm ${
                  isActive ? "text-zinc-100" : "text-zinc-300"
                }`}
                initial={false}
                animate={{ opacity: traitOpacity }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {step.summary}
              </motion.p>
            </div>
          </div>

          <motion.ul
            className="mt-2.5 space-y-1.5 sm:mt-3"
            initial={false}
            animate={{ opacity: traitOpacity }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {step.teaserTraits.map((trait, traitIdx) => (
              <motion.li
                key={trait}
                className="flex gap-2 text-[0.84rem] leading-[1.55] text-zinc-400 sm:text-sm"
                initial={false}
                animate={{ opacity: traitOpacity, y: isActive ? 0 : 1 }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                  delay: isActive ? traitIdx * 0.04 : 0
                }}
              >
                <span
                  className={`mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                    isActive ? "bg-soul-gold/80" : "bg-soul-gold/35"
                  }`}
                />
                <span className="min-w-0 break-words">{trait}</span>
              </motion.li>
            ))}
          </motion.ul>

          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className={`mt-2.5 inline-flex items-center gap-1.5 text-xs transition sm:mt-3 ${
              isActive || isHovered
                ? "text-soul-gold/85 hover:text-soul-gold"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
            aria-expanded={expanded}
            aria-controls={`step-detail-${idx}`}
          >
            {expanded ? collapseStepLabel : expandStepLabel}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          <motion.div
            id={`step-detail-${idx}`}
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0
            }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <motion.p
              className="mt-2.5 text-[0.88rem] leading-[1.65] text-zinc-400 sm:text-[0.9rem] sm:leading-relaxed"
              initial={false}
              animate={{ opacity: expanded ? 1 : 0, y: expanded ? 0 : 4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {step.journeyText}
            </motion.p>

            <ul className="mt-2.5 space-y-2 sm:mt-3">
              {step.corePoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-[0.84rem] leading-[1.6] text-zinc-400 sm:text-sm sm:leading-relaxed"
                >
                  <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-soul-gold/60" />
                  <span className="min-w-0 break-words">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}

function DesktopZigzagJourney({
  steps,
  phaseKeys,
  phaseIcons,
  activeStep,
  scrollProgress,
  hoveredStep,
  onHoverStep,
  stepRefs,
  stepHeight,
  tier,
  hasFinePointer
}: JourneyLayoutProps) {
  const points = useMemo(
    () => getThreadPoints(steps.length, stepHeight, tier),
    [steps.length, stepHeight, tier]
  );
  const strokeWidth = useMemo(() => getThreadStrokeWidth(tier), [tier]);
  const viewHeight = useMemo(() => getThreadViewHeight(steps.length, stepHeight), [steps.length, stepHeight]);
  const pathD = useMemo(() => buildThreadPath(points), [points]);

  const [emerging, setEmerging] = useState(true);

  useEffect(() => {
    if (scrollProgress > 0.35) setEmerging(false);
  }, [scrollProgress]);

  const soulPoint = getSoulPointFromProgress(points, scrollProgress, stepHeight, tier, emerging);
  const soulPos = pointToPercent(soulPoint, viewHeight);

  return (
    <div className="relative mx-auto w-full max-w-6xl overflow-x-clip px-1 sm:px-0">
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
          strokeWidth={strokeWidth}
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
        className={`pointer-events-none absolute z-30 h-6 w-6 -translate-x-1/2 -translate-y-1/2 ${journeySoulClassName}`}
        style={{ willChange: "top, left" }}
        animate={{
          left: soulPos.left,
          top: soulPos.top,
          scale: emerging ? [0.15, 1.15, 1] : 1,
          opacity: emerging ? [0.3, 1, 1] : 1
        }}
        transition={{
          left: { type: "spring", stiffness: 300, damping: 30, mass: 0.6 },
          top: { type: "spring", stiffness: 300, damping: 30, mass: 0.6 },
          scale: { duration: emerging ? 1.4 : 0.3 },
          opacity: { duration: 1.1 }
        }}
        aria-hidden
      >
        <SoulCometTrail tier={tier} />
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
            <DesktopThreadStepRow
              key={step.title}
              step={step}
              idx={idx}
              Icon={Icon}
              phaseKey={phaseKey}
              stepHeight={stepHeight}
              tier={tier}
              hasFinePointer={hasFinePointer}
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

function DesktopThreadStepRow({
  step,
  idx,
  Icon,
  phaseKey,
  stepHeight,
  tier,
  hasFinePointer,
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
  tier: ViewportTier;
  hasFinePointer: boolean;
  visualLeft: boolean;
  isActive: boolean;
  isHovered: boolean;
  onHover: (hover: boolean) => void;
  rowRef: (node: HTMLDivElement | null) => void;
}) {
  const showDetail = isActive || (isHovered && hasFinePointer);
  const dimOpacity = 0.22;
  const isReturnPhase = phaseKey === "frequency";

  return (
    <div
      ref={rowRef}
      data-step-idx={idx}
      className={`relative flex scroll-mt-24 items-center overflow-visible px-1 sm:scroll-mt-28 sm:px-0 ${
        isReturnPhase ? "py-8" : "py-4"
      }`}
      style={{ minHeight: `${stepHeight}px` }}
      onMouseEnter={hasFinePointer ? () => onHover(true) : undefined}
      onMouseLeave={hasFinePointer ? () => onHover(false) : undefined}
    >
      <div
        className={`mx-auto flex w-full max-w-5xl flex-row items-center gap-10 ${
          visualLeft ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className={`flex w-[38%] shrink-0 justify-center overflow-visible ${
            isReturnPhase ? "belief-thread-return-visual px-2 pt-8" : ""
          }`}
        >
          <BeliefPhaseVisual
            phase={phaseKey}
            isActive={isActive}
            isHovered={isHovered && hasFinePointer}
            variant="timeline"
            viewportTier={tier}
          />
        </div>

        <article className={`min-w-0 flex-1 ${visualLeft ? "text-left" : "text-right"}`}>
          <div className={`flex items-center gap-3 ${visualLeft ? "" : "flex-row-reverse"}`}>
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
                isActive
                  ? "border-soul-gold/45 bg-soul-gold/12 text-soul-gold"
                  : "border-white/12 bg-black/30 text-zinc-400"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={isActive ? 2.2 : 1.75} />
            </span>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] tracking-[0.14em] text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
              <h4 className="font-serif text-2xl leading-snug text-zinc-100">{step.title}</h4>
            </div>
          </div>

          <motion.p
            className={`mt-4 text-[1.05rem] leading-relaxed text-zinc-200 ${visualLeft ? "" : "text-right"}`}
            initial={false}
            animate={{ opacity: showDetail ? 1 : dimOpacity, y: showDetail ? 0 : 4 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {step.journeyText}
          </motion.p>

          <motion.ul
            className={`mt-4 space-y-2.5 ${visualLeft ? "" : "ml-auto text-right"}`}
            initial={false}
            animate={{ opacity: showDetail ? 1 : 0.18 }}
            transition={{ duration: 0.45, ease: "easeInOut", delay: showDetail ? 0.06 : 0 }}
          >
            {step.corePoints.map((point, pointIdx) => (
              <motion.li
                key={point}
                className={`flex gap-2.5 text-[0.95rem] leading-relaxed text-zinc-400 ${
                  visualLeft ? "" : "flex-row-reverse"
                }`}
                initial={false}
                animate={{
                  opacity: showDetail ? 1 : 0.15,
                  y: showDetail ? 0 : 3
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: showDetail ? 0.08 + pointIdx * 0.05 : 0
                }}
              >
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-soul-gold/70" />
                <span className="min-w-0 break-words">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </article>
      </div>
    </div>
  );
}
