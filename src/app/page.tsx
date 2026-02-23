import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}