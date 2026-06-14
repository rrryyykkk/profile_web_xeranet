import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  Network,
  Server,
  type LucideIcon,
} from "lucide-react";

interface ServicePreviewItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const ServicesPreview = () => {
  const { t } = useTranslation();

  const services: ServicePreviewItem[] = [
    {
      icon: Code2,
      title: "Software Development",
      desc: "Pengembangan sistem aplikasi kustom, web apps modern (React/Next.js), dan aplikasi mobile (iOS & Android).",
    },
    {
      icon: Network,
      title: "Infrastruktur Jaringan",
      desc: "Desain, instalasi, dan pemeliharaan infrastruktur jaringan kantor yang handal, cepat, dan aman.",
    },
    {
      icon: Server,
      title: "Cloud & Cyber Security",
      desc: "Migrasi cloud server, audit keamanan, dan penerapan sistem Cybersecurity Mesh untuk proteksi data.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-sm font-bold text-primary tracking-widest uppercase">
            {t("nav.services")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("home.services.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            {t("home.services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-border/50">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
              <Link
                to="/services"
                className="text-primary font-bold text-sm inline-flex items-center gap-1.5 mt-2 hover:underline"
              >
                Pelajari Selengkapnya <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
