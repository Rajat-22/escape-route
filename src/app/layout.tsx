import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { localization } from "@/lib/localization";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://escape-route-beryl.vercel.app";

const TITLE = "Escape-Route";
const DESCRIPTION =
  "Generate a day-by-day travel itinerary with AI, then explore it on an interactive map with real road-following routes. Free trip planner for temples, treks, cafes, beaches and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${localization.brand.name}`,
  },
  description: DESCRIPTION,
  applicationName: localization.brand.name,
  keywords: [
    "AI itinerary generator",
    "travel route planner",
    "trip itinerary maker",
    "day-by-day travel planner",
    "interactive travel map",
    "travel route visualization",
    "road trip planner",
    "geospatial travel app",
    "personalised travel itinerary",
    "free trip planner",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: localization.brand.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  appleWebApp: {
    title: localization.brand.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
