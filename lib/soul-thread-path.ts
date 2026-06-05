export type ThreadPoint = {
  x: number;
  y: number;
};

/** Default / desktop spacing between thread anchor points (px) */
export const THREAD_STEP_HEIGHT = 280;

/** Responsive step heights — keep in sync with ThreadStepRow min-heights */
export const THREAD_STEP_HEIGHT_MOBILE = 540;
export const THREAD_STEP_HEIGHT_DESKTOP = 280;

/** Where the main soul visually emerges from the Source (ratio of step height) */
export function getSourceEmergenceOrigin(stepHeight = THREAD_STEP_HEIGHT): ThreadPoint {
  return { x: 18, y: stepHeight * 0.14 };
}
/** SVG viewBox coordinates — zigzag left / right, anchored at row centers */
export function getThreadPoints(stepCount: number, stepHeight = THREAD_STEP_HEIGHT): ThreadPoint[] {
  const points: ThreadPoint[] = [];
  for (let idx = 0; idx < stepCount; idx++) {
    points.push({
      x: idx % 2 === 0 ? 24 : 76,
      y: (idx + 0.5) * stepHeight
    });
  }
  return points;
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

export function getThreadViewHeight(stepCount: number, stepHeight = THREAD_STEP_HEIGHT): number {
  return stepCount * stepHeight;
}
