"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useId, type CSSProperties, type PointerEvent } from "react";
import type { ViewportTier } from "@/lib/soul-thread-path";

export type BeliefPhaseKey =
  | "source"
  | "soulWorld"
  | "incarnation"
  | "earthly"
  | "frequency"
  | "mastery";

export const journeySoulClassName =
  "rounded-full border border-white/50 bg-gradient-to-br from-[#fffef8] via-[#f5e6c8] to-[#d4af37] shadow-[0_0_20px_rgba(255,248,220,0.9),0_0_36px_rgba(212,175,55,0.45)]";

export type BeliefPhaseVisualVariant = "compact" | "timeline" | "watermark" | "icon";

/** Mobile/tablet left-rail cards use CSS phase patterns instead of BeliefPhaseVisual */
export function getMobileVisualPlacement(_phase: BeliefPhaseKey): "watermark" | "icon" | "none" {
  return "none";
}

type BeliefPhaseVisualProps = {
  phase: BeliefPhaseKey;
  isActive: boolean;
  isHovered: boolean;
  variant?: BeliefPhaseVisualVariant;
  /** Responsive scale tier for timeline visuals */
  viewportTier?: ViewportTier;
};

function useHoverTilt(isHovered: boolean) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [2.5, -2.5]), { stiffness: 280, damping: 30 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), { stiffness: 280, damping: 30 });
  const lift = useSpring(isHovered ? 1 : 0, { stiffness: 300, damping: 28 });

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return { rotateX, rotateY, lift, onPointerMove, onPointerLeave };
}

