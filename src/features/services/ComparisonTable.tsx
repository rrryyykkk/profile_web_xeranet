import { useTranslation } from "react-i18next";
import type { ComparisonRow } from "@/types/service.types";

export const ComparisonTable = () => {
  const { t } = useTranslation();
  const headers = t("services.comparison.headers", {
    returnObjects: true,
  }) as string[];
  const rows = t("services.comparison.rows", { returnObjects: true }) as ComparisonRow[];

  return (
    <section className="py-16 bg-linear-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900/50 border-b border-border overflow-x-auto relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            {t("services.comparison.title")}
          </h2>
        </div>

        <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-border p-2 md:p-6 shadow-sm">
          <table className="w-full text-left border-collapse min-w-150">
            <thead>
              <tr className="border-b border-border">
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`py-4 font-bold text-slate-500 text-xs md:text-sm uppercase tracking-wider ${
                      idx === 0 ? "w-1/3" : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-4 font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    {row.feature}
                  </td>
                  <td className="py-4 text-slate-500 dark:text-slate-400 text-sm">
                    {row.starter === "✔" ? (
                      <span className="text-emerald-500">✔</span>
                    ) : row.starter === "✘" ? (
                      <span className="text-rose-400">✘</span>
                    ) : (
                      row.starter
                    )}
                  </td>
                  <td className="py-4 font-bold text-slate-900 dark:text-white text-sm">
                    {row.business === "✔" ? (
                      <span className="text-emerald-500">✔</span>
                    ) : row.business === "✘" ? (
                      <span className="text-rose-400">✘</span>
                    ) : (
                      row.business
                    )}
                  </td>
                  <td className="py-4 text-slate-500 dark:text-slate-400 text-sm">
                    {row.enterprise === "✔" ? (
                      <span className="text-emerald-500">✔</span>
                    ) : row.enterprise === "✘" ? (
                      <span className="text-rose-400">✘</span>
                    ) : (
                      row.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
