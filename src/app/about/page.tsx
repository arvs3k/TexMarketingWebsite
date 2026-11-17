import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import People from "@/components/People";
import Photo, { WantedPhoto } from "@/components/Photo";
import ProfileDownload from "@/components/ProfileDownload";
import Section from "@/components/Section";
import { ClosingCta, SamplesButton } from "@/components/Cta";
import { companyFacts, story, timeline } from "@/lib/data/company";
import { wantedMedia } from "@/lib/data/media";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const crumbs = [{ href: "/about", label: "About" }];

export const metadata = buildMetadata({
  title: "About — A Family Textile Manufacturer Since 1992",
  description:
    "Krisons Marketing was founded in Chennai in 1992 and has run its own interlining and non-woven plant in Erode, Tamil Nadu, since 2019. The story, the people and the company facts.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="About Krisons"
        title="Thirty years in the trade. Our own plant since 2019."
        lead="A family-run firm from Tamil Nadu that started by selling buckles and now makes two million meters of fabric a month."
      >
        <SamplesButton location="about_hero" />
        <ProfileDownload location="about_hero" className="btn btn-ghost-light" />
      </PageHero>

      <Section eyebrow="Our story" title={story.heading}>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-ink-700">
              {story.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-xl text-ink-900" : ""}>
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-copper-600 pl-5 font-serif text-2xl italic leading-snug text-ink-900">
              {story.nameNote}
            </p>
          </div>
          <div className="space-y-3 lg:col-span-5">
            <Photo name="plantExterior" caption sizes="(min-width: 1024px) 480px, 100vw" />
            <Photo name="productionFloor" caption sizes="(min-width: 1024px) 480px, 100vw" />
            <WantedPhoto item={wantedMedia.team} />
          </div>
        </div>
      </Section>

      <Section tone="ink" eyebrow="Timeline" title="From hardware to our own fabric">
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => (
            <li key={t.year} className="border-t border-white/25 pt-5">
              <span className="num text-4xl font-medium tracking-tight text-copper-400">{t.year}</span>
              <h3 className="mt-3 font-display text-xl font-bold">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-300">{t.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="people"
        eyebrow="People"
        title="Who you will deal with"
        lead="Enquiries are answered by the people who run the business, not a call center."
      >
        <People location="about" />
      </Section>

      <Section tone="paper-2" id="facts" eyebrow="For your supplier file" title="Company facts">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative overflow-x-auto rounded-(--radius-card) border border-line bg-card">
              <table className="spec-table">
                <caption className="sr-only">Krisons Marketing company facts</caption>
                <tbody>
                  {companyFacts.map((f) => (
                    <tr key={f.label}>
                      <th scope="row" className="w-2/5 font-semibold">
                        {f.label}
                      </th>
                      <td>{f.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="leading-relaxed text-ink-600">
              The full profile, with products, machinery and contacts, as a PDF for your supplier onboarding file.
            </p>
            <div className="mt-5">
              <ProfileDownload location="about_facts" />
            </div>
          </div>
        </div>
      </Section>

      <ClosingCta
        location="about_final"
        title="The best introduction is a sample."
        lead="Tell us the product, weight and width. We will send samples."
      />
    </>
  );
}
