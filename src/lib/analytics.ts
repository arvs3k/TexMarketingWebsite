/**
 * Analytics seam. No vendor is installed; nothing leaves the browser.
 *
 * Every call:
 *   1. pushes `{ event, ...props }` onto `window.dataLayer` (GTM / GA4 pick this up as-is),
 *   2. dispatches a `km:analytics` CustomEvent on `window` (for Plausible, PostHog, etc.),
 *   3. logs to the console in development.
 *
 * To plug in a tool later, either load its snippet (if it reads dataLayer) or
 * add one listener:  window.addEventListener("km:analytics", (e) => tool.track(e.detail.event, e.detail))
 */

export type AnalyticsEvent =
  | "rfq_start"
  | "rfq_step"
  | "rfq_submit"
  | "rfq_handoff"
  | "profile_download"
  | "whatsapp_click"
  | "sample_cta_click"
  | "video_call_cta_click"
  | "spec_sheet_print"
  | "contact_click";

export type AnalyticsProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: AnalyticsEvent, props: AnalyticsProps = {}): void {
  if (typeof window === "undefined") return;
  const payload = { event, ...props };
  try {
    (window.dataLayer ||= []).push(payload);
    window.dispatchEvent(new CustomEvent("km:analytics", { detail: payload }));
    if (process.env.NODE_ENV !== "production") {
      console.debug("[analytics]", payload);
    }
  } catch {
    // Analytics must never break the page.
  }
}
