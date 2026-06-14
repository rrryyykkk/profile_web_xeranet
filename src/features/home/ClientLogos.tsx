import { motion } from "motion/react";
import { Handshake } from "lucide-react";

const partners = [
  {
    id: 1,
    name: "Telkom Indonesia",
    category: "Telekomunikasi",
    desc: "Kolaborasi infrastruktur jaringan & cloud nasional.",
    color: "#6D28D9",
    initials: "TI",
  },
  {
    id: 2,
    name: "Bank BRI",
    category: "Perbankan",
    desc: "Pengembangan sistem digital perbankan & fintech.",
    color: "#0891B2",
    initials: "BRI",
  },
  {
    id: 3,
    name: "Gojek",
    category: "Teknologi",
    desc: "Integrasi platform layanan & pengembangan fitur.",
    color: "#7C3AED",
    initials: "GK",
  },
  {
    id: 4,
    name: "Pertamina",
    category: "Energi",
    desc: "Digitalisasi proses operasional & monitoring sistem.",
    color: "#0891B2",
    initials: "PT",
  },
  {
    id: 5,
    name: "Kimia Farma",
    category: "Kesehatan",
    desc: "Sistem manajemen farmasi & distribusi digital.",
    color: "#6D28D9",
    initials: "KF",
  },
  {
    id: 6,
    name: "PLN",
    category: "Energi",
    desc: "Platform monitoring & pengelolaan energi nasional.",
    color: "#7C3AED",
    initials: "PLN",
  },
];

export const ClientLogos = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest mb-3 block"
              style={{ color: "#6D28D9" }}
            >
              Kepercayaan Klien
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Mitra Kami
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-md leading-relaxed">
              Kami telah dipercaya oleh berbagai perusahaan terkemuka dalam
              membangun solusi digital mereka.
            </p>
          </div>
          <div
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#6D28D9" }}
          >
            <Handshake className="h-4 w-4" />
            <span>50+ Mitra Aktif</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-slate-50 dark:bg-slate-900 border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col"
              style={{
                borderTop: "3px solid",
                borderTopColor: partner.color,
              }}
            >
              <div className="p-6 flex items-start gap-4 flex-1">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                  style={{ background: `${partner.color}18` }}
                >
                  <span
                    className="text-sm font-extrabold"
                    style={{ color: partner.color }}
                  >
                    {partner.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest mb-1 block"
                    style={{ color: "#0891B2" }}
                  >
                    {partner.category}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 truncate">
                    {partner.name}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </div>
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-auto"
                style={{
                  background: `linear-gradient(90deg, ${partner.color}, #06B6D4)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
