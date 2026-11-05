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
  tagline:
    "Thermal bond non-woven, fusible and woven interlining, coated fabric, and geo-textile from our manufacturing plant in Erode.",
  established: 1992,
  email: "krisonsmarketing@gmail.com",
  capacityPerMonth: "2,000,000 meters",
} as const;

export const pillars = [
  {
    title: "In-house laboratory",
    description:
      "Fabric can be checked in the in-house laboratory at our manufacturing plant in Erode. Named test methods and reports are published only after they are confirmed.",
  },
  {
    title: "Buyers",
    description:
      "We work with buyers who value manufacturing since 1992, our manufacturing plant in Erode, and a clear account of how the goods are made. US and international buyers are welcome to request samples.",
  },
  {
    title: "Samples and quotes",
    description:
      "Ask for a sample, a quote, or both, and include the product and any specs you already know. Prices and delivery terms are not published on this site.",
  },
] as const;

export const whyPartners = [
  {
    title: "End uses",
    description:
      "Current uses are apparel interlining, filtration, automotive, and home textiles. Tell us the end use when you inquire.",
  },
  {
    title: "Where goods are made",
    description:
      "Goods are made at our manufacturing plant in Erode. The head office is in Chennai and the branch is in Karur.",
  },
  {
    title: "Proprietorship",
    description: "Krisons Marketing is a proprietorship established in 1992.",
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
    title: "Moved into textiles",
    description:
      "Expanded into woven and non-woven interlinings and technical fabrics.",
  },
  {
    year: "2019",
    title: "Our manufacturing plant in Erode",
    description:
      "Commissioned in December 2019. It produces woven, non-woven, and coated fabrics.",
  },
  {
    year: "Today",
    title: "2 million meters a month",
    description:
      "Apparel interlining, filtration, automotive, and home textiles, made at our manufacturing plant in Erode. US and international buyers are welcome to request samples.",
  },
];

export const companyFacts: CompanyFact[] = [
  { label: "Constitution", value: "Proprietorship (MSME)" },
  { label: "Proprietor", value: "K. Chandrasekaran" },
  { label: "Established", value: "1992" },
  { label: "Manufacturing plant commencement", value: "December 2019" },
  {
    label: "Manufacturing plant location",
    value: "Erode (urban, Erode Corporation)",
  },
  { label: "Human resources", value: "35" },
  { label: "Electricity", value: "320 KVA HT line" },
  { label: "Boiler", value: "Electric boiler" },
  {
    label: "Machinery",
    value:
      "Non-woven fabric machine, coating machine, chilling plant, air compressor, transformer",
  },
  { label: "Quality control", value: "In-house testing laboratory" },
  { label: "Production capacity", value: "2,000,000 meters / month" },
  {
    label: "Products",
    value:
      "Thermal bond non-woven, fusible interlining, woven interlining, coated fabric, geo-textile, and finished home textiles",
  },
  { label: "Primary market", value: "Bangalore, Chennai, Tirupur, Karur (India)" },
  {
    label: "Buyers",
    value:
      "US and international buyers are welcome to request samples.",
  },
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
