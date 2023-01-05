import ReactDOM from "react-dom";

import styles from "./overhead-notification.module.css";

function OverheadNotification({ title, message, status }) {
  if (typeof window !== "undefined") {
    return ReactDOM.createPortal(
      <div className={`${styles["overhead-notification"]} ${status}`}>
        <div className={`${styles.title} ${styles[status + "-main"]}`}>
          {title}
        </div>
        <div className={styles.message}>{message}</div>
      </div>,
      document.getElementById("notification")
    );
  }

  return null;
}

export default OverheadNotification;
