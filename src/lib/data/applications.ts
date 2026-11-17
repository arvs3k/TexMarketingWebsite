import type { ProductSlug } from "@/lib/data/products";

export interface UseCase {
  name: string;
  description: string;
}

export interface ApplicationCategory {
  slug: "apparel" | "filtration" | "automotive" | "home-textiles";
  title: string;
  shortTitle: string;
  /** Who this page is for. */
  audience: string;
  intro: string;
  useCases: UseCase[];
  /** Product families that serve this industry, most relevant first. */
  products: ProductSlug[];
  seo: { title: string; description: string };
}

/**
 * VERIFY: For verification by K. Chandrasekaran
 * CONTENT-TODO(verify-applications): confirm each use case below is one Krisons fabric is actually sold into, and delete any that are not.
 *
 * Confirmed end uses are apparel interlining, filtration, automotive, and
 * home textiles. The use cases below say WHERE the material is used. They make
 * no performance claims (wash durability, pore size, heat resistance, sound
 * absorption): those were removed in the Nov 2026 redesign and must not be
 * added back without test data. Do not add test results or standards here.
 */

export const applicationsIntro =
  "Interlining is the part of a product nobody sees and everybody feels. These are the industries our fabric goes into, and the products we make for each.";

export const applicationCategories: ApplicationCategory[] = [
  {
    slug: "apparel",
    title: "Apparel Interlining",
    shortTitle: "Apparel",
    audience: "For garment factories, brands' sourcing teams and interlining distributors",
    intro:
      "The structure inside the garment: fronts, collars, cuffs, plackets and waistbands. Thirteen fusible articles from 23 to 80 GSM, used from ladies' and children's wear to blazers and trousers.",
    useCases: [
      {
        name: "Front fusing",
        description:
          "Bonded to the front panel of jackets, blazers and coats to give the chest its shape.",
      },
      {
        name: "Small parts",
        description: "Collars, cuffs, pocket flaps, pocket mouths, belt bands and belt loops.",
      },
      {
        name: "Stay tapes",
        description: "Slit into narrow strips for necklines, armholes and other bias-cut edges.",
      },
      {
        name: "Plackets",
        description: "Blouse and shirt plackets, where buttonholes need support.",
      },
    ],
    products: ["fusible-interlining", "woven-interlining", "thermal-bond-non-woven"],
    seo: {
      title: "Interlining for Apparel Manufacturers — Fusible & Woven, Made in India",
      description:
        "Fusible and woven interlining for garment factories and sourcing teams: fronts, collars, cuffs, plackets, waistbands. 13 articles, 23–80 GSM. Manufactured in Erode, India.",
    },
  },
  {
    slug: "filtration",
    title: "Filtration & Technical",
    shortTitle: "Filtration",
    audience: "For filter makers and technical-textile converters",
    intro:
      "Thermal bond polyester non-woven as a media or support layer, supplied in the weight and width your converting line runs.",
    useCases: [
      {
        name: "Filtration media",
        description: "Air-conditioning filters, vacuum cleaner bags and liquid filtration.",
      },
      {
        name: "Protective clothing",
        description: "Disposable lab coats, coveralls and shoe covers.",
      },
      {
        name: "Cable wrapping",
        description: "Binding tape for wire harnesses.",
      },
    ],
    products: ["thermal-bond-non-woven"],
    seo: {
      title: "Non-Woven Fabric for Filtration & Technical Uses — Manufacturer, India",
      description:
        "Thermal bond polyester non-woven for filtration media and technical converting, 23–80 GSM, 100–200 cm wide. Manufactured in Erode, India. Request samples.",
    },
  },
  {
    slug: "automotive",
    title: "Automotive Interiors",
    shortTitle: "Automotive",
    audience: "For automotive trim suppliers and their sourcing teams",
    intro:
      "Light non-woven layers for vehicle interiors, behind the surfaces passengers see.",
    useCases: [
      {
        name: "Headliners",
        description: "Backing for the ceiling fabric.",
      },
      {
        name: "Trunk liners",
        description: "Lining for the luggage compartment.",
      },
      {
        name: "Seat construction",
        description: "A layer between foam and outer upholstery.",
      },
    ],
    products: ["thermal-bond-non-woven"],
    seo: {
      title: "Non-Woven Fabric for Automotive Interiors — Manufacturer, India",
      description:
        "Thermal bond polyester non-woven for headliners, trunk liners and seat construction. 23–80 GSM, up to 200 cm wide. Manufactured in Erode, India.",
    },
  },
  {
    slug: "home-textiles",
    title: "Home Textiles",
    shortTitle: "Home textiles",
    audience: "For home-textile brands, importers and hospitality buyers",
    intro:
      "Non-woven as a component in bedding and furnishing, and a range of finished goods we make ourselves.",
    useCases: [
      {
        name: "Embroidery backing",
        description: "Applied to the back of fabric before stitching.",
      },
      {
        name: "Curtain headers",
        description: "Inserted into the top of drapes.",
      },
      {
        name: "Quilting",
        description: "Batting support in quilts.",
      },
      {
        name: "Bedding",
        description: "A layer in mattress covers and pillow protectors.",
      },
    ],
    products: ["home-textiles", "thermal-bond-non-woven", "fusible-interlining"],
    seo: {
      title: "Home Textiles & Non-Woven Components — Manufacturer, India",
      description:
        "Non-woven for bedding, quilting and furnishing, plus finished pillows, bed runners, mattress protectors and toppers. Manufactured in Erode, India.",
    },
  },
];

export function getApplication(slug: string): ApplicationCategory | undefined {
  return applicationCategories.find((a) => a.slug === slug);
}
