import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white dark:bg-slate-950 gap-6 px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-6"
    >
      <span className="text-[120px] font-black leading-none text-primary/10 select-none">
        404
      </span>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-sm">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <div className="flex items-center gap-3 mt-2">
        <Link to="/">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all cursor-pointer">
            <Home className="h-4 w-4" /> Ke Halaman Utama
          </button>
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-white transition-all cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali
        </button>
      </div>
    </motion.div>
  </div>
);

export default NotFoundPage;
