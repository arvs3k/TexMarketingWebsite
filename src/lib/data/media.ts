/**
 * Image registry. Every photo on the site is referenced by key from here,
 * so swapping in new photography is a one-line change per image:
 * drop the file in /public/images, update src/width/height/alt below.
 *
 * Current images were extracted from the March 2026 company profile PDF.
 * CONTENT-TODO(photography): replace brochure extracts with professional photos (plant, machines, lab, product close-ups, team). Keys stay the same.
 */

export interface Media {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export const media = {
  productionLine: {
    src: "/images/factory-floor.webp",
    width: 1200,
    height: 567,
    alt: "Wide view of the non-woven production line inside the Krisons plant in Erode",
    caption: "Non-woven production line, Erode",
  },
  productionFloor: {
    src: "/images/factory-floor-2.webp",
    width: 1200,
    height: 567,
    alt: "Production floor with machinery and white fabric rolls staged for processing",
    caption: "Production floor with rolls staged for processing",
  },
  plantExterior: {
    src: "/images/factory-building.webp",
    width: 1200,
    height: 541,
    alt: "Exterior of the Krisons plant building with its power substation",
    caption: "The plant, commissioned December 2019",
  },
  plantGate: {
    src: "/images/factory-gate.webp",
    width: 1200,
    height: 541,
    alt: "Entrance gate of the Krisons plant",
    caption: "Plant entrance",
  },
  lab: {
    src: "/images/testing-lab.webp",
    width: 1200,
    height: 567,
    alt: "Bench with instruments in the in-house testing laboratory",
    caption: "In-house testing laboratory",
  },
  labEquipment: {
    src: "/images/testing-equipment.webp",
    width: 1200,
    height: 567,
    alt: "Testing machines in the in-house laboratory",
    caption: "Laboratory equipment",
  },
  heroRolls: {
    src: "/images/hero-fabric-rolls.webp",
    width: 1800,
    height: 1200,
    alt: "White and black non-woven fabric rolls, close up",
    caption: "Non-woven in white and black",
  },
  rollsWhite: {
    src: "/images/rolls-white.webp",
    width: 1600,
    height: 1067,
    alt: "Rolls of white thermal bond non-woven fabric",
    caption: "Thermal bond non-woven, white",
  },
  rollDark: {
    src: "/images/roll-dark-closeup.webp",
    width: 1600,
    height: 1067,
    alt: "Edge of a charcoal non-woven fabric roll, close up",
    caption: "Charcoal non-woven",
  },
  rollDetail: {
    src: "/images/fabric-roll-detail.webp",
    width: 1200,
    height: 800,
    alt: "Rolled non-woven fabric in grey and black",
    caption: "Finished rolls",
  },
  microdotBlue: {
    src: "/images/microdot-blue.webp",
    width: 1200,
    height: 800,
    alt: "Dot-coated fusible interlining laid on blue garment fabric",
    caption: "Fusible interlining on shell fabric",
  },
  microdotDark: {
    src: "/images/microdot-texture-dark.webp",
    width: 1600,
    height: 1067,
    alt: "Adhesive dot pattern on dark fusible interlining, close up",
    caption: "The dot coating, close up",
  },
} satisfies Record<string, Media>;

export type MediaKey = keyof typeof media;

/**
 * Photos and video we do not have yet. Each renders as a marked placeholder
 * slot in development/preview and is left out of the live site.
 */
export interface WantedMedia {
  id: string;
  brief: string;
  aspect: "16/9" | "4/3" | "1/1" | "3/2";
}

export const wantedMedia = {
  // CONTENT-TODO(photo-coating-line): photo of the coating machine running (landscape). Add to media above and reference from factory.ts tour stop "coating".
  coatingLine: { id: "photo-coating-line", brief: "Coating machine applying dot adhesive — landscape, operator in frame if possible", aspect: "16/9" },
  // CONTENT-TODO(photo-lab-in-use): photo of a technician running a test in the lab.
  labInUse: { id: "photo-lab-in-use", brief: "Technician running a test in the laboratory", aspect: "4/3" },
  // CONTENT-TODO(photo-team): group photo of the team at the plant.
  team: { id: "photo-team", brief: "The team at the plant — group photo, landscape", aspect: "16/9" },
  // CONTENT-TODO(photo-dispatch): photo of packed rolls ready for dispatch (shows packing quality to importers).
  dispatch: { id: "photo-dispatch", brief: "Packed rolls ready for dispatch — show wrapping and labels", aspect: "4/3" },
  // CONTENT-TODO(photo-woven-interlining): macro photo of woven interlining.
  wovenMacro: { id: "photo-woven-interlining", brief: "Macro photo of woven interlining", aspect: "3/2" },
  // CONTENT-TODO(photo-coated-fabric): macro photo of coated fabric.
  coatedMacro: { id: "photo-coated-fabric", brief: "Macro photo of coated fabric", aspect: "3/2" },
  // CONTENT-TODO(photo-geo-textile): photo of geo-textile roll or surface.
  geoMacro: { id: "photo-geo-textile", brief: "Photo of geo-textile roll or surface", aspect: "3/2" },
} satisfies Record<string, WantedMedia>;
