"use client";

import { useEffect, useId, useMemo, useReducer, useRef, useState, type MouseEvent, type PointerEvent, type ReactNode, type RefObject } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    eyebrow: "Was wir glauben – und wie wir leben",
    title: "Alethemora auf den Punkt",
    nameLead: "Der Name trägt drei Worte.",
    nameParts: [
      {
        word: "Aletheia",
        text: "das Unverborgene, die Wahrheit: Alethemora ist ein Pfad der Wissenschaft. Die Wahrheit der Geistführer liegt vor unseren Augen, in den Zeichen, die sie uns auf den Weg legen."
      },
      {
        word: "Hem",
        text: "das Seelenheim, woher wir kommen, und die Seelenfreunde, die immer bei uns sind."
      },
      {
        word: "Amor",
        text: "die Liebe: die endlose Energie der Schöpfung, des Daseins und des Lichts, unsere Göttlichkeit, in der, mit der und durch die wir uns in Ewigkeit entfalten."
      }
    ],
    cards: [
      {
        title: "Du bist eine Seele.",
        lead: "Ein Teil der Quelle – aus Licht und Liebe, einzigartig und unsterblich.",
        body: "Ein Teil der Quelle – aus Licht und Liebe, einzigartig und unsterblich. Du bist nicht dein Körper, dein Name oder deine Geschichte. Dein Körper ist dein Werkzeug, nicht dein Wesen."
      },
      {
        title: "Du hast dieses Leben gewählt.",
        lead: "nicht als Strafe, sondern als Schule",
        body: "Vor deiner Geburt hast du mit deinen Geistführern deine Familie, deine Umstände und deine großen Lektionen gewählt – nicht als Strafe, sondern als Schule. Nichts davon ist sinnlos oder zufällig."
      },
      {
        title: "Dein freier Wille entscheidet.",
        lead: "kein fertiges Drehbuch",
        body: "Gewählt hast du die Schlüsselmomente, kein fertiges Drehbuch. Die Zukunft ist ein Baum der Möglichkeiten: Der Weg ist angelegt, der Ausgang ist offen – mit jeder Entscheidung wählst du den nächsten Ast."
      },
      {
        title: "Du hast vergessen – damit es echt wird.",
        lead: "Mit der Geburt vergisst die Seele",
        body: "Mit der Geburt vergisst die Seele, woher sie kommt und was sie sich vorgenommen hat. Erst im Vergessen wird jede liebevolle Entscheidung zu einer wirklichen Wahl. Der Weg führt zurück: vom Vergessen zur Erinnerung."
      },
      {
        title: "Seele und Tier.",
        lead: "In dir sprechen zwei Stimmen",
        body: "In dir sprechen zwei Stimmen: das Tier, laut, das überleben will – und die Seele, leise, die weiß. Reife heißt nicht, das Tier zu bekämpfen, sondern es zu erkennen und zu führen."
      },
      {
        title: "Liebe erschafft.",
        lead: "Liebe musst du nicht finden – sie ist, was du bist.",
        body: "Liebe musst du nicht finden – sie ist, was du bist. Die Seele entfaltet sich, erschafft, erlebt, was sie erschaffen hat, und lernt daraus: der Kreis der Liebe. Weit gereifte Seelen, so die Berichte, gestalten sogar Lebensformen und Welten mit – und erleben sie selbst."
      },
      {
        title: "Kein Gericht, keine Hölle.",
        lead: "kein Urteil, sondern eine liebevolle Rückschau",
        body: "Am Ende eines Lebens steht kein Urteil, sondern eine liebevolle Rückschau und ein Heimkommen. Karma ist keine Strafe, sondern Selbsterkenntnis, und jede Rückkehr auf die Erde ist eine freie Wahl."
      },
      {
        title: "Du bist nie allein.",
        lead: "Du reist mit einer Gruppe vertrauter Seelen",
        body: "Du reist mit einer Gruppe vertrauter Seelen durch viele Leben – als Familie, Freunde, manchmal als schwierige Lehrer. Geistführer begleiten dich, ohne dir Entscheidungen abzunehmen. Und der Tod trennt nicht."
      }
    ],
    mapLead: "Alethemora ist eine Landkarte, kein Dogma.",
    map: "Alethemora ist eine Landkarte, kein Dogma. Sie verwebt vier Quellen – die Reinkarnationsforschung von Michael Newton, die Lehre von der Gegenwart, die Idee bewusster Erschaffung und die Wissenschaft von Gehirn und Verhalten – und lädt dazu ein, sie im eigenen Leben zu prüfen. Keine Religion besitzt die Wahrheit allein; sie alle können Wege zum selben Zuhause sein.",
    threadTitle: "Der rote Faden in sechs Schritten",
    steps: [
      {
        title: "Quelle",
        lead: "Die Quelle ist, in diesem Bild, ein Ozean aus Bewusstsein und Liebe.",
        body: "Die Quelle ist, in diesem Bild, ein Ozean aus Bewusstsein und Liebe. Unzählige Seelen strömen aus ihr hervor. Das Leben gewinnt Ausrichtung, wenn es als Ausdruck dieser Quelle verstanden wird."
      },
      {
        title: "Geistwelt",
        lead: "eine Welt geschichteter Resonanz",
        body: "In den Berichten der Hypnoseregression wird eine Welt geschichteter Resonanz beschrieben — Heilung, Seelengruppen, Räte, Wachstum, das geführt und gemeinschaftlich geschieht."
      },
      {
        title: "Gewähltes Leben",
        lead: "entscheidet die Seele",
        body: "Hier, so die wiederkehrende Erzählung, entscheidet die Seele: welche Familie, welche Bedingungen, welche Prüfungen — als Training für das, was sie entwickeln möchte. Schwierigkeit als Training, nicht als Strafe."
      },
      {
        title: "Erdschule",
        lead: "Der Körper und die alltägliche Reibung sind die Schmiede",
        body: "Der Körper und die alltägliche Reibung sind die Schmiede, in der Erkenntnis zu Charakter wird. Der Alltag ist der Ort, an dem Seelenlernen sichtbar wird — Erkenntnis reift dort, wo sie auf realen Widerstand trifft."
      },
      {
        title: "Die Rückkehr",
        lead: "Die Inkarnation endet, die Seele lässt den Körper los.",
        body: "Die Inkarnation endet, die Seele lässt den Körper los. Übergang, Rückschau aus Liebe statt aus Urteil, Wiedersehen mit denen, die sie begleiteten. Rückkehr bedeutet verstehen, vergeben und neu planen."
      },
      {
        title: "Seelenreife",
        lead: "Reinkarnation, so das Bild, schleift das Ego ab",
        body: "Reinkarnation, so das Bild, schleift das Ego ab und vertieft das Mitgefühl. Reife Seelen wachsen über sich selbst hinaus, in Dienst an anderen — Meisterschaft der Liebe als klares, dienendes Verstehen."
      }
    ]
  },
  en: {
    eyebrow: "What we believe — and how we live",
    title: "Alethemora in brief",
    // TODO: EN prüfen
    nameLead: "The name carries three words.",
    nameParts: [
      {
        word: "Aletheia",
        text: "the unconcealed, the truth: Alethemora is a path of science. The truth of the spirit guides lies before our eyes, in the signs they give us on our way."
      },
      {
        word: "Hem",
        text: "the soul's home, where we come from, and the soul friends who are always with us."
      },
      {
        word: "Amor",
        text: "love: the endless energy of creation, of being, and of the light, our divinity, in which, with which, and through which we unfold for eternity."
      }
    ],
    cards: [
      {
        title: "You are a soul.",
        lead: "A part of the source — of light and love, unique and immortal.",
        body: "A part of the source — of light and love, unique and immortal. You are not your body, your name, or your story. Your body is your instrument, not your essence."
      },
      {
        title: "You chose this life.",
        lead: "not as punishment, but as a school",
        body: "Before your birth you chose, with your spirit guides, your family, your circumstances, and your great lessons — not as punishment, but as a school. None of it is meaningless or accidental."
      },
      {
        title: "Your free will decides.",
        lead: "not a finished script",
        body: "You chose the key moments, not a finished script. The future is a tree of possibilities: the path is laid out, the outcome is open — with every decision you choose the next branch."
      },
      {
        title: "You forgot — so that it becomes real.",
        lead: "With birth the soul forgets",
        body: "With birth the soul forgets where it comes from and what it set out to do. Only in forgetting does every loving decision become a real choice. The way leads back: from forgetting to remembrance."
      },
      {
        title: "Soul and animal.",
        lead: "Two voices speak in you",
        body: "Two voices speak in you: the animal, loud, that wants to survive — and the soul, quiet, that knows. Maturity does not mean fighting the animal, but recognizing it and leading it."
      },
      {
        title: "Love creates.",
        lead: "You do not have to find love — it is what you are.",
        body: "You do not have to find love — it is what you are. The soul unfolds, creates, experiences what it has created, and learns from it: the circle of love. Far-matured souls, so the reports say, even take part in shaping life forms and worlds — and experience them themselves."
      },
      {
        title: "No court, no hell.",
        lead: "no verdict, but a loving review",
        body: "At the end of a life there is no verdict, but a loving review and a coming home. Karma is not punishment, but self-knowledge, and every return to earth is a free choice."
      },
      {
        title: "You are never alone.",
        lead: "You travel with a group of familiar souls",
        body: "You travel with a group of familiar souls through many lives — as family, friends, sometimes as difficult teachers. Spirit guides accompany you without taking your decisions from you. And death does not separate."
      }
    ],
    mapLead: "Alethemora is a map, not a dogma.",
    map: "Alethemora is a map, not a dogma. It weaves four sources — the reincarnation research of Michael Newton, the teaching of the present, the idea of conscious creation, and the science of brain and behavior — and invites you to test them in your own life. No religion owns the truth alone; they can all be ways to the same home.",
    threadTitle: "The red thread in six steps",
    steps: [
      {
        title: "Source",
        lead: "The source, in this image, is an ocean of consciousness and love.",
        body: "The source, in this image, is an ocean of consciousness and love. Countless souls stream out of it. Life gains direction when it is understood as an expression of this source."
      },
      {
        title: "Spirit world",
        lead: "a world of layered resonance",
        body: "In the reports of hypnosis regression a world of layered resonance is described — healing, soul groups, councils, growth that happens in a guided and communal way."
      },
      {
        title: "Chosen life",
        lead: "the soul decides",
        body: "Here, so the recurring telling goes, the soul decides: which family, which conditions, which tests — as training for what it wants to develop. Difficulty as training, not as punishment."
      },
      {
        title: "Earth school",
        lead: "The body and everyday friction are the forge",
        body: "The body and everyday friction are the forge in which recognition becomes character. Everyday life is the place where soul-learning becomes visible — recognition matures where it meets real resistance."
      },
      {
        title: "The return",
        lead: "The incarnation ends, the soul lets go of the body.",
        body: "The incarnation ends, the soul lets go of the body. Transition, a review out of love rather than judgment, reunion with those who accompanied it. Return means to understand, to forgive, and to plan anew."
      },
      {
        title: "Soul maturity",
        lead: "Reincarnation, so the image, wears the ego down",
        body: "Reincarnation, so the image, wears the ego down and deepens compassion. Mature souls grow beyond themselves, into service to others — mastery of love as clear, serving understanding."
      }
    ]
  }
} as const;

