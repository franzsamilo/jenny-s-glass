import {
  Layers,
  Frame,
  Hammer,
  Wrench,
  ShieldCheck,
  Receipt,
  Store,
  LifeBuoy,
  MessageCircle,
  FileText,
  Cash,
  Truck,
  Rollup,
  Bolt,
} from "@/components/primitives/Icons";

type IconComponent = (props: { className?: string; strokeWidth?: number; size?: number }) => React.ReactElement;

/* ============================================================
   CORE BUSINESS FACTS  (from Interview.docx, 2026-06-22)
   TODO (asset top-up): real phone, Messenger handle, exact
   store address, verified logo colour. Placeholders marked.
   ============================================================ */
export const business = {
  name: "Jennys Glass, Aluminum & Construction Supply",
  short: "Jennys",
  founded: "February 2017",
  estYear: "2017",
  years: 8,
  region: "Province of Antique",
  area: "Serving the whole province — north to south, mainly the south.",
  hours: "8:00 AM – 5:00 PM",
  days: "Monday to Saturday",
  // Verified from the owner + the public Facebook page (facebook.com/glass.aluminum.319).
  phone: "0917 704 1997",
  phoneHref: "tel:+639177041997",
  phoneAlt: "0917 311 0637",
  phoneAltHref: "tel:+639173110637",
  messenger: "facebook.com/glass.aluminum.319",
  messengerHref: "https://m.me/glass.aluminum.319",
  facebookUrl: "https://www.facebook.com/glass.aluminum.319",
  addressLine: "T.A. Fornier St., Brgy. Atabay, San Jose de Buenavista, Antique",
};

export type NavItem = { label: string; href: string };
export const primaryNav: NavItem[] = [
  { label: "What we do", href: "#services" },
  { label: "Why Jennys", href: "#accountability" },
  { label: "How buying works", href: "#buying" },
  { label: "Find us", href: "#find-us" },
];

/* ============================================================
   WHAT WE DO — supply · fabricate · install
   ============================================================ */
export type Pillar = {
  id: string;
  no: string;
  title: string;
  blurb: string;
  items: string[];
  icon: IconComponent;
  image: string;
};

export const pillars: Pillar[] = [
  {
    id: "supply",
    no: "01",
    title: "Supply",
    blurb:
      "Our bread and butter. Glass, aluminum, and roll-up materials with all the accessories — kept in stock at the store, ready to pick up or have delivered.",
    items: ["Glass", "Aluminum profiles", "Roll-up materials", "Accessories & fittings"],
    icon: Layers,
    image: "/store-glass-cases.jpg",
  },
  {
    id: "install",
    no: "02",
    title: "Install",
    blurb:
      "We don't just hand over materials. We install glass, windows, doors, and roll-up — and you have a real store to call if anything needs looking at afterward.",
    items: ["Sliding doors & windows", "Glass partitions & railings", "Roll-up doors", "Screen doors"],
    icon: Wrench,
    image: "/glass-railing-interior.jpg",
  },
  {
    id: "fabricate",
    no: "03",
    title: "Fabricate",
    blurb:
      "Made to order from the same materials we supply — measured, cut, and built for your space.",
    items: ["Shower enclosures", "Glass & kitchen cabinets", "Tempered-glass basketball boards", "Display showcases"],
    icon: Hammer,
    image: "/kitchen-cabinet.jpg",
  },
];

/* The stock ledger — plain, no invented specs */
export type CatalogRow = {
  id: string;
  name: string;
  forUse: string;
  icon: IconComponent;
};
export const catalog: CatalogRow[] = [
  { id: "glass", name: "Glass", forUse: "Windows, doors, cabinets, shower enclosures, table tops", icon: Layers },
  { id: "aluminum", name: "Aluminum", forUse: "Window & door frames, storefronts, partitions", icon: Frame },
  { id: "rollup", name: "Roll-up materials & slats", forUse: "Roll-up doors for shops, garages, and storefronts", icon: Rollup },
  { id: "accessories", name: "Accessories & fittings", forUse: "Hinges, handles, locks, sealant, and the small parts that finish a job", icon: Bolt },
];

/* ============================================================
   RECENT WORK — real photos from the business's own jobs
   ============================================================ */
