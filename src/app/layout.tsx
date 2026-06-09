import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colorfit — Packaging and Designs",
  description:
    "Colorfit brings brands to life through intelligent colour strategy, precision packaging design, and systems thinking — making every product shelf-ready and story-ready.",
  keywords: [
    "packaging design",
    "brand identity",
    "graphic design",
    "colour strategy",
    "design studio",
    "Colorfit",
  ],
  openGraph: {
    title: "Colorfit — Packaging and Designs",
    description:
      "Colorfit brings brands to life through intelligent colour strategy, precision packaging design, and systems thinking — making every product shelf-ready and story-ready.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
