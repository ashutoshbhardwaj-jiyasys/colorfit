"use client";

import { useState } from "react";

const SERVICES = ["Brand Identity", "Packaging", "Graphic Design", "Art Direction"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((cur) =>
      cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]
    );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to your email service / API route.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-paper p-10 text-center">
        <p className="font-display text-2xl font-semibold">Thanks — message received.</p>
        <p className="mt-3 text-muted">
          We&apos;ll be in touch within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <Field label="Company" name="company" placeholder="Company / brand" />

      <div>
        <label className="mb-3 block text-sm font-medium">What do you need?</label>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggle(s)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                selected.includes(s)
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A few lines about your product, timeline, and goals…"
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none transition-colors focus:border-ink"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-medium text-paper transition-colors hover:bg-accent"
      >
        Send message <span aria-hidden>→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none transition-colors focus:border-ink"
      />
    </div>
  );
}
