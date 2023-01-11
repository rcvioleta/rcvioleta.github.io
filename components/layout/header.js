import Link from "next/link";
import { useEffect } from "react";

import styles from "./header.module.css";

export default function Header(props) {
  useEffect(() => {
    const navContainer = document.querySelector(
      '[class^="header_nav-container"]'
    );

    window.onscroll = function () {
      if (this.scrollY <= 0) {
        navContainer.parentNode.setAttribute("class", styles.header);
      } else if (this.oldScroll < this.scrollY) {
        navContainer.parentNode.removeAttribute("class");
      } else {
        navContainer.parentNode.setAttribute(
          "class",
          styles["header__scroll-up"]
        );
      }
      this.oldScroll = this.scrollY;
    };

    const mobileMenuEl = document.querySelector('[id*="mobile-menu"]');
    mobileMenuEl.addEventListener("click", mobileMenuClickHandler);

    return () => {
      mobileMenuEl.removeEventListener("click", mobileMenuClickHandler);
    };
  }, []);

  function mobileMenuClickHandler(evt) {
    evt.target.classList.toggle("hidden");
  }

  function contactClickHandler(evt) {
    document.querySelector('header[class*="header"]').removeAttribute("class");
  }

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
            <a href="#contact" onClick={contactClickHandler}>
              <h3>Contact</h3>
            </a>
          </li>
          <li>
            <Link href="/resume">
              <h3 className="transparent-btn">Resume</h3>
            </Link>
          </li>
        </ul>

        <div id={styles["mobile-menu"]}>
          <button id={styles["mobile-menu-button"]}>
            <div className={styles["menu-stripes-container"]}>
              <div className={styles["menu-stripes"]}></div>
            </div>
          </button>

          <aside>
            <ul>
              <li>About</li>
              <li>Work/Experience</li>
              <li>Contact</li>
              <li>Resume</li>
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
}
