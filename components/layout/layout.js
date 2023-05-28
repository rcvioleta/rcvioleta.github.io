import { Fragment, useContext, useState } from "react";

import AsideLeft from "./aside-left";
import AsideRight from "./aside-right";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  const [isHiddenMobileMenu, setIsHiddenMobileMenu] = useState(true);

  function toggleSidebarHandler(evt) {
    setIsHiddenMobileMenu((prevState) => !prevState);
  }

  function navItemClickHandler(evt) {
    document.querySelector("header").removeAttribute("class");
    setIsHiddenMobileMenu(true);
  }

  return (
    <Fragment>
      <Header
        isHiddenMobileMenu={isHiddenMobileMenu}
        navItemClickHandler={navItemClickHandler}
        toggleSidebar={toggleSidebarHandler}
      />
      <AsideLeft />
      <AsideRight />
      <main className={!isHiddenMobileMenu ? "blur" : ""}>{children}</main>
      <Footer />
    </Fragment>
  );
}
