import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scheme Finder - Discover Indian Government Benefits",
  description: "Find central and state government schemes you are eligible for. Personalized, fast, and available in multiple Indian languages.",
  keywords: ["Government Schemes", "India", "PM Kisan", "Scholarships", "Eligibility Checker"],
  authors: [{ name: "Scheme Finder Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-white border-t border-brand-forest/5 py-12 mt-20">
          <div className="section-container text-center">
            <p className="text-brand-slate/40 text-sm font-medium">
              © {new Date().getFullYear()} Scheme Finder India. Official Digital Gateway.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
