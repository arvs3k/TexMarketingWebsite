"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/fusing-guide", label: "Fusing Guide" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          KRISONS<span className="text-copper-600"> MARKETING</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-white ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium ${
                pathname === href
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
