import { applicationCategories } from "@/lib/data/applications";
import { homeTextileProducts } from "@/lib/data/homeTextiles";
import { FUSIBLE_WIDTHS_CM, colorSwatches, microdotArticles, productFamilies } from "@/lib/data/products";
import { inches, ozPerSqYd } from "@/lib/units";

/** Options and microcopy for the sample / quote request form. */

export type Intent = "samples" | "quote" | "both" | "video-call";

export const intents: { id: Intent; label: string; hint: string }[] = [
  { id: "samples", label: "Samples", hint: "Feel and test the fabric first" },
  { id: "quote", label: "A quote", hint: "I know what I need" },
  { id: "both", label: "Samples + quote", hint: "Both together" },
  { id: "video-call", label: "Video walkthrough", hint: "See the plant live" },
];

export const productOptions = [
  ...productFamilies.map((p) => ({ value: p.slug as string, label: p.name })),
  { value: "not-sure", label: "Not sure yet — advise me" },
];

export const articleOptions = microdotArticles.map((a) => ({
  value: a.article,
  label: `Art. ${a.article} — ${a.gsm} GSM (${ozPerSqYd(a.gsm)} oz/yd²)`,
}));

export const homeTextileOptions = homeTextileProducts.map((p) => ({ value: p.name, label: p.name }));

export const widthOptions = FUSIBLE_WIDTHS_CM.map((cm) => ({
  value: `${cm} cm`,
  label: `${cm} cm (${inches(cm)} in)`,
}));

export const fusibleColors = ["White", "Black", "Charcoal"];
export const thermalBondColors = colorSwatches.map((c) => c.name);

export const adhesiveOptions = [
  "PES paste dot",
  "PES double dot",
  "PA paste dot",
  "PA double dot",
  "Not sure",
];

export const quantityUnits = ["meters", "yards", "rolls", "kg", "pieces"];

export const endUseOptions = [
  ...applicationCategories.map((a) => ({ value: a.slug as string, label: a.title })),
  { value: "other", label: "Other" },
];

export const rfqCopy = {
  step1Title: "What do you need?",
  step2Title: "Where do we reply?",
  videoStepTitle: "When suits you?",
  next: "Continue",
  back: "Back",
  submit: "Send request",
  sending: "Sending…",
  privacy:
    "We use these details only to answer your request. No newsletters.",
  sentTitle: "Request received. Thank you.",
  sentNext: [
    "A named person at Krisons reads your request.",
    "We confirm the articles that fit, or ask one or two questions.",
    "Samples are prepared and we tell you when they ship.",
  ],
  videoSentNext: [
    "A named person at Krisons reads your request.",
    "We propose a time that works across time zones.",
    "You get a call link and walk the plant with us.",
  ],
  handoffTitle: "Your request is ready to send.",
  handoffText:
    "Our web form inbox is not available right now, so send the details below straight to us. Everything you entered is already filled in.",
} as const;
