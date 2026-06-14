import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-white dark:bg-slate-950 rounded-3xl border border-border p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle decorations */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-secondary/5 rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Header info */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                {t("blog.newsletter.title")}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Dapatkan Wawasan IT Terbaru
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                {t("blog.newsletter.subtitle")}
              </p>
            </div>

            {/* Input Form */}
            <div className="lg:col-span-5 w-full">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-2.5"
                  >
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        type="email"
                        required
                        placeholder={t("blog.newsletter.placeholder")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 pr-4 py-6 rounded-xl border-border bg-slate-50 dark:bg-slate-900 w-full"
                      />
                    </div>
                    <Button type="submit" className="py-6 px-6 rounded-xl font-bold shrink-0">
                      {t("blog.newsletter.button")}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-4 text-emerald-800 dark:text-emerald-400 text-sm font-semibold"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{t("blog.newsletter.success")}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add wrapper for AnimatePresence import
import { AnimatePresence } from "motion/react";
export default Newsletter;
