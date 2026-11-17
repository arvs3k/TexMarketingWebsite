"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";
import { cta, primaryNav } from "@/lib/data/site";

export default function SiteHeader({
  whatsappHref,
  hideCtaOnMobile,
}: {
  whatsappHref: string | null;
  /** True when the sticky mobile bar already carries the primary action. */
  hideCtaOnMobile: boolean;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header on-ink sticky top-0 z-50 border-b border-white/10 bg-ink-950/95 text-white backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-3"
          aria-label={`${siteConfig.legalName} — home`}
        >
          <span className="font-display text-xl font-extrabold tracking-[0.08em]">
            KRISONS
          </span>
          <span className="eyebrow hidden border-l border-white/25 pl-3 text-[0.625rem] text-ink-300 sm:inline lg:hidden xl:inline">
            {siteConfig.descriptor}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded px-2.5 py-2 text-[0.9375rem] font-medium transition-colors ${
                    isActive(href) ? "text-white" : "text-ink-300 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive(href) && (
                    <span aria-hidden className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-copper-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "header" })}
              className="hidden h-10 w-10 items-center justify-center rounded text-ink-300 transition-colors hover:bg-white/10 hover:text-white lg:inline-flex"
              aria-label={cta.whatsapp}
            >
              <Icon name="whatsapp" />
            </a>
          )}
          <Link
            href="/request-samples"
            onClick={() => {
              setOpen(false);
              track("sample_cta_click", { location: "header" });
            }}
            className={`btn btn-primary btn-sm whitespace-nowrap ${hideCtaOnMobile ? "hidden lg:inline-flex" : ""}`}
          >
            {cta.samplesShort}
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x py-4">
          <p className="eyebrow pb-3 text-ink-300">{siteConfig.descriptor}</p>
          <ul>
            {primaryNav.map(({ href, label }) => (
              <li key={href} className="border-t border-white/10">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`flex items-center justify-between py-4 font-display text-xl font-semibold ${
                    isActive(href) ? "text-copper-400" : "text-white"
                  }`}
                >
                  {label}
                  <Icon name="arrow" className="h-5 w-5 text-ink-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
