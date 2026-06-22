import Navbar from "@/components/en/Navbar";
import HeroSection from "@/components/en/HeroSection";
import PlatformsSection from "@/components/en/PlatformsSection";
import WhyRudood from "@/components/en/WhyRudood";
import HowWeWork from "@/components/en/HowWeWork";
import TryNow from "@/components/en/TryNow";
import UseCases from "@/components/en/UseCases";
import Pricing from "@/components/en/Pricing";
import ContactForm from "@/components/en/ContactForm";
import FAQ from "@/components/en/FAQ";
import Footer from "@/components/en/Footer";
import LiveChat from "@/components/LiveChat";

export default function EnHome() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E1B4B] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PlatformsSection />
      <WhyRudood />
      <HowWeWork />
      <TryNow />

      <Pricing />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  );
}
