import {
  FUSIBLE_WIDTHS_CM,
  THERMAL_BOND_GSM_MAX,
  THERMAL_BOND_GSM_MIN,
  THERMAL_BOND_WIDTH_MAX_CM,
  THERMAL_BOND_WIDTH_MIN_CM,
} from "@/lib/data/products";
import { company } from "@/lib/data/company";
import {
  formatCmRange,
  formatGsmRange,
  formatWidthChoices,
} from "@/lib/units";

export interface FaqItem {
  question: string;
  answer: string;
}

/** Answers stay inside confirmed facts and approved specs. */
export const faqItems: FaqItem[] = [
  {
    question: "What products does Krisons Marketing manufacture?",
    answer:
      "Thermal bond non-woven, fusible interlining (microdot, polyester and polyamide paste dot, and double dot), woven interlining, coated fabric, and geo-textile. Uses include apparel interlining, filtration, automotive, and home textiles. Goods are made at our manufacturing plant in Erode.",
  },
  {
    question: "What GSM range, widths, and colors are available?",
    answer: `Published thermal bond non-woven specs are ${formatGsmRange(THERMAL_BOND_GSM_MIN, THERMAL_BOND_GSM_MAX)} and ${formatCmRange(THERMAL_BOND_WIDTH_MIN_CM, THERMAL_BOND_WIDTH_MAX_CM)}, in white, off white, optical white, charcoal, and black. Fusible interlining articles cover the same weights in widths of ${formatWidthChoices(FUSIBLE_WIDTHS_CM)}. Woven interlining, coated fabric, and geo-textile are marked Specs on request. Inches and oz/yd² are conversions rounded half up to two decimal places.`,
  },
  {
    question: "What is your production capacity?",
    answer:
      "Our manufacturing plant in Erode was commissioned in December 2019 and produces up to 2,000,000 meters of fabric per month. Fabric can be checked in the in-house laboratory.",
  },
  {
    question: "Do you supply international buyers?",
    answer:
      "Not yet as an established export program. We currently sell only in India and are starting to export, with the United States as the first market. We welcome inquiries from US buyers. Tell us the product, the specification you need, and the destination.",
  },
  {
    question: "How do I request a sample or a quote?",
    answer: `Use the Samples & inquiries section on this page, or email ${company.email}. Say whether you need a sample, a quote, or both, and include any GSM, width, color, or end use you already know. Prices, discounts, delivery dates, lead times, minimum orders, and payment terms are not published on this site.`,
  },
];