export function BeliefPhaseVisual({
  phase,
  isActive,
  isHovered,
  variant = "compact",
  viewportTier = "desktop"
}: BeliefPhaseVisualProps) {
  const { rotateX, rotateY, lift, onPointerMove, onPointerLeave } = useHoverTilt(isHovered);
  const translateZ = useTransform(lift, [0, 1], [0, 5]);
  const isTimeline = variant === "timeline";
  const isWatermark = variant === "watermark";
  const isIcon = variant === "icon";
  const effectiveBoost = isWatermark || isIcon ? isActive : isActive || isHovered;
  const visualMode: "full" | "watermark" | "icon" = isIcon ? "icon" : isWatermark ? "watermark" : "full";
  const isReturn = phase === "frequency";
  const isSoulWorld = phase === "soulWorld";
  const stageAspect = isReturn && isTimeline
    ? viewportTier === "phone"
      ? "belief-visual-stage-return min-h-[11rem] sm:min-h-[13.5rem]"
      : viewportTier === "tablet"
        ? "belief-visual-stage-return min-h-[14rem] md:min-h-[16rem]"
        : "belief-visual-stage-return min-h-[17.5rem] lg:min-h-[19.5rem]"
    : isIcon
      ? "aspect-square"
      : isWatermark
        ? "aspect-square"
        : "aspect-square";
  const stageMaxW = isIcon
    ? viewportTier === "phone"
      ? "max-w-[52px]"
      : "max-w-[64px]"
    : isWatermark
      ? viewportTier === "phone"
        ? "max-w-[120px]"
        : "max-w-[160px]"
      : isSoulWorld
        ? isTimeline
          ? viewportTier === "phone"
            ? "max-w-[172px] sm:max-w-[200px]"
            : viewportTier === "tablet"
              ? "max-w-[240px] md:max-w-[280px]"
              : "max-w-[310px] lg:max-w-[350px]"
          : "max-w-[185px] sm:max-w-[205px]"
        : isTimeline
          ? viewportTier === "phone"
            ? "max-w-[148px] sm:max-w-[168px]"
            : viewportTier === "tablet"
              ? "max-w-[200px] md:max-w-[228px]"
              : "max-w-[240px] lg:max-w-[280px]"
          : "max-w-[160px] sm:max-w-[180px]";
  const useTilt = !isReturn && viewportTier === "desktop" && isTimeline;

  return (
    <div
      className={
        isTimeline
          ? `belief-visual-stage relative mx-auto ${stageAspect} w-full ${stageMaxW} overflow-visible`
          : isWatermark
            ? `belief-visual-stage belief-visual-watermark relative ${stageAspect} w-full ${stageMaxW} overflow-visible`
            : isIcon
              ? `belief-visual-stage belief-visual-icon relative shrink-0 ${stageAspect} ${stageMaxW} overflow-visible`
              : `belief-visual-stage relative ${stageAspect} w-full ${stageMaxW} overflow-visible`
      }
      data-phase={phase}
      data-active={isActive ? "true" : "false"}
      onPointerMove={useTilt ? onPointerMove : undefined}
      onPointerLeave={useTilt ? onPointerLeave : undefined}
    >
      <motion.div
        className={
          isReturn && isTimeline
            ? "belief-visual-scene belief-visual-scene-return absolute inset-x-0 bottom-0 flex items-end justify-center overflow-visible pb-1"
            : "belief-visual-scene absolute inset-0 flex items-center justify-center overflow-visible"
        }
        style={
          useTilt
            ? {
                rotateX,
                rotateY,
                translateZ,
                transformPerspective: 1000
              }
            : undefined
        }
        animate={
          isWatermark
            ? { opacity: isActive ? 0.22 : 0.1, scale: isActive ? 1 : 0.92 }
            : isIcon
              ? { opacity: isActive ? 1 : 0.55, scale: isActive ? 1 : 0.88 }
              : undefined
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {phase === "source" ? (
          <SourceScene
            timeline={isTimeline || isWatermark || isIcon}
            boost={effectiveBoost}
            viewportTier={viewportTier}
            visualMode={visualMode}
          />
        ) : null}
        {phase === "soulWorld" ? (
          <SoulWorldScene
            timeline={isTimeline || isWatermark}
            boost={effectiveBoost}
            viewportTier={viewportTier}
            visualMode={visualMode}
          />
        ) : null}
        {phase === "incarnation" ? (
          <IncarnationScene
            timeline={isTimeline || isIcon}
            boost={effectiveBoost}
            viewportTier={viewportTier}
            visualMode={visualMode}
          />
        ) : null}
        {phase === "earthly" ? (
          <EarthlyScene
            timeline={isTimeline || isWatermark}
            boost={effectiveBoost}
            viewportTier={viewportTier}
            visualMode={visualMode}
          />
        ) : null}
        {phase === "frequency" ? (
          <ReturnScene
            timeline={isTimeline || isIcon}
            boost={effectiveBoost}
            viewportTier={viewportTier}
            visualMode={visualMode}
          />
        ) : null}
        {phase === "mastery" ? (
          <SoulMaturityScene
            timeline={isTimeline || isWatermark}
            boost={effectiveBoost}
            viewportTier={viewportTier}
            visualMode={visualMode}
          />
        ) : null}
      </motion.div>
    </div>
  );
}

type SceneProps = {
  boost: boolean;
  timeline?: boolean;
  viewportTier?: ViewportTier;
  visualMode?: "full" | "watermark" | "icon";
};

function timelineSize(
  base: number,
  timeline: boolean | undefined,
  tier: ViewportTier = "desktop",
  visualMode: "full" | "watermark" | "icon" = "full"
) {
  if (visualMode === "icon") {
    return tier === "phone" ? 52 : 64;
  }
  if (visualMode === "watermark") {
    return tier === "phone" ? 118 : 158;
  }
  if (!timeline) return Math.round(base * 0.68);
  switch (tier) {
    case "phone":
      return Math.round(base * 0.72);
    case "tablet":
      return Math.round(base * 0.86);
    default:
      return base;
  }
}

type SoulStream = {
  dx: number;
  dy: number;
  dz: number;
  delay: number;
  dist: number;
};

function buildSoulStreams(count: number): SoulStream[] {
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const streams: SoulStream[] = [];

  for (let idx = 0; idx < count; idx++) {
    const y = 1 - (2 * (idx + 0.5)) / count;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = (2 * Math.PI * idx) / goldenRatio;

    streams.push({
      dx: Math.cos(theta) * radiusAtY,
      dy: y,
      dz: Math.sin(theta) * radiusAtY,
      delay: idx * 0.18,
      dist: 48 + (idx % 7) * 9
    });
  }

  return streams;
}

function SourceSacredRays({ boost, size }: { boost: boolean; size: number }) {
  const uid = useId().replace(/:/g, "");
  const rayGradId = `source-ray-${uid}`;
  const glowFilterId = `source-glow-${uid}`;
  const primaryRayCount = 16;
  const secondaryRayCount = 12;
  const rayPulse = boost ? 5.2 : 7.4;

  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      aria-hidden
    >
      <defs>
        <linearGradient id={rayGradId} x1="50%" y1="50%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="18%" stopColor="rgba(255,252,235,0.82)" />
          <stop offset="55%" stopColor="rgba(245,230,200,0.38)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </linearGradient>
        <filter id={glowFilterId} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.g
        filter={`url(#${glowFilterId})`}
        style={{ transformOrigin: "50px 50px" }}
        animate={{ rotate: boost ? [0, 4, -3, 0] : [0, 2, -1.5, 0] }}
        transition={{ duration: rayPulse * 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {Array.from({ length: primaryRayCount }, (_, rayIdx) => {
          const angle = (rayIdx / primaryRayCount) * 360;
          const rayLen = size > 180 ? 46 : 42;

          return (
            <motion.line
              key={`primary-${rayIdx}`}
              x1="50"
              y1="50"
              x2="50"
              y2={50 - rayLen}
              stroke={`url(#${rayGradId})`}
              strokeWidth={rayIdx % 3 === 0 ? 1.1 : 0.65}
              strokeLinecap="round"
              transform={`rotate(${angle} 50 50)`}
              animate={{
                opacity: boost ? [0.08, 0.42 - (rayIdx % 4) * 0.04, 0.08] : [0.06, 0.28 - (rayIdx % 4) * 0.03, 0.06]
              }}
              transition={{
                duration: rayPulse + (rayIdx % 5) * 0.35,
                delay: rayIdx * 0.12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {Array.from({ length: secondaryRayCount }, (_, rayIdx) => {
          const angle = (rayIdx / secondaryRayCount) * 360 + 360 / secondaryRayCount / 2;
          const rayLen = size > 180 ? 34 : 30;

          return (
            <motion.line
              key={`secondary-${rayIdx}`}
              x1="50"
              y1="50"
              x2="50"
              y2={50 - rayLen}
              stroke="rgba(255,248,220,0.55)"
              strokeWidth="0.35"
              strokeLinecap="round"
              transform={`rotate(${angle} 50 50)`}
              animate={{
                opacity: boost ? [0.04, 0.22, 0.04] : [0.03, 0.14, 0.03]
              }}
              transition={{
                duration: rayPulse * 1.15 + rayIdx * 0.08,
                delay: rayIdx * 0.16 + 0.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </motion.g>

      <motion.circle
        cx="50"
        cy="50"
        r={size > 180 ? 14 : 11}
        fill="rgba(255,252,235,0.12)"
        stroke="rgba(255,248,220,0.22)"
        strokeWidth="0.4"
        animate={{
          opacity: boost ? [0.35, 0.72, 0.35] : [0.28, 0.52, 0.28],
          r: boost ? [11, 15, 11] : [10, 13, 10]
        }}
        transition={{ duration: rayPulse, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </svg>
  );
}

function SourceScene({ timeline, boost, viewportTier, visualMode = "full" }: SceneProps) {
  const size = timelineSize(220, timeline, viewportTier, visualMode);
  const streams = buildSoulStreams(28);
  const cycleDuration = boost ? 6.2 : 8.4;

  return (
    <div className="relative [transform-style:preserve-3d]" style={{ width: size, height: size }} aria-hidden>
      <motion.span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: size * 0.82,
          height: size * 0.82,
          background:
            "radial-gradient(circle, rgba(255,252,235,0.42) 0%, rgba(255,248,220,0.22) 38%, rgba(212,175,55,0.12) 58%, transparent 76%)"
        }}
        animate={{ opacity: boost ? [0.55, 0.88, 0.55] : [0.42, 0.68, 0.42], scale: boost ? [1, 1.08, 1] : [1, 1.04, 1] }}
        transition={{ duration: boost ? 5.5 : 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <SourceSacredRays boost={boost} size={size} />

      {[0, 1, 2].map((ring) => (
        <motion.span
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border border-amber-50/25"
          style={{
            width: 68 + ring * 16,
            height: 68 + ring * 16,
            transform: `translate(-50%, -50%) rotateX(${55 + ring * 25}deg) rotateY(${ring * 50}deg)`
          }}
          animate={{ opacity: boost ? [0.2, 0.48, 0.2] : [0.18, 0.32, 0.18] }}
          transition={{ duration: 6 + ring * 0.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}

      <motion.span
        className="absolute left-1/2 top-1/2 h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, #ffffff 0%, #fff9e6 30%, #f0dfa0 55%, #d4af37 78%, rgba(168,216,234,0.4) 100%)",
          boxShadow:
            "0 0 44px rgba(255,250,230,0.7), 0 0 88px rgba(212,175,55,0.28), inset 0 0 22px rgba(255,255,255,0.55)"
        }}
        animate={{ scale: boost ? [1, 1.04, 1] : [1, 1.018, 1] }}
        transition={{ duration: boost ? 5.5 : 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {streams.map((stream, streamIdx) => {
        const endX = stream.dx * stream.dist;
        const endY = stream.dy * stream.dist * 0.78;
        const endZ = stream.dz * stream.dist * 0.85;
        const particleSize = streamIdx % 4 === 0 ? 9 : streamIdx % 3 === 0 ? 7 : 6;

        return (
          <motion.span
            key={streamIdx}
            className="absolute left-1/2 top-1/2 rounded-full bg-gradient-to-br from-white via-amber-50/90 to-amber-100/75 shadow-[0_0_12px_rgba(255,248,220,0.8),0_0_22px_rgba(212,175,55,0.25)]"
            style={{ width: particleSize, height: particleSize, transform: "translate(-50%, -50%)" }}
            animate={{
              x: [0, endX * 0.28, endX * 0.62, endX, endX],
              y: [0, endY * 0.28, endY * 0.62, endY, endY],
              z: [0, endZ * 0.28, endZ * 0.62, endZ, endZ],
              opacity: [0, 0.35, 0.92, 0.55, 0],
              scale: [0.08, 0.35, 0.72, 0.55, 0.06]
            }}
            transition={{
              duration: cycleDuration + (streamIdx % 6) * 0.45,
              delay: stream.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
        );
      })}

      {streams.filter((_, idx) => idx % 2 === 0).map((stream, streamIdx) => {
        const endX = stream.dx * stream.dist * 0.72;
        const endY = stream.dy * stream.dist * 0.58;
        const endZ = stream.dz * stream.dist * 0.65;

        return (
          <motion.span
            key={`trail-${streamIdx}`}
            className="absolute left-1/2 top-1/2 rounded-full bg-amber-50/55 blur-[0.5px]"
            style={{ width: 4, height: 4, transform: "translate(-50%, -50%)" }}
            animate={{
              x: [0, endX * 0.45, endX, endX],
              y: [0, endY * 0.45, endY, endY],
              z: [0, endZ * 0.45, endZ, endZ],
              opacity: [0, 0.55, 0.28, 0]
            }}
            transition={{
              duration: cycleDuration * 1.15 + streamIdx * 0.12,
              delay: stream.delay + 0.35,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}

type NewtonLayer = {
  id: string;
  rx: number;
  ry: number;
  core: string;
  mid: string;
  rim: string;
  stroke: string;
  glow: string;
  translateZ: number;
  delay: number;
};

function SoulWorldJellyLayer({
  layer,
  layerIdx,
  boost
}: {
  layer: NewtonLayer;
  layerIdx: number;
  boost: boolean;
}) {
  const jellyKeyframes = {
    scaleX: [1, 1.16, 0.9, 1.1, 0.95, 1.05, 1] as number[],
    scaleY: [1, 0.84, 1.14, 0.92, 1.08, 0.97, 1] as number[],
    skewX: [0, 6, -5, 4, -3, 2, 0] as number[],
    skewY: [0, -4, 5, -3, 3, -1, 0] as number[],
    borderRadius: [
      "50%",
      "46% 54% 52% 48%",
      "54% 46% 48% 52%",
      "48% 52% 54% 46%",
      "52% 48% 46% 54%",
      "50%"
    ] as string[]
  };

  return (
    <motion.span
      className="absolute left-1/2 top-[54%] border backdrop-blur-[1px]"
      style={{
        width: layer.rx * 2,
        height: layer.ry * 2,
        marginLeft: -layer.rx,
        marginTop: -layer.ry,
        background: `radial-gradient(ellipse 85% 75% at 42% 32%, ${layer.core} 0%, ${layer.mid} 48%, ${layer.rim} 78%, transparent 100%)`,
        borderColor: layer.stroke,
        boxShadow: `0 0 ${18 - layerIdx * 2}px ${layer.glow}, inset 0 1px 8px rgba(255,255,255,0.35)`,
        transform: `rotateX(64deg) translateZ(${layer.translateZ}px)`,
        transformOrigin: "50% 50%",
        zIndex: layerIdx + 1
      }}
      animate={
        boost
          ? {
              ...jellyKeyframes,
              opacity: [0.78, 0.98, 0.82, 0.95, 0.8, 0.92, 0.78]
            }
          : {
              scaleX: 1,
              scaleY: 1,
              skewX: 0,
              skewY: 0,
              borderRadius: "50%",
              opacity: [0.62, 0.76, 0.62]
            }
      }
      transition={
        boost
          ? {
              duration: 2.6 + layerIdx * 0.22,
              delay: layer.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          : {
              duration: 4.2 + layerIdx * 0.35,
              delay: layer.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
      }
    />
  );
}

/** Newton: Schichten / Resonanzen — Heilung, Seelengruppe, Resonanz, Führung */
function SoulWorldScene({ timeline, boost, viewportTier, visualMode = "full" }: SceneProps) {
  const size = timelineSize(310, timeline, viewportTier, visualMode);
  const scale =
    visualMode === "icon"
      ? 0.85
      : visualMode === "watermark"
        ? 0.92
        : timeline
          ? viewportTier === "phone"
            ? 0.98
            : viewportTier === "tablet"
              ? 1.08
              : 1.2
          : 0.82;

  const layers: NewtonLayer[] = [
    {
      id: "healing",
      rx: Math.round(56 * scale),
      ry: Math.round(17 * scale),
      core: "rgba(168,230,218,0.72)",
      mid: "rgba(126,200,184,0.52)",
      rim: "rgba(98,175,160,0.28)",
      stroke: "rgba(126,200,184,0.62)",
      glow: "rgba(126,200,184,0.28)",
      translateZ: 0,
      delay: 0
    },
    {
      id: "soulGroup",
      rx: Math.round(44 * scale),
      ry: Math.round(14 * scale),
      core: "rgba(210,198,240,0.74)",
      mid: "rgba(181,168,213,0.54)",
      rim: "rgba(155,135,196,0.3)",
      stroke: "rgba(181,168,213,0.68)",
      glow: "rgba(181,168,213,0.32)",
      translateZ: 6,
      delay: 0.18
    },
    {
      id: "resonance",
      rx: Math.round(32 * scale),
      ry: Math.round(11 * scale),
      core: "rgba(245,210,225,0.76)",
      mid: "rgba(232,196,212,0.56)",
      rim: "rgba(210,165,190,0.3)",
      stroke: "rgba(232,196,212,0.66)",
      glow: "rgba(232,196,212,0.3)",
      translateZ: 12,
      delay: 0.36
    },
    {
      id: "guidance",
      rx: Math.round(20 * scale),
      ry: Math.round(8 * scale),
      core: "rgba(255,252,240,0.82)",
      mid: "rgba(245,230,200,0.62)",
      rim: "rgba(212,175,55,0.28)",
      stroke: "rgba(245,230,200,0.72)",
      glow: "rgba(245,230,200,0.38)",
      translateZ: 18,
      delay: 0.54
    }
  ];

  return (
    <div
      className="relative [transform-style:preserve-3d]"
      style={{ width: size, height: size * 0.92, perspective: 720 }}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: size * 0.88,
          height: size * 0.42,
          background:
            "radial-gradient(ellipse, rgba(181,168,213,0.22) 0%, rgba(126,200,184,0.14) 42%, rgba(232,196,212,0.08) 68%, transparent 82%)"
        }}
      />

      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ transform: "rotateX(12deg)" }}
        animate={
          boost
            ? { y: [0, -3, 1, -2, 0], rotateZ: [0, 0.6, -0.5, 0.3, 0] }
            : { y: 0, rotateZ: 0 }
        }
        transition={
          boost
            ? {
                duration: 3.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }
            : { duration: 0.4 }
        }
      >
        {layers.map((layer, layerIdx) => (
          <SoulWorldJellyLayer key={layer.id} layer={layer} layerIdx={layerIdx} boost={boost} />
        ))}
      </motion.div>
    </div>
  );
}

/** Gewähltes Leben: Seelenring als Familie, umkreisende Geistseelen, wählende Seele */
function IncarnationScene({ timeline, boost, viewportTier, visualMode = "full" }: SceneProps) {
  const size = timelineSize(240, timeline, viewportTier, visualMode);
  const familyCount = 6;
  const familyRadius = 38;
  const orbitRadius = 78;
  const orbitCount = 7;

  return (
    <div className="relative" style={{ width: size, height: size }} aria-hidden>
      <span
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(181,168,213,0.2) 0%, rgba(168,216,234,0.1) 50%, transparent 72%)"
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: boost ? 360 : 0 }}
        transition={{ duration: boost ? 28 : 0, repeat: boost ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
      >
        {Array.from({ length: orbitCount }, (_, orbitIdx) => {
          const angle = (orbitIdx / orbitCount) * Math.PI * 2;
          const ox = Math.cos(angle) * orbitRadius;
          const oy = Math.sin(angle) * orbitRadius * 0.72;

          return (
            <span
              key={orbitIdx}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: 7,
                height: 7,
                background: "radial-gradient(circle, #fff 0%, #b5a8d5 60%, #9b8fc4 100%)",
                boxShadow: "0 0 10px rgba(181,168,213,0.55)",
                transform: `translate(-50%, -50%) translate(${ox}px, ${oy}px)`
              }}
            />
          );
        })}
      </motion.div>

      <span
        className="absolute left-1/2 top-1/2 rounded-full border border-amber-100/25"
        style={{
          width: familyRadius * 2 + 12,
          height: familyRadius * 2 + 12,
          transform: "translate(-50%, -50%) rotateX(62deg)"
        }}
      />

      {Array.from({ length: familyCount }, (_, memberIdx) => {
        const angle = (memberIdx / familyCount) * Math.PI * 2 - Math.PI / 2;
        const fx = Math.cos(angle) * familyRadius;
        const fy = Math.sin(angle) * familyRadius * 0.55;

        return (
          <motion.span
            key={memberIdx}
            className="absolute left-1/2 top-1/2 rounded-full border border-rose-200/30"
            style={{
              width: 11,
              height: 11,
              background: "radial-gradient(circle, #fff 0%, #e8c4d4 55%, #c9b8e8 100%)",
              boxShadow: "0 0 12px rgba(232,196,212,0.5)",
              transform: `translate(-50%, -50%) translate(${fx}px, ${fy}px)`
            }}
            animate={{ opacity: boost ? [0.55, 0.95, 0.55] : 0.6 }}
            transition={{ duration: 2.8 + memberIdx * 0.2, repeat: boost ? Number.POSITIVE_INFINITY : 0 }}
          />
        );
      })}

      <motion.span
        className={`absolute left-1/2 top-[18%] h-5 w-5 -translate-x-1/2 ${journeySoulClassName}`}
        animate={
          boost
            ? { y: [0, 28, 22], scale: [1, 0.88, 0.95], opacity: [1, 0.85, 1] }
            : { y: 8, scale: 1, opacity: 0.9 }
        }
        transition={{ duration: 4, repeat: boost ? Number.POSITIVE_INFINITY : 0, ease: "easeInOut" }}
      />
    </div>
  );
}

const backgroundPlanets = [
  { x: -58, y: -38, z: -70, size: 16, ocean: "#6b4a8a", land: "#9b7bb8", ring: false, duration: 42 },
  { x: 62, y: -28, z: -85, size: 22, ocean: "#c45c3a", land: "#e8a070", ring: false, duration: 36 },
  { x: -48, y: 52, z: -95, size: 14, ocean: "#2a6a9a", land: "#5aa8d8", ring: true, duration: 50 },
  { x: 70, y: 44, z: -60, size: 12, ocean: "#8a7040", land: "#c4a860", ring: false, duration: 55 }
] as const;

/**
 * Equirectangular world map (lon −180…180 → x 0…100, lat 90…−90 → y 0…100).
 * Stylized-realistic silhouettes — recognizable at globe scale.
 */
function EarthContinents() {
  const uid = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`earth-forest-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(72,168,108,0.95)" />
          <stop offset="55%" stopColor="rgba(38,128,72,0.93)" />
          <stop offset="100%" stopColor="rgba(28,98,58,0.92)" />
        </linearGradient>
        <linearGradient id={`earth-desert-${uid}`} x1="0%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="rgba(210,178,108,0.9)" />
          <stop offset="100%" stopColor="rgba(168,138,78,0.88)" />
        </linearGradient>
        <linearGradient id={`earth-tundra-${uid}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(195,215,195,0.82)" />
          <stop offset="100%" stopColor="rgba(148,168,148,0.78)" />
        </linearGradient>
        <linearGradient id={`earth-ice-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(235,248,255,0.88)" />
          <stop offset="100%" stopColor="rgba(195,225,245,0.75)" />
        </linearGradient>
        <filter id={`earth-glow-${uid}`} x="-2%" y="-2%" width="104%" height="104%">
          <feGaussianBlur stdDeviation="0.18" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#earth-glow-${uid})`} stroke="rgba(18,72,42,0.28)" strokeWidth="0.12" strokeLinejoin="round">
        {/* North America */}
        <path
          fill={`url(#earth-forest-${uid})`}
          d="M2.8,16.7 L6.9,10.6 L10.8,11.7 L13.9,18.9 L15.6,22.8 L16.7,28.9 L17.2,31.1
             L19.4,34.4 L20.6,36.7 L20.8,37.8 L24.4,41.1 L26.4,43.3 L27.2,44.4 L25.6,38.3
             L27.2,36.1 L27.5,33.3 L28.9,28.9 L29.4,26.7 L30.6,25 L31.7,23.3 L34.7,22.2
             L31.7,23.9 L30.6,17.8 L27.8,15.6 L25,13.9 L19.4,12.2 L11.1,12.2 L2.8,16.7 Z"
        />
        {/* Florida peninsula */}
        <path
          fill="rgba(48,132,78,0.9)"
          d="M27.5,35.5 L28.2,36.8 L27.8,38.2 L27,37.2 Z"
        />

        {/* Greenland */}
        <path
          fill={`url(#earth-tundra-${uid})`}
          d="M33.3,15.6 L37.8,13.9 L43.9,11.1 L45,7.8 L43.3,6.7 L38.3,8.3 L34.7,11.1
             L33.3,13.9 L33.3,15.6 Z"
        />

        {/* South America */}
        <path
          fill={`url(#earth-forest-${uid})`}
          d="M27.8,44.4 L29.2,47.8 L30,50 L30.6,54.4 L32.2,58.3 L37.8,63.3 L38.3,66.7
             L37.2,70 L30.6,72.2 L28.9,77.8 L30,77.2 L30.6,68.3 L29.4,60 L27.8,52.8
             L27.2,46.7 Z"
        />

        {/* Europe + Iberian / Italian peninsulas */}
        <path
          fill={`url(#earth-forest-${uid})`}
          d="M47.2,30.6 L48.6,28.3 L50.8,27.2 L52.5,28.3 L53.3,30 L52.8,32.2 L50.6,33.3
             L48.3,32.2 L47.2,30.6 Z"
        />
        <path fill="rgba(52,138,82,0.9)" d="M46.7,27.8 L47.2,27.2 L47.8,27.8 L47.5,28.5 Z" />
        <path
          fill={`url(#earth-tundra-${uid})`}
          d="M51.4,22.2 L53.1,19.4 L54.7,20 L55,22.2 L53.9,24.4 L52.2,24.4 Z"
        />

        {/* Africa */}
        <path
          fill={`url(#earth-forest-${uid})`}
          d="M45.3,30.6 L48.6,29.4 L52.8,29.4 L56.9,32.8 L60.3,36.1 L63.9,43.3 L64.2,47.2
             L62.5,52.8 L60,57.8 L57.2,62.2 L54.7,66.7 L52.2,69.4 L48.6,68.3 L46.1,64.4
             L44.4,58.3 L43.1,52.8 L42.8,47.2 L43.6,42.2 L44.7,38.3 L45.3,30.6 Z"
        />
        <path
          fill={`url(#earth-desert-${uid})`}
          d="M46.4,34.4 L52.8,33.3 L58.3,35 L58.9,38.3 L55.6,40 L49.4,39.4 L46.7,37.2 Z"
        />
        <path fill="rgba(42,128,72,0.9)" d="M59.4,58.3 L60,60 L59.7,61.7 L59.2,59.4 Z" />

        {/* Arabian Peninsula */}
        <path
          fill={`url(#earth-desert-${uid})`}
          d="M57.8,35.6 L61.4,34.4 L62.8,37.2 L61.1,40 L58.3,39.4 Z"
        />

        {/* Asia — Eurasian landmass */}
        <path
          fill={`url(#earth-forest-${uid})`}
          d="M53.3,31.1 L58.3,28.3 L65.3,26.4 L74.4,25 L83.3,25.3 L89.4,27.2 L91.7,30.6
             L92.2,35 L90.6,39.4 L86.7,42.2 L81.1,42.8 L74.4,44.4 L67.8,46.7 L61.7,47.8
             L56.7,46.1 L53.6,42.8 L52.5,38.3 L53.3,31.1 Z"
        />
        <path
          fill={`url(#earth-tundra-${uid})`}
          d="M55.6,22.2 L68.3,20 L82.8,19.4 L90.6,21.1 L89.4,24.4 L78.9,25 L65.6,25.3
             L55.6,24.4 Z"
        />
        <path
          fill="rgba(48,138,78,0.92)"
          d="M64.4,38.3 L68.3,37.2 L69.4,40.6 L68.3,46.1 L65.6,48.3 L63.9,45 L64.4,38.3 Z"
        />
        <path fill="rgba(52,128,72,0.88)" d="M66.7,49.4 L67.2,48.9 L67.5,49.7 L67,50.3 Z" />
        <path
          fill="rgba(42,128,72,0.9)"
          d="M72.2,42.2 L74.4,41.1 L74.7,44.4 L72.8,46.7 L71.4,45.6 Z"
        />
        <path
          fill="rgba(48,132,78,0.88)"
          d="M76.4,46.1 L77.5,45.6 L78.1,47.2 L77.2,48.3 Z M80.6,47.2 L81.4,46.4 L82.2,47.5 L81.4,48.6 Z M84.4,48.3 L85.3,47.5 L86.1,49.4 L85,50 Z M78.6,50.6 L79.4,49.7 L80.3,51.4 L79.2,52.2 Z M88.3,32.2 L89.2,31.4 L89.7,33.3 L88.9,34.4 Z M89.7,34.4 L90.3,33.6 L90.8,35 L90.3,35.8 Z"
        />

        {/* Australia + New Zealand */}
        <path
          fill={`url(#earth-desert-${uid})`}
          d="M81.4,62.2 L86.1,56.7 L92.5,65.6 L87.5,69.4 L82.5,68.3 L81.4,62.2 Z"
        />
        <path
          fill="rgba(42,118,68,0.88)"
          d="M94.4,66.1 L94.7,65.3 L95.3,67.2 L94.7,68.3 Z
             M94.7,68.6 L95.3,67.8 L95.6,69.4 L95,70 Z"
        />

        {/* Antarctica */}
        <path
          fill={`url(#earth-ice-${uid})`}
          opacity="0.72"
          d="M2,88.3 L12,86.1 L24,86.7 L38,85 L52,84.4 L66,85.6 L80,84.4 L94,85 L98,86.7
             L98,92 L2,92 Z"
        />
      </g>
    </svg>
  );
}

function RotatingPlanet({
  x,
  y,
  z,
  size,
  ocean,
  land,
  ring,
  duration,
  boost
}: {
  x: number;
  y: number;
  z: number;
  size: number;
  ocean: string;
  land: string;
  ring: boolean;
  duration: number;
  boost: boolean;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
      style={{ width: size, height: size, transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)` }}
      animate={{ rotateY: 360 }}
      transition={{ duration: boost ? duration * 0.75 : duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <span
        className="absolute inset-0 rounded-full opacity-55 blur-md"
        style={{ background: `radial-gradient(circle, ${ocean}88 0%, transparent 70%)` }}
      />
      <span
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{
          background: `radial-gradient(circle at 32% 28%, ${land} 0%, ${ocean} 55%, #0a1628 100%)`,
          boxShadow: `inset -${Math.max(2, size * 0.12)}px 0 ${size * 0.2}px rgba(0,0,0,0.45)`
        }}
      >
        <span
          className="absolute inset-[18%] rounded-full opacity-70"
          style={{ background: `radial-gradient(circle, ${land}aa 0%, transparent 72%)` }}
        />
      </span>
      {ring ? (
        <span
          className="absolute left-1/2 top-1/2 rounded-full border border-white/20"
          style={{
            width: size * 1.7,
            height: size * 0.35,
            transform: "translate(-50%, -50%) rotateX(72deg)"
          }}
        />
      ) : null}
    </motion.div>
  );
}

function EarthGlobe({ size, boost }: { size: number; boost: boolean }) {
  const spinDuration = boost ? 20 : 40;

  return (
    <div
      className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
      style={{ width: size, height: size, transform: "translate(-50%, -50%) translateZ(12px)" }}
    >
      <span
        className="absolute -inset-3 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(34,197,94,0.12) 45%, transparent 72%)"
        }}
      />
      <motion.span
        className="absolute -inset-2 rounded-full blur-xl"
        animate={{ opacity: boost ? [0.35, 0.58, 0.35] : 0.38 }}
        transition={{ duration: 5, repeat: boost ? Number.POSITIVE_INFINITY : 0, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(125,211,252,0.35) 0%, transparent 70%)" }}
      />

      <span
        className="absolute inset-0 overflow-hidden rounded-full [contain:strict]"
        style={{
          background:
            "radial-gradient(circle at 30% 28%, rgba(147,220,255,0.5) 0%, #2563eb 32%, #1e40af 48%, #0c4a6e 68%, #021a2e 100%)",
          boxShadow:
            "inset -10px 0 20px rgba(0,0,0,0.52), 0 0 30px rgba(56,189,248,0.28), 0 0 52px rgba(34,197,94,0.14)"
        }}
      >
        <div
          className="earth-texture-scroll flex h-full"
          style={
            {
              width: "200%",
              "--earth-spin-duration": `${spinDuration}s`
            } as CSSProperties
          }
        >
          <span className="h-full w-1/2 shrink-0">
            <EarthContinents />
          </span>
          <span className="h-full w-1/2 shrink-0">
            <EarthContinents />
          </span>
        </div>
      </span>

      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 28% 24%, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.08) 18%, transparent 42%), radial-gradient(circle at 78% 50%, rgba(0,0,0,0.38) 0%, transparent 38%)"
        }}
      />
    </div>
  );
}

function EarthlyScene({ timeline, boost, viewportTier, visualMode = "full" }: SceneProps) {
  const sceneSize = timelineSize(240, timeline, viewportTier, visualMode);
  const earthSize =
    visualMode === "icon"
      ? viewportTier === "phone"
        ? 28
        : 34
      : visualMode === "watermark"
        ? viewportTier === "phone"
          ? 42
          : 54
        : timeline
          ? viewportTier === "phone"
            ? 68
            : viewportTier === "tablet"
              ? 84
              : 96
          : 72;

  return (
    <div
      className="relative [transform-style:preserve-3d]"
      style={{ width: sceneSize, height: sceneSize, perspective: 900 }}
      aria-hidden
    >
      <div className="absolute inset-0 [transform-style:preserve-3d]" style={{ transform: "rotateX(18deg)" }}>
        {backgroundPlanets.map((planet, planetIdx) => (
          <RotatingPlanet key={planetIdx} {...planet} boost={boost} />
        ))}

        <EarthGlobe size={earthSize} boost={boost} />
      </div>
    </div>
  );
}

function ReturnScene({ timeline, boost, viewportTier, visualMode = "full" }: SceneProps) {
  const size = timelineSize(240, timeline, viewportTier, visualMode);
  const sceneHeight =
    visualMode === "icon"
      ? size
      : Math.round(size * (viewportTier === "phone" ? 1.02 : 1.08));
  const uid = useId().replace(/:/g, "");
  const beamId = `return-beam-${uid}`;
  const portalId = `return-portal-${uid}`;
  const glowId = `return-glow-${uid}`;
  const ambientId = `return-ambient-${uid}`;
  const cycleDuration = boost ? 5.8 : 7.5;
  const soulLift = timeline
    ? viewportTier === "phone"
      ? -68
      : viewportTier === "tablet"
        ? -88
        : -108
    : -82;
  const soulOrigin = "50%";

  return (
    <div
      className="belief-return-scene relative mx-auto overflow-visible bg-transparent"
      style={{ width: size, height: sceneHeight }}
      aria-hidden
    >
      <svg
        viewBox="0 -28 100 148"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <defs>
          <linearGradient id={beamId} x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="rgba(181,168,213,0.35)" />
            <stop offset="35%" stopColor="rgba(255,248,220,0.55)" />
            <stop offset="72%" stopColor="rgba(212,175,55,0.28)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <radialGradient id={portalId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,254,248,0.95)" />
            <stop offset="45%" stopColor="rgba(245,230,200,0.55)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.08)" />
          </radialGradient>
          <filter id={glowId} x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id={ambientId} cx="50%" cy="8%" r="42%">
            <stop offset="0%" stopColor="rgba(255,248,220,0.42)" />
            <stop offset="45%" stopColor="rgba(255,248,220,0.12)" />
            <stop offset="100%" stopColor="rgba(255,248,220,0)" />
          </radialGradient>
        </defs>

        <ellipse cx="50" cy="6" rx="38" ry="22" fill={`url(#${ambientId})`} opacity="0.85" />
        <ellipse cx="50" cy="118" rx="32" ry="10" fill="rgba(181,168,213,0.1)" />

        {/* Dimensional transition column */}
        <path
          d="M42 108 C42 72 44 38 46 24 Q50 8 54 24 C56 38 58 72 58 108 Z"
          fill={`url(#${beamId})`}
          opacity="0.52"
        />

        {/* Ground plane — subtle, no body */}
        <ellipse cx="50" cy="112" rx={timeline ? 34 : 28} ry="2.8" fill="rgba(255,248,220,0.08)" />

        {/* Portal rings above */}
        {[0, 1, 2].map((ring) => (
          <motion.ellipse
            key={ring}
            cx="50"
            cy="14"
            rx={timeline ? 14 + ring * 5 : 12 + ring * 4}
            ry={timeline ? 4 + ring * 1.2 : 3.2 + ring}
            fill="none"
            stroke="rgba(255,248,220,0.28)"
            strokeWidth="0.5"
            animate={{
              opacity: boost ? [0.12, 0.45 - ring * 0.08, 0.12] : [0.1, 0.3 - ring * 0.06, 0.1],
              ry: boost ? [3.2 + ring, 5 + ring * 1.2, 3.2 + ring] : [3, 4.2 + ring, 3]
            }}
            transition={{ duration: 3.4 + ring * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        ))}

        <motion.ellipse
          cx="50"
          cy="14"
          rx={timeline ? 22 : 18}
          ry={timeline ? 14 : 11}
          fill="rgba(255,252,235,0.22)"
          filter={`url(#${glowId})`}
          animate={{
            opacity: boost ? [0.35, 0.72, 0.35] : [0.28, 0.52, 0.28],
            rx: boost ? [18, 24, 18] : [16, 20, 16],
            ry: boost ? [11, 15, 11] : [9, 12, 9]
          }}
          transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.circle
          cx="50"
          cy="14"
          r={timeline ? 10 : 8}
          fill={`url(#${portalId})`}
          stroke="rgba(255,248,220,0.62)"
          strokeWidth="0.75"
          filter={`url(#${glowId})`}
          animate={{ opacity: boost ? [0.72, 1, 0.72] : 0.82, r: boost ? [8, 10.5, 8] : [8, 9.2, 8] }}
          transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Ascending particle wisps inside the beam */}
        {[0, 1, 2, 3, 4].map((wisp) => (
          <motion.circle
            key={wisp}
            cx={46 + (wisp % 3) * 4}
            r="0.9"
            fill="rgba(255,248,220,0.55)"
            animate={{
              cy: [108 - wisp * 8, 14 + wisp * 2],
              opacity: [0, 0.65, 0]
            }}
            transition={{
              duration: cycleDuration * 0.9,
              delay: wisp * 0.55,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>

      {/* Soul ascending from earthly plane into higher dimension */}
      <motion.span
        className={`absolute -translate-x-1/2 ${journeySoulClassName} ${
          viewportTier === "phone" ? "h-4 w-4" : viewportTier === "tablet" ? "h-[1.125rem] w-[1.125rem]" : "h-5 w-5"
        }`}
        style={{ left: soulOrigin, bottom: "14%" }}
        animate={{
          y: [0, soulLift * 0.35, soulLift * 0.72, soulLift, soulLift * 0.95],
          opacity: [0.35, 0.82, 1, 0.92, 0.25],
          scale: [0.5, 0.88, 1.08, 1.02, 0.65]
        }}
        transition={{ duration: cycleDuration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.span
        className="pointer-events-none absolute w-1 -translate-x-1/2 rounded-full bg-gradient-to-t from-violet-200/25 via-soul-gold/50 to-white/80"
        style={{
          left: soulOrigin,
          bottom: "15%",
          height: timeline
            ? viewportTier === "phone"
              ? 64
              : viewportTier === "tablet"
                ? 80
                : 96
            : 72
        }}
        animate={{ opacity: boost ? [0.08, 0.58, 0.08] : 0.22, scaleY: boost ? [0.5, 1, 0.5] : 0.72 }}
        transition={{ duration: cycleDuration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {[0, 1, 2, 3].map((trail) => (
        <motion.span
          key={trail}
          className="absolute h-2 w-2 -translate-x-1/2 rounded-full bg-amber-50/75 blur-[0.5px]"
          style={{ left: soulOrigin, bottom: "14%" }}
          animate={{
            y: [0, soulLift * (0.28 + trail * 0.14), soulLift * (0.62 + trail * 0.1)],
            opacity: [0, 0.72, 0],
            scale: [0.12, 0.82, 0.08]
          }}
          transition={{
            duration: cycleDuration * 0.85,
            delay: trail * 0.4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

function SoulMaturityScene({ timeline, boost, viewportTier, visualMode = "full" }: SceneProps) {
  const size = timelineSize(240, timeline, viewportTier, visualMode);
  const heartOffsetY =
    visualMode === "icon"
      ? 4
      : visualMode === "watermark"
        ? viewportTier === "phone"
          ? 6
          : 10
        : timeline
          ? viewportTier === "phone"
            ? 10
            : viewportTier === "tablet"
              ? 16
              : 20
          : 14;
  const uid = useId().replace(/:/g, "");
  const heartGradId = `mastery-heart-${uid}`;
  const glowFilterId = `mastery-glow-${uid}`;
  const pulseDuration = boost ? 3.2 : 4.8;

  return (
    <div className="relative" style={{ width: size, height: size }} aria-hidden>
      <div className="absolute inset-0" style={{ transform: `translateY(${heartOffsetY}px)` }}>
        <motion.span
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,248,220,0.32) 0%, rgba(232,196,212,0.18) 38%, rgba(212,175,55,0.14) 58%, rgba(126,200,184,0.08) 72%, transparent 84%)"
        }}
        animate={{
          opacity: boost ? [0.42, 0.85, 0.42] : [0.32, 0.55, 0.32],
          scale: boost ? [1, 1.16, 1] : [1, 1.08, 1]
        }}
        transition={{ duration: pulseDuration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.span
        className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,252,235,0.65) 0%, rgba(245,230,200,0.35) 42%, rgba(212,175,55,0.16) 68%, transparent 82%)"
        }}
        animate={{
          opacity: boost ? [0.55, 0.95, 0.55] : [0.42, 0.68, 0.42],
          scale: boost ? [0.9, 1.14, 0.9] : [0.94, 1.08, 0.94]
        }}
        transition={{ duration: pulseDuration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id={heartGradId} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,254,248,0.98)" />
            <stop offset="32%" stopColor="rgba(245,230,200,0.92)" />
            <stop offset="62%" stopColor="rgba(232,196,212,0.82)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.72)" />
          </linearGradient>
          <filter id={glowFilterId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[0, 1, 2].map((ring) => (
          <motion.circle
            key={ring}
            cx="50"
            cy="50"
            r={18 + ring * 6}
            fill="none"
            stroke="rgba(255,248,220,0.35)"
            strokeWidth="0.5"
            animate={{
              r: boost ? [18 + ring * 6, 26 + ring * 8, 18 + ring * 6] : [18 + ring * 6, 22 + ring * 6, 18 + ring * 6],
              opacity: boost ? [0.35 - ring * 0.08, 0, 0.35 - ring * 0.08] : [0.22 - ring * 0.05, 0, 0.22 - ring * 0.05]
            }}
            transition={{
              duration: pulseDuration + ring * 0.6,
              delay: ring * 0.45,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut"
            }}
          />
        ))}

        <g filter={`url(#${glowFilterId})`}>
          <motion.path
            d="M50 68 C40 58 28 54 28 42 C28 32 36 24 50 30 C64 24 72 32 72 42 C72 54 60 58 50 68 Z"
            fill={`url(#${heartGradId})`}
            stroke="rgba(255,248,220,0.62)"
            strokeWidth="0.9"
            strokeLinejoin="round"
            animate={{
              scale: boost ? [1, 1.07, 1] : [1, 1.04, 1],
              opacity: boost ? [0.9, 1, 0.9] : [0.84, 0.96, 0.84]
            }}
            transition={{ duration: pulseDuration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ transformOrigin: "50px 46px" }}
          />
        </g>
      </svg>
      </div>
    </div>
  );
}
