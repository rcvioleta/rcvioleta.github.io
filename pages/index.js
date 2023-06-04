import Head from "next/head";

import AboutSection from "../components/sections/about-section";
import ContactSection from "../components/sections/contact-section";
import HeroSection from "../components/sections/hero-section";
import WorkExperienceSection from "../components/sections/work-experience-section";

import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Software Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.content}>
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <ContactSection />
      </div>
    </>
  );
}
