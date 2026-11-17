"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { track } from "@/lib/analytics";
import { cta } from "@/lib/data/site";

/**
 * Phone-only action bar: Request samples · WhatsApp.
 * mode "bar"   → sticky bottom bar (features.stickyMobileCta).
 * mode "float" → floating WhatsApp button only (bar off, WhatsApp on).
 * Hidden on the request form itself so it never covers the submit button.
 */
export default function MobileCtaBar({
  mode,
  whatsappHref,
}: {
  mode: "bar" | "float";
  whatsappHref: string | null;
}) {
  const pathname = usePathname();
  if (pathname.startsWith("/request-samples")) return null;

  if (mode === "float") {
    if (!whatsappHref) return null;
    return (
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { location: "mobile_float" })}
        aria-label={cta.whatsapp}
        className="mobile-cta-bar fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg lg:hidden"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
    );
  }

  return (
    <div className="mobile-cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <div className="flex gap-2">
        <Link
          href="/request-samples"
          onClick={() => track("sample_cta_click", { location: "mobile_bar" })}
          className="btn btn-primary flex-1"
        >
          {cta.samplesShort}
        </Link>
        {whatsappHref && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { location: "mobile_bar" })}
            className="btn btn-whatsapp flex-1"
          >
            <Icon name="whatsapp" />
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
