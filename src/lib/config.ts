/**
 * One place for everything Aravindh may want to switch or change without
 * touching components: contact details, feature flags, and promises we make.
 */

export const siteConfig = {
  /** Canonical production URL. Override with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://krisonsmarketing.com",

  /** Legal name. Used in the footer, About, metadata and JSON-LD. */
  legalName: "Krisons Marketing",
  /** Short brand used in the header lock-up. */
  brand: "Krisons",
  /** Sits beside the brand so "Marketing" is never read as "trading company". */
  descriptor: "Interlining & non-woven manufacturer",

  /**
   * The one contact email for the whole site.
   * CONTENT-TODO(business-email): replace the Gmail address with the business address on the company domain once it exists.
   */
  email: "krisonsmarketing@gmail.com",

  /**
   * WhatsApp number in international format, digits only (no "+", no spaces).
   * null = use the Manager's phone number from src/lib/data/company.ts.
   * CONTENT-TODO(whatsapp-number): confirm which number answers WhatsApp for buyers, and that WhatsApp is active on it.
   */
  whatsappNumber: null as string | null,

  /**
   * "We reply within X working days." null = no number is promised on the live site.
   * CONTENT-TODO(reply-time): set the number of working days you will commit to (for example 2).
   */
  replyWithinWorkingDays: null as number | null,

  profilePdf: {
    href: "/krisons-company-profile.pdf",
    fileName: "Krisons-Marketing-Company-Profile.pdf",
    sizeLabel: "PDF, 1.3 MB",
  },

  /** Web3Forms access key (free plan). Without it, forms hand off to email / WhatsApp. */
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || null,

  features: {
    /** WhatsApp click-to-chat: mobile bar / floating button, header, contact page. */
    whatsapp: true,
    /** "Book a video call / live factory walkthrough" request. */
    videoCall: true,
    /** Sticky bottom bar on phones: Request samples · WhatsApp. */
    stickyMobileCta: true,
    /** Contextual call-to-action blocks at the end of product and application sections. */
    contextualCtas: true,
    /** Ask for an email before the company profile downloads. Off = direct download. */
    profileEmailGate: false,
    /**
     * File input on the RFQ form. Needs a Web3Forms Pro plan (attachments are not
     * in the free plan). Off = buyers paste a link to their tech pack instead.
     */
    rfqFileUpload: false,
  },
} as const;

export type FeatureFlag = keyof typeof siteConfig.features;