type Piece = {
  readonly title: string;
  readonly lead: string;
  readonly body: string;
};

type RevealOptions = {
  hover: boolean;
  focusReveal: boolean;
  keyboardToggles: boolean;
  trackScroll: boolean;
};

type RevealState = {
  pinned: number[];
  dismissed: number | null;
  hovered: number | null;
  focused: number | null;
  holdHover: number | null;
};

type RevealAction =
  | { type: "hover"; index: number }
  | { type: "leave"; index: number }
  | { type: "pointer-sync"; index: number | null }
  | { type: "focus"; index: number }
  | { type: "blur"; index: number }
  | { type: "nearest-moved"; nearest: number | null }
  | {
      type: "toggle";
      index: number;
      nearest: number | null;
      keyboard: boolean;
      hover: boolean;
      keyboardToggles: boolean;
    };

const revealInitial: RevealState = {
  pinned: [],
  dismissed: null,
  hovered: null,
  focused: null,
  holdHover: null
};

function splitFirstSentence(text: string): { first: string; rest: string } {
  const match = /[.!?…](?=\s|$)/.exec(text);
  if (!match || match.index === undefined) return { first: text.trim(), rest: "" };
  const cut = match.index + match[0].length;
  return { first: text.slice(0, cut).trim(), rest: text.slice(cut).trim() };
}

