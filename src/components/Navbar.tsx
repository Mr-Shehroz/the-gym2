"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "The Revolution", href: "#revolution" },
  { name: "The Business",   href: "#business"  },
  { name: "The Locations",  href: "#locations" },
  { name: "The Collection", href: "#collection"},
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route-change / link click
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── DESKTOP / TABLET NAV ── */}
      <nav
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-400
          ${scrolled
            ? "bg-black/94 backdrop-blur-xl border-b border-yellow-500/15"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-[1440px] px-4 md:px-8 xl:px-10 mx-auto h-20 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-[14px] group flex-shrink-0">
            <div
              className="w-[46px] h-[46px] bg-yellow-400 flex items-center justify-center
                         transition-transform duration-300 group-hover:rotate-[30deg]"
              style={{
                clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              <span className="text-black text-[18px] font-black tracking-wider">TG</span>
            </div>
            <span
              className="text-white text-[26px] tracking-[4px] leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              THE <span className="text-yellow-400">GYM</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9 list-none flex-1 justify-center">
            {navLinks.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="
                    relative text-[10.5px] font-bold tracking-[2.5px] uppercase
                    text-white/50 hover:text-white transition-colors duration-250
                    group whitespace-nowrap
                  "
                >
                  {l.name}
                  <span className="
                    absolute -bottom-1 left-0 h-px w-0 bg-yellow-400
                    transition-all duration-300 group-hover:w-full
                  " />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className="
              hidden lg:block flex-shrink-0
              text-[10.5px] font-black tracking-[2.5px] uppercase
              bg-yellow-400 text-black px-7 py-[13px]
              hover:bg-white transition-colors duration-200
              hover:-translate-y-0.5 active:translate-y-0
            "
            style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}
          >
            Sign Up
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 flex flex-col gap-[5px] group"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center
              ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300
              ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center
              ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div
        className={`
          fixed top-20 inset-x-0 z-40 lg:hidden
          bg-black/98 backdrop-blur-xl
          border-b border-white/7
          px-[max(24px,5vw)] overflow-hidden
          transition-all duration-300
          ${menuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"}
        `}
      >
        <div className="space-y-0">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={closeMenu}
              className="
                block py-[14px] border-b border-white/7
                text-[11px] font-bold tracking-[2.5px] uppercase
                text-white/50 hover:text-yellow-400
                transition-colors duration-200
              "
            >
              {l.name}
            </Link>
          ))}
          <button
            onClick={closeMenu}
            className="
              w-full mt-6 py-4
              text-[11px] font-black tracking-[2.5px] uppercase
              bg-yellow-400 text-black
              hover:bg-white transition-colors duration-200
            "
            style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}