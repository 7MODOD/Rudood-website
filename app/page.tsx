import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyRudood from "@/components/WhyRudood";
import PlatformsSection from "@/components/PlatformsSection";
import HowWeWork from "@/components/HowWeWork";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-night text-text-primary overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PlatformsSection />
      <WhyRudood />
      <HowWeWork />
      <UseCases />
      <Pricing />
      <ContactForm />
      <FAQ />
      <Footer />
      <LiveChat />
    </main>
  );
}
