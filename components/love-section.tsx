"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
import { emphasize } from "@/lib/emphasize";
import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
const copy = {
  de: {
    eyebrow: "Das Dach über allen Prinzipien",
    title: "Liebe als höchste Lernaufgabe",
    leadMark: "An der Spitze steht die Liebe",
    lead: "An der Spitze dieses Weges stehen nicht Reife, Bewusstsein oder Verantwortung – so wichtig sie sind. An der Spitze steht die Liebe: nicht als Gefühl unter anderen, sondern als die Energie, die in allem steckt und alles erschafft. Das Leben ist der Raum, den wir uns selbst geschaffen haben, um Liebe nicht nur zu finden, sondern zu erschaffen.",
    egoTitle: "Ego-Liebe",
    egoMark: "Ego-Liebe ist die Liebe der Bedingung",
    ego: "Ego-Liebe ist die Liebe der Bedingung: Ich liebe dich, weil du mir gibst, was ich brauche. Sie klammert, vergleicht, fürchtet den Verlust, bindet den anderen an die eigene Erwartung. Sie ist nicht falsch — sie ist der Ausgangspunkt fast jeder menschlichen Liebe —, aber sie bleibt an das Ego gebunden, das sich selbst als getrennt und bedürftig erlebt.",
    soulTitle: "Seelen-Liebe",
    soulMark: "Seelen-Liebe dagegen lässt frei, statt zu binden.",
    soul: "Seelen-Liebe dagegen lässt frei, statt zu binden. Sie erkennt im anderen dasselbe Göttliche, das im eigenen Inneren wohnt, ohne dafür eine Gegenleistung zu verlangen. Sie versteht, statt zu urteilen. Sie liebt nicht, weil der andere etwas gibt, sondern weil Liebe das ist, was durch sie hindurch will, sobald der Widerstand des Egos nachlässt.",
    circleTitle: "Der Kreis der Liebe",
    stations: ["entfalten", "erschaffen", "erleben", "lernen"],
    circle:
      "Die Seele entfaltet sich, sie erschafft, sie erlebt, was sie erschaffen hat, und sie lernt daraus — um sich von dort aus weiter zu entfalten. Jedes Leben ist eine Runde in diesem Kreis.",
    quoteMark: "Liebe in der Geistwelt zu sein, ist leicht.",
    quote:
      "Liebe in der Geistwelt zu sein, ist leicht. Liebe aus dem scheinbaren Nichts zu erschaffen – in einem Moment, in dem keine Kraft mehr da zu sein scheint, allein aus dem freien Willen –, das ist es, wofür die Seele gekommen ist.",
    close:
      "Wir sind nicht nur Lernende der Liebe. Wir sind ihre Erschaffer – in jedem Moment, in dem wir uns dafür entscheiden."
  },
  en: {
    eyebrow: "The roof over all the principles",
    title: "Love as the highest lesson",
    leadMark: "At the summit stands love",
    lead: "At the summit of this path stand not maturity, consciousness, or responsibility — important as they are. At the summit stands love: not as one feeling among others, but as the energy that is in everything and creates everything. Life is the space we have made for ourselves, in order not only to find love, but to create it.",
    egoTitle: "Ego-love",
    egoMark: "Ego-love is the love of condition",
    ego: "Ego-love is the love of condition: I love you because you give me what I need. It clings, compares, fears loss, binds the other to its own expectation. It is not wrong — it is the starting point of almost every human love — but it stays bound to the ego, which experiences itself as separate and in need.",
    soulTitle: "Soul-love",
    soulMark: "Soul-love, by contrast, lets free instead of binding.",
    soul: "Soul-love, by contrast, lets free instead of binding. It recognizes in the other the same divine that lives in one’s own inner being, without demanding anything in return. It understands, instead of judging. It does not love because the other gives something, but because love is what wants to pass through it as soon as the resistance of the ego eases.",
    circleTitle: "The circle of love",
    stations: ["unfold", "create", "experience", "learn"],
    circle:
      "The soul unfolds, it creates, it experiences what it has created, and it learns from that — in order to unfold further from there. Every life is one round in this circle.",
    quoteMark: "To be love in the spirit world is easy.",
    quote:
      "To be love in the spirit world is easy. To create love out of the apparent nothing — in a moment when no strength seems left, out of free will alone — that is what the soul has come for.",
    close: "We are not only learners of love. We are its creators — in every moment in which we decide for it."
  }
} as const;

const RING = 78;
const CX = 100;
const CY = 100;

const stationPlace = [
  "col-start-2 row-start-1 justify-self-center self-end text-center",
  "col-start-3 row-start-2 justify-self-start self-center text-left",
  "col-start-2 row-start-3 justify-self-center self-start text-center",
  "col-start-1 row-start-2 justify-self-end self-center text-right"
] as const;

function splitFirstSentence(text: string) {
  const index = text.indexOf(". ");
  if (index < 0) return { first: text, rest: "" };
  return { first: text.slice(0, index + 1), rest: text.slice(index + 2) };
}

