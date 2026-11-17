"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "@/components/Icon";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";
import { contacts } from "@/lib/data/company";
import {
  adhesiveOptions,
  articleOptions,
  endUseOptions,
  fusibleColors,
  homeTextileOptions,
  intents,
  productOptions,
  quantityUnits,
  rfqCopy,
  thermalBondColors,
  widthOptions,
  type Intent,
} from "@/lib/data/rfq";

const { web3formsKey, features } = siteConfig;

type Values = {
  intent: Intent;
  product: string;
  article: string;
  item: string;
  gsm: string;
  width: string;
  color: string;
  adhesive: string;
  spec: string;
  quantity: string;
  unit: string;
  endUse: string;
  preferredTime: string;
  timeZone: string;
  topics: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  techPackLink: string;
  message: string;
};

const empty: Values = {
  intent: "samples",
  product: "",
  article: "",
  item: "",
  gsm: "",
  width: "",
  color: "",
  adhesive: "",
  spec: "",
  quantity: "",
  unit: "meters",
  endUse: "",
  preferredTime: "",
  timeZone: "",
  topics: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  techPackLink: "",
  message: "",
};

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "sent" | "handoff";

const inputClass =
  "block w-full min-h-12 rounded-(--radius-card) border border-ink-500 bg-white px-3.5 py-2.5 text-base text-ink-900 placeholder:text-ink-500 aria-[invalid=true]:border-2 aria-[invalid=true]:border-[#b3261e]";

/* ---------- small field helpers ---------- */

function Field({
  id,
  label,
  optional,
  hint,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
        {optional && <span className="ml-1.5 font-normal text-ink-600">optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-ink-600">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-[#b3261e]">
          {error}
        </p>
      )}
    </div>
  );
}

function describedBy(id: string, hint?: string, error?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined;
}

const label = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value;

/** Plain-text summary used for the email body, WhatsApp message and Web3Forms payload. */
function summarize(v: Values): [string, string][] {
  const rows: [string, string][] = [["Request", label(intents.map((i) => ({ value: i.id, label: i.label })), v.intent)]];
  const add = (k: string, val: string) => val.trim() && rows.push([k, val.trim()]);
  if (v.intent === "video-call") {
    add("Preferred days / times", v.preferredTime);
    add("Time zone", v.timeZone);
    add("Wants to see / discuss", v.topics);
    add("Product interest", v.product ? label(productOptions, v.product) : "");
  } else {
    add("Product", v.product ? label(productOptions, v.product) : "");
    add("Article", v.article);
    add("Item", v.item);
    add("Weight (GSM)", v.gsm);
    add("Width", v.width);
    add("Color", v.color);
    add("Adhesive / coating", v.adhesive);
    add("Specification", v.spec);
    add("Estimated quantity", v.quantity ? `${v.quantity} ${v.unit}` : "");
    add("End use", v.endUse ? label(endUseOptions, v.endUse) : "");
  }
  add("Destination country", v.country);
  add("Company", v.company);
  add("Name", v.name);
  add("Email", v.email);
  add("Phone / WhatsApp", v.phone);
  add("Tech pack / spec link", v.techPackLink);
  add("Notes", v.message);
  return rows;
}

