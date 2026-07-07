import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Inside the Krisons Marketing factory: non-woven fabric production line, coating machinery, in-house testing laboratory and finished fabric range.",
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
    alt: "Wide view of the non-woven fabric production line",
    caption: "Non-woven fabric production line",
    width: 1200,
    height: 567,
  },
  {
    src: "/images/factory-floor-2.webp",
    alt: "Factory floor with fabric rolls staged for processing",
    caption: "Factory floor and finished rolls",
    width: 1200,
    height: 567,
  },
  {
    src: "/images/factory-building.webp",
    alt: "Krisons Marketing factory building exterior",
    caption: "The factory, commissioned December 2019",
    width: 1200,
    height: 541,
  },
  {
    src: "/images/factory-gate.webp",
    alt: "Factory entrance and gate",
    caption: "Factory entrance",
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
    caption: "Finished fabric ready for despatch",
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
        title="Inside the factory"
        intro="The production line, in-house testing laboratory and fabric range at our manufacturing unit in South India's textile heartland."
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
        heading="Want to see the factory in person?"
        subtext="Visits can be arranged through our head office."
      />
    </>
  );
}
