/* eslint-disable @next/next/no-img-element */
import { Phone, MessageCircle, MapPin, Clock, ArrowUpRight } from "@/components/primitives/Icons";
import { business, primaryNav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--navy-deep)] text-on-navy">
      <div className="absolute inset-0 grid-faint opacity-60 pointer-events-none" aria-hidden />
      <div className="container-page relative pt-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-12 border-b border-white/10">
          <div className="lg:w-2/5 flex flex-col gap-6">
            <img src="/logo-jennys.jpg" alt={business.name} className="w-44 h-auto rounded-[var(--r)] border border-white/10" />
            <p className="text-[15px] leading-relaxed text-white/70 max-w-md">
              A real, licensed glass-and-aluminum store in the {business.region}. We
              supply, fabricate, and install — and we stand behind every job. Family-run
              since {business.estYear}.
            </p>

            <div className="flex flex-col gap-3 mt-1">
              {business.phone ? (
                <a className="group inline-flex items-center gap-3 text-[14px] text-white/85 hover:text-white" href={business.phoneHref}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--r)] border border-white/15 group-hover:border-[color:var(--blue)] transition-colors">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  {business.phone}
                </a>
              ) : null}
              {business.phoneAlt ? (
                <a className="group inline-flex items-center gap-3 text-[14px] text-white/70 hover:text-white" href={business.phoneAltHref}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--r)] border border-white/10 group-hover:border-[color:var(--blue)] transition-colors">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  {business.phoneAlt}
                </a>
              ) : null}
              <a className="group inline-flex items-center gap-3 text-[14px] text-white/85 hover:text-white" href={business.messengerHref} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--r)] border border-white/15 group-hover:border-[color:var(--blue)] transition-colors">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                </span>
                Message us on Messenger
              </a>
              <div className="inline-flex items-start gap-3 text-[14px] text-white/85">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--r)] border border-white/15 shrink-0">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span className="pt-1">{business.addressLine}<br /><span className="text-white/55 text-[13px]">{business.area}</span></span>
              </div>
              <div className="inline-flex items-center gap-3 text-[14px] text-white/85">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--r)] border border-white/15 shrink-0">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {business.hours} · {business.days}
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol title="Site" items={primaryNav.map((n) => ({ label: n.label, href: n.href }))} />
            <FooterCol
              title="What we do"
              items={[
                { label: "Supply", href: "#services" },
                { label: "Install", href: "#services" },
                { label: "Fabricate", href: "#services" },
              ]}
            />
            <FooterCol
              title="Get started"
              items={[
                { label: "Get a quote", href: "#quote" },
                { label: "How buying works", href: "#buying" },
                { label: "Find us", href: "#find-us" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8">
          <span className="mono-data text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--blue-bright)" }}>
            Licensed business · Official receipts · Est. {business.estYear}
          </span>
          <span className="text-[12px] text-white/50">
            © {new Date().getFullYear()} {business.name} · {business.region}, Philippines
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="mono-data text-[11px] tracking-[0.16em] uppercase text-white/45">{title}</div>
      <ul className="flex flex-col gap-2.5 mt-1">
        {items.map((it) => (
          <li key={it.label}>
            <a className="text-[14px] text-white/80 hover:text-white inline-flex items-center gap-1 group" href={it.href}>
              {it.label}
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
