import type { MediaKey } from "@/lib/data/media";
import {
  formatCmRange,
  formatGsmRange,
  formatWidthChoices,
} from "@/lib/units";

export interface MicrodotArticle {
  article: string;
  gsm: number;
  widths: string;
  colors: string;
  coatingQuality: string;
  coating: string;
}

/** Approved thermal-bond limits. Do not add weights or widths. */
export const THERMAL_BOND_GSM_MIN = 23;
export const THERMAL_BOND_GSM_MAX = 80;
export const THERMAL_BOND_WIDTH_MIN_CM = 100;
export const THERMAL_BOND_WIDTH_MAX_CM = 200;

/** Approved fusible widths, in centimeters. */
export const FUSIBLE_WIDTHS_CM = [100, 150, 200] as const;

export const thermalBondSpecs = [
  { label: "Raw material", value: "Recycled or virgin polyester" },
  {
    label: "Weight",
    value: formatGsmRange(THERMAL_BOND_GSM_MIN, THERMAL_BOND_GSM_MAX),
  },
  {
    label: "Width",
    value: formatCmRange(THERMAL_BOND_WIDTH_MIN_CM, THERMAL_BOND_WIDTH_MAX_CM),
  },
  {
    label: "Colors",
    value: "White, Off White, Optical White, Charcoal, Black",
  },
  { label: "Properties", value: "Water permeable, breathable" },
  {
    label: "Coating options",
    value:
      "Polyester Paste Dot, Polyester Double Dot, Polyamide Paste Dot, Polyamide Double Dot",
  },
] as const;

const widths = formatWidthChoices(FUSIBLE_WIDTHS_CM);
const colors = "W / B / C";
const quality = "PES / PA";
const coating = "Paste Dot, Double Dot";

export const microdotArticles: MicrodotArticle[] = [
  { article: "5236", gsm: 23, widths, colors, coatingQuality: quality, coating },
  { article: "5273", gsm: 25, widths, colors, coatingQuality: quality, coating },
  { article: "5337", gsm: 30, widths, colors, coatingQuality: quality, coating },
  { article: "5370", gsm: 35, widths, colors, coatingQuality: quality, coating },
  { article: "5425", gsm: 40, widths, colors, coatingQuality: quality, coating },
  { article: "5484", gsm: 45, widths, colors, coatingQuality: quality, coating },
  { article: "5544", gsm: 50, widths, colors, coatingQuality: quality, coating },
  { article: "5577", gsm: 55, widths, colors, coatingQuality: quality, coating },
  { article: "5628", gsm: 60, widths, colors, coatingQuality: quality, coating },
  { article: "5689", gsm: 65, widths, colors, coatingQuality: quality, coating },
  { article: "5725", gsm: 70, widths, colors, coatingQuality: quality, coating },
  { article: "5777", gsm: 75, widths, colors, coatingQuality: quality, coating },
  { article: "5813", gsm: 80, widths, colors, coatingQuality: quality, coating },
];

export const microdotLegend =
  "W – White (semi-dull or optical) · B – Black · C – Charcoal · PES – Polyester · PA – Polyamide. oz/yd² and inches are conversions of the GSM and centimeter figures, rounded to two decimals.";

