import { comparisonTableData } from "@/data/servicesData";

export const ComparisonTable = () => {
  return (
    <section className="py-24 border-b border-border overflow-x-auto">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            Tabel Perbandingan Fitur
          </h2>
        </div>

        <table className="w-full text-left border-collapse min-w-150">
          <thead>
            <tr className="border-b border-border">
              <th className="py-4 font-bold text-slate-500 text-sm uppercase tracking-wider w-1/3">
                Fitur / Layanan
              </th>
              <th className="py-4 font-bold text-slate-500 text-sm uppercase tracking-wider">
                Starter
              </th>
              <th className="py-4 font-bold text-slate-500 text-sm uppercase tracking-wider">
                Business
              </th>
              <th className="py-4 font-bold text-slate-500 text-sm uppercase tracking-wider">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonTableData.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-border/50 hover:bg-slate-50/50 dark:hover:bg-slate-900/10"
              >
                <td className="py-4 font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {row.feature}
                </td>
                <td className="py-4 text-slate-500 dark:text-slate-400 text-sm">
                  {typeof row.starter === "boolean"
                    ? row.starter
                      ? "✔"
                      : "✘"
                    : row.starter}
                </td>
                <td className="py-4 font-bold text-slate-900 dark:text-white text-sm">
                  {typeof row.business === "boolean"
                    ? row.business
                      ? "✔"
                      : "✘"
                    : row.business}
                </td>
                <td className="py-4 text-slate-500 dark:text-slate-400 text-sm">
                  {typeof row.enterprise === "boolean"
                    ? row.enterprise
                      ? "✔"
                      : "✘"
                    : row.enterprise}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
