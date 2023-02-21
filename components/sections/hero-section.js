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
        <noscript>
          You need to enable Javascript in order to see the text.
        </noscript>
      </div>
      <div>
        <p id={styles["pitch-subtext"]}>
          I always get excited about opportunities that create mutually beneficial partnerships that drive growth on both sides of the relationship, specifically in the world of technology/software development. Currently, I'm focused on
          supervising software engineers at <a href="https://www.joinhoney.com/">Honey</a>
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
