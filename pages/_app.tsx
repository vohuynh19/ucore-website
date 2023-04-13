import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";
import { GlobalStyled, theme, antdTheme } from "styles";
import { Button, ConfigProvider } from "antd";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={antdTheme}>
        <GlobalStyled />
        <Component {...pageProps} />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
