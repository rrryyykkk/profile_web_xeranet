import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Milestone } from "lucide-react";

interface MilestoneItem {
  year: string;
  title: string;
  desc: string;
}

export const Timeline = () => {
  const { t } = useTranslation();

  const milestones: MilestoneItem[] = [
    {
      year: "2018",
      title: "Pendirian Perusahaan",
      desc: "PT XERANET didirikan di Jakarta dengan tim inti beranggotakan 5 insinyur jaringan komputer.",
    },
    {
      year: "2020",
      title: "Ekspansi Layanan IT",
      desc: "Meluncurkan divisi pengembangan perangkat lunak kustom untuk web dan aplikasi seluler.",
    },
    {
      year: "2022",
      title: "Sertifikasi ISO 27001",
      desc: "Berhasil mendapatkan sertifikasi standar manajemen keamanan informasi internasional.",
    },
    {
      year: "2025",
      title: "Kemitraan Skala Nasional",
      desc: "Menjadi mitra IT resmi untuk 3 grup konglomerasi ritel dan infrastruktur di Indonesia.",
    },
  ];

  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16 flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Milestone className="h-5 w-5" />
            <span className="text-sm font-bold tracking-widest uppercase">
              {t("about.timeline.title")}
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Perjalanan Sejarah Kami
          </h2>
        </div>

        <div className="relative border-l border-border pl-6 ml-4 space-y-12">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-white dark:bg-slate-950" />

              <div className="flex flex-col gap-2">
                <span className="text-lg font-extrabold text-primary">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {milestone.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
