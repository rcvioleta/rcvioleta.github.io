import { useEffect } from "react";

import styles from "./hero-section.module.css";

export default function HeroSection(props) {
  useEffect(() => {
    const heroContainer = document.querySelector('[id*="hero-section_hero"]');
    heroContainer.style.paddingTop = "150px";

    const greetingsEL = document.querySelector(
      '[id^="hero-section_greetings"]'
    );
    const nameEL = document.querySelector('[id^="hero-section_name"]');
    const descriptionEL = document.querySelector('[id^="hero-section_pitch"]');
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
      heroContainer.style.paddingTop = "0";
    }, delay * text.length + 2000);

    return () => {
      clearTimeout(myTimeout);
      clearInterval(myInterval);
      resetHeroText(greetingsEL, nameEL, descriptionEL);
    };
  }, []);

  function resetHeroText(...elements) {
    [...elements].forEach((el) => {
      if (el.classList.contains("cursor")) {
        el.classList.remove("cursor");
      }
      el.textContent = "";
    });
  }

  return (
    <section id={styles.hero}>
      <div>
        <h2 id={styles.greetings}></h2>
      </div>
      <div>
        <h2 id={styles.name}></h2>
      </div>
      <div>
        <h2 id={styles.pitch}></h2>
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
