import { useContext, useRef } from "react";

import NotificationContext from "../store/notification-context";

import styles from "./contact.module.css";

export default function Contact(props) {
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const notificationCtx = useContext(NotificationContext);

  function sendMessageHandler() {
    notificationCtx.showNotification({
      // title: "Please wait!",
      message: "Hang on! Sending your message.",
      status: "pending",
    });

    setTimeout(() => {
      notificationCtx.showNotification({
        // title: "Success!",
        message: "Success! Message sent!",
        status: "success",
      });

      setTimeout(() => {
        notificationCtx.hideNotification();
      }, 3000);
    }, 5000);
  }

  return (
    <div className={styles["contact-form"]}>
      <div className={styles["title-container"]}>
        <h1>Hello, how can I help you?</h1>
      </div>
      <div className={styles["name-container"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
      </div>
      <div className={styles["email-container"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
      </div>
      <div className={styles["message-container"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div className={styles["send-container"]}>
        <button className={styles["send-button"]} onClick={sendMessageHandler}>
          Send Message
        </button>
      </div>
    </div>
  );
}
