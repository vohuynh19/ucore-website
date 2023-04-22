import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import { QueryClientProvider } from "react-query";

import { useMounted } from "hooks";
import { queryClientInstance } from "src/infra/https";

import { AppLoading, NavigationLayout } from "ui";

import { GlobalStyled, theme, antdTheme } from "styles";
import "plyr-react/plyr.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { isMounted } = useMounted(300);

  return (
    <>
      <Head>
        <title> Vicodemy - Viet Code Academy</title>
      </Head>

      <QueryClientProvider client={queryClientInstance}>
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
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
