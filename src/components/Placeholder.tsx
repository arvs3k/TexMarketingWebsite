import type { ReactNode } from "react";
import { showPlaceholders } from "@/lib/placeholders";

/**
 * A slot for content the business still has to supply.
 * Renders in development and on preview deployments only (see lib/placeholders.ts).
 * `id` matches a CONTENT-TODO(id) tag in the source and a row in CONTENT-TODO.md.
 */
export function PlaceholderBlock({
  id,
  title,
  children,
  className = "",
  aspect,
}: {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
  aspect?: string;
}) {
  if (!showPlaceholders) return null;
  return (
    <div
      className={`ph flex flex-col justify-between gap-3 p-4 ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
      data-placeholder={id}
    >
      <div>
        <span className="ph-tag">Placeholder · not on live site</span>
        <p className="mt-2 font-semibold leading-snug">{title}</p>
        {children && <div className="mt-1 text-sm leading-relaxed text-ink-700">{children}</div>}
      </div>
      <p className="num text-[0.6875rem] text-ink-600">CONTENT-TODO({id})</p>
    </div>
  );
}

/** Inline marker for a single missing value inside a sentence or table cell. */
export function PlaceholderInline({ id, children }: { id: string; children: ReactNode }) {
  if (!showPlaceholders) return null;
  return (
    <span className="ph-inline" data-placeholder={id} title={`CONTENT-TODO(${id})`}>
      {children}
    </span>
  );
}

/** Wrapper that hides a whole section unless placeholders are being shown. */
export function PlaceholderOnly({ children }: { children: ReactNode }) {
  return showPlaceholders ? <>{children}</> : null;
}
