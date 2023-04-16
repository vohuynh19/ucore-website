import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";

import { AppLoading, NavigationLayout } from "ui";
import { GlobalStyled, theme, antdTheme } from "styles";
import { useMounted } from "src/hooks";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const { isMounted } = useMounted(300);

  return (
    <>
      <Head>
        <title> Vicodemy - Viet Code Academy</title>
      </Head>

      <ThemeProvider theme={theme}>
        <ConfigProvider theme={antdTheme}>
          <GlobalStyled />

          {isMounted && (
            <NavigationLayout>
              <Component {...pageProps} />
            </NavigationLayout>
          )}

          {!isMounted && <AppLoading />}
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
