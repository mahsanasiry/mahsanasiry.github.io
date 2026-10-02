import Section from "./Section";
import { asset } from "@/lib/asset";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <Section id="projects" title="Selected projects">
      <ol>
        {projects.map((project, index) => (
          <li key={project.title} className="border-b border-neutral-300 py-8 first:pt-0 last:border-b-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-2xl font-bold">
                <span className="mr-3 font-sans text-base font-medium tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {project.title}
              </h3>
              <p className="text-sm text-neutral-600">{project.stack.join(", ")}</p>
            </div>

            <p className="mt-3 max-w-prose text-lg leading-relaxed">{project.summary}</p>

            <ul className="mt-3 max-w-prose list-disc space-y-1 pl-5 text-neutral-700">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {project.image && (
              <img
                src={asset(project.image)}
                alt={project.imageAlt ?? `Screenshot of ${project.title}`}
                loading="lazy"
                className="mt-5 w-full border border-neutral-300"
              />
            )}

            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              <a
                href={project.live}
                aria-label={`${project.title}: live site`}
                className="underline decoration-2 underline-offset-4 hover:bg-mark"
              >
                Live site
              </a>
              <a
                href={project.code}
                aria-label={`${project.title}: source code on GitHub`}
                className="underline decoration-2 underline-offset-4 hover:bg-mark"
              >
                Source code
              </a>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
