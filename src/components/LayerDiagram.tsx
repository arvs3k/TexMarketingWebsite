/**
 * Exploded cross-section of a fused garment panel: shell fabric, adhesive dots,
 * non-woven base. The layers separate as the diagram scrolls into view
 * (CSS scroll-driven animation; static where unsupported or with reduced motion).
 */

const W = 190; // half-width of each layer
const H = 62; // half-height (isometric squash)

function rhombus(cy: number): string {
  return `260,${cy - H} ${260 + W},${cy} 260,${cy + H} ${260 - W},${cy}`;
}

function edge(cy: number, t: number): string {
  // The two visible side faces as one path.
  return `M${260 - W},${cy} L260,${cy + H} L${260 + W},${cy} v${t} L260,${cy + H + t} L${260 - W},${cy + t}Z`;
}

export default function LayerDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 440"
      className={className}
      role="img"
      aria-label="Exploded diagram of a fused garment panel: shell fabric on top, a layer of adhesive dots in the middle, and the non-woven interlining base underneath."
    >
      <defs>
        <pattern id="layer-dots" width="0.08" height="0.08" patternUnits="userSpaceOnUse">
          <circle cx="0.04" cy="0.04" r="0.013" fill="#e08a52" />
        </pattern>
      </defs>

      {/* 3 — non-woven base */}
      <g className="layer-bottom">
        <path d={edge(318, 12)} fill="#8f8a7e" />
        <polygon points={rhombus(318)} fill="#efeae0" />
        <g stroke="#111a27" strokeOpacity="0.2" strokeWidth="0.8" fill="none">
          <path d="M120 318q60-30 130-8t150-6M150 332q50-22 100-4t120-20M200 290q40 10 80-4t80 12M180 348q60-14 90 0t70-10M230 276q30 18 60 8M140 306q70 20 120 2t100 14" />
        </g>
        <text x="452" y="356" className="num" fontSize="13" fill="#a9b4c2">
          03
        </text>
      </g>

      {/* 2 — adhesive dots */}
      <g>
        <polygon points={rhombus(214)} fill="#e08a52" fillOpacity="0.07" stroke="#e08a52" strokeOpacity="0.45" strokeDasharray="3 4" />
        {/* A square dot grid, sheared into the same isometric plane as the layers. */}
        <rect x="-0.48" y="-0.48" width="0.96" height="0.96" fill="url(#layer-dots)" transform={`matrix(${W} ${H} ${-W} ${H} 260 214)`} />
        <text x="452" y="252" className="num" fontSize="13" fill="#a9b4c2">
          02
        </text>
      </g>

      {/* 1 — shell fabric */}
      <g className="layer-top">
        <path d={edge(110, 9)} fill="#16202e" stroke="#43546b" />
        <polygon points={rhombus(110)} fill="#2a394e" stroke="#5b6b80" />
        <g stroke="#a9b4c2" strokeOpacity="0.28" strokeWidth="1">
          {Array.from({ length: 11 }, (_, i) => {
            const t = (i + 1) / 12;
            return (
              <g key={i}>
                <line x1={260 - W + t * W} y1={110 - t * H} x2={260 + t * W} y2={110 + H - t * H} />
                <line x1={260 - W + t * W} y1={110 + t * H} x2={260 + t * W} y2={110 - H + t * H} />
              </g>
            );
          })}
        </g>
        <text x="452" y="148" className="num" fontSize="13" fill="#a9b4c2">
          01
        </text>
      </g>
    </svg>
  );
}
