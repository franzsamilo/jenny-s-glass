"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "@/components/primitives/Icons";
import { materials } from "@/lib/data";
import { Reveal } from "@/components/primitives/Reveal";

export function Specs() {
  const [active, setActive] = useState(materials[0].id);
  const current = materials.find((m) => m.id === active) ?? materials[0];

  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--inverse-surface)] text-on-inverse overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 50% at 10% 10%, rgba(167,200,255,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="container-arch relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow !text-[color:var(--inverse-primary)]">B · Performance Index</span>
            <h2 className="h-display !text-on-inverse text-[40px] md:text-[52px] mt-4">
              Engineered to outperform.
              <br />
              <span className="italic font-medium text-[color:var(--inverse-primary)]">
                Specified to last.
              </span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-[15.5px] leading-[1.65] text-white/70 max-w-md">
              Toggle any glazing system to see live performance figures —
              U-value, sound rating, solar heat gain. Every value tested per
              published standards. No marketing math.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-7 rounded-sm border border-white/12 overflow-hidden bg-white/[0.025]">
            <table className="w-full text-left">
              <thead className="text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                <tr className="border-b border-white/12">
                  <th className="py-4 pl-5 font-medium">Material</th>
                  <th className="py-4 px-3 font-medium">U-Value</th>
                  <th className="py-4 px-3 font-medium">STC</th>
                  <th className="py-4 px-3 font-medium">SHGC</th>
                  <th className="py-4 pr-5 font-medium text-right">View</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m) => {
                  const isActive = m.id === active;
                  return (
                    <tr
                      key={m.id}
                      onClick={() => setActive(m.id)}
                      className={`cursor-pointer border-b border-white/10 last:border-b-0 transition-colors ${
                        isActive ? "bg-white/[0.07]" : "hover:bg-white/[0.035]"
                      }`}
                    >
                      <td className="py-5 pl-5 align-middle">
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-block h-1.5 w-1.5 rounded-full transition-colors ${
                              isActive ? "bg-[color:var(--inverse-primary)]" : "bg-white/30"
                            }`}
                          />
                          <div>
                            <div className="text-[15px] font-medium leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                              {m.name}
                            </div>
                            <div className="text-[11px] mt-0.5 cad-label !text-white/50">{m.thickness}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-3 font-mono text-[15px] text-white/85 tabular-nums">{m.perf.uValue}</td>
                      <td className="py-5 px-3 font-mono text-[15px] text-white/85 tabular-nums">{m.perf.stc}</td>
                      <td className="py-5 px-3 font-mono text-[15px] text-white/85 tabular-nums">{m.perf.shgc}</td>
                      <td className="py-5 pr-5 text-right">
                        <span
                          className={`inline-flex h-7 w-7 items-center justify-center rounded-sm border transition-all ${
                            isActive
                              ? "border-[color:var(--inverse-primary)] text-[color:var(--inverse-primary)]"
                              : "border-white/20 text-white/55"
                          }`}
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Detail panel right */}
          <div className="lg:col-span-5 rounded-sm border border-white/12 bg-[color:var(--surface)] text-ink p-7 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" aria-hidden />
            <div key={current.id} className="relative anim-fade-up">
              <span className="cad-label">SPEC · {current.id.toUpperCase()}</span>
              <h3
                className="text-[26px] md:text-[28px] font-semibold tracking-tight mt-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {current.name}
              </h3>

              <dl className="grid grid-cols-2 gap-4 mt-7">
                <Stat label="Thickness" value={current.thickness} />
                <Stat label="Glazing build-up" value={current.glazing} mono />
                <Stat label="U-Value (NFRC)" value={current.perf.uValue} mono />
                <Stat label="STC class" value={current.perf.stc} mono />
              </dl>

              <div className="mt-7 pt-6 border-t border-hairline">
                <span className="cad-label">Best for</span>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-soft">{current.best}</p>
              </div>

              <div className="mt-7 flex flex-col gap-2.5">
                {[
                  "Tested per ASTM E283 / E330",
                  "NFRC-certified U-value & SHGC",
                  "Twenty-year sealed-unit warranty",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-[13px] text-ink-soft">
                    <Check className="h-3.5 w-3.5 text-[color:var(--primary)]" strokeWidth={2} />
                    {t}
                  </div>
                ))}
              </div>

              <a href="#quote" className="btn-primary mt-7 w-full justify-center">
                Request this spec
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <dt className="cad-label">{label}</dt>
      <dd
        className={`mt-1.5 text-[14.5px] text-ink ${mono ? "font-mono tabular-nums" : ""}`}
        style={mono ? { fontFamily: "var(--font-mono)" } : { fontFamily: "var(--font-serif)" }}
      >
        {value}
      </dd>
    </div>
  );
}
