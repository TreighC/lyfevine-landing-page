import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyLyfevineSection from "@/components/WhyLyfevineSection";
import CoreBenefitsSection from "@/components/CoreBenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WellnessServicesSection from "@/components/WellnessServicesSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyLyfevineSection />
      <CoreBenefitsSection />
      <HowItWorksSection />
      <WellnessServicesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
