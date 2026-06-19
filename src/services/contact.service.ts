import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { LeadSubmission } from "../types";

export const contactService = {
  submitContact: (data: Omit<LeadSubmission, "id" | "submittedAt">): Promise<{ success: boolean }> => 
    axiosInstance.post("/contact", data),
    
  getAdminLeads: (): Promise<LeadSubmission[]> => axiosInstance.get("/admin/leads"),
};

export function useSubmitContactMutation() {
  return useMutation({
    mutationFn: contactService.submitContact,
  });
}

export function useAdminLeadsQuery() {
  return useQuery<LeadSubmission[], Error>({
    queryKey: ["admin-leads"],
    queryFn: contactService.getAdminLeads,
  });
}
