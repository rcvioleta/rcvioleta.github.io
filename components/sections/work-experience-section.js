import { useState } from "react";

import styles from "./work-experience-section.module.css";

export default function WorkExperienceSection(props) {
  const [activeSection, setActiveSection] = useState("aos");

  function sectionClickHandler(section) {
    setActiveSection(section);
  }

  return (
    <section
      id="work-experience-section"
      className={styles["work-experience-container"]}
    >
      <h1 className="section-title">Work / Experience</h1>
      <div className={styles["company-container"]}>
        <ul className={styles["company-list"]}>
          <li>
            <a
              className={activeSection === "aos" ? "active" : ""}
              onClick={() => sectionClickHandler("aos")}
            >
              Awesome OS
            </a>
          </li>
          <li>
            <a
              className={activeSection === "fs" ? "active" : ""}
              onClick={() => sectionClickHandler("fs")}
            >
              Flatworld Solutions
            </a>
          </li>
          <li>
            <a
              className={activeSection === "fl" ? "active" : ""}
              onClick={() => sectionClickHandler("fl")}
            >
              Freelance
            </a>
          </li>
        </ul>
        <div className={styles["company-description__container"]}>
          {activeSection === "aos" && (
            <div className={styles["company-description"]}>
              <h2>Frontend Developer | Team Lead</h2>
              <div>February 2020 - Present</div>
              <div className={styles["company-description__item"]}>
                <p className="bold-text underlined-text">
                  Promoted to Store Integration Lead, August 2021 - Present
                </p>
                <p className={styles["company-description__item-subcat"]}>
                  Streamlined workflows and increased productivity through
                  efficient monitoring processes and reduced manual tasks.
                </p>
                <p className={styles["company-description__item-subcat"]}>
                  Mentored and coached team members, fostering their growth and
                  driving continuous improvement. Resulted in 50% of team
                  members advancing to higher roles.
                </p>
                <p className={styles["company-description__item-subcat"]}>
                  Collaborated with cross-functional teams to optimize workflow
                  efficiency and ensure successful project delivery.
                </p>
                <p className={styles["company-description__item-subcat"]}>
                  Successfully resolved Tier 1 issues, minimizing downtime and
                  enabling smooth development progress.
                </p>
              </div>
              <div className={styles["company-description__item"]}>
                <div className="bold-text underlined-text">
                  Promoted to Store Integration Tier 2, June 2021 - August 2021
                </div>
                <div className={styles["company-description__item-subcat"]}>
                  Resolved complex issues as the primary point of escalation,
                  leveraging thorough analysis and optimal solutions.
                </div>
                <div className={styles["company-description__item-subcat"]}>
                  Enhanced efficiency and accuracy through expertise in
                  auto-ticketer, significantly reducing non-issue occurrences.
                </div>
                <div className={styles["company-description__item-subcat"]}>
                  Demonstrated deep domain knowledge in Honey products, leading
                  successful project and workflow rollouts while providing
                  guidance to new team members.
                </div>
              </div>
              <div className={styles["company-description__item"]}>
                <div className="bold-text underlined-text">
                  Previously held the position of Store Integration Tier 1,
                  February 2020 - June 2021
                </div>
                <div className={styles["company-description__item-subcat"]}>
                  Drove revenue growth through effective integration and
                  maintenance of Honey products, while proactively resolving
                  bugs and optimizing functionalities to ensure optimal
                  performance.
                </div>
                <div className={styles["company-description__item-subcat"]}>
                  Conducted in-depth research and implemented targeted
                  enhancements for optimized work efficiency.{" "}
                </div>
                <div className={styles["company-description__item-subcat"]}>
                  Fostered teamwork and continuous improvement through close
                  collaboration with colleagues.
                </div>
              </div>
            </div>
          )}
          {activeSection === "fs" && (
            <div className={styles["company-description"]}>
              <h2>Full Stack Web Developer</h2>
              <div>August 2018 - February 2020</div>
              <p className={styles["company-description__item"]}>
                Developed website interfaces using HTML, CSS, JavaScript, and
                frontend libraries, resulting in highly engaging and
                user-friendly designs.
              </p>
              <p className={styles["company-description__item"]}>
                Integrated Laravel back-end framework with GraphQL and SQL,
                optimizing data querying and manipulation for a seamless user
                experience.
              </p>
              <p className={styles["company-description__item"]}>
                Utilized advanced OOP principles, including the repository
                pattern, to build scalable and efficient code, improving
                performance and maintainability.
              </p>
              <p className={styles["company-description__item"]}>
                Maintained proactive and transparent communication with clients,
                incorporating their feedback and delivering frequent development
                updates to foster a collaborative project environment. Exceeded
                client expectations through rapid learning, leading to enhanced
                satisfaction and successful project outcomes.
              </p>
            </div>
          )}
          {activeSection === "fl" && (
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
