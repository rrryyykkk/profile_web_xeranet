import { useTranslation } from "react-i18next";
import { MapPin, Mail, Phone } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "@hugeicons/core-free-icons";

export const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        {t("contact.info.title")}
      </h2>

      <div className="flex flex-col gap-6">
        {/* Address */}
        <div className="flex gap-4 items-start p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-border">
          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-400 uppercase">
              {t("contact.info.address")}
            </span>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-semibold">
              Jl. Jenderal Sudirman No. 123, Jakarta Selatan, Indonesia
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4 items-start p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-border">
          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-400 uppercase">
              {t("contact.info.email")}
            </span>
            <a
              href="mailto:info@xeranet.co.id"
              className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
            >
              info@xeranet.co.id
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4 items-start p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-border">
          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
            <Phone className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-400 uppercase">
              {t("contact.info.phone")}
            </span>
            <a
              href="tel:+62211234567"
              className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
            >
              +62 (21) 1234-567
            </a>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-3 mt-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Ikuti Kami
        </span>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-border bg-slate-50 dark:bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center text-slate-500 transition-all shadow-sm"
          >
            <HugeiconsIcon icon={InstagramIcon} className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-border bg-slate-50 dark:bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center text-slate-500 transition-all shadow-sm"
          >
            <HugeiconsIcon icon={LinkedinIcon} className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-border bg-slate-50 dark:bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center text-slate-500 transition-all shadow-sm"
          >
            <HugeiconsIcon icon={YoutubeIcon} className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
