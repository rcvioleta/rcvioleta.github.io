import styles from "./aside-right.module.css";

export default function AsideRight(props) {
  return (
    <div className={styles.right}>
      <div className={styles.container}>
        <a href="mailto:rcvioleta13@gmail.com">rcvioleta13@gmail.com</a>
      </div>
    </div>
  );
}
