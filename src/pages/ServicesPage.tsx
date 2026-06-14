import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { SEO } from "@/components/layout/SEO";
import { pricingPlans } from "@/data/servicesData";
import { ServicesHero } from "@/features/services/ServicesHero";
import { PricingCard } from "@/features/services/PricingCard";
import { ComparisonTable } from "@/features/services/ComparisonTable";
import { ProcessSteps } from "@/features/services/ProcessSteps";
import { FAQAccordion } from "@/features/services/FAQAccordion";

export const ServicesPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"b2c" | "b2b">("b2c");

  const filteredPlans = pricingPlans.filter((plan) => plan.type === activeTab);

  return (
    <div className="w-full bg-white dark:bg-slate-950">
      <SEO title={t("services.title")} description={t("services.subtitle")} />

      {/* Page Header */}
      <PageHeader
        badge="Layanan Lengkap"
        title="Layanan &"
        titleHighlight="Paket Harga"
        description={t("services.subtitle")}
      />

      {/* Service Hero Sections (4 Column Grid) */}
      <ServicesHero />

      {/* Process Steps Section */}
      <ProcessSteps />

      {/* Pricing Tabs & Cards */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-sm font-bold text-primary tracking-widest uppercase">
              Pricing Plans
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {t("services.pricing.title")}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {t("services.pricing.subtitle")}
            </p>

            {/* Custom Sliding Tab Selector */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl max-w-md mx-auto mt-6 relative z-10 border border-border">
              <button
                onClick={() => setActiveTab("b2c")}
                className={`flex-1 py-3 text-xs md:text-sm font-extrabold rounded-xl transition-all cursor-pointer relative z-20 ${
                  activeTab === "b2c"
                    ? "text-primary bg-white dark:bg-slate-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                }`}
              >
                {t("services.pricing.tabB2C")}
              </button>
              <button
                onClick={() => setActiveTab("b2b")}
                className={`flex-1 py-3 text-xs md:text-sm font-extrabold rounded-xl transition-all cursor-pointer relative z-20 ${
                  activeTab === "b2b"
                    ? "text-primary bg-white dark:bg-slate-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                }`}
              >
                {t("services.pricing.tabB2B")}
              </button>
            </div>
          </div>

          {/* Plan Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {filteredPlans.map((plan, idx) => (
              <PricingCard key={plan.id} plan={plan} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* FAQ Accordion */}
      <FAQAccordion />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default ServicesPage;