export type WorkItem = { src: string; alt: string; tag: string };
export const work: WorkItem[] = [
  { src: "/glass-railing-interior.jpg", alt: "Stainless-and-glass balustrade on an interior mezzanine", tag: "Glass railing" },
  { src: "/glass-partition.jpg", alt: "Black-framed glass partition with sliding panels", tag: "Glass partition" },
  { src: "/basketball-board-shop.jpg", alt: "Tempered-glass basketball backboard fabricated in the shop", tag: "Basketball board" },
  { src: "/sliding-windows-green.jpg", alt: "Aluminum sliding windows with tinted glass", tag: "Sliding windows" },
  { src: "/screen-door.jpg", alt: "Aluminum screen door on a home entrance", tag: "Screen door" },
  { src: "/arched-window.jpg", alt: "Custom arched feature window in a black frame", tag: "Feature window" },
  { src: "/glass-display-cabinet.jpg", alt: "Glass-and-aluminum display cabinet with glass shelves", tag: "Display cabinet" },
  { src: "/windows-stair-railing.jpg", alt: "Black-framed windows and a steel stair railing", tag: "Windows & railing" },
];

/* ============================================================
   THE DIFFERENTIATOR — someone to answer for the work
   (legal framing of the real edge: legitimacy + accountability)
   ============================================================ */
export type AccountPoint = {
  id: string;
  title: string;
  body: string;
  icon: IconComponent;
};
export const accountability: AccountPoint[] = [
  {
    id: "licensed",
    title: "A licensed, registered store",
    body: "Jennys is a real, permitted business — not a freelance arrangement that disappears when the job ends. That permit is the reason customers trust the name.",
    icon: ShieldCheck,
  },
  {
    id: "receipts",
    title: "Official receipts on every order",
    body: "Every purchase is documented with a proper receipt. You have a record of what you paid for, and proof of who you bought it from.",
    icon: Receipt,
  },
  {
    id: "store",
    title: "A real store you can walk into",
    body: "There's a physical counter in Antique with people behind it. You're buying from a place you can find again — not a page that goes quiet.",
    icon: Store,
  },
  {
    id: "aftercare",
    title: "Someone to call after the job",
    body: "When the work is done, you still have us. Customer support and aftercare are part of what you're paying for — that's why our regulars stay.",
    icon: LifeBuoy,
  },
];

/* ============================================================
   THE STORY — built by a family, still here
   ============================================================ */
export const story = {
  lead: "Jennys started in February 2017 with a simple plan: support a family's children through school, build a steady income, and look after the people who work here.",
  body: [
    "Eight years on, we've supplied, fabricated, and installed glass and aluminum across the Province of Antique — from the north all the way down to the south, where most of our work is.",
    "Early in 2026 we scaled back for a few months while we worked through some financial difficulty. We're back now, steadily recovering, and moving forward with the same determination that got us here.",
  ],
  pullquote: "A family business — here for the long run, not the quick sale.",
};

/* ============================================================
   HOW BUYING WORKS
   ============================================================ */
export type Step = { num: string; title: string; body: string; icon: IconComponent };
export const buyingSteps: Step[] = [
  {
    num: "01",
    title: "Ask us / check stock",
    body: "Call or message us on Messenger to check what's available. Most of our installers just message to confirm stock before coming in.",
    icon: MessageCircle,
  },
  {
    num: "02",
    title: "Get your quote",
    body: "Tell us what you need and we'll send a quotation. No pressure, no guessing — you'll know the price before you commit.",
    icon: FileText,
  },
  {
    num: "03",
    title: "Reserve with 50% down",
    body: "A 50% downpayment holds your order, with the balance due within a week. Cash. Subject to approval.",
    icon: Cash,
  },
  {
    num: "04",
    title: "Pick up or have it delivered",
    body: "Collect at the store, or arrange delivery across the province. Delivery is being restored — ask us for the current schedule.",
    icon: Truck,
  },
];

/* The terms ledger — true facts, plainly stated */
export type TermRow = { label: string; value: string; note?: string };
export const terms: TermRow[] = [
  { label: "Downpayment", value: "50%", note: "to reserve your order" },
  { label: "Balance", value: "Within 1 week", note: "subject to approval" },
  { label: "Payment", value: "Cash" },
  { label: "Delivery", value: "Province-wide", note: "being restored — ask for schedule" },
  { label: "Min. for delivery", value: "₱20,000" },
  { label: "Store hours", value: "8 AM – 5 PM", note: "Monday to Saturday" },
];

/* ============================================================
   PROOF — true credentials only (no invented numbers/clients)
   ============================================================ */
export const credentials: string[] = [
  "Est. 2017",
  "Licensed business",
  "Official receipts",
  "Antique-wide",
  "A real store",
];

export const proofPoints = [
  "Family-run since 2017",
  "Fully licensed & permitted",
  "Official receipts on every order",
  "A physical store you can visit",
];
