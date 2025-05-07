import Image from "next/image";

import styles from "./about-section.module.css";

import { image, paragraph, techStack } from "../../config/about-settings";

export default function AboutSection() {
	return (
		<section id="about" className={styles["about-container"]}>
			<h1 className="section-title">About Me</h1>
			<div id={styles["about__content"]}>
				<div>
					{paragraph.map(({ id, text }) => (
						<p key={id}>{text}</p>
					))}
					<ul className={styles["about__tech-stack"]}>
						{techStack.map((stack, index) => (
							<li key={index}>{stack}</li>
						))}
					</ul>
				</div>
				<div className={styles["profile-picture__container"]}>
					<div className={styles["profile-picture__wrapper"]}>
						<Image
							src={image.src}
							className={styles["profile-picture__image"]}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
