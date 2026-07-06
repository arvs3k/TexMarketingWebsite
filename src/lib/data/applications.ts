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

export const applicationsIntro =
  "Thermal bond non-woven interlining is a silent component — you rarely see it, but you feel its effect in the structure of everyday items.";

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
          "Applied to collars, cuffs, pocket flaps and waistbands so they stay crisp after multiple washes.",
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
      "Outside of fashion, these fabrics are used for their filtration and barrier properties.",
    useCases: [
      {
        name: "Filtration media",
        description:
          "Air-conditioning filters, vacuum cleaner bags and liquid filtration — thermal bonding creates a consistent pore size.",
      },
      {
        name: "Protective clothing",
        description:
          "Disposable lab coats, coveralls and shoe covers for cleanroom environments.",
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
    intro:
      "Prized in vehicle interiors for being lightweight and sound-absorbent.",
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
          "A stabiliser between foam and outer upholstery that keeps leather and fabric from wrinkling.",
      },
    ],
  },
  {
    slug: "home-textiles",
    title: "Home Textiles & Accessories",
    intro:
      "Structure and support in furnishing, bedding and craft applications.",
    useCases: [
      {
        name: "Embroidery stabilisers",
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
          "A cost-effective structural layer in mattress covers and pillow protectors.",
      },
    ],
  },
];
