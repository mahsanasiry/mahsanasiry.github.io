import { asset } from "@/lib/asset";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-24">
      <p className="text-lg text-neutral-700">
        {site.name}, {site.role}
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        {site.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-800">{site.intro}</p>
      <p className="mt-4 font-semibold">{site.availability}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href="#projects" className="bg-ink px-6 py-3 font-semibold text-paper hover:bg-neutral-700">
          See my work
        </a>
        {site.resume && (
          <a
            href={asset(site.resume)}
            className="border-2 border-ink px-6 py-3 font-semibold hover:bg-mark"
          >
            Download resume
          </a>
        )}
        <a href="#contact" className="border-2 border-ink px-6 py-3 font-semibold hover:bg-mark">
          Contact me
        </a>
      </div>
    </section>
  );
}
