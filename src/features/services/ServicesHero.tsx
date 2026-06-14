import { useTranslation } from "react-i18next";
import { servicesList } from "@/data/servicesData";
import { ServiceCard } from "./ServiceCard";

export const ServicesHero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-linear-to-b from-slate-50/50 to-white dark:from-slate-900/30 dark:to-slate-950 border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16 flex flex-col gap-3">
          <span className="text-sm font-bold uppercase tracking-widest block text-primary">
            {t("services.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("home.services.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            {t("home.services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
