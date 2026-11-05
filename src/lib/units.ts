/**
 * Display conversions for US buyers. These are not additional specifications.
 *
 * Length: 1 inch = 2.54 cm exactly.
 * Mass per area: 1 avoirdupois ounce = 28.349523125 g exactly,
 * 1 square yard = 0.9144^2 = 0.83612736 m² exactly,
 * so 1 oz/yd² = 28.349523125 / 0.83612736 ≈ 33.90574747 g/m².
 * oz/yd² = GSM × 0.83612736 / 28.349523125.
 *
 * Shown values are rounded half away from zero to two decimal places.
 */

const GRAMS_PER_OUNCE = 28.349523125;
/** Avoirdupois pound, exact. */
const GRAMS_PER_POUND = 453.59237;
const SQUARE_METERS_PER_SQUARE_YARD = 0.9144 * 0.9144;

export function gsmToOzPerSqYd(gsm: number): number {
  return (gsm * SQUARE_METERS_PER_SQUARE_YARD) / GRAMS_PER_OUNCE;
}

export function cmToInches(cm: number): number {
  return cm / 2.54;
}

function round2(value: number): string {
  return value.toFixed(2);
}

export function formatGsmRange(minGsm: number, maxGsm: number): string {
  return `${minGsm}–${maxGsm} GSM (${round2(gsmToOzPerSqYd(minGsm))}–${round2(gsmToOzPerSqYd(maxGsm))} oz/yd²)`;
}

export function formatGsmValue(gsm: number): string {
  return `${gsm} GSM (${round2(gsmToOzPerSqYd(gsm))} oz/yd²)`;
}

export function formatCmRange(minCm: number, maxCm: number): string {
  return `${minCm}–${maxCm} cm (${round2(cmToInches(minCm))}–${round2(cmToInches(maxCm))} in)`;
}

export function formatCmValue(cm: number): string {
  return `${cm} cm (${round2(cmToInches(cm))} in)`;
}

export function formatWidthChoices(cms: readonly number[]): string {
  const inches = cms.map((cm) => round2(cmToInches(cm))).join(" / ");
  return `${cms.join(" / ")} cm (${inches} in)`;
}

/** Inches to centimeters. 1 in = 2.54 cm exactly. */
export function inchesToCm(inches: number): number {
  return inches * 2.54;
}

export function formatInchSize(
  widthIn: number,
  lengthIn: number,
  feet?: { width: number; length: number },
): string {
  const cm = `${round2(inchesToCm(widthIn))} × ${round2(inchesToCm(lengthIn))} cm`;
  const inches = `${widthIn} × ${lengthIn} in`;
  if (feet) {
    return `${inches} (${feet.width} × ${feet.length} ft; ${cm})`;
  }
  return `${inches} (${cm})`;
}

/** Grams with ounces and pounds. 1 oz = 28.349523125 g; 1 lb = 453.59237 g. */
export function formatGrams(grams: number): string {
  const ounces = grams / GRAMS_PER_OUNCE;
  const pounds = grams / GRAMS_PER_POUND;
  return `${grams} g (${round2(ounces)} oz / ${round2(pounds)} lb)`;
}
