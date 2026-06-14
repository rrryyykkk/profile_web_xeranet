export interface ServiceItem {
  id: string;
  titleKey: string; // key in i18n
  descriptionKey: string; // key in i18n
  icon: string; // Lucide icon name
  featuresKey: string; // key in i18n for features list
  color: string;
  bg: string;
  border: string;
  tagKey?: string; // key in i18n for tag
}

export interface ProcessStep {
  num: string;
  titleKey: string;
  descriptionKey: string;
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string; // "/bulan", "/proyek"
  description: string;
  features: string[];
  isPopular?: boolean;
  type: "b2b" | "b2c";
  ctaKey?: string;
}

export interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  business: boolean | string;
  enterprise: boolean | string;
}

export interface FAQItem {
  questionKey: string;
  answerKey: string;
}
