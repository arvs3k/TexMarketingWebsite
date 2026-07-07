import Image from "next/image";
import Link from "next/link";
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
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Timeline items={timeline} />
          <div className="grid gap-4">
            <Image
              src="/images/factory-building.webp"
              alt="Krisons Marketing factory building, commissioned 2019"
              width={1200}
              height={541}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
            <Image
              src="/images/factory-floor.webp"
              alt="Non-woven fabric production line on the factory floor"
              width={1200}
              height={567}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
            <Image
              src="/images/testing-lab.webp"
              alt="In-house quality testing laboratory"
              width={1200}
              height={567}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
            <p className="text-sm text-ink-500">
              The factory, production line and in-house testing laboratory —{" "}
              <Link
                href="/gallery"
                className="font-semibold text-copper-600 hover:text-copper-700"
              >
                see more in the gallery →
              </Link>
            </p>
          </div>
        </div>
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
