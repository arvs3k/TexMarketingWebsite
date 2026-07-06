import type { ReactNode } from "react";

interface SpecTableProps {
  caption?: string;
  headers: readonly string[];
  rows: readonly (readonly ReactNode[])[];
  footnote?: string;
}

export default function SpecTable({
  caption,
  headers,
  rows,
  footnote,
}: SpecTableProps) {
  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-ink-900/10 bg-white shadow-sm">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="bg-ink-900 text-white">
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-t border-ink-900/10 even:bg-paper-dark/60"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 ${j === 0 ? "font-semibold text-ink-900" : "text-ink-700"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && <p className="mt-3 text-sm text-ink-500">{footnote}</p>}
    </div>
  );
}
