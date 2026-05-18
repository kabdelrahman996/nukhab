import PremiumBentoSection from "./_components/AnalyticsMockup";
import FeaturesShowcase from "./_components/FeaturesShowcase";
import FinalCTA from "./_components/FinalCTA";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import IntegrationsGrid from "./_components/IntegrationsGrid";
import ProcessSteps from "./_components/ProcessSteps";

function Page() {
  return (
    <div>
      <Hero />
      <FeaturesShowcase />
      <PremiumBentoSection />
      <ProcessSteps />
      <IntegrationsGrid />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default Page;
