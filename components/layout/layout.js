import { Fragment, useContext } from "react";

import NotificationContext from "../../store/notification-context";

import OverheadNotification from "../notifications/overhead-notification";
import Navigation from "./navigation";

export default function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const notificationData = notificationCtx.notification;

  return (
    <Fragment>
      <Navigation />
      {notificationData && <OverheadNotification {...notificationData} />}
      <main>{children}</main>
    </Fragment>
  );
}
