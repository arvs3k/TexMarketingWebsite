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
  "W – White (Semi-Dull; Optical); B – Black; C – Charcoal; PES – Polyester; PA – Polyamide. Inches and oz/yd² are conversions of the centimeter and GSM figures, rounded half up to two decimal places.";

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
      "Woven interlining for apparel, made at our manufacturing plant in Erode.",
    specFields: ["Construction", "Weight", "Width", "Color"],
  },
  {
    id: "coated-fabric",
    name: "Coated Fabric",
    description:
      "Coated fabric made at our manufacturing plant in Erode. Fusible coating names are listed separately and are not a specification for this fabric.",
    specFields: ["Coating", "Weight", "Width"],
  },
  {
    id: "geo-textile",
    name: "Geo-textile",
    description:
      "Geo-textile made at our manufacturing plant in Erode.",
    specFields: ["Construction", "Weight", "Width"],
  },
];

/**
 * VERIFY: For verification by K. Chandrasekaran
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
