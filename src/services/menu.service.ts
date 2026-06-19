import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { MenuItem } from "../types";

export const menuService = {
  getMenus: (): Promise<MenuItem[]> => axiosInstance.get("/menus"),
};

export function useMenusQuery() {
  return useQuery<MenuItem[], Error>({
    queryKey: ["website-menus"],
    queryFn: menuService.getMenus,
  });
}
