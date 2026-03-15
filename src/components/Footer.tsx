"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {

  const year = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <footer className="border-t border-white/5 py-10 mt-24">

        <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LOGO */}
          <div className="text-[var(--color-neon-cyan)] font-mono text-2xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]">
            &lt;DEV/&gt;
          </div>

          {/* COPYRIGHT */}
          <div className="text-gray-500 font-mono text-sm text-center pl-30">
            © {year} Vishnu Shaji. All rights reserved.
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-6 text-gray-400 pr-15">

            <Link
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              className="hover:text-[var(--color-neon-cyan)] hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={20} />
            </Link>

            <Link
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="hover:text-[var(--color-neon-purple)] hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={20} />
            </Link>

            <Link
              href="mailto:YOUR_EMAIL"
              className="hover:text-[var(--color-neon-cyan)] hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={20} />
            </Link>

          </div>

        </div>

      </footer>


      {/* SCROLL TO TOP BUTTON */}

      {showButton && (

        <a
          href="#home"
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#0c0c0e] border border-white/10 rounded-md
          text-[var(--color-neon-cyan)]
          shadow-[0_0_20px_rgba(0,240,255,0.15)]
          hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]
          hover:-translate-y-1
          transition-all duration-300"
        >

          <ArrowUp size={20} />

        </a>

      )}
    </>
  );
}