import Head from "next/head";

import { Fragment } from "react";

import Layout from "../components/layout/layout";

import "../styles/custom-settings.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
					integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
					crossorigin="anonymous"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	);
}
