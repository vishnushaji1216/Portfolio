import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <Story />
      <Services />
      <Projects />
      <About />
      <Process />
      <Testimonials />
      <Skills />
      <FAQ />
      <Contact />
    </main>
  );
}