export interface MicrodotDiagram {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

/** Garment-application diagrams from the company profile (brochure p. 7). */
export const microdotDiagrams: MicrodotDiagram[] = [
  {
    src: "/images/diagram-ladies.webp",
    alt: "Line drawings of ladies' tops reinforced with fusible interlining",
    caption: "Ladies' garments",
    width: 580,
    height: 370,
  },
  {
    src: "/images/diagram-childrens.webp",
    alt: "Line drawing of a children's dress with fusible interlining",
    caption: "Children's garments",
    width: 300,
    height: 340,
  },
  {
    src: "/images/diagram-blazer.webp",
    alt: "Line drawing of a blazer with front fusing and structured lapels",
    caption: "Blazer",
    width: 450,
    height: 550,
  },
  {
    src: "/images/diagram-trousers-front.webp",
    alt: "Trousers front view showing belt band and pocket mouth interlining points",
    caption: "Belt band & pocket mouth",
    width: 380,
    height: 910,
  },
  {
    src: "/images/diagram-trousers-back.webp",
    alt: "Trousers back view showing belt loop interlining points",
    caption: "Belt loop",
    width: 360,
    height: 910,
  },
  {
    src: "/images/diagram-quilt.webp",
    alt: "Folded quilt supported by non-woven batting",
    caption: "Quilt (batting support)",
    width: 490,
    height: 440,
  },
];

export const microdotShirtDiagram = {
  src: "/images/diagram-shirt-parts.webp",
  alt: "Shirt interlining points: placket, collar stand interlining, cuff, main interlining, and seam, armhole and joint parts",
  width: 2048,
  height: 420,
} as const;

export const SPECS_ON_REQUEST = "Specs on request";

export interface SpecOnRequestProduct {
  id: string;
  name: string;
  description: string;
  specFields: readonly string[];
}

/** Descriptions only. Every spec field is "Specs on request" — do not add numbers. */
export const specOnRequestProducts: SpecOnRequestProduct[] = [
  {
    id: "woven-interlining",
    name: "Woven Interlining",
    description:
      "Woven interlining for apparel, made in our Erode plant alongside the non-woven range.",
    specFields: ["Construction", "Weight", "Width", "Color"],
  },
  {
    id: "coated-fabric",
    name: "Coated Fabric",
    description:
      "Fabric finished on our own coating line in Erode.",
    specFields: ["Coating", "Weight", "Width"],
  },
  {
    id: "geo-textile",
    name: "Geo-textile",
    description:
      "Geo-textile from the same plant and the same team.",
    specFields: ["Construction", "Weight", "Width"],
  },
];

/**
 * VERIFY: For verification by K. Chandrasekaran
 * CONTENT-TODO(verify-coatings): business review of the four coating-type descriptions (generic industry wording, not approved Krisons specifications).
 *
 * The coating names are on the approved list. The descriptions are generic
 * industry wording, not approved Krisons specifications. Confirm or replace
 * each sentence before a buyer relies on it. Do not add GSM, add-on weight,
 * or temperature figures here.
 *
 * - Microdot: "Fine, evenly spaced adhesive dots for a soft hand and clean fuse on lightweight fashion fabrics."
 * - Paste Dot: "Adhesive paste printed in a dot pattern — a general-purpose bond across garment applications."
 * - Double Dot: "A two-layer dot (base + adhesive top) for stronger bonds and better resistance to strike-back."
 * - Scatter Coating: "Adhesive powder scattered across the web for full-surface bonding on industrial fabrics."
 */
export const coatingTypes = [
  {
    name: "Microdot",
    description:
      "Fine, evenly spaced adhesive dots for a soft hand and clean fuse on lightweight fashion fabrics.",
  },
  {
    name: "Paste Dot",
    description:
      "Adhesive paste printed in a dot pattern — a general-purpose bond across garment applications.",
  },
  {
    name: "Double Dot",
    description:
      "A two-layer dot (base + adhesive top) for stronger bonds and better resistance to strike-back.",
  },
  {
    name: "Scatter Coating",
    description:
      "Adhesive powder scattered across the web for full-surface bonding on industrial fabrics.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Product families: one page each at /products/[slug]                 */
/* ------------------------------------------------------------------ */

export interface Swatch {
  name: string;
  /** Indicative screen color only. Not a shade standard. */
  hex: string;
}

export const colorSwatches: Swatch[] = [
  { name: "White", hex: "#f4f3ef" },
  { name: "Off White", hex: "#ece6d6" },
  { name: "Optical White", hex: "#fbfdff" },
  { name: "Charcoal", hex: "#4a4d52" },
  { name: "Black", hex: "#17181a" },
];

/** A lab value shown on a product page. value null = not supplied yet. */
export interface TestValue {
  property: string;
  method: string | null;
  value: string | null;
}

/**
 * Lab data slots. These render ONLY as marked placeholders (dev/preview) until
 * real values are entered; the live site shows nothing in their place.
 * Never type an estimated or "typical" number here.
 */
// CONTENT-TODO(test-values-fusible): enter real lab values + test method for fusible interlining (per article if they differ), or delete rows you do not test.
const fusibleTestValues: TestValue[] = [
  { property: "Bond (peel) strength", method: null, value: null },
  { property: "Shrinkage after fusing", method: null, value: null },
  { property: "Wash resistance", method: null, value: null },
  { property: "Dry-clean resistance", method: null, value: null },
];
// CONTENT-TODO(test-values-thermal-bond): enter real lab values + test method for thermal bond non-woven, or delete rows you do not test.
const thermalBondTestValues: TestValue[] = [
  { property: "Weight tolerance", method: null, value: null },
  { property: "Tensile strength (MD / CD)", method: null, value: null },
  { property: "Thickness", method: null, value: null },
];

export type ProductSlug =
  | "fusible-interlining"
  | "thermal-bond-non-woven"
  | "woven-interlining"
  | "coated-fabric"
  | "geo-textile"
  | "home-textiles";

export interface ProductFamily {
  slug: ProductSlug;
  name: string;
  /** Short label for nav, cards and the RFQ form. */
  shortName: string;
  /** Mono label above the title. */
  kicker: string;
  /** One line for cards. */
  summary: string;
  /** Opening paragraph on the product page. */
  lead: string;
  /** Key numbers shown on cards and at the top of the page. Empty = specs agreed per enquiry. */
  keySpecs: { label: string; value: string }[];
  /** Photo for cards/hero, or null to use the drawn material tile. */
  image: MediaKey | null;
  gallery: MediaKey[];
  /** Pattern used for the drawn material tile. */
  tile: "dots" | "web" | "weave" | "coat" | "grid" | "quilt";
  /** Application slugs (src/lib/data/applications.ts). */
  applications: string[];
  /** Fields the buyer should send us when specs are agreed per enquiry. */
  specFields?: readonly string[];
  /** Downloadable spec sheet under /public. null = slot not filled. */
  specSheet: string | null;
  testValues: TestValue[];
  seo: { title: string; description: string };
}

const gsmRange = formatGsmRange(THERMAL_BOND_GSM_MIN, THERMAL_BOND_GSM_MAX);

export const productFamilies: ProductFamily[] = [
  {
    slug: "fusible-interlining",
    name: "Fusible Interlining",
    shortName: "Fusible interlining",
    kicker: "13 articles · 23–80 GSM",
    summary:
      "Dot-coated non-woven interlining in thirteen weights, polyester or polyamide adhesive, paste dot or double dot.",
    lead:
      "Our core range for garment makers: thermal bond non-woven base, coated on our own line with a polyester (PES) or polyamide (PA) adhesive dot. Thirteen articles step from 23 to 80 GSM, each in three widths and three colors.",
    keySpecs: [
      { label: "Weight", value: gsmRange },
      { label: "Width", value: formatWidthChoices(FUSIBLE_WIDTHS_CM) },
      { label: "Adhesive", value: "PES or PA · paste dot or double dot" },
      { label: "Colors", value: "White, Black, Charcoal" },
    ],
    image: "microdotBlue",
    gallery: ["microdotBlue", "microdotDark"],
    tile: "dots",
    applications: ["apparel", "home-textiles"],
    // CONTENT-TODO(spec-sheet-fusible): add a PDF spec sheet to /public/spec-sheets/ and set the path here.
    specSheet: null,
    testValues: fusibleTestValues,
    seo: {
      title: "Fusible Interlining Manufacturer, India — Microdot, Paste Dot, Double Dot",
      description:
        "Non-woven fusible interlining made in Erode, India: 13 articles from 23 to 80 GSM (0.68–2.36 oz/yd²), 100/150/200 cm, PES or PA paste dot and double dot. Request samples.",
    },
  },
  {
    slug: "thermal-bond-non-woven",
    name: "Thermal Bond Non-Woven",
    shortName: "Thermal bond non-woven",
    kicker: "Recycled or virgin polyester",
    summary:
      "Polyester non-woven from 23 to 80 GSM in widths up to 200 cm. Water permeable and breathable. Supplied plain or coated.",
    lead:
      "The base fabric behind everything we make. Recycled or virgin polyester fiber, thermally bonded on our own line, in any weight from 23 to 80 GSM and any width from 100 to 200 cm. Take it plain, or have us coat it.",
    keySpecs: [
      { label: "Weight", value: gsmRange },
      {
        label: "Width",
        value: formatCmRange(THERMAL_BOND_WIDTH_MIN_CM, THERMAL_BOND_WIDTH_MAX_CM),
      },
      { label: "Fiber", value: "Recycled or virgin polyester" },
      { label: "Colors", value: "White, Off White, Optical White, Charcoal, Black" },
    ],
    image: "rollsWhite",
    gallery: ["rollsWhite", "rollDark", "rollDetail"],
    tile: "web",
    applications: ["apparel", "filtration", "automotive", "home-textiles"],
    // CONTENT-TODO(spec-sheet-thermal-bond): add a PDF spec sheet to /public/spec-sheets/ and set the path here.
    specSheet: null,
    testValues: thermalBondTestValues,
    seo: {
      title: "Thermal Bond Non-Woven Fabric Supplier, India — 23–80 GSM Polyester",
      description:
        "Thermal bond non-woven fabric manufactured in Erode, India. Recycled or virgin polyester, 23–80 GSM (0.68–2.36 oz/yd²), 100–200 cm wide, five colors. Request samples.",
    },
  },
  {
    slug: "woven-interlining",
    name: "Woven Interlining",
    shortName: "Woven interlining",
    kicker: "Made to your construction",
    summary:
      "Woven interlining for apparel, made to the construction, weight and width you specify.",
    lead:
      "Woven interlining for apparel, made in our Erode plant alongside the non-woven range. There is no fixed article list: tell us the construction, weight, width and color you need and we will confirm what we can make, then sample it.",
    keySpecs: [],
    image: null,
    gallery: [],
    tile: "weave",
    applications: ["apparel"],
    specFields: ["Construction", "Weight", "Width", "Color"],
    // CONTENT-TODO(spec-sheet-woven): add a PDF spec sheet to /public/spec-sheets/ and set the path here (optional).
    specSheet: null,
    testValues: [],
    seo: {
      title: "Woven Interlining Manufacturer, India",
      description:
        "Woven interlining for apparel, manufactured in Erode, India, to your construction, weight and width. Send your specification and request samples.",
    },
  },
  {
    slug: "coated-fabric",
    name: "Coated Fabric",
    shortName: "Coated fabric",
    kicker: "Our own coating line",
    summary:
      "Fabric finished on our own coating line, to the base, coating and weight you specify.",
    lead:
      "Coating is done in-house, on our own machine, so base fabric and finish are controlled by the same team. Tell us the base, the coating and the weight and width you need; we will confirm it in writing and sample it.",
    keySpecs: [],
    image: null,
    gallery: [],
    tile: "coat",
    applications: [],
    specFields: ["Coating", "Weight", "Width"],
    // CONTENT-TODO(spec-sheet-coated): add a PDF spec sheet to /public/spec-sheets/ and set the path here (optional).
    specSheet: null,
    testValues: [],
    seo: {
      title: "Coated Fabric Manufacturer, India — In-House Coating Line",
      description:
        "Coated fabric from our own in-house coating line in Erode, India, made to your base, coating, weight and width. Request samples.",
    },
  },
  {
    slug: "geo-textile",
    name: "Geo-textile",
    shortName: "Geo-textile",
    kicker: "Made to specification",
    summary: "Geo-textile made to the construction, weight and width your project calls for.",
    lead:
      "Geo-textile from the same plant and the same team. Send the construction, weight and width in your project specification and we will tell you plainly whether we can meet it, then sample it.",
    keySpecs: [],
    image: null,
    gallery: [],
    tile: "grid",
    applications: [],
    specFields: ["Construction", "Weight", "Width"],
    // CONTENT-TODO(spec-sheet-geo): add a PDF spec sheet to /public/spec-sheets/ and set the path here (optional).
    specSheet: null,
    testValues: [],
    seo: {
      title: "Geo-textile Manufacturer, India",
      description:
        "Geo-textile manufactured in Erode, India, to your construction, weight and width. Send your project specification and request samples.",
    },
  },
  {
    slug: "home-textiles",
    name: "Home Textiles",
    shortName: "Home textiles",
    kicker: "Finished goods",
    summary:
      "Finished pillows, a cushion, quilted bed runners, a mattress protector and a mattress topper.",
    lead:
      "Finished goods made from our own fabrics: two pillows, a cushion, bed runners in two colorways, a quilted mattress protector and a micro polyester mattress topper. Sizes are given in inches and centimeters.",
    keySpecs: [],
    image: null,
    gallery: [],
    tile: "quilt",
    applications: ["home-textiles"],
    // CONTENT-TODO(spec-sheet-home-textiles): add a PDF catalogue to /public/spec-sheets/ and set the path here (optional).
    specSheet: null,
    testValues: [],
    seo: {
      title: "Home Textiles Manufacturer, India — Pillows, Bed Runners, Mattress Protectors",
      description:
        "Finished home textiles made in Erode, India: hard and soft pillows, cushion, quilted bed runners, mattress protector and micro polyester mattress topper. Request samples.",
    },
  },
];

export function getProductFamily(slug: string): ProductFamily | undefined {
  return productFamilies.find((p) => p.slug === slug);
}
