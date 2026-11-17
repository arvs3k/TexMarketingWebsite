import { siteConfig } from "@/lib/config";

/**
 * Company facts. Source: company profile PDF (March 2026).
 * Edit facts here; pages read from this file.
 */

export interface Address {
  id: "chennai" | "karur" | "erode";
  title: string;
  role: string;
  lines: string[];
}

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  /** Portrait under /public. null = slot not filled yet. */
  photo: string | null;
  /** One or two sentences. null = slot not filled yet. */
  bio: string | null;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface CompanyFact {
  label: string;
  value: string;
}

export const company = {
  name: siteConfig.legalName,
  established: 1992,
  plantCommissioned: "December 2019",
  plantCity: "Erode",
  region: "Tamil Nadu, India",
  email: siteConfig.email,
  capacityPerMonth: "2,000,000 meters",
  capacityShort: "2M",
  people: 35,
  tagline:
    "Fusible interlining, thermal bond non-woven and coated fabric, made in our own plant in Erode, India.",
  /** Where the fabric goes today. From the company profile ("Primary market"). */
  currentMarkets: ["Bangalore", "Chennai", "Tirupur", "Karur"],
} as const;

/** Headline numbers. Used in the hero and the stat strip. */
export const headlineStats = [
  { value: "1992", label: "Established in Chennai" },
  { value: "2,000,000", label: "Meters a month" },
  { value: "2019", label: "Own plant commissioned, Erode" },
  { value: "35", label: "People" },
] as const;

/** The four reasons a buyer can check. Each one maps to a fact above. */
export const proofPoints = [
  {
    title: "We make it ourselves",
    description:
      "The non-woven line and the coating line run under one roof in Erode. What you sample is what we produce.",
    href: "/factory#tour",
    link: "Walk through the plant",
  },
  {
    title: "Checked in our own lab",
    description:
      "An in-house testing laboratory sits beside production, so fabric is checked where it is made.",
    href: "/factory#quality",
    link: "See the laboratory",
  },
  {
    title: "Capacity for programs",
    description:
      "Up to 2,000,000 meters a month, on our own 320 KVA high-tension power line.",
    href: "/factory#machinery",
    link: "Machinery and utilities",
  },
  {
    title: "In the trade since 1992",
    description:
      "Three decades supplying apparel makers: first hardware, then interlinings, now our own fabric.",
    href: "/about",
    link: "Our story",
  },
] as const;

export const story = {
  heading: "A family firm that moved upstream",
  paragraphs: [
    "Krisons Marketing was founded in Chennai in 1992 by K. Chandrasekaran. The first products were hardware: buckles and D-rings for leather goods and apparel.",
    "Through the 2000s the business followed its customers into textiles, supplying woven and non-woven interlinings and technical fabrics.",
    "In December 2019 we commissioned our own plant in Erode, in the textile belt of Tamil Nadu. Since then the fabric we sell is fabric we make: thermal bond non-woven, fusible and woven interlining, coated fabric and geo-textile, with finished home textiles alongside.",
    "Today 35 people produce up to 2,000,000 meters a month. Our customers are in India's textile hubs: Bangalore, Chennai, Tirupur and Karur. We are now taking enquiries from buyers abroad, starting the way we start with everyone: with samples.",
  ],
  /** The elephant in the name. */
  nameNote:
    "About the name: “Krisons Marketing” dates from 1992. The company it names today is a manufacturer.",
} as const;

export const timeline: TimelineItem[] = [
  {
    year: "1992",
    title: "Founded in Chennai",
    description: "Hardware for leather goods and apparel: buckles and D-rings.",
  },
  {
    year: "2000s",
    title: "Into textiles",
    description: "Woven and non-woven interlinings and technical fabrics join the range.",
  },
  {
    year: "2019",
    title: "Our own plant in Erode",
    description:
      "Commissioned in December 2019 to make woven, non-woven and coated fabrics in-house.",
  },
  {
    year: "Today",
    title: "2 million meters a month",
    description:
      "Interlining and non-wovens for apparel, filtration, automotive and home textiles. Export enquiries now open.",
  },
];

export const companyFacts: CompanyFact[] = [
  { label: "Legal name", value: "Krisons Marketing" },
  { label: "Constitution", value: "Proprietorship (MSME)" },
  { label: "Proprietor", value: "K. Chandrasekaran" },
  { label: "Established", value: "1992" },
  { label: "Plant commissioned", value: "December 2019" },
  { label: "Plant location", value: "Erode (urban, Erode Corporation), Tamil Nadu" },
  { label: "People", value: "35" },
  { label: "Production capacity", value: "2,000,000 meters / month" },
  { label: "Power", value: "320 KVA HT line" },
  { label: "Boiler", value: "Electric boiler" },
  { label: "Quality control", value: "In-house testing laboratory" },
  { label: "Primary market today", value: "Bangalore, Chennai, Tirupur, Karur (India)" },
];

export const contacts: ContactPerson[] = [
  {
    name: "K. Chandrasekaran",
    role: "Proprietor",
    phone: "+91 98404 10346",
    // CONTENT-TODO(portrait-proprietor): add a portrait (square, min 600 px) to /public/images/people/ and set the path here.
    photo: null,
    // CONTENT-TODO(bio-proprietor): one or two sentences about K. Chandrasekaran, in his own words if possible.
    bio: null,
  },
  {
    name: "R. Sridharan",
    role: "Manager",
    phone: "+91 98424 44109",
    // CONTENT-TODO(portrait-manager): add a portrait (square, min 600 px) to /public/images/people/ and set the path here.
    photo: null,
    // CONTENT-TODO(bio-manager): one or two sentences about R. Sridharan and what buyers can ask him.
    bio: null,
  },
];

export const addresses: Address[] = [
  {
    id: "erode",
    title: "Factory — Erode",
    role: "Manufacturing plant",
    lines: [
      "Krisons Marketing",
      "#17/1, Baladhandayutham II Street,",
      "Konavaikkal, Railway Colony Post,",
      "Erode - 638 002, Tamil Nadu, India",
    ],
  },
  {
    id: "chennai",
    title: "Head Office — Chennai",
    role: "Head office",
    lines: [
      "Krisons Marketing",
      "E-5-239, AWHO, Parameswaran Vihar,",
      "#67, Arcot Road, Saligramam,",
      "Chennai - 600 093, Tamil Nadu, India",
    ],
  },
  {
    id: "karur",
    title: "Branch Office — Karur",
    role: "Branch office",
    lines: ["Krisons Marketing", "#16, Dindugul Road,", "Karur - 639 001, Tamil Nadu, India"],
  },
];
