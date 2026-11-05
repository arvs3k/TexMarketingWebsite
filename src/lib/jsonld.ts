import { company, contacts } from "@/lib/data/company";
import { faqItems } from "@/lib/data/faq";
import {
  FUSIBLE_WIDTHS_CM,
  SPECS_ON_REQUEST,
  THERMAL_BOND_GSM_MAX,
  THERMAL_BOND_GSM_MIN,
  THERMAL_BOND_WIDTH_MAX_CM,
  THERMAL_BOND_WIDTH_MIN_CM,
} from "@/lib/data/products";
import { siteUrl } from "@/lib/metadata";
import {
  formatCmRange,
  formatGsmRange,
  formatWidthChoices,
} from "@/lib/units";

const postalAddresses = [
  {
    "@type": "PostalAddress",
    streetAddress:
      "E-5-239, AWHO, Parameswaran Vihar, #67, Arcot Road, Saligramam",
    addressLocality: "Chennai",
    postalCode: "600093",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  {
    "@type": "PostalAddress",
    streetAddress: "#16, Dindugul Road",
    addressLocality: "Karur",
    postalCode: "639001",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  {
    "@type": "PostalAddress",
    streetAddress:
      "#17/1, Baladhandayutham II Street, Konavaikkal, Railway Colony Post",
    addressLocality: "Erode",
    postalCode: "638002",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  email: company.email,
  foundingDate: "1992",
  founder: { "@type": "Person", name: "K. Chandrasekaran" },
  description:
    "Manufacturer of thermal bond non-woven, fusible interlining, woven interlining, coated fabric, and geo-textile. Goods are made at our manufacturing plant in Erode. Currently selling only in India and starting to export, with the United States as the first market.",
  address: postalAddresses,
  contactPoint: contacts.map((c) => ({
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: c.phone.replace(/\s/g, ""),
    name: `${c.name} (${c.role})`,
    availableLanguage: ["en", "ta"],
  })),
};

export const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Thermal Bond Non-Woven Fabric",
      description: `Recycled or virgin polyester non-woven, ${formatGsmRange(THERMAL_BOND_GSM_MIN, THERMAL_BOND_GSM_MAX)}, ${formatCmRange(THERMAL_BOND_WIDTH_MIN_CM, THERMAL_BOND_WIDTH_MAX_CM)}. Water permeable and breathable. White, Off White, Optical White, Charcoal, and Black.`,
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/products#thermal-bond`,
    },
    {
      "@type": "Product",
      position: 2,
      name: "Microdot Fusible Interlining",
      description: `Fusible interlining in 13 articles, ${formatGsmRange(THERMAL_BOND_GSM_MIN, THERMAL_BOND_GSM_MAX)}, widths ${formatWidthChoices(FUSIBLE_WIDTHS_CM)}, with polyester or polyamide paste dot and double dot coating.`,
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/products#microdot`,
    },
    {
      "@type": "Product",
      position: 3,
      name: "Woven Interlining",
      description: `Woven interlining for apparel, made at our manufacturing plant in Erode. ${SPECS_ON_REQUEST}.`,
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/products#woven-interlining`,
    },
    {
      "@type": "Product",
      position: 4,
      name: "Coated Fabric",
      description: `Coated fabric made at our manufacturing plant in Erode. ${SPECS_ON_REQUEST}.`,
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/products#coated-fabric`,
    },
    {
      "@type": "Product",
      position: 5,
      name: "Geo-textile",
      description: `Geo-textile made at our manufacturing plant in Erode. ${SPECS_ON_REQUEST}.`,
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/products#geo-textile`,
    },
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/** Serialize for a <script type="application/ld+json"> tag. */
export function jsonLdString(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
