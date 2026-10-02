import Section from "./Section";
import { aboutFacts, aboutParagraphs } from "@/data/site";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-prose space-y-5 text-lg leading-relaxed">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-8 max-w-prose border-t border-neutral-300">
        {aboutFacts.map((fact) => (
          <div key={fact.term} className="flex justify-between gap-6 border-b border-neutral-300 py-3">
            <dt className="text-neutral-600">{fact.term}</dt>
            <dd className="text-right font-semibold">{fact.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
