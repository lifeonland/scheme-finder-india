import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scheme Finder - Discover Indian Government Benefits",
  description: "Find central and state government schemes you are eligible for. Personalized, fast, and available in multiple Indian languages.",
  keywords: ["Government Schemes", "India", "PM Kisan", "Scholarships", "Eligibility Checker"],
  authors: [{ name: "Scheme Finder Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
