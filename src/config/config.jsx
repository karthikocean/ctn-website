import axios from "axios";

const APP_ENV = import.meta.env.VITE_APP_ENV || "local";

let BASE_URL = "http://localhost:5001/website-api";
let SERVER_URL = "http://localhost:5001";

switch (APP_ENV) {
  case "production":
    BASE_URL = "https://api.trustednetwork.in/website-api";
    SERVER_URL = "https://api.trustednetwork.in";
    break;
  case "local":
  default:
    BASE_URL = "http://192.168.88.28:5001/website-api";
    SERVER_URL = "http://192.168.88.28:5001";
    break;
}

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      !error.config?.url?.includes("login") &&
      !window.location.pathname.includes("login")
    ) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("authUser");
      localStorage.setItem("isAuthenticated", "false");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export { BASE_URL, SERVER_URL, apiClient, apiClient as api, apiClient as clientApi };

export default apiClient;
