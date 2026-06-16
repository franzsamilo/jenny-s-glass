import {
  Layers,
  Frame,
  Hammer,
  ShieldCheck,
  Ruler,
  Award,
  Building2,
  Sparkles,
  Wrench,
  Compass,
  Cog,
  Truck,
} from "@/components/primitives/Icons";

type IconComponent = (props: { className?: string; strokeWidth?: number; size?: number }) => React.ReactElement;

export type Category = {
  id: string;
  spec: string;
  title: string;
  blurb: string;
  bullets: string[];
  image: string;
  icon: IconComponent;
};

export const categories: Category[] = [
  {
    id: "architectural-glass",
    spec: "DIV. 08 81 00",
    title: "Architectural Glass",
    blurb:
      "Tempered, laminated, and insulated glass engineered for thermal performance and structural transparency. Tested to ASTM E1300 and IBC 2406.",
    bullets: ["Low-E coatings", "Heat-soak tested", "Up to 19mm thick", "Edge-polished"],
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
    icon: Layers,
  },
  {
    id: "aluminum-extrusions",
    spec: "DIV. 08 41 13",
    title: "Aluminum Extrusions",
    blurb:
      "High-grade aluminum framing systems, curtain wall mullions, and storefront profiles. Designed for thermal break, wind load, and seismic resilience.",
    bullets: ["6063-T5 / T6 alloy", "Class I anodized", "Thermally broken", "AAMA-certified"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    icon: Frame,
  },
  {
    id: "custom-fabrication",
    spec: "DIV. 05 70 00",
    title: "Custom Fabrication",
    blurb:
      "Bespoke metalwork and shop-drawn assemblies. From feature staircases to canopy systems — drafted in-house, CNC-cut to spec.",
    bullets: ["CNC + waterjet", "Shop drawings", "PE-stamped designs", "AISC certified"],
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    icon: Hammer,
  },
];

export type Difference = {
  id: string;
  spec: string;
  title: string;
  body: string;
  icon: IconComponent;
};

export const differences: Difference[] = [
  {
    id: "quality",
    spec: "A.01",
    title: "Uncompromising Quality",
    body: "Every coil, every cut, every pane logged. Three-tier QA on every order, no compromise on factory-second material. If it doesn't pass, it doesn't ship.",
    icon: ShieldCheck,
  },
  {
    id: "engineered",
    spec: "A.02",
    title: "Engineered Durability",
    body: "In-house engineering for wind load, thermal cycling, and seismic performance. Specifications backed by PE-stamped drawings on every commercial assembly.",
    icon: Ruler,
  },
  {
    id: "trust",
    spec: "A.03",
    title: "Established Trust",
    body: "Three decades supplying contractors and architects across the region. Our oldest curtain wall installations are still in service. Reputation is the only spec that matters.",
    icon: Award,
  },
  {
    id: "logistics",
    spec: "A.04",
    title: "On-Schedule Logistics",
    body: "Direct-from-mill inventory, in-house fabrication, and a 12-truck fleet. We hold your schedule like it's our own. Most orders ship inside ten business days.",
    icon: Truck,
  },
];

export type Project = {
  id: string;
  client: string;
  title: string;
  location: string;
  year: string;
  size: string;
  scope: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "meridian",
    client: "Meridian Tower",
    title: "Curtain Wall — 38 Storeys",
    location: "Downtown / Civic District",
    year: "2024",
    size: "186,000 sq ft",
    scope: "Unitised curtain wall system, custom mullion profile, structural silicone glazing",
    image:
      "https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&w=1600&q=80",
    tags: ["Commercial", "Curtain Wall", "High-Rise"],
  },
  {
    id: "atelier",
    client: "Atelier Residences",
    title: "Bespoke Glass Façade",
    location: "Riverside Heights",
    year: "2023",
    size: "42,800 sq ft",
    scope: "Floor-to-ceiling laminated IGU, hidden vertical mullions, terrace railings",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    tags: ["Residential", "Custom", "Luxury"],
  },
  {
    id: "concourse",
    client: "Northgate Concourse",
    title: "Skylight & Canopy System",
    location: "Northgate Transit Hub",
    year: "2024",
    size: "26,400 sq ft",
    scope: "Structural skylight ridge, tempered laminated overhead glazing, bronze anodized framing",
    image:
      "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1600&q=80",
    tags: ["Transit", "Skylight", "Public Works"],
  },
  {
    id: "ravine",
    client: "Ravine House",
    title: "Cantilevered Glass Box",
    location: "North Hills",
    year: "2025",
    size: "8,200 sq ft",
    scope: "Structural glass walls, minimal framing, integrated motorised shading",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    tags: ["Residential", "Custom", "Engineered"],
  },
];

