import { siteConfig } from "@/lib/config";
import { addresses, company, contacts } from "@/lib/data/company";
import { faqItems } from "@/lib/data/faq";
import { homeTextileProducts } from "@/lib/data/homeTextiles";
import { media } from "@/lib/data/media";
import { productFamilies, type ProductFamily } from "@/lib/data/products";
import { siteUrl } from "@/lib/metadata";

const ORG_ID = `${siteUrl}/#organization`;

function postal(lines: string[]) {
  // lines: [name, street…, "City - PIN, State, India"]
  const last = lines[lines.length - 1];
  const m = last.match(/^(.+?) - ([\d ]+), (.+), India$/);
  return {
    "@type": "PostalAddress",
    streetAddress: lines.slice(1, -1).join(" ").replace(/,\s*$/, ""),
    addressLocality: m?.[1] ?? "",
    postalCode: (m?.[2] ?? "").replace(/\s/g, ""),
    addressRegion: m?.[3] ?? "Tamil Nadu",
    addressCountry: "IN",
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  image: `${siteUrl}${media.productionLine.src}`,
  email: company.email,
  foundingDate: String(company.established),
  foundingLocation: { "@type": "Place", name: "Chennai, India" },
  founder: { "@type": "Person", name: "K. Chandrasekaran" },
  numberOfEmployees: { "@type": "QuantitativeValue", value: company.people },
  description:
    "Manufacturer of thermal bond non-woven, fusible interlining, woven interlining, coated fabric, geo-textile and finished home textiles. Established 1992; own plant in Erode, Tamil Nadu, commissioned December 2019; capacity 2,000,000 meters a month.",
  knowsAbout: [
    "Fusible interlining",
    "Thermal bond non-woven fabric",
    "Woven interlining",
    "Coated fabric",
    "Geo-textile",
  ],
  address: addresses.map((a) => postal(a.lines)),
  contactPoint: contacts.map((c) => ({
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: c.phone.replace(/\s/g, ""),
    email: company.email,
    name: `${c.name} (${c.role})`,
    availableLanguage: ["en", "ta"],
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteConfig.legalName,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

export function breadcrumbJsonLd(crumbs: { href: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ href: "/", label: "Home" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${siteUrl}${c.href === "/" ? "" : c.href}`,
    })),
  };
}

export function productJsonLd(p: ProductFamily) {
  const image = p.image ? `${siteUrl}${media[p.image].src}` : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}/products/${p.slug}#product`,
    name: p.name,
    description: p.summary,
    url: `${siteUrl}/products/${p.slug}`,
    ...(image ? { image } : {}),
    category: "Industrial textiles",
    brand: { "@type": "Brand", name: siteConfig.brand },
    manufacturer: { "@id": ORG_ID },
    countryOfOrigin: { "@type": "Country", name: "India" },
    additionalProperty: p.keySpecs.map((s) => ({
      "@type": "PropertyValue",
      name: s.label,
      value: s.value,
    })),
  };
}

export const productListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Krisons product families",
  itemListElement: productFamilies.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `${siteUrl}/products/${p.slug}`,
  })),
};

export const homeTextilesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: homeTextileProducts.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: [product.summary, `Size: ${product.size}.`, product.weight ? `Weight: ${product.weight}.` : ""]
        .filter(Boolean)
        .join(" "),
      image: `${siteUrl}${product.image}`,
      brand: { "@type": "Brand", name: siteConfig.brand },
      manufacturer: { "@id": ORG_ID },
      url: `${siteUrl}/products/home-textiles#${product.id}`,
    },
  })),
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
