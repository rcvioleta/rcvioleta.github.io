import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import styles from "./index.module.css";

export default function Home() {
  useEffect(() => {
    const greetingsEL = document.querySelector('[id^="index_greetings"]');
    const nameEL = document.querySelector('[id^="index_name"]');
    const descriptionEL = document.querySelector('[id^="index_pitch"]');
    const text =
      "Hi, my name is Rogene Cris Violeta. I build software to make life easy!";
    let counter = 0,
      delay = 80;

    const myInterval = setInterval(() => {
      if (counter <= 13) {
        greetingsEL.classList.add("cursor");
        greetingsEL.textContent += text.charAt(counter);
      }

      if (counter >= 15 && counter <= 34) {
        greetingsEL.classList.remove("cursor");
        nameEL.classList.add("cursor");
        nameEL.textContent += text.charAt(counter);
      }

      if (counter >= 36) {
        nameEL.classList.remove("cursor");
        descriptionEL.classList.add("cursor");
        descriptionEL.textContent += text.charAt(counter);
      }
      counter++;
    }, delay);

    const myTimeout = setTimeout(() => {
      clearInterval(myInterval);
    }, delay * text.length);

    return () => {
      clearTimeout(myTimeout);
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Software Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.content}>
        <div id={styles.hero}>
          <div>
            <h3 id={styles.greetings}></h3>
          </div>
          <div>
            <h1 id={styles.name}></h1>
          </div>
          <div>
            <h1 id={styles.pitch}></h1>
          </div>
          <div>
            <p id={styles["pitch-subtext"]}>
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
          <div>
            <a
              href="mailto:rcvioleta13@gmail.com"
              className="transparent-btn mt2rem"
            >
              Contact Me
            </a>
          </div>
        </div>

        <section id={styles.about}>
          <h2 id={styles["about__title"]}>About Me</h2>
          <div id={styles["about__content"]}>
            <div>
              <p>
                Hello! My name is Rogene and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p>
                {" "}
                Fast-forward to today, and I've had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
                Here are a few technologies I've been working with recently:
              </p>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Eleventy</li>
                <li>Node.js</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div id="profile-picture">
              <Image
                src={
                  "https://www.poltera.ac.id/wp-content/uploads/learn-press-profile/4/172522ec1028ab781d9dfd17eaca4427.jpg"
                }
                alt="Profile Picture"
                width={350}
                height={350}
              />
            </div>
          </div>
        </section>

        <section id="work-experience">
          <h1>
            <q>WORK / EXPERIENCE</q>
          </h1>
          <p>
            I am currently working as a{" "}
            <span className="custom-text">web developer</span> in flatworld
            solutions. My expertise includes creating responsive and robust
            websites. I am proficient with{" "}
            <span className="custom-text">vue js</span> and{" "}
            <span className="custom-text">react js</span> as well, but my skills
            are not limited to front-end technologies. I indeed have a
            competitive experience with back-end technologies such as
            <span className="custom-text">php, mysql, javascript</span> and{" "}
            <span className="custom-text">node js</span>
            on the back-end.
          </p>
        </section>
      </div>
    </>
  );
}
