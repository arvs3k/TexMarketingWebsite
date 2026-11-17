import {
  FUSIBLE_WIDTHS_CM,
  THERMAL_BOND_GSM_MAX,
  THERMAL_BOND_GSM_MIN,
  THERMAL_BOND_WIDTH_MAX_CM,
  THERMAL_BOND_WIDTH_MIN_CM,
} from "@/lib/data/products";
import { company } from "@/lib/data/company";
import { formatCmRange, formatGsmRange, formatWidthChoices } from "@/lib/units";

export interface FaqItem {
  question: string;
  answer: string;
  group: "company" | "products" | "ordering";
}

/** Answers stay inside confirmed facts and approved specs. No prices, MOQs, lead times or payment terms. */
export const faqItems: FaqItem[] = [
  {
    group: "company",
    question: "Are you a manufacturer or a trading company?",
    answer:
      "A manufacturer. We commissioned our own plant in Erode, Tamil Nadu, in December 2019, with a non-woven line, a coating line and an in-house testing laboratory. The word “Marketing” in our name dates from 1992, when the company was founded in Chennai.",
  },
  {
    group: "company",
    question: "Do you export?",
    answer:
      "Export is new for us. Our customers today are in India: Bangalore, Chennai, Tirupur and Karur. We are now accepting enquiries from international buyers and can send samples abroad.",
  },
  {
    group: "company",
    question: "What is your production capacity?",
    answer:
      "Up to 2,000,000 meters of fabric a month, from a plant with its own 320 KVA high-tension power line and a team of 35.",
  },
  {
    group: "company",
    question: "Can I visit the factory or see it by video?",
    answer:
      "Yes to both. Visits to the Erode plant are arranged through our Chennai head office. If you cannot travel, ask for a live video walkthrough of the production floor and laboratory.",
  },
  {
    group: "company",
    question: "Which certifications do you hold?",
    answer:
      "Tell us which standards your market or your customer requires and we will tell you in writing what we hold today and what we do not. We would rather you ask than assume.",
  },
  {
    group: "products",
    question: "What products do you manufacture?",
    answer:
      "Thermal bond non-woven, fusible interlining (polyester and polyamide, paste dot and double dot), woven interlining, coated fabric and geo-textile. We also make finished home textiles: pillows, a cushion, bed runners, a mattress protector and a mattress topper.",
  },
  {
    group: "products",
    question: "What weights, widths and colors are available?",
    answer: `Thermal bond non-woven runs from ${formatGsmRange(THERMAL_BOND_GSM_MIN, THERMAL_BOND_GSM_MAX)} in widths of ${formatCmRange(THERMAL_BOND_WIDTH_MIN_CM, THERMAL_BOND_WIDTH_MAX_CM)}, in white, off white, optical white, charcoal and black. Fusible interlining comes in thirteen articles across the same weight range, in widths of ${formatWidthChoices(FUSIBLE_WIDTHS_CM)}. Woven interlining, coated fabric and geo-textile are made to your specification.`,
  },
  {
    group: "products",
    question: "Do you offer recycled polyester?",
    answer:
      "Yes. Thermal bond non-woven is made from recycled or virgin polyester. Tell us which you need when you enquire.",
  },
  {
    group: "products",
    question: "Can you share test data?",
    answer:
      "Fabric is checked in our in-house laboratory. Ask for the data for the article you are sampling, and test the samples in your own lab as well.",
  },
  {
    group: "ordering",
    question: "How do I request samples?",
    answer: `Use the request form on this site, message us on WhatsApp, or email ${company.email}. Tell us the product, weight, width, color and what it will be used for. If you have a tech pack or a reference sample, send that too.`,
  },
  {
    group: "ordering",
    question: "What are your prices, minimum order and lead time?",
    answer:
      "They depend on the article, width, color, coating and quantity, so we quote each enquiry individually and in writing rather than publish a list.",
  },
  {
    group: "ordering",
    question: "What documents do you provide with an export shipment?",
    answer:
      "A commercial invoice, a packing list and the transport document. If your customs authority or customer needs anything further, tell us at the quotation stage and we will confirm in writing whether we can provide it.",
  },
  {
    group: "ordering",
    question: "Can I start with a small order?",
    answer:
      "We suggest it. Samples first, then a trial order you can run on your own line, then production. Quantities are agreed in the quotation.",
  },
];

export const faqGroups: { id: FaqItem["group"]; title: string }[] = [
  { id: "company", title: "About the company" },
  { id: "products", title: "Products and specifications" },
  { id: "ordering", title: "Samples and ordering" },
];
