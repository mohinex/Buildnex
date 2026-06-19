import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { BlogPost } from "../types";

export const blogService = {
  getBlogs: (): Promise<BlogPost[]> => axiosInstance.get("/blog"),
  
  getBlogPostBySlug: (slug: string): Promise<BlogPost> => 
    axiosInstance.get(`/blog/${slug}`) as Promise<BlogPost>,
  
  createBlogPost: (data: Partial<BlogPost>): Promise<BlogPost> => 
    axiosInstance.post("/blog", data),
  
  deleteBlogPost: (id: string): Promise<{ success: boolean }> => 
    axiosInstance.delete(`/blog/${id}`),
};

export function useBlogsQuery() {
  return useQuery<BlogPost[], Error>({
    queryKey: ["website-blogs"],
    queryFn: blogService.getBlogs,
  });
}

export function useBlogPostQuery(slug: string) {
  return useQuery<BlogPost, Error>({
    queryKey: ["website-blog-post", slug],
    queryFn: () => blogService.getBlogPostBySlug(slug),
    enabled: !!slug,
  });
}

export function useBlogPostCreateMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blogService.createBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-blogs"] });
    },
  });
}

export function useBlogPostDeleteMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blogService.deleteBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["website-blogs"] });
    },
  });
}
