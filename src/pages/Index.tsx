import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import DemoSection from "@/components/landing/DemoSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <DifferentialSection />
      <UseCasesSection />
      <DemoSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