function isRevealed(state: RevealState, index: number, nearest: number | null, hover: boolean) {
  if (state.pinned.includes(index)) return true;
  if (state.focused === index) return true;
  if (hover && state.hovered === index && state.holdHover !== index) return true;
  return nearest === index && state.dismissed !== index;
}

function revealReducer(state: RevealState, action: RevealAction): RevealState {
  switch (action.type) {
    case "hover":
      if (state.holdHover === action.index || state.hovered === action.index) return state;
      return { ...state, hovered: action.index };
    case "leave":
      if (state.hovered !== action.index && state.holdHover !== action.index) return state;
      return {
        ...state,
        hovered: state.hovered === action.index ? null : state.hovered,
        holdHover: state.holdHover === action.index ? null : state.holdHover
      };
    case "pointer-sync": {
      const index = action.index;
      const nextHold = state.holdHover !== null && state.holdHover === index ? state.holdHover : null;
      if (nextHold !== null) {
        if (state.hovered === null && state.holdHover === nextHold) return state;
        return { ...state, hovered: null, holdHover: nextHold };
      }
      if (state.hovered === index && state.holdHover === null) return state;
      return { ...state, hovered: index, holdHover: null };
    }
    case "focus":
      if (state.focused === action.index) return state;
      return { ...state, focused: action.index };
    case "blur":
      if (state.focused !== action.index) return state;
      return { ...state, focused: null };
    case "nearest-moved":
      if (state.dismissed === null || state.dismissed === action.nearest) return state;
      return { ...state, dismissed: null };
    case "toggle": {
      if (action.keyboard && !action.keyboardToggles) return state;
      const { index, nearest } = action;
      const pinned = state.pinned.includes(index);
      const hoverOpen = action.hover && state.hovered === index && state.holdHover !== index;
      const scrollOpen = nearest === index && state.dismissed !== index;
      if (pinned) {
        return {
          ...state,
          pinned: state.pinned.filter((item) => item !== index),
          dismissed: nearest === index ? index : state.dismissed,
          hovered: null,
          holdHover: index
        };
      }
      if (hoverOpen || state.focused === index) {
        return {
          ...state,
          pinned: [...state.pinned, index],
          dismissed: state.dismissed === index ? null : state.dismissed
        };
      }
      if (scrollOpen) {
        return { ...state, dismissed: index, hovered: null, holdHover: index };
      }
      return {
        ...state,
        pinned: [...state.pinned, index],
        dismissed: state.dismissed === index ? null : state.dismissed
      };
    }
    default:
      return state;
  }
}

