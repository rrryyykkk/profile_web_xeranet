import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
    <div className="flex flex-col items-center gap-3">
      <div className="h-10 w-10 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
      <span className="text-sm font-semibold text-slate-500">
        Memuat Halaman...
      </span>
    </div>
  </div>
);

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="grow">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
