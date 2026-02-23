import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-7xl w-full mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">      
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
            CRAFTING <br />
            <span className="text-[var(--color-neon-cyan)] drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]">
              DIGITAL
            </span>{" "}
            <br />
            EXPERIENCES
          </h1>
          <p className="text-gray-400 text-lg max-w-lg font-mono leading-relaxed">
            Building cutting-edge web and mobile applications with modern technologies. 
            Transforming ideas into immersive, high-performance solutions.
          </p>
          <div className="flex flex-wrap gap-6 pt-2">
            <Link 
              href="#projects" 
              className="px-8 py-4 bg-[var(--color-neon-cyan)]/10 border border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] font-mono text-sm tracking-widest hover:bg-[var(--color-neon-cyan)] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
            >
              VIEW PROJECTS
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 border border-white/20 text-white font-mono text-sm tracking-widest hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
        <div className="hidden lg:block bg-[#0c0c0e] border border-white/10 rounded-xl shadow-2xl relative overflow-hidden group">        
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-cyan)]/5 to-[var(--color-neon-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="p-8 relative z-10">
            <div className="flex space-x-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>            
            <pre className="font-mono text-[15px] leading-loose text-gray-300 overflow-x-auto">
              <code>
                <span className="text-[var(--color-neon-purple)]">const</span> <span className="text-[var(--color-neon-cyan)]">developer</span> <span className="text-[var(--color-neon-purple)]">=</span> {"{"}
                <br />
                {"  "}name: <span className="text-green-400">"Vishnu Shaji"</span>,
                <br />
                {"  "}skills: [<span className="text-green-400">"React Native"</span>, <span className="text-green-400">"Node JS"</span>, <span className="text-green-400">"Python"</span>],
                <br />
                {"  "}passion: <span className="text-green-400">"Build creative solutions"</span>,
                <br />
                {"  "}<span className="text-[var(--color-neon-purple)]">async</span> <span className="text-white">build</span>(idea) {"{"}
                <br />
                {"    "}<span className="text-[var(--color-neon-purple)]">return await</span> <span className="text-white">this</span>.transform(idea);
                <br />
                {"  }"}
                <br />
                {"};"}
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}