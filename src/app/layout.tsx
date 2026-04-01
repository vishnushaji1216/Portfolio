import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Vishnu Shaji | Freelance Developer",
  description:
    "Full-stack developer based in Kerala — I turn business problems into fast, clean digital products.",
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
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
