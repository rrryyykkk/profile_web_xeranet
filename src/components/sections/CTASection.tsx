import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 relative overflow-hidden border-t border-border"
      style={{
        background: "linear-gradient(135deg, #1E0A3C 0%, #4C1D95 45%, #1E3A5F 100%)",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
          <MessageSquare className="h-7 w-7 text-white" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-5 text-white tracking-tight">
          {t("common.cta.title")}
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("common.cta.desc")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base w-full sm:w-auto bg-white text-violet-900 hover:bg-white/90 shadow-xl font-bold border-0"
            >
              {t("common.cta.btn1")}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
          <Link to="/services">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-bold backdrop-blur-sm"
            >
              {t("common.cta.btn2")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

