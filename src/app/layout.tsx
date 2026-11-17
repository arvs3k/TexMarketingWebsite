import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import { siteConfig } from "@/lib/config";
import { siteName, siteUrl } from "@/lib/metadata";
import { jsonLdString, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { whatsappUrl } from "@/lib/whatsapp";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Fusible Interlining & Non-Woven Fabric Manufacturer, India`,
    template: `%s | ${siteName}`,
  },
  description:
    "Manufacturer of fusible interlining and thermal bond non-woven fabric in Erode, India. Established 1992, own plant, 2,000,000 meters a month, in-house laboratory. Request samples.",
  applicationName: siteName,
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0b111a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { features } = siteConfig;
  const wa = features.whatsapp ? whatsappUrl() : null;
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString([organizationJsonLd, websiteJsonLd]) }}
        />
        <SiteHeader whatsappHref={wa} hideCtaOnMobile={features.stickyMobileCta} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {features.stickyMobileCta ? (
          <MobileCtaBar mode="bar" whatsappHref={wa} />
        ) : features.whatsapp ? (
          <MobileCtaBar mode="float" whatsappHref={wa} />
        ) : null}
      </body>
    </html>
  );
}
