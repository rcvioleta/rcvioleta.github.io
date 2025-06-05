import Image from "next/image";
import React, { useState } from "react";

import styles from "./scrollable-section.module.css";

const Modal = ({ handleClose }) => {
	return (
		<div className={styles["modal-container"]}>
			<div className={styles["modal-backdrop"]}></div>
			<a href="#close" onClick={handleClose}>
				close
			</a>
			<div
				style={{
					position: "fixed",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<video width="640" controls>
					<source
						src="https://www.youtube.com/watch?v=iGUSTyG-CYw"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					iste, nihil eius ipsam quam fugit provident architecto impedit ea
					laboriosam!
				</p>
			</div>
		</div>
	);
};

export default function ScrollableSection() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<React.Fragment>
			<section id="about" className={styles["about-section"]}>
				<p>
					I'm a Full-Stack Developer passionate about delivering high-quality,
					sustainable solutions and fostering collaboration across teams. With
					over six years of full stack development experience, I have led
					frontend initiatives, optimized backend systems, and collaborated
					cross-functionally to drive project success.
				</p>
				<p>
					In the past, I've participated in improving core business logic to
					reduce bugs and accelerate deployments, led frontend development, and
					developed my leadership skills—mentoring team members, streamlining
					workflows, and contributing to revenue growth through strategic
					integrations.
				</p>
			</section>

			<section id="experience" className={styles["experience-section"]}>
				<ol>
					<li>
						<div className={styles["backdrop"]}></div>
						<div className={styles["years"]}>
							<p>Aug 2023 - Jan 2025</p>
						</div>
						<div className={styles["desc"]}>
							<h1>Full Stack Developer · Code Squirrel</h1>
							<p>
								Improved core business logic for faster deployments and fewer
								bugs while supporting a collaborative, innovative team
								environment. Assisted in server management, debugging, and code
								reviews. Led frontend development, built APIs, advised on
								technical solutions, and set up the Merchant Warrior payment
								gateway.
							</p>
							<ul className={styles["tech-stack"]}>
								<li>HTML</li>
								<li>CSS</li>
								<li>Javascript</li>
								<li>Blade</li>
								<li>Tailwind CSS</li>
								<li>Laravel</li>
								<li>MySQL</li>
								<li>GraphQL</li>
								<li>Cypress</li>
								<li>CI/CD</li>
								<li>Git/GitLab</li>
								<li>Linux Server</li>
								<li>React</li>
								<li>React Query</li>
								<li>React Material UI</li>
								<li>Typescript</li>
								<li>OAuth</li>
								<li>SWR</li>
								<li>Crontab</li>
							</ul>
						</div>
					</li>
					<li>
						<div className={styles["backdrop"]}></div>
						<div className={styles["years"]}>
							<p>Feb 2020 - Jul 2023</p>
						</div>
						<div className={styles["desc"]}>
							<h1>Frontend Developer | Team Lead · Awesome CX</h1>
							<p>
								Boosted productivity by streamlining workflows, mentoring team
								members (40% promotion rate), and enhancing project delivery
								through research and collaboration. Resolved complex issues
								using domain expertise in Honey products, led workflow rollouts,
								and drove revenue growth by integrating and optimizing
								Honey/PayPal systems.
							</p>
							<ul className={styles["tech-stack"]}>
								<li>HTML</li>
								<li>Javascript</li>
								<li>Jira</li>
								<li>JQL</li>
							</ul>
						</div>
					</li>
					<li>
						<div className={styles["backdrop"]}></div>
						<div className={styles["years"]}>
							<p>Aug 2018 - Feb 2020</p>
						</div>
						<div className={styles["desc"]}>
							<h1>Full Stack Web Developer · Flatworld Solutions</h1>
							<p>
								Built engaging website interfaces with HTML, CSS, JS, and
								frontend libraries, while integrating Laravel with GraphQL and
								SQL for seamless data handling. Applied OOP principles for
								scalable code and maintained transparent client communication,
								incorporating feedback to exceed expectations and deliver
								successful project outcomes.
							</p>
							<ul className={styles["tech-stack"]}>
								<li>HTML</li>
								<li>CSS</li>
								<li>Javascript</li>
								<li>Blade</li>
								<li>Bootstrap</li>
								<li>jQuery</li>
								<li>Laravel</li>
								<li>MySQL</li>
								<li>GraphQL</li>
								<li>Git</li>
								<li>Gitlab</li>
								<li>React</li>
								<li>Vue</li>
								<li>OAuth</li>
							</ul>
						</div>
					</li>
				</ol>

				<div style={{ marginTop: "3rem" }}>
					<a
						className={styles["resume-link"]}
						target="__blank"
						href="/resume.pdf"
					>
						View Full Resume
					</a>
				</div>
			</section>

			<section id="projects" className={styles["projects-section"]}>
				<div className={styles["project-item"]}>
					<a
						href="#link-1"
						className={styles["backdrop"]}
						onClick={() => handleOpenModal()}
					></a>
					{/* <div className={styles["backdrop"]}></div> */}
					<div class={styles["project-image"]}>
						<Image
							src="/funnel.png"
							width={150}
							height={80}
							alt="Project Thumbnail"
							style={{ borderRadius: "0.25rem" }}
						/>
					</div>
					<div className={styles["project-details"]}>
						<h1>Full Stack Web Developer · Flatworld Solutions</h1>
						<p>
							Built engaging website interfaces with HTML, CSS, JS, and frontend
							libraries, while integrating Laravel with GraphQL and SQL for
							seamless data handling. Applied OOP principles for scalable code
							and maintained transparent client communication, incorporating
							feedback to exceed expectations and deliver successful project
							outcomes.
						</p>
					</div>
				</div>
				<div className={styles["project-item"]}>
					<a
						href="#link-2"
						className={styles["backdrop"]}
						onClick={() => handleOpenModal()}
					></a>
					{/* <div className={styles["backdrop"]}></div> */}
					<div class={styles["project-image"]}>
						<Image
							src="/funnel.png"
							width={150}
							height={80}
							alt="Project Thumbnail"
							style={{ borderRadius: "0.25rem" }}
						/>
					</div>
					<div className={styles["project-details"]}>
						<h1>Full Stack Web Developer · Flatworld Solutions</h1>
						<p>
							Built engaging website interfaces with HTML, CSS, JS, and frontend
							libraries, while integrating Laravel with GraphQL and SQL for
							seamless data handling. Applied OOP principles for scalable code
							and maintained transparent client communication, incorporating
							feedback to exceed expectations and deliver successful project
							outcomes.
						</p>
					</div>
				</div>
			</section>

			{isOpen && <Modal handleClose={handleOpenModal} />}
		</React.Fragment>
	);
}
