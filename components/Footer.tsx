import { Mail, Phone, MapPin, ArrowUpRight } from "@/components/primitives/Icons";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Solutions",
    items: [
      "Architectural Glass",
      "Aluminum Extrusions",
      "Custom Fabrication",
      "Curtain Wall Systems",
      "Skylights & Canopies",
    ],
  },
  {
    title: "Company",
    items: ["About Jenny's", "Projects", "Process", "Engineering Team", "Careers"],
  },
  {
    title: "Resources",
    items: ["Spec Sheets", "Shop Drawings", "Warranty", "Sustainability", "Trade Accounts"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--inverse-surface)] text-on-inverse">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="container-arch relative pt-20 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-16 border-b border-white/10">
          <div className="lg:w-2/5 flex flex-col gap-6">
            <Logo invert />
            <p className="text-[15px] leading-relaxed text-white/70 max-w-md">
              Premium glass and aluminum, engineered for the buildings that
              outlast trends. Family-owned since 1992 — supplying architects,
              contractors, and discerning residential builders across the region.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a className="group inline-flex items-center gap-3 text-[13.5px] text-white/85 hover:text-white" href="tel:+18005436679">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 group-hover:border-white/40 transition-colors">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>
                +1 (800) 543·MERC
              </a>
              <a className="group inline-flex items-center gap-3 text-[13.5px] text-white/85 hover:text-white" href="mailto:specs@jennys-supply.com">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 group-hover:border-white/40 transition-colors">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                specs@jennys-supply.com
              </a>
              <div className="inline-flex items-start gap-3 text-[13.5px] text-white/85">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span className="pt-1.5">
                  Yard No. 4 — 1412 Foundry Way<br />
                  Industrial Park · Operating M–F 7a–5p
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {cols.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <div className="cad-label text-[color:var(--inverse-primary)]">{col.title}</div>
                <ul className="flex flex-col gap-2.5 mt-1">
                  {col.items.map((it) => (
                    <li key={it}>
                      <a className="text-[13.5px] text-white/80 hover:text-white inline-flex items-center gap-1 group" href="#">
                        {it}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-10">
          <div className="flex flex-col gap-1">
            <span className="cad-label" style={{ color: "var(--inverse-primary)" }}>Drawing No. JS-2026-001 · Sheet 1 of 1</span>
            <span className="text-[12px] text-white/55">
              © 2026 Jenny&apos;s Supply Co. · All material specifications subject to change without notice.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-white/55">
            <a href="#" className="hover:text-white">Terms</a>
            <span className="opacity-40">·</span>
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-40">·</span>
            <a href="#" className="hover:text-white">Accessibility</a>
            <span className="opacity-40">·</span>
            <span>AAMA · GANA · AISC member</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
