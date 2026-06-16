import { trustLogos } from "@/lib/data";
import { Marquee } from "@/components/primitives/Marquee";

export function TrustBar() {
  return (
    <section className="py-10 md:py-14 border-y border-hairline bg-[color:var(--container-low)]">
      <div className="container-arch flex items-center gap-6 mb-6">
        <span className="cad-label whitespace-nowrap">Trusted by</span>
        <span className="flex-1 h-px bg-hairline" />
        <span className="cad-label hidden sm:inline">Reference · projects in service</span>
      </div>
      <Marquee className="">
        <ul className="flex items-center gap-12 px-6">
          {trustLogos.map((logo) => (
            <li key={logo} className="flex items-center gap-3">
              <span
                className="text-[16px] md:text-[18px] font-medium tracking-tight whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--on-surface)",
                  opacity: 0.55,
                }}
              >
                {logo}
              </span>
              <span className="inline-block h-1 w-1 rounded-full bg-[color:var(--blueprint)] opacity-50" />
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
