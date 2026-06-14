import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <AuroraBackground>
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary-light text-primary dark:bg-red-950/40 uppercase tracking-widest">
            ⚡ IT Solutions Provider
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {t("home.hero.title")}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-xl font-bold gap-2 px-8 py-6 text-base"
              >
                {t("home.hero.ctaPrimary")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-xl font-bold bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm gap-2 px-8 py-6 text-base border-border text-slate-800 dark:text-white dark:hover:bg-slate-800"
              >
                <Phone className="h-4 w-4" />
                {t("home.hero.ctaSecondary")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default HeroSection;
