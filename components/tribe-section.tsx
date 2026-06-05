"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Language } from "@/lib/i18n";

type NodeKind = "creative" | "aid" | "selfhelp" | "bridge";
type NodeCommunity = NodeKind | "emerging";
type CategoryId =
  | "creative-groups"
  | "aid-orgs"
  | "selfhelp-circles"
  | "learning-pods"
  | "mentoring-networks"
  | "family-parenting"
  | "soul-practice"
  | "regenerative-living"
  | "cooperative-economy"
  | "healing-bodywork"
  | "wisdom-story";
type Shock = { id: string; from: number; to: number; start: number };
type NodePulse = { id: string; nodeId: string; start: number };
type Vec3 = { x: number; y: number; z: number };
type ProjectedNode = {
  id: string;
  community: NodeCommunity;
  categoryId: CategoryId | null;
  x2d: number;
  y2d: number;
  depth: number;
  r: number;
  color: string;
};

const emergingColor = "#a1a1aa";

const categoryColor: Record<CategoryId, string> = {
  "creative-groups": "#d4af37",
  "aid-orgs": "#34d399",
  "selfhelp-circles": "#8b5cf6",
  "learning-pods": "#22d3ee",
  "mentoring-networks": "#f59e0b",
  "family-parenting": "#f472b6",
  "soul-practice": "#6366f1",
  "regenerative-living": "#14b8a6",
  "cooperative-economy": "#84cc16",
  "healing-bodywork": "#e879f9",
  "wisdom-story": "#fbbf24"
};

const emergingShockColor = {
  core: "rgba(161,161,170,%OP%)",
  aura: "rgba(228,228,231,%OP%)"
};

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = hex.replace("#", "");
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16)
  };
}

