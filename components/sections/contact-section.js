import styles from "./contact-section.module.css";

export default function ContactSection(props) {
  return (
    <section id="contact">
      <h1>Get In Touch!</h1>
      <p>You can contact me at:</p>

      <div className={`${styles["box-1"]} ${styles.flexbox}`}>
        <div className={styles.icon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className={styles.description}>
          59A Father Selga Street, <br />
          <span className={styles["bold-text"]}>
            Davao City 8000, Philippines
          </span>
        </div>

        <div className={styles.icon}>
          <i className="fas fa-phone-square"></i>
        </div>
        <div className={styles.description}>
          <span className={styles["bold-text"]}>
            <a href="tel:+639098111780">+63 909-8111-780</a>
          </span>
        </div>

        <div className={styles.icon}>
          <i className="fas fa-envelope"></i>
        </div>
        <div className={styles.description}>
          <span className={styles["bold-text"]}>
            <a href="mailto:rcvioleta13@gmail.com">rcvioleta13@gmail.com</a>
          </span>
        </div>
      </div>
    </section>
  );
}
