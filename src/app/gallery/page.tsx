import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Our manufacturing plant in Erode: non-woven production, the in-house laboratory, and finished fabric.",
  path: "/gallery",
});

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

const images: GalleryImage[] = [
  {
    src: "/images/factory-floor.webp",
    alt: "Wide view of the non-woven fabric production line at our manufacturing plant in Erode",
    caption: "Non-woven fabric production line",
    width: 1200,
    height: 567,
  },
  {
    src: "/images/factory-floor-2.webp",
    alt: "Production floor at our manufacturing plant in Erode, with fabric rolls staged for processing",
    caption: "Production floor and finished rolls",
    width: 1200,
    height: 567,
  },
  {
    src: "/images/factory-building.webp",
    alt: "Exterior of our manufacturing plant in Erode",
    caption: "Our manufacturing plant in Erode, commissioned December 2019",
    width: 1200,
    height: 541,
  },
  {
    src: "/images/factory-gate.webp",
    alt: "Entrance of our manufacturing plant in Erode",
    caption: "Plant entrance",
    width: 1200,
    height: 541,
  },
  {
    src: "/images/testing-lab.webp",
    alt: "In-house testing laboratory bench with instruments",
    caption: "In-house testing laboratory",
    width: 1200,
    height: 567,
  },
  {
    src: "/images/testing-equipment.webp",
    alt: "Quality control testing equipment",
    caption: "Quality control equipment",
    width: 1200,
    height: 567,
  },
  {
    src: "/images/rolls-white.webp",
    alt: "White thermal bond non-woven fabric rolls",
    caption: "Thermal bond non-woven fabric",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/fabric-roll-detail.webp",
    alt: "Rolled fabric close-up",
    caption: "Finished fabric ready for dispatch",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/microdot-blue.webp",
    alt: "Microdot fusible interlining on blue garment fabric",
    caption: "Microdot fusible interlining",
    width: 1200,
    height: 800,
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our manufacturing plant in Erode"
        intro="The production line, in-house laboratory, and fabric range at our manufacturing plant in Erode."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-lg border border-ink-900/10 bg-white shadow-sm"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-ink-700">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CTABand
        heading="Want to visit?"
        subtext="Visits to our manufacturing plant in Erode can be arranged through the head office in Chennai."
      />
    </>
  );
}
