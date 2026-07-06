import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import SpecTable from "@/components/SpecTable";
import CTABand from "@/components/CTABand";
import {
  companyFacts,
  pillars,
  timeline,
  whyPartners,
} from "@/lib/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us — Non-Woven Fabric Manufacturer Since 1992",
  description:
    "Three decades in Indian industrial textiles: from hardware for leather goods in 1992 to a modern non-woven and coated fabric factory in Erode producing 2 million metres a month for domestic and international buyers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Three decades of textile expertise"
        intro="Krisons Marketing is a proprietorship-led company in the industrial textile sector — a trusted partner for businesses requiring high-performance non-woven and industrial fabrics."
      />

      <Section eyebrow="Our journey" title="From hardware to high-performance fabrics">
        <Timeline items={timeline} />
      </Section>

      <Section
        eyebrow="Innovation & leadership"
        title="Market pioneers"
        className="bg-paper-dark"
      >
        <p className="max-w-3xl text-lg leading-relaxed text-ink-700">
          Krisons Marketing was among the first to introduce double-sided
          non-woven fabrics specifically optimised for the home furnishing
          industry — a move that redefined durability and aesthetic versatility
          in the sector.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[...pillars, ...whyPartners].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="At a glance"
        title="Company profile"
        intro="Key facts about the firm, the factory and our capabilities."
      >
        <SpecTable
          caption="Krisons Marketing company facts"
          headers={["Detail", "Value"]}
          rows={companyFacts.map((f) => [f.label, f.value])}
        />
        <p className="mt-6">
          <a
            href="/krisons-company-profile.pdf"
            className="font-semibold text-copper-600 hover:text-copper-700"
          >
            Download the full company profile (PDF, 1.3 MB) →
          </a>
        </p>
      </Section>

      <CTABand />
    </>
  );
}
