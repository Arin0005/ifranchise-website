import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iFranchise – Grow Your Brand with India's Leading Franchise Consultants",
  description:
    "iFranchise helps entrepreneurs, investors, and brands scale through expert franchise consulting, brand expansion strategy, and investor acquisition services.",
  keywords: [
    "franchise consulting",
    "franchise opportunities India",
    "brand expansion",
    "investor acquisition",
    "iFranchise",
  ],
  openGraph: {
    title: "iFranchise – Franchise Consulting & Brand Expansion",
    description:
      "Partner with iFranchise for expert guidance in franchise development, legal compliance, and business growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#FCFAFF] text-dark dark:bg-[#121212] dark:text-gray-100 min-h-screen transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
