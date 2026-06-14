import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

export const CompanyStory = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t("about.story.title")}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {t("about.story.p1")}
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {t("about.story.p2")}
            </p>
          </motion.div>

          {/* Decorative block / image mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 h-80 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-inner"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-xl" />
            <span className="text-8xl font-black text-primary/10 select-none">
              EST '18
            </span>
            <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 mt-4">
              PT XERANET SOLUSINDO
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
