import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-neutral-700 sm:px-6 md:flex-row md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js, TypeScript and Tailwind CSS. Hosted on GitHub Pages.</p>
      </div>
    </footer>
  );
}
