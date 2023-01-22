import { Fragment, useContext, useState } from "react";

import AsideLeft from "./aside-left";
import AsideRight from "./aside-right";
import Footer from "./footer";
import Header from "./header";

import NotificationContext from "../../store/notification-context";
import OverlayNotification from "../notifications/overlay-notification";

export default function Layout({ children }) {
  const [isHiddenMobileMenu, setIsHiddenMobileMenu] = useState(true);

  const notificationCtx = useContext(NotificationContext);
  const notificationData = notificationCtx.notification;

  function mobileMenuClickHandler(evt) {
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
        mobileMenuClickHandler={() => mobileMenuClickHandler}
      />
      <AsideLeft />
      <AsideRight />
      {notificationData && <OverlayNotification {...notificationData} />}
      <main className={!isHiddenMobileMenu ? "blur" : ""}>{children}</main>
      <Footer />
    </Fragment>
  );
}
