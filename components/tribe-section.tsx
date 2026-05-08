"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Language } from "@/lib/i18n";

type NodeKind = "creative" | "aid" | "selfhelp" | "bridge";
type NodeCommunity = NodeKind | "emerging";
type Shock = { id: string; from: number; to: number; start: number };
type NodePulse = { id: string; nodeId: string; start: number };
type Vec3 = { x: number; y: number; z: number };
type ProjectedNode = { id: string; community: NodeCommunity; x2d: number; y2d: number; depth: number; r: number; color: string };

const communityShockColor: Record<NodeCommunity, { core: string; aura: string }> = {
  creative: { core: "rgba(212,175,55,%OP%)", aura: "rgba(255,232,163,%OP%)" },
  aid: { core: "rgba(52,211,153,%OP%)", aura: "rgba(167,243,208,%OP%)" },
  selfhelp: { core: "rgba(139,92,246,%OP%)", aura: "rgba(196,181,253,%OP%)" },
  bridge: { core: "rgba(34,211,238,%OP%)", aura: "rgba(165,243,252,%OP%)" },
  emerging: { core: "rgba(161,161,170,%OP%)", aura: "rgba(228,228,231,%OP%)" }
};

const copy = {
  en: {
    title: "The tribe as a decentralized network",
    intro:
      "Soul mastery spreads through lived example, not command chains. Autonomous communities connect as equal nodes and co-create practical support in real life.",
    logicTitle: "How propagation works",
    logic: [
      "Sovereign individuals embody the path in everyday life.",
      "Local groups form around trust, service, and creative contribution.",
      "Groups connect peer-to-peer and share methods openly - without central control."
    ],
    examplesTitle: "Community formats",
    examplesNote: "Examples only - local communities can evolve additional formats according to real needs.",
    prev: "Previous",
    next: "Next",
    examples: [
      { title: "Creative Groups", text: "Writing circles, music collectives, design labs, and craft ateliers where soul expression becomes social value." },
      { title: "Aid Organizations", text: "Local help networks for children, elders, vulnerable people, and crisis response - service as applied compassion." },
      { title: "Self-Help Circles", text: "Peer groups for integration, reflection, sobriety, and shadow work - shared accountability without hierarchy." },
      { title: "Learning Pods", text: "Small study circles for psychology, consciousness research, economics, and practical life skills." },
      { title: "Mentoring Networks", text: "Cross-generational guidance where mature members support newcomers through lived example." },
      { title: "Family & Parenting Cells", text: "Communities for conscious parenting, relational maturity, and resilient family culture." }
    ],
    footer: "Principle 35 remains the safeguard: stay open to deeper truth. The network evolves by learning, not by dogma.",
    hint: "Drag to rotate in 3D. Click any node to inspect it and emit electric pulses.",
    networkText: "No center, no single point of failure: nodes, links, and signal flow remain alive and adaptive.",
    discoveryTitle: "Emerging Node (Formation Phase)",
    discoveryText:
      "This node is still in orientation. It explores role, trust relationships, and service capacity before becoming a stable soul-practice node."
  },
  de: {
    title: "Der Stamm als dezentrales Netz",
    intro:
      "Seelenmeisterschaft verbreitet sich durch gelebtes Beispiel, nicht durch Befehlsketten. Autonome Gemeinschaften verbinden sich als gleichwertige Nodes und schaffen konkrete Unterstützung im Alltag.",
    logicTitle: "Wie Verbreitung funktioniert",
    logic: [
      "Souveräne Individuen verkörpern den Weg in ihrem täglichen Leben.",
      "Lokale Gruppen entstehen rund um Vertrauen, Dienst und kreative Beiträge.",
      "Gruppen verbinden sich peer-to-peer und teilen Methoden offen - ohne zentrale Kontrolle."
    ],
    examplesTitle: "Gemeinschaftsformate",
    examplesNote: "Die folgenden Formate sind Beispiele - lokale Gemeinschaften können je nach realem Bedarf weitere Formen entwickeln.",
    prev: "Vorheriges",
    next: "Nächstes",
    examples: [
      { title: "Kreativgruppen", text: "Schreibzirkel, Musik-Kollektive, Design-Labs und Handwerksräume, in denen Seelenausdruck sozialen Wert erzeugt." },
      { title: "Hilfsorganisationen", text: "Lokale Hilfsnetze für Kinder, Ältere, vulnerable Menschen und Krisenhilfe - Dienst als angewandtes Mitgefühl." },
      { title: "Selbsthilfegruppen", text: "Peer-Gruppen für Integration, Reflexion, Nüchternheit und Schattenarbeit - gemeinsame Verantwortung ohne Hierarchie." },
      { title: "Lern-Pods", text: "Kleine Studienkreise für Psychologie, Bewusstseinsforschung, Ökonomie und praktische Lebenskompetenz." },
      { title: "Mentoring-Netzwerke", text: "Generationenübergreifende Begleitung, in der reifere Mitglieder Neue durch gelebtes Beispiel unterstützen." },
      { title: "Familien- & Elternzellen", text: "Gemeinschaften für bewusste Elternschaft, Beziehungsreife und eine resiliente Familienkultur." }
    ],
    footer: "Prinzip 35 bleibt die Sicherung: offen für tiefere Wahrheit. Das Netzwerk entwickelt sich durch Lernen, nicht durch Dogma.",
    hint: "Zum Drehen ziehen. Auf einen Node klicken, um Infos zu sehen und elektrische Impulse auszusenden.",
    networkText: "Kein Zentrum, kein Single Point of Failure: Nodes, Verbindungen und Signalfluss bleiben lebendig und adaptiv.",
    discoveryTitle: "Entstehender Node (Findungsphase)",
    discoveryText:
      "Dieser Node befindet sich noch in der Orientierung. Er klärt Rolle, Vertrauensbeziehungen und Dienstfähigkeit, bevor er zu einem stabilen Praxis-Node wird."
  }
} as const;

