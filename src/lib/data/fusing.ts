/**
 * VERIFY: For verification by K. Chandrasekaran
 *
 * Approved specs do not include fusing temperature, pressure, or time.
 * None of the figures or handling statements below are confirmed Krisons
 * settings. Confirm or replace each one before a buyer relies on it.
 *
 * - Flat bed / iron press temperature: "120 °C – 150 °C"
 * - Continuous rotary press temperature: "120 °C – 150 °C"
 * - Flat bed / iron press pressure: "2 – 4 kg/cm²"
 * - Continuous rotary press pressure: "2 – 4 bar"
 * - Flat bed / iron press time: "12 – 17 seconds"
 * - Continuous rotary press time: "10 – 16 seconds"
 * - fusingIntro: heat-sensitive non-wovens; strike-back (glue leaking through); strike-through (glue seeping to the face)
 * - preFusingChecklist "Test sample": bond strength, fabric shrinkage, and change in hand
 * - preFusingChecklist "Alignment": resin-coated side against the wrong side of the garment fabric
 * - preFusingChecklist "Cleanliness": a dirty press can transfer old adhesive
 * - fusingSteps "Pre-heat": silk/wool iron setting; usually no steam; moisture can interfere with some thermal resins
 * - fusingSteps "Position": press cloth or Teflon sheet
 * - fusingSteps "Apply": do not slide the iron; sliding can shift the interlining and cause ghosting or wrinkles; overlap each section
 * - fusingSteps "Cool (crucial)": lie flat at least 20–30 minutes; the bond is permanent only after the resin has fully recrystallized at room temperature
 */

export const fusingIntro =
  "Fusing thermal bond non-woven interlining depends on temperature, pressure, and time (dwell). Because non-woven interlinings are often heat-sensitive, the wrong balance can cause strike-back (glue leaking through) or strike-through (glue seeping to the face of the fabric). The temperatures, pressures, times, and handling notes on this page are not confirmed settings for goods from our manufacturing plant in Erode. Ask us to confirm them for the article and fabric you are using, and run a test fuse before production.";

export const preFusingChecklist = [
  {
    name: "Test sample",
    description:
      "Perform a test fuse on a scrap piece of your production fabric. Check bond strength, fabric shrinkage, and any change in the fabric's hand (feel).",
  },
  {
    name: "Alignment",
    description:
      "Place the resin-coated side (the rough or shiny dotted side) against the wrong side of the garment fabric.",
  },
  {
    name: "Cleanliness",
    description:
      "Keep the heat press or iron surface clean so it does not transfer old adhesive.",
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
    "These temperature, pressure, and time figures are not confirmed settings for Krisons goods. Run a test fuse, and ask us to confirm settings for the article you are using.",
} as const;

export const fusingSteps = [
  {
    name: "Pre-heat",
    description:
      "Set equipment to the temperature under test. With a hand iron, use the silk/wool setting — usually no steam, because moisture can interfere with some thermal resins.",
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
      "Let fused pieces lie completely flat for at least 20–30 minutes. The bond is described as permanent only once the resin has fully recrystallized at room temperature.",
  },
] as const;
