import styles from "./aside-left.module.css";

export default function AsideLeft(props) {
  return (
    <div className={styles.left}>
      <div className={styles.container}>
        <ul>
          <li>
            <a href="https://github.com/rcvioleta" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/rcvioleta13" target="_blank">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rcvioleta/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@roviotech9072" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
