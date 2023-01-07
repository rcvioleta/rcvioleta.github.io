import Link from "next/link";

import styles from "./header.module.css";

export default function Header(props) {
  return (
    <header className={styles.nav}>
      <div className={styles["nav-container"]}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>ROGENE CRIS VIOLETA</h1>
            <h3>Web/Software Developer</h3>
          </Link>
        </div>

        <ul className={styles["nav-items"]}>
          <li>
            <Link href="/about">
              <h3>ABOUT</h3>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h3>MY WORK</h3>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h3>GET IN TOUCH</h3>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
