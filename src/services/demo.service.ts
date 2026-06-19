import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { DemoRequest } from "../types";

export const demoService = {
  submitDemo: (data: Omit<DemoRequest, "id" | "submittedAt" | "status">): Promise<{ success: boolean }> => 
    axiosInstance.post("/demo", data),
    
  getAdminDemos: (): Promise<DemoRequest[]> => axiosInstance.get("/admin/demos"),
  
  updateDemoStatus: (id: string, status: string): Promise<{ success: boolean; demo: DemoRequest }> => 
    axiosInstance.patch(`/admin/demos/${id}/status`, { status }),
};

export function useSubmitDemoMutation() {
  return useMutation({
    mutationFn: demoService.submitDemo,
  });
}

export function useAdminDemosQuery() {
  return useQuery<DemoRequest[], Error>({
    queryKey: ["admin-demos"],
    queryFn: demoService.getAdminDemos,
  });
}

export function useDemoStatusUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => demoService.updateDemoStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-demos"] });
    },
  });
}
