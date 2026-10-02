import ContactForm from "./ContactForm";
import Section from "./Section";
import { site } from "@/data/site";

const linkClass = "underline decoration-2 underline-offset-4 hover:bg-mark";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-prose text-lg leading-relaxed">
        I read every message. Tell me about the role or the project, and I will reply by email.
      </p>

      <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
        <a className={linkClass} href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className={linkClass} href={site.linkedin}>
          LinkedIn
        </a>
        <a className={linkClass} href={site.github}>
          GitHub
        </a>
      </p>

      <div className="mt-10 max-w-xl">
        <ContactForm />
      </div>
    </Section>
  );
}
