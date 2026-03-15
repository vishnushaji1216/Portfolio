import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vishnu Shaji | Full-Stack & AI",
  description:
    "B.Tech CS (AI) Student & Full-Stack Developer specializing in React Native and Next.js.",
  verification: {
    google: "E2zCfpYrxeefXcPZzqPDxEK1RQGmLwUlt1gjsFcHniU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[var(--color-dark-bg)] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
