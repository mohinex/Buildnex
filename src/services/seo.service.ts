import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

export interface SEOMeta {
  id: string;
  pagePath: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const seoService = {
  getSeoMeta: (): Promise<SEOMeta[]> => 
    (axiosInstance.get("/seo") as Promise<SEOMeta[]>).catch(() => [] as SEOMeta[]),
    
  getSeoByPath: (path: string): Promise<SEOMeta | null> => 
    (axiosInstance.get(`/seo/${encodeURIComponent(path)}`) as Promise<SEOMeta | null>).catch(() => null),
    
  updateSeoMeta: (id: string, data: Partial<SEOMeta>): Promise<{ success: boolean; seo: SEOMeta[] }> => 
    axiosInstance.patch(`/seo/${id}`, data),
};

export function useSeoListQuery() {
  return useQuery<SEOMeta[], Error>({
    queryKey: ["seo-meta-list"],
    queryFn: seoService.getSeoMeta,
  });
}

export function useSeoByPathQuery(path: string) {
  return useQuery<SEOMeta | null, Error>({
    queryKey: ["seo-meta", path],
    queryFn: () => seoService.getSeoByPath(path),
    enabled: !!path,
  });
}

export function useSeoUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<SEOMeta> }) => seoService.updateSeoMeta(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["seo-meta-list"] });
    },
  });
}
