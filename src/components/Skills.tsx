export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "React", "Next.js", "React Native", "Tailwind CSS"],
      context: "Used across all 3 delivered client projects",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "FastAPI", "Django"],
      context: "Powers the Stella Bridge API and DocuCompare engine",
    },
    {
      title: "Database & Storage",
      skills: ["MongoDB", "Mongoose", "Supabase"],
      context: "Production databases serving live users",
    },
    {
      title: "APIs & Tools",
      skills: ["REST APIs", "FastAPI", "Stripe", "NextAuth"],
      context: "Integrations for powerful full-stack dashboards",
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#050507]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="text-center md:text-left mb-16">
          <span className="font-mono text-sm text-[var(--color-neon-cyan)] tracking-widest uppercase">
            // EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Technologies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-mono text-[var(--color-neon-cyan)] text-sm uppercase tracking-widest">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#0d0d0d] border border-[#1e1e1e] rounded-full text-sm text-[#888888]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 italic text-sm p-1">"{category.context}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}