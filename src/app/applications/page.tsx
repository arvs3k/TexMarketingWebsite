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
    "Where thermal bond non-woven interlining is used: apparel manufacturing, technical and industrial filtration, automotive interiors, and home textiles.",
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
        heading="Have an application we haven't listed?"
        subtext="We engineer fabric solutions around customer challenges — tell us yours."
      />
    </>
  );
}
