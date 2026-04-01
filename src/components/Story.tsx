"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Step = {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
};

const storySteps: Step[] = [
  {
    id: 1,
    year: "2022",
    title: "DISCOVERING BUILDING",
    subtitle: "From curiosity to code",
    description:
      "Started exploring how apps actually work — from frontend interfaces to backend logic. What began as curiosity quickly turned into building small tools and experimenting with real technologies.",
    stat: "3",
    statLabel: "client products shipped",
    color: "text-[var(--color-neon-cyan)] text-glow",
  },
  {
    id: 2,
    year: "2024",
    title: "FROM CODE TO PRODUCTS",
    subtitle: "Thinking like a builder",
    description:
      "Shifted focus from learning syntax to solving real problems. Began designing complete products — including a platform connecting schools with teachers and other real-world tools.",
    stat: "35",
    statLabel: "screen app delivered",
    color: "text-[var(--color-neon-purple)] text-glow-purple",
  },
  {
    id: 3,
    year: "2025",
    title: "AI-POWERED DEVELOPMENT",
    subtitle: "Building faster with new tools",
    description:
      "Started integrating modern development workflows using AI-assisted tools, rapid prototyping, and frameworks like Next.js to build and ship faster.",
    stat: "Now",
    statLabel: "Currently building Stella Bridge v2",
    color: "text-[var(--color-neon-cyan)] text-glow",
  },
];

function StoryStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.4],
    [index % 2 === 0 ? -120 : 120, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.75, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className={`flex items-center gap-12 ${
        index % 2 === 1 ? "flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <div className={`font-mono text-sm ${step.color}`}>{step.year}</div>
        <h3 className="font-bold text-4xl md:text-5xl text-white">
          {step.title}
        </h3>
        <p className={`text-xl ${step.color}`}>{step.subtitle}</p>
        <p className="font-mono text-white/50 max-w-md leading-relaxed">
          {step.description}
        </p>
        <div className="pt-4">
          <div className={`font-bold text-5xl ${step.color}`}>{step.stat}</div>
          <div className="font-mono text-sm text-white/40 mt-2">
            {step.statLabel}
          </div>
        </div>
      </div>

      {/* Visual Circle */}
      <div className="hidden md:flex flex-col items-center justify-center w-32 relative">
        <div className="w-6 h-6 rounded-full bg-[var(--color-neon-cyan)] flex items-center justify-center z-10">
          <span className="text-black font-mono text-xs font-bold">{step.id}</span>
        </div>
        {index < 2 && (
          <div className="absolute top-[calc(50%+12px)] h-[calc(100%+80px)] w-[1px] bg-[#1a5a5a] z-0" />
        )}
      </div>
    </motion.div>
  );
}

export default function Story() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="story"
      // FIX: was min-h-[300vh] with space-y-64 = too much dead scroll.
      // Reduced to min-h-[220vh] and space-y-40 — still enough for
      // scroll animations but exits much faster, so Projects follows naturally.
      className="relative py-32 min-h-[220vh]"
    >
      {/* Timeline progress line removed in favor of direct lines */}

      <div className="max-w-6xl mx-auto px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="font-mono text-sm text-[var(--color-neon-cyan)]">
            // MY JOURNEY
          </span>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-white mt-4">
            THE{" "}
            <span className="text-[var(--color-neon-purple)] text-glow-purple">
              STORY
            </span>
          </h2>
          <p className="text-white/40 font-mono mt-6 max-w-xl mx-auto">
            Every developer has a journey. Here's mine.
          </p>
        </div>

        {/* Steps — reduced gap from space-y-64 to space-y-40 */}
        <div className="space-y-40">
          {storySteps.map((step, index) => (
            <StoryStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}