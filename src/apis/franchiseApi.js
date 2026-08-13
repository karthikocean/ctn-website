import { api } from "../config/config";

class FranchiseApi {
  createFranchiseApplication = async (data) => {
    try {
      const response = await api.post("/franchise-applications", data);
      if (response.status === 200 || response.status === 201) {
        return { status: true, response: response.data };
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to submit franchise application.";
      return {
        status: false,
        response: error?.response?.data || error,
        message: errorMessage,
      };
    }
  };

  getFranchiseApplications = async (params = {}) => {
    try {
      const response = await api.get("/franchise-applications", { params });
      if (response.status === 200) {
        return { status: true, response: response.data };
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch franchise applications list.";
      return {
        status: false,
        response: error?.response?.data || error,
        message: errorMessage,
      };
    }
  };
}

const franchiseApi = new FranchiseApi();
export default franchiseApi;

export const { createFranchiseApplication, getFranchiseApplications } = franchiseApi;
