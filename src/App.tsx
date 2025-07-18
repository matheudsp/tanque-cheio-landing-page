import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BenefitsSection } from "./components/sections/BenefitsSection";
import { CtaSection } from "./components/sections/CtaSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { HeroSection } from "./components/sections/HeroSection";
import { PriceDifferenceSection } from "./components/sections/PriceDifferenceSection";
import { ScrollProgress } from "./components/animate-ui/components/scroll-progress"; // 1. Importe o componente

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <ScrollProgress progressProps={{ className: "bg-cyan-500" }} />

      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <PriceDifferenceSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
