import Head from "next/head";

import { useEffect } from "react";
import ScrollableSection from "../components/sections/scrollable-section";

const GTAG_ID = process.env.GTAG_ID;

export default function Home() {
	useEffect(() => {
		const handleMouseOver = (e) => {
			const x = Math.round((e.pageX / window.innerWidth) * 100);
			const y = Math.round((e.pageY / window.innerHeight) * 46);

			document.body.style.backgroundImage = `radial-gradient(37.5rem at ${x}% ${y}%, #0f0f0f, #000000)`;
		};

		window.addEventListener("mousemove", handleMouseOver);

		return () => window.removeEventListener("mousemove", handleMouseOver);
	}, []);

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
