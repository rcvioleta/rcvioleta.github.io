import { useEffect, useState } from "react";

import styles from "./work-experience-section.module.css";

export default function WorkExperienceSection(props) {
  const [activeId, setActiveId] = useState("awesome-os");

  useEffect(() => {}, [activeId]);

  function clickHandler(evt) {
    setActiveId(evt.target.dataset.id);
  }

  return (
    <section id={styles["work-experience"]}>
      <h1 className="section-title">Work / Experience</h1>
      <div className={styles["company-container"]}>
        <ul className={styles["company-list"]}>
          <li>
            <a
              className={activeId === "awesome-os" ? "active" : ""}
              data-id="awesome-os"
              onClick={clickHandler}
            >
              Awesome OS
            </a>
          </li>
          <li>
            <a
              className={activeId === "fs" ? "active" : ""}
              data-id="fs"
              onClick={clickHandler}
            >
              Flatworld Solutions
            </a>
          </li>
          <li>
            <a
              className={activeId === "freelance" ? "active" : ""}
              data-id="freelance"
              onClick={clickHandler}
            >
              Freelance
            </a>
          </li>
        </ul>
        <div className={styles["company-description__container"]}>
          {activeId === "awesome-os" && (
            <div className={styles["company-description"]}>
              <h2>Team Lead @ Awesome OS</h2>
              <div>January - June 2017</div>
              <p className={styles["company-description__item"]}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, cum alias autem similique et tenetur, rem ipsa iusto
                consectetur itaque ratione. Fugit quos aliquam enim? Sint maxime
                consectetur ipsam quasi?
              </p>
              <p className={styles["company-description__item"]}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, cum alias autem similique et tenetur, rem ipsa iusto
                consectetur itaque ratione. Fugit quos aliquam enim? Sint maxime
                consectetur ipsam quasi?
              </p>
            </div>
          )}
          {activeId === "fs" && (
            <div className={styles["company-description"]}>
              <h2>Wev Developer @ Flatworld Solution</h2>
              <div>January - June 2017</div>
              <p className={styles["company-description__item"]}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, cum alias autem similique et tenetur, rem ipsa iusto
                consectetur itaque ratione. Fugit quos aliquam enim? Sint maxime
                consectetur ipsam quasi?
              </p>
              <p className={styles["company-description__item"]}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, cum alias autem similique et tenetur, rem ipsa iusto
                consectetur itaque ratione. Fugit quos aliquam enim? Sint maxime
                consectetur ipsam quasi?
              </p>
            </div>
          )}
          {activeId === "freelance" && (
            <div className={styles["company-description"]}>
              <h2>Studio Developer @ Scout</h2>
              <div>January - June 2017</div>
              <p className={styles["company-description__item"]}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, cum alias autem similique et tenetur, rem ipsa iusto
                consectetur itaque ratione. Fugit quos aliquam enim? Sint maxime
                consectetur ipsam quasi?
              </p>
              <p className={styles["company-description__item"]}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, cum alias autem similique et tenetur, rem ipsa iusto
                consectetur itaque ratione. Fugit quos aliquam enim? Sint maxime
                consectetur ipsam quasi?
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
