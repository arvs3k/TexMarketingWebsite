"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/data/company";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const inputClasses =
  "w-full rounded-md border border-ink-900/20 bg-white px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/60 focus:border-copper-600 focus:outline-none focus:ring-1 focus:ring-copper-600";

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Website enquiry from ${data.name ?? "unknown"}`,
          from_name: "Krisons Marketing Website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-ink-900/10 bg-white p-8 text-center shadow-sm">
        <p className="font-display text-xl font-bold text-ink-900">
          Enquiry received — thank you.
        </p>
        <p className="mt-2 text-ink-700">
          We typically respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-900">
            Name *
          </label>
          <input id="name" name="name" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="companyName" className="mb-1.5 block text-sm font-semibold text-ink-900">
            Company *
          </label>
          <input id="companyName" name="company" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-900">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="country" className="mb-1.5 block text-sm font-semibold text-ink-900">
            Country *
          </label>
          <input id="country" name="country" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="product" className="mb-1.5 block text-sm font-semibold text-ink-900">
            Product interest
          </label>
          <select id="product" name="product" className={inputClasses} defaultValue="">
            <option value="">Select…</option>
            <option>Thermal Bond Non-Woven Fabric</option>
            <option>Microdot Fusible Interlining</option>
            <option>Coated Fabrics (Paste / Double Dot / Scatter)</option>
            <option>Geo-Textile / Industrial</option>
            <option>Other / Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="requirements" className="mb-1.5 block text-sm font-semibold text-ink-900">
            GSM / width / quantity
          </label>
          <input
            id="requirements"
            name="requirements"
            placeholder="e.g. 40 GSM, 150 cm, 50,000 m"
            className={inputClasses}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-900">
            Message
          </label>
          <textarea id="message" name="message" rows={4} className={inputClasses} />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-copper-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-copper-700 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "error" && (
          <p className="text-sm text-copper-700" role="alert">
            Something went wrong — please email us directly at{" "}
            <a href={`mailto:${company.email}`} className="font-semibold underline">
              {company.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
