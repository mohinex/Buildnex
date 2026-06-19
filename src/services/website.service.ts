import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { 
  BlogPost, 
  LeadSubmission, 
  DemoRequest, 
  FAQItem, 
  MenuItem, 
  Banner, 
  FeatureItem, 
  PricingPackage, 
  WebsiteSettings,
  WebSection,
  PageContent
} from "../types";

/**
 * ==========================================
 * AXIOS API ENDPOINT CALLERS
 * ==========================================
 */

export const api = {
  // Website Settings
  getSettings: (): Promise<WebsiteSettings> => axiosInstance.get("/settings"),
  
  updateSettings: (data: Partial<WebsiteSettings>): Promise<{ success: boolean; settings: WebsiteSettings }> => 
    axiosInstance.patch("/settings", data),

  // Navigation Menus
  getMenus: (): Promise<MenuItem[]> => axiosInstance.get("/menus"),

  // Banners / Hero
  getBanners: (): Promise<Banner[]> => axiosInstance.get("/banners"),
  
  updateBanner: (id: string, data: Partial<Banner>): Promise<{ success: boolean; banners: Banner[] }> => 
    axiosInstance.patch(`/banners/${id}`, data),

  // Features Cards
  getFeatures: (): Promise<FeatureItem[]> => axiosInstance.get("/features"),
  
  updateFeature: (id: string, data: Partial<FeatureItem>): Promise<{ success: boolean; features: FeatureItem[] }> => 
    axiosInstance.patch(`/features/${id}`, data),

  // FAQ Items
  getFaqs: (): Promise<FAQItem[]> => axiosInstance.get("/faq"),
  
  createFaq: (data: Omit<FAQItem, "id">): Promise<FAQItem> => 
    axiosInstance.post("/faq", data),
  
  deleteFaq: (id: string): Promise<{ success: boolean }> => 
    axiosInstance.delete(`/faq/${id}`),

  // Pricing Packages
  getPricing: (): Promise<PricingPackage[]> => axiosInstance.get("/pricing"),
  
  updatePricing: (id: string, data: Partial<PricingPackage>): Promise<{ success: boolean; pricing: PricingPackage[] }> => 
    axiosInstance.patch(`/pricing/${id}`, data),

  // Blogs & Articles
  getBlogs: (): Promise<BlogPost[]> => axiosInstance.get("/blog"),
  
  getBlogPostBySlug: (slug: string): Promise<BlogPost> => 
    axiosInstance.get(`/blog/${slug}`),
  
  createBlogPost: (data: any): Promise<BlogPost> => 
    axiosInstance.post("/blog", data),
  
  deleteBlogPost: (id: string): Promise<{ success: boolean }> => 
    axiosInstance.delete(`/blog/${id}`),

  // Leads & Contact Inquiry
  submitContact: (data: Omit<LeadSubmission, "id" | "submittedAt">): Promise<{ success: boolean }> => 
    axiosInstance.post("/contact", data),

  // Demo Registration
  submitDemo: (data: Omit<DemoRequest, "id" | "submittedAt" | "status">): Promise<{ success: boolean }> => 
    axiosInstance.post("/demo", data),

  // Admin Leads and Demos Queries
  getAdminLeads: (): Promise<LeadSubmission[]> => axiosInstance.get("/admin/leads"),
  
  getAdminDemos: (): Promise<DemoRequest[]> => axiosInstance.get("/admin/demos"),
  
  updateDemoStatus: (id: string, status: string): Promise<{ success: boolean; demo: DemoRequest }> => 
    axiosInstance.patch(`/admin/demos/${id}/status`, { status }),

  // Dynamic Pages and Sections placeholders (can fetch from API if created, falling back safely)
  getPages: (): Promise<PageContent[]> => (axiosInstance.get("/pages") as Promise<PageContent[]>).catch(() => [] as PageContent[]),
  
  getPageBySlug: (slug: string): Promise<PageContent> => axiosInstance.get(`/pages/${slug}`) as Promise<PageContent>,
  
  getSectionsByPageId: (pageId: string): Promise<WebSection[]> => axiosInstance.get(`/pages/${pageId}/sections`) as Promise<WebSection[]>,
};

/**
 * ==========================================
 * REACT QUERY WRAPPER HOOKS
 * ==========================================
 */

export function useSettings() {
  return useQuery<WebsiteSettings, Error>({
    queryKey: ["website-settings"],
    queryFn: api.getSettings,
  });
}

export function useSettingsUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.updateSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-settings"] });
    },
  });
}

export function useMenus() {
  return useQuery<MenuItem[], Error>({
    queryKey: ["website-menus"],
    queryFn: api.getMenus,
  });
}

export function useBanners() {
  return useQuery<Banner[], Error>({
    queryKey: ["website-banners"],
    queryFn: api.getBanners,
  });
}

export function useBannerUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Banner> }) => api.updateBanner(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-banners"] });
    },
  });
}

export function useFeatures() {
  return useQuery<FeatureItem[], Error>({
    queryKey: ["website-features"],
    queryFn: api.getFeatures,
  });
}

export function useFeatureUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<FeatureItem> }) => api.updateFeature(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-features"] });
    },
  });
}

export function useFaqs() {
  return useQuery<FAQItem[], Error>({
    queryKey: ["website-faqs"],
    queryFn: api.getFaqs,
  });
}

export function useFaqCreateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.createFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-faqs"] });
    },
  });
}

export function useFaqDeleteMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.deleteFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-faqs"] });
    },
  });
}

export function usePricing() {
  return useQuery<PricingPackage[], Error>({
    queryKey: ["website-pricing"],
    queryFn: api.getPricing,
  });
}

export function usePricingUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<PricingPackage> }) => api.updatePricing(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-pricing"] });
    },
  });
}

export function useBlogs() {
  return useQuery<BlogPost[], Error>({
    queryKey: ["website-blogs"],
    queryFn: api.getBlogs,
  });
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPost, Error>({
    queryKey: ["website-blog-post", slug],
    queryFn: () => api.getBlogPostBySlug(slug),
    enabled: !!slug,
  });
}

export function useBlogPostCreateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.createBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-blogs"] });
    },
  });
}

export function useBlogPostDeleteMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.deleteBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-blogs"] });
    },
  });
}

export function useSubmitContactMutation() {
  return useMutation({
    mutationFn: api.submitContact,
  });
}

export function useSubmitDemoMutation() {
  return useMutation({
    mutationFn: api.submitDemo,
  });
}

export function useAdminLeads() {
  return useQuery<LeadSubmission[], Error>({
    queryKey: ["admin-leads"],
    queryFn: api.getAdminLeads,
  });
}

export function useAdminDemos() {
  return useQuery<DemoRequest[], Error>({
    queryKey: ["admin-demos"],
    queryFn: api.getAdminDemos,
  });
}

export function useDemoStatusUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => api.updateDemoStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-demos"] });
    },
  });
}

export function usePages() {
  return useQuery<PageContent[], Error>({
    queryKey: ["website-pages"],
    queryFn: api.getPages,
  });
}

export function usePageBySlug(slug: string) {
  return useQuery<PageContent, Error>({
    queryKey: ["website-page", slug],
    queryFn: () => api.getPageBySlug(slug),
    enabled: !!slug,
  });
}
