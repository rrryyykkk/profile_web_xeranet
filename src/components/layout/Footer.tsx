import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "@hugeicons/core-free-icons";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-wider text-white">
                XERA<span className="text-primary">NET</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <HugeiconsIcon icon={InstagramIcon} className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300"
                aria-label="Linkedin"
              >
                <HugeiconsIcon icon={LinkedinIcon} className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300"
                aria-label="Youtube"
              >
                <HugeiconsIcon icon={YoutubeIcon} className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services Quicklinks */}
          <div>
            <h3 className="text-white text-base font-bold mb-4">{t("footer.services")}</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Software Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Web & Mobile App</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Infrastruktur Jaringan</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Konsultasi IT & Cyber Security</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Quicklinks */}
          <div>
            <h3 className="text-white text-base font-bold mb-4">{t("footer.company")}</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-base font-bold mb-4">{t("footer.contact")}</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Jl. Jenderal Sudirman No. 123, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@xeranet.co.id" className="hover:text-primary transition-colors">
                  info@xeranet.co.id
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+62211234567" className="hover:text-primary transition-colors">
                  +62 (21) 1234-567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} PT XERANET. {t("footer.rights")}
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
