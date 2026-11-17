import type { MediaKey } from "@/lib/data/media";
import { wantedMedia, type WantedMedia } from "@/lib/data/media";

/** Factory & quality page content. Facts from the company profile. */

export interface TourStop {
  id: string;
  step: string;
  title: string;
  text: string;
  images: MediaKey[];
  /** Photo we still need for this stop. */
  wanted?: WantedMedia;
}

export const tourIntro =
  "Buyers who cannot visit should still be able to look around. This is the plant in Erode, in the order the fabric moves through it.";

export const tourStops: TourStop[] = [
  {
    id: "plant",
    step: "01",
    title: "The plant",
    text: "Commissioned in December 2019 in Erode, in the textile belt of Tamil Nadu. It runs on its own 320 KVA high-tension power line with an on-site transformer.",
    images: ["plantExterior", "plantGate"],
  },
  {
    id: "non-woven-line",
    step: "02",
    title: "The non-woven line",
    text: "Where polyester fiber, recycled or virgin, becomes thermal bond non-woven: 23 to 80 GSM, up to 200 cm wide.",
    images: ["productionLine", "productionFloor"],
  },
  {
    id: "coating",
    step: "03",
    title: "The coating line",
    text: "Our own coating machine applies the adhesive dot, in polyester or polyamide, that turns a non-woven into a fusible interlining.",
    images: [],
    wanted: wantedMedia.coatingLine,
  },
  {
    id: "laboratory",
    step: "04",
    title: "The laboratory",
    text: "An in-house testing laboratory sits beside production, so fabric is checked where it is made.",
    images: ["lab", "labEquipment"],
    wanted: wantedMedia.labInUse,
  },
  {
    id: "finished-rolls",
    step: "05",
    title: "Finished rolls",
    text: "Rolled to the width you ordered, in white, off white, optical white, charcoal or black.",
    images: ["rollsWhite", "rollDetail"],
    wanted: wantedMedia.dispatch,
  },
];

/**
 * Optional factory video.
 * CONTENT-TODO(factory-video): add a 60–90 s factory walkthrough. Set `src` to an MP4 under /public/video/ (keep under 8 MB) or a YouTube/Vimeo embed URL, and `poster` to a still frame.
 */
export const factoryVideo: { src: string | null; poster: string | null; title: string } = {
  src: null,
  poster: null,
  title: "A walk through the Krisons plant in Erode",
};

export const machinery = [
  { name: "Non-woven fabric machine", role: "Thermal bond non-woven production" },
  { name: "Coating machine", role: "Adhesive dot and coated fabric" },
  { name: "Chilling plant", role: "Process cooling" },
  { name: "Electric boiler", role: "Process heat" },
  { name: "Air compressor", role: "Plant air" },
  { name: "Transformer · 320 KVA HT line", role: "Dedicated power" },
] as const;

export const plantFacts = [
  { value: "Dec 2019", label: "Commissioned" },
  { value: "2,000,000", label: "Meters a month" },
  { value: "35", label: "People" },
  { value: "320 KVA", label: "HT power line" },
] as const;

/* ---------------- Quality ---------------- */

export const qualityIntro =
  "Quality control is done in our own laboratory at the plant. Ask for the test data for your article when you request samples, and test our samples in your own lab or one you trust.";

/**
 * QC process steps.
 * CONTENT-TODO(qc-process): describe the real QC steps in order (what is checked, when, by whom). 4–6 steps. Until then this block shows only as a placeholder.
 */
export const qcSteps: { title: string; text: string }[] = [];

/** How many empty step slots to draw while qcSteps is empty. */
export const qcStepSlots = 4;

/**
 * Certifications and compliance.
 * CONTENT-TODO(certifications): add each certificate you hold: name, issuing body, certificate number, valid-until date, logo/badge image under /public/images/certifications/, and the PDF under /public/certificates/. Do not list anything applied-for or expired.
 */
export interface Certification {
  name: string;
  issuer: string;
  number?: string;
  validUntil?: string;
  badge?: string;
  file?: string;
}
export const certifications: Certification[] = [];

/** How many empty badge slots to draw while certifications is empty. */
export const certificationSlots = 4;

export const complianceNote =
  "Tell us which standards your market or your customer requires. We will tell you in writing what we hold today and what we do not.";

/**
 * Downloadable lab / third-party test reports.
 * CONTENT-TODO(test-reports): add report PDFs under /public/test-reports/ and list them here (title, article, lab, date, file).
 */
export interface TestReport {
  title: string;
  article?: string;
  lab: string;
  date: string;
  file: string;
}
export const testReports: TestReport[] = [];
export const testReportSlots = 3;
