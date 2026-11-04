type SectionPlaceholderProps = {
  id: string;
  title: string;
  description: string;
};

export function SectionPlaceholder({ id, title, description }: SectionPlaceholderProps) {
  return (
    <section id={id} className="section-shell">
      <div className="rounded-3xl border border-sand bg-white p-8">
        <h2 className="type-h2-sm">{title}</h2>
        <p className="type-body mt-3 max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
