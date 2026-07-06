import type { Metadata } from "next";

// TODO: replace with the production domain once confirmed.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krisonsmarketing.com";

export const siteName = "Krisons Marketing";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      locale: "en_IN",
    },
  };
}
