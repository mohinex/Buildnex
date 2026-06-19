import axios from "axios";

/**
 * Enterprise Axios Client configured with base URL, headers and robust error intercepters
 */
export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Response interceptor to handle centralized API exceptions gracefully
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorMsg =
      error.response?.data?.error ||
      error.response?.data?.message ||
      "An unexpected communication error occurred with the Eurosia Buildnex API.";
    console.error("Buildnex API Error Interceptor:", errorMsg, error);
    return Promise.reject(new Error(errorMsg));
  }
);

export default axiosInstance;
