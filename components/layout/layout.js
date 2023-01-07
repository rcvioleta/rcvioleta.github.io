import { Fragment, useContext } from "react";

import Footer from "./footer";
import Header from "./header";

import NotificationContext from "../../store/notification-context";
import OverheadNotification from "../notifications/overhead-notification";

export default function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const notificationData = notificationCtx.notification;

  return (
    <Fragment>
      <Header />
      {notificationData && <OverheadNotification {...notificationData} />}
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
