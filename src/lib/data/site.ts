/** Navigation and site-wide microcopy. */

export const primaryNav = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/factory", label: "Factory & quality" },
  { href: "/how-to-buy", label: "How to buy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Krisons" },
      { href: "/factory", label: "Factory & quality" },
      { href: "/how-to-buy", label: "How to buy" },
      { href: "/how-to-buy#faq", label: "FAQ" },
      { href: "/fusing-guide", label: "Fusing guide" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;

export const cta = {
  samples: "Request free samples",
  samplesShort: "Request samples",
  profile: "Download company profile",
  whatsapp: "Chat on WhatsApp",
  videoCall: "Book a video walkthrough",
} as const;

export const home = {
  hero: {
    eyebrow: "Manufacturer · Erode, India · Est. 1992",
    titleLead: "We make the fabric you never see.",
    titleAccent: "Engineered to be felt.",
    lead: "Fusible interlining and thermal bond non-woven, made in our own plant in Tamil Nadu. Two million meters a month, checked in our in-house laboratory. Now accepting export enquiries.",
    photoCaption: "Our production line, Erode",
  },
  proof: {
    eyebrow: "A factory, not a middleman",
    title: "Every meter comes off our own lines.",
    lead: "The name says Marketing. The plant says manufacturer: a non-woven line, a coating line and a testing laboratory in Erode, commissioned in 2019.",
  },
  range: {
    eyebrow: "What we make",
    title: "Six product families, one plant.",
  },
  layers: {
    eyebrow: "How fusible interlining works",
    title: "Three layers. You only ever see one.",
    lead: "Heat and pressure melt the adhesive dots into the back of your shell fabric. The interlining disappears; the shape stays.",
    layers: [
      { name: "Shell fabric", note: "Your garment fabric" },
      { name: "Adhesive dot", note: "PES or PA · paste dot or double dot" },
      { name: "Non-woven base", note: "Thermal bond polyester · 23–80 GSM" },
    ],
  },
  applications: {
    eyebrow: "Where it goes",
    title: "Find your industry.",
  },
  process: {
    eyebrow: "Ordering from India, step by step",
    title: "Start with a sample. Commit when you are sure.",
  },
  assurance: {
    eyebrow: "Quality you can check",
    title: "Don't take our word for it.",
    lead: "Ask for lab data with your samples, test them yourself, and walk the plant by video before you place an order.",
  },
  finalCta: {
    title: "Feel it before you order it.",
    lead: "Tell us the product, weight and width. We will send samples.",
  },
} as const;
