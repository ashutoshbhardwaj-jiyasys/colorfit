export type Service = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  bgImage: string;
  extraInfo?: string;
  detailsList?: string[];
};

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Brand Identity",
    description:
      "Logos, visual systems, and guidelines that give your brand a clear, ownable point of view.",
    tags: ["Strategy", "Logo", "Guidelines", "Naming"],
    bgImage: "/images/bg-brand-identity.jpg",
    extraInfo:
      "We translate deep strategic positioning into unique visual systems that scale flawlessly across physical packaging, digital spaces, and commercial touchpoints.",
    detailsList: [
      "Competitive Audit",
      "Logo & Typography System",
      "Substrate Calibration",
      "Visual Identity Guides",
    ],
  },
  {
    num: "02",
    title: "Packaging Design",
    description:
      "Structural and surface design that earns the second glance on a crowded shelf and the reorder at home.",
    tags: ["Structure", "Labels", "Dielines", "Print-ready"],
    bgImage: "/images/bg-packaging-design.jpg",
    extraInfo:
      "We build custom structural dielines and print-ready finishes that capture attention on retail shelves and optimize customer unboxing experiences.",
    detailsList: [
      "Vector Dielines & Keys",
      "Finishes & Embellishments",
      "Feasibility Audits",
      "Substrate Selection",
    ],
  },
  {
    num: "03",
    title: "Graphic Design",
    description:
      "Campaigns, social, print, and editorial work that keep your identity sharp across every touchpoint.",
    tags: ["Social", "Print", "Editorial", "Campaigns"],
    bgImage: "/images/bg-graphic-design.jpg",
    extraInfo:
      "From editorial catalog spreads to large-scale billboards, we maintain strict layout standards, grid consistency, and visual brand cohesion.",
    detailsList: [
      "Marketing collateral",
      "Editorial Publication Grid",
      "Campaign assets",
      "Outdoor Key Art",
    ],
  },
  {
    num: "04",
    title: "Art Direction",
    description:
      "Photography, illustration, and motion direction that hold the whole experience together.",
    tags: ["Photography", "Illustration", "Motion"],
    bgImage: "/images/bg-art-direction.jpg",
    extraInfo:
      "We direct cast photography sessions, coordinate illustrators, and layout storyboards to define the overall visual narrative and flow.",
    detailsList: [
      "Studio Photography Guides",
      "Cast & Style Casting",
      "Storyboard Direction",
      "Motion Keyframes",
    ],
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
  video?: string;
};

