import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyRudood from "@/components/WhyRudood";
import PlatformsSection from "@/components/PlatformsSection";
import HowWeWork from "@/components/HowWeWork";
import TryNow from "@/components/TryNow";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-night text-text-primary overflow-x-hidden">
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
