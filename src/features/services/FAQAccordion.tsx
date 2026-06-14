import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqList } from "@/data/servicesData";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-border py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left font-bold text-slate-800 dark:text-slate-200 text-base md:text-lg py-2 cursor-pointer hover:text-primary transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-2 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQAccordion = () => {
  const { t } = useTranslation();
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50/80 to-white dark:from-slate-900/20 dark:to-slate-950">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {t("services.faq.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {t("services.faq.subtitle")}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/50 rounded-3xl border border-border p-6 md:p-8 shadow-sm flex flex-col">
          {faqList.map((faq, idx) => (
            <FAQItemComponent
              key={idx}
              question={t(faq.questionKey)}
              answer={t(faq.answerKey)}
              isOpen={openFAQIndex === idx}
              onToggle={() => setOpenFAQIndex(openFAQIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
