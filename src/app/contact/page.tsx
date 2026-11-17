import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import People from "@/components/People";
import ProfileDownload from "@/components/ProfileDownload";
import RequestPanel from "@/components/RequestPanel";
import Section from "@/components/Section";
import TrackedLink from "@/components/TrackedLink";
import { SamplesButton, VideoCallButton, WhatsAppButton } from "@/components/Cta";
import { siteConfig } from "@/lib/config";
import { videoCallOffer } from "@/lib/data/buying";
import { addresses, company } from "@/lib/data/company";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const crumbs = [{ href: "/contact", label: "Contact" }];

export const metadata = buildMetadata({
  title: "Contact — Talk to the Factory",
  description:
    "Contact Krisons Marketing, interlining and non-woven manufacturer in Erode, India. Request samples, message us on WhatsApp, book a video walkthrough of the plant, or call the proprietor and manager directly.",
  path: "/contact",
});

export default function ContactPage() {
  const { features } = siteConfig;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Contact"
        title="Talk to the people who make it."
        lead="Four ways to reach us. Pick whichever is easiest from where you are."
      />

      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex flex-col rounded-(--radius-card) border border-ink-900 bg-card p-6">
            <Icon name="file" className="h-7 w-7 text-copper-700" />
            <h2 className="mt-4 font-display text-xl font-bold">Request samples</h2>
            <p className="mt-2 flex-1 leading-relaxed text-ink-600">
              The quickest route to fabric in your hands. Two short steps.
            </p>
            <a href="#request" className="btn btn-primary btn-sm mt-5">
              Go to the form
            </a>
          </li>
          {features.whatsapp && (
            <li className="flex flex-col rounded-(--radius-card) border border-line bg-card p-6">
              <Icon name="whatsapp" className="h-7 w-7 text-whatsapp" />
              <h2 className="mt-4 font-display text-xl font-bold">WhatsApp</h2>
              <p className="mt-2 flex-1 leading-relaxed text-ink-600">
                Send a photo of your fabric or a quick question.
              </p>
              <WhatsAppButton location="contact_options" className="btn btn-whatsapp btn-sm mt-5" />
            </li>
          )}
          {features.videoCall && (
            <li className="flex flex-col rounded-(--radius-card) border border-line bg-card p-6">
              <Icon name="video" className="h-7 w-7 text-copper-700" />
              <h2 className="mt-4 font-display text-xl font-bold">Video walkthrough</h2>
              <p className="mt-2 flex-1 leading-relaxed text-ink-600">{videoCallOffer.text}</p>
              <VideoCallButton location="contact_options" className="btn btn-ghost-dark btn-sm mt-5" label="Book a call" />
            </li>
          )}
          <li className="flex flex-col rounded-(--radius-card) border border-line bg-card p-6">
            <Icon name="mail" className="h-7 w-7 text-copper-700" />
            <h2 className="mt-4 font-display text-xl font-bold">Email</h2>
            <p className="mt-2 flex-1 leading-relaxed text-ink-600">
              For tech packs, drawings and anything with attachments.
            </p>
            <TrackedLink
              href={`mailto:${company.email}`}
              event="contact_click"
              eventProps={{ method: "email", location: "contact_options" }}
              className="link mt-5 break-all"
            >
              {company.email}
            </TrackedLink>
          </li>
        </ul>
      </Section>

      <Section tone="paper-2" eyebrow="People" title="Call us directly">
        <People location="contact" />
      </Section>

      <Section id="request" eyebrow="Samples and quotes" title="Send a request">
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <RequestPanel />
          </div>
          <div className="lg:col-span-4">
            <p className="leading-relaxed text-ink-600">
              Prefer a full-page form? Product pages link to a pre-filled version.
            </p>
            <div className="mt-4 flex flex-col items-start gap-3">
              <SamplesButton location="contact_aside" className="btn btn-ghost-dark btn-sm" label="Open the request page" />
              <ProfileDownload location="contact_aside" className="btn btn-ghost-dark btn-sm" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="locations" tone="ink" eyebrow="Locations" title="Factory, head office, branch">
        <ul className="grid gap-8 md:grid-cols-3">
          {addresses.map((a) => (
            <li key={a.id} className="border-t border-white/25 pt-5">
              <p className="eyebrow text-[0.6875rem] text-copper-400">{a.role}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{a.title}</h3>
              <address className="mt-3 not-italic leading-relaxed text-ink-300">
                {a.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.lines.slice(1).join(" "))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link mt-3 inline-flex items-center gap-1.5 text-sm"
              >
                <Icon name="pin" className="h-4 w-4" />
                Open in Google Maps
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-ink-300">
          Visits to the Erode plant are arranged through the Chennai head office. Tell us when you plan to be in
          Tamil Nadu.
        </p>
      </Section>
    </>
  );
}
