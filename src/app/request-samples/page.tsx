import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProfileDownload from "@/components/ProfileDownload";
import RequestPanel from "@/components/RequestPanel";
import TrackedLink from "@/components/TrackedLink";
import { WhatsAppButton } from "@/components/Cta";
import { siteConfig } from "@/lib/config";
import { buyingSteps } from "@/lib/data/buying";
import { company, contacts } from "@/lib/data/company";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const crumbs = [{ href: "/request-samples", label: "Request samples" }];

export const metadata = buildMetadata({
  title: "Request Samples or a Quote — Interlining & Non-Woven Fabric",
  description:
    "Request free samples or a quotation for fusible interlining, thermal bond non-woven, woven interlining, coated fabric or geo-textile from Krisons, manufacturer in Erode, India.",
  path: "/request-samples",
});

export default function RequestSamplesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        compact
        crumbs={crumbs}
        eyebrow="Samples · Quotes · Video walkthrough"
        title="Tell us what you need."
        lead="Two short steps. The more you tell us about weight, width and end use, the better the first reply."
      />
      <section className="bg-paper py-10 sm:py-16">
        <div className="container-x grid gap-10 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <RequestPanel />
          </div>
          <aside className="space-y-8 lg:col-span-4">
            <div>
              <h2 className="eyebrow mb-4 text-ink-600">What happens next</h2>
              <ol>
                {buyingSteps.slice(1, 4).map((s, i) => (
                  <li key={s.title} className="flex gap-4 border-t border-line py-4">
                    <span className="num text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-(--radius-card) border border-line bg-card p-5">
              <h2 className="eyebrow mb-3 text-ink-600">Prefer to talk?</h2>
              <ul className="space-y-2.5">
                <li>
                  <TrackedLink
                    href={`mailto:${company.email}`}
                    event="contact_click"
                    eventProps={{ method: "email", location: "request_aside" }}
                    className="link inline-flex items-center gap-2 break-all"
                  >
                    <Icon name="mail" className="h-4 w-4 shrink-0" />
                    {company.email}
                  </TrackedLink>
                </li>
                {contacts.map((c) => (
                  <li key={c.name} className="flex items-center gap-2">
                    <Icon name="phone" className="h-4 w-4 shrink-0 text-ink-600" />
                    <span>
                      <TrackedLink
                        href={`tel:${c.phone.replace(/\s/g, "")}`}
                        event="contact_click"
                        eventProps={{ method: "phone", location: "request_aside" }}
                        className="num font-medium underline-offset-4 hover:underline"
                      >
                        {c.phone}
                      </TrackedLink>{" "}
                      <span className="text-sm text-ink-600">
                        {c.name}, {c.role}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              {siteConfig.features.whatsapp && (
                <div className="mt-4">
                  <WhatsAppButton location="request_aside" className="btn btn-whatsapp btn-sm w-full" />
                </div>
              )}
            </div>
            <div>
              <p className="mb-3 text-sm leading-relaxed text-ink-600">
                Need something for your supplier file first?
              </p>
              <ProfileDownload location="request_aside" className="btn btn-ghost-dark btn-sm" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
