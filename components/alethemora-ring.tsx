"use client";

import { useId } from "react";

type AlethemoraRingProps = {
  variant?: "mark" | "hero" | "badge";
  className?: string;
  "aria-hidden"?: boolean;
};

export function AlethemoraRing({
  variant = "mark",
  className = "",
  "aria-hidden": ariaHidden = true
}: AlethemoraRingProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `alethemora-ring-grad-${uid}`;
  const glowId = `alethemora-ring-glow-${uid}`;

  if (variant === "hero") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        aria-hidden={ariaHidden}
        role="presentation"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A5F2A" />
            <stop offset="45%" stopColor="#ECE4D7" />
            <stop offset="100%" stopColor="#2A2522" />
          </linearGradient>
          <filter id={glowId} x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="0" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse
          cx="100"
          cy="100"
          rx="92"
          ry="38"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="0.9"
          opacity="0.28"
          transform="rotate(22 100 100)"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="86"
          ry="44"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="0.75"
          opacity="0.18"
          transform="rotate(-38 100 100)"
        />
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="0.85"
          opacity="0.32"
        />
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2.4"
          opacity="0.95"
        />
        <circle
          cx="100"
          cy="100"
          r="56"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.1"
          opacity="0.42"
        />
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="rgba(221,210,191,0.7)"
          strokeWidth="5"
        />
      </svg>
    );
  }

  if (variant === "badge") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden={ariaHidden}
        role="presentation"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A5F2A" />
            <stop offset="100%" stopColor="#2A2522" />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="5.2" fill="none" stroke={`url(#${gradId})`} strokeWidth="0.85" opacity="0.45" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden={ariaHidden}
      role="presentation"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A5F2A" />
          <stop offset="55%" stopColor="#DDD2BF" />
          <stop offset="100%" stopColor="#2A2522" />
        </linearGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle
        cx="20"
        cy="20"
        r="14.5"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2.2"
      />
      <circle
        cx="20"
        cy="20"
        r="9.2"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="1.05"
        opacity="0.5"
      />
    </svg>
  );
}
