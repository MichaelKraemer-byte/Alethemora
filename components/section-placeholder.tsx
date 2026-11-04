type SectionPlaceholderProps = {
  id: string;
  title: string;
  description: string;
};

export function SectionPlaceholder({ id, title, description }: SectionPlaceholderProps) {
  return (
    <section id={id} className="section-shell">
      <div className="rounded-3xl border border-sand bg-white p-8">
        <h2 className="font-serif text-2xl text-tinte sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-tinte">{description}</p>
      </div>
    </section>
  );
}
