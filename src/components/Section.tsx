interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

// Every section has the title in a left column and the content on the right.
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t-2 border-ink">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-[11rem_1fr] md:gap-12 md:py-20">
        <h2 id={`${id}-title`} className="font-serif text-2xl font-bold md:pt-1">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
