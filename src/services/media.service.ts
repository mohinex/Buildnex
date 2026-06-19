import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

export interface MediaFile {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  sizeBytes: number;
  uploadedAt: string;
}

export const mediaService = {
  getMediaFiles: (): Promise<MediaFile[]> => 
    (axiosInstance.get("/media") as Promise<MediaFile[]>).catch(() => [] as MediaFile[]),
    
  uploadFile: (formData: FormData): Promise<MediaFile> => 
    axiosInstance.post("/media/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
    
  deleteFile: (id: string): Promise<{ success: boolean }> => 
    axiosInstance.delete(`/media/${id}`),
};

export function useMediaFilesQuery() {
  return useQuery<MediaFile[], Error>({
    queryKey: ["media-files"],
    queryFn: mediaService.getMediaFiles,
  });
}

export function useMediaUploadMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mediaService.uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["media-files"] });
    },
  });
}

export function useMediaDeleteMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mediaService.deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["media-files"] });
    },
  });
}
