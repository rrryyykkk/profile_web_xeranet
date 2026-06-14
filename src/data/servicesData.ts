import type {
  ComparisonRow,
  FAQItem,
  PricingPlan,
  ServiceItem,
  ProcessStep,
} from "@/types/service.types";

export const servicesList: ServiceItem[] = [
  {
    id: "mobile-dev",
    titleKey: "services.list.mobile.title",
    descriptionKey: "services.list.mobile.desc",
    icon: "Smartphone",
    featuresKey: "services.list.mobile.features",
    color: "#6D28D9",
    bg: "rgba(109,40,217,0.08)",
    border: "rgba(109,40,217,0.25)",
    tagKey: "services.list.mobile.tag",
  },
  {
    id: "web-dev",
    titleKey: "services.list.web.title",
    descriptionKey: "services.list.web.desc",
    icon: "Globe",
    featuresKey: "services.list.web.features",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.25)",
  },
  {
    id: "enterprise-sys",
    titleKey: "services.list.enterprise.title",
    descriptionKey: "services.list.enterprise.desc",
    icon: "Server",
    featuresKey: "services.list.enterprise.features",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    id: "uiux-design",
    titleKey: "services.list.uiux.title",
    descriptionKey: "services.list.uiux.desc",
    icon: "Palette",
    featuresKey: "services.list.uiux.features",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.25)",
  },
  {
    id: "cloud-devops",
    titleKey: "services.list.cloud.title",
    descriptionKey: "services.list.cloud.desc",
    icon: "Cloud",
    featuresKey: "services.list.cloud.features",
    color: "#6D28D9",
    bg: "rgba(109,40,217,0.08)",
    border: "rgba(109,40,217,0.25)",
  },
  {
    id: "it-consulting",
    titleKey: "services.list.consulting.title",
    descriptionKey: "services.list.consulting.desc",
    icon: "Shield",
    featuresKey: "services.list.consulting.features",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    id: "cyber-security",
    titleKey: "services.list.cyber.title",
    descriptionKey: "services.list.cyber.desc",
    icon: "Lock",
    featuresKey: "services.list.cyber.features",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.08)",
    border: "rgba(220,38,38,0.25)",
    tagKey: "services.list.cyber.tag",
  },
  {
    id: "network-infra",
    titleKey: "services.list.network.title",
    descriptionKey: "services.list.network.desc",
    icon: "Network",
    featuresKey: "services.list.network.features",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.25)",
    tagKey: "services.list.network.tag",
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    titleKey: "services.steps.list.0.title",
    descriptionKey: "services.steps.list.0.desc",
    color: "#6D28D9",
  },
  {
    num: "02",
    titleKey: "services.steps.list.1.title",
    descriptionKey: "services.steps.list.1.desc",
    color: "#7C3AED",
  },
  {
    num: "03",
    titleKey: "services.steps.list.2.title",
    descriptionKey: "services.steps.list.2.desc",
    color: "#0891B2",
  },
  {
    num: "04",
    titleKey: "services.steps.list.3.title",
    descriptionKey: "services.steps.list.3.desc",
    color: "#06B6D4",
  },
  {
    num: "05",
    titleKey: "services.steps.list.4.title",
    descriptionKey: "services.steps.list.4.desc",
    color: "#6D28D9",
  },
  {
    num: "06",
    titleKey: "services.steps.list.5.title",
    descriptionKey: "services.steps.list.5.desc",
    color: "#0891B2",
  },
];

export const pricingPlans: PricingPlan[] = [
  // B2C Plans
  {
    id: "b2c-basic",
    translationKey: "b2cBasic",
    name: "Starter Pack",
    price: "Rp 2.500.000",
    period: "/proyek",
    description:
      "Cocok untuk UMKM, portofolio digital pribadi, atau landing page bisnis sederhana.",
    features: [],
    isPopular: false,
    type: "b2c",
  },
  {
    id: "b2c-premium",
    translationKey: "b2cPremium",
    name: "Business Growth",
    price: "Rp 7.500.000",
    period: "/proyek",
    description:
      "Sangat direkomendasikan untuk bisnis yang ingin memperluas jangkauan online interaktif.",
    features: [],
    isPopular: true,
    type: "b2c",
  },

  // B2B Plans
  {
    id: "b2b-infra",
    translationKey: "b2bInfra",
    name: "Network & Infrastructure Setup",
    price: "Mulai Rp 15.000.000",
    period: "/setup",
    description:
      "Solusi perancangan jaringan kantor lokal yang aman, handal, dan berkecepatan tinggi.",
    features: [],
    isPopular: false,
    type: "b2b",
  },
  {
    id: "b2b-enterprise",
    translationKey: "b2bEnterprise",
    name: "Enterprise Digital Core",
    price: "Hubungi Kami",
    period: "/kontrak",
    description:
      "Paket transformasi digital lengkap mencakup software kustom skala besar dan support infrastruktur penuh.",
    features: [],
    isPopular: true,
    type: "b2b",
    ctaKey: "common.consultation",
  },
];

export const comparisonTableData: ComparisonRow[] = [
  {
    feature: "Optimasi Responsive UI",
    starter: "Dasar",
    business: "Penuh (Micro-animation)",
    enterprise: "Penuh + Custom Motion",
  },
  {
    feature: "Optimasi Kecepatan (Lighthouse)",
    starter: "Cukup (80+)",
    business: "Baik (90+)",
    enterprise: "Sangat Baik (95+)",
  },
  {
    feature: "Integrasi Sistem Pembayaran / Form",
    starter: "Form Sederhana",
    business: "Zod Schema Validation",
    enterprise: "API Custom + Payment Gateway",
  },
  {
    feature: "Multi-Language Toggle",
    starter: "Tidak Tersedia",
    business: "Ya (2 Bahasa - ID/EN)",
    enterprise: "Ya (Tanpa Batas Bahasa)",
  },
  {
    feature: "Layanan Pemeliharaan (SLA)",
    starter: "1 Bulan",
    business: "3 Bulan",
    enterprise: "24/7 Dedicated Support",
  },
  {
    feature: "Security Audit & Backup",
    starter: "Keamanan Dasar",
    business: "Bulanan Backup",
    enterprise: "Real-time Backups + Security Mesh",
  },
];

export const faqList: FAQItem[] = [
  { questionKey: "services.faq.q1", answerKey: "services.faq.a1" },
  { questionKey: "services.faq.q2", answerKey: "services.faq.a2" },
  { questionKey: "services.faq.q3", answerKey: "services.faq.a3" },
  { questionKey: "services.faq.q4", answerKey: "services.faq.a4" },
  { questionKey: "services.faq.q5", answerKey: "services.faq.a5" },
  { questionKey: "services.faq.q6", answerKey: "services.faq.a6" },
];
