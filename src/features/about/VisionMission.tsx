import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Eye, Target, type LucideIcon } from "lucide-react";

interface VisionMissionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

export const VisionMission = () => {
  const { t } = useTranslation();

  const visionMission: VisionMissionItem[] = [
    {
      icon: Eye,
      title: t("about.vision.title"),
      desc: t("about.vision.desc"),
      color: "bg-red-500/10 border-red-500/20 text-primary",
    },
    {
      icon: Target,
      title: t("about.mission.title"),
      desc: t("about.mission.desc"),
      color: "bg-blue-500/10 border-blue-500/20 text-secondary",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionMission.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-border shadow-sm flex flex-col gap-4"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
