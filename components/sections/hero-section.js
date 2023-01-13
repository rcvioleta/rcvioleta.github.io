import { useTypedLetters } from "./../../hooks/useTypedLetters";

import styles from "./hero-section.module.css";

export default function HeroSection(props) {
  const typedLetter = useTypedLetters();

  return (
    <section id={styles.hero}>
      <div id={styles.greetings}>
        <h2>Hi, my name is</h2>
      </div>
      <div id={styles.name}>
        <h2>Rogene Cris Violeta</h2>
      </div>
      <div id={styles.pitch}>
        <h2>
          {typedLetter}
          <span className="cursor"></span>
        </h2>
      </div>
      <div>
        <p id={styles["pitch-subtext"]}>
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at Upstatement.
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
    </section>
  );
}
