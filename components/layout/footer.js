import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.flexbox}>
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

        <div className={styles["box-2"]}>
          <h1>About the company</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            deserunt, earum asperiores dolorum accusamus autem vitae dolorem
            error nostrum iure!
          </p>

          <div className={styles.icons}>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <Link href="/">
          <h2>RovioTech</h2>
        </Link>
        <p>Copyright 2019 | All Rights Reserved</p>
      </div>
    </footer>
  );
}
