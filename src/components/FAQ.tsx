"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A landing page takes 2–3 days. A full web app takes 3–6 weeks, and an Android app takes 4–6 weeks. I'll give you a clear timeline in the proposal before we start.",
  },
  {
    q: "What does it cost?",
    a: "Landing pages range from ₹1,500 to ₹10,000. Web apps and Android apps start from ₹45,000. Every project gets a fixed-price quote — no hourly billing surprises.",
  },
  {
    q: "Do you work with clients outside Kerala?",
    a: "Yes. Most of my communication happens over WhatsApp and video calls. Location doesn't matter.",
  },
  {
    q: "What happens after the project launches?",
    a: "I offer one month of free support after every launch. After that, I offer affordable monthly maintenance packages.",
  },
  {
    q: "Do you sign NDAs or contracts?",
    a: "Yes, always. Every project is covered by a simple written agreement that protects both sides.",
  },
  {
    q: "I have an idea but don't know if it's technically possible — can we still talk?",
    a: "Absolutely. The discovery call is free and there's no obligation. I'll tell you honestly if it's feasible and what it would take.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-[var(--color-neon-cyan)] tracking-widest uppercase">
            // COMMON QUESTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Things clients usually ask</h2>
        </div>

        <div className="border-t border-[#1e1e1e]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#1e1e1e]">
              <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-bold text-white group-hover:text-[var(--color-neon-cyan)] transition-colors">
                  {faq.q}
                </span>
                <span className="text-[var(--color-neon-cyan)] ml-4 shrink-0">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-400 leading-relaxed text-sm md:text-base pr-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
