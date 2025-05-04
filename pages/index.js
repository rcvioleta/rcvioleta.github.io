import Head from "next/head";

import AboutSection from "../components/sections/about-section";
import ContactSection from "../components/sections/contact-section";
import HeroSection from "../components/sections/hero-section";
import WorkExperienceSection from "../components/sections/work-experience-section";

import styles from "./index.module.css";

const GTAG_ID = process.env.GTAG_ID;

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content="Software Development" />
				<link rel="icon" href="/favicon.ico" />
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
			<div id={styles.content}>
				{/* <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} /> */}
				<HeroSection />
				<AboutSection />
				<WorkExperienceSection />
				<ContactSection />
			</div>
		</>
	);
}
