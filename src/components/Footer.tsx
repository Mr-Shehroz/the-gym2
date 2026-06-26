// components/Footer.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Check } from "lucide-react";

export default function Footer() {
  // ── Newsletter State ──
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // TODO: Send email to your backend/API here
    console.log("Subscribing email:", email);

    setIsSubscribed(true);
    setEmail("");
    
    // Hide toast after 4 seconds
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  // Social media SVG icons (kept same as before)
  const InstagramIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>);
  const FacebookIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>);
  const TwitterIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
  const TikTokIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" /></svg>);

  return (
    <footer className="bg-[#080808] border-t border-white/7 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-10 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* ── BRAND COLUMN ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-[14px] group mb-6">
              <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center transition-transform duration-300 group-hover:rotate-[30deg]" style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
                <span className="text-black text-[14px] font-black tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>TG</span>
              </div>
              <span className="text-white text-[20px] tracking-[3px] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>THE <span className="text-yellow-400">GYM</span></span>
            </Link>
            <p className="text-[13px] text-white/30 leading-relaxed mb-8 max-w-xs">A cut the fat, NO FLUFF culture driven concept. Est. 1985. Building communities through strength, freedom, and authenticity.</p>
            <div className="flex gap-3">
              {[{ icon: <InstagramIcon />, label: "Instagram" }, { icon: <FacebookIcon />, label: "Facebook" }, { icon: <TwitterIcon />, label: "Twitter" }, { icon: <TikTokIcon />, label: "TikTok" }].map((social, i) => (
                <a key={i} href="#" aria-label={social.label} className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">{social.icon}</a>
              ))}
            </div>
          </div>

          {/* ── QUICK LINKS COLUMN ── */}
          <div>
            <h4 className="text-[11px] font-black tracking-[3px] uppercase text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[{ name: "The Revolution", href: "#revolution" }, { name: "The Business", href: "#business" }, { name: "The Locations", href: "#locations" }, { name: "The Collection", href: "#collection" }].map((link) => (
                <li key={link.name}><Link href={link.href} className="text-[12px] font-medium tracking-[1.5px] uppercase text-white/30 hover:text-yellow-400 transition-colors duration-200 inline-block hover:translate-x-1 transform">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT COLUMN ── */}
          <div>
            <h4 className="text-[11px] font-black tracking-[3px] uppercase text-white mb-8">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 group"><div className="w-8 h-8 flex items-center justify-center border border-white/10 text-yellow-400 flex-shrink-0 group-hover:border-yellow-400 transition-colors"><Mail className="w-3.5 h-3.5" strokeWidth={1.5} /></div><span className="text-[13px] text-white/40 group-hover:text-white/70 transition-colors">info@thegym.com</span></li>
              <li className="flex items-center gap-4 group"><div className="w-8 h-8 flex items-center justify-center border border-white/10 text-yellow-400 flex-shrink-0 group-hover:border-yellow-400 transition-colors"><Phone className="w-3.5 h-3.5" strokeWidth={1.5} /></div><span className="text-[13px] text-white/40 group-hover:text-white/70 transition-colors">1-800-THE-GYM</span></li>
              <li className="flex items-center gap-4 group"><div className="w-8 h-8 flex items-center justify-center border border-white/10 text-yellow-400 flex-shrink-0 group-hover:border-yellow-400 transition-colors"><MapPin className="w-3.5 h-3.5" strokeWidth={1.5} /></div><span className="text-[13px] text-white/40 group-hover:text-white/70 transition-colors">9 Locations Nationwide</span></li>
            </ul>
          </div>

          {/* ── NEWSLETTER COLUMN ── */}
          <div>
            <h4 className="text-[11px] font-black tracking-[3px] uppercase text-white mb-8">Stay Updated</h4>
            <p className="text-[13px] text-white/30 mb-6 leading-relaxed">Subscribe for fitness tips, exclusive offers, and gym updates.</p>
            
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 text-white px-4 py-3.5 outline-none focus:border-yellow-400 transition-colors duration-200 placeholder:text-white/20 text-[13px]"
              />
              <button
                type="submit"
                className="relative overflow-hidden w-full text-[10.5px] font-black tracking-[2.5px] uppercase bg-yellow-400 text-black py-3.5 hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-200 group"
                style={{ clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/7 bg-black/20">
        <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/20 tracking-wide text-center md:text-left">© {new Date().getFullYear()} THE GYM. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-[11px] text-white/20 hover:text-yellow-400 tracking-wide transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[11px] text-white/20 hover:text-yellow-400 tracking-wide transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── SUBSCRIPTION TOAST NOTIFICATION ── */}
      {isSubscribed && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50 bg-yellow-400 text-black px-6 py-4 shadow-2xl flex items-center gap-3"
          style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}
        >
          <Check className="w-5 h-5" strokeWidth={3} />
          <span className="text-[11px] font-black tracking-[2px] uppercase">Subscribed Successfully!</span>
        </motion.div>
      )}
    </footer>
  );
}