import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        {
          // eslint-disable-next-line @next/next/no-title-in-document-head
          <title> Vicodemy - Viet Code Academy</title>
        }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