function rgbaFromHex(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${alpha})`;
}

function shockPaletteFromHex(hex: string): { core: string; aura: string } {
  const { r, g, b } = hexToRgb(hex);
  const lighten = (channel: number) => Math.min(255, channel + Math.round((255 - channel) * 0.35));
  return {
    core: `rgba(${r},${g},${b},%OP%)`,
    aura: `rgba(${lighten(r)},${lighten(g)},${lighten(b)},%OP%)`
  };
}

function buttonStyleFromHex(hex: string): { activeBorder: string; activeBg: string; idleBorder: string } {
  return {
    activeBorder: rgbaFromHex(hex, 0.65),
    activeBg: rgbaFromHex(hex, 0.22),
    idleBorder: rgbaFromHex(hex, 0.32)
  };
}

function nodeColor(categoryId: CategoryId | null): string {
  return categoryId ? categoryColor[categoryId] : emergingColor;
}

function shockPaletteForNode(categoryId: CategoryId | null): { core: string; aura: string } {
  return categoryId ? shockPaletteFromHex(categoryColor[categoryId]) : emergingShockColor;
}

const categories: Array<{
  id: CategoryId;
  community: NodeKind;
  en: { title: string; text: string; nodeTitle: string };
  de: { title: string; text: string; nodeTitle: string };
}> = [
  {
    id: "creative-groups",
    community: "creative",
    en: {
      title: "Creative Groups",
      nodeTitle: "Creative Group Node",
      text: "Writing circles, music collectives, design labs, and craft ateliers where soul expression becomes social value."
    },
    de: {
      title: "Kreativgruppen",
      nodeTitle: "Kreativgruppen-Node",
      text: "Schreibzirkel, Musik-Kollektive, Design-Labs und Handwerksräume, in denen Seelenausdruck sozialen Wert erzeugt."
    }
  },
  {
    id: "aid-orgs",
    community: "aid",
    en: {
      title: "Aid Organizations",
      nodeTitle: "Aid Node",
      text: "Local help networks for children, elders, vulnerable people, and crisis response - service as applied compassion."
    },
    de: {
      title: "Hilfsorganisationen",
      nodeTitle: "Hilfs-Node",
      text: "Lokale Hilfsnetze für Kinder, Ältere, vulnerable Menschen und Krisenhilfe - Dienst als angewandtes Mitgefühl."
    }
  },
  {
    id: "selfhelp-circles",
    community: "selfhelp",
    en: {
      title: "Self-Help Circles",
      nodeTitle: "Self-Help Node",
      text: "Peer groups for integration, reflection, sobriety, and shadow work - shared accountability without hierarchy."
    },
    de: {
      title: "Selbsthilfegruppen",
      nodeTitle: "Selbsthilfe-Node",
      text: "Peer-Gruppen für Integration, Reflexion, Nüchternheit und Schattenarbeit - gemeinsame Verantwortung ohne Hierarchie."
    }
  },
  {
    id: "learning-pods",
    community: "bridge",
    en: {
      title: "Learning Pods",
      nodeTitle: "Learning Pod Node",
      text: "Small study circles for psychology, consciousness research, economics, and practical life skills."
    },
    de: {
      title: "Lern-Pods",
      nodeTitle: "Lern-Pod-Node",
      text: "Kleine Studienkreise für Psychologie, Bewusstseinsforschung, Ökonomie und praktische Lebenskompetenz."
    }
  },
  {
    id: "mentoring-networks",
    community: "bridge",
    en: {
      title: "Mentoring Networks",
      nodeTitle: "Mentoring Node",
      text: "Cross-generational guidance where mature members support newcomers through lived example."
    },
    de: {
      title: "Mentoring-Netzwerke",
      nodeTitle: "Mentoring-Node",
      text: "Generationenübergreifende Begleitung, in der reifere Mitglieder Neue durch gelebtes Beispiel unterstützen."
    }
  },
  {
    id: "family-parenting",
    community: "selfhelp",
    en: {
      title: "Family & Parenting Cells",
      nodeTitle: "Family Cell Node",
      text: "Communities for conscious parenting, relational maturity, and resilient family culture."
    },
    de: {
      title: "Familien- & Elternzellen",
      nodeTitle: "Familienzellen-Node",
      text: "Gemeinschaften für bewusste Elternschaft, Beziehungsreife und eine resiliente Familienkultur."
    }
  },
  {
    id: "soul-practice",
    community: "selfhelp",
    en: {
      title: "Soul Practice Circles",
      nodeTitle: "Soul Practice Node",
      text: "Contemplative groups for meditation, ritual, and daily inner alignment - anchoring soul work in shared rhythm."
    },
    de: {
      title: "Praxiskreise",
      nodeTitle: "Praxiskreis-Node",
      text: "Kontemplative Gruppen für Meditation, Ritual und tägliche innere Ausrichtung - Seelenarbeit im gemeinsamen Rhythmus verankern."
    }
  },
  {
    id: "regenerative-living",
    community: "aid",
    en: {
      title: "Regenerative Living Cells",
      nodeTitle: "Regenerative Living Node",
      text: "Local cells for ecological stewardship, food sovereignty, and land care - service extended to the living world."
    },
    de: {
      title: "Regenerative Lebenszellen",
      nodeTitle: "Regenerative Lebenszellen-Node",
      text: "Lokale Zellen für ökologische Verantwortung, Ernährungssouveränität und Landpflege - Dienst am Lebendigen."
    }
  },
  {
    id: "cooperative-economy",
    community: "bridge",
    en: {
      title: "Cooperative Economy Nodes",
      nodeTitle: "Cooperative Economy Node",
      text: "Peer exchange rings, gift economies, and local cooperatives that circulate value without extractive middle layers."
    },
    de: {
      title: "Kooperative Wirtschaftsknoten",
      nodeTitle: "Kooperativer Wirtschafts-Node",
      text: "Peer-Tauschringe, Gabenkreisläufe und lokale Genossenschaften, die Wert ohne extraktive Zwischenebenen zirkulieren lassen."
    }
  },
  {
    id: "healing-bodywork",
    community: "selfhelp",
    en: {
      title: "Healing & Bodywork Circles",
      nodeTitle: "Healing Circle Node",
      text: "Somatic integration groups for trauma release, breathwork, and embodied recovery - healing as shared presence."
    },
    de: {
      title: "Heilungs- & Körperarbeitsgruppen",
      nodeTitle: "Heilungskreis-Node",
      text: "Somatische Integrationsgruppen für Trauma-Auflösung, Atemarbeit und verkörperte Heilung - Heilung als gemeinsame Präsenz."
    }
  },
  {
    id: "wisdom-story",
    community: "creative",
    en: {
      title: "Wisdom & Story Circles",
      nodeTitle: "Wisdom Circle Node",
      text: "Oral tradition gatherings where lived experience becomes transmissible wisdom across generations."
    },
    de: {
      title: "Weisheits- & Erzählkreise",
      nodeTitle: "Weisheitskreis-Node",
      text: "Mündliche Traditionskreise, in denen gelebte Erfahrung zu übertragbarer Weisheit zwischen Generationen wird."
    }
  }
];

const copy = {
  en: {
    title: "The tribe as a decentralized network",
    intro:
      "Soul maturity spreads through lived example, not command chains. Autonomous communities connect as equal nodes and co-create practical support in real life.",
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
      "Seelenreife verbreitet sich durch gelebtes Beispiel, nicht durch Befehlsketten. Autonome Gemeinschaften verbinden sich als gleichwertige Nodes und schaffen konkrete Unterstützung im Alltag.",
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
    footer: "Prinzip 35 bleibt die Sicherung: offen für tiefere Wahrheit. Das Netzwerk entwickelt sich durch Lernen, nicht durch Dogma.",
    hint: "Zum Drehen ziehen. Auf einen Node klicken, um Infos zu sehen und elektrische Impulse auszusenden.",
    networkText: "Kein Zentrum, kein Single Point of Failure: Nodes, Verbindungen und Signalfluss bleiben lebendig und adaptiv.",
    discoveryTitle: "Entstehender Node (Findungsphase)",
    discoveryText:
      "Dieser Node befindet sich noch in der Orientierung. Er klärt Rolle, Vertrauensbeziehungen und Dienstfähigkeit, bevor er zu einem stabilen Praxis-Node wird."
  }
} as const;

const nodeData: Array<{
  id: string;
  pos: Vec3;
  size: number;
  community: NodeCommunity;
  categoryId: CategoryId | null;
}> = [
  { id: "n1", pos: { x: 0, y: 1.85, z: 0 }, size: 4.3, community: "emerging", categoryId: null },
  { id: "n2", pos: { x: 1.22, y: 1.2, z: 0 }, size: 5.7, community: "bridge", categoryId: "learning-pods" },
  { id: "n3", pos: { x: 0.38, y: 1.2, z: 1.14 }, size: 5.8, community: "creative", categoryId: "creative-groups" },
  { id: "n4", pos: { x: -0.98, y: 1.2, z: 0.72 }, size: 5.6, community: "aid", categoryId: "aid-orgs" },
  { id: "n5", pos: { x: -0.98, y: 1.2, z: -0.72 }, size: 5.6, community: "selfhelp", categoryId: "selfhelp-circles" },
  { id: "n6", pos: { x: 0.38, y: 1.2, z: -1.14 }, size: 5.7, community: "bridge", categoryId: "mentoring-networks" },
  { id: "n7", pos: { x: 1.55, y: 0, z: 0 }, size: 5.9, community: "creative", categoryId: "wisdom-story" },
  { id: "n8", pos: { x: 0.78, y: 0, z: 1.34 }, size: 5.7, community: "aid", categoryId: "regenerative-living" },
  { id: "n9", pos: { x: -0.78, y: 0, z: 1.34 }, size: 5.7, community: "selfhelp", categoryId: "family-parenting" },
  { id: "n10", pos: { x: -1.55, y: 0, z: 0 }, size: 5.9, community: "bridge", categoryId: "cooperative-economy" },
  { id: "n11", pos: { x: -0.78, y: 0, z: -1.34 }, size: 5.7, community: "creative", categoryId: "creative-groups" },
  { id: "n12", pos: { x: 0.78, y: 0, z: -1.34 }, size: 5.7, community: "aid", categoryId: "aid-orgs" },
  { id: "n13", pos: { x: 1.22, y: -1.2, z: 0 }, size: 5.7, community: "selfhelp", categoryId: "soul-practice" },
  { id: "n14", pos: { x: 0.38, y: -1.2, z: 1.14 }, size: 5.7, community: "bridge", categoryId: "learning-pods" },
  { id: "n15", pos: { x: -0.98, y: -1.2, z: 0.72 }, size: 5.6, community: "creative", categoryId: "wisdom-story" },
  { id: "n16", pos: { x: -0.98, y: -1.2, z: -0.72 }, size: 5.6, community: "aid", categoryId: "regenerative-living" },
  { id: "n17", pos: { x: 0.38, y: -1.2, z: -1.14 }, size: 5.8, community: "selfhelp", categoryId: "healing-bodywork" },
  { id: "n18", pos: { x: 0, y: -1.85, z: 0 }, size: 4.3, community: "emerging", categoryId: null },
  { id: "n19", pos: { x: 1.95, y: 0.35, z: 0.55 }, size: 3.8, community: "emerging", categoryId: null },
  { id: "n20", pos: { x: -2.05, y: -0.25, z: 0.25 }, size: 3.9, community: "emerging", categoryId: null },
  { id: "n21", pos: { x: 0.1, y: 2.2, z: -0.75 }, size: 3.7, community: "emerging", categoryId: null },
  { id: "n22", pos: { x: -0.2, y: -2.2, z: 0.7 }, size: 3.7, community: "emerging", categoryId: null },
  { id: "n23", pos: { x: -0.35, y: 0.55, z: -1.75 }, size: 5.5, community: "selfhelp", categoryId: "selfhelp-circles" },
  { id: "n24", pos: { x: 1.05, y: 0.55, z: 1.75 }, size: 5.5, community: "bridge", categoryId: "mentoring-networks" },
  { id: "n25", pos: { x: -1.35, y: -0.55, z: -1.45 }, size: 5.4, community: "selfhelp", categoryId: "family-parenting" },
  { id: "n26", pos: { x: 1.35, y: -0.55, z: 1.45 }, size: 5.4, community: "bridge", categoryId: "cooperative-economy" }
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
  [21, 14], [21, 17],
  [22, 4], [22, 17], [22, 10],
  [23, 2], [23, 7], [23, 8],
  [24, 9], [24, 13], [24, 25],
  [25, 10], [25, 16],
  [25, 6], [25, 13], [25, 14]
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
  const examples = useMemo(
    () =>
      categories.map((category) => ({
        id: category.id,
        community: category.community,
        title: category[language].title,
        text: category[language].text,
        nodeTitle: category[language].nodeTitle
      })),
    [language]
  );
  const categoryById = useMemo(() => new Map(categories.map((category) => [category.id, category])), []);
  const primaryNodeByCategory = useMemo(() => {
    const map = new Map<CategoryId, string>();
    nodeData.forEach((node) => {
      if (node.categoryId && !map.has(node.categoryId)) map.set(node.categoryId, node.id);
    });
    return map;
  }, []);
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

  function categoryTooltip(categoryId: CategoryId) {
    const category = categoryById.get(categoryId);
    if (!category) return null;
    return { title: category[language].nodeTitle, text: category[language].text };
  }

  function selectCategory(index: number, pulseNetwork = true) {
    setExampleIndex(index);
    const categoryId = examples[index]?.id;
    if (!categoryId) return;
    const nodeId = primaryNodeByCategory.get(categoryId);
    if (!nodeId) return;
    setSelectedNodeId(nodeId);
    const node = nodeData.find((entry) => entry.id === nodeId);
    setActiveNode(node?.community === "emerging" ? null : (node?.community as NodeKind) ?? null);
    if (pulseNetwork) {
      setNodePulses((prev) => [...prev, { id: `pulse-${nodeId}-${time}`, nodeId, start: time }]);
      triggerShockFromNode(nodeId);
    }
  }

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
          categoryId: node.categoryId,
          x2d: VIEW_CENTER + rotated.x * radius * perspective,
          y2d: VIEW_CENTER + rotated.y * radius * perspective,
          depth: rotated.z,
          r: node.size * (0.85 + (rotated.z + 1) * 0.12),
          color: nodeColor(node.categoryId)
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

  function clickNode(nodeId: string, community: NodeCommunity, categoryId: CategoryId | null) {
    if (dragMovedRef.current) return;
    setSelectedNodeId(nodeId);
    setNodePulses((prev) => [...prev, { id: `pulse-${nodeId}-${time}`, nodeId, start: time }]);
    setActiveNode(community === "emerging" ? null : community);
    if (categoryId) {
      const categoryIndex = examples.findIndex((example) => example.id === categoryId);
      if (categoryIndex >= 0) setExampleIndex(categoryIndex);
    }
    setLastInteractionAt(time);
    triggerShockFromNode(nodeId);
  }

  function previousExample() {
    selectCategory((exampleIndex - 1 + examples.length) % examples.length);
  }

  function nextExample() {
    selectCategory((exampleIndex + 1) % examples.length);
  }

  const selectedTooltip = useMemo(() => {
    if (!selectedNode) return null;
    if (selectedNode.community === "emerging") {
      return { title: t.discoveryTitle, text: t.discoveryText };
    }
    if (selectedNode.categoryId) {
      return categoryTooltip(selectedNode.categoryId);
    }
    return null;
  }, [selectedNode, language, t.discoveryTitle, t.discoveryText, categoryById]);

  const activeCategoryId = examples[exampleIndex]?.id ?? null;

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
              const edgeColor = rgbaFromHex(nodeColor(nodeData[a].categoryId), pulse);
              return (
                <line
                  key={`edge-${a}-${b}`}
                  x1={na.x2d}
                  y1={na.y2d}
                  x2={nb.x2d}
                  y2={nb.y2d}
                  stroke={edgeColor}
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
              const sourceCategoryId = nodeData[shock.from].categoryId;
              const palette = shockPaletteForNode(sourceCategoryId);
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
              const isCategoryActive = node.categoryId !== null && node.categoryId === activeCategoryId;
              const pulse = nodePulses.find((p) => p.nodeId === node.id);
              const pulseAge = pulse ? time - pulse.start : null;
              const pulseScale = pulseAge !== null ? 1 + pulseAge * 2.6 : 1;
              const pulseOpacity = pulseAge !== null ? Math.max(0, 0.95 - pulseAge * 1.6) : 0;
              return (
                <g
                  key={node.id}
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseEnter={() => {
                    if (node.community !== "emerging") setActiveNode(node.community);
                  }}
                  onMouseLeave={() => main && setActiveNode(null)}
                  onClick={() => clickNode(node.id, node.community, node.categoryId)}
                  className="cursor-pointer"
                >
                  {isCategoryActive ? (
                    <circle
                      cx={node.x2d}
                      cy={node.y2d}
                      r={node.r + 5.5}
                      fill="none"
                      stroke={node.color}
                      strokeWidth="1.6"
                      opacity={0.72}
                    />
                  ) : null}
                  {pulseAge !== null ? (
                    <circle
                      cx={node.x2d}
                      cy={node.y2d}
                      r={node.r + 2 + pulseScale * 4.5}
                      fill="none"
                      stroke={node.color}
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

            {selectedNode && selectedTooltip && tooltipPos ? (
              <div
                className="pointer-events-none absolute z-20 w-64 -translate-x-1/2 rounded-xl border border-white/20 bg-black/85 p-3 text-xs text-zinc-100 shadow-2xl"
                style={{ left: `${(tooltipPos.x / VIEW_SIZE) * 100}%`, top: `${(tooltipPos.y / VIEW_SIZE) * 100}%` }}
              >
                <p className="font-semibold">{selectedTooltip.title}</p>
                <p className="mt-1 text-zinc-300">{selectedTooltip.text}</p>
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
              {examples.map((example, idx) => {
                const palette = buttonStyleFromHex(categoryColor[example.id]);
                return (
                <button
                  key={example.id}
                  type="button"
                  onClick={() => selectCategory(idx)}
                  style={
                    idx === exampleIndex
                      ? {
                          borderColor: palette.activeBorder,
                          backgroundColor: palette.activeBg
                        }
                      : {
                          borderColor: palette.idleBorder,
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
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={examples[exampleIndex].id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-xl border border-white/10 bg-black/35 p-5 backdrop-blur-sm"
              >
              <p className="text-xs tracking-[0.12em] text-zinc-500">
                {exampleIndex + 1} / {examples.length}
              </p>
              <h4 className="mt-2 font-serif text-2xl text-zinc-100">{examples[exampleIndex].title}</h4>
              <p className="mt-3 text-zinc-300">{examples[exampleIndex].text}</p>
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
