import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/layout/SEO";
import { CompanyStory } from "@/features/about/CompanyStory";
import { VisionMission } from "@/features/about/VisionMission";
import { Timeline } from "@/features/about/Timeline";
import { TeamGrid } from "@/features/about/TeamGrid";
import { WhyChooseUs } from "@/features/about/WhyChooseUs";

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white dark:bg-slate-950">
      <SEO title={t("about.title")} description={t("about.subtitle")} />

      {/* Page Header */}
      <PageHeader
        badge="Company Profile"
        title="Tentang"
        titleHighlight="XERANET"
        description={t("about.subtitle")}
      />

      {/* Company Story Section */}
      <CompanyStory />

      {/* Vision & Mission Cards */}
      <VisionMission />

      {/* Timeline Section */}
      <Timeline />

      {/* Team Grid Section */}
      <TeamGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </div>
  );
};

export default AboutPage;