const NEAREST_SWITCH_PX = 64;
const ROW_BAND_PX = 12;

function useNearestItem<T extends HTMLElement>(containerRef: RefObject<T | null>, enabled: boolean) {
  const [nearest, setNearest] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const nearestRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const root = containerRef.current;
    if (!root) return;

    let frame = 0;
    let cancelled = false;
    let readySent = false;

    const measure = () => {
      frame = 0;
      if (cancelled) return;
      const vx = window.innerWidth / 2;
      const vy = window.innerHeight / 2;
      const samples: Array<{
        index: number;
        cx: number;
        cy: number;
        top: number;
        itemHeight: number;
        panelHeight: number;
        visible: boolean;
      }> = [];

      root.querySelectorAll<HTMLElement>("[data-reveal-item]").forEach((node) => {
        const index = Number(node.dataset.index);
        const anchor = node.querySelector<HTMLElement>("[data-reveal-anchor]");
        if (!anchor || Number.isNaN(index)) return;
        const anchorRect = anchor.getBoundingClientRect();
        const itemRect = node.getBoundingClientRect();
        const panel = node.querySelector<HTMLElement>("[data-reveal-panel]");
        samples.push({
          index,
          cx: itemRect.left + itemRect.width / 2,
          cy: anchorRect.top + anchorRect.height / 2,
          top: anchorRect.top,
          itemHeight: itemRect.height,
          panelHeight: panel ? panel.getBoundingClientRect().height : 0,
          visible: anchorRect.height > 0 && anchorRect.bottom > 0 && anchorRect.top < window.innerHeight
        });
      });

      // Senkrecht zählt die feste Ziffer, waagerecht die Karte. Die Höhe
      // aufgeklappter Resttexte in den Zeilen darüber wird abgezogen.
      samples.sort((a, b) => a.top - b.top || a.index - b.index);
      const visibleDist = new Map<number, number>();
      let best: number | null = null;
      let bestDist = Number.POSITIVE_INFINITY;
      let shift = 0;
      let rowStart = 0;
      while (rowStart < samples.length) {
        let rowEnd = rowStart + 1;
        while (rowEnd < samples.length && Math.abs(samples[rowEnd].top - samples[rowStart].top) <= ROW_BAND_PX) {
          rowEnd += 1;
        }
        let rowHeight = 0;
        let closedHeight = 0;
        for (let i = rowStart; i < rowEnd; i += 1) {
          const sample = samples[i];
          rowHeight = Math.max(rowHeight, sample.itemHeight);
          closedHeight = Math.max(closedHeight, Math.max(0, sample.itemHeight - sample.panelHeight));
        }
        for (let i = rowStart; i < rowEnd; i += 1) {
          const sample = samples[i];
          if (!sample.visible) continue;
          const dist = Math.hypot(sample.cx - vx, sample.cy - shift - vy);
          visibleDist.set(sample.index, dist);
          if (dist < bestDist) {
            bestDist = dist;
            best = sample.index;
          }
        }
        shift += Math.max(0, rowHeight - closedHeight);
        rowStart = rowEnd;
      }

      const current = nearestRef.current;
      let next = current;
      if (best !== null) {
        if (current === null || !visibleDist.has(current)) {
          next = best;
        } else {
          const currentDist = visibleDist.get(current) ?? Number.POSITIVE_INFINITY;
          next = bestDist + NEAREST_SWITCH_PX < currentDist ? best : current;
        }
      }

      if (nearestRef.current !== next) {
        nearestRef.current = next;
        setNearest(next);
      }
      if (!readySent) {
        readySent = true;
        setReady(true);
      }
    };

    const request = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    if (document.fonts) {
      void document.fonts.ready.then(() => {
        if (!cancelled) request();
      });
    }
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      cancelled = true;
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [containerRef, enabled]);

  return { nearest: enabled ? nearest : null, ready: enabled ? ready : true };
}

