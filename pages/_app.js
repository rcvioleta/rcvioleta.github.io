import Head from "next/head";

import { Fragment } from "react";

import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NotificationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </Fragment>
  );
}
