import styles from "./aside-left.module.css";

export default function AsideLeft(props) {
  return (
    <div className={styles.left}>
      <div className={styles.container}>
        <ul>
          <li>
            <a href="https://github.com/rcvioleta">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/rcvioleta13">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rcvioleta/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@roviotech9072">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
