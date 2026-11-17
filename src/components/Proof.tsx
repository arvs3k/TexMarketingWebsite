import Icon from "@/components/Icon";
import { PlaceholderBlock, PlaceholderInline } from "@/components/Placeholder";
import {
  certificationSlots,
  certifications,
  complianceNote,
  qcStepSlots,
  qcSteps,
  testReportSlots,
  testReports,
} from "@/lib/data/factory";
import type { TestValue } from "@/lib/data/products";
import { showPlaceholders } from "@/lib/placeholders";

/** Certificate badges. Empty slots show only as placeholders. */
export function Certifications({ compact = false }: { compact?: boolean }) {
  const hasReal = certifications.length > 0;
  if (!hasReal && !showPlaceholders) {
    return <p className="max-w-2xl leading-relaxed text-ink-600">{complianceNote}</p>;
  }
  return (
    <div>
      <ul className={`grid gap-4 ${compact ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 lg:grid-cols-4"}`}>
        {certifications.map((c) => (
          <li key={c.name} className="rounded-(--radius-card) border border-line bg-card p-5">
            <p className="font-display text-lg font-bold leading-tight">{c.name}</p>
            <p className="mt-1 text-sm text-ink-600">{c.issuer}</p>
            {(c.number || c.validUntil) && (
              <p className="num mt-3 text-xs text-ink-600">
                {c.number}
                {c.number && c.validUntil ? " · " : ""}
                {c.validUntil && `valid to ${c.validUntil}`}
              </p>
            )}
            {c.file && (
              <a href={c.file} className="link mt-3 inline-flex items-center gap-1.5 text-sm">
                <Icon name="download" className="h-4 w-4" />
                Certificate (PDF)
              </a>
            )}
          </li>
        ))}
        {!hasReal &&
          Array.from({ length: certificationSlots }, (_, i) => (
            <li key={i}>
              <PlaceholderBlock id="certifications" title={`Certificate ${i + 1}`} className="h-full min-h-36">
                Name, issuer, number, validity, badge and PDF.
              </PlaceholderBlock>
            </li>
          ))}
      </ul>
      <p className="mt-5 max-w-2xl leading-relaxed text-ink-600">{complianceNote}</p>
    </div>
  );
}

/** Downloadable test reports. */
export function TestReports() {
  if (testReports.length === 0 && !showPlaceholders) return null;
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {testReports.map((r) => (
        <li key={r.file}>
          <a
            href={r.file}
            className="group flex h-full gap-4 rounded-(--radius-card) border border-line bg-card p-5 transition-colors hover:border-ink-900"
          >
            <Icon name="file" className="h-8 w-8 shrink-0 text-copper-700" />
            <span>
              <span className="block font-semibold leading-snug">{r.title}</span>
              <span className="num mt-1 block text-xs text-ink-600">
                {r.article ? `Art. ${r.article} · ` : ""}
                {r.lab} · {r.date}
              </span>
            </span>
          </a>
        </li>
      ))}
      {testReports.length === 0 &&
        Array.from({ length: testReportSlots }, (_, i) => (
          <li key={i}>
            <PlaceholderBlock id="test-reports" title={`Test report ${i + 1} (PDF)`} className="h-full">
              Title, article, lab, date.
            </PlaceholderBlock>
          </li>
        ))}
    </ul>
  );
}

/** QC process in steps. */
export function QcProcess() {
  if (qcSteps.length === 0 && !showPlaceholders) return null;
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {qcSteps.map((s, i) => (
        <li key={s.title} className="rounded-(--radius-card) border border-line bg-card p-5">
          <span className="num text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-2 font-display text-lg font-bold">{s.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.text}</p>
        </li>
      ))}
      {qcSteps.length === 0 &&
        Array.from({ length: qcStepSlots }, (_, i) => (
          <li key={i}>
            <PlaceholderBlock id="qc-process" title={`QC step ${i + 1}`} className="h-full min-h-36">
              What is checked, when, and by whom.
            </PlaceholderBlock>
          </li>
        ))}
    </ol>
  );
}

/** Lab values for one product. Rows without a real value show only as placeholders. */
export function TestValues({ id, values }: { id: string; values: TestValue[] }) {
  const real = values.filter((v) => v.value !== null);
  const rows = showPlaceholders ? values : real;
  if (rows.length === 0) return null;
  return (
    <div className="relative overflow-x-auto">
      <table className="spec-table">
        <caption className="sr-only">Laboratory test values</caption>
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Test method</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((v) => (
            <tr key={v.property}>
              <th scope="row" className="font-semibold">
                {v.property}
              </th>
              <td>{v.method ?? <PlaceholderInline id={id}>TODO: method</PlaceholderInline>}</td>
              <td className="num">{v.value ?? <PlaceholderInline id={id}>TODO: real value</PlaceholderInline>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
