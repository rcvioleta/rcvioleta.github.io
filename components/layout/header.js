import Link from "next/link";
import { useEffect, useRef } from "react";

import Menu from "../menu/menu";
import styles from "./header.module.css";

export default function Header({
  isHiddenMobileMenu,
  navItemClickHandler,
  mobileMenuClickHandler,
  toggleSidebar,
}) {
  const oldScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const navContainer = document.querySelector(
        '[class^="header_nav-container"]'
      );

      if (window.scrollY <= 0) {
        navContainer.parentNode.setAttribute("class", styles.header);
      } else if (oldScroll.current < window.scrollY) {
        navContainer.parentNode.removeAttribute("class");
      } else {
        navContainer.parentNode.setAttribute(
          "class",
          styles["header__scroll-up"]
        );
      }
      oldScroll.current = window.scrollY;
    };

    const indexContentEl = document.querySelector('[id*="index_content"]');
    indexContentEl.addEventListener("click", disableScroll);

    window.addEventListener(
      "mousewheel",
      !isHiddenMobileMenu ? disableScroll : handleScroll,
      { passive: isHiddenMobileMenu } || isHiddenMobileMenu
    );

    window.addEventListener(
      "touchmove",
      !isHiddenMobileMenu ? disableScroll : handleScroll,
      { passive: isHiddenMobileMenu } || isHiddenMobileMenu
    );

    const mobileMenuEl = document.querySelector('[id*="mobile-menu"]');
    mobileMenuEl.addEventListener("click", mobileMenuClickHandler);

    return () => {
      window.removeEventListener(
        "mousewheel",
        !isHiddenMobileMenu ? disableScroll : handleScroll,
        false
      );
      window.removeEventListener(
        "touchmove",
        !isHiddenMobileMenu ? disableScroll : handleScroll,
        false
      );
      indexContentEl.removeEventListener("click", disableScroll);
      mobileMenuEl.removeEventListener("click", mobileMenuClickHandler);
    };
  }, [isHiddenMobileMenu]);

  function disableScroll(evt) {
    if (evt.type !== "mousewheel" && !isHiddenMobileMenu) {
      toggleSidebar();
      return false;
    }
    return false;
  }

  return (
    <header className={styles.header}>
      <div className={styles["nav-container"]}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>{"<RC/>"}</h1>
          </Link>
        </div>

        <Menu {...{ isHiddenMobileMenu, navItemClickHandler, styles }} />

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
              <Menu {...{ isHiddenMobileMenu, navItemClickHandler, styles }} />
            </aside>
          )}
        </div>
      </div>
    </header>
  );
}
