import { company, contacts } from "@/lib/data/company";
import { faqItems } from "@/lib/data/faq";
import { siteUrl } from "@/lib/metadata";

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
    "Manufacturer of thermal bond non-woven interlining, microdot fusible interlining, coated fabrics and geo-textiles in Tamil Nadu, India.",
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
      description:
        "Recycled or virgin polyester non-woven, 23–80 GSM, 100–200 cm width. Water permeable and breathable. White, Off White, Optical White, Charcoal and Black.",
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/products#thermal-bond`,
    },
    {
      "@type": "Product",
      position: 2,
      name: "Microdot Fusible Interlining",
      description:
        "Fusible interlining in 13 articles from 23 to 80 GSM with polyester or polyamide paste dot and double dot coating.",
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/products#microdot`,
    },
    {
      "@type": "Product",
      position: 3,
      name: "Geo-Textile Fabric",
      description:
        "Geo-textile and industrial-application non-woven fabrics manufactured in Erode, India.",
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/products#coatings`,
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
