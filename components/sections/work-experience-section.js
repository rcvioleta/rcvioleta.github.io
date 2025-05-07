import { useCallback, useState } from "react";

import styles from "./work-experience-section.module.css";

import { companies } from "../../config/experience-settings";

const JobDescription = ({ promotions, experiences }) => {
	return (
		<>
			{promotions?.length !== 0 &&
				promotions.map(({ id, title }) => (
					<p key={id} className={styles["bold-text underlined-text"]}>
						{title}
					</p>
				))}
			{experiences.map(({ id, text }) => (
				<p key={id} className={styles["company-description__item"]}>
					{text}
				</p>
			))}
		</>
	);
};

export default function WorkExperienceSection() {
	const [activeSection, setActiveSection] = useState("awesome-cx");

	const renderJobDescription = useCallback(() => {
		const index = companies.findIndex(
			(company) => company.id === activeSection
		);
		const job = companies[index];

		if (job) {
			const { items, promotions } = job.description;

			const props = {
				experiences: items,
				promotions: promotions.length ? promotions : [],
			};

			return (
				<div className={styles["company-description"]}>
					<h2>{job.title}</h2>
					<div>{job.duration}</div>
					<JobDescription {...props} />
				</div>
			);
		}
	}, [activeSection]);

	function sectionClickHandler(section) {
		setActiveSection(section);
	}

	return (
		<section
			id="work-experience"
			className={styles["work-experience-container"]}
		>
			<h1 className="section-title">Work / Experience</h1>
			<div className={styles["company-container"]}>
				<ul className={styles["company-list"]}>
					{companies.map(({ id, name }) => (
						<li key={id}>
							<a
								className={activeSection === id ? "active" : ""}
								onClick={() => sectionClickHandler(id)}
							>
								{name}
							</a>
						</li>
					))}
				</ul>
				<div className={styles["company-description__container"]}>
					{renderJobDescription()}
				</div>
			</div>
		</section>
	);
}
