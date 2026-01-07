import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AutoTranslator } from "@/components/auto-translator";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Horizon - Systems for modern product & service companies",
  description:
    "Horizon builds ServiceOS and MarketOS: calm, engineered operating systems for services and marketplaces.",
  icons: {
    icon: "/horizon_icon_cropped.svg",
    shortcut: "/horizon_icon_cropped.svg",
    apple: "/horizon_icon_cropped.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plex.variable} ${space.variable}`}>
        <AutoTranslator />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
