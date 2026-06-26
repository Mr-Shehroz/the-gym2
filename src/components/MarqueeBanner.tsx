// components/MarqueeBanner.tsx
"use client";

const items = [
  "Mental Health",
  "Physical Health",
  "Freedom of Choice",
  "Est. 1985",
  "9+ Locations",
  "Culture Driven",
  "No Fluff",
  "Win Big",
];

export default function MarqueeBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-white font-bold text-lg tracking-wider flex items-center gap-3"
          >
            <span className="w-2 h-2 bg-white rounded-full" />
            {item.toUpperCase()}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}