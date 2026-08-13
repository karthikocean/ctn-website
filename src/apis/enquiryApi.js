import { api } from "../config/config";

class EnquiryApi {
  createEnquiry = async (data) => {
    try {
      const response = await api.post("/enquiries", data);
      if (response.status === 200 || response.status === 201) {
        return { status: true, response: response.data };
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to submit enquiry.";
      return {
        status: false,
        response: error?.response?.data || error,
        message: errorMessage,
      };
    }
  };

  getEnquiries = async (params = {}) => {
    try {
      const response = await api.get("/enquiries", { params });
      if (response.status === 200) {
        return { status: true, response: response.data };
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch enquiries list.";
      return {
        status: false,
        response: error?.response?.data || error,
        message: errorMessage,
      };
    }
  };
}

const enquiryApi = new EnquiryApi();
export default enquiryApi;

export const { createEnquiry, getEnquiries } = enquiryApi;
