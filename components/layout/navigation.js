import Link from "next/link";

import styles from "./navigation.module.css";

export default function Navigation(props) {
  return (
    <div className={styles.nav}>
      <div className={styles["nav-container"]}>
        <div className={styles.logo}>
          <h1>R'Violeta</h1>
        </div>
        <div className={styles.about}>
          <Link href="/">
            <h3>About</h3>
          </Link>
        </div>
        <div className={styles.contact}>
          <Link href="/contact">
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
