import { API_SERVICES } from "src/infra/https";

const useRefreshToken = () => {
  return API_SERVICES.AUTH.refreshToken();
};

export default useRefreshToken;
