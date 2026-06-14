import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Smartphone,
  Globe,
  Server,
  Palette,
  Cloud,
  Shield,
  Lock,
  Network,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { ServiceItem } from "@/types/service.types";

interface ServiceCardProps {
  service: ServiceItem;
  idx: number;
}

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  Server,
  Palette,
  Cloud,
  Shield,
  Lock,
  Network,
};

export const ServiceCard = ({ service, idx }: ServiceCardProps) => {
  const { t } = useTranslation();
  const Icon = iconMap[service.icon] || Server;

  // Retrieve features array and optional tag from translations
  const features = t(service.featuresKey, { returnObjects: true }) as string[];
  const tag = service.tagKey ? t(service.tagKey) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-white dark:bg-slate-900 border border-border rounded-2xl p-7 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group flex flex-col"
      style={{
        borderTop: `3px solid ${service.color}`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = service.border;
        (e.currentTarget as HTMLElement).style.borderTopColor = service.color;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "";
        (e.currentTarget as HTMLElement).style.borderTopColor = service.color;
      }}
    >
      {/* Badge */}
      {tag && (
        <div
          className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
          style={{
            background: `linear-gradient(135deg, ${service.color}, #0891B2)`,
          }}
        >
          {tag}
        </div>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ background: service.bg }}
      >
        <Icon className="h-6 w-6" style={{ color: service.color }} />
      </div>

      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-3">
        {t(service.titleKey)}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
        {t(service.descriptionKey)}
      </p>

      {/* Feature list */}
      <ul className="space-y-2 mt-auto">
        {Array.isArray(features) &&
          features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <CheckCircle2
                className="h-3.5 w-3.5 shrink-0"
                style={{ color: service.color }}
              />
              <span className="text-slate-700 dark:text-slate-300 text-xs font-medium">
                {f}
              </span>
            </li>
          ))}
      </ul>

      <div className="mt-6 pt-5 border-t border-border">
        <Link to="/contact">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold hover:gap-2.5 transition-all text-slate-800 dark:text-slate-200"
            style={{ color: service.color }}
          >
            {t("common.consultation")} <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
