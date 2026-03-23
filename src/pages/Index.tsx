import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PricingSection from "@/components/PricingSection";
import ClientsSection from "@/components/ClientsSection";
import DevisSection from "@/components/DevisSection";
import BookingSection from "@/components/BookingSection";
import FreelanceSection from "@/components/FreelanceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <AdvantagesSection />
      <PricingSection />
      <ClientsSection />
      <BookingSection />
      <DevisSection />
      <CTASection />
      <FreelanceSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