export type Step = {
  num: string;
  title: string;
  body: string;
  icon: IconComponent;
};

export const process: Step[] = [
  {
    num: "01",
    title: "Specification",
    body: "We sit with your engineer of record. Loads, U-values, sightlines — calibrated against IBC, AAMA, ASTM. You leave with a spec, not a brochure.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Shop Drawings",
    body: "Detailed shop drawings drafted in-house. PE stamp where required. Submittal package ready for AOR review inside 10 business days.",
    icon: Ruler,
  },
  {
    num: "03",
    title: "Fabrication",
    body: "Mill-direct extrusions, CNC fabrication, three-tier QC. Every assembly tracked from heat number through final inspection.",
    icon: Cog,
  },
  {
    num: "04",
    title: "Delivery & Service",
    body: "Just-in-time logistics or staged on-site storage. Field service rep on call. Twenty-year warranty on every commercial installation.",
    icon: Wrench,
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  hint?: string;
};

export const stats: Stat[] = [
  { value: 33, suffix: "yrs", label: "Operating since 1992", hint: "Family owned, second generation" },
  { value: 1240, suffix: "+", label: "Commercial projects delivered" },
  { value: 14, suffix: "M sf", label: "Glass and aluminum shipped" },
  { value: 99.4, suffix: "%", label: "On-time delivery (rolling 24mo)" },
];

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const trustLogos: string[] = [
  "Meridian Tower",
  "Atelier Residences",
  "Northgate Transit",
  "Foreman & Vance Architects",
  "Civitas Construction",
  "Ravine House",
  "Halcyon Plaza",
  "Westbrook Partners",
  "Studio Penrose",
  "Locke + Larkin",
];

export type Material = {
  id: string;
  name: string;
  thickness: string;
  glazing: string;
  perf: { uValue: string; stc: string; shgc: string };
  best: string;
  icon: IconComponent;
};

export const materials: Material[] = [
  {
    id: "double-iglow-e",
    name: "Double IGU · Low-E²",
    thickness: "1 in.",
    glazing: "6mm + 13mm air + 6mm",
    perf: { uValue: "0.29", stc: "32", shgc: "0.28" },
    best: "Mid-rise commercial · standard storefronts",
    icon: Layers,
  },
  {
    id: "triple-iglow-e",
    name: "Triple IGU · Argon-filled",
    thickness: "1¼ in.",
    glazing: "6mm + 13mm Ar + 6mm + 13mm Ar + 6mm",
    perf: { uValue: "0.18", stc: "38", shgc: "0.24" },
    best: "Passive House · cold-climate residential",
    icon: Layers,
  },
  {
    id: "laminated-structural",
    name: "Laminated Structural",
    thickness: "1½ in.",
    glazing: "12mm + 1.52mm SGP + 12mm",
    perf: { uValue: "0.45", stc: "42", shgc: "0.43" },
    best: "Cantilevered façades · floors · skylights",
    icon: Building2,
  },
  {
    id: "spandrel-back-painted",
    name: "Spandrel · Back-Painted",
    thickness: "¼ in.",
    glazing: "Monolithic 6mm tempered",
    perf: { uValue: "0.49", stc: "29", shgc: "0.36" },
    best: "Vision-strip detailing · curtain wall infill",
    icon: Sparkles,
  },
];
