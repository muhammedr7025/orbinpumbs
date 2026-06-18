import { Category, Product, HeroSlide, Certification } from "@/types/sanity";

/**
 * Fallback/seed data used when Sanity is not configured yet.
 * This lets the site be fully demonstrable before CMS data entry.
 */

export const fallbackHeroSlides: HeroSlide[] = [
  {
    _id: "hero-1",
    title: "Experience the Excellence",
    subtitle:
      "India's trusted manufacturer of submersible pumps, motors & solar systems — delivering unmatched quality for over 40 years.",
    image: {} as HeroSlide["image"],
    ctaText: "Explore Products",
    ctaLink: "/products",
  },
  {
    _id: "hero-2",
    title: "Solar Pump Solutions",
    subtitle:
      "Harness the power of the sun with ORBIN Solar Pumps — energy-efficient, cost-effective, and sustainable.",
    image: {} as HeroSlide["image"],
    ctaText: "Learn More",
    ctaLink: "/solar",
  },
];

export const fallbackCategories: Category[] = [
  {
    _id: "cat-1",
    title: "Submersible Pumps",
    slug: { current: "submersible-pumps" },
    description:
      "Turbo IE3 water-filled and oil-filled submersible pumps in V3, V4, V5, V6, V8, V9, and V10 configurations. Designed for deep well applications with maximum efficiency.",
    image: {} as Category["image"],
    featured: true,
    productCount: 3,
  },
  {
    _id: "cat-2",
    title: "Openwell Pumps",
    slug: { current: "openwell-pumps" },
    description:
      "High-performance openwell submersible pumps designed for shallow water sources, sumps, tanks, and irrigation.",
    image: {} as Category["image"],
    featured: true,
    productCount: 2,
  },
  {
    _id: "cat-3",
    title: "Submersible Motors",
    slug: { current: "submersible-motors" },
    description:
      "Standard and stainless steel submersible motors engineered for reliability and long operational life.",
    image: {} as Category["image"],
    featured: true,
    productCount: 2,
  },
  {
    _id: "cat-4",
    title: "SS Investment Casting Pumps",
    slug: { current: "ss-investment-casting-pumps" },
    description:
      "Precision-engineered stainless steel investment casting pumps for corrosion-resistant performance.",
    image: {} as Category["image"],
    featured: true,
    productCount: 1,
  },
  {
    _id: "cat-5",
    title: "Solar Pumps",
    slug: { current: "solar-pumps" },
    description:
      "Complete solar pumping solutions with DC and AC controllers, suitable for agricultural and domestic use.",
    image: {} as Category["image"],
    featured: true,
    productCount: 2,
  },
  {
    _id: "cat-6",
    title: "Domestic Series",
    slug: { current: "domestic-series" },
    description:
      "Booster pumps, multistage boosters, mini waste water pumps, and Lord series for residential water management.",
    image: {} as Category["image"],
    featured: true,
    productCount: 2,
  },
  {
    _id: "cat-7",
    title: "Sewage & Waste Water Pumps",
    slug: { current: "sewage-waste-water-pumps" },
    description:
      "Heavy-duty sewage pumps with cutter, slurry pumps, and stainless steel variants for waste water management.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-8",
    title: "Hi-Pressure Washer Pumps",
    slug: { current: "hi-pressure-washer-pumps" },
    description:
      "Industrial high-pressure washer pumps for cleaning and maintenance applications.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-9",
    title: "Cables",
    slug: { current: "cables" },
    description:
      "Submersible flat and round cables engineered for underwater pump connections.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-10",
    title: "Control Panels & Starters",
    slug: { current: "control-panels-starters" },
    description:
      "Digital control panels and starter units for safe and efficient pump operation.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-11",
    title: "Motor Protectors",
    slug: { current: "motor-protectors" },
    description:
      "Electronic motor protectors for voltage fluctuation, dry run, and overload protection.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-12",
    title: "Hydro Pneumatic Systems",
    slug: { current: "hydro-pneumatic-systems" },
    description:
      "Complete hydro pneumatic pressure boosting systems for consistent water pressure.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-13",
    title: "Fire Fighting Systems",
    slug: { current: "fire-fighting-systems" },
    description:
      "Fire-fighting pump systems designed to meet safety standards for commercial and industrial buildings.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-14",
    title: "Stainless Steel Submersible Pumps",
    slug: { current: "ss-submersible-pumps" },
    description:
      "Corrosion-resistant stainless steel submersible pumps for challenging water conditions.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-15",
    title: "Plunger Pumps",
    slug: { current: "plunger-pumps" },
    description:
      "Heavy-duty plunger pumps for high-pressure industrial applications.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-16",
    title: "Mud Monoblock Pumps",
    slug: { current: "mud-monoblock-pumps" },
    description:
      "Robust monoblock pumps for handling muddy and abrasive water efficiently.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-17",
    title: "Non-Clog Self Priming Pumps",
    slug: { current: "non-clog-self-priming-pumps" },
    description:
      "Self-priming non-clog pumps designed for handling dirty water and solids.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-18",
    title: "Immersion Coolant Pumps",
    slug: { current: "immersion-coolant-pumps" },
    description:
      "Precision immersion coolant pumps for CNC machines and industrial cooling systems.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
  {
    _id: "cat-19",
    title: "SS Casted Pumps",
    slug: { current: "ss-casted-pumps" },
    description:
      "Stainless steel casted pumps offering durability and corrosion resistance for demanding environments.",
    image: {} as Category["image"],
    featured: false,
    productCount: 1,
  },
];

export const fallbackProducts: Record<string, Product[]> = {
  "submersible-pumps": [
    {
      _id: "prod-1",
      title: "ORBIN Turbo V4 Water Filled Submersible Pump",
      modelNumber: "DSP4WF-1.5",
      slug: { current: "turbo-v4-water-filled" },
      shortDescription:
        "High efficiency V4 water-filled submersible pump with IE3 motor, ideal for agricultural and domestic borewell applications.",
      features: [
        "IE3 energy efficient motor",
        "Noryl/SS impellers for long life",
        "Sand resistant design",
        "Suitable for 100mm (4\") borewell",
        "ISI marked (IS:8034)",
        "Available from 0.5 HP to 3 HP",
      ],
      specifications: [
        { model: "DSP4WF-0.5", hp: "0.5", kw: "0.37", stages: "6", dischargeLpm: "40", headMeters: "30" },
        { model: "DSP4WF-1.0", hp: "1.0", kw: "0.75", stages: "10", dischargeLpm: "50", headMeters: "58" },
        { model: "DSP4WF-1.5", hp: "1.5", kw: "1.1", stages: "14", dischargeLpm: "55", headMeters: "82" },
        { model: "DSP4WF-2.0", hp: "2.0", kw: "1.5", stages: "18", dischargeLpm: "60", headMeters: "108" },
        { model: "DSP4WF-3.0", hp: "3.0", kw: "2.2", stages: "22", dischargeLpm: "70", headMeters: "140" },
      ],
      images: [],
      series: "Turbo IE3",
      hpRange: "0.5 - 3",
      categorySlug: "submersible-pumps",
    },
    {
      _id: "prod-2",
      title: "ORBIN Turbo V6 Oil Filled Submersible Pump",
      modelNumber: "DSP6OF-7.5",
      slug: { current: "turbo-v6-oil-filled" },
      shortDescription:
        "Heavy-duty V6 oil-filled submersible pump for deep borewells and high discharge agricultural irrigation.",
      features: [
        "Oil-cooled motor for extended life",
        "CI/SS construction for durability",
        "High discharge capacity",
        "Suitable for 150mm (6\") borewell",
        "Energy star rated",
        "Available from 5 HP to 30 HP",
      ],
      specifications: [
        { model: "DSP6OF-5.0", hp: "5.0", kw: "3.7", stages: "5", dischargeLpm: "200", headMeters: "35" },
        { model: "DSP6OF-7.5", hp: "7.5", kw: "5.5", stages: "8", dischargeLpm: "220", headMeters: "55" },
        { model: "DSP6OF-10", hp: "10", kw: "7.5", stages: "10", dischargeLpm: "250", headMeters: "70" },
        { model: "DSP6OF-15", hp: "15", kw: "11", stages: "14", dischargeLpm: "280", headMeters: "100" },
        { model: "DSP6OF-20", hp: "20", kw: "15", stages: "18", dischargeLpm: "300", headMeters: "130" },
      ],
      images: [],
      series: "Turbo IE3",
      hpRange: "5 - 30",
      categorySlug: "submersible-pumps",
    },
    {
      _id: "prod-3",
      title: "ORBIN V3 Submersible Pump Set",
      modelNumber: "DSP3RF-2.5",
      slug: { current: "v3-submersible-pump" },
      shortDescription:
        "Compact V3 submersible pump designed for narrow borewells with efficient water delivery.",
      features: [
        "Compact design for 75mm (3\") borewell",
        "Stainless steel shaft",
        "Radial flow impeller design",
        "Low power consumption",
        "Easy installation",
        "Available from 0.5 HP to 2 HP",
      ],
      specifications: [
        { model: "DSP3RF-0.5", hp: "0.5", kw: "0.37", stages: "8", dischargeLpm: "25", headMeters: "35" },
        { model: "DSP3RF-1.0", hp: "1.0", kw: "0.75", stages: "14", dischargeLpm: "30", headMeters: "65" },
        { model: "DSP3RF-1.5", hp: "1.5", kw: "1.1", stages: "20", dischargeLpm: "35", headMeters: "95" },
        { model: "DSP3RF-2.0", hp: "2.0", kw: "1.5", stages: "26", dischargeLpm: "38", headMeters: "125" },
      ],
      images: [],
      series: "Standard",
      hpRange: "0.5 - 2",
      categorySlug: "submersible-pumps",
    },
  ],
  "solar-pumps": [
    {
      _id: "prod-sp-1",
      title: "ORBIN Solar DC Submersible Pump",
      modelNumber: "OSP-DC-3HP",
      slug: { current: "solar-dc-submersible" },
      shortDescription:
        "Direct DC solar submersible pump with MPPT controller for off-grid agricultural and rural water supply.",
      features: [
        "Built-in MPPT controller",
        "No electricity required — 100% solar powered",
        "Dry-run protection",
        "Suitable for PM-KUSUM scheme",
        "Remote monitoring via mobile app",
        "5-year warranty on solar panels",
      ],
      specifications: [
        { model: "OSP-DC-1HP", hp: "1.0", kw: "0.75", stages: "8", dischargeLpm: "30", headMeters: "50" },
        { model: "OSP-DC-2HP", hp: "2.0", kw: "1.5", stages: "14", dischargeLpm: "50", headMeters: "80" },
        { model: "OSP-DC-3HP", hp: "3.0", kw: "2.2", stages: "18", dischargeLpm: "60", headMeters: "110" },
        { model: "OSP-DC-5HP", hp: "5.0", kw: "3.7", stages: "8", dischargeLpm: "150", headMeters: "50" },
      ],
      images: [],
      series: "Solar DC",
      hpRange: "1 - 5",
      categorySlug: "solar-pumps",
    },
    {
      _id: "prod-sp-2",
      title: "ORBIN Solar AC Submersible Pump",
      modelNumber: "OSP-AC-5HP",
      slug: { current: "solar-ac-submersible" },
      shortDescription:
        "AC solar submersible pump with VFD controller — works on both solar and grid power for uninterrupted water supply.",
      features: [
        "Dual power: solar + grid electricity",
        "VFD controller for variable speed operation",
        "Automatic switchover between solar and grid",
        "Government subsidy eligible",
        "LCD display for real-time monitoring",
        "MNRE approved",
      ],
      specifications: [
        { model: "OSP-AC-3HP", hp: "3.0", kw: "2.2", stages: "12", dischargeLpm: "70", headMeters: "80" },
        { model: "OSP-AC-5HP", hp: "5.0", kw: "3.7", stages: "8", dischargeLpm: "200", headMeters: "45" },
        { model: "OSP-AC-7.5HP", hp: "7.5", kw: "5.5", stages: "10", dischargeLpm: "220", headMeters: "60" },
        { model: "OSP-AC-10HP", hp: "10", kw: "7.5", stages: "14", dischargeLpm: "250", headMeters: "85" },
      ],
      images: [],
      series: "Solar AC",
      hpRange: "3 - 10",
      categorySlug: "solar-pumps",
    },
  ],
  "domestic-series": [
    {
      _id: "prod-dom-1",
      title: "ORBIN Booster Pump",
      modelNumber: "OBP-0.5",
      slug: { current: "booster-pump" },
      shortDescription:
        "Compact booster pump for increasing water pressure in residential and commercial buildings.",
      features: [
        "Automatic pressure control",
        "Silent operation (< 45 dB)",
        "SS impeller and diffuser",
        "Thermal overload protection",
        "Compact design — easy installation",
        "Suitable for 1-3 story buildings",
      ],
      specifications: [
        { model: "OBP-0.5", hp: "0.5", kw: "0.37", stages: "1", dischargeLpm: "35", headMeters: "15" },
        { model: "OBP-1.0", hp: "1.0", kw: "0.75", stages: "1", dischargeLpm: "50", headMeters: "25" },
      ],
      images: [],
      series: "Domestic",
      hpRange: "0.5 - 1",
      categorySlug: "domestic-series",
    },
    {
      _id: "prod-dom-2",
      title: "ORBIN Multistage Booster Pump",
      modelNumber: "OMBP-1.5",
      slug: { current: "multistage-booster-pump" },
      shortDescription:
        "Vertical multistage booster pump for consistent high-pressure water supply in multi-story buildings.",
      features: [
        "Multistage design for high head",
        "Stainless steel construction",
        "Auto cut-off on low pressure",
        "Energy efficient motor",
        "Low maintenance",
        "Suitable for up to 8 story buildings",
      ],
      specifications: [
        { model: "OMBP-1.0", hp: "1.0", kw: "0.75", stages: "5", dischargeLpm: "40", headMeters: "40" },
        { model: "OMBP-1.5", hp: "1.5", kw: "1.1", stages: "7", dischargeLpm: "50", headMeters: "58" },
        { model: "OMBP-2.0", hp: "2.0", kw: "1.5", stages: "9", dischargeLpm: "55", headMeters: "72" },
      ],
      images: [],
      series: "Domestic",
      hpRange: "1 - 2",
      categorySlug: "domestic-series",
    },
  ],
  "openwell-pumps": [
    {
      _id: "prod-ow-1",
      title: "ORBIN Openwell Submersible Pump",
      modelNumber: "OOWP-1.5",
      slug: { current: "openwell-submersible" },
      shortDescription:
        "Horizontal openwell submersible pump for shallow water bodies, tanks, and sumps.",
      features: [
        "Horizontal mounting design",
        "CI body with SS impeller",
        "Suitable for open wells, tanks, sumps",
        "Built-in thermal protection",
        "Low NPSH required",
        "Available from 1 HP to 10 HP",
      ],
      specifications: [
        { model: "OOWP-1.0", hp: "1.0", kw: "0.75", stages: "1", dischargeLpm: "100", headMeters: "12" },
        { model: "OOWP-1.5", hp: "1.5", kw: "1.1", stages: "1", dischargeLpm: "150", headMeters: "16" },
        { model: "OOWP-2.0", hp: "2.0", kw: "1.5", stages: "1", dischargeLpm: "200", headMeters: "20" },
        { model: "OOWP-3.0", hp: "3.0", kw: "2.2", stages: "1", dischargeLpm: "300", headMeters: "22" },
      ],
      images: [],
      series: "Openwell",
      hpRange: "1 - 10",
      categorySlug: "openwell-pumps",
    },
  ],
  "submersible-motors": [
    {
      _id: "prod-mot-1",
      title: "ORBIN Water Filled Submersible Motor",
      modelNumber: "OSM-WF-5",
      slug: { current: "water-filled-motor" },
      shortDescription:
        "Reliable water-filled submersible motor with sand-resistant design for continuous operation.",
      features: [
        "Water-filled design — eco-friendly",
        "Sand guard protection",
        "Class F insulation",
        "SS shaft and bearings",
        "ISI marked",
        "Available from 1 HP to 25 HP",
      ],
      specifications: [
        { model: "OSM-WF-1", hp: "1.0", kw: "0.75", stages: "-", dischargeLpm: "-", headMeters: "-" },
        { model: "OSM-WF-3", hp: "3.0", kw: "2.2", stages: "-", dischargeLpm: "-", headMeters: "-" },
        { model: "OSM-WF-5", hp: "5.0", kw: "3.7", stages: "-", dischargeLpm: "-", headMeters: "-" },
        { model: "OSM-WF-7.5", hp: "7.5", kw: "5.5", stages: "-", dischargeLpm: "-", headMeters: "-" },
      ],
      images: [],
      series: "Standard",
      hpRange: "1 - 25",
      categorySlug: "submersible-motors",
    },
  ],
};

export const fallbackCertifications: Certification[] = [
  { _id: "cert-1", name: "ISO 9001:2015", image: {} as Certification["image"], description: "Quality Management System" },
  { _id: "cert-2", name: "ISO 14001:2015", image: {} as Certification["image"], description: "Environmental Management System" },
  { _id: "cert-3", name: "ISO 45001:2018", image: {} as Certification["image"], description: "Occupational Health & Safety" },
  { _id: "cert-4", name: "IS 8034", image: {} as Certification["image"], description: "ISI Marked Products" },
  { _id: "cert-5", name: "BIS Certified", image: {} as Certification["image"], description: "Bureau of Indian Standards" },
];
