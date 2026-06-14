import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { motion } from "motion/react";
import { RefreshCw, Home } from "lucide-react";

export const ErrorPage = () => {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? `${error.status} — ${error.statusText}`
    : error instanceof Error
      ? error.message
      : "Terjadi kesalahan yang tidak diketahui.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 gap-6 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 max-w-md"
      >
        <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
          <RefreshCw className="h-7 w-7 text-primary animate-spin-slow" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Ups, Ada yang Error
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          {message}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" /> Coba Lagi
          </button>
          <Link to="/">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-white transition-all cursor-pointer">
              <Home className="h-4 w-4" /> Beranda
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
