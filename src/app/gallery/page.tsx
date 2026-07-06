import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photographs of the Krisons Marketing factory, machinery and fabric range in Erode, Tamil Nadu.",
  path: "/gallery",
});

// TODO: replace placeholders with real factory/product photography.
const placeholders = [
  "Non-woven fabric line",
  "Coating machine",
  "In-house testing laboratory",
  "Finished fabric rolls",
  "Microdot interlining detail",
  "Factory floor, Erode",
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside the factory"
        intro="Photography of our Erode manufacturing unit and product range is coming soon."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((label) => (
            <figure
              key={label}
              className="dot-grid-dark flex aspect-[4/3] items-end rounded-lg border border-dashed border-ink-900/20 bg-paper-dark p-4"
            >
              <figcaption className="text-sm font-medium text-ink-500">
                {label} — photo coming soon
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