const nodeData: Array<{ id: string; pos: Vec3; color: string; size: number; community: NodeCommunity }> = [
  { id: "n1", pos: { x: 0, y: 1.85, z: 0 }, color: "#a1a1aa", size: 4.3, community: "emerging" },
  { id: "n2", pos: { x: 1.22, y: 1.2, z: 0 }, color: "#22d3ee", size: 5.7, community: "bridge" },
  { id: "n3", pos: { x: 0.38, y: 1.2, z: 1.14 }, color: "#d4af37", size: 5.8, community: "creative" },
  { id: "n4", pos: { x: -0.98, y: 1.2, z: 0.72 }, color: "#34d399", size: 5.6, community: "aid" },
  { id: "n5", pos: { x: -0.98, y: 1.2, z: -0.72 }, color: "#8b5cf6", size: 5.6, community: "selfhelp" },
  { id: "n6", pos: { x: 0.38, y: 1.2, z: -1.14 }, color: "#22d3ee", size: 5.7, community: "bridge" },
  { id: "n7", pos: { x: 1.55, y: 0, z: 0 }, color: "#d4af37", size: 5.9, community: "creative" },
  { id: "n8", pos: { x: 0.78, y: 0, z: 1.34 }, color: "#34d399", size: 5.7, community: "aid" },
  { id: "n9", pos: { x: -0.78, y: 0, z: 1.34 }, color: "#8b5cf6", size: 5.7, community: "selfhelp" },
  { id: "n10", pos: { x: -1.55, y: 0, z: 0 }, color: "#22d3ee", size: 5.9, community: "bridge" },
  { id: "n11", pos: { x: -0.78, y: 0, z: -1.34 }, color: "#d4af37", size: 5.7, community: "creative" },
  { id: "n12", pos: { x: 0.78, y: 0, z: -1.34 }, color: "#34d399", size: 5.7, community: "aid" },
  { id: "n13", pos: { x: 1.22, y: -1.2, z: 0 }, color: "#8b5cf6", size: 5.7, community: "selfhelp" },
  { id: "n14", pos: { x: 0.38, y: -1.2, z: 1.14 }, color: "#22d3ee", size: 5.7, community: "bridge" },
  { id: "n15", pos: { x: -0.98, y: -1.2, z: 0.72 }, color: "#d4af37", size: 5.6, community: "creative" },
  { id: "n16", pos: { x: -0.98, y: -1.2, z: -0.72 }, color: "#34d399", size: 5.6, community: "aid" },
  { id: "n17", pos: { x: 0.38, y: -1.2, z: -1.14 }, color: "#8b5cf6", size: 5.8, community: "selfhelp" },
  { id: "n18", pos: { x: 0, y: -1.85, z: 0 }, color: "#a1a1aa", size: 4.3, community: "emerging" },
  { id: "n19", pos: { x: 1.95, y: 0.35, z: 0.55 }, color: "#a1a1aa", size: 3.8, community: "emerging" },
  { id: "n20", pos: { x: -2.05, y: -0.25, z: 0.25 }, color: "#a1a1aa", size: 3.9, community: "emerging" },
  { id: "n21", pos: { x: 0.1, y: 2.2, z: -0.75 }, color: "#a1a1aa", size: 3.7, community: "emerging" },
  { id: "n22", pos: { x: -0.2, y: -2.2, z: 0.7 }, color: "#a1a1aa", size: 3.7, community: "emerging" }
];

