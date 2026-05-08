import { MinusCircle, PlusCircle } from "lucide-react";

export function PathBalanceSheet({
  language,
  resonance,
  dissonance,
  causalityText
}: {
  language: "en" | "de";
  resonance: string[];
  dissonance: string[];
  causalityText: string;
}) {
  const title = language === "en" ? "Resonance & Dissonance" : "Resonanz & Dissonanz";
  const resonanceLabel = language === "en" ? "RESONANCE" : "RESONANZ";
  const dissonanceLabel = language === "en" ? "DISSONANCE" : "DISSONANZ";
  return (
    <article className="mt-8 rounded-2xl border border-white/10 bg-charcoal/70 p-6">
      <h3 className="font-serif text-2xl text-zinc-100">{title}</h3>
      <p className="mt-2 text-zinc-300">{causalityText}</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-300/25 bg-emerald-500/10 p-4">
          <p className="flex items-center gap-2 text-sm tracking-[0.14em] text-emerald-200">
            <PlusCircle className="h-4 w-4" />
            {resonanceLabel}
          </p>
          <ul className="mt-3 space-y-2 text-zinc-100">
            {resonance.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-rose-300/25 bg-rose-500/10 p-4">
          <p className="flex items-center gap-2 text-sm tracking-[0.14em] text-rose-200">
            <MinusCircle className="h-4 w-4" />
            {dissonanceLabel}
          </p>
          <ul className="mt-3 space-y-2 text-zinc-100">
            {dissonance.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
