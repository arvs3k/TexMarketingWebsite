export interface Address {
  title: string;
  lines: string[];
}

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
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
  name: "Krisons Marketing",
  tagline: "Thermal bond non-woven and coated fabrics, engineered in South India's textile heartland.",
  established: 1992,
  email: "krisonsmarketing@gmail.com",
  locations: "Chennai | Karur | Erode",
  capacityPerMonth: "2,000,000 m",
} as const;

export const pillars = [
  {
    title: "Quality Assurance",
    description:
      "Rigorous, multi-stage testing in our in-house laboratory ensures every yard of fabric meets international standards.",
  },
  {
    title: "Global Logistics",
    description:
      "A streamlined supply chain designed for punctual, on-time delivery across borders.",
  },
  {
    title: "Client Centricity",
    description:
      "Transparent, long-term relationships that go beyond a simple transaction.",
  },
] as const;

export const whyPartners = [
  {
    title: "Insight-Driven Development",
    description:
      "We listen to customer challenges and engineer fabric solutions that address specific pain points.",
  },
  {
    title: "Strategic Sourcing",
    description:
      "An extensive raw-material network insulates our clients from market volatility.",
  },
  {
    title: "Unwavering Integrity",
    description:
      "As a proprietorship, our word is our bond — personal accountability on every project.",
  },
] as const;

export const timeline: TimelineItem[] = [
  {
    year: "1992",
    title: "Founded in Chennai",
    description:
      "Started with hardware — buckles and D-rings for leather goods and apparel.",
  },
  {
    year: "2000s",
    title: "Evolution into textiles",
    description:
      "Grew into experts in woven and non-woven interlinings and advanced technical fabrics.",
  },
  {
    year: "2019",
    title: "Factory commissioned in Erode",
    description:
      "A modern manufacturing unit focused on quality, producing woven, non-woven and coated fabrics.",
  },
  {
    year: "Today",
    title: "2 million metres a month",
    description:
      "Serving apparel, industrial, automotive and home-textile markets from Chennai, Karur and Erode.",
  },
];

export const companyFacts: CompanyFact[] = [
  { label: "Constitution", value: "Proprietorship (MSME)" },
  { label: "Proprietor", value: "K. Chandrasekaran" },
  { label: "Established", value: "1992" },
  { label: "Factory commencement", value: "December 2019" },
  { label: "Factory location", value: "Erode (urban, Erode Corporation)" },
  { label: "Human resources", value: "35" },
  { label: "Electricity", value: "320 KVA HT line" },
  { label: "Boiler", value: "Electric boiler" },
  {
    label: "Machinery",
    value:
      "Non-woven fabric machine, coating machine, chilling plant, air compressor, transformer",
  },
  { label: "Quality control", value: "In-house testing laboratory" },
  { label: "Production capacity", value: "2,000,000 metres / month" },
  {
    label: "Products",
    value:
      "Non-woven interlining, geo-textile fabric and multiple industrial applications",
  },
  { label: "Primary market", value: "Bangalore, Chennai, Tirupur, Karur (India)" },
];

export const contacts: ContactPerson[] = [
  { name: "K. Chandrasekaran", role: "Proprietor", phone: "+91 98404 10346" },
  { name: "R. Sridharan", role: "Manager", phone: "+91 98424 44109" },
];

export const addresses: Address[] = [
  {
    title: "Head Office — Chennai",
    lines: [
      "Krisons Marketing",
      "E-5-239, AWHO, Parameswaran Vihar,",
      "#67, Arcot Road, Saligramam,",
      "Chennai - 600 093, Tamil Nadu, India",
    ],
  },
  {
    title: "Branch Office — Karur",
    lines: [
      "Krisons Marketing",
      "#16, Dindugul Road,",
      "Karur - 639 001, Tamil Nadu, India",
    ],
  },
  {
    title: "Factory — Erode",
    lines: [
      "Krisons Marketing",
      "#17/1, Baladhandayutham II Street,",
      "Konavaikkal, Railway Colony Post,",
      "Erode - 638 002, Tamil Nadu, India",
    ],
  },
];
