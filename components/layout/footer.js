import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.copyright}>
        <Link href="/">
          <p>Designed & Built by</p> <h2>Rogene Cris Violeta</h2>
        </Link>
      </div>
    </footer>
  );
}
