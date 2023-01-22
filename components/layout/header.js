import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./header.module.css";

export default function Header(props) {
  const [isHiddenMobileMenu, setIsHiddenMobileMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", pageOnScrollHandler);
    window.addEventListener(
      "touchmove",
      !isHiddenMobileMenu ? disableScroll : pageOnScrollHandler,
      { passive: false } || false
    );

    const mobileMenuEl = document.querySelector('[id*="mobile-menu"]');
    mobileMenuEl.addEventListener("click", mobileMenuClickHandler);

    return () => {
      window.removeEventListener("scroll", pageOnScrollHandler);
      window.removeEventListener(
        "touchmove",
        !isHiddenMobileMenu ? disableScroll : pageOnScrollHandler
      );
      mobileMenuEl.removeEventListener("click", mobileMenuClickHandler);
    };
  }, [isHiddenMobileMenu]);

  function mobileMenuClickHandler() {
    setIsHiddenMobileMenu((prevState) => !prevState);
  }

  function navItemClickHandler(evt) {
    document.querySelector("header").removeAttribute("class");
    setIsHiddenMobileMenu(true);
  }

  function disableScroll(evt) {
    evt.preventDefault();
    return false;
  }

  function pageOnScrollHandler(evt) {
    const navContainer = document.querySelector(
      '[class^="header_nav-container"]'
    );

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
            <a href="#about-section" onClick={navItemClickHandler}>
              <h3>About</h3>
            </a>
          </li>
          <li>
            <a href="#work-experience-section" onClick={navItemClickHandler}>
              <h3>Work/Experience</h3>
            </a>
          </li>
          <li>
            <a href="#contact-section" onClick={navItemClickHandler}>
              <h3>Contact</h3>
            </a>
          </li>
          <li>
            <a href="/my-resume.pdf" target="_blank">
              <h3 className="transparent-btn">Resume</h3>
            </a>
          </li>
        </ul>

        <div id={styles["mobile-menu"]}>
          <button
            id={styles["mobile-menu-button"]}
            onClick={(evt) => mobileMenuClickHandler.bind(null, evt)}
          >
            <div className={styles["menu-stripes-container"]}>
              <div
                className={
                  isHiddenMobileMenu
                    ? styles["menu-stripes"]
                    : styles["menu-stripes__open"]
                }
              ></div>
            </div>
          </button>

          {!isHiddenMobileMenu && (
            <aside>
              <ul>
                <li>
                  <a href="#about-section" onClick={navItemClickHandler}>
                    <h3>About</h3>
                  </a>
                </li>
                <li>
                  <a
                    href="#work-experience-section"
                    onClick={navItemClickHandler}
                  >
                    <h3>Work/Experience</h3>
                  </a>
                </li>
                <li>
                  <a href="#contact-section" onClick={navItemClickHandler}>
                    <h3>Contact</h3>
                  </a>
                </li>
                <li>
                  <a href="/my-resume.pdf" target="_blank">
                    <h3 className="transparent-btn">Resume</h3>
                  </a>
                </li>
              </ul>
            </aside>
          )}
        </div>
      </div>
    </header>
  );
}
