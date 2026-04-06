import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyRudood from "@/components/WhyRudood";
import HowWeWork from "@/components/HowWeWork";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-night text-text-primary overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhyRudood />
      <HowWeWork />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
