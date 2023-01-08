import Link from "next/link";
import { useEffect } from "react";

import styles from "./header.module.css";

export default function Header(props) {
  useEffect(() => {
    const navContainer = document.querySelector(
      '[class^="header_nav-container"]'
    );

    window.onscroll = function () {
      console.log("scrollY", this.scrollY);
      if (this.scrollY <= 0) {
        navContainer.parentNode.setAttribute("class", styles.header);
      } else if (this.oldScroll < this.scrollY) {
        console.log("scrolling down...");
        navContainer.parentNode.removeAttribute("class");
      } else {
        console.log("scrolling up...");
        navContainer.parentNode.setAttribute(
          "class",
          styles["header__scroll-up"]
        );
      }
      this.oldScroll = this.scrollY;
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles["nav-container"]}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>RC</h1>
          </Link>
        </div>

        <ul className={styles["nav-items"]}>
          <li>
            <Link href="/about">
              <h3>About</h3>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h3>Work/Experience</h3>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h3>Contact</h3>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h3 className="transparent-btn">Resume</h3>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
