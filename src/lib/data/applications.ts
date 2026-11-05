export interface UseCase {
  name: string;
  description: string;
}

export interface ApplicationCategory {
  slug: string;
  title: string;
  intro: string;
  useCases: UseCase[];
}

/**
 * VERIFY: For verification by K. Chandrasekaran
 *
 * Confirmed end uses are apparel interlining, filtration, automotive, and
 * home textiles. The statements below go further (placement, construction, or
 * performance) and are not approved specifications. Confirm or replace each
 * one. Do not add test results or standards.
 *
 * - Apparel intro: "providing internal architecture to clothing."
 * - Front fusing: entire front panel bonded for a smooth, structured chest.
 * - Small part reinforcement: collars, cuffs, pocket flaps, and waistbands "stay crisp after multiple washes."
 * - Stay tapes: narrow strips on bias cuts (necklines, armholes) "to prevent stretching during sewing."
 * - Blouse & shirt plackets: "stiffness buttonholes need so they don't tear or sag."
 * - Technical intro: "Outside apparel, these fabrics are used for filtration and barrier properties." ("barrier" is not a confirmed use.)
 * - Filtration media: "thermal bonding creates a consistent pore size."
 * - Protective clothing: disposable lab coats, coveralls, and shoe covers for cleanrooms.
 * - Cable wrapping: "heat resistance and insulation."
 * - Automotive intro: "Used in vehicle interiors for light weight and sound absorption."
 * - Headliners: "Backing for the fabric on the ceiling of cars."
 * - Trunk liners: "durable, scuff-resistant surface."
 * - Seat construction: stabilizer between foam and upholstery that "keeps leather and fabric from wrinkling."
 * - Embroidery stabilizers: "tear-away versions are often thermal-bonded non-wovens."
 * - Curtain headers: inserted to "support heavy grommets or hooks."
 * - Quilt batting: "Low-loft thermal bond webs provide warmth without the bulk of traditional cotton batting."
 * - Bedding: structural layer in mattress covers and pillow protectors.
 */

export const applicationsIntro =
  "Thermal bond non-woven interlining is a hidden component. You rarely see it, but it changes the structure of the item it is used in.";

export const applicationCategories: ApplicationCategory[] = [
  {
    slug: "apparel",
    title: "Apparel Manufacturing",
    intro:
      "The most common application: providing internal architecture to clothing.",
    useCases: [
      {
        name: "Front fusing",
        description:
          "In mass-produced suits and coats, the entire front panel is bonded with thermal interlining to give the chest a smooth, structured appearance.",
      },
      {
        name: "Small part reinforcement",
        description:
          "Applied to collars, cuffs, pocket flaps, and waistbands so they stay crisp after multiple washes.",
      },
      {
        name: "Stay tapes",
        description:
          "Slit into narrow strips and applied to bias cuts — necklines, armholes — to prevent stretching during sewing.",
      },
      {
        name: "Blouse & shirt plackets",
        description:
          "Provides the stiffness buttonholes need so they don't tear or sag.",
      },
    ],
  },
  {
    slug: "industrial",
    title: "Technical & Industrial",
    intro:
      "Outside apparel, these fabrics are used for filtration and barrier properties.",
    useCases: [
      {
        name: "Filtration media",
        description:
          "Air-conditioning filters, vacuum cleaner bags, and liquid filtration — thermal bonding creates a consistent pore size.",
      },
      {
        name: "Protective clothing",
        description:
          "Disposable lab coats, coveralls, and shoe covers for cleanroom environments.",
      },
      {
        name: "Cable wrapping",
        description:
          "Binding tape for wire harnesses in electronics, providing heat resistance and insulation.",
      },
    ],
  },
  {
    slug: "automotive",
    title: "Automotive",
    intro: "Used in vehicle interiors for light weight and sound absorption.",
    useCases: [
      {
        name: "Headliners",
        description: "Backing for the fabric on the ceiling of cars.",
      },
      {
        name: "Trunk liners",
        description:
          "A durable, scuff-resistant surface for the interior of the trunk.",
      },
      {
        name: "Seat construction",
        description:
          "A stabilizer between foam and outer upholstery that keeps leather and fabric from wrinkling.",
      },
    ],
  },
  {
    slug: "home-textiles",
    title: "Home Textiles & Accessories",
    intro: "Structure and support in furnishing, bedding, and craft applications.",
    useCases: [
      {
        name: "Embroidery stabilizers",
        description:
          "Applied to the back of fabric before stitching complex designs; tear-away versions are often thermal-bonded non-wovens.",
      },
      {
        name: "Curtain headers",
        description:
          "Inserted into the top of drapes to support heavy grommets or hooks.",
      },
      {
        name: "Quilt batting",
        description:
          "Low-loft thermal bond webs provide warmth without the bulk of traditional cotton batting.",
      },
      {
        name: "Bedding",
        description:
          "A structural layer in mattress covers and pillow protectors.",
      },
    ],
  },
];
