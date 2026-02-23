import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-18 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--color-neon-cyan)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500 rounded-lg transform translate-x-2 translate-y-2"></div>
          <div className="relative h-[450px] w-full bg-[#0c0c0e] border border-white/10 rounded-lg overflow-hidden z-10">
            <Image 
              src="/images/profile.jpg" 
              alt="Vishnu Shaji" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </div>

        <div>
          <div className="text-[var(--color-neon-cyan)] font-mono text-sm tracking-widest mb-4 flex items-center">
            <span className="text-gray-500 mr-2">//</span> ABOUT ME
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            ENGINEERING <br />
            <span className="text-[var(--color-neon-cyan)] drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
              DIGITAL SOLUTIONS
            </span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I’m a Full-Stack Developer with a strong academic foundation in{" "}
              <strong className="text-white">Computer Science and AI</strong>.
              Unlike many developers who specialize in just one area, I focus on
              building complete ecosystems—bridging modern web architectures with
              high-performance mobile applications.
            </p>

            <p>
              My expertise spans the entire stack. Whether it's architecting
              robust backends with{" "}
              <strong className="text-white">
                Python, Node.js, and MongoDB
              </strong>
              , or crafting intuitive, pixel-perfect user interfaces using{" "}
              <strong className="text-white">
                Next.js and React Native
              </strong>
              , I am driven by the challenge of solving complex problems with
              clean, scalable code.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex items-center space-x-4 hover:border-[var(--color-neon-cyan)]/50 transition-colors duration-300">
              <div className="text-[var(--color-neon-cyan)] text-3xl font-bold font-mono">
                5+
              </div>
              <div>
                <div className="text-white font-bold text-lg">
                  Projects Built
                </div>
                <div className="text-gray-500 font-mono text-xs tracking-wider uppercase">
                  Web & Mobile
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex items-center space-x-4 hover:border-[var(--color-neon-purple)]/50 transition-colors duration-300">
              <div className="text-[var(--color-neon-purple)] text-3xl font-bold font-mono">
                100%
              </div>
              <div>
                <div className="text-white font-bold text-lg">Full-Stack</div>
                <div className="text-gray-500 font-mono text-xs tracking-wider uppercase">
                  Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}