import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

interface WhyItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  const whyUs: WhyItem[] = [
    {
      icon: ShieldCheck,
      title: t("about.why.points.p1_title"),
      desc: t("about.why.points.p1_desc"),
    },
    {
      icon: Zap,
      title: t("about.why.points.p2_title"),
      desc: t("about.why.points.p2_desc"),
    },
    {
      icon: HeartHandshake,
      title: t("about.why.points.p3_title"),
      desc: t("about.why.points.p3_desc"),
    },
    {
      icon: HelpCircle,
      title: t("about.why.points.p4_title"),
      desc: t("about.why.points.p4_desc"),
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {t("about.why.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-border"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
