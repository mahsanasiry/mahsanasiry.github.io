import Section from "./Section";
import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="max-w-prose border-t border-neutral-300">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-1 border-b border-neutral-300 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6"
          >
            <dt className="font-semibold">{group.title}</dt>
            <dd className="text-neutral-800">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
