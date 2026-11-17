import Link from "next/link";
import Icon from "@/components/Icon";
import LayerDiagram from "@/components/LayerDiagram";
import Photo from "@/components/Photo";
import ProductCard from "@/components/ProductCard";
import ProfileDownload from "@/components/ProfileDownload";
import Section from "@/components/Section";
import { ClosingCta, SamplesButton, VideoCallButton } from "@/components/Cta";
import { Certifications } from "@/components/Proof";
import { applicationCategories } from "@/lib/data/applications";
import { buyingStepsShort } from "@/lib/data/buying";
import { headlineStats, proofPoints } from "@/lib/data/company";
import { microdotArticles, productFamilies, FUSIBLE_WIDTHS_CM } from "@/lib/data/products";
import { home } from "@/lib/data/site";
import { buildMetadata } from "@/lib/metadata";
import { ozPerSqYd } from "@/lib/units";

export const metadata = buildMetadata({
  title: "Krisons Marketing — Fusible Interlining & Non-Woven Fabric Manufacturer, India",
  description:
    "We manufacture fusible interlining and thermal bond non-woven fabric in our own plant in Erode, India. Established 1992. 2,000,000 meters a month. In-house laboratory. Request free samples.",
  path: "/",
  absoluteTitle: true,
});

const sampleArticle = microdotArticles[4];

