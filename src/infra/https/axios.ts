import { API_HOST } from "@constants/arbitrary";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_HOST,
});

export default axiosInstance;
