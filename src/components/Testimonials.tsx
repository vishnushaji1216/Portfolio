export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <span className="font-mono text-sm text-[var(--color-neon-cyan)] tracking-widest uppercase">
            // WHAT CLIENTS SAY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Trusted by real clients</h2>
        </div>

        <div className="max-w-4xl bg-[#111111] border-l-[3px] border-[var(--color-neon-cyan)] p-8 md:p-12 relative">
          <div className="absolute top-4 left-6 text-7xl font-serif text-[var(--color-neon-cyan)] opacity-20 select-none">
            "
          </div>
          <p className="relative z-10 text-[#d1d5db] text-lg md:text-xl leading-[1.8] italic mb-8 pt-4">
            Vishnu built our school's entire digital system from scratch. What impressed us most was how clearly he explained every step — we always knew what was happening and why.
          </p>
          <div className="relative z-10 font-mono text-sm text-gray-500 uppercase tracking-widest">
            — School Administrator, Stella Maris School, Kannur
          </div>
        </div>
      </div>
    </section>
  );
}
