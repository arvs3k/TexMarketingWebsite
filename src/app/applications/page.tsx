import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ApplicationCard from "@/components/ApplicationCard";
import CTABand from "@/components/CTABand";
import {
  applicationCategories,
  applicationsIntro,
} from "@/lib/data/applications";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Applications",
  description:
    "Where fabric from our manufacturing plant in Erode is used: apparel interlining, filtration, automotive, and home textiles.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Applications"
        title="The silent component"
        intro={applicationsIntro}
      />

      <Section>
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <Image
            src="/images/cutting-table.webp"
            alt="Garment panels being prepared on a cutting table"
            width={1200}
            height={800}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="rounded-lg border border-ink-900/10 shadow-sm"
          />
          <Image
            src="/images/fabric-roll-detail.webp"
            alt="Rolled non-woven fabric ready for dispatch"
            width={1200}
            height={800}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="rounded-lg border border-ink-900/10 shadow-sm"
          />
        </div>
        <div className="space-y-8">
          {applicationCategories.map((cat, i) => (
            <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
              <ApplicationCard
                index={i}
                title={cat.title}
                intro={cat.intro}
                useCases={cat.useCases}
              />
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        heading="Have an end use we haven't listed?"
        subtext="Tell us whether it is apparel interlining, filtration, automotive, home textiles, or something else."
      />
    </>
  );
}
