import { Fragment, useContext } from "react";

import AsideLeft from "./aside-left";
import AsideRight from "./aside-right";
import Footer from "./footer";
import Header from "./header";

import NotificationContext from "../../store/notification-context";
import OverlayNotification from "../notifications/overlay-notification";

export default function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const notificationData = notificationCtx.notification;

  return (
    <Fragment>
      <Header />
      <AsideLeft />
      <AsideRight />
      {notificationData && <OverlayNotification {...notificationData} />}
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
