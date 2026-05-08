type SectionPlaceholderProps = {
  id: string;
  title: string;
  description: string;
};

export function SectionPlaceholder({ id, title, description }: SectionPlaceholderProps) {
  return (
    <section id={id} className="section-shell">
      <div className="rounded-3xl border border-white/10 bg-charcoal/70 p-8">
        <h2 className="font-serif text-2xl text-zinc-100 sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">{description}</p>
      </div>
    </section>
  );
}