function useRevealGroup<T extends HTMLElement>(count: number, options: RevealOptions) {
  const containerRef = useRef<T | null>(null);
  const nearestState = useNearestItem(containerRef, options.trackScroll);
  const nearest = nearestState.ready ? nearestState.nearest : null;
  const ready = nearestState.ready;
  const [state, dispatch] = useReducer(revealReducer, revealInitial);
  const nearestRef = useRef<number | null>(nearest);
  const keyboardRef = useRef(false);
  const scrollingRef = useRef(false);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  nearestRef.current = nearest;

  useEffect(() => {
    dispatch({ type: "nearest-moved", nearest });
  }, [nearest]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" || event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        keyboardRef.current = true;
      }
    };
    const onPointerDown = () => {
      keyboardRef.current = false;
    };
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);

  useEffect(() => {
    if (!options.trackScroll || !options.hover) return;
    let idle = 0;
    const arm = () => {
      scrollingRef.current = true;
      window.clearTimeout(idle);
      idle = window.setTimeout(() => {
        scrollingRef.current = false;
        const point = pointerRef.current;
        if (!point) return;
        const hit = document.elementFromPoint(point.x, point.y);
        const item = hit instanceof Element ? hit.closest<HTMLElement>("[data-reveal-item]") : null;
        const root = containerRef.current;
        if (!item || !root || !root.contains(item)) {
          dispatch({ type: "pointer-sync", index: null });
          return;
        }
        const index = Number(item.dataset.index);
        dispatch({ type: "pointer-sync", index: Number.isNaN(index) ? null : index });
      }, 180);
    };
    const onPointerMove = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("wheel", arm, { passive: true });
    window.addEventListener("scroll", arm, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.clearTimeout(idle);
      window.removeEventListener("wheel", arm);
      window.removeEventListener("scroll", arm);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [options.hover, options.trackScroll]);

  const bind = (index: number) => {
    const open = isRevealed(state, index, nearest, options.hover);
    return {
      open,
      fullInk: !ready || open || nearest === index,
      onPointerEnter: (event: PointerEvent<HTMLElement>) => {
        if (!options.hover || event.pointerType !== "mouse" || scrollingRef.current) return;
        dispatch({ type: "hover", index });
      },
      onPointerLeave: (event: PointerEvent<HTMLElement>) => {
        if (!options.hover || event.pointerType !== "mouse" || scrollingRef.current) return;
        dispatch({ type: "leave", index });
      },
      onClick: (event: MouseEvent<HTMLButtonElement>) => {
        dispatch({
          type: "toggle",
          index,
          nearest: nearestRef.current,
          keyboard: event.detail === 0,
          hover: options.hover,
          keyboardToggles: options.keyboardToggles
        });
      },
      onFocus: () => {
        if (!options.focusReveal || !keyboardRef.current) return;
        dispatch({ type: "focus", index });
      },
      onBlur: () => dispatch({ type: "blur", index })
    };
  };

  return { containerRef, nearest, bind };
}

const riseVariants = {
  idle: { opacity: 1, y: 0 },
  show: (index: number) => ({
    opacity: [0, 1],
    y: [12, 0],
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
      delay: index * 0.05,
      times: [0, 1]
    }
  })
};

function RiseIn({
  index,
  className,
  revealIndex,
  children
}: {
  index: number;
  className: string;
  revealIndex: number;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!inView || reduce !== false) return;
    setPlay(true);
  }, [inView, reduce]);

  return (
    <motion.li
      ref={ref}
      data-reveal-item=""
      data-index={revealIndex}
      className={`quiet-in ${className}`}
      custom={index}
      variants={riseVariants}
      initial="idle"
      animate={play ? "show" : "idle"}
    >
      {children}
    </motion.li>
  );
}

function RestPanel({ id, open, text, lead }: { id: string; open: boolean; text: string; lead: string }) {
  if (!text) return null;
  return (
    <div
      id={id}
      data-reveal-panel=""
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
      aria-hidden={open ? undefined : true}
    >
      <div className="overflow-hidden">
        <p className="type-body pt-3 font-normal">{emphasize(text, lead)}</p>
      </div>
    </div>
  );
}