export const PROJECTS: Project[] = [

  {
    slug: "kridha-herbal",
    title: "Kridha Herbal",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/kridha-herbal.jpg",
  },
  {
    slug: "baby-kaart",
    title: "Baby Kaart",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/baby-kaart.jpg",
  },
  {
    slug: "zovy-nimbu-achari-peanuts",
    title: "Zovy Nimbu Achari Peanuts",
    category: "Snack Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/zovy-nimbu-achari-peanuts.jpeg",
  },
  {
    slug: "today-taste-tea",
    title: "Today Taste Tea",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/today-taste-tea.jpg",
  },
  {
    slug: "today-taste-chai-garam",
    title: "Today Taste Chai Garam",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/today-taste-chai-garam.jpg",
  },
  {
      slug: "upasna-box",
      title: "Upasna",
      category: "Box Packaging",
      year: "2025",
      tile: "bg-brand-leaf text-white",
      image: "/images/upasna-box.jpg",
  },
  {
    slug: "true-nirvana",
    title: "True Nirvana",
    category: "Tea Packaging",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/true-nirvana.jpg",
  },
  {
    slug: "bela-tea",
    title: "Bela Tea",
    category: "Tea Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/bela-tea.jpg",
  },
  {
    slug: "maru-kesari",
    title: "Maru Kesari",
    category: "Tea Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/maru-kesari.jpg",
  },
  {
    slug: "maysukk",
    title: "Maysukk",
    category: "Snack Packaging",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/maysukk.jpg",
  },
  {
    slug: "true-nirvana-ginger-tulsi",
    title: "True Nirvana Ginger Tulsi",
    category: "Tea Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/true-nirvana-ginger-tulsi.jpeg",
  },
  {
    slug: "obuddys",
    title: "O'Buddy's",
    category: "Snack Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/obuddys.jpg",
  },
  {
    slug: "pulfi",
    title: "Pulfi",
    category: "Snack Packaging",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/pulfi.jpg",
  },
  {
    slug: "asjwal",
    title: "Asjwal",
    category: "Potato Chips Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/asjwal.jpg",
  },
  {
    slug: "lrys",
    title: "LRY'S",
    category: "Potato Chips Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/lrys.jpg",
  },
  {
    slug: "krringz-corn-rings",
    title: "Krringz Corn Rings",
    category: "Snack Packaging",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/krringz-corn-rings.jpg",
  },
  {
    slug: "womenia",
    title: "Womenia",
    category: "Bhujia Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/womenia.jpg",
  },
  {
    slug: "krringz-combo",
    title: "Krringz Combo",
    category: "Product Series",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/krringz-combo.jpg",
  },
  {
    slug: "swarveda-makhana",
    title: "Swarveda Makhana",
    category: "Food Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/swarveda-makhana.jpg",
  },
  {
    slug: "turmeric-powder",
    title: "Turmeric Powder",
    category: "Spices Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/turmeric-powder.jpg",
  },
  {
    slug: "magic-foods-pasta",
    title: "Magic Foods Pasta",
    category: "Food Packaging",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/magic-foods-pasta.jpg",
  },
  {
    slug: "pure-zayka-suji",
    title: "Pure Zayka Suji",
    category: "Food Packaging",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/pure-zayka-suji.jpg",
  },
  {
    slug: "silvercrop",
    title: "SilverCrop",
    category: "Agriculture Packaging",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/silvercrop.jpg",
  },
  {
    slug: "gro-golden-seeds",
    title: "Gro Golden Seeds",
    category: "Seeds Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/gro-golden-seeds.jpg",
  },
  // here
  {
    slug: "jainam-atta",
    title: "Jainam Atta",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/jainam-atta.jpg",
  },

  {
    slug: "pure-zayka-maida",
    title: "Pure Zayka Maida",
    category: "Food Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/pure-zayka-maida.jpg",
  },
  {
    slug: "sampoorn-besan",
    title: "Sampoorn Besan",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/sampoorn-besan.jpg",
  },
  {
    slug: "rose-incense",
    title: "Rose Incense",
    category: "Incense Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/rose-incense.jpg",
  },
  {
    slug: "sampoorn-maida",
    title: "Sampoorn Maida",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/sampoorn-maida.jpg",
  },
  {
    slug: "miss-edge-dry-comfort",
    title: "Miss Edge Dry Comfort",
    category: "Personal Care Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/miss-edge-dry-comfort.jpg",
  },
  {
    slug: "intimate-incense",
    title: "Intimate Incense",
    category: "Incense Packaging",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/intimate-incense.jpg",
  },
  {
    slug: "pineapple-delight",
    title: "Pineapple Delight",
    category: "Incense Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/pineapple-delight.jpg",
  },
  {
    slug: "mogra-incense",
    title: "Mogra Incense",
    category: "Incense Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/mogra-incense.jpg",
  },
  {
    slug: "sampoorn-suji",
    title: "Sampoorn Suji",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/sampoorn-suji.jpg",
  },
  {
    slug: "fresh-sandal",
    title: "Fresh Sandal",
    category: "Incense Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/fresh-sandal.jpg",
  },
  {
    slug: "classic-bella",
    title: "Classic Bella",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/classic-bella.jpg",
  },
  {
    slug: "devki-nandan",
    title: "Devki Nandan",
    category: "Packaging Design",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/devki-nandan.jpg",
  },
  

  {
    slug: "vaishnavi-daisy",
    title: "Vaishnavi & Daisy",
    category: "Brand Packaging",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/vaishnavi-daisy.jpg",
  },
  {
    slug: "water-amber",
    title: "Water Amber",
    category: "Incense Packaging",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/water-amber.jpg",
  },
  {
    slug: "temple-flora",
    title: "Temple Flora",
    category: "Incense Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/temple-flora.jpg",
  },
  
  
  {
    slug: "arham-box",
    title: "Arham",
    category: "Box Packaging",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/arham-box.jpg",
  },
  {
    slug: "shivaansh-pistachios",
    title: "Shivaansh Pistachios",
    category: "Food Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/shivaansh-pistachios.jpg",
  },
  {
    slug: "shakahari-rusk",
    title: "Shakahari Baked Rusk",
    category: "Food Packaging",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/shakahari-rusk.jpg",
  },
  {
    slug: "funto-fruit-bar",
    title: "Funto Fruit Bar",
    category: "Food Packaging",
    year: "2025",
    tile: "bg-brand-orange text-white",
    image: "/images/funto-fruit-bar.jpg",
  },
  {
    slug: "ganoderma-powder",
    title: "Ganoderma Powder",
    category: "Health Packaging",
    year: "2025",
    tile: "bg-brand-leaf text-white",
    image: "/images/ganoderma-powder.jpg",
  },
  {
    slug: "breath-of-nature-lavender-tea",
    title: "Breath of Nature Lavender Tea",
    category: "Tea Packaging",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/breath-of-nature-lavender-tea.png",
  },
  {
    slug: "gajanan-snacks",
    title: "Gajanan Snacks",
    category: "Snack Packaging",
    year: "2025",
    tile: "bg-brand-violet text-white",
    image: "/images/gajanan-snacks.jpg",
  },
  {
    slug: "miss-edge-naturally-soft",
    title: "Miss Edge Naturally Soft",
    category: "Personal Care Packaging",
    year: "2025",
    tile: "bg-brand-sky text-white",
    image: "/images/miss-edge-naturally-soft.jpg",
  },

];

export const STATS = [
  { value: "120+", label: "Projects shipped" },
  { value: "14", label: "Industry awards" },
  { value: "9 yrs", label: "In the studio" },
  { value: "40+", label: "Brands launched" },
];
