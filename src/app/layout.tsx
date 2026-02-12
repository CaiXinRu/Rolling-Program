import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rollingprogram.com";

export const metadata: Metadata = {
  title: "ALPR Gate Access Control System | Rolling Program",
  description:
    "Automate secure gate access with Rolling Program's ALPR platform: hands-free entry via whitelist/blacklist, instant searchable logs, powerful analytics, reports, and optional payment kiosks. Multi-site ready. Book a demo today.",
  keywords: [
    "ALPR",
    "gate access control",
    "license plate recognition",
    "parking management",
    "whitelist blacklist",
    "parking analytics",
    "payment kiosk",
    "multi-site parking",
  ],
  authors: [{ name: "Rolling Program" }],
  creator: "Rolling Program",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "ALPR Gate Access Control System | Rolling Program",
    description:
      "Automate secure gate access with Rolling Program's ALPR platform: hands-free entry via whitelist/blacklist, instant searchable logs, powerful analytics, reports, and optional payment kiosks. Multi-site ready. Book a demo today.",
    siteName: "Rolling Program",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALPR Gate Access Control System | Rolling Program",
    description:
      "Automate secure gate access with Rolling Program's ALPR platform: hands-free entry via whitelist/blacklist, instant searchable logs, powerful analytics, reports, and optional payment kiosks. Multi-site ready. Book a demo today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
