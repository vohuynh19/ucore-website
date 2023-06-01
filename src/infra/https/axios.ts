import { API_HOST } from "@constants/arbitrary";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_HOST,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
