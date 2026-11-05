import { formatGrams, formatInchSize } from "@/lib/units";

export interface HomeTextileProduct {
  id: string;
  name: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  summary: string;
  size: string;
  weight: string | null;
  notes: string[];
}

/**
 * VERIFY: For verification by K. Chandrasekaran
 *
 * The approved graphics still print the phrases below. Page copy does not
 * state them as facts. Confirm each one before it is written into the text,
 * or supply artwork without the phrase.
 *
 * Hard pillow graphic: "extra firm support"; "perfect for neck & back";
 * "durable & long lasting"; "breathable fabric"; "machine washable";
 * "shape retention for lasting comfort".
 * Cushion graphic: "premium quality"; "soft | durable | comfortable";
 * "soft & plush"; "breathable"; "durable"; "shape retention".
 * Mattress protector graphic: "100% waterproof"; "anti-allergen";
 * "breathable fabric"; "machine washable".
 * Soft microfiber pillow graphic: "ultra soft"; "breathable"; "plush & comfy";
 * "perfect support"; "machine washable".
 * Mattress topper graphic: "extra soft comfort layer for better sleep and
 * back support"; "extra soft"; "breathable"; "plush feel"; "machine washable".
 * Elastic corners and micro polyester on the topper are confirmed and are stated.
 * Micro polyester graphic: "soft, durable, versatile"; ultra-fine fiber,
 * strength, long life, quick drying, wrinkle resistant, water repellent,
 * lightweight, and the listed end uses.
 * Nonwoven spunbond graphic: "eco friendly"; "recyclable"; "cost-effective";
 * "strong, lightweight, and breathable"; and the pictured end uses
 * (bags, agriculture, medical, covers, filters, and others).
 * Fusible-lining graphic: calls the fabric "adhesive paper" and "fusing paper";
 * heat-activated, strong bond, lightweight, time saving, and several
 * misspelled use lines. Krisons copy states only that it is a fabric.
 * Wadding graphic: softness, warmth, thermal insulation, breathable, durable,
 * and misspelled use lines. The four type names are confirmed and are stated:
 * polyester, siliconized, needle punched, and thermal.
 */

const bedSize = formatInchSize(72, 78, { width: 6, length: 6.5 });
const runnerSize = formatInchSize(20, 90);

export const pillowFabricChoice =
  "Pillow fabric can be nonwoven spunbond (polypropylene), micro polyester, or cotton.";

export const homeTextileProducts: HomeTextileProduct[] = [
  {
    id: "hard-pillow",
    name: "Hard pillow",
    image: "/images/home-textiles/hard-pillow.webp",
    width: 1529,
    height: 1028,
    alt: "White hard pillow. The published size is 18 by 28 inches and the published weight is 800 grams.",
    summary: "A finished hard pillow made at our manufacturing plant in Erode.",
    size: formatInchSize(18, 28),
    weight: formatGrams(800),
    notes: [pillowFabricChoice],
  },
  {
    id: "soft-microfiber-pillow",
    name: "Soft microfiber pillow",
    image: "/images/home-textiles/soft-microfiber-pillow.webp",
    width: 1536,
    height: 1024,
    alt: "White soft microfiber pillow with a contrasting edge band. The published size is 20 by 30 inches and the published weight is 1,200 grams.",
    summary:
      "A finished soft microfiber pillow made at our manufacturing plant in Erode.",
    size: formatInchSize(20, 30),
    weight: formatGrams(1200),
    notes: [pillowFabricChoice],
  },
  {
    id: "cushion",
    name: "Cushion",
    image: "/images/home-textiles/cushion.webp",
    width: 1254,
    height: 1254,
    alt: "White square cushion. The published size is 16 by 16 inches and the published weight is 400 grams.",
    summary: "A finished square cushion made at our manufacturing plant in Erode.",
    size: formatInchSize(16, 16),
    weight: formatGrams(400),
    notes: [],
  },
  {
    id: "bed-runner-brown",
    name: "Bed runner, brown",
    image: "/images/home-textiles/bed-runner-brown.webp",
    width: 1455,
    height: 1081,
    alt: "Quilted bed runner with a brown border and two matching square mats on a white bed. The runner size is 20 by 90 inches.",
    summary:
      "A quilted bed runner with a brown border, made at our manufacturing plant in Erode. The set includes two matching square mats.",
    size: runnerSize,
    weight: null,
    notes: ["Mat size is not published."],
  },
  {
    id: "bed-runner-navy",
    name: "Bed runner, navy",
    image: "/images/home-textiles/bed-runner-navy.webp",
    width: 1455,
    height: 1081,
    alt: "Quilted bed runner with a navy border and two matching square mats on a white bed. The runner size is 20 by 90 inches.",
    summary:
      "A quilted bed runner with a navy border, made at our manufacturing plant in Erode. The set includes two matching square mats.",
    size: runnerSize,
    weight: null,
    notes: ["Mat size is not published."],
  },
  {
    id: "mattress-protector",
    name: "Mattress protector",
    image: "/images/home-textiles/mattress-protector.webp",
    width: 1536,
    height: 1024,
    alt: "Folded white quilted mattress protector. The published size is 72 by 78 inches, or 6 by 6.5 feet.",
    summary:
      "A quilted mattress protector made at our manufacturing plant in Erode.",
    size: bedSize,
    weight: null,
    notes: [],
  },
  {
    id: "mattress-topper",
    name: "Mattress topper",
    image: "/images/home-textiles/mattress-topper.webp",
    width: 1600,
    height: 1388,
    alt: "White quilted mattress topper with elastic corners on a bed. The published size is 72 by 78 inches, or 6 by 6.5 feet. The fabric is micro polyester.",
    summary:
      "A mattress topper in micro polyester, with elastic corners, made at our manufacturing plant in Erode.",
    size: bedSize,
    weight: null,
    notes: [],
  },
];

export const fabricExplainers = [
  {
    id: "micro-polyester",
    name: "Micro polyester",
    image: "/images/home-textiles/fabric-micro-polyester.webp",
    width: 1085,
    height: 992,
    alt: "Reference graphic of white micro polyester fabric.",
    text: "Micro polyester is one of the pillow fabric choices. The mattress topper is made in micro polyester.",
    small: false,
  },
  {
    id: "nonwoven-spunbond",
    name: "Nonwoven spunbond",
    image: "/images/home-textiles/fabric-nonwoven-spunbond.webp",
    width: 1345,
    height: 1599,
    alt: "Reference graphic of a roll of white nonwoven spunbond fabric.",
    text: "Nonwoven spunbond is a polypropylene (PP) fabric. It is one of the pillow fabric choices.",
    small: false,
  },
  {
    id: "nonwoven-fusible-lining",
    name: "Nonwoven fusible lining",
    image: "/images/home-textiles/fabric-nonwoven-fusible-lining.webp",
    width: 1280,
    height: 1224,
    alt: "Reference graphic of a roll of nonwoven fusible lining. This is a fabric. Wording printed on the graphic is not a specification.",
    text: "Nonwoven fusible lining is a fabric. It is not adhesive paper. Wording printed on the graphic is not a specification.",
    small: true,
  },
  {
    id: "wadding",
    name: "Wadding",
    image: "/images/home-textiles/fabric-wadding.webp",
    width: 1227,
    height: 1600,
    alt: "Reference graphic of a roll of polyester wadding. Wording printed on the graphic is not a specification.",
    text: "Polyester wadding is offered in four types: polyester, siliconized, needle punched, and thermal. Other wording printed on the graphic is not a specification.",
    small: true,
  },
] as const;
