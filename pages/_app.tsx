import "aos/dist/aos.css";
import "plyr-react/plyr.css";
import "react-quill/dist/quill.snow.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";

import { queryClientInstance } from "src/infra/https";

import { GlobalStyled, theme, antdTheme } from "styles";
import { AppLoading } from "ui";

const NavigationLayout = dynamic(
  () => import("ui/templates/NavigationLayout"),
  {
    loading: () => <AppLoading />,
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 800,
    });
  }, []);

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
