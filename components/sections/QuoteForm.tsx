"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown } from "@/components/primitives/Icons";
import { Reveal } from "@/components/primitives/Reveal";

type Field = "company" | "contact" | "email" | "deliveryDate" | "scope" | "type";

const types = [
  "Architectural Glass",
  "Aluminum Extrusions",
  "Custom Fabrication",
  "Curtain Wall System",
  "Skylight / Canopy",
  "Other",
];

export function QuoteForm() {
  const [form, setForm] = useState<Record<Field, string>>({
    company: "",
    contact: "",
    email: "",
    deliveryDate: "",
    scope: "",
    type: "Architectural Glass",
  });
  const [typeOpen, setTypeOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (k: Field, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.company.trim() || !form.contact.trim() || !form.email.trim()) {
      setError("Please complete company, contact, and email.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("That email doesn't look right — please double-check.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative py-24 md:py-32 bg-[color:var(--container-low)] border-y border-hairline overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" aria-hidden />

      <div className="container-arch relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="eyebrow">G · Engagement Form</span>
            <h2 className="h-display text-[40px] md:text-[52px] mt-4">
              Request a
              <br />
              <span className="italic font-medium text-[color:var(--blueprint)]">supply quote.</span>
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.65] text-ink-soft max-w-md">
              Submit project specs and we&apos;ll respond inside two business days with
              budgetary pricing, material availability, and a fabrication
              schedule against your delivery window.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Response inside 48 business hours",
                "PE-stamped shop drawings on commercial spec",
                "No project too small if the spec is correct",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px] text-ink-soft">
                  <span className="inline-flex h-5 w-5 mt-0.5 items-center justify-center rounded-sm border border-outline-variant bg-[color:var(--container-lowest)] shrink-0">
                    <Check className="h-3 w-3 text-[color:var(--primary)]" strokeWidth={2.25} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-7 border-t border-hairline flex items-center gap-4">
              <span className="cad-label">For urgent specs</span>
              <a href="tel:+18005436679" className="text-[14.5px] font-medium text-[color:var(--primary)] hover:text-[color:var(--primary-hover)]">
                +1 (800) 543·MERC
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-sm border border-outline-variant bg-[color:var(--container-lowest)] p-7 md:p-10"
            >
              <div className="flex items-center justify-between pb-5 mb-7 border-b border-hairline">
                <span className="cad-label">Form · QT-2026 · Sheet 1 of 1</span>
                <span className="cad-label hidden sm:inline">Rev. 02</span>
              </div>

              {!submitted ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField label="Company Name" value={form.company} onChange={(v) => update("company", v)} placeholder="e.g. Apex Construction" />
                  <FormField label="Contact Name" value={form.contact} onChange={(v) => update("contact", v)} placeholder="Full name" />
                  <FormField label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="name@firm.com" />
                  <FormField label="Delivery Window" type="date" value={form.deliveryDate} onChange={(v) => update("deliveryDate", v)} />

                  <div className="sm:col-span-2 flex flex-col gap-2 relative">
                    <label className="cad-label">Project Supply Type</label>
                    <button
                      type="button"
                      onClick={() => setTypeOpen((v) => !v)}
                      className="text-left flex items-center justify-between gap-3 h-12 px-3.5 rounded-sm bg-[color:var(--container-lowest)] border border-outline-variant hover:border-[color:var(--primary)] text-[14.5px] text-ink transition-colors"
                    >
                      {form.type}
                      <ChevronDown
                        className={`h-4 w-4 text-ink-soft transition-transform ${typeOpen ? "rotate-180" : ""}`}
                        strokeWidth={1.5}
                      />
                    </button>
                    {typeOpen && (
                      <ul className="absolute z-20 left-0 right-0 top-[78px] rounded-sm border border-outline-variant bg-[color:var(--container-lowest)] shadow-[0_24px_60px_-24px_rgba(0,30,64,0.25)] py-1 overflow-hidden anim-float-down">
                        {types.map((t) => (
                          <li key={t}>
                            <button
                              type="button"
                              onClick={() => {
                                update("type", t);
                                setTypeOpen(false);
                              }}
                              className={`w-full text-left px-3.5 py-2.5 text-[14px] hover:bg-[color:var(--container-low)] transition-colors flex items-center justify-between ${
                                t === form.type ? "text-[color:var(--primary)] font-medium" : "text-ink"
                              }`}
                            >
                              {t}
                              {t === form.type && <Check className="h-3.5 w-3.5" strokeWidth={2} />}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label className="cad-label">Project Scope &amp; Specifications</label>
                    <textarea
                      rows={5}
                      value={form.scope}
                      onChange={(e) => update("scope", e.target.value)}
                      placeholder="Provide preliminary dimensions, quantities, or any specific material requirements."
                      className="px-3.5 py-3 rounded-sm bg-[color:var(--container-lowest)] border border-outline-variant hover:border-[color:var(--secondary)] focus:border-[color:var(--primary)] outline-none text-[14.5px] text-ink leading-relaxed resize-none transition-colors"
                    />
                  </div>

                  {error && (
                    <div className="sm:col-span-2 rounded-sm border border-[color:var(--error)]/30 bg-[color:var(--error)]/5 px-4 py-3 text-[13px] text-[color:var(--error)] anim-fade-up">
                      {error}
                    </div>
                  )}

                  <div className="sm:col-span-2 flex items-center justify-between pt-3 mt-2 border-t border-hairline">
                    <span className="cad-label">No spam · response inside 48h</span>
                    <button type="submit" className="btn-primary">
                      Submit specifications
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center py-8 anim-fade-up">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-sm border border-[color:var(--primary)] text-[color:var(--primary)]">
                    <Check className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3
                    className="mt-6 text-[26px] md:text-[30px] font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Specifications received.
                  </h3>
                  <p className="mt-3 max-w-md text-[14.5px] text-ink-soft leading-[1.6]">
                    Our spec team will review {form.company || "your firm"}&apos;s scope
                    and respond at <span className="text-ink font-medium">{form.email}</span> inside two business days.
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <span className="cad-label">Ref # JS-{Math.floor(Math.random() * 9000 + 1000)}</span>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="cad-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 px-3.5 rounded-sm bg-[color:var(--container-lowest)] border border-outline-variant hover:border-[color:var(--secondary)] focus:border-[color:var(--primary)] outline-none text-[14.5px] text-ink transition-colors placeholder:text-[color:var(--outline)]/60"
      />
    </div>
  );
}
