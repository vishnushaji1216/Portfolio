import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Vishnu Shaji | Full-Stack & AI",
  description: "B.Tech CS (AI) Student & Full-Stack Developer specializing in React Native and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[var(--color-dark-bg)] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}