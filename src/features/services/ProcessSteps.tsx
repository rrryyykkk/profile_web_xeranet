import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { processSteps } from "@/data/servicesData";

export const ProcessSteps = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1E0A3C 0%, #2E1065 55%, #164E63 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#06B6D4" }}>
            {t("services.steps.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t("services.steps.subtitle")}
          </h2>
          <p className="text-white/50 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            {t("services.steps.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl font-extrabold mb-3 opacity-30" style={{ color: step.color }}>
                {step.num}
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{t(step.titleKey)}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{t(step.descriptionKey)}</p>
              <div
                className="absolute top-0 right-0 w-1 h-full rounded-r-xl opacity-60"
                style={{ background: step.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
