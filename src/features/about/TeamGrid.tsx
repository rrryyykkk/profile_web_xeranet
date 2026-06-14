import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import type { TeamMember } from "@/types/team.types";

export const TeamGrid = () => {
  const { t } = useTranslation();

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Budi Santoso",
      roleKey: "CEO & Founder",
      initials: "BS",
      gradient: "from-red-500 to-amber-500",
    },
    {
      id: 2,
      name: "Rian Hidayat",
      roleKey: "Chief Technology Officer",
      initials: "RH",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      id: 3,
      name: "Siti Rahma",
      roleKey: "Head of Software Dev",
      initials: "SR",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: 4,
      name: "Dedi Wijaya",
      roleKey: "Lead Network Architect",
      initials: "DW",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16 flex flex-col gap-3">
          <span className="text-sm font-bold text-primary tracking-widest uppercase">
            Meet Our Team
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {t("about.team.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            {t("about.team.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Initial Avatar */}
              <div
                className={`w-20 h-20 rounded-2xl bg-linear-to-tr ${member.gradient} flex items-center justify-center text-white font-extrabold text-2xl shadow-md mb-4`}
              >
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {member.name}
              </h3>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-1 uppercase">
                {member.roleKey}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
