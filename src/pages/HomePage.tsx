import { useTranslation } from "react-i18next";
import { SEO } from "@/components/layout/SEO";
import { HeroSection } from "@/features/home/HeroSection";
import { StatsBanner } from "@/features/home/StatsBanner";
import { ServicesPreview } from "@/features/home/ServicesPreview";
import { TechStack } from "@/features/home/TechStack";
import { ClientLogos } from "@/features/home/ClientLogos";
import { CTASection } from "@/components/sections/CTASection";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <SEO 
        title={t("nav.home")} 
        description={t("home.hero.subtitle")}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Banner */}
      <StatsBanner />

      {/* Services Preview Grid */}
      <ServicesPreview />

      {/* Tech Stack Strip */}
      <TechStack />

      {/* Client Logos Strip */}
      <ClientLogos />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;
