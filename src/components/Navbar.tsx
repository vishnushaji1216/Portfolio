"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#09090b]/70 backdrop-blur-md border-white/10 py-4 shadow-lg"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-8 md:px-12 flex items-center justify-between">        
        <Link href="/" className="flex items-center group">
          <span className="text-[var(--color-neon-cyan)] font-mono text-2xl font-bold tracking-widest transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">
            &lt;DEV/&gt;
          </span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-mono tracking-[0.2em] text-gray-400">
          {["HOME", "PROJECTS", "ABOUT", "SKILLS","CONTACT"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[var(--color-neon-cyan)] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </div>
        
      </div>
    </nav>
  );
}