"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Phone, MessageCircle } from "@/components/primitives/Icons";
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow, DocRule } from "@/components/primitives/Marks";
import { business } from "@/lib/data";

type Field = "name" | "phone" | "location" | "details" | "need";

const needs = [
  "Glass",
  "Aluminum",
  "Roll-up door",
  "Shower enclosure",
  "Glass / kitchen cabinet",
  "Window or door install",
  "Not sure yet",
];

export function QuoteForm() {
  const [form, setForm] = useState<Record<Field, string>>({
    name: "",
    phone: "",
    location: "",
    details: "",
    need: "Glass",
  });
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (k: Field, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please add your name and a number we can reach you on.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative section-y bg-[color:var(--paper-2)] border-y border-steel-line overflow-hidden">
      <div className="container-page relative grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-24">
          <Eyebrow brass rule>Get a quote</Eyebrow>
          <h2 className="display display-lg mt-5">
            Tell us what you need.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft max-w-md">
            Send a few details and we&apos;ll come back with a quotation. No pressure,
            no guessing — you&apos;ll know the price before you commit. Prefer to talk
            it through? Call or message us and we&apos;ll sort it out.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {business.phone ? (
              <a href={business.phoneHref} className="framed framed-hover flex items-center gap-3.5 p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--r)] bg-[color:var(--navy)] text-[color:var(--on-navy)] shrink-0">
                  <Phone className="h-4.5 w-4.5" strokeWidth={1.5} />
                </span>
                <span className="flex flex-col">
                  <span className="field-label">Call us</span>
                  <span className="text-[15px] font-medium text-navy">{business.phone}</span>
                </span>
              </a>
            ) : null}
            <a href={business.messengerHref} target="_blank" rel="noopener noreferrer" className="framed framed-hover flex items-center gap-3.5 p-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--r)] bg-[color:var(--brass)] text-white shrink-0">
                <MessageCircle className="h-4.5 w-4.5" strokeWidth={1.5} />
              </span>
              <span className="flex flex-col">
                <span className="field-label">Message on Messenger</span>
                <span className="text-[15px] font-medium text-navy">{business.messenger}</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <form onSubmit={handleSubmit} className="framed framed-strong p-6 md:p-9">
            <div className="flex items-center justify-between pb-4 mb-1">
              <span className="mono-data text-[11px] tracking-[0.16em] uppercase text-steel-dark">Quote request</span>
              <span className="mono-data text-[11px] tracking-[0.16em] uppercase text-steel-dark">No. ______</span>
            </div>
            <DocRule className="mb-7" />

            {!submitted ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Your name" value={form.name} onChange={(v) => update("name", v)} placeholder="Full name" />
                <FormField label="Phone / Messenger" value={form.phone} onChange={(v) => update("phone", v)} placeholder="How we reach you" />
                <FormField label="Where in Antique" value={form.location} onChange={(v) => update("location", v)} placeholder="Municipality (optional)" />

                <div className="flex flex-col gap-2 relative">
                  <label className="field-label">What you need</label>
                  <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="field flex items-center justify-between gap-3 text-left"
                  >
                    {form.need}
                    <ChevronDown className={`h-4 w-4 text-steel transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
                  </button>
                  {open && (
                    <ul className="absolute z-20 left-0 right-0 top-[70px] framed bg-[color:var(--paper)] shadow-[var(--shadow-overlay)] py-1 overflow-hidden">
                      {needs.map((t) => (
                        <li key={t}>
                          <button
                            type="button"
                            onClick={() => { update("need", t); setOpen(false); }}
                            className={`w-full text-left px-3.5 py-2.5 text-[14px] hover:bg-[color:var(--paper-2)] transition-colors flex items-center justify-between ${t === form.need ? "text-navy font-medium" : "text-ink"}`}
                          >
                            {t}
                            {t === form.need && <Check className="h-3.5 w-3.5" strokeWidth={2} />}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="field-label">Details</label>
                  <textarea
                    rows={4}
                    value={form.details}
                    onChange={(e) => update("details", e.target.value)}
                    placeholder="Rough sizes, how many, or what the job is — whatever you have."
                    className="field resize-none leading-relaxed"
                  />
                </div>

                {error && (
                  <div className="sm:col-span-2 rounded-[var(--r)] border border-[color:var(--alert)]/30 bg-[color:var(--alert)]/5 px-4 py-3 text-[13px] text-[color:var(--alert)]">
                    {error}
                  </div>
                )}

                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                  <span className="mono-data text-[11px] tracking-[0.14em] uppercase text-steel-dark">We reply by call or Messenger</span>
                  <button type="submit" className="btn btn-primary">
                    Send request <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center py-8">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[color:var(--brass)] text-[color:var(--brass)]">
                  <Check className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <h3 className="display display-md mt-6">Got it — thank you.</h3>
                <p className="mt-3 max-w-md text-[15px] text-ink-soft leading-relaxed">
                  Thanks {form.name || "for reaching out"}. We&apos;ll prepare a quotation
                  and get back to you by call or Messenger. For a faster reply, message us
                  directly anytime.
                </p>
                <a href={business.messengerHref} target="_blank" rel="noopener noreferrer" className="btn btn-brass mt-7">
                  <MessageCircle className="h-4 w-4" /> Message us now
                </a>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="field-label">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="field" />
    </div>
  );
}
