import type { Metadata } from "next";
import { Zilla_Slab, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/data";

const display = Zilla_Slab({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${business.name} — Glass & Aluminum in the Province of Antique`,
  description:
    "A real, licensed glass-and-aluminum store serving the Province of Antique since 2017. We supply, fabricate, and install glass, aluminum, and roll-up — and we stand behind every job. Get a quote.",
  keywords: [
    "glass and aluminum Antique",
    "glass supplier Antique",
    "roll-up doors Antique",
    "shower enclosure",
    "kitchen cabinet glass",
    "window installation Antique",
    "Jennys Glass",
  ],
  openGraph: {
    title: `${business.name} — supplied, fabricated, and installed since 2017`,
    description:
      "A real, licensed store in the Province of Antique. Glass, aluminum, and roll-up — with someone to call after the job is done.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full bg-paper text-ink flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
