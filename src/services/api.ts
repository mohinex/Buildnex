import { 
  BlogPost, 
  LeadSubmission, 
  DemoRequest, 
  FAQItem, 
  MenuItem, 
  Banner, 
  FeatureItem, 
  PricingPackage, 
  WebsiteSettings 
} from "../types";

const API_BASE = "/api";

export async function fetchSettings(): Promise<WebsiteSettings> {
  const resp = await fetch(`${API_BASE}/settings`);
  if (!resp.ok) throw new Error("Failed to load settings from server");
  return resp.json();
}

export async function updateSettings(data: Partial<WebsiteSettings>): Promise<WebsiteSettings> {
  const resp = await fetch(`${API_BASE}/settings`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!resp.ok) throw new Error("Failed to update settings");
  const result = await resp.json();
  return result.settings;
}

export async function fetchMenus(): Promise<MenuItem[]> {
  const resp = await fetch(`${API_BASE}/menus`);
  if (!resp.ok) throw new Error("Failed to load menus");
  return resp.json();
}

export async function fetchBanners(): Promise<Banner[]> {
  const resp = await fetch(`${API_BASE}/banners`);
  if (!resp.ok) throw new Error("Failed to load banners");
  return resp.json();
}

export async function updateBanner(id: string, data: Partial<Banner>): Promise<Banner[]> {
  const resp = await fetch(`${API_BASE}/banners/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!resp.ok) throw new Error("Failed to update banner");
  const result = await resp.json();
  return result.banners;
}

export async function fetchFeatures(): Promise<FeatureItem[]> {
  const resp = await fetch(`${API_BASE}/features`);
  if (!resp.ok) throw new Error("Failed to load features");
  return resp.json();
}

export async function updateFeature(id: string, data: Partial<FeatureItem>): Promise<FeatureItem[]> {
  const resp = await fetch(`${API_BASE}/features/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!resp.ok) throw new Error("Failed to update feature");
  const result = await resp.json();
  return result.features;
}

export async function fetchFAQ(): Promise<FAQItem[]> {
  const resp = await fetch(`${API_BASE}/faq`);
  if (!resp.ok) throw new Error("Failed to load FAQs");
  return resp.json();
}

export async function createFAQ(data: Omit<FAQItem, "id">): Promise<FAQItem> {
  const resp = await fetch(`${API_BASE}/faq`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!resp.ok) throw new Error("Failed to create FAQ");
  return resp.json();
}

export async function deleteFAQ(id: string): Promise<boolean> {
  const resp = await fetch(`${API_BASE}/faq/${id}`, {
    method: "DELETE"
  });
  if (!resp.ok) throw new Error("Failed to delete FAQ");
  return resp.ok;
}

export async function fetchPricing(): Promise<PricingPackage[]> {
  const resp = await fetch(`${API_BASE}/pricing`);
  if (!resp.ok) throw new Error("Failed to load pricing");
  return resp.json();
}

export async function updatePricing(id: string, data: Partial<PricingPackage>): Promise<PricingPackage[]> {
  const resp = await fetch(`${API_BASE}/pricing/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!resp.ok) throw new Error("Failed to update pricing package");
  const result = await resp.json();
  return result.pricing;
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  const resp = await fetch(`${API_BASE}/blog`);
  if (!resp.ok) throw new Error("Failed to load blog posts");
  return resp.json();
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost> {
  const resp = await fetch(`${API_BASE}/blog/${slug}`);
  if (!resp.ok) throw new Error("Blog post not found");
  return resp.json();
}

export async function createBlogPost(data: {
  title: string;
  summary: string;
  content: string;
  category: string;
  coverImage?: string;
  authorName?: string;
  authorRole?: string;
}): Promise<BlogPost> {
  const resp = await fetch(`${API_BASE}/blog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!resp.ok) throw new Error("Failed to publish blog post");
  return resp.json();
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const resp = await fetch(`${API_BASE}/blog/${id}`, {
    method: "DELETE"
  });
  if (!resp.ok) throw new Error("Failed to delete blog post");
  return resp.ok;
}

export async function submitContact(data: Omit<LeadSubmission, "id" | "submittedAt">): Promise<boolean> {
  const resp = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!resp.ok) throw new Error("Failed to submit inquiry");
  return resp.ok;
}

export async function submitDemo(data: Omit<DemoRequest, "id" | "submittedAt" | "status">): Promise<boolean> {
  const resp = await fetch(`${API_BASE}/demo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!resp.ok) throw new Error("Failed to reserve demo booking slot");
  return resp.ok;
}

export async function fetchAdminLeads(): Promise<LeadSubmission[]> {
  const resp = await fetch(`${API_BASE}/admin/leads`);
  if (!resp.ok) throw new Error("Failed to load admin leads");
  return resp.json();
}

export async function fetchAdminDemos(): Promise<DemoRequest[]> {
  const resp = await fetch(`${API_BASE}/admin/demos`);
  if (!resp.ok) throw new Error("Failed to load admin demo bookings");
  return resp.json();
}

export async function updateDemoStatus(id: string, status: string): Promise<boolean> {
  const resp = await fetch(`${API_BASE}/admin/demos/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
  if (!resp.ok) throw new Error("Failed to update booking status");
  return resp.ok;
}
