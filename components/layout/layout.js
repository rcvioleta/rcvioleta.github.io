import React from "react";

import styles from "../../styles/styles.module.css";

export default function Layout({ children }) {
	return (
		<React.Fragment>
			<div className={styles["container"]}>
				<header className={styles["sticky-section"]}>
					<div className={styles["self-intro"]}>
						<h1>Rogene Cris Perez Violeta</h1>
						<h2>Full-Stack Developer | GHL Expert</h2>
						<p>Simplying your life, one web-app at at time!</p>
						<ul className={styles["nav"]}>
							<li>
								<a href="#about">ABOUT</a>
							</li>
							<li>
								<a href="#experience">EXPERIENCE</a>
							</li>
							<li>
								<a href="#projects">PROJECTS</a>
							</li>
						</ul>
					</div>

					<ul className={styles["social-media-list"]}>
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
				</header>
				<main className={styles["scrollable-section"]}>{children}</main>
			</div>
		</React.Fragment>
	);
}
