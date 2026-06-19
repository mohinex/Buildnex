import { QueryClient } from "@tanstack/react-query";

/**
 * Enterprise Query Client setup with strict retry tolerances and persistent caching config
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes cache lifetime before considered stale
      gcTime: 10 * 60 * 1000,  // 10 minutes garbage collection timing
    },
  },
});

export default queryClient;
