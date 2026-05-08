"use client";

import { motion } from "framer-motion";
import { BrainCircuit, HeartPulse, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { type PracticeTier, type PracticeTierKey } from "@/lib/path-of-practice";

const tierIcons: Record<PracticeTierKey, typeof HeartPulse> = {
  body: HeartPulse,
  mind: BrainCircuit,
  soul: Sparkles
};

export function EvolutionaryPyramid({
  tiers,
  onSelect
}: {
  tiers: PracticeTier[];
  onSelect: (key: PracticeTierKey) => void;
}) {
  const [hovered, setHovered] = useState<PracticeTierKey | null>(null);
  const [focused, setFocused] = useState<PracticeTierKey>("soul");
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const orderedKeys: PracticeTierKey[] = useMemo(() => ["soul", "mind", "body"], []);

  function handleMove(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "1") {
        setFocused("soul");
        return;
      }
      if (event.key === "2") {
        setFocused("mind");
        return;
      }
      if (event.key === "3") {
        setFocused("body");
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        const currentIndex = orderedKeys.indexOf(focused);
        const nextIndex = Math.max(0, currentIndex - 1);
        setFocused(orderedKeys[nextIndex]);
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        const currentIndex = orderedKeys.indexOf(focused);
        const nextIndex = Math.min(orderedKeys.length - 1, currentIndex + 1);
        setFocused(orderedKeys[nextIndex]);
        return;
      }
      if (event.key === "Enter") {
        onSelect(focused);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focused, onSelect, orderedKeys]);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-soul-gold/12 via-transparent to-quantum-cyan/12 blur-3xl" />
      <div className="pyramid-shell relative overflow-hidden rounded-[2rem] border border-white/10 bg-charcoal/70 p-5 sm:p-8">
        <svg viewBox="0 0 100 78" className="absolute inset-0 h-full w-full opacity-35">
          <path d="M6 73 C 24 61, 40 50, 50 4 C 60 50, 76 61, 94 73" stroke="url(#flow)" strokeWidth="0.9" fill="none" />
          <path d="M14 66 C 31 55, 42 45, 50 10 C 58 45, 69 55, 86 66" stroke="url(#flow)" strokeWidth="0.7" fill="none" />
          <path d="M24 58 C 36 49, 44 40, 50 17 C 56 40, 64 49, 76 58" stroke="url(#flow)" strokeWidth="0.55" fill="none" />
          <defs>
            <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative space-y-3">
          {[...tiers].reverse().map((tier, index) => {
            const Icon = tierIcons[tier.key];
            const widths = ["w-[52%]", "w-[72%]", "w-[92%]"];
            const isHovered = hovered === tier.key;
            const isActive = focused === tier.key;
            return (
              <motion.button
                key={tier.key}
                type="button"
                onMouseEnter={() => setHovered(tier.key)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setFocused(tier.key)}
                onMouseMove={handleMove}
                onClick={() => onSelect(tier.key)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                whileHover={{ y: -2, scale: 1.01 }}
                className={`group relative mx-auto block ${widths[index]} rounded-2xl border bg-gradient-to-r px-4 py-5 text-left ${tier.colorClass} hover:shadow-glowGold ${
                  isActive ? "ring-2 ring-soul-gold/55 ring-offset-2 ring-offset-onyx" : ""
                } ${isHovered ? "z-40" : "z-10"}`}
              >
                <motion.span
                  className="pointer-events-none absolute -inset-px rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(105deg, rgba(212,175,55,0.0), rgba(212,175,55,0.5), rgba(0,229,255,0.5), rgba(0,229,255,0.0))"
                  }}
                  animate={{ opacity: [0.25, 0.75, 0.25], x: ["-6%", "6%", "-6%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.2 }}
                />
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-[0.14em] text-zinc-200/80">{tier.subtitle.toUpperCase()}</p>
                    <p className="mt-1 font-serif text-xl text-zinc-100 sm:text-2xl">{tier.title}</p>
                  </div>
                  <Icon className="h-5 w-5 text-zinc-100/90" />
                </div>

                {isHovered ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute z-[80] hidden w-72 -translate-x-1/2 rounded-xl border border-white/20 bg-black/85 p-3 text-xs leading-relaxed text-zinc-100 shadow-2xl md:block"
                    style={{
                      left: `${tooltipPos.x}px`,
                      top: `${Math.max(16, tooltipPos.y - 14)}px`
                    }}
                  >
                    <p>{tier.resonanceTooltip}</p>
                    <p className="mt-1 text-zinc-300">{tier.dissonanceTooltip}</p>
                  </motion.div>
                ) : null}

                {isHovered ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-xl border border-white/20 bg-black/30 p-3 text-xs leading-relaxed text-zinc-200 md:hidden"
                  >
                    <p>{tier.resonanceTooltip}</p>
                    <p className="mt-1 text-zinc-300">{tier.dissonanceTooltip}</p>
                  </motion.div>
                ) : null}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
