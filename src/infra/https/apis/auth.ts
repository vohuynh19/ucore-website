export const AUTH_API = {
  LOGIN: (redirectUri: string) => `/auth/login?redirectUri=${redirectUri}`,
  EXCHANGE_TOKEN: (code: string, email: string) =>
    `/auth/exchange-token?code=${code}&email=${email}`,
  REFRESH_TOKEN: "/auth/refresh-token",
};
