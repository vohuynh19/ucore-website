import APIS from "../apis";
import axiosInstance from "../axios";

const AuthService = {
  logout: () => axiosInstance.get(APIS.auth.LOGOUT),
  refreshToken: () => axiosInstance.post(APIS.auth.REFRESH_TOKEN),
  login: (redirectUri: string): Promise<void> =>
    axiosInstance.get(APIS.auth.LOGIN(redirectUri)),
  exchangeToken: (code: string, email: string): Promise<void> =>
    axiosInstance.post(APIS.auth.EXCHANGE_TOKEN(code, email)),
};

export default AuthService;
