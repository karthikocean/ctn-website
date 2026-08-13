import { api } from "../config/config";

class CommonApi {
  getCommonStats = async () => {
    try {
      const response = await api.get("/common/stats");
      if (response.status === 200) {
        return { status: true, data: response.data?.data || response.data, response: response.data };
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch website statistics.";
      return {
        status: false,
        response: error?.response?.data || error,
        message: errorMessage,
      };
    }
  };
}

const commonApi = new CommonApi();
export default commonApi;

export const { getCommonStats } = commonApi;
