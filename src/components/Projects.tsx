"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Globe, Smartphone, Workflow } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  type: string;
  icon: ReactNode;
  description: string;
  badge?: string;
  outcome?: string;
  tech: string[];
  link?: string;
  image: string;
  actionText?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Stella Maris School",
    type: "WEB",
    icon: <Globe size={14} className="mr-2" />,
    badge: "WEB · LIVE",
    description:
      "A modern institutional website providing a seamless digital gateway for students and parents.",
    outcome: "Now serves 200+ parent visits per month",
    tech: ["React", "Next.js", "Tailwind"],
    link: "https://www.stellamaris-school.org/",
    image: "/images/Stella_web.jpg",
    actionText: "Visit Site",
  },
  {
    id: 2,
    title: "Stella Bridge App",
    type: "MOBILE",
    icon: <Smartphone size={14} className="mr-2" />,
    badge: "MOBILE · DELIVERED TO CLIENT · 2026",
    description:
      "Educational tracking platform for Stella Maris School. 35+ screens serving students, teachers, and admins. Includes fee management, quiz system, and multimedia assignment submission.",
    outcome: "Replaced WhatsApp-based school operations entirely",
    tech: ["React Native", "Android"],
    link: "/blog/stella-bridge",
    image: "/images/stella_bridge.jpg",
    actionText: "Read Case Study",
  },
  {
    id: 3,
    title: "DocuCompare Automation",
    type: "AUTOMATION",
    icon: <Workflow size={14} className="mr-2" />,
    badge: "AUTOMATION · DELIVERED TO CLIENT",
    description:
      "Automation workflow engine that parses and compares complex documents using n8n pipelines and a FastAPI backend. Built for a client who needed to process large volumes of structured documents.",
    outcome: "Delivered to client — read the full breakdown",
    tech: ["n8n", "FastAPI"],
    image: "/images/n8n_workflow.jpg",
  },
];

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

const ProjectShowcase = ({ project, index }: ProjectShowcaseProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="py-16 flex items-center"
    >
      <motion.div
        style={{ scale }}
        className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
      >
        {/* Image */}
        <motion.div
          style={{ y }}
          className={`relative overflow-hidden aspect-video ${
            isEven ? "" : "lg:order-2"
          }`}
        >
          <motion.img
            style={{ scale: imageScale }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Type Badge */}
          {project.badge ? (
            <div className="absolute top-4 left-4 flex items-center text-xs font-mono text-[#25D366] font-bold bg-[#0d0d0d]/90 border border-[#25D366]/30 backdrop-blur px-3 py-1.5 rounded">
              {project.badge}
            </div>
          ) : (
            <div className="absolute top-4 left-4 flex items-center text-xs font-mono text-white bg-black/60 backdrop-blur px-3 py-1 rounded">
              {project.icon}
              {project.type}
            </div>
          )}
        </motion.div>

        {/* Content */}
        <div className={`space-y-5 ${isEven ? "" : "lg:order-1 lg:text-right"}`}>
          <span className="font-mono text-sm text-cyan-400">
            {`// PROJECT 0${index + 1}`}
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h3>

          <p className="text-white/60 leading-relaxed text-[15px]">{project.description}</p>
          
          {project.outcome && (
            <p className="text-gray-400 font-mono text-sm leading-relaxed border-l-2 border-[#1e1e1e] pl-4 italic">
              "{project.outcome}"
            </p>
          )}

          {/* Tech stack */}
          <div
            className={`flex flex-wrap gap-2 ${
              isEven ? "" : "lg:justify-end"
            }`}
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-white/60 border border-white/20 px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <div className={`${isEven ? "" : "lg:justify-end"} flex pt-2`}>
              {project.link.startsWith("/") ? (
                <Link
                  href={project.link}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-cyan-400 transition"
                >
                  <ExternalLink size={16} />
                  {project.actionText || "Visit Project"}
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-cyan-400 transition"
                >
                  <ExternalLink size={16} />
                  {project.actionText || "Visit Project"}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">

      {/* Header */}
      <div className="sticky top-24 z-40 mb-20 px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    <span className="text-sm font-mono text-cyan-400">
      {"// PORTFOLIO"}
    </span>

    <h2 className="text-5xl font-bold text-white mt-4">
      FEATURED <span className="text-purple-400">PROJECTS</span>
    </h2>

    <p className="text-white/60 mt-4 max-w-xl">
      A showcase of web platforms, mobile apps, and full-stack systems
      built to solve real problems.
    </p>
  </div>
</div>

      {/* Projects */}
      <div className="px-6 md:px-12 lg:px-24">
        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}