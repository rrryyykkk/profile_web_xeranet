import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import type { PricingPlan } from "@/types/service.types";

interface PricingCardProps {
  plan: PricingPlan;
  idx: number;
}

export const PricingCard = ({ plan, idx }: PricingCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className={`p-8 bg-white dark:bg-slate-900 rounded-3xl border shadow-sm relative flex flex-col justify-between gap-6 ${
        plan.isPopular
          ? "border-primary/50 dark:border-primary/50 ring-1 ring-primary/20"
          : "border-border"
      }`}
    >
      {plan.isPopular && (
        <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm">
          {t("services.pricing.recommendation")}
        </span>
      )}

      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          {t(`services.pricing.plans.${plan.translationKey}.name`)}
        </span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            {t(`services.pricing.plans.${plan.translationKey}.price`)}
          </span>
          <span className="text-sm font-medium text-slate-500">
            {t(`services.pricing.plans.${plan.translationKey}.period`)}
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2">
          {t(`services.pricing.plans.${plan.translationKey}.desc`)}
        </p>
      </div>

      <div className="h-px bg-border my-2" />

      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {t("services.pricing.features")}:
        </span>
        <ul className="flex flex-col gap-3">
          {/* We assume each plan has 5 or 6 features, we can map over an array returned by t with returnObjects: true */}
          {(
            t(`services.pricing.plans.${plan.translationKey}.features`, {
              returnObjects: true,
            }) as string[]
          ).map((feature, fIdx) => (
            <li
              key={fIdx}
              className="flex gap-2.5 items-start text-sm text-slate-600 dark:text-slate-300"
            >
              <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="/contact" className="w-full mt-4">
        <button
          className={`w-full py-4 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-sm ${
            plan.isPopular
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          {plan.ctaKey ? t(plan.ctaKey) : t("services.pricing.cta")}
        </button>
      </a>
    </motion.div>
  );
};

export default PricingCard;