const edges: Array<[number, number]> = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 1],
  [1, 6], [1, 7], [2, 7], [2, 8], [3, 8], [3, 9], [4, 9], [4, 10], [5, 10], [5, 11], [1, 11],
  [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 6],
  [6, 12], [7, 13], [8, 14], [9, 15], [10, 16], [11, 12],
  [12, 13], [13, 14], [14, 15], [15, 16], [16, 12],
  [12, 17], [13, 17], [14, 17], [15, 17], [16, 17],
  [18, 2], [18, 6],
  [19, 9], [19, 15],
  [20, 3], [20, 5],
  [21, 14], [21, 17]
];

function rotate3D(v: Vec3, rotX: number, rotY: number): Vec3 {
  const cy = Math.cos(rotY);
  const sy = Math.sin(rotY);
  const x1 = v.x * cy + v.z * sy;
  const z1 = -v.x * sy + v.z * cy;
  const cx = Math.cos(rotX);
  const sx = Math.sin(rotX);
  return { x: x1, y: v.y * cx - z1 * sx, z: v.y * sx + z1 * cx };
}

function buildLightningPath(a: { x: number; y: number }, b: { x: number; y: number }, t: number): string {
  const segments = 9;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  let d = `M ${a.x.toFixed(2)} ${a.y.toFixed(2)}`;
  for (let i = 1; i < segments; i++) {
    const p = i / segments;
    const x = a.x + dx * p;
    const y = a.y + dy * p;
    const jitter = Math.sin((t * 28 + i * 1.9) * 1.6) * (6 * (1 - Math.abs(0.5 - p) * 1.7));
    d += ` L ${(x + nx * jitter).toFixed(2)} ${(y + ny * jitter).toFixed(2)}`;
  }
  d += ` L ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
  return d;
}

export function TribeSection({ language }: { language: Language }) {
  const VIEW_SIZE = 460;
  const VIEW_CENTER = VIEW_SIZE / 2;
  const SHOCK_LIFETIME = 1.25;
  const t = copy[language];
  const [time, setTime] = useState(0);
  const [activeNode, setActiveNode] = useState<NodeKind | null>(null);
  const [rotY, setRotY] = useState(0.35);
  const [rotX, setRotX] = useState(-0.15);
  const [isDragging, setIsDragging] = useState(false);
  const [shocks, setShocks] = useState<Shock[]>([]);
  const [nodePulses, setNodePulses] = useState<NodePulse[]>([]);
  const [lastInteractionAt, setLastInteractionAt] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [exampleIndex, setExampleIndex] = useState(0);
  const dragRef = useRef<{ x: number; y: number } | null>(null);
  const dragMovedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const lastInteractionRef = useRef(0);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(() => {
    lastInteractionRef.current = lastInteractionAt;
  }, [lastInteractionAt]);

  useEffect(() => {
    let frameId = 0;
    const start = performance.now();
    const tick = () => {
      const seconds = (performance.now() - start) / 1000;
      setTime(seconds);
      if (!isDraggingRef.current && seconds - lastInteractionRef.current > 1.2) setRotY((prev) => prev + 0.0026);
      setShocks((prev) => prev.filter((shock) => seconds - shock.start < SHOCK_LIFETIME));
      setNodePulses((prev) => prev.filter((pulse) => seconds - pulse.start < 0.6));
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const nodeCopy: Record<NodeKind, { title: string; text: string }> =
    language === "en"
      ? {
          creative: { title: "Creative Group Node", text: "Transforms inner work into shared artistic, educational, and cultural value." },
          aid: { title: "Aid Node", text: "Channels compassion into concrete local support for vulnerable people." },
          selfhelp: { title: "Self-Help Node", text: "Stabilizes growth through peer accountability, reflection, and integration." },
          bridge: { title: "Bridge Node", text: "Connects local groups peer-to-peer so methods can spread without central authority." }
        }
      : {
          creative: { title: "Kreativgruppen-Node", text: "Übersetzt innere Arbeit in gemeinsamen künstlerischen, bildenden und kulturellen Wert." },
          aid: { title: "Hilfs-Node", text: "Leitet Mitgefühl in konkrete lokale Unterstützung für vulnerable Menschen." },
          selfhelp: { title: "Selbsthilfe-Node", text: "Stabilisiert Entwicklung durch Peer-Verantwortung, Reflexion und Integration." },
          bridge: { title: "Brücken-Node", text: "Verbindet lokale Gruppen peer-to-peer, damit Methoden ohne zentrale Autorität zirkulieren." }
        };

  const projected = useMemo<ProjectedNode[]>(() => {
    const radius = 104;
    const breathe = 1 + Math.sin(time * 0.72) * 0.12;
    return nodeData
      .map((node) => {
        const motionFactor = node.community === "emerging" ? 0.58 : 1;
        const driftFactor = node.community === "emerging" ? 0.72 : 1;
        const wobble: Vec3 = {
          x: node.pos.x + Math.sin(time * (0.55 + node.size * 0.02) * motionFactor + node.size) * 0.05 * driftFactor,
          y: node.pos.y + Math.cos(time * (0.45 + node.size * 0.02) * motionFactor + node.size * 0.7) * 0.05 * driftFactor,
          z: node.pos.z + Math.sin(time * (0.5 + node.size * 0.015) * motionFactor + node.size * 1.3) * 0.04 * driftFactor
        };
        const magnetized: Vec3 = {
          x: wobble.x * breathe,
          y: wobble.y * breathe,
          z: wobble.z * (1 + Math.sin(time * 0.61 + node.size) * 0.08)
        };
        const rotated = rotate3D(magnetized, rotX, rotY);
        const perspective = 1.15 + rotated.z * 0.28;
        return {
          id: node.id,
          community: node.community,
          x2d: VIEW_CENTER + rotated.x * radius * perspective,
          y2d: VIEW_CENTER + rotated.y * radius * perspective,
          depth: rotated.z,
          r: node.size * (0.85 + (rotated.z + 1) * 0.12),
          color: node.color
        };
      })
      .sort((a, b) => a.depth - b.depth);
  }, [rotX, rotY, time, VIEW_CENTER]);

  const byId = useMemo(() => {
    const map = new Map<string, ProjectedNode>();
    projected.forEach((n) => map.set(n.id, n));
    return map;
  }, [projected]);

  const selectedNode = selectedNodeId ? byId.get(selectedNodeId) ?? null : null;
  const tooltipPos = useMemo(() => {
    if (!selectedNode) return null;
    const viewSize = VIEW_SIZE;
    const tooltipW = 120; // half width in SVG-space (w-64 ~ 256px)
    const tooltipH = 52;
    const margin = 8;

    const x = Math.min(viewSize - tooltipW - margin, Math.max(tooltipW + margin, selectedNode.x2d));
    const y = Math.min(viewSize - margin, Math.max(tooltipH + margin, selectedNode.y2d - 46));
    return { x, y };
  }, [selectedNode, VIEW_SIZE]);
  function triggerShockFromNode(nodeId: string) {
    const fromIndex = nodeData.findIndex((n) => n.id === nodeId);
    if (fromIndex < 0) return;
    const now = time;
    const outgoing = edges.filter(([a, b]) => a === fromIndex || b === fromIndex);
    setShocks((prev) => [
      ...prev,
      ...outgoing.map(([a, b], idx) => ({
        id: `${nodeId}-${a}-${b}-${now}-${idx}`,
        from: a === fromIndex ? a : b,
        to: a === fromIndex ? b : a,
        start: now + idx * 0.02
      }))
    ]);
  }

  function onPointerDown(clientX: number, clientY: number) {
    dragRef.current = { x: clientX, y: clientY };
    dragMovedRef.current = false;
    setLastInteractionAt(time);
  }

  function onPointerMove(clientX: number, clientY: number) {
    if (!dragRef.current) return;
    const dx = clientX - dragRef.current.x;
    const dy = clientY - dragRef.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 2.5) dragMovedRef.current = true;
    if (!dragMovedRef.current) return;
    if (!isDragging) setIsDragging(true);
    dragRef.current = { x: clientX, y: clientY };
    setRotY((prev) => prev + dx * 0.0075);
    setRotX((prev) => Math.max(-1.1, Math.min(1.1, prev + dy * 0.006)));
    setLastInteractionAt(time);
  }

  function onPointerUp() {
    dragRef.current = null;
    setIsDragging(false);
    // allow click handlers to skip immediately after a true drag
    setTimeout(() => {
      dragMovedRef.current = false;
    }, 0);
  }

  function clickNode(nodeId: string, community: NodeCommunity) {
    if (dragMovedRef.current) return;
    setSelectedNodeId(nodeId);
    setNodePulses((prev) => [...prev, { id: `pulse-${nodeId}-${time}`, nodeId, start: time }]);
    setActiveNode(community === "emerging" ? null : community);
    setLastInteractionAt(time);
    triggerShockFromNode(nodeId);
  }

  function previousExample() {
    setExampleIndex((prev) => (prev - 1 + t.examples.length) % t.examples.length);
  }

  function nextExample() {
    setExampleIndex((prev) => (prev + 1) % t.examples.length);
  }

  return (
    <section id="tribe" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <h2 className="font-serif text-3xl text-zinc-100 sm:text-4xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-4xl rounded-xl border border-white/10 bg-black/35 p-4 text-zinc-200 backdrop-blur-sm">
            {t.intro}
          </p>
        </header>

        <div className="relative z-20 mt-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-soul-gold/18 via-transparent to-quantum-cyan/18 blur-3xl" />
          <div
            className={`relative select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onPointerDown={(e) => {
            onPointerDown(e.clientX, e.clientY);
            (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => onPointerMove(e.clientX, e.clientY)}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
          >
            <svg viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`} className="mx-auto h-[27rem] w-full max-w-5xl overflow-visible md:h-[30rem]">
            <defs>
              <radialGradient id="nodeGlow3d" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>

            {edges.map(([a, b], index) => {
              const na = byId.get(nodeData[a].id);
              const nb = byId.get(nodeData[b].id);
              if (!na || !nb) return null;
              const pulse = 0.28 + (Math.sin(time * 3 + index * 0.7) + 1) * 0.22;
              return (
                <line
                  key={`edge-${a}-${b}`}
                  x1={na.x2d}
                  y1={na.y2d}
                  x2={nb.x2d}
                  y2={nb.y2d}
                  stroke={`rgba(56,189,248,${pulse.toFixed(3)})`}
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                />
              );
            })}

            {shocks.map((shock) => {
              const from = byId.get(nodeData[shock.from].id);
              const to = byId.get(nodeData[shock.to].id);
              if (!from || !to) return null;
              const age = time - shock.start;
              if (age < 0 || age > SHOCK_LIFETIME) return null;
              const opacity = Math.max(0, 1 - age / SHOCK_LIFETIME);
              const sourceCommunity = nodeData[shock.from].community;
              const palette = communityShockColor[sourceCommunity];
              const coreStroke = palette.core.replace("%OP%", (0.9 * opacity).toFixed(3));
              const auraStroke = palette.aura.replace("%OP%", (0.75 * opacity).toFixed(3));
              return (
                <g key={shock.id}>
                  <path d={buildLightningPath({ x: from.x2d, y: from.y2d }, { x: to.x2d, y: to.y2d }, time + shock.start)} stroke={`rgba(255,255,255,${(0.95 * opacity).toFixed(3)})`} strokeWidth="2.35" fill="none" />
                  <path d={buildLightningPath({ x: from.x2d, y: from.y2d }, { x: to.x2d, y: to.y2d }, time + shock.start + 0.12)} stroke={coreStroke} strokeWidth="1.5" fill="none" />
                  <path d={buildLightningPath({ x: from.x2d, y: from.y2d }, { x: to.x2d, y: to.y2d }, time + shock.start + 0.22)} stroke={auraStroke} strokeWidth="1.1" fill="none" />
                </g>
              );
            })}

            {projected.map((node) => {
              const isEmerging = node.community === "emerging";
              const main = !isEmerging;
              const pulse = nodePulses.find((p) => p.nodeId === node.id);
              const pulseAge = pulse ? time - pulse.start : null;
              const pulseScale = pulseAge !== null ? 1 + pulseAge * 2.6 : 1;
              const pulseOpacity = pulseAge !== null ? Math.max(0, 0.95 - pulseAge * 1.6) : 0;
              return (
                <g
                  key={node.id}
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseEnter={() => !isEmerging && setActiveNode(node.community)}
                  onMouseLeave={() => main && setActiveNode(null)}
                  onClick={() => clickNode(node.id, node.community)}
                  className="cursor-pointer"
                >
                  {pulseAge !== null ? (
                    <circle
                      cx={node.x2d}
                      cy={node.y2d}
                      r={node.r + 2 + pulseScale * 4.5}
                      fill="none"
                      stroke="rgba(255,255,255,0.95)"
                      strokeWidth="1.35"
                      opacity={pulseOpacity}
                    />
                  ) : null}
                  <circle cx={node.x2d} cy={node.y2d} r={node.r + (main ? 10 : 6)} fill="url(#nodeGlow3d)" opacity={main ? 0.25 : 0.12} />
                  <circle cx={node.x2d} cy={node.y2d} r={node.r + (main ? 3 : 1.8)} fill={node.color} opacity={0.22} />
                  <circle cx={node.x2d} cy={node.y2d} r={node.r} fill={node.color} opacity={0.95} />
                  <circle cx={node.x2d} cy={node.y2d} r={node.r + 2.2} fill="none" stroke={node.color} strokeWidth="1.1" opacity={0.8} />
                </g>
              );
            })}
            </svg>

            {selectedNode && tooltipPos ? (
              <div
                className="pointer-events-none absolute z-20 w-64 -translate-x-1/2 rounded-xl border border-white/20 bg-black/85 p-3 text-xs text-zinc-100 shadow-2xl"
                style={{ left: `${(tooltipPos.x / VIEW_SIZE) * 100}%`, top: `${(tooltipPos.y / VIEW_SIZE) * 100}%` }}
              >
                <p className="font-semibold">
                  {selectedNode.community === "emerging" ? t.discoveryTitle : nodeCopy[selectedNode.community].title}
                </p>
                <p className="mt-1 text-zinc-300">
                  {selectedNode.community === "emerging" ? t.discoveryText : nodeCopy[selectedNode.community].text}
                </p>
              </div>
            ) : null}
          </div>

          <div className="relative z-10 mx-auto mt-6 max-w-3xl rounded-xl border border-white/10 bg-black/35 p-4 text-center backdrop-blur-sm">
            <p className="text-sm text-zinc-300">{t.networkText}</p>
            <p className="mt-1 text-xs text-zinc-500">{t.hint}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
            <h3 className="font-serif text-2xl text-zinc-100">{t.logicTitle}</h3>
            <ul className="mt-4 space-y-2 text-zinc-200">
              {t.logic.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-quantum-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
            <h3 className="font-serif text-2xl text-zinc-100">
              {language === "en" ? "Decentralized dynamic" : "Dezentrale Dynamik"}
            </h3>
            <p className="mt-4 text-zinc-300">
              {language === "en"
                ? "The network has no central command node. Stability emerges from many local relationships, adaptive signaling, and sovereign contribution."
                : "Das Netzwerk hat keinen zentralen Kommando-Node. Stabilität entsteht aus vielen lokalen Beziehungen, adaptiver Signalweitergabe und souveräner Beteiligung."}
            </p>
            <p className="mt-3 text-zinc-300">
              {language === "en"
                ? "Each node can initiate value flow. This keeps growth antifragile: if one node weakens, the network remains functional."
                : "Jeder Node kann Wertfluss initiieren. Dadurch bleibt das Wachstum antifragil: Wenn ein Node schwächer wird, bleibt das Netzwerk funktionsfähig."}
            </p>
          </article>
        </div>

        <div className="mt-10">
          <h3 className="font-serif text-2xl text-zinc-100">{t.examplesTitle}</h3>
          <p className="mt-2 max-w-4xl text-sm text-zinc-400">{t.examplesNote}</p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm sm:p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              {t.examples.map((example, idx) => (
                <button
                  key={example.title}
                  type="button"
                  onClick={() => setExampleIndex(idx)}
                  style={
                    idx === exampleIndex
                      ? {
                          borderColor: idx % 4 === 0 ? "rgba(212,175,55,0.65)" : idx % 4 === 1 ? "rgba(52,211,153,0.65)" : idx % 4 === 2 ? "rgba(139,92,246,0.65)" : "rgba(34,211,238,0.65)",
                          backgroundColor: idx % 4 === 0 ? "rgba(212,175,55,0.22)" : idx % 4 === 1 ? "rgba(52,211,153,0.22)" : idx % 4 === 2 ? "rgba(139,92,246,0.22)" : "rgba(34,211,238,0.22)"
                        }
                      : {
                          borderColor: idx % 4 === 0 ? "rgba(212,175,55,0.32)" : idx % 4 === 1 ? "rgba(52,211,153,0.32)" : idx % 4 === 2 ? "rgba(139,92,246,0.32)" : "rgba(34,211,238,0.32)",
                          backgroundColor: "rgba(0,0,0,0.22)"
                        }
                  }
                  className={`rounded-full border px-3 py-1 text-xs tracking-[0.08em] transition ${
                    idx === exampleIndex
                      ? "text-zinc-100"
                      : "text-zinc-300 hover:text-zinc-100"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={t.examples[exampleIndex].title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-xl border border-white/10 bg-black/35 p-5 backdrop-blur-sm"
              >
              <p className="text-xs tracking-[0.12em] text-zinc-500">
                {exampleIndex + 1} / {t.examples.length}
              </p>
              <h4 className="mt-2 font-serif text-2xl text-zinc-100">{t.examples[exampleIndex].title}</h4>
              <p className="mt-3 text-zinc-300">{t.examples[exampleIndex].text}</p>
              </motion.article>
            </AnimatePresence>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={previousExample}
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/40"
              >
                {t.prev}
              </button>
              <button
                type="button"
                onClick={nextExample}
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/40"
              >
                {t.next}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-zinc-300">{t.footer}</p>
      </div>
    </section>
  );
}
