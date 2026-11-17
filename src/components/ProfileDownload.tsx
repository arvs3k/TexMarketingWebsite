"use client";

import { useId, useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";
import { cta } from "@/lib/data/site";

const { profilePdf, features, web3formsKey } = siteConfig;

/**
 * Company profile download.
 * features.profileEmailGate = false → a plain download link (default).
 * features.profileEmailGate = true  → asks for an email first, sends it to
 * Web3Forms, then downloads. If no form key is configured the gate is skipped,
 * so the download can never be blocked by a missing key.
 */
export default function ProfileDownload({
  location,
  className = "btn btn-ghost-dark",
  label = cta.profile,
}: {
  location: string;
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const id = useId();
  const gated = features.profileEmailGate && Boolean(web3formsKey);

  const content = (
    <>
      <Icon name="download" />
      <span>
        {label} <span className="whitespace-nowrap font-normal opacity-75">({profilePdf.sizeLabel})</span>
      </span>
    </>
  );

  function startDownload() {
    const a = document.createElement("a");
    a.href = profilePdf.href;
    a.download = profilePdf.fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  if (!gated) {
    return (
      <a
        href={profilePdf.href}
        download={profilePdf.fileName}
        className={className}
        onClick={() => track("profile_download", { location, gated: false })}
      >
        {content}
      </a>
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("botcheck")) return;
    setBusy(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: "Company profile downloaded",
          from_name: "Krisons website",
          email: data.get("email"),
          company: data.get("company"),
          location,
        }),
      });
    } catch {
      // The download must not depend on the lead capture succeeding.
    }
    track("profile_download", { location, gated: true });
    startDownload();
    setBusy(false);
    setOpen(false);
  }

  return (
    <div className="inline-flex flex-col gap-3">
      <button
        type="button"
        className={className}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {content}
      </button>
      {open && (
        <form
          id={id}
          onSubmit={onSubmit}
          className="flex flex-col gap-3 rounded-(--radius-card) border border-line bg-card p-4 text-ink-900"
        >
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <label className="text-sm font-semibold" htmlFor={`${id}-email`}>
            Work email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="min-h-11 rounded-(--radius-card) border border-ink-500 bg-white px-3"
          />
          <label className="text-sm font-semibold" htmlFor={`${id}-company`}>
            Company <span className="font-normal text-ink-600">(optional)</span>
          </label>
          <input
            id={`${id}-company`}
            name="company"
            autoComplete="organization"
            className="min-h-11 rounded-(--radius-card) border border-ink-500 bg-white px-3"
          />
          <button type="submit" className="btn btn-primary btn-sm" disabled={busy}>
            {busy ? "Preparing…" : "Send and download"}
          </button>
        </form>
      )}
    </div>
  );
}
