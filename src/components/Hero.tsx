"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -120]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[150vh]"
    >

      <motion.div
        style={{ opacity, scale, y }}
        className="sticky top-0 min-h-screen flex items-center pt-24 pb-12"
      >

        <div className="max-w-7xl w-full mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-start space-y-8 mt-12 lg:mt-0">

            <div className="flex items-center border border-[var(--color-neon-cyan)]/30 rounded-sm overflow-hidden">
              <span className="px-3 py-1.5 text-[var(--color-neon-cyan)] font-mono font-bold border-r border-[var(--color-neon-cyan)]/30">
                &lt;DEV/&gt;
              </span>
              <span className="px-4 py-1.5 text-[var(--color-neon-cyan)] text-xs tracking-[0.2em] font-mono uppercase bg-[var(--color-neon-cyan)]/5">
                Full-Stack Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              I build web apps, mobile apps, and custom dashboards that help businesses grow.
            </h1>

            <p className="text-gray-400 text-lg max-w-lg font-mono leading-relaxed">
              Full-stack developer based in Kerala — I turn business problems into fast, clean digital products.
            </p>

            <div className="flex flex-wrap gap-6 pt-2">

              <Link
                href="#projects"
                className="px-8 py-4 bg-[var(--color-neon-cyan)]/10 border border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] font-mono text-sm tracking-widest hover:bg-[var(--color-neon-cyan)] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
              >
                See My Work
              </Link>

              <Link
                href="#contact"
                className="px-8 py-4 border border-white/20 text-white font-mono text-sm tracking-widest hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                Book a Free Call
              </Link>

            </div>

            <div className="pt-4 font-mono text-[12px] text-[#444444] tracking-[0.15em] uppercase">
              3 Live Projects · 35+ Screens Built · Kerala & Remote
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:block bg-[#0c0c0e] border border-white/10 rounded-xl shadow-2xl relative overflow-hidden group">

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
  
  <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px]" />
  
  <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-purple-500/20 blur-[120px]" />

</div>

            <div className="p-8 relative z-10">

              <div className="flex space-x-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>

              <pre className="font-mono text-[13px] leading-relaxed text-gray-300 overflow-x-auto">
  <code>
    <span className="text-purple-400">const</span>{" "}
    <span className="text-cyan-400">developer</span> = {"{"}
    <br />

    {"  "}name:{" "}
    <span className="text-green-400">"Vishnu Shaji"</span>,
    <br />

    {"  "}based:{" "}
    <span className="text-green-400">"Kannur, Kerala"</span>,
    <br />

    {"  "}services: [
    <span className="text-green-400">"Web Apps"</span>,{" "}
    <span className="text-green-400">"Mobile Apps"</span>,{" "}
    <span className="text-green-400">"E-commerce"</span>
    ],
    <br />

    {"  "}clients: [
    <span className="text-green-400">"Schools"</span>,{" "}
    <span className="text-green-400">"Startups"</span>,{" "}
    <span className="text-green-400">"Small Businesses"</span>
    ],
    <br />

    {"  "}
    <span className="text-purple-400">async</span>{" "}
    <span className="text-cyan-400">solve</span>(yourProblem) {"{"}
    <br />

    {"    "}
    <span className="text-purple-400">return</span>{" "}
    <span className="text-purple-400">await</span>{" "}
    this.build(yourProblem);
    <br />

    {"  }"}
    <br />
    {"};"}
  </code>
</pre>

            </div>

          </div>

        </div>

        {/* SCROLL INDICATOR */}

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link
            href="#projects"
            className="text-white/30 hover:text-[var(--color-neon-cyan)] flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono uppercase tracking-widest">
              Scroll
            </span>
            <ChevronDown size={28} />
          </Link>
        </motion.div>

      </motion.div>

    </section>
  );
}