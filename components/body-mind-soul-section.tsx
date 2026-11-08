"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { Language } from "@/lib/i18n";

const linkClass =
  "font-normal text-gold underline decoration-gold/70 underline-offset-4 transition hover:text-tinte";

type Step = { heading: string; paragraphs: string[] };

const copy: Record<
  Language,
  {
    title: string;
    pyramid: string;
    labels: { soul: string; mind: string; body: string };
    steps: Step[];
  }
> = {
  de: {
    title: "Körper, Geist und Seele",
    pyramid:
      "Es ist eine Pyramide. Der Körper ist das Fundament. Der Geist kommt danach, aus dem Körper. Die Seele ist die Spitze.",
    labels: { soul: "Seele", mind: "Geist", body: "Körper" },
    steps: [
      {
        heading: "Im Alltag",
        paragraphs: [
          "Du erreichst im Alltag einen Geist, der aktiv liebt, und ein höheres Bewusstsein, wenn du diese Schritte übst. Du kannst deine Seele fühlen."
        ]
      },
      {
        heading: "Du bist die Seele",
        paragraphs: [
          "Du kannst fühlen, dass du deine Seele bist — nicht der Körper, nicht der Affengeist, dieses unruhige Denken, das springt und sich für dich hält. Du bist die ewige Seele, die reine Liebe, Licht und Energie ist."
        ]
      },
      {
        heading: "Höheres Bewusstsein",
        paragraphs: [
          "Dieses Sehen ist die Sicht eines höheren Bewusstseins: nicht klammern wie ein Tier, nicht klammern als das Ego. Von dort aus kannst du leicht aktiv lieben, aus dem Nichts."
        ]
      },
      {
        heading: "Was um dich ist",
        paragraphs: [
          "Du liebst, was um dich ist, in dieser schönen Welt, die du erfahren darfst. Du schätzt das Leben in dir und das Leben außerhalb von dir."
        ]
      },
      {
        heading: "Liebe geben",
        paragraphs: [
          "Du kannst Liebe geben, aus diesem Kerngefühl, an andere — und du kannst sie genießen."
        ]
      },
      {
        heading: "Das Fundament führen",
        paragraphs: [
          "Der Körper bleibt das Fundament, das du führen musst — Schlaf, Essen, Bewegung —, damit der Geist ruhig wird und du die Seele fühlen kannst."
        ]
      }
    ]
  },
  en: {
    // TODO: EN prüfen
    title: "Body, mind, and soul",
    // TODO: EN prüfen
    pyramid:
      "It is a pyramid. The body is the fundament. The mind comes after, out of the body. The soul is the top.",
    // TODO: EN prüfen
    labels: { soul: "Soul", mind: "Mind", body: "Body" },
    steps: [
      {
        // TODO: EN prüfen
        heading: "In everyday life",
        paragraphs: [
          "We reach, in everyday life, an active love-mind and a higher consciousness when we practice these steps. We are able to feel our soul."
        ]
      },
      {
        // TODO: EN prüfen
        heading: "We are the soul",
        paragraphs: [
          "We are able to feel that we are our soul — not the body, not the monkey mind. We are the eternal soul that is pure love, light, and energy."
        ]
      },
      {
        // TODO: EN prüfen
        heading: "Higher consciousness",
        paragraphs: [
          "This seeing is the perspective of a higher consciousness: not clinging like an animal, not clinging as the ego. From there we can easily love actively out of nothing."
        ]
      },
      {
        // TODO: EN prüfen
        heading: "What is around us",
        paragraphs: [
          "We love what is around us, in this beautiful world we get to experience. We appreciate the life within us and the life outside us."
        ]
      },
      {
        // TODO: EN prüfen
        heading: "Giving love",
        paragraphs: [
          "We can give love, from that core feeling, to others — and we can enjoy it."
        ]
      },
      {
        // TODO: EN prüfen
        heading: "The fundament",
        paragraphs: [
          "The body remains the fundament that must be led (sleep, food, movement) so the mind can quiet and the soul can be felt."
        ]
      }
    ]
  }
};

const rise = {
  duration: 0.55,
  ease: "easeOut" as const
};

function Pyramid({ labels }: { labels: { soul: string; mind: string; body: string } }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  const bands = [
    { key: "body", label: labels.body },
    { key: "mind", label: labels.mind },
    { key: "soul", label: labels.soul }
  ];

  useEffect(() => {
    if (!inView || reduce !== false) return;
    controls.start((index: number) => ({
      opacity: [0, 1],
      y: [12, 0],
      transition: { ...rise, delay: index * 0.16, times: [0, 1] }
    }));
  }, [controls, inView, reduce]);

  return (
    <div ref={ref} className="pyramid" aria-hidden="true">
      {bands.map((band, index) => (
        <motion.div
          key={band.key}
          className={`pyramid-band pyramid-band--${band.key} quiet-in`}
          custom={index}
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
        >
          {band.label}
        </motion.div>
      ))}
    </div>
  );
}

function FurtherReading({ language }: { language: Language }) {
  if (language === "de") {
    return (
      <p className="type-body">
        Wie das Essen geführt wird, ist in{" "}
        <Link href="/science/ernaehrung" className={linkClass}>
          Ernährung, neu gedacht
        </Link>{" "}
        zu lesen, und wie der Geist gebildet wird, in{" "}
        <Link href="/science/bildung" className={linkClass}>
          Bildung neu gedacht
        </Link>.
      </p>
    );
  }

  return (
    <p className="type-body">
      {/* TODO: EN prüfen */}
      How food is led is to be read in{" "}
      <Link href="/science/ernaehrung" className={linkClass}>
        Nutrition, thought anew
      </Link>
      {", and how the mind is formed, in "}
      <Link href="/science/bildung" className={linkClass}>
        Education, thought anew
      </Link>.
    </p>
  );
}

function StepPath({ steps, language }: { steps: Step[]; language: Language }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (!inView || reduce !== false) return;
    controls.start((index: number) => ({
      opacity: [0, 1],
      y: [10, 0],
      transition: { duration: 0.45, ease: "easeOut", delay: index * 0.07, times: [0, 1] }
    }));
  }, [controls, inView, reduce]);

  return (
    <ol ref={ref} className="mt-14">
      {steps.map((step, index) => (
        <motion.li
          key={step.heading}
          custom={index}
          className="quiet-in grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4"
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
        >
          <div className="relative flex justify-center">
            <span
              aria-hidden="true"
              className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-sand font-sans text-sm font-bold text-tinte"
            >
              {index + 1}
            </span>
            {index < steps.length - 1 ? (
              <span className="absolute bottom-0 top-8 w-px bg-sand" aria-hidden="true" />
            ) : null}
          </div>
          <div className={`min-w-0 ${index < steps.length - 1 ? "pb-10" : ""}`}>
            <h3 className="font-sans text-base font-bold leading-snug text-tinte">{step.heading}</h3>
            {step.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body mt-2 font-normal">
                {paragraph}
              </p>
            ))}
            {index === steps.length - 1 ? (
              <div className="mt-4">
                <FurtherReading language={language} />
              </div>
            ) : null}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export function BodyMindSoulSection({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <section id="koerper-geist-seele" className="mt-12">
      <h2 className="type-h2-sm">{t.title}</h2>
      <p className="type-lead mt-6">{t.pyramid}</p>
      <Pyramid labels={t.labels} />
      <StepPath steps={t.steps} language={language} />
    </section>
  );
}