const quietTone =
  "text-tinte-weich [&_.type-body]:text-tinte-weich [&_.type-card-title]:text-tinte-weich [&_strong]:text-tinte-weich";

function toneClass(fullInk: boolean) {
  return fullInk ? "text-tinte" : quietTone;
}

function PieceBody({
  piece,
  open,
  panelId,
  onClick,
  onFocus,
  onBlur,
  heading,
  numeral,
  numeralClass
}: {
  piece: Piece;
  open: boolean;
  panelId: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  heading: "h3" | "h4";
  numeral?: string;
  numeralClass: string;
}) {
  const { first, rest } = splitFirstSentence(piece.body);
  const phrase = piece.lead.length < first.length && first.includes(piece.lead) ? piece.lead : "";
  const Heading = heading;
  const expandable = rest.length > 0;
  const number = numeral ? (
    <span className={numeralClass} data-reveal-anchor="" aria-hidden="true">
      {numeral}
    </span>
  ) : null;
  const title = (
    <>
      {number}
      {piece.title}
    </>
  );

  return (
    <>
      <Heading className="type-card-title font-bold" data-reveal-anchor={numeral ? undefined : ""}>
        {expandable ? (
          <button
            type="button"
            className="static block w-full bg-transparent p-0 text-left after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:!outline-none"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            {title}
          </button>
        ) : (
          title
        )}
      </Heading>
      <p className="type-body mt-2 font-normal">{emphasize(first, phrase)}</p>
      {expandable ? <RestPanel id={panelId} open={open} text={rest} lead={piece.lead} /> : null}
    </>
  );
}

function CoreGrid({ cards }: { cards: readonly Piece[] }) {
  const baseId = useId();
  const { containerRef, bind } = useRevealGroup<HTMLUListElement>(cards.length, {
    hover: true,
    focusReveal: true,
    keyboardToggles: false,
    trackScroll: true
  });

  return (
    <ul ref={containerRef} className="mt-12 grid grid-cols-1 items-start gap-4 overflow-anchor-none md:grid-cols-2 md:gap-5 lg:grid-cols-4">
      {cards.map((card, index) => {
        const item = bind(index);
        return (
          <RiseIn
            key={card.title}
            index={index}
            revealIndex={index}
            className={`crystal-card relative cursor-pointer p-5 transition-colors duration-300 motion-reduce:transition-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-tinte has-[:focus-visible]:ring-offset-2 sm:p-6 ${toneClass(item.fullInk)}`}
          >
            <div onPointerEnter={item.onPointerEnter} onPointerLeave={item.onPointerLeave}>
              <PieceBody
                piece={card}
                open={item.open}
                panelId={`${baseId}-core-${index}`}
                onClick={item.onClick}
                onFocus={item.onFocus}
                onBlur={item.onBlur}
                heading="h3"
                numeral={String(index + 1).padStart(2, "0")}
                numeralClass="mb-3 block font-sans text-xs font-medium tracking-[0.16em] text-gold"
              />
            </div>
          </RiseIn>
        );
      })}
    </ul>
  );
}

const THREAD_ZONE_COUNT = 3;
const THREAD_ZONE_HYSTERESIS = 0.08;
const THREAD_READ_LINE = 0.5;

function threadZoneFromProgress(progress: number, current: number) {
  const edges = [1 / THREAD_ZONE_COUNT, 2 / THREAD_ZONE_COUNT];
  let next = current;
  while (next < THREAD_ZONE_COUNT - 1 && progress > edges[next] + THREAD_ZONE_HYSTERESIS) next += 1;
  while (next > 0 && progress < edges[next - 1] - THREAD_ZONE_HYSTERESIS) next -= 1;
  return next;
}

function threadPair(zone: number): readonly number[] {
  const first = zone * 2;
  return [first, first + 1];
}

type ThreadRevealAction =
  | { type: "hover"; index: number }
  | { type: "leave"; index: number }
  | { type: "focus"; index: number }
  | { type: "blur"; index: number }
  | { type: "scroll-hover-clear" }
  | { type: "pair-moved"; pair: readonly number[] }
  | {
      type: "toggle";
      index: number;
      pair: readonly number[];
      keyboard: boolean;
      hover: boolean;
      keyboardToggles: boolean;
    };

function isThreadRevealed(state: RevealState, index: number, pair: readonly number[], hover: boolean) {
  if (state.pinned.includes(index)) return true;
  if (state.focused === index) return true;
  if (hover && state.hovered === index && state.holdHover !== index) return true;
  return pair.includes(index) && state.dismissed !== index;
}

