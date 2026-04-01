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
            I'm a full-stack developer based in Kannur, Kerala — and I build 
            complete digital products for schools, startups, and small businesses.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Unlike most developers who hand you a finished product and disappear, 
            I stay involved — from the first discovery call through to launch and 
            beyond. I care about whether what I build actually solves your problem.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            My work spans the full stack: React Native mobile apps, Next.js web 
            platforms, Node.js backends, MongoDB databases, and complete 
            full-stack applications. I've shipped products that are live and in use 
            by real users today.
          </p>

          <p className="text-[var(--color-neon-cyan)] font-mono text-sm leading-relaxed mb-12">
            If you have a business problem that software can solve — let's talk.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">

            <div className="border border-white/10 p-6">
              <p className="text-xl font-bold text-white">3 Products shipped</p>
            </div>

            <div className="border border-white/10 p-6">
              <p className="text-xl font-bold text-white">Real clients · Real outcomes</p>
            </div>

          </div>

          <a href="#" className="inline-flex items-center text-sm font-mono text-gray-400 hover:text-[var(--color-neon-cyan)] transition-colors gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download CV
          </a>

        </div>

      </div>
    </section>
  );
}