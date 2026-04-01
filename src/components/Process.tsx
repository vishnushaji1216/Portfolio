import Link from "next/link";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      desc: "We spend 20–30 minutes understanding your problem, your users, and your goals. No commitment required.",
      cta: "Book a free call →",
    },
    {
      num: "02",
      title: "Proposal",
      desc: "I send you a clear scope document — what will be built, how long it takes, and what it costs. No surprises.",
    },
    {
      num: "03",
      title: "Build",
      desc: "I build in focused sprints and share progress updates regularly. You can give feedback at every stage.",
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "I handle deployment and stay available for one month post-launch to fix any issues that come up.",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <span className="font-mono text-sm text-[var(--color-neon-cyan)] tracking-widest uppercase">
            // THE PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">How we work together</h2>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-6 items-stretch">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[100px] left-0 right-0 h-px border-t border-dashed border-[#1e1e1e] -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex-1 bg-[#111111] border border-[#1e1e1e] p-6 lg:p-8 flex flex-col z-10 overflow-hidden">
              <div className="absolute -top-4 -right-2 text-8xl font-mono font-bold text-[#222222] opacity-30 select-none poiner-events-none">
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
                {step.cta && (
                  <Link href="#contact" className="text-[var(--color-neon-cyan)] font-mono text-sm hover:underline">
                    {step.cta}
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
