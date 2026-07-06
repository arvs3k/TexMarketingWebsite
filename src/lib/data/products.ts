export interface MicrodotArticle {
  article: string;
  gsm: number;
  widths: string;
  colours: string;
  coatingQuality: string;
  coating: string;
}

export const thermalBondSpecs = [
  { label: "Raw material", value: "Recycled or virgin polyester" },
  { label: "Weight", value: "23 GSM – 80 GSM" },
  { label: "Width", value: "100 cm – 200 cm" },
  {
    label: "Colours",
    value: "White, Off White, Optical White, Charcoal, Black",
  },
  { label: "Properties", value: "Water permeable, breathable" },
  {
    label: "Coating options",
    value:
      "Polyester Paste Dot, Polyester Double Dot, Polyamide Paste Dot, Polyamide Double Dot",
  },
] as const;

const widths = "100 / 150 / 200";
const colours = "W / B / C";
const quality = "PES / PA";
const coating = "Paste Dot, Double Dot";

export const microdotArticles: MicrodotArticle[] = [
  { article: "5236", gsm: 23, widths, colours, coatingQuality: quality, coating },
  { article: "5273", gsm: 25, widths, colours, coatingQuality: quality, coating },
  { article: "5337", gsm: 30, widths, colours, coatingQuality: quality, coating },
  { article: "5370", gsm: 35, widths, colours, coatingQuality: quality, coating },
  { article: "5425", gsm: 40, widths, colours, coatingQuality: quality, coating },
  { article: "5484", gsm: 45, widths, colours, coatingQuality: quality, coating },
  { article: "5544", gsm: 50, widths, colours, coatingQuality: quality, coating },
  { article: "5577", gsm: 55, widths, colours, coatingQuality: quality, coating },
  { article: "5628", gsm: 60, widths, colours, coatingQuality: quality, coating },
  { article: "5689", gsm: 65, widths, colours, coatingQuality: quality, coating },
  { article: "5725", gsm: 70, widths, colours, coatingQuality: quality, coating },
  { article: "5777", gsm: 75, widths, colours, coatingQuality: quality, coating },
  { article: "5813", gsm: 80, widths, colours, coatingQuality: quality, coating },
];

export const microdotLegend =
  "W – White (Semi-Dull; Optical); B – Black; C – Charcoal; PES – Polyester; PA – Polyamide";

export const microdotUses = [
  "Ladies' garments",
  "Children's garments",
  "Blazers",
  "Pocket mouths",
  "Belt bands and belt loops",
  "Quilt (wadding support)",
] as const;

export const coatingTypes = [
  {
    name: "Microdot",
    description:
      "Fine, evenly spaced adhesive dots for a soft hand and clean fuse on lightweight fashion fabrics.",
  },
  {
    name: "Paste Dot",
    description:
      "Adhesive paste printed in a dot pattern — a reliable general-purpose bond across garment applications.",
  },
  {
    name: "Double Dot",
    description:
      "A two-layer dot (base + adhesive top) for stronger bonds and better resistance to strike-back.",
  },
  {
    name: "Scatter Coating",
    description:
      "Adhesive powder scattered across the web for economical, full-surface bonding on industrial fabrics.",
  },
] as const;
