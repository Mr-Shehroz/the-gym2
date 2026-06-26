// components/FranchiseSection.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const ease = [0.4, 0, 0.2, 1] as const;

export default function FranchiseSection() {
  const [formData, setFormData] = useState({
    fullName: "", phone: "", email: "", city: "", state: "",
    role: "", capital: "", timeline: "", interest: "", callTime: "",
    agreeTransactional: false, agreeMarketing: false,
  });

  // ── Submission State ──
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Send formData to your backend/API here
    console.log("Form submitted:", formData);

    setIsSubmitted(true);
    
    // Reset form and hide toast after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "", phone: "", email: "", city: "", state: "",
        role: "", capital: "", timeline: "", interest: "", callTime: "",
        agreeTransactional: false, agreeMarketing: false,
      });
    }, 5000);
  };

  const inputClass = "w-full bg-black/40 border border-white/10 text-white px-4 py-3.5 outline-none focus:border-yellow-400 transition-colors duration-200 placeholder:text-white/20 text-[14px]";
  const labelClass = "block text-[10px] font-bold tracking-[2px] uppercase text-white/40 mb-2";
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff66' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: `right 0.75rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.25em 1.25em`, paddingRight: `2.5rem`
  };

  return (
    <section id="collection" className="relative md:py-24 py-16 bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" alt="" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* ── LEFT CONTENT ── (Kept same as previous response) */}
          <div className="lg:sticky lg:top-32">
            <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease }}>
              <span className="w-9 h-px bg-yellow-400 flex-shrink-0" />
              <span className="text-[10.5px] font-bold tracking-[4px] uppercase text-yellow-400">The Collection · Franchise</span>
            </motion.div>
            <h2 className="leading-[0.9] tracking-wide mb-8" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px, 5vw, 80px)" }}>
              <span className="block overflow-hidden"><motion.span className="block text-white" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, ease }}>WANT TO OPEN A</motion.span></span>
              <span className="block overflow-hidden"><motion.span className="block text-yellow-400" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease }}>GYM?</motion.span></span>
            </h2>
            <motion.div className="relative mt-10 mb-10 border border-white/7 overflow-hidden group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease }}>
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80" alt="Motivational" className="w-full h-72 object-cover grayscale-[0.3] contrast-[1.1] group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6"><p className="text-white text-xl md:text-2xl tracking-wider" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>"HOW BAD DO YOU WANT IT?"</p></div>
            </motion.div>
            <motion.p className="text-[15px] text-white/42 leading-[1.85] mb-10 max-w-lg" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, ease }}>
              Some people talk about leaving the world a better place, some people take action and make the world a better place!
            </motion.p>
            <ul className="space-y-5">
              {["40+ years of brand authority", "Proven franchise model", "Full support from day one", "Exclusive territory protection"].map((item, index) => (
                <motion.li key={index} className="flex items-center gap-4 group" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 + (index * 0.1), ease }}>
                  <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}><Check className="w-4 h-4 text-black" strokeWidth={3} /></div>
                  <span className="text-white/70 text-[15px] font-medium tracking-wide">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT FORM ── */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease }} className="bg-white/[0.02] border border-white/7 backdrop-blur-xl p-8 md:p-10">
            <h3 className="text-white text-3xl md:text-4xl mb-8 tracking-wide" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>GET STARTED TODAY</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div><label className={labelClass}>Full Name</label><input type="text" className={inputClass} placeholder="Full Name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} /></div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Phone *</label><input type="tel" required className={inputClass} placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></div>
                <div><label className={labelClass}>Email *</label><input type="email" required className={inputClass} placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>City</label><input type="text" className={inputClass} placeholder="City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} /></div>
                <div><label className={labelClass}>State</label><input type="text" className={inputClass} placeholder="State" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} /></div>
              </div>
              <div><label className={labelClass}>Your Role / Experience?</label><select className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle} value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}><option value="">Select...</option><option value="owner">Owner</option><option value="operator">Operator</option><option value="investor">Investor</option></select></div>
              <div><label className={labelClass}>Capital to Invest</label><select className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle} value={formData.capital} onChange={(e) => setFormData({ ...formData, capital: e.target.value })}><option value="">Select...</option><option value="50-100k">$50-100K</option><option value="100-200k">$100-200K</option><option value="200k+">$200K+</option></select></div>
              <div><label className={labelClass}>Timeline for Opening</label><select className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle} value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}><option value="">Select...</option><option value="3months">Within 3 months</option><option value="6months">3-6 months</option><option value="1year">6-12 months</option></select></div>
              <div><label className={labelClass}>Why interest in licensing?</label><select className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle} value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })}><option value="">Select...</option><option value="movement">Love The Movement</option><option value="brand">Brand Recognition</option><option value="community">Community Focus</option></select></div>
              <div><label className={labelClass}>Best Time for a Call</label><select className={`${inputClass} appearance-none cursor-pointer`} style={selectStyle} value={formData.callTime} onChange={(e) => setFormData({ ...formData, callTime: e.target.value })}><option value="">Select...</option><option value="morning">Morning</option><option value="afternoon">Afternoon</option><option value="evening">Evening</option></select></div>
              
              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 bg-black/40 border border-white/20 text-yellow-400 focus:ring-0 focus:ring-offset-0 rounded-none accent-yellow-400 cursor-pointer" checked={formData.agreeTransactional} onChange={(e) => setFormData({ ...formData, agreeTransactional: e.target.checked })} />
                  <span className="text-[13px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">By checking this box, I consent to receive transactional messages about my account, orders, or services.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 bg-black/40 border border-white/20 text-yellow-400 focus:ring-0 focus:ring-offset-0 rounded-none accent-yellow-400 cursor-pointer" checked={formData.agreeMarketing} onChange={(e) => setFormData({ ...formData, agreeMarketing: e.target.checked })} />
                  <span className="text-[13px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">By checking this box, I consent to receive marketing and promotional messages including special offers and updates.</span>
                </label>
              </div>

              <button type="submit" className="relative overflow-hidden w-full text-[11px] font-black tracking-[2.5px] uppercase bg-yellow-400 text-black py-4 hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-200 group mt-8" style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}>
                <span className="relative z-10">Submit Application</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-500" />
              </button>
              <p className="text-[11px] text-white/20 text-center mt-6 tracking-wide"><a href="#" className="underline hover:text-yellow-400 transition-colors">Privacy Policy</a>{" | "}<a href="#" className="underline hover:text-yellow-400 transition-colors">Terms of Service</a></p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── FORM SUBMISSION TOAST NOTIFICATION ── */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50 bg-yellow-400 text-black px-6 py-4 shadow-2xl flex items-center gap-3"
          style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}
        >
          <Check className="w-5 h-5" strokeWidth={3} />
          <span className="text-[11px] font-black tracking-[2px] uppercase">Application Submitted!</span>
        </motion.div>
      )}
    </section>
  );
}