"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, 
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" }); 
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something together
          </h2>
          <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-md mb-8">
            Have a project in mind? Fill out the form and I'll get back to you 
            within 24 hours — or reach out directly on WhatsApp.
          </p>

          <div className="mb-12">
            <a href="#" className="inline-block px-6 py-4 bg-[var(--color-neon-cyan)] text-black font-mono text-sm font-bold tracking-widest hover:bg-white transition-colors duration-300 w-full md:w-auto text-center">
              Book a Free Discovery Call →
            </a>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[var(--color-neon-cyan)] rounded-sm">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-1">Location</div>
                <div className="text-white font-mono text-sm">Kannur, Kerala</div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[var(--color-neon-cyan)] rounded-sm">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-1">Email</div>
                <div className="text-white font-mono text-sm">vishnu.shaji.1216@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 pt-6">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[var(--color-neon-cyan)] rounded-sm">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-1">WhatsApp</div>
                <a href="https://wa.me/917907021204" target="_blank" rel="noopener noreferrer" className="text-white font-mono text-sm hover:text-[var(--color-neon-cyan)] transition-colors">+91 7907021204</a>
              </div>
            </div>

        </div>
      
        <div className="lg:mt-8">
          <form onSubmit={handleSubmit} className="space-y-10 flex flex-col relative">
            
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-transparent border-b border-white/10 py-3 text-white font-mono text-sm focus:outline-none focus:border-[var(--color-neon-cyan)] transition-colors duration-300 placeholder:text-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-transparent border-b border-white/10 py-3 text-white font-mono text-sm focus:outline-none focus:border-[var(--color-neon-cyan)] transition-colors duration-300 placeholder:text-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-2">Message</label>
              <textarea 
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project — what are you trying to build?"
                className="bg-transparent border-b border-white/10 py-3 text-white font-mono text-sm h-24 resize-none focus:outline-none focus:border-[var(--color-neon-cyan)] transition-colors duration-300 placeholder:text-gray-700"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`mt-4 w-full flex items-center justify-center space-x-3 border font-mono text-sm tracking-widest py-4 transition-all duration-300 group
                ${isSuccess 
                  ? "bg-green-500/10 border-green-500 text-green-500 cursor-default"
                  : "bg-[#011c24] border-[var(--color-neon-cyan)]/50 text-[var(--color-neon-cyan)] hover:bg-[var(--color-neon-cyan)] hover:text-black shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>SENDING...</span>
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle size={16} />
                  <span>MESSAGE SENT</span>
                </>
              ) : (
                <>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  <span>Send Message →</span>
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}