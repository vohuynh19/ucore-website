import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";

import { queryClientInstance } from "src/infra/https";

import { NavigationLayout } from "ui";

import { GlobalStyled, theme, antdTheme } from "styles";
import "plyr-react/plyr.css";
import { useMounted } from "hooks";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { isMounted } = useMounted();

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 800,
    });
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Head>
        <title> Vicodemy - Viet Code Academy</title>
      </Head>

      <QueryClientProvider client={queryClientInstance}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <ConfigProvider theme={antdTheme}>
              <GlobalStyled />
              <NavigationLayout>
                <Component {...pageProps} />
              </NavigationLayout>
            </ConfigProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
