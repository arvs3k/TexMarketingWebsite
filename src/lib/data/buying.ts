/** "How to buy" content: the ordering path for a buyer who has never dealt with us. */

export const buyingIntro =
  "Buying fabric from a supplier you have never met, in a country you may never visit, should be a series of small steps, each one checked before the next. This is how we suggest doing it.";

export interface BuyingStep {
  step: string;
  title: string;
  text: string;
  /** What the buyer holds at the end of this step. */
  youGet: string;
}

export const buyingSteps: BuyingStep[] = [
  {
    step: "01",
    title: "Tell us what you need",
    text: "Product, weight, width, color, rough quantity and where it is going. Two minutes on the request form, or send your tech pack.",
    youGet: "A reply from a named person",
  },
  {
    step: "02",
    title: "Samples",
    text: "We send samples of the articles that fit. Fuse them, wash them, test them in your own lab.",
    youGet: "Fabric in your hands",
  },
  {
    step: "03",
    title: "Specification confirmed",
    text: "We agree the article, weight, width, color and coating in writing, together with price, quantity, delivery terms and documents.",
    youGet: "A written quotation",
  },
  {
    step: "04",
    title: "Trial order",
    text: "Start with a quantity that lets you run the fabric on your own line before you commit to a program.",
    youGet: "Proof in production",
  },
  {
    step: "05",
    title: "Production",
    text: "Repeat orders run to the confirmed specification, with capacity of up to 2,000,000 meters a month behind them.",
    youGet: "A steady supply",
  },
];

/** Short version for the home page. */
export const buyingStepsShort = buyingSteps.slice(1).map((s) => ({
  step: String(Number(s.step) - 1).padStart(2, "0"),
  title: s.title,
  text: s.text,
}));

export const exportStatement = {
  heading: "Export is new for us. We would rather say so.",
  paragraphs: [
    "Our customers today are in India: Bangalore, Chennai, Tirupur and Karur. We are now accepting enquiries from buyers abroad.",
    "That means you will not find a list of export markets on this site. What you will find is a plant you can inspect by video, samples you can test yourself, and terms agreed in writing before you commit to anything.",
  ],
} as const;

export const documentation = {
  heading: "Documents and shipping",
  intro:
    "Every export order needs paperwork your customs broker can work with. We agree the list with you at the quotation stage, before any order is placed.",
  items: [
    {
      title: "Commercial documents",
      text: "Commercial invoice and packing list for each shipment.",
    },
    {
      title: "Transport document",
      text: "Bill of lading or air waybill, depending on how the goods travel.",
    },
    {
      title: "Anything your market requires",
      text: "If your customs authority or your customer needs a specific certificate or declaration, tell us up front and we will confirm in writing whether we can provide it.",
    },
    {
      title: "Delivery terms",
      text: "Shipping terms and responsibilities are set out in the quotation, so both sides know who arranges and pays for what.",
    },
  ],
} as const;

export const videoCallOffer = {
  heading: "Can't visit? Walk the plant by video.",
  text: "Book a live video call from the factory floor. See the lines running, look at the lab, and ask the people who make the fabric anything you like.",
  cta: "Book a video walkthrough",
} as const;