function threadRevealReducer(state: RevealState, action: ThreadRevealAction): RevealState {
  switch (action.type) {
    case "hover":
      if (state.holdHover === action.index || state.hovered === action.index) return state;
      return { ...state, hovered: action.index };
    case "leave":
      if (state.hovered !== action.index && state.holdHover !== action.index) return state;
      return {
        ...state,
        hovered: state.hovered === action.index ? null : state.hovered,
        holdHover: state.holdHover === action.index ? null : state.holdHover
      };
    case "focus":
      if (state.focused === action.index) return state;
      return { ...state, focused: action.index };
    case "blur":
      if (state.focused !== action.index) return state;
      return { ...state, focused: null };
    case "scroll-hover-clear":
      if (state.hovered === null && state.holdHover === null) return state;
      return { ...state, hovered: null, holdHover: null };
    case "pair-moved":
      if (state.dismissed === null || action.pair.includes(state.dismissed)) return state;
      return { ...state, dismissed: null };
    case "toggle": {
      if (action.keyboard && !action.keyboardToggles) return state;
      const { index, pair } = action;
      const pinned = state.pinned.includes(index);
      const hoverOpen = action.hover && state.hovered === index && state.holdHover !== index;
      const scrollOpen = pair.includes(index) && state.dismissed !== index;
      if (pinned) {
        return {
          ...state,
          pinned: state.pinned.filter((item) => item !== index),
          dismissed: pair.includes(index) ? index : state.dismissed,
          hovered: null,
          holdHover: index
        };
      }
      if (hoverOpen || state.focused === index) {
        return {
          ...state,
          pinned: [...state.pinned, index],
          dismissed: state.dismissed === index ? null : state.dismissed
        };
      }
      if (scrollOpen) {
        return { ...state, dismissed: index, hovered: null, holdHover: index };
      }
      return {
        ...state,
        pinned: [...state.pinned, index],
        dismissed: state.dismissed === index ? null : state.dismissed
      };
    }
    default:
      return state;
  }
}

// Drei grobe Zonen über die geschlossene Liste. Anker ist ihre Oberkante;
// aufgeklappte Resttexte zählen nicht mit, damit die Zone beim Öffnen stehen bleibt.
function useThreadPair<T extends HTMLElement>(containerRef: RefObject<T | null>, enabled: boolean) {
  const [zone, setZone] = useState(0);
  const [ready, setReady] = useState(false);
  const zoneRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const root = containerRef.current;
    if (!root) return;

    let frame = 0;
    let cancelled = false;
    let readySent = false;

    const measure = () => {
      frame = 0;
      if (cancelled) return;
      const rect = root.getBoundingClientRect();
      if (rect.height < 1) {
        if (!readySent) {
          readySent = true;
          setReady(true);
        }
        return;
      }
      let openHeight = 0;
      root.querySelectorAll<HTMLElement>("[data-reveal-panel]").forEach((panel) => {
        openHeight += panel.getBoundingClientRect().height;
      });
      const stableHeight = Math.max(1, rect.height - openHeight);
      const readY = window.innerHeight * THREAD_READ_LINE;
      const progress = Math.min(1, Math.max(0, (readY - rect.top) / stableHeight));
      const next = threadZoneFromProgress(progress, zoneRef.current);
      if (zoneRef.current !== next) {
        zoneRef.current = next;
        setZone(next);
      }
      if (!readySent) {
        readySent = true;
        setReady(true);
      }
    };

    const request = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    if (document.fonts) {
      void document.fonts.ready.then(() => {
        if (!cancelled) request();
      });
    }
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      cancelled = true;
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [containerRef, enabled]);

  const pair = useMemo(() => threadPair(enabled ? zone : 0), [enabled, zone]);
  return {
    zone: enabled ? zone : 0,
    pair,
    ready: enabled ? ready : true
  };
}

