import Link from "next/link";
import { useEffect } from "react";

import styles from "./header.module.css";

export default function Header({
  isHiddenMobileMenu,
  navItemClickHandler,
  mobileMenuClickHandler,
  toggleSidebar,
}) {
  useEffect(() => {
    document
      .querySelector('[id*="index_content"]')
      .addEventListener("click", disableScroll);

    window.addEventListener(
      "mousewheel",
      !isHiddenMobileMenu ? disableScroll : pageOnScrollHandler,
      { passive: isHiddenMobileMenu } || isHiddenMobileMenu
    );

    window.addEventListener(
      "touchmove",
      !isHiddenMobileMenu ? disableScroll : pageOnScrollHandler,
      { passive: isHiddenMobileMenu } || isHiddenMobileMenu
    );

    const mobileMenuEl = document.querySelector('[id*="mobile-menu"]');
    mobileMenuEl.addEventListener("click", mobileMenuClickHandler);

    return () => {
      window.removeEventListener(
        "mousewheel",
        !isHiddenMobileMenu ? disableScroll : pageOnScrollHandler,
        false
      );
      window.removeEventListener(
        "touchmove",
        !isHiddenMobileMenu ? disableScroll : pageOnScrollHandler,
        false
      );
      document
        .querySelector('[id*="index_content"]')
        .removeEventListener("click", disableScroll);
      mobileMenuEl.removeEventListener("click", mobileMenuClickHandler);
    };
  }, [isHiddenMobileMenu]);

  function disableScroll(evt) {
    // evt.preventDefault();
    // evt.stopPropagation();

    if (evt.type !== "mousewheel" && !isHiddenMobileMenu) {
      // document.querySelector('[id*="mobile-menu-button"]').click();
      toggleSidebar();
      return false;
    }

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
            <h1>{"<RC/>"}</h1>
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
            onClick={() => toggleSidebar()}
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
