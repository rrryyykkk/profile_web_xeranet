import { motion } from "motion/react";

interface PageHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
}

export const PageHeader = ({
  badge,
  title,
  titleHighlight,
  description,
}: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-linear-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950 border-b border-border">
      {/* Background Dot Grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          {badge && (
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-primary-light dark:bg-red-950/50 text-primary uppercase tracking-wider">
              {badge}
            </span>
          )}

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {title}{" "}
            {titleHighlight && (
              <span className="text-primary dark:text-red-500 relative">
                {titleHighlight}
              </span>
            )}
          </h1>

          {description && (
            <p className="mt-2 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
