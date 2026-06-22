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
import LiveChat from "@/components/LiveChat";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/faq-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E1B4B] overflow-x-hidden">
      <JsonLd locale="ar" faqItems={faqs} />
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
