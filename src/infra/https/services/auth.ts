import APIS from "../apis";
import axiosInstance from "../axios";

const AuthService = {
  login: (redirectUri: string): Promise<void> =>
    axiosInstance.get(APIS.auth.LOGIN(redirectUri)),
  exchangeToken: (code: string, email: string) =>
    axiosInstance.post(APIS.auth.EXCHANGE_TOKEN(code, email)),
  refreshToken: () => axiosInstance.post(APIS.auth.REFRESH_TOKEN),
};

export default AuthService;
