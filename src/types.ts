/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: "technology" | "enterprise" | "offline-sync" | "industry-insights";
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  readTime: string;
  publishedAt: string;
  coverImage: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  submittedAt: string;
}

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  employeeCount: string;
  primaryNeed: string;
  message: string;
  submittedAt: string;
  status: "pending" | "contacted" | "scheduled" | "completed";
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "product" | "security" | "sync" | "pricing";
}

export interface MenuItem {
  id: string;
  name: string;
  path: string;
  order: number;
}

export interface Banner {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageUrl?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  order: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface WebsiteSettings {
  phone: string;
  whatsapp: string;
  email: string;
  facebook: string;
  linkedin: string;
  x: string;
  instagram?: string;
  logoText: string;
  subLogoText: string;
}

export interface WebSection {
  id: string;
  type: "hero" | "features" | "pricing" | "faq" | "cta" | "stats" | "text" | "columns";
  title?: string;
  subtitle?: string;
  content?: string;
  order: number;
  items?: any[];
}

export interface PageContent {
  id: string;
  title: string;
  seo: SEOConfig;
  sections: WebSection[];
}

