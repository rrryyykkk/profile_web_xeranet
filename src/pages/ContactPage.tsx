import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/layout/SEO";
import { ContactForm } from "@/features/contact/ContactForm";
import { ContactInfo } from "@/features/contact/ContactInfo";
import { MapEmbed } from "@/features/contact/MapEmbed";
import { WhatsAppCTA } from "@/features/contact/WhatsAppCTA";

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white dark:bg-slate-950 pb-20 relative">
      <SEO
        title={t("contact.title")}
        description={t("contact.subtitle")}
      />

      {/* Page Header */}
      <PageHeader
        badge={t("contact.header.badge")}
        title={t("contact.header.title")}
        titleHighlight={t("contact.header.titleHighlight")}
        description={t("contact.subtitle")}
      />

      {/* Main Grid: Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact info & Socials */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right Column: Schema validated form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <MapEmbed />

      {/* Floating WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  );
};

export default ContactPage;
