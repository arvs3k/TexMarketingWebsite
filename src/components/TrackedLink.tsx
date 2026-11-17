"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track, type AnalyticsEvent, type AnalyticsProps } from "@/lib/analytics";

/**
 * A link that fires one named analytics event on click.
 * Internal hrefs use next/link; external, mailto:, tel: and downloads use <a>.
 */
export default function TrackedLink({
  href,
  event,
  eventProps,
  children,
  className,
  download,
  newTab = false,
  ariaLabel,
}: {
  href: string;
  event: AnalyticsEvent;
  eventProps?: AnalyticsProps;
  children: ReactNode;
  className?: string;
  download?: string | boolean;
  newTab?: boolean;
  ariaLabel?: string;
}) {
  const onClick = () => track(event, eventProps);
  const internal = href.startsWith("/") && !download && !href.endsWith(".pdf");

  if (internal) {
    return (
      <Link href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      download={download}
      aria-label={ariaLabel}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
