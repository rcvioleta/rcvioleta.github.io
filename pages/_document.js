import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="..." />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="notification"></div>
      </body>
    </Html>
  );
}
