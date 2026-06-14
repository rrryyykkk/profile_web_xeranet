import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact.schema";

export const ContactForm = () => {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "it-solutions",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted successfully:", data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-border p-6 md:p-10 shadow-sm relative overflow-hidden">
      <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
        Formulir Kontak
      </h2>

      {isSuccess && (
        <div className="mb-6 flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-4 text-emerald-800 dark:text-emerald-400 text-sm font-semibold">
          <CheckCircle className="h-5 w-5 shrink-0" />
          <span>{t("contact.form.success")}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase"
          >
            {t("contact.form.name")}
          </label>
          <Input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Nama Anda"
            className={`rounded-xl border-border bg-white dark:bg-slate-950 py-5 ${errors.name ? "border-primary focus:ring-primary" : ""}`}
          />
          {errors.name && (
            <span className="text-xs font-bold text-primary">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase"
          >
            {t("contact.form.email")}
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="alamat@email.com"
            className={`rounded-xl border-border bg-white dark:bg-slate-950 py-5 ${errors.email ? "border-primary focus:ring-primary" : ""}`}
          />
          {errors.email && (
            <span className="text-xs font-bold text-primary">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase"
          >
            {t("contact.form.phone")}
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Contoh: 08123456789"
            className={`rounded-xl border-border bg-white dark:bg-slate-950 py-5 ${errors.phone ? "border-primary focus:ring-primary" : ""}`}
          />
          {errors.phone && (
            <span className="text-xs font-bold text-primary">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* Service Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="service"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase"
          >
            {t("contact.form.service")}
          </label>
          <select
            id="service"
            {...register("service")}
            className="flex h-10 w-full rounded-xl border border-border bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          >
            <option value="it-solutions">Software & Web App Development</option>
            <option value="networking">Infrastruktur & Jaringan Kantor</option>
            <option value="konsultasi">
              Konsultasi Keamanan Siber / Cloud
            </option>
            <option value="lainnya">Lainnya</option>
          </select>
          {errors.service && (
            <span className="text-xs font-bold text-primary">
              {errors.service.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase"
          >
            {t("contact.form.message")}
          </label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Tuliskan detail kebutuhan proyek atau pertanyaan Anda di sini..."
            rows={5}
            className={`rounded-xl border-border bg-white dark:bg-slate-950 ${errors.message ? "border-primary focus:ring-primary" : ""}`}
          />
          {errors.message && (
            <span className="text-xs font-bold text-primary">
              {errors.message.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="py-6 rounded-xl font-bold gap-2 text-base mt-2"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Mengirim..." : t("contact.form.submit")}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
