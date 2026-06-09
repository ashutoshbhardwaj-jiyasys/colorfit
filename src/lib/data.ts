export type Service = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  bgImage: string;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Brand Identity",
    description:
      "Logos, visual systems, and guidelines that give your brand a clear, ownable point of view.",
    tags: ["Strategy", "Logo", "Guidelines", "Naming"],
    bgImage: "/images/bg-brand-identity.png",
  },
  {
    num: "02",
    title: "Packaging Design",
    description:
      "Structural and surface design that earns the second glance on a crowded shelf and the reorder at home.",
    tags: ["Structure", "Labels", "Dielines", "Print-ready"],
    bgImage: "/images/bg-packaging-design.png",
  },
  {
    num: "03",
    title: "Graphic Design",
    description:
      "Campaigns, social, print, and editorial work that keep your identity sharp across every touchpoint.",
    tags: ["Social", "Print", "Editorial", "Campaigns"],
    bgImage: "/images/bg-graphic-design.png",
  },
  {
    num: "04",
    title: "Art Direction",
    description:
      "Photography, illustration, and motion direction that hold the whole experience together.",
    tags: ["Photography", "Illustration", "Motion"],
    bgImage: "/images/bg-art-direction.png",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  /** Tailwind background classes used for the placeholder tile. */
  tile: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "aera-skincare",
    title: "Aera Skincare",
    category: "Brand · Packaging",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/aera-skincare.png",
  },
  {
    slug: "north-roastery",
    title: "North Roastery",
    category: "Packaging · Graphic",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/north-roastery.png",
  },
  {
    slug: "verde-botanicals",
    title: "Verde Botanicals",
    category: "Brand Identity",
    year: "2024",
    tile: "bg-brand-leaf text-white",
    image: "/images/verde-botanicals.png",
  },
  {
    slug: "lumen-beverages",
    title: "Lumen Beverages",
    category: "Packaging",
    year: "2024",
    tile: "bg-brand-sky text-white",
    image: "/images/lumen-beverages.png",
  },
];

export const STATS = [
  { value: "120+", label: "Projects shipped" },
  { value: "14", label: "Industry awards" },
  { value: "9 yrs", label: "In the studio" },
  { value: "40+", label: "Brands launched" },
];
