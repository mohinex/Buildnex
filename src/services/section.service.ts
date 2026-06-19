import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { WebSection } from "../types";

export const sectionService = {
  getSectionsByPageId: (pageId: string): Promise<WebSection[]> => 
    axiosInstance.get(`/pages/${pageId}/sections`) as Promise<WebSection[]>,
};

export function usePageSectionsQuery(pageId: string) {
  return useQuery<WebSection[], Error>({
    queryKey: ["page-sections", pageId],
    queryFn: () => sectionService.getSectionsByPageId(pageId),
    enabled: !!pageId,
  });
}
