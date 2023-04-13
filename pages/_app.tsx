import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";
import { GlobalStyled, theme, antdTheme } from "styles";
import { ConfigProvider } from "antd";
import { NavigationLayout } from "@ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={antdTheme}>
        <GlobalStyled />

        <NavigationLayout>
          <Component {...pageProps} />
        </NavigationLayout>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