export default function HomePage() {
  const { hero } = home;
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="on-ink relative overflow-hidden bg-ink-950 text-white">
        <div aria-hidden className="microdot microdot-fade absolute inset-0" />
        <div className="container-x relative grid gap-10 pb-12 pt-12 sm:pt-16 grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-7 lg:pr-6">
            <p className="eyebrow mb-5 text-copper-400">{hero.eyebrow}</p>
            <h1 className="text-display font-extrabold leading-[0.98] tracking-[-0.02em]">
              {hero.titleLead}{" "}
              <span className="mt-1 block font-serif text-[1.06em] font-normal italic leading-[1.02] tracking-normal text-copper-400">
                {hero.titleAccent}
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200 sm:text-xl">{hero.lead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <SamplesButton location="home_hero" />
              <ProfileDownload location="home_hero" className="btn btn-ghost-light" />
            </div>
          </div>

          <div className="hero-rise-2 lg:col-span-5">
            <div className="relative">
              <Photo
                name="productionLine"
                priority
                aspect="16/11"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
              <p className="eyebrow absolute left-3 top-3 flex items-center gap-2 bg-ink-950/85 px-2.5 py-1.5 text-[0.6875rem] text-white">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                {hero.photoCaption}
              </p>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-3">
              <Photo name="microdotBlue" aspect="1/1" sizes="200px" className="col-span-2" />
              <div className="col-span-3 flex flex-col justify-between rounded-(--radius-card) border border-white/15 bg-ink-900 p-4">
                <p className="eyebrow text-[0.625rem] text-ink-300">Fusible interlining · one of 13</p>
                <dl className="num mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                  <dt className="text-ink-300">Art.</dt>
                  <dd>{sampleArticle.article}</dd>
                  <dt className="text-ink-300">Weight</dt>
                  <dd>
                    {sampleArticle.gsm} GSM · {ozPerSqYd(sampleArticle.gsm)} oz/yd²
                  </dd>
                  <dt className="text-ink-300">Width</dt>
                  <dd>{FUSIBLE_WIDTHS_CM.join(" / ")} cm</dd>
                  <dt className="text-ink-300">Dot</dt>
                  <dd>PES / PA</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
            {headlineStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse py-6 lg:py-8 ${i % 2 ? "pl-5" : "pr-5"} ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${i % 2 ? "border-l border-white/10" : ""} ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}
              >
                <dt className="eyebrow mt-2 text-[0.6875rem] text-ink-300">{s.label}</dt>
                <dd className="num text-3xl font-medium tracking-tight sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Proof of factory ---------- */}
      <Section eyebrow={home.proof.eyebrow} title={home.proof.title} lead={home.proof.lead}>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-12">
          <div className="reveal grid grid-cols-6 gap-3 lg:col-span-7">
            <Photo name="productionFloor" caption aspect="16/9" sizes="(min-width: 1024px) 720px, 100vw" className="col-span-6" />
            <Photo name="lab" caption aspect="4/3" sizes="(min-width: 1024px) 360px, 50vw" className="col-span-3" />
            <Photo name="plantExterior" caption aspect="4/3" sizes="(min-width: 1024px) 360px, 50vw" className="col-span-3" />
          </div>
          <ul className="lg:col-span-5">
            {proofPoints.map((p, i) => (
              <li key={p.title} className="border-t border-ink-900 py-6 last:border-b">
                <div className="flex gap-5">
                  <span className="num pt-1 text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold leading-snug">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-600">{p.description}</p>
                    <Link href={p.href} className="link mt-3 inline-flex items-center gap-1.5 text-sm">
                      {p.link}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- Product range ---------- */}
      <Section
        tone="paper-2"
        eyebrow={home.range.eyebrow}
        title={home.range.title}
        aside={
          <Link href="/products" className="link inline-flex items-center gap-1.5">
            Compare all products
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        }
      >
        <ul className="reveal-row grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((p, i) => (
            <li key={p.slug}>
              <ProductCard product={p} index={i} />
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- How interlining works ---------- */}
      <Section tone="ink" eyebrow={home.layers.eyebrow} title={home.layers.title} lead={home.layers.lead}>
        <div className="grid items-center gap-10 grid-cols-1 lg:grid-cols-12">
          <LayerDiagram className="mx-auto w-full max-w-xl lg:col-span-7" />
          <ol className="lg:col-span-5">
            {home.layers.layers.map((l, i) => (
              <li key={l.name} className="flex gap-5 border-t border-white/15 py-5 last:border-b">
                <span className="num pt-1 text-sm text-copper-400">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-display text-xl font-bold">{l.name}</p>
                  <p className="num mt-1 text-sm text-ink-300">{l.note}</p>
                </div>
              </li>
            ))}
            <li className="pt-6">
              <Link href="/products/fusible-interlining" className="link inline-flex items-center gap-1.5">
                See all 13 fusible articles
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </li>
          </ol>
        </div>
      </Section>

      {/* ---------- Applications ---------- */}
      <Section eyebrow={home.applications.eyebrow} title={home.applications.title}>
        <ul className="border-t border-ink-900">
          {applicationCategories.map((a, i) => (
            <li key={a.slug} className="border-b border-line">
              <Link
                href={`/applications/${a.slug}`}
                className="group grid gap-2 py-6 transition-colors hover:bg-card sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-3"
              >
                <span className="num text-sm text-copper-700 sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl font-bold sm:col-span-4 sm:text-3xl">{a.title}</h3>
                <p className="leading-relaxed text-ink-600 sm:col-span-6">{a.intro}</p>
                <Icon
                  name="arrow"
                  className="hidden h-6 w-6 justify-self-end transition-transform duration-300 group-hover:translate-x-1 sm:col-span-1 sm:block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- How ordering works ---------- */}
      <Section
        tone="paper-2"
        eyebrow={home.process.eyebrow}
        title={home.process.title}
        aside={
          <Link href="/how-to-buy" className="link inline-flex items-center gap-1.5">
            How to buy, in full
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        }
      >
        <ol className="reveal-row grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {buyingStepsShort.map((s) => (
            <li key={s.title} className="border-t-2 border-ink-900 pt-5">
              <span className="num text-sm text-copper-700">{s.step}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------- Quality you can check ---------- */}
      <Section eyebrow={home.assurance.eyebrow} title={home.assurance.title} lead={home.assurance.lead}>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-12">
          <div className="grid grid-cols-2 gap-3 lg:col-span-5">
            <Photo name="labEquipment" caption aspect="4/3" sizes="(min-width: 1024px) 260px, 50vw" />
            <Photo name="rollsWhite" caption aspect="4/3" sizes="(min-width: 1024px) 260px, 50vw" />
          </div>
          <div className="lg:col-span-7">
            <h3 className="eyebrow mb-4 text-ink-600">Certifications and compliance</h3>
            <Certifications compact />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/factory#quality" className="btn btn-ghost-dark">
                Factory &amp; quality
                <Icon name="arrow" />
              </Link>
              <VideoCallButton location="home_assurance" />
            </div>
          </div>
        </div>
      </Section>

      <ClosingCta location="home_final" title={home.finalCta.title} lead={home.finalCta.lead} />
    </>
  );
}
