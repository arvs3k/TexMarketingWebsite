import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { siteName, siteUrl } from "@/lib/metadata";
import { jsonLdString, organizationJsonLd } from "@/lib/jsonld";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Thermal Bond Non-Woven & Coated Fabrics`,
    template: `%s | ${siteName}`,
  },
  description:
    "Indian manufacturer of thermal bond non-woven interlining, microdot fusible interlining and coated fabrics. Established 1992, producing 2 million metres per month with on-time delivery across borders.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(organizationJsonLd) }}
        />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
