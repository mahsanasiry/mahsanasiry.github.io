import { site } from "@/data/site";

const links = [
  { label: "Projects", href: "#projects", always: true },
  { label: "About", href: "#about", always: false },
  { label: "Skills", href: "#skills", always: false },
  { label: "Contact", href: "#contact", always: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-300 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-serif text-lg font-bold">
          {site.name}
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm font-medium sm:gap-3">
            {links.map((link) => (
              <li key={link.href} className={link.always ? "" : "hidden sm:block"}>
                <a href={link.href} className="px-2 py-1.5 hover:bg-mark">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
