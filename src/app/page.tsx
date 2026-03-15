import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Story from "@/components/Story";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <Story />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}