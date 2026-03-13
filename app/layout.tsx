import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wagner-bau-immobilien.de"),
  title: {
    default: "Wagner Bau & Immobilien – Bau- und Montagearbeiten in Weilheim",
    template: "%s | Wagner Bau & Immobilien",
  },
  description:
    "Ihr zuverlässiger Partner für kleine Bau- und Montagearbeiten in Weilheim und Umgebung. Renovierung, Montage, Trockenbau und mehr.",
  keywords: [
    "Bau", "Montage", "Renovierung", "Weilheim", "Oberbayern",
    "Trockenbau", "Küchenmontage", "Bodenverlegung", "Handwerker",
    "Wagner Bau", "Immobilien", "Terrassenbau", "Entrümpelung",
  ],
  authors: [{ name: "Wagner Bau & Immobilien" }],
  creator: "Wagner Bau & Immobilien",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://wagner-bau-immobilien.de",
    siteName: "Wagner Bau & Immobilien",
    title: "Wagner Bau & Immobilien – Bau- und Montagearbeiten in Weilheim",
    description:
      "Zuverlässige Unterstützung bei Renovierung, Montage und handwerklichen Arbeiten rund um Ihr Zuhause.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo-icon.svg",
    apple: "/images/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
