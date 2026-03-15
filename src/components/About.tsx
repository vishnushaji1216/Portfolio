"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 bg-[#050507]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <div className="relative w-full max-w-xl">

          {/* Cyan Frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-cyan-400/40 pointer-events-none" />

          {/* Purple Frame */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-purple-500/40 pointer-events-none" />

          {/* Image Container */}
          <div className="relative overflow-hidden group">

            {/* Black & White Image */}
            <Image
              src="/images/profile.jpg"
              alt="Developer"
              width={700}
              height={700}
              priority
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />

            {/* RGB Image (revealed on hover) */}
            <Image
              src="/images/profile_rgb.jpg"
              alt="Developer"
              width={700}
              height={700}
              className="
                absolute inset-0
                object-cover w-full h-full
                opacity-0
                transition-all duration-700 ease-out
                group-hover:opacity-100
                group-hover:scale-105
              "
            />

          </div>

        </div>

        {/* TEXT SIDE */}
        <div>

          <p className="text-cyan-400 font-mono mb-4">// ABOUT ME</p>

          <h2 className="text-5xl font-bold text-white mb-6">
            PASSIONATE <span className="text-cyan-400">DEVELOPER</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m a{" "}
            <span className="font-semibold text-white">Full-Stack Developer</span> with a
            strong academic foundation in{" "}
            <span className="font-semibold text-white">Computer Science</span> and{" "}
            <span className="font-semibold text-white">AI</span>. Unlike many developers
            who specialize in just one area, I focus on building complete ecosystems—
            bridging modern web architectures with high-performance mobile applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-12">
            My expertise spans the entire stack. Whether it's architecting robust
            backends with{" "}
            <span className="font-semibold text-white">Python</span>,{" "}
            <span className="font-semibold text-white">Node.js</span>, and{" "}
            <span className="font-semibold text-white">MongoDB</span>, or crafting
            intuitive, pixel-perfect user interfaces using{" "}
            <span className="font-semibold text-white">Next.js</span> and{" "}
            <span className="font-semibold text-white">React Native</span>, I am driven by
            the challenge of solving complex problems with clean, scalable code.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="border border-white/10 p-6">
              <p className="text-xl font-bold text-white">1+ Years</p>
              <p className="text-gray-500 text-sm">Professional experience</p>
            </div>

            <div className="border border-white/10 p-6">
              <p className="text-xl font-bold text-white">5+ Projects</p>
              <p className="text-gray-500 text-sm">Successfully delivered</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}