import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Photo, { WantedPhoto } from "@/components/Photo";
import ProfileDownload from "@/components/ProfileDownload";
import Section from "@/components/Section";
import { ClosingCta, ContextCta, SamplesButton, VideoCallButton } from "@/components/Cta";
import { PlaceholderBlock, PlaceholderOnly } from "@/components/Placeholder";
import { Certifications, QcProcess, TestReports } from "@/components/Proof";
import { videoCallOffer } from "@/lib/data/buying";
import {
  certifications,
  factoryVideo,
  machinery,
  plantFacts,
  qcSteps,
  qualityIntro,
  testReports,
  tourIntro,
  tourStops,
} from "@/lib/data/factory";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { showPlaceholders } from "@/lib/placeholders";

const crumbs = [{ href: "/factory", label: "Factory & quality" }];

export const metadata = buildMetadata({
  title: "Factory & Quality — Our Interlining and Non-Woven Plant in Erode, India",
  description:
    "Tour the Krisons plant in Erode, Tamil Nadu: non-woven line, coating line, in-house testing laboratory, machinery and 2,000,000 meters a month of capacity. Book a live video walkthrough.",
  path: "/factory",
});

export default function FactoryPage() {
  const isEmbed = factoryVideo.src?.startsWith("http");
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Factory & quality"
        title="This is where your fabric is made."
        lead={tourIntro}
        aside={<Photo name="productionLine" priority aspect="16/11" sizes="(min-width: 1024px) 520px, 100vw" />}
      >
        <VideoCallButton location="factory_hero" className="btn btn-primary" />
        <ProfileDownload location="factory_hero" className="btn btn-ghost-light" />
      </PageHero>

      <section className="border-b border-line bg-card">
        <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
          {plantFacts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col-reverse border-line py-6 ${i % 2 ? "border-l pl-5" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <dt className="eyebrow mt-2 text-[0.6875rem] text-ink-600">{f.label}</dt>
              <dd className="num text-2xl font-medium tracking-tight sm:text-3xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- Video ---------- */}
      {factoryVideo.src ? (
        <Section eyebrow="Video" title={factoryVideo.title}>
          <div className="aspect-video overflow-hidden rounded-(--radius-card) bg-ink-900">
            {isEmbed ? (
              <iframe
                src={factoryVideo.src}
                title={factoryVideo.title}
                loading="lazy"
                allow="fullscreen; picture-in-picture"
                className="h-full w-full"
              />
            ) : (
              <video
                src={factoryVideo.src}
                poster={factoryVideo.poster ?? undefined}
                controls
                preload="none"
                playsInline
                className="h-full w-full"
              />
            )}
          </div>
        </Section>
      ) : (
        <PlaceholderOnly>
          <div className="container-x pt-12">
            <PlaceholderBlock id="factory-video" title="Factory video (60–90 seconds)" aspect="21/9" className="mx-auto max-w-4xl">
              Walk from the gate through the non-woven line, coating line, lab and finished rolls. Set
              <code> factoryVideo.src</code> in src/lib/data/factory.ts.
            </PlaceholderBlock>
          </div>
        </PlaceholderOnly>
      )}

      {/* ---------- Tour ---------- */}
      <Section id="tour" eyebrow="Plant tour" title="Five stops, in the order the fabric moves.">
        <ol className="space-y-16 sm:space-y-24">
          {tourStops.map((stop, i) => {
            const hasVisual = stop.images.length > 0 || (showPlaceholders && stop.wanted);
            return (
              <li key={stop.id} id={stop.id} className="reveal grid scroll-mt-24 grid-cols-1 gap-6 grid-cols-1 lg:grid-cols-12 lg:gap-10">
                <div className={`lg:col-span-4 ${i % 2 ? "lg:order-2" : ""}`}>
                  <span className="num text-5xl font-medium tracking-tight text-copper-700 sm:text-6xl">{stop.step}</span>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{stop.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink-600">{stop.text}</p>
                </div>
                {hasVisual && (
                  <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8">
                    {stop.images.map((name, j) => (
                      <Photo
                        key={name}
                        name={name}
                        caption
                        aspect={stop.images.length === 1 || j === 0 ? "16/10" : "16/10"}
                        sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                        className={stop.images.length === 1 && !(showPlaceholders && stop.wanted) ? "sm:col-span-2" : ""}
                      />
                    ))}
                    {stop.wanted && (
                      <WantedPhoto item={stop.wanted} className={stop.images.length % 2 === 0 ? "sm:col-span-2" : ""} />
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Section>

      {/* ---------- Video call ---------- */}
      <Section tone="ink">
        <div className="grid items-center gap-8 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-4 text-copper-400">Live walkthrough</p>
            <h2 className="text-h2 font-bold leading-[1.08] tracking-tight">{videoCallOffer.heading}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">{videoCallOffer.text}</p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <VideoCallButton location="factory_band" className="btn btn-primary" />
            <SamplesButton location="factory_band" className="btn btn-ghost-light" />
          </div>
        </div>
      </Section>

      {/* ---------- Machinery ---------- */}
      <Section id="machinery" tone="paper-2" eyebrow="Machinery and utilities" title="What is on the floor">
        <div className="relative overflow-x-auto rounded-(--radius-card) border border-line bg-card">
          <table className="spec-table">
            <caption className="sr-only">Machinery and utilities at the Erode plant</caption>
            <thead>
              <tr>
                <th scope="col">Equipment</th>
                <th scope="col">Used for</th>
              </tr>
            </thead>
            <tbody>
              {machinery.map((m) => (
                <tr key={m.name}>
                  <th scope="row" className="font-semibold">
                    {m.name}
                  </th>
                  <td className="text-ink-600">{m.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ---------- Quality ---------- */}
      <Section id="quality" eyebrow="Quality" title="Checked where it is made." lead={qualityIntro}>
        <div className="grid gap-3 sm:grid-cols-2">
          <Photo name="lab" caption aspect="16/9" sizes="(min-width: 640px) 50vw, 100vw" />
          <Photo name="labEquipment" caption aspect="16/9" sizes="(min-width: 640px) 50vw, 100vw" />
        </div>

        {(qcSteps.length > 0 || showPlaceholders) && (
          <div className="mt-14">
            <h3 className="eyebrow mb-5 text-ink-600">Quality control, step by step</h3>
            <QcProcess />
          </div>
        )}

        <div id="certifications" className="mt-14 scroll-mt-24">
          <h3 className="eyebrow mb-5 text-ink-600">
            {certifications.length > 0 || showPlaceholders ? "Certifications and compliance" : "Compliance"}
          </h3>
          <Certifications />
        </div>

        {(testReports.length > 0 || showPlaceholders) && (
          <div id="test-reports" className="mt-14 scroll-mt-24">
            <h3 className="eyebrow mb-5 text-ink-600">Test reports</h3>
            <TestReports />
          </div>
        )}

        <div className="mt-14">
          <ContextCta
            location="factory_quality_end"
            title="Ask for test data with your samples."
            text="Tell us the article and the properties that matter to you."
          />
        </div>
      </Section>

      <ClosingCta
        location="factory_final"
        title="Seen enough to try a sample?"
        lead="Tell us the product, weight and width. We will send samples."
      />
    </>
  );
}
