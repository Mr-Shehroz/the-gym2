// pages/index.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import TakeBackSection from "@/components/TakeBackSection";
import FranchiseSection from "@/components/FranchiseSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyPartnerSection />
      <TakeBackSection />
      <FranchiseSection />
      <Footer />
    </main>
  );
}