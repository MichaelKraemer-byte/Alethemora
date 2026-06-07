export type ThreadPoint = {
  x: number;
  y: number;
};

export type ViewportTier = "phone" | "tablet" | "desktop";

/** Default / desktop spacing between thread anchor points (px) */
export const THREAD_STEP_HEIGHT = 280;

/** Responsive step heights — left-rail mobile/tablet vs desktop zigzag */
export const THREAD_STEP_HEIGHT_PHONE = 300;
export const THREAD_STEP_HEIGHT_TABLET = 340;
export const THREAD_STEP_HEIGHT_DESKTOP = 280;

/** @deprecated Use THREAD_STEP_HEIGHT_PHONE */
export const THREAD_STEP_HEIGHT_MOBILE = THREAD_STEP_HEIGHT_PHONE;

/** Left-rail thread anchor — legacy % viewBox; prefer getLeftRailCenterX(tier) */
export const THREAD_X_LEFT_RAIL = 50;

/** Center X in pixel viewBox for left-rail SVG */
export function getLeftRailCenterX(tier: ViewportTier): number {
  return getLeftRailWidthPx(tier) / 2;
}
/** Desktop zigzag anchors */
export const THREAD_X_LEFT = 24;
export const THREAD_X_RIGHT = 76;

/** Left-rail layout below desktop breakpoint */
export const THREAD_LEFT_RAIL_MIN = 1024;

export function usesLeftRailLayout(tier: ViewportTier): boolean {
  return tier !== "desktop";
}

export function getLeftRailWidthPx(tier: ViewportTier): number {
  switch (tier) {
    case "phone":
      return 40;
    case "tablet":
      return 52;
    default:
      return 0;
  }
}

export function getViewportTier(width: number): ViewportTier {
  if (width < 640) return "phone";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function getStepHeightForTier(tier: ViewportTier): number {
  switch (tier) {
    case "phone":
      return THREAD_STEP_HEIGHT_PHONE;
    case "tablet":
      return THREAD_STEP_HEIGHT_TABLET;
    default:
      return THREAD_STEP_HEIGHT_DESKTOP;
  }
}

/** Y-ratio within each step row — left rail centers on row; desktop zigzag adjusts per phase */
function getAnchorYRatio(tier: ViewportTier, stepIndex: number): number {
  if (usesLeftRailLayout(tier)) return 0.5;
  if (stepIndex === 4) return 0.48;
  if (stepIndex === 1) return 0.5;
  return 0.5;
}

function getThreadX(tier: ViewportTier, stepIndex: number): number {
  if (usesLeftRailLayout(tier)) return getLeftRailCenterX(tier);
  return stepIndex % 2 === 0 ? THREAD_X_LEFT : THREAD_X_RIGHT;
}

/** Where the main soul visually emerges from the Source (ratio of step height) */
export function getSourceEmergenceOrigin(
  stepHeight = THREAD_STEP_HEIGHT,
  tier: ViewportTier = "desktop"
): ThreadPoint {
  if (usesLeftRailLayout(tier)) {
    return {
      x: getLeftRailCenterX(tier),
      y: stepHeight * 0.12
    };
  }
  return {
    x: THREAD_X_LEFT - 6,
    y: stepHeight * 0.14
  };
}

/** SVG viewBox coordinates — zigzag on desktop, centered / soft-zigzag on smaller tiers */
export function getThreadPoints(
  stepCount: number,
  stepHeight = THREAD_STEP_HEIGHT,
  tier: ViewportTier = "desktop"
): ThreadPoint[] {
  const points: ThreadPoint[] = [];
  for (let idx = 0; idx < stepCount; idx++) {
    points.push({
      x: getThreadX(tier, idx),
      y: (idx + getAnchorYRatio(tier, idx)) * stepHeight
    });
  }
  return points;
}

/** Stroke width in current coordinate system (px for left-rail, % for desktop zigzag) */
export function getThreadStrokeWidth(tier: ViewportTier): number {
  switch (tier) {
    case "phone":
      return 2;
    case "tablet":
      return 2.4;
    default:
      return 0.55;
  }
}

export function getThreadGlowStrokeWidth(tier: ViewportTier): number {
  switch (tier) {
    case "phone":
      return 7;
    case "tablet":
      return 8;
    default:
      return 1.8;
  }
}

/** 0…1 — how much of the thread is illuminated by scroll progress */
export function getThreadFillRatio(progress: number, stepCount: number): number {
  if (stepCount <= 1) return 1;
  return Math.max(0, Math.min(1, progress / (stepCount - 1)));
}

export function usesPixelThreadViewBox(tier: ViewportTier): boolean {
  return usesLeftRailLayout(tier);
}

export function getThreadViewWidth(tier: ViewportTier): number {
  return usesPixelThreadViewBox(tier) ? getLeftRailWidthPx(tier) : 100;
}

export function buildThreadPath(points: ThreadPoint[]): string {
  if (points.length === 0) return "";
  const first = points[0]!;
  let path = `M ${first.x} ${first.y}`;

  for (let idx = 1; idx < points.length; idx++) {
    const prev = points[idx - 1]!;
    const curr = points[idx]!;
    const midY = (prev.y + curr.y) / 2;
    path += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }

  return path;
}

export function pointToPercent(point: ThreadPoint, viewHeight: number) {
  return {
    left: `${point.x}%`,
    top: `${(point.y / viewHeight) * 100}%`
  };
}

export function lerpThreadPoint(a: ThreadPoint, b: ThreadPoint, t: number): ThreadPoint {
  const clamped = Math.max(0, Math.min(1, t));
  return {
    x: a.x + (b.x - a.x) * clamped,
    y: a.y + (b.y - a.y) * clamped
  };
}

/** Map fractional scroll progress (0 … stepCount−1) to a point along the thread anchors */
export function getSoulPointFromProgress(
  points: readonly ThreadPoint[],
  progress: number,
  stepHeight: number,
  tier: ViewportTier,
  emerging = false
): ThreadPoint {
  if (points.length === 0) {
    return { x: THREAD_X_LEFT_RAIL, y: 0 };
  }

  if (emerging && progress < 0.35) {
    const origin = getSourceEmergenceOrigin(stepHeight, tier);
    const first = points[0]!;
    const blend = Math.min(1, progress / 0.35);
    return lerpThreadPoint(origin, first, blend);
  }

  const clamped = Math.max(0, Math.min(points.length - 1, progress));
  const lower = Math.floor(clamped);
  const upper = Math.min(points.length - 1, lower + 1);
  const t = clamped - lower;
  return lerpThreadPoint(points[lower]!, points[upper]!, t);
}

export function getThreadViewHeight(stepCount: number, stepHeight = THREAD_STEP_HEIGHT): number {
  return stepCount * stepHeight;
}
