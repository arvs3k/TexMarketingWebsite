import { useId } from "react";
import type { ProductFamily } from "@/lib/data/products";

/** Deterministic pseudo-random numbers so server and client render the same fibers. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function Fibers({ seed, count }: { seed: number; count: number }) {
  const r = rng(seed);
  const d: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = r() * 440 - 20;
    const y = r() * 340 - 20;
    const a = r() * Math.PI * 2;
    const len = 30 + r() * 70;
    const bend = (r() - 0.5) * 40;
    const x2 = x + Math.cos(a) * len;
    const y2 = y + Math.sin(a) * len;
    const cx = (x + x2) / 2 + Math.sin(a) * bend;
    const cy = (y + y2) / 2 - Math.cos(a) * bend;
    d.push(`M${x | 0} ${y | 0}Q${cx | 0} ${cy | 0} ${x2 | 0} ${y2 | 0}`);
  }
  return (
    <path
      d={d.join("")}
      fill="none"
      stroke="#fff"
      strokeOpacity="0.24"
      strokeWidth="0.8"
    />
  );
}

/**
 * Drawn material swatch, used wherever we have no photograph of a product yet.
 * An illustration of the construction, not a picture of the goods.
 */
export default function MaterialTile({
  pattern,
  className = "",
  label,
}: {
  pattern: ProductFamily["tile"];
  className?: string;
  label?: string;
}) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <div
      className={`relative overflow-hidden rounded-(--radius-card) bg-ink-800 ${className}`}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {pattern === "dots" && (
            <pattern
              id={`${id}d`}
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(30)"
            >
              <circle cx="6" cy="6" r="1.7" fill="#e08a52" fillOpacity="0.9" />
            </pattern>
          )}
          {pattern === "weave" && (
            <pattern
              id={`${id}w`}
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 2.500h5M5 7.500h5"
                stroke="#fff"
                strokeOpacity="0.34"
                strokeWidth="2.200"
              />
              <path
                d="M2.500 5v5M7.500 0v5"
                stroke="#fff"
                strokeOpacity="0.16"
                strokeWidth="2.200"
              />
            </pattern>
          )}
          {pattern === "grid" && (
            <pattern
              id={`${id}g`}
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0h22M0 0v22"
                stroke="#fff"
                strokeOpacity="0.14"
                strokeWidth="1"
              />
              <circle cx="11" cy="11" r="1.400" fill="#fff" fillOpacity="0.4" />
            </pattern>
          )}
          {pattern === "quilt" && (
            <pattern
              id={`${id}q`}
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path
                d="M0 0h56M0 0v56"
                stroke="#fff"
                strokeOpacity="0.3"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
            </pattern>
          )}
          <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.16" />
            <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {pattern === "dots" && (
          <>
            <Fibers seed={7} count={50} />
            <rect width="400" height="300" fill={`url(#${id}d)`} />
          </>
        )}
        {pattern === "web" && <Fibers seed={21} count={160} />}
        {pattern === "weave" && (
          <rect width="400" height="300" fill={`url(#${id}w)`} />
        )}
        {pattern === "coat" && (
          <>
            <Fibers seed={3} count={60} />
            <path d="M0 300 400 60V300Z" fill="#e08a52" fillOpacity="0.5" />
            <path d="M0 300 400 60" stroke="#e08a52" strokeWidth="1.500" />
          </>
        )}
        {pattern === "grid" && (
          <>
            <Fibers seed={11} count={70} />
            <rect width="400" height="300" fill={`url(#${id}g)`} />
          </>
        )}
        {pattern === "quilt" && (
          <rect
            x="-100"
            y="-100"
            width="600"
            height="500"
            fill={`url(#${id}q)`}
          />
        )}
        <rect width="400" height="300" fill={`url(#${id}s)`} />
      </svg>
      {label && (
        <span className="eyebrow absolute bottom-3 left-3 bg-ink-950/80 px-2 py-1 text-[0.625rem] text-ink-200">
          {label}
        </span>
      )}
    </div>
  );
}