function useThreadReveal<T extends HTMLElement>(options: RevealOptions) {
  const containerRef = useRef<T | null>(null);
  const { pair, ready } = useThreadPair(containerRef, options.trackScroll);
  const [state, dispatch] = useReducer(threadRevealReducer, revealInitial);
  const pairRef = useRef(pair);
  const keyboardRef = useRef(false);
  const scrollingRef = useRef(false);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  pairRef.current = pair;

  useEffect(() => {
    dispatch({ type: "pair-moved", pair });
  }, [pair]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" || event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        keyboardRef.current = true;
      }
    };
    const onPointerDown = () => {
      keyboardRef.current = false;
    };
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);

  useEffect(() => {
    if (!options.trackScroll || !options.hover) return;
    let idle = 0;
    const arm = () => {
      scrollingRef.current = true;
      dispatch({ type: "scroll-hover-clear" });
      window.clearTimeout(idle);
      idle = window.setTimeout(() => {
        scrollingRef.current = false;
        const point = pointerRef.current;
        if (!point) return;
        const hit = document.elementFromPoint(point.x, point.y);
        const item = hit instanceof Element ? hit.closest<HTMLElement>("[data-reveal-item]") : null;
        const root = containerRef.current;
        if (!item || !root || !root.contains(item)) return;
        const index = Number(item.dataset.index);
        if (Number.isNaN(index)) return;
        dispatch({ type: "hover", index });
      }, 180);
    };
    const onPointerMove = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("wheel", arm, { passive: true });
    window.addEventListener("scroll", arm, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.clearTimeout(idle);
      window.removeEventListener("wheel", arm);
      window.removeEventListener("scroll", arm);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [options.hover, options.trackScroll]);

  const bind = (index: number) => {
    const inPair = pair.includes(index);
    const open = isThreadRevealed(state, index, pair, options.hover);
    return {
      open,
      inPair,
      fullInk: !ready || open || inPair,
      onPointerEnter: (event: PointerEvent<HTMLElement>) => {
        if (!options.hover || event.pointerType !== "mouse" || scrollingRef.current) return;
        dispatch({ type: "hover", index });
      },
      onPointerLeave: (event: PointerEvent<HTMLElement>) => {
        if (!options.hover || event.pointerType !== "mouse" || scrollingRef.current) return;
        dispatch({ type: "leave", index });
      },
      onClick: (event: MouseEvent<HTMLButtonElement>) => {
        dispatch({
          type: "toggle",
          index,
          pair: pairRef.current,
          keyboard: event.detail === 0,
          hover: options.hover,
          keyboardToggles: options.keyboardToggles
        });
      },
      onFocus: () => {
        if (!options.focusReveal || !keyboardRef.current) return;
        dispatch({ type: "focus", index });
      },
      onBlur: () => dispatch({ type: "blur", index })
    };
  };

  return { containerRef, pair, bind };
}

function Thread({
  title,
  steps
}: {
  title: string;
  steps: readonly Piece[];
}) {
  const baseId = useId();
  const { containerRef, pair, bind } = useThreadReveal<HTMLOListElement>({
    hover: true,
    focusReveal: true,
    keyboardToggles: false,
    trackScroll: true
  });

  return (
    <div className="mt-20 max-w-3xl">
      <h3 className="type-h3">{title}</h3>
      <ol ref={containerRef} className="mt-10 space-y-8 overflow-anchor-none">
        {steps.map((step, index) => {
          const item = bind(index);
          const dotOn = pair.includes(index);
          return (
            <RiseIn
              key={step.title}
              index={index}
              revealIndex={index}
              className={`relative grid grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-x-4 transition-colors duration-300 motion-reduce:transition-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-tinte has-[:focus-visible]:ring-offset-2 ${toneClass(item.fullInk)}`}
            >
              <div className="relative flex justify-center self-stretch" aria-hidden="true">
                {index < steps.length - 1 ? (
                  <span className="absolute left-1/2 top-2 -bottom-12 w-px -translate-x-1/2 bg-sand" />
                ) : null}
                <span
                  className={`relative z-10 mt-1.5 h-3 w-3 rounded-full ring-2 ring-white transition-colors duration-300 motion-reduce:transition-none ${
                    dotOn ? "bg-gold" : "bg-sand"
                  }`}
                />
              </div>
              <div className="min-w-0 py-0.5" onPointerEnter={item.onPointerEnter} onPointerLeave={item.onPointerLeave}>
                <PieceBody
                  piece={step}
                  open={item.open}
                  panelId={`${baseId}-step-${index}`}
                  onClick={item.onClick}
                  onFocus={item.onFocus}
                  onBlur={item.onBlur}
                  heading="h4"
                  numeral={String(index + 1)}
                  numeralClass="mr-2 font-sans text-sm font-medium text-gold"
                />
              </div>
            </RiseIn>
          );
        })}
      </ol>
    </div>
  );
}

export function WhySection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="why" className="overflow-anchor-none bg-white">
      <style>{`#why, #why * { overflow-anchor: none; }`}</style>
      <div className="section-shell">
        <p className="type-eyebrow">{t.eyebrow}</p>
        <h2 className="type-h2 mt-4">{t.title}</h2>
        <div className="mt-6 max-w-3xl space-y-3">
          <p className="type-lead">{t.nameLead}</p>
          {t.nameParts.map((part) => (
            <p key={part.word} className="type-lead">
              <strong className="font-bold text-tinte">{part.word}</strong>
              {`, ${part.text}`}
            </p>
          ))}
        </div>
        <CoreGrid cards={t.cards} />
        <p className="type-small mt-8 max-w-3xl text-tinte-weich">{t.mapLead}</p>
        <Thread title={t.threadTitle} steps={t.steps} />
      </div>
    </section>
  );
}
