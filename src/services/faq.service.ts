import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { FAQItem } from "../types";

export const faqService = {
  getFaqs: (): Promise<FAQItem[]> => axiosInstance.get("/faq"),
  
  createFaq: (data: Omit<FAQItem, "id">): Promise<FAQItem> => 
    axiosInstance.post("/faq", data),
  
  deleteFaq: (id: string): Promise<{ success: boolean }> => 
    axiosInstance.delete(`/faq/${id}`),
};

export function useFaqsQuery() {
  return useQuery<FAQItem[], Error>({
    queryKey: ["website-faqs"],
    queryFn: faqService.getFaqs,
  });
}

export function useFaqCreateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: faqService.createFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-faqs"] });
    },
  });
}

export function useFaqDeleteMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: faqService.deleteFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-faqs"] });
    },
  });
}
