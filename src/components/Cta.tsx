import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import TrackedLink from "@/components/TrackedLink";
import ProfileDownload from "@/components/ProfileDownload";
import { siteConfig } from "@/lib/config";
import { cta } from "@/lib/data/site";
import { requestHref } from "@/lib/links";
import { whatsappUrl } from "@/lib/whatsapp";

type RequestParams = Parameters<typeof requestHref>[0];

/** The primary action. `location` says where on the site it was clicked. */
export function SamplesButton({
  location,
  params,
  label = cta.samples,
  className = "btn btn-primary",
}: {
  location: string;
  params?: RequestParams;
  label?: string;
  className?: string;
}) {
  return (
    <TrackedLink
      href={requestHref(params)}
      event="sample_cta_click"
      eventProps={{ location, ...params }}
      className={className}
    >
      {label}
      <Icon name="arrow" />
    </TrackedLink>
  );
}

export function WhatsAppButton({
  location,
  message,
  label = cta.whatsapp,
  className = "btn btn-whatsapp",
}: {
  location: string;
  message?: string;
  label?: string;
  className?: string;
}) {
  if (!siteConfig.features.whatsapp) return null;
  return (
    <TrackedLink
      href={whatsappUrl(message)}
      event="whatsapp_click"
      eventProps={{ location }}
      className={className}
      newTab
    >
      <Icon name="whatsapp" />
      {label}
    </TrackedLink>
  );
}

export function VideoCallButton({
  location,
  className = "btn btn-ghost-dark",
  label = cta.videoCall,
}: {
  location: string;
  className?: string;
  label?: string;
}) {
  if (!siteConfig.features.videoCall) return null;
  return (
    <TrackedLink
      href={requestHref({ type: "video-call" })}
      event="video_call_cta_click"
      eventProps={{ location }}
      className={className}
    >
      <Icon name="video" />
      {label}
    </TrackedLink>
  );
}

/**
 * Contextual call to action placed at the end of product and application
 * sections. Inline, never a pop-up. Switch off with features.contextualCtas.
 */
export function ContextCta({
  location,
  title,
  text,
  params,
  whatsappMessage,
  children,
}: {
  location: string;
  title: string;
  text?: string;
  params?: RequestParams;
  whatsappMessage?: string;
  children?: ReactNode;
}) {
  if (!siteConfig.features.contextualCtas) return null;
  return (
    <aside
      aria-label={title}
      className="no-print relative overflow-hidden rounded-(--radius-card) border border-ink-900 bg-card"
    >
      <div aria-hidden className="microdot-ink absolute inset-y-0 right-0 hidden w-1/3 mask-l-from-0% md:block" />
      <div className="relative flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-xl font-bold leading-snug sm:text-2xl">{title}</p>
          {text && <p className="mt-2 text-ink-600">{text}</p>}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <SamplesButton location={location} params={params} label={cta.samplesShort} />
          <WhatsAppButton location={location} message={whatsappMessage} />
          {children}
        </div>
      </div>
    </aside>
  );
}

/** Dark closing band used at the bottom of most pages. */
export function ClosingCta({
  location,
  title,
  lead,
  params,
}: {
  location: string;
  title: string;
  lead: string;
  params?: RequestParams;
}) {
  return (
    <section className="on-ink no-print relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="microdot microdot-fade absolute inset-0" />
      <div className="container-x relative py-20 sm:py-28">
        <h2 className="max-w-3xl text-h1 font-bold leading-[1.05] tracking-tight">{title}</h2>
        <p className="mt-5 max-w-xl text-lg text-ink-300">{lead}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <SamplesButton location={location} params={params} />
          <WhatsAppButton location={location} />
          <ProfileDownload location={location} className="btn btn-ghost-light" />
        </div>
      </div>
    </section>
  );
}