function circleStations(language: Language, labels: readonly string[], text: string) {
  const learnKey = language === "de" ? "sie lernt daraus" : "it learns from that";
  const learnAt = text.indexOf(learnKey);
  const learnEnd = learnAt < 0 ? -1 : text.indexOf(".", learnAt);
  const middle =
    language === "de"
      ? ["sie erschafft", "sie erlebt, was sie erschaffen hat"]
      : ["it creates", "it experiences what it has created"];
  const clauses = [
    text.slice(0, text.indexOf(",")),
    middle[0],
    middle[1],
    learnAt >= 0 && learnEnd > learnAt ? text.slice(learnAt, learnEnd) : ""
  ];
  return labels.map((label, index) => ({ label, clause: clauses[index] ?? "" }));
}

function markClause(text: string, clause: string) {
  if (!clause) return text;
  const index = text.indexOf(clause);
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <mark className="bg-transparent text-inherit underline decoration-rose decoration-2 underline-offset-[0.22em]">
        {clause}
      </mark>
      {text.slice(index + clause.length)}
    </>
  );
}

function ringPoint(index: number, count: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / count;
  return { x: CX + RING * Math.cos(angle), y: CY + RING * Math.sin(angle) };
}

function ringArc(index: number, count: number) {
  const start = ringPoint(index, count);
  const end = ringPoint(index + 1, count);
  return `M ${start.x} ${start.y} A ${RING} ${RING} 0 0 1 ${end.x} ${end.y}`;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2 w-2 shrink-0 border-b-2 border-r-2 border-gold transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
        open ? "-translate-y-px rotate-[225deg]" : "translate-y-px rotate-45"
      }`}
    />
  );
}

function QuietIn({ className, delay = 0, children }: { className?: string; delay?: number; children: ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const controls = useAnimation();

  useEffect(() => {
    if (!inView || reduce !== false) return;
    controls.start({
      opacity: [0, 1],
      y: [12, 0],
      transition: { type: "tween", duration: 0.5, ease: "easeInOut", delay, times: [0, 1] }
    });
  }, [controls, delay, inView, reduce]);

  return (
    <motion.div
      ref={ref}
      className={`quiet-in ${className ?? ""}`}
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

function Fold({ id, open, children }: { id: string; open: boolean; children: ReactNode }) {
  return (
    <div
      id={id}
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
      aria-hidden={open ? undefined : true}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function ContrastCard({
  index,
  title,
  body,
  mark
}: {
  index: number;
  title: string;
  body: string;
  mark: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { first, rest } = splitFirstSentence(body);
  const expandable = rest.length > 0;

  return (
    <QuietIn delay={index * 0.12} className="min-w-0">
      <article className="crystal-card h-full p-6 transition-colors duration-300 ease-in-out motion-reduce:transition-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-tinte has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-beige">
        <h3 className="type-h3-sm">
          {expandable ? (
            <button
              type="button"
              className="flex w-full cursor-pointer items-start justify-between gap-4 border-0 bg-transparent p-0 text-left [font:inherit] focus-visible:!outline-none"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              <span>{title}</span>
              <Chevron open={open} />
            </button>
          ) : (
            title
          )}
        </h3>
        <p className="type-body mt-3">{emphasize(first, mark)}</p>
        {expandable ? (
          <Fold id={panelId} open={open}>
            <p className="type-body pt-3">{rest}</p>
          </Fold>
        ) : null}
      </article>
    </QuietIn>
  );
}

function CircleOfLove({
  language,
  title,
  labels,
  text
}: {
  language: Language;
  title: string;
  labels: readonly string[];
  text: string;
}) {
  const stations = circleStations(language, labels, text);
  const count = stations.length;
  const reduce = useReducedMotion();
  const headingId = useId();
  const sentenceId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const timerRef = useRef(0);
  const pausedRef = useRef(false);
  const inView = useInView(rootRef, { once: true, amount: 0.5 });
  const [active, setActive] = useState(0);
  const motionOn = reduce === false;

  const pause = () => {
    pausedRef.current = true;
    window.clearInterval(timerRef.current);
  };

  const choose = (index: number) => {
    pause();
    setActive(index);
  };

  useEffect(() => {
    if (!inView || !motionOn || pausedRef.current) return;
    let step = 0;
    timerRef.current = window.setInterval(() => {
      if (pausedRef.current) {
        window.clearInterval(timerRef.current);
        return;
      }
      step += 1;
      if (step >= count) {
        window.clearInterval(timerRef.current);
        setActive(0);
        return;
      }
      setActive(step);
    }, 900);
    return () => window.clearInterval(timerRef.current);
  }, [count, inView, motionOn]);

  const onStationKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = event.key === "ArrowRight" || event.key === "ArrowDown";
    const prev = event.key === "ArrowLeft" || event.key === "ArrowUp";
    if (!next && !prev) return;
    event.preventDefault();
    const target = (index + (next ? 1 : count - 1)) % count;
    choose(target);
    buttonRefs.current[target]?.focus();
  };

  const clause = stations[active]?.clause ?? "";

  return (
    <div className="mt-16">
      <h3 id={headingId} className="type-h3">
        {title}
      </h3>
      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(16rem,28rem)_minmax(0,1fr)] lg:gap-14">
        <div
          ref={rootRef}
          role="group"
          aria-labelledby={headingId}
          className="mx-auto grid w-max max-w-full grid-cols-[auto_minmax(7.25rem,11rem)_auto] grid-rows-[auto_minmax(7.25rem,11rem)_auto] items-center gap-x-1.5 gap-y-1 sm:grid-cols-[auto_minmax(9rem,12.5rem)_auto] sm:grid-rows-[auto_minmax(9rem,12.5rem)_auto] sm:gap-x-3 sm:gap-y-2"
        >
          <div className="col-start-2 row-start-2 aspect-square w-full" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <circle cx={CX} cy={CY} r={RING} fill="#FFFFFF" stroke="#DDD2BF" strokeWidth="1.75" />
              {stations.map((station, index) => (
                <motion.path
                  key={station.label}
                  d={ringArc(index, count)}
                  fill="none"
                  stroke="#F6A6AB"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={false}
                  animate={{ opacity: active === index ? 1 : 0 }}
                  transition={{ type: "tween", duration: motionOn ? 0.45 : 0, ease: "easeInOut" }}
                />
              ))}
              {stations.map((station, index) => {
                const point = ringPoint(index, count);
                const on = active === index;
                return (
                  <circle
                    key={`${station.label}-dot`}
                    cx={point.x}
                    cy={point.y}
                    r={on ? 6.5 : 4.5}
                    fill={on ? "#F6A6AB" : "#7A5F2A"}
                    stroke="#FFFFFF"
                    strokeWidth={on ? 2 : 0}
                  />
                );
              })}
            </svg>
          </div>
          {stations.map((station, index) => {
            const on = active === index;
            return (
              <button
                key={station.label}
                ref={(node) => {
                  buttonRefs.current[index] = node;
                }}
                type="button"
                className={`min-h-11 max-w-[7.5rem] cursor-pointer border-0 bg-transparent px-0.5 py-1 font-serif text-[0.8125rem] leading-tight transition-colors duration-300 ease-in-out motion-reduce:transition-none sm:max-w-[9rem] sm:text-base ${
                  on ? "font-bold text-tinte" : "font-normal text-tinte-weich hover:text-tinte"
                } ${stationPlace[index] ?? ""}`}
                aria-pressed={on}
                onClick={() => choose(index)}
                onFocus={() => choose(index)}
                onPointerEnter={(event: PointerEvent<HTMLButtonElement>) => {
                  if (event.pointerType !== "mouse") return;
                  choose(index);
                }}
                onKeyDown={(event) => onStationKeyDown(event, index)}
              >
                {station.label}
              </button>
            );
          })}
        </div>
        <p
          id={sentenceId}
          className="type-body m-0 border-l border-sand pl-4 lg:pl-5"
          onPointerEnter={(event: PointerEvent<HTMLParagraphElement>) => {
            if (event.pointerType !== "mouse") return;
            pause();
          }}
        >
          {markClause(text, clause)}
        </p>
      </div>
    </div>
  );
}

function OpeningQuote({ quote, mark }: { quote: string; mark: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { first, rest } = splitFirstSentence(quote);
  const expandable = rest.length > 0;

  return (
    <blockquote className="m-0">
      {expandable ? (
        <button
          type="button"
          className="mx-auto flex w-full max-w-3xl cursor-pointer flex-col items-center gap-3 rounded-md border-0 bg-transparent p-0 text-center [font:inherit]"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="type-subtitle block">{emphasize(first, mark)}</span>
          <Chevron open={open} />
        </button>
      ) : (
        <p className="type-subtitle">{emphasize(quote, mark)}</p>
      )}
      {expandable ? (
        <Fold id={panelId} open={open}>
          <p className="type-subtitle mx-auto max-w-3xl pt-4 font-normal">{rest}</p>
        </Fold>
      ) : null}
    </blockquote>
  );
}

export function LoveSection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="liebe" className="bg-beige">
      <div className="section-shell">
        <p className="type-eyebrow">{t.eyebrow}</p>
        <h2 className="type-h2 mt-4">{t.title}</h2>
        <p className="type-lead mt-6 max-w-3xl">{emphasize(t.lead, t.leadMark)}</p>
        <div className="mt-12 grid items-start gap-5 md:grid-cols-2 md:gap-8">
          <ContrastCard index={0} title={t.egoTitle} body={t.ego} mark={t.egoMark} />
          <ContrastCard index={1} title={t.soulTitle} body={t.soul} mark={t.soulMark} />
        </div>
        <CircleOfLove language={language} title={t.circleTitle} labels={t.stations} text={t.circle} />
        <QuietIn className="mx-auto mt-14 max-w-3xl text-center">
          <OpeningQuote quote={t.quote} mark={t.quoteMark} />
          <p className="type-lead mt-8">{t.close}</p>
        </QuietIn>
      </div>
    </section>
  );
}
