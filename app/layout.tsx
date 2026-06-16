import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetMono = JetBrains_Mono({
  variable: "--font-jet-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jenny's Supply — Premium Glass & Aluminum for Modern Architecture",
  description:
    "Engineered glass façades, aluminum extrusions, and custom fabrication for commercial contractors, architects, and high-end residential builders. Three decades of established expertise.",
  keywords: [
    "architectural glass",
    "aluminum extrusions",
    "curtain wall",
    "structural glass",
    "custom fabrication",
    "Jenny's Supply",
  ],
  openGraph: {
    title: "Jenny's Supply — Built on Precision. Trusted by Architects.",
    description:
      "Engineered glass & aluminum solutions for modern architecture since 1992.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} ${jetMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-surface text-ink flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
