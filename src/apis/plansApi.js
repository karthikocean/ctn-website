import { api } from "../config/config";

class PlansApi {
  getPlans = async (params = {}) => {
    try {
      const response = await api.get("/plans", { params });
      if (response.status === 200) {
        return { status: true, data: response.data?.data || response.data, response: response.data };
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch subscription plans.";
      return {
        status: false,
        response: error?.response?.data || error,
        message: errorMessage,
      };
    }
  };

  getPlanById = async (id) => {
    try {
      const response = await api.get(`/plans/${id}`);
      if (response.status === 200) {
        return { status: true, data: response.data?.data || response.data, response: response.data };
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch subscription plan details.";
      return {
        status: false,
        response: error?.response?.data || error,
        message: errorMessage,
      };
    }
  };
}

const plansApi = new PlansApi();
export default plansApi;

export const { getPlans, getPlanById } = plansApi;