export default function RfqForm({
  whatsappNumber,
  showPlaceholders,
}: {
  whatsappNumber: string;
  showPlaceholders: boolean;
}) {
  const params = useSearchParams();
  const [v, setV] = useState<Values>(empty);
  const [step, setStep] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failed, setFailed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const mountedAt = useRef(0);
  const started = useRef(false);

  // Pre-fill from the link the buyer clicked (?product=…&article=…&type=…&application=…).
  useEffect(() => {
    mountedAt.current = Date.now();
    const product = params.get("product") ?? "";
    const article = params.get("article") ?? "";
    const type = params.get("type");
    const application = params.get("application") ?? "";
    let timeZone = "";
    try {
      timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    } catch {}
    setV((cur) => ({
      ...cur,
      product: productOptions.some((p) => p.value === product) ? product : cur.product,
      article: articleOptions.some((a) => a.value === article) ? article : cur.article,
      intent: type === "video-call" && features.videoCall ? "video-call" : type === "quote" ? "quote" : cur.intent,
      endUse: endUseOptions.some((e) => e.value === application) ? application : cur.endUse,
      timeZone,
    }));
  }, [params]);

  // Move focus to the result heading so screen-reader and keyboard users land on it.
  useEffect(() => {
    if (status === "sent" || status === "handoff") headingRef.current?.focus();
  }, [status]);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    if (!started.current) {
      started.current = true;
      track("rfq_start", { intent: v.intent, product: v.product || undefined });
    }
    setV((cur) => ({ ...cur, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const isVideo = v.intent === "video-call";
  const availableIntents = intents.filter((i) => i.id !== "video-call" || features.videoCall);
  const colors = v.product === "fusible-interlining" ? fusibleColors : thermalBondColors;
  const hasCatalogSpecs = v.product === "fusible-interlining" || v.product === "thermal-bond-non-woven";
  const isMadeToSpec = ["woven-interlining", "coated-fabric", "geo-textile", "not-sure"].includes(v.product);

  function validate(which: 1 | 2): Errors {
    const e: Errors = {};
    if (which === 1) {
      if (!isVideo && !v.product) e.product = "Choose a product, or “Not sure yet”.";
      if (v.gsm && (Number.isNaN(Number(v.gsm)) || Number(v.gsm) <= 0)) e.gsm = "Enter the weight as a number, for example 40.";
      if (v.quantity && (Number.isNaN(Number(v.quantity)) || Number(v.quantity) <= 0))
        e.quantity = "Enter the quantity as a number, for example 5000.";
    } else {
      if (!v.name.trim()) e.name = "Enter your name.";
      if (!v.company.trim()) e.company = "Enter your company name.";
      if (!v.email.trim()) e.email = "Enter your work email so we can reply.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Check the email address — it should look like name@company.com.";
      if (!v.country.trim()) e.country = "Enter the country the goods would ship to.";
      if (v.techPackLink && !/^https?:\/\/\S+\.\S+/.test(v.techPackLink.trim()))
        e.techPackLink = "Paste a full link starting with https://";
    }
    return e;
  }

  function focusFirstError(e: Errors) {
    const first = Object.keys(e)[0];
    if (first) requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`#rfq-${first}`)?.focus());
  }

  function goNext() {
    const e = validate(1);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError(e);
    setStep(2);
    track("rfq_step", { step: 2, intent: v.intent, product: v.product || undefined });
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  const rows = useMemo(() => summarize(v), [v]);
  const subject = `${isVideo ? "Video walkthrough request" : "Sample / quote request"} — ${v.company || "website"}${v.country ? ` (${v.country})` : ""}`;
  const bodyText = rows.map(([k, val]) => `${k}: ${val}`).join("\n");
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Krisons,\n\n${bodyText}\n`)}`;
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Krisons,\n${bodyText}`)}`;

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (step === 1) return goNext();
    const e = validate(2);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError(e);

    const form = new FormData(ev.currentTarget);
    // Spam traps: hidden checkbox, and nobody completes two steps in under 4 seconds.
    if (form.get("botcheck") || Date.now() - mountedAt.current < 4000) {
      setStatus("sent");
      return;
    }

    const meta = { intent: v.intent, product: v.product || undefined, country: v.country };

    if (!web3formsKey) {
      setStatus("handoff");
      track("rfq_handoff", { ...meta, reason: "no_key" });
      return;
    }

    setStatus("sending");
    setFailed(false);
    try {
      const payload = new FormData();
      payload.set("access_key", web3formsKey);
      payload.set("subject", subject);
      payload.set("from_name", "Krisons website");
      payload.set("replyto", v.email.trim());
      for (const [k, val] of rows) payload.set(k, val);
      payload.set("Page", window.location.href);
      const file = fileRef.current?.files?.[0];
      if (features.rfqFileUpload && file) payload.set("attachment", file);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      const json = await res.json();
      if (!json.success) throw new Error("rejected");
      setStatus("sent");
      track("rfq_submit", { ...meta, method: "web3forms" });
    } catch {
      setFailed(true);
      setStatus("handoff");
      track("rfq_handoff", { ...meta, reason: "send_failed" });
    }
  }

  /* ---------- result states ---------- */

  if (status === "sent") {
    const days = siteConfig.replyWithinWorkingDays;
    return (
      <div role="status" className="rounded-(--radius-card) border border-ink-900 bg-card p-6 sm:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h2 ref={headingRef} tabIndex={-1} className="mt-5 text-h3 font-bold">
          {rfqCopy.sentTitle}
        </h2>
        <p className="mt-2 text-lg text-ink-600">
          {days ? (
            <>
              We reply within {days} working {days === 1 ? "day" : "days"}, to {v.email || "your email"}.
            </>
          ) : showPlaceholders ? (
            <span className="ph-inline" data-placeholder="reply-time">
              We reply within X working days — PLACEHOLDER: set replyWithinWorkingDays in src/lib/config.ts
            </span>
          ) : (
            <>We will reply by email{v.email ? ` to ${v.email}` : ""}.</>
          )}
        </p>
        <p className="eyebrow mt-8 text-copper-700">What happens next</p>
        <ol className="mt-3 space-y-3">
          {(isVideo ? rfqCopy.videoSentNext : rfqCopy.sentNext).map((t, i) => (
            <li key={t} className="flex gap-3">
              <span className="num text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
              {t}
            </li>
          ))}
        </ol>
        {features.whatsapp && (
          <p className="mt-8 text-ink-600">
            In a hurry?{" "}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              onClick={() => track("whatsapp_click", { location: "rfq_success" })}
            >
              Message us on WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  if (status === "handoff") {
    return (
      <div role="status" className="rounded-(--radius-card) border border-ink-900 bg-card p-6 sm:p-10">
        <h2 ref={headingRef} tabIndex={-1} className="text-h3 font-bold">
          {rfqCopy.handoffTitle}
        </h2>
        <p className="mt-2 text-ink-600">
          {failed ? "We could not reach our form inbox just now. " : ""}
          {rfqCopy.handoffText}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailto}
            className="btn btn-primary"
            onClick={() => track("rfq_submit", { intent: v.intent, product: v.product || undefined, country: v.country, method: "email" })}
          >
            <Icon name="mail" />
            Send by email
          </a>
          {features.whatsapp && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              onClick={() => track("rfq_submit", { intent: v.intent, product: v.product || undefined, country: v.country, method: "whatsapp" })}
            >
              <Icon name="whatsapp" />
              Send on WhatsApp
            </a>
          )}
          <button type="button" className="btn btn-ghost-dark" onClick={() => setStatus("idle")}>
            Edit details
          </button>
        </div>
        <dl className="mt-8 grid grid-cols-[minmax(7rem,auto)_1fr] gap-x-6 gap-y-2 border-t border-line pt-6 text-sm">
          {rows.map(([k, val]) => (
            <div key={k} className="contents">
              <dt className="text-ink-600">{k}</dt>
              <dd className="break-words font-medium">{val}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-ink-600">
          Or email <a className="link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> · call{" "}
          {contacts.map((c) => c.phone).join(" / ")}
        </p>
      </div>
    );
  }

  /* ---------- the form ---------- */

  const text = (k: keyof Values, extra: Record<string, unknown> = {}, hint?: string) => ({
    id: `rfq-${k}`,
    name: k,
    value: v[k],
    onChange: (e: { target: { value: string } }) => set(k, e.target.value as never),
    className: inputClass,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": describedBy(`rfq-${k}`, hint, errors[k]),
    ...extra,
  });

  const select = (k: keyof Values, options: (string | { value: string; label: string })[], placeholder = "Select…") => (
    <select {...text(k)}>
      <option value="">{placeholder}</option>
      {options.map((o) =>
        typeof o === "string" ? (
          <option key={o}>{o}</option>
        ) : (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ),
      )}
    </select>
  );

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-(--radius-card) border border-ink-900 bg-card"
      aria-labelledby="rfq-heading"
    >
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-8">
        <h2 id="rfq-heading" ref={headingRef} tabIndex={-1} className="font-display text-xl font-bold outline-none">
          {step === 1 ? (isVideo ? rfqCopy.videoStepTitle : rfqCopy.step1Title) : rfqCopy.step2Title}
        </h2>
        <p className="num shrink-0 text-sm text-ink-600" aria-live="polite">
          Step {step} of 2
        </p>
      </div>
      <div aria-hidden className="h-1 bg-paper-2">
        <div className="h-full bg-copper-600 transition-[width] duration-500" style={{ width: step === 1 ? "50%" : "100%" }} />
      </div>

      {step === 1 && (
        <div className="space-y-7 p-5 sm:p-8">
          <fieldset>
            <legend className="mb-2 text-sm font-semibold">I would like</legend>
            <div className={`grid gap-2 ${availableIntents.length > 3 ? "grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
              {availableIntents.map((i) => (
                <label
                  key={i.id}
                  className={`flex cursor-pointer flex-col rounded-(--radius-card) border p-3 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-copper-600 ${
                    v.intent === i.id ? "border-ink-900 bg-ink-900 text-white" : "border-ink-500 bg-white hover:border-ink-900"
                  }`}
                >
                  <input
                    type="radio"
                    name="intent"
                    value={i.id}
                    checked={v.intent === i.id}
                    onChange={() => set("intent", i.id)}
                    className="sr-only"
                  />
                  <span className="font-semibold leading-snug">{i.label}</span>
                  <span className={`mt-0.5 text-xs leading-snug ${v.intent === i.id ? "text-ink-200" : "text-ink-600"}`}>{i.hint}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {isVideo ? (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="rfq-preferredTime" label="Days and times that suit you" optional hint="For example: Tue–Thu, mornings.">
                <input {...text("preferredTime", {}, "x")} />
              </Field>
              <Field id="rfq-timeZone" label="Your time zone" optional>
                <input {...text("timeZone")} />
              </Field>
              <Field id="rfq-product" label="Product you are interested in" optional>
                {select("product", productOptions)}
              </Field>
              <Field id="rfq-topics" label="What would you like to see or discuss?" optional>
                <input {...text("topics", { placeholder: "Production line, laboratory, a specific article…" })} />
              </Field>
            </div>
          ) : (
            <>
              <Field id="rfq-product" label="Product" error={errors.product}>
                {select("product", productOptions, "Select a product…")}
              </Field>

              {v.product && (
                <div className="grid gap-5 sm:grid-cols-2">
                  {v.product === "fusible-interlining" && (
                    <>
                      <Field id="rfq-article" label="Article" optional>
                        {select("article", articleOptions, "Not sure — advise me")}
                      </Field>
                      <Field id="rfq-adhesive" label="Adhesive" optional>
                        {select("adhesive", adhesiveOptions)}
                      </Field>
                    </>
                  )}
                  {v.product === "thermal-bond-non-woven" && (
                    <Field id="rfq-gsm" label="Weight (GSM)" optional hint="We make 23 to 80 GSM." error={errors.gsm}>
                      <input {...text("gsm", { inputMode: "decimal", placeholder: "e.g. 40" }, "x")} />
                    </Field>
                  )}
                  {hasCatalogSpecs && (
                    <>
                      <Field id="rfq-width" label="Width" optional>
                        {v.product === "fusible-interlining" ? (
                          select("width", widthOptions)
                        ) : (
                          <input {...text("width", { placeholder: "100–200 cm, or in inches" })} />
                        )}
                      </Field>
                      <Field id="rfq-color" label="Color" optional>
                        {select("color", colors)}
                      </Field>
                    </>
                  )}
                  {v.product === "home-textiles" && (
                    <Field id="rfq-item" label="Item" optional className="sm:col-span-2">
                      {select("item", homeTextileOptions)}
                    </Field>
                  )}
                  {isMadeToSpec && (
                    <Field
                      id="rfq-spec"
                      label="Specification you need"
                      optional
                      hint="Construction, weight, width, color, coating — whatever you know."
                      className="sm:col-span-2"
                    >
                      <textarea {...text("spec", { rows: 3 }, "x")} />
                    </Field>
                  )}
                  <Field id="rfq-quantity" label="Estimated quantity" optional error={errors.quantity} hint="A rough figure helps us quote.">
                    <div className="flex gap-2">
                      <input {...text("quantity", { inputMode: "numeric", placeholder: "e.g. 5000" }, "x")} />
                      <select
                        aria-label="Quantity unit"
                        name="unit"
                        value={v.unit}
                        onChange={(e) => set("unit", e.target.value)}
                        className={`${inputClass} !w-32 shrink-0`}
                      >
                        {quantityUnits.map((u) => (
                          <option key={u}>{u}</option>
                        ))}
                      </select>
                    </div>
                  </Field>
                  <Field id="rfq-endUse" label="End use" optional>
                    {select("endUse", endUseOptions)}
                  </Field>
                </div>
              )}
            </>
          )}

          <div className="flex items-center justify-between gap-4 border-t border-line pt-6">
            <p className="text-sm text-ink-600">Takes about two minutes.</p>
            <button type="submit" className="btn btn-primary">
              {rfqCopy.next}
              <Icon name="arrow" />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="rfq-name" label="Your name" error={errors.name}>
              <input {...text("name", { autoComplete: "name" })} />
            </Field>
            <Field id="rfq-company" label="Company" error={errors.company}>
              <input {...text("company", { autoComplete: "organization" })} />
            </Field>
            <Field id="rfq-email" label="Work email" error={errors.email}>
              <input {...text("email", { type: "email", autoComplete: "email", inputMode: "email" })} />
            </Field>
            <Field id="rfq-phone" label="Phone / WhatsApp" optional hint="With country code, e.g. +1 212 555 0100.">
              <input {...text("phone", { type: "tel", autoComplete: "tel" }, "x")} />
            </Field>
            <Field id="rfq-country" label="Destination country" error={errors.country} className="sm:col-span-2">
              <input {...text("country", { autoComplete: "country-name" })} />
            </Field>
            {features.rfqFileUpload ? (
              <Field id="rfq-file" label="Tech pack or spec sheet" optional hint="PDF, image or spreadsheet, up to 5 MB." className="sm:col-span-2">
                <input ref={fileRef} id="rfq-file" name="attachment" type="file" accept=".pdf,.png,.jpg,.jpeg,.xlsx,.xls,.doc,.docx" aria-describedby="rfq-file-hint" className={`${inputClass} file:mr-3 file:rounded file:border-0 file:bg-ink-900 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white`} />
              </Field>
            ) : (
              <Field
                id="rfq-techPackLink"
                label="Link to tech pack or spec sheet"
                optional
                hint="Google Drive, Dropbox or WeTransfer link. You can also email files after sending."
                error={errors.techPackLink}
                className="sm:col-span-2"
              >
                <input {...text("techPackLink", { type: "url", inputMode: "url", placeholder: "https://" }, "x")} />
              </Field>
            )}
            <Field id="rfq-message" label="Anything else we should know?" optional className="sm:col-span-2">
              <textarea {...text("message", { rows: 3 })} />
            </Field>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" className="btn btn-ghost-dark" onClick={() => setStep(1)}>
              {rfqCopy.back}
            </button>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? rfqCopy.sending : rfqCopy.submit}
              <Icon name="arrow" />
            </button>
          </div>
          <p className="text-sm text-ink-600">{rfqCopy.privacy}</p>
        </div>
      )}
    </form>
  );
}
