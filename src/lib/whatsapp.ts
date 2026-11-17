import { siteConfig } from "@/lib/config";
import { contacts } from "@/lib/data/company";

/** Digits-only international number used for wa.me links. */
export function whatsappNumber(): string {
  const fallback = contacts.find((c) => c.role === "Manager") ?? contacts[0];
  return (siteConfig.whatsappNumber ?? fallback.phone).replace(/\D/g, "");
}

export const defaultWhatsappMessage =
  "Hello Krisons, I found you through your website and would like to ask about ";

export function whatsappUrl(message: string = defaultWhatsappMessage): string {
  return `https://wa.me/${whatsappNumber()}?text=${encodeURIComponent(message)}`;
}
