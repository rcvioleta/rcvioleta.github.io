import Link from "next/link";

import styles from "./footer.module.css";

import AsideLeft from "./aside-left";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles["icons-container"]}>
        <AsideLeft />
      </div>
      <div className={styles.copyright}>
        <Link href="/">
          <p>Designed & Built by</p> <h2>Rogene Cris Violeta</h2>
        </Link>
      </div>
    </footer>
  );
}
