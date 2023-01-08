import ReactDOM from "react-dom";

import styles from "./overlay-notification.module.css";

function OverlayNotification({ title, message, status }) {
  if (typeof window !== "undefined") {
    return ReactDOM.createPortal(
      <div
        className={`${styles["overlay-notification"]} ${
          status ? styles[status] : ""
        }`}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
      </div>,
      document.getElementById("notification")
    );
  }

  return null;
}

export default OverlayNotification;
