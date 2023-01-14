import styles from "./contact-section.module.css";

export default function ContactSection(props) {
  return (
    <section id={styles["contact-section"]}>
      <h2 className="section-title">Get In Touch!</h2>

      <div className={styles["contact-section__content"]}>
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>

        <a
          className="transparent-btn mt3rem"
          href="mailto:rcvioleta13@gmail.com"
        >
          Say Hi!
        </a>
      </div>
    </section>
  );
}
