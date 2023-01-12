import Image from "next/image";

import styles from "./about-section.module.css";

export default function AboutSection(props) {
  return (
    <section id={styles.about}>
      <h1 className="section-title">About Me</h1>
      <div id={styles["about__content"]}>
        <div>
          <p>
            Hello! My name is Rogene and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className={styles["about__tech-stack"]}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Vue</li>
            <li>Next</li>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Docker</li>
          </ul>
        </div>
        <div className={styles["profile-picture__container"]}>
          <div className={styles["profile-picture__wrapper"]}>
            <Image
              src={
                "https://s.pngkit.com/png/small/372-3729814_profile-icon-my-profile-icon-png.png"
              }
              className={styles["profile-picture__image"]}
              alt="Profile Picture"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
