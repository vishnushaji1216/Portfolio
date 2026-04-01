import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Landing Page",
      description:
        "A fast, mobile-first website that represents your business professionally and converts visitors into leads.",
      includes: "Design + Development · CMS Integration · Contact Form · SEO Basics · 2 Rounds of Revisions",
      timeline: "2–3 days",
      price: "₹1,500 - ₹10k",
      popular: false,
    },
    {
      title: "Android App",
      description:
        "A complete mobile application uploaded to the Play Store, built for performance and user retention.",
      includes: "UX/UI Design · React Native · Backend & API · Play Store Deployment · 1 Month Support",
      timeline: "4–6 weeks",
      price: "₹40,000+",
      popular: false,
    },
    {
      title: "Full Web App",
      description:
        "A complete web application with user accounts, dashboards, and backend logic — built to scale.",
      includes: "Frontend + Backend + Database · Auth System · Admin Dashboard · Deployment · 1 Month Support",
      timeline: "3–6 weeks",
      price: "₹20,000+",
      popular: true,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center md:text-left">
          <span className="font-mono text-sm text-[var(--color-neon-cyan)] tracking-widest uppercase">
            // WHAT I BUILD
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative bg-[#111111] border p-8 flex flex-col justify-between ${
                service.popular ? "border-[rgba(0,229,255,0.4)]" : "border-[#1e1e1e]"
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--color-neon-cyan)] text-black text-xs font-bold font-mono px-3 py-1 tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                <div className="border-t border-[#1e1e1e] pt-6">
                  <div className="text-[28px] font-mono text-[var(--color-neon-cyan)] mb-2">
                    {service.price}
                  </div>
                  <div className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-4">
                    Starting from
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-white text-sm font-semibold block mb-1">Timeline:</span>
                    <span className="text-gray-400 text-sm">{service.timeline}</span>
                  </div>
                  <div>
                    <span className="text-white text-sm font-semibold block mb-1">Includes:</span>
                    <span className="text-gray-400 text-sm leading-relaxed">{service.includes}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#1e1e1e]">
                <Link
                  href="#contact"
                  className={`block text-center py-4 text-sm font-mono tracking-widest transition-colors ${
                    service.popular
                      ? "bg-[var(--color-neon-cyan)] text-black hover:bg-white"
                      : "border border-[#1e1e1e] text-white hover:border-[var(--color-neon-cyan)] hover:text-[var(--color-neon-cyan)]"
                  }`}
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
