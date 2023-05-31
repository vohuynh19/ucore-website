import APIS from "../apis";
import axiosInstance from "../axios";

const AuthService = {
  login: (redirectUri: string): Promise<void> =>
    axiosInstance.get(APIS.LOGIN(redirectUri)),
  exchangeToken: (code: string, email: string) =>
    axiosInstance.post(APIS.EXCHANGE_TOKEN(code, email)),
  refreshToken: () => axiosInstance.post(APIS.REFRESH_TOKEN),
};

export default AuthService;
