import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const siteUrl = siteConfig.url;
export const siteName = siteConfig.legalName;

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** Skip the " | Krisons Marketing" suffix (for titles that already carry the name). */
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      locale: "en",
    },
  };
}
