"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { FORM_KEY_PLACEHOLDER, site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";
type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address, like name@example.com.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Write at least 10 characters so we know how to help.";
  }
  return errors;
}

const inputClass =
  "mt-1 block w-full border border-neutral-400 bg-white px-3 py-2.5 text-ink placeholder:text-neutral-500 focus:border-ink";

export default function ContactForm() {
  const [values, setValues] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [botcheck, setBotcheck] = useState(false); // hidden spam trap

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const key = e.target.name as keyof Fields;
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // No Web3Forms key yet: open the visitor's email app with the message filled in.
    if (site.web3formsKey === FORM_KEY_PLACEHOLDER) {
      const subject = encodeURIComponent(`Message from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name} (${values.email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `New message from ${values.name} via ${site.name}`,
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          botcheck,
        }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="font-semibold text-ink">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-semibold text-ink">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-700">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      {/* Spam trap: real visitors never see or tick this box. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink px-6 py-3 font-semibold text-paper hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="bg-mark px-4 py-3 text-ink">
            Message sent. Thank you, I will reply to your email as soon as I can.
          </p>
        )}
        {status === "error" && (
          <p className="border-2 border-red-800 bg-red-50 px-4 py-3 text-red-900">
            The message did not send. Check your connection and try again, or email us at{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
