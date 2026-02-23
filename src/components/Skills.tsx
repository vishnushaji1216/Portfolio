export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["JavaScript", "Python", "HTML", "CSS"],
        },
        {
            title: "Frameworks & UI",
            skills: ["React", "Next.js", "React Native"],
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "Django", "FastAPI", "MongoDB"],
        }
    ];
  
    return (
      <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-8 md:px-12">          
          <div className="mb-16">
            <div className="text-[var(--color-neon-purple)] font-mono text-sm tracking-widest mb-4 flex items-center">
              <span className="text-gray-500 mr-2">//</span> TECH STACK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              CORE <span className="text-[var(--color-neon-cyan)] drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">TECHNOLOGIES</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl font-mono text-sm leading-relaxed">
              A practical inventory of the tools and languages I use to build functional, scalable applications across web and mobile platforms.
            </p>
          </div>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-[#0c0c0e] border border-white/5 rounded-lg p-8 hover:border-[var(--color-neon-cyan)]/30 transition-colors duration-300 group"
              >
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[var(--color-neon-cyan)] transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-mono text-gray-300 hover:text-white hover:border-[var(--color-neon-purple)]/50 hover:bg-[var(--color-neon-purple)]/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }