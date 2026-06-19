import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { PricingPackage } from "../types";

export const pricingService = {
  getPricingPlanList: (): Promise<PricingPackage[]> => axiosInstance.get("/pricing"),
  
  updatePricingPlan: (id: string, data: Partial<PricingPackage>): Promise<{ success: boolean; pricing: PricingPackage[] }> => 
    axiosInstance.patch(`/pricing/${id}`, data),
};

export function usePricingQuery() {
  return useQuery<PricingPackage[], Error>({
    queryKey: ["website-pricing"],
    queryFn: pricingService.getPricingPlanList,
  });
}

export function usePricingUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<PricingPackage> }) => 
      pricingService.updatePricingPlan(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-pricing"] });
    },
  });
}
