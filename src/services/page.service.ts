import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { PageContent } from "../types";

export const pageService = {
  getPages: (): Promise<PageContent[]> => 
    (axiosInstance.get("/pages") as Promise<PageContent[]>).catch(() => [] as PageContent[]),
  
  getPageBySlug: (slug: string): Promise<PageContent> => 
    axiosInstance.get(`/pages/${slug}`) as Promise<PageContent>,
};

export function usePagesQuery() {
  return useQuery<PageContent[], Error>({
    queryKey: ["website-pages"],
    queryFn: pageService.getPages,
  });
}

export function usePageBySlugQuery(slug: string) {
  return useQuery<PageContent, Error>({
    queryKey: ["website-page", slug],
    queryFn: () => pageService.getPageBySlug(slug),
    enabled: !!slug,
  });
}
