export const fusingIntro =
  "Fusing thermal bond non-woven interlining requires a precise balance of three variables: temperature, pressure and time (dwell time). Because non-woven interlinings are often heat-sensitive, following the correct parameters prevents strike-back (glue leaking through) and strike-through (glue seeping to the face of the fabric).";

export const preFusingChecklist = [
  {
    name: "Test sample",
    description:
      "Always perform a test fuse on a scrap piece of your production fabric. Check bond strength, fabric shrinkage and any change in the fabric's hand (feel).",
  },
  {
    name: "Alignment",
    description:
      "Place the resin-coated side (the rough or shiny dotted side) against the wrong side of the garment fabric.",
  },
  {
    name: "Cleanliness",
    description:
      "Ensure the heat press or iron surface is clean to avoid transferring old adhesive.",
  },
] as const;

export const fusingParameters = {
  headers: ["Variable", "Flat Bed / Iron Press", "Continuous Rotary Press"],
  rows: [
    ["Temperature", "120 °C – 150 °C", "120 °C – 150 °C"],
    ["Pressure", "2 – 4 kg/cm²", "2 – 4 bar"],
    ["Time", "12 – 17 seconds", "10 – 16 seconds"],
  ],
  footnote:
    "Industry-standard ranges. Specific settings vary by manufacturer and interlining weight — always confirm with a test fuse.",
} as const;

export const fusingSteps = [
  {
    name: "Pre-heat",
    description:
      "Set equipment to the recommended temperature. With a hand iron, use the silk/wool setting — usually no steam, as moisture can interfere with some thermal resins.",
  },
  {
    name: "Position",
    description:
      "Lay the fabric flat on the pressing board, place the interlining on top, and cover with a press cloth or Teflon sheet to protect the iron and fabric.",
  },
  {
    name: "Apply",
    description:
      "Lower the heat press, or press an iron down firmly in one spot — do not slide it, which can shift the interlining and cause ghosting or wrinkles. Lift and move to the next section, slightly overlapping the previous area so no spots are missed.",
  },
  {
    name: "Cool (crucial)",
    description:
      "Let fused pieces lie completely flat for at least 20–30 minutes. The bond is only permanent once the resin has fully recrystallised at room temperature.",
  },
] as const;
