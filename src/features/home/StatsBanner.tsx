import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Users, Briefcase, Calendar, type LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon: Icon, value, label, delay }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
        {value}
      </span>
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 text-center">
        {label}
      </span>
    </motion.div>
  );
};

export const StatsBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCard
            icon={Users}
            value="150+"
            label={t("home.stats.clients")}
            delay={0.1}
          />
          <StatCard
            icon={Briefcase}
            value="300+"
            label={t("home.stats.projects")}
            delay={0.2}
          />
          <StatCard
            icon={Calendar}
            value="8+"
            label={t("home.stats.years")}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
