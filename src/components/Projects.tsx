import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Smartphone, Globe, Workflow } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Stella Maris School",
      type: "WEB",
      icon: <Globe size={14} className="mr-2" />,
      description: "A modern, high-performance institutional website providing a seamless digital gateway for students and parents.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "https://www.stellamaris-school.org/",
      image: "/images/stella_web.jpg", 
    },
    {
      id: 2,
      title: "Stella Bridge App",
      type: "MOBILE",
      icon: <Smartphone size={14} className="mr-2" />,
      description: "A comprehensive educational tracking application featuring over 35 distinct screens for advanced student management and monitoring.",
      tech: ["React Native", "Android", "Mobile UI/UX"],
      link: "#",
      image: "/images/stella_bridge.jpg", 
    },
    {
      id: 3,
      title: "DocuCompare Automation",
      type: "AUTOMATION",
      icon: <Workflow size={14} className="mr-2" />,
      description: "An automated workflow engine built to intelligently parse, compare, and process complex document structures.",
      tech: ["n8n", "Google VM", "FASTapi"],
      link: "#",
      image: "/images/n8n_workflow.jpg", 
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12">        
        <div className="mb-16">
          <div className="text-[var(--color-neon-cyan)] font-mono text-sm tracking-widest mb-4 flex items-center">
            <span className="text-gray-500 mr-2">//</span> PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            FEATURED <span className="text-[var(--color-neon-purple)] drop-shadow-[0_0_15px_rgba(176,38,255,0.6)]">PROJECTS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#0c0c0e] border border-white/5 hover:border-[var(--color-neon-purple)]/50 rounded-lg overflow-hidden transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(176,38,255,0.15)] flex flex-col"
            >              
              <div className="h-48 w-full relative border-b border-white/5 overflow-hidden bg-black/50">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />              
                <div className="absolute top-4 left-4 bg-[#09090b]/80 backdrop-blur-sm border border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] text-[10px] font-mono px-3 py-1 flex items-center tracking-widest z-10">
                  {project.icon}
                  {project.type}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow z-10 bg-[#0c0c0e]">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-neon-cyan)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-sm border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <Link 
                    href={project.link} 
                    target="_blank"
                    className="flex items-center text-[var(--color-neon-cyan)] text-xs font-mono tracking-widest hover:text-white transition-colors duration-200 mt-auto w-fit"
                  >
                    VIEW PROJECT <ExternalLink size={14} className="ml-2" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}