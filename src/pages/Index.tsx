import { Navbar } from "@/components/Navbar";
import { BentoGrid } from "@/components/BentoGrid";
import { HeroCard } from "@/components/HeroCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { StrategyCard } from "@/components/StrategyCard";
import { SkillsCard } from "@/components/SkillsCard";
import { FocusCard } from "@/components/FocusCard";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { IntroSection } from "@/components/IntroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      
      {/* Full-screen Intro Section */}
      <IntroSection />
      
      {/* Hero / Bento Grid Section */}
      <main id="home" className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <BentoGrid>
            <HeroCard />
            <ExperienceCard />
            <StrategyCard />
            <SkillsCard />
            <FocusCard />
          </BentoGrid>
        </div>
      </main>

      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
