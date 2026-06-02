import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uiux-uas-practice.vercel.app"),
  title: {
    default: "Latihan UAS UI/UX Design | 50 Soal Pilihan Ganda",
    template: "%s | UI/UX UAS Practice",
  },
  description:
    "Website latihan UAS UI/UX Design berisi 50 soal pilihan ganda, mode belajar, simulasi ujian, pembahasan, bookmark, dan progress lokal.",
  keywords: [
    "UI/UX",
    "UAS UI/UX Design",
    "Figma",
    "Scrolling UI",
    "Component Figma",
    "Variable Figma",
    "Latihan soal UI UX",
  ],
  authors: [{ name: "Muhammad Rifqy Saputra" }],
  creator: "Muhammad Rifqy Saputra",
  openGraph: {
    title: "Latihan UAS UI/UX Design",
    description: "50 soal pilihan ganda lengkap dengan mode belajar, simulasi ujian, dan pembahasan.",
    url: "https://uiux-uas-practice.vercel.app",
    siteName: "UI/UX UAS Practice",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latihan UAS UI/UX Design",
    description: "50 soal UI/UX lengkap dengan jawaban dan pembahasan.",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
