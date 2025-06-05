import Head from "next/head";

import ScrollableSection from "../components/sections/scrollable-section";

const GTAG_ID = process.env.GTAG_ID;

export default function Home() {
	return (
		<>
			<Head>
				<title>Rogene Cris Perez Violeta | Portfolio</title>
				<meta name="description" content="Software Development" />
				<link rel="icon" href="/favicon.png" />
				<script
					src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
					defer
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GTAG_ID}');
        `,
					}}
				></script>
			</Head>
			<div>
				<ScrollableSection />
			</div>
		</>
	);
}